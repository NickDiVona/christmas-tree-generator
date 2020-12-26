import * as types from './actionTypes';

export const setTreeConfig = (treeSections: number, sectionHeight: number) => {
  return {
    type: types.SET_TREE_CONFIG,
    payload: {
      treeSections,
      sectionHeight
    }
  };
};
