import toast from 'react-hot-toast';

const initialState = {
  userData: {
    googleId: '',
    userName: '',
    avatar: '',
    email: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      toast.success('登入成功');
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    }
    case 'USER_HAS_LOGIN': {
      toast.success('已登入');
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    }
    case 'USER_HAS_LOGOUT': {
      toast.success('已登出');
      return {
        ...state,
        userData: {
          googleId: '',
          userName: '',
          avatar: '',
          email: '',
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
