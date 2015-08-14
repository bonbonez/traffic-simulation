let timeoutHandler           = null;
let minTimeUnit              = 1000;
let timePassedAfterLastState = 0;
let currentState             = null;
let states                   = [];
let enabled                  = false;

function tick() {
  if (!enabled) {
    return clearTimeout(timeoutHandler);
  }
  timeoutHandler = setTimeout(() => {
    timePassedAfterLastState += minTimeUnit;
    checkIfHasToMakeStateTransition();
  }, minTimeUnit);
}

function checkIfHasToMakeStateTransition() {
  if (timePassedAfterLastState >= currentState.duration) {
    timePassedAfterLastState = 0;
    currentState = getNextState();
    currentState.callback();
  }

  tick();
}

function getNextState() {
  return states.filter(s => s.state === currentState.to)[0];
}

function registerState(state) {
  if (Array.isArray(state)) {
    return state.forEach(action => registerState(action));
  }

  states.push(state);

  if (!currentState) {
    currentState = state;
  }
}


function start() {
  if (enabled) {
    return;
  }

  enabled = true;
  tick();
}

function stop() {
  clearTimeout(timeoutHandler);
  enabled = false;
}

function clearStates() {
  stop();
  states.length = 0;
  states = [];
}

export default {
  start,
  stop,
  registerState,
  clearStates
}