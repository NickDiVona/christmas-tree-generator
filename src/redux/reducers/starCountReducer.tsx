interface ActionTypes {
  type: string;
  payload: string;
}

export interface StarCountTypes {
  [state: string]: {
    starCount: string[];
  };
}

const INITIAL_STATE: string[] = [];
export const starCountReducer = (
  state = INITIAL_STATE,
  action: ActionTypes
) => {
  switch (action.type) {
    default:
      return state;
  }
};
