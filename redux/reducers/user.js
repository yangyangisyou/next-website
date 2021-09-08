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
      const { payload } = action;
      toast.success(`歡迎 ${payload.userName} 加入 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`);
      return {
        ...state,
        userData: {
          ...state.userData,
          ...payload,
        },
      };
    }
    case 'USER_HAS_LOGIN': {
      toast.success('歡迎回來 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧');
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    }
    case 'USER_HAS_LOGOUT': {
      toast.success('要記得回來喔。･ﾟ･(つд`ﾟ)･ﾟ･');
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
