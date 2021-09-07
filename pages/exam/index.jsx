import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../../shared/containers/Page';
import { loadExamQuestions } from '../../redux/actions/category';
import Exam from '../../components/exam';

const ListPage = ({ router }) => {
  const dispatch = useDispatch();
  const catState = useSelector((state) => state.category);
  const questions = useMemo(() => catState.questions, [catState.questions]);
  const [indexOfQuestions, setIndexOfQuestions] = useState(0);

  const onSubmitSingleExam = useCallback(() => {
    setIndexOfQuestions((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      dispatch(loadExamQuestions());
    }
  }, [router.query]);

  return (
    <PageContainer>
      <h1>XXXXXX 測驗</h1>
      <Exam
        question={questions[indexOfQuestions]}
        onSubmit={onSubmitSingleExam}
      />
      {/* <button type="button">開始</button> */}
    </PageContainer>
  );
};

export default ListPage;
