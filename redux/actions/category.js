export function loadExamList(numOfPage = 1) {
  return {
    type: 'REQUEST_LOAD_EXAM_LIST',
    payload: {
      numOfPage,
    },
  };
}
