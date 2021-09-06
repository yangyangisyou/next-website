import toast from 'react-hot-toast';

const initialState = {
  examlist: [],
  isLoading: {
    examlist: true,
  },
  questions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_EXAM_LIST': {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          examlist: true,
        },
      };
    }
    case 'EXAM_LIST': {
      toast.success('載入列表');
      return {
        ...state,
        examlist: [
          ...state.examlist,
          ...action.payload,
        ],
        isLoading: {
          ...state.isLoading,
          examlist: false,
        },
      };
    }
    case 'EXAM_LIST_FAILURE': {
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
    case 'EXAM_QUESTIONS': {
      return {
        ...state,
        questions: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
