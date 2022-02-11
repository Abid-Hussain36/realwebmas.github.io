import { useState } from "react";
import {Link} from "react-router-dom";

const Trivia = () => {
  const questions = [
		{
			questionText: 'How many meals do people in Spain typically have in a day?',
			answerOptions: [
				{ answerText: 'Two', isCorrect: false },
				{ answerText: 'Three', isCorrect: false },
				{ answerText: 'Four', isCorrect: false },
				{ answerText: 'Five', isCorrect: true },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
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