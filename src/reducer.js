export const initialState = {
  visibleModal: {
    addArticle: false,
    fullPost: false,
  },
  currentPost: {},
  articles: [
    {
      id: 1,
      title: 'Статья',
      text:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image:
        'https://images.unsplash.com/photo-1611776917334-00a963a1e908?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        visibleModal: {
          ...state.visibleModal,
          [action.payload.name]: true,
        },
        currentPost: action.payload.data,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        currentPost: {},
        visibleModal: {
          ...state.visibleModal,
          [action.payload.name]: false,
        },
      };

    case 'ADD_ARTICLE':
      return {
        articles: [
          ...state.articles,
          {
            id: Math.random().toString(36).substr(2, 6),
            ...action.payload,
          },
        ],
        visibleModal: false,
      };

    case 'REMOVE_ARTICLE':
      return {
        ...state,
        articles: state.articles.filter((obj) => obj.id !== action.payload),
      };

    default:
      return state;
  }
}
