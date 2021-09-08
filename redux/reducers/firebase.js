import toast from 'react-hot-toast';

const initialState = {
  examlist: [],
  isLoading: {
    examlist: true,
    questions: true,
  },
  questions: [{
    no: 0,
    options: [],
    desc: '',
    ans: '',
  }],
  title: [],
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
    case 'REQUEST_EXAM_QUESTIONS': {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          questions: true,
        },
      };
    }
    case 'EXAM_QUESTIONS': {
      const { exams, title } = action.payload;
      return {
        ...state,
        title,
        questions: exams,
        isLoading: {
          ...state.isLoading,
          questions: false,
        },
      };
    }
    case 'EXAM_QUESTIONS_FAILURE': {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          questions: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
