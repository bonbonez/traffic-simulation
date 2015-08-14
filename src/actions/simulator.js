import * as ActionTypes from 'actions/types';

export function toggle() {
  return {
    type: ActionTypes.TRAFFIC_TOGGLE
  }
}

export function toggleActiveLightPair() {
  return {
    type: ActionTypes.TOGGLE_ACTIVE_LIGHT_PAIR
  }
}

export function setTrafficStateRed() {
  return {
    type: ActionTypes.TURN_ACTIVE_LIGHT_PAIR_TO_RED
  }
}
export function setTrafficStateOrange() {
  return {
    type: ActionTypes.TURN_ACTIVE_LIGHT_PAIR_TO_ORANGE
  }
}
export function setTrafficStateGreen() {
  return {
    type: ActionTypes.TURN_ACTIVE_LIGHT_PAIR_TO_GREEN
  }
}
