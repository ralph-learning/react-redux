function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.idx),
        ...state.slice(action.idx + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.type !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  };
  return state;
}

export default comments;
