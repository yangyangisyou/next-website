import toast from 'react-hot-toast';

const initialState = {
  examlist: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }],
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
