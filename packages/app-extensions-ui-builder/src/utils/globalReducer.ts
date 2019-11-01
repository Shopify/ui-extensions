type Action = {
  type: ActionTypes;
  tree: any;
};

enum ActionTypes {
  updateTree = 'updateTree',
}

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'updateTree':
      return {
        ...state,
        tree: action.tree,
      };

    default:
      return state;
  }
};

export default reducer;
