export function loadExamList(numOfPage = 1) {
  return {
    type: 'REQUEST_EXAM_LIST',
    payload: {
      numOfPage,
    },
  };
}

export function loadExamQuestions(examId) {
  return {
    type: 'REQUEST_EXAM_QUESTIONS',
    payload: {
      examId,
    },
  };
}

export function cleanExamList() {
  return {
    type: 'RESET_EXAM_LIST',
  };
}
