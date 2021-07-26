export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finished developing...
  // token:
  //   "BQA5WEUK7yKjOmJOC8kOmL4TyWC2KZjXz9O1nTPLWXVjy_2SU79KshOqJv1r3kq4_ynrv8kCwDXNRnzjpimwIRvwXVfVtkAaFt79OtrMThW5pqMVpONxfJN_VlxLvzUz_Ka74J2zTxpLoYVKiSvnb0-jZ10Mx_ynIp2kP38G--LnNXrS",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
