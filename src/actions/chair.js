import { REMOVE_SELECTED_CHAIR, SELECT_CHAIR } from "../constants";

export function selectChair(payload) {
  return {
    type: `chair/${SELECT_CHAIR}`,
    payload,
  };
}

export function removeSelectedChair(payload) {
  return {
    type: `chair/${REMOVE_SELECTED_CHAIR}`,
    payload,
  };
}
