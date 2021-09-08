export function loadExamList(numOfPage = 1) {
  return {
    type: 'REQUEST_EXAM_LIST',
    payload: {
      numOfPage,
    },
  };
}

export function loadExamQuestions() {
  return {
    type: 'REQUEST_EXAM_QUESTIONS',
  };
}
