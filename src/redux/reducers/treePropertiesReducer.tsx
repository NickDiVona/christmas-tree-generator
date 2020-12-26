import * as types from '../actionTypes';

interface ActionTypes {
  type: string;
  payload: {
    treeSections: number;
    sectionHeight: number;
  };
}

export interface TreePropertiesTypes {
  [state: string]: {
    treeSections: number;
    sectionHeight: number;
  };
}

const INITIAL_STATE = { treeSections: 3, sectionHeight: 4 };

export const treePropertiesReducer = (
  state = INITIAL_STATE,
  action: ActionTypes
) => {
  switch (action.type) {
    case types.SET_TREE_CONFIG:
      return action.payload;

    default:
      return state;
  }
};
