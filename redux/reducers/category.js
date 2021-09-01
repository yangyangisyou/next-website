import toast from 'react-hot-toast';

const initialState = {
  examlist: [],
  isLoading: {
    examlist: true,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_LOAD_EXAM_LIST': {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          examlist: true,
        },
      };
    }
    case 'LOAD_EXAM_LIST': {
      toast.success('載入列表');
      return {
        ...state,
        examlist: action.payload,
        isLoading: {
          ...state.isLoading,
          examlist: false,
        },
      };
    }
    case 'LOAD_EXAM_LIST_FAILURE': {
      const { error } = action.payload;
      toast.success(error);
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          examlist: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
