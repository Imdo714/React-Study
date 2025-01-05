import React, { useState, useEffect  } from 'react'

function QuestionScreen() {
    const questions = [
        { question: '당신은 새로운 사람들과의 만남을 즐기나요?', type: 'E' },
        { question: '혼자 시간을 보내는 것을 좋아하나요?', type: 'E' },
        { question: '당신은 계획을 세우고 따르는 것을 선호하나요?', type: 'I' },
        { question: '즉흥적인 활동을 선호하나요?', type: 'I' },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 질문 인덱스
    const [answers, setAnswers] = useState({ E: 0, I: 0 }); // 결과값 
    const [isFinished, setIsFinished] = useState(false); // 결과가 출력되었는지 여부
    
    const chooseAnswer = (choice) => {
        console.log('questions', questions[currentQuestionIndex]);
        console.log('choice', choice);

        // 현제 질문 인덱스 받아줘 
        const currentQuestion = questions[currentQuestionIndex];

        // A가 오면 answers 복사해서 현재 type이 E면 answers에 E 1증가
        if(choice == 'A'){
            setAnswers( (prevAnswers) => ({
                    ...prevAnswers,
                    [currentQuestion.type]: prevAnswers[currentQuestion.type] + 1,
                })
            );
        }

        // 다음 질문으로 이동하거나 결과 출력
        // 마지막 질문은 랜더링 하기전에 결과가 먼저 나와서 수정해야 함 
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // alert(`테스트 완료! E: ${answers.E}, J: ${answers.J}`);
            // console.log('E:', answers.E);
            // console.log('J:', answers.J);
            setIsFinished(true); // 모든 질문이 끝났으면 결과 화면으로 넘어감
        }
    };

    useEffect(() => {
        if (isFinished) {
            alert(`테스트 완료! E: ${answers.E}, I: ${answers.I}`);
            console.log('E:', answers.E);
            console.log('I:', answers.I);
        }
    }, [isFinished, answers]); // isFinished나 answers가 바뀔 때마다 실행됨


  return (
    <div id="question-container">
        <p id="question"> { questions[currentQuestionIndex].question } </p>
        <div class="answers">
            <button class="mbti-btn" onClick={() => chooseAnswer('A')}>Agree</button>
            <button class="mbti-btn" onClick={() => chooseAnswer('B')}>Disagree</button>
        </div>
    </div>
  )
}

export default QuestionScreen