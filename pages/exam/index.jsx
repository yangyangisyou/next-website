import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import PageContainer from '../../shared/containers/Page';
import { loadExamQuestions } from '../../redux/actions/firebase';
import Exam from '../../components/exam';

const ListPage = ({ router }) => {
  const dispatch = useDispatch();
  const catState = useSelector((state) => state.firebase);
  const [indexOfQuestions, setIndexOfQuestions] = useState(0);
  const [numOfCorrect, setNumOfCorrect] = useState(0);
  const title = useMemo(() => catState.title, [catState.title]);
  const questions = useMemo(() => catState.questions, [catState.questions]);
  const isLastExam = useMemo(() => indexOfQuestions === questions.length - 1, [indexOfQuestions, questions]);
  const isLoadingExam = useMemo(() => catState.isLoading.questions, [catState.isLoading]);
  const onSubmitSingleExam = useCallback((selectedOption) => {
    if (selectedOption === questions[indexOfQuestions].ans) {
      setNumOfCorrect((prev) => prev + 1);
      toast.success('答對了');
    } else {
      toast.error('繼續加油');
    }
    setIndexOfQuestions((prev) => prev + 1);
  }, [questions, indexOfQuestions, numOfCorrect]);

  useEffect(() => {
    if (router.isReady) {
      dispatch(loadExamQuestions());
    }
  }, [router.query]);

  return (
    <PageContainer>
      <h1>{title}</h1>
      <Exam
        key={questions[indexOfQuestions].no}
        question={questions[indexOfQuestions]}
        onSubmit={onSubmitSingleExam}
        isLastExam={isLastExam}
        isLoadingExam={isLoadingExam}
      />
      {/* <button type="button">開始</button> */}
    </PageContainer>
  );
};

export default ListPage;
