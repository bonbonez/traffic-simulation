import * as ActionTypes from 'actions/types';
import * as Consts      from 'constants/simulator';

function getPair(orient, mode, active) {
  return {
    name: orient,
    active: active,
    items: [{
      position: (orient === Consts.LIGHT_PAIR_VER ? Consts.LIGHT_POS_TOP : Consts.LIGHT_POS_LEFT),
      mode: mode
    },{
      position: (orient === Consts.LIGHT_PAIR_VER ? Consts.LIGHT_POS_BOTTOM : Consts.LIGHT_POS_RIGHT),
      mode: mode
    }]
  };
}

const pairs = [
  getPair(Consts.LIGHT_PAIR_HOR, Consts.LIGHT_MODE_GREEN, true),
  getPair(Consts.LIGHT_PAIR_VER, Consts.LIGHT_MODE_RED, false)
];

function togglePairsActiveState(state) {
  state.lightPairs.forEach((p, i) => {
    pairs[i].active = !pairs[i].active;
  });
  return state;
}

function setActiveLightsMode(state, mode) {
  state.lightPairs.filter((lp) => {
    return lp.active === true;
  })[0].items.forEach(i => i.mode = mode);
  return state;
}

const initialState = {
  enabled: false,
  lightPairs: pairs
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TRAFFIC_TOGGLE:
      return {
        ...state,
        enabled: !state.enabled
      };

    case ActionTypes.TOGGLE_ACTIVE_LIGHT_PAIR:
      return togglePairsActiveState({...state});

    case ActionTypes.TURN_ACTIVE_LIGHT_PAIR_TO_RED:
      return setActiveLightsMode({...state}, Consts.LIGHT_MODE_RED);

    case ActionTypes.TURN_ACTIVE_LIGHT_PAIR_TO_ORANGE:
      return setActiveLightsMode({...state}, Consts.LIGHT_MODE_ORANGE);

    case ActionTypes.TURN_ACTIVE_LIGHT_PAIR_TO_GREEN:
      return setActiveLightsMode({...state}, Consts.LIGHT_MODE_GREEN);

    default:
      return state;
  }
};