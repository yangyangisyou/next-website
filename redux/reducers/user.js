import toast from 'react-hot-toast';

const initialState = {
  googleId: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      toast.success('登入成功');
      return {
        ...state,
        googleId: action.payload.profileObj.googleId,
      };
    }
    case 'USER_HAS_LOGIN': {
      toast.success('已登入');
      return {
        ...state,
        googleId: action.payload.googleId,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
