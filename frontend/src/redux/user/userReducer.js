const initialState = {
  loading: false,
  account: null,
  web3: null,
  errorMsg: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        web3: action.payload.web3,
      };
    case "CONNECTION_FAILED":
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };

    case "DISCONNECT":
      return {
        loading: false,
        account: null,
        web3: null,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default userReducer;
