import { useState } from "react";
import {Link} from "react-router-dom";

const Trivia = () => {
  const questions = [
		{
			questionText: 'What is the most common language in South Africa?',
			answerOptions: [
				{ answerText: 'Swahili', isCorrect: false },
				{ answerText: 'English', isCorrect: false },
				{ answerText: 'French', isCorrect: false },
				{ answerText: 'Zulu', isCorrect: true },
			],
		},
		{
			questionText: 'How many official languages does India have?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: true },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'What is the largest ethnic group in Mexico?',
			answerOptions: [
				{ answerText: 'Mestizo', isCorrect: true },
				{ answerText: 'Amerindian', isCorrect: false },
				{ answerText: 'White', isCorrect: false },
				{ answerText: 'Black', isCorrect: false },
			],
		},
    {
			questionText: 'What country is Lapinha celebrated in?',
			answerOptions: [
				{ answerText: 'Mexico', isCorrect: false },
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Brazil', isCorrect: true },
				{ answerText: 'Mali', isCorrect: false },
			],
		},
		{
			questionText: 'What is the largest ethnic group in Fiji?',
			answerOptions: [
				{ answerText: 'White', isCorrect: false },
				{ answerText: 'Rotuman', isCorrect: false },
				{ answerText: 'Indo-Fijian', isCorrect: false },
				{ answerText: 'Itaukei', isCorrect: true },
			],
		}
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }

  return (
    <div className='outerAnswerButton'>
			{showScore ? (
        <>
          <div className='endScore'>You scored {score} out of {questions.length}!</div>
          <Link to="/"><button className="endQuizButton">Go Back to Home</button></Link>
        </>
			) : (
				<>
					<div className='questionSection'>
						<div className='questionCounter'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='questionText'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answerSection'>
            {questions[currentQuestion].answerOptions.map((answerOption) => 
            <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect) } className='answerButton'>{answerOption.answerText}</button>
            )}
					</div>
				</>
			)}
		</div>
  );
}
 
export default Trivia;