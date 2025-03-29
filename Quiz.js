function Quiz({ quiz }) {
    try {
        const [selectedAnswers, setSelectedAnswers] = React.useState({});
        const [submitted, setSubmitted] = React.useState(false);
        const [score, setScore] = React.useState(null);

        const handleAnswerSelect = (questionId, answerId) => {
            if (submitted) return;
            setSelectedAnswers(prev => ({
                ...prev,
                [questionId]: answerId
            }));
        };

        const handleSubmit = async () => {
            try {
                const results = await submitQuiz(quiz.id, selectedAnswers);
                setScore(results.score);
                setSubmitted(true);
            } catch (error) {
                console.error('Error submitting quiz:', error);
            }
        };

        return (
            <div data-name="quiz-section" className="space-y-8">
                <h3 className="text-xl font-bold mb-4">Quiz: {quiz.title}</h3>
                
                {quiz.questions.map(question => (
                    <div key={question.id} className="space-y-4">
                        <p className="font-semibold">{question.text}</p>
                        <div className="space-y-2">
                            {question.options.map(option => (
                                <div
                                    key={option.id}
                                    className={`quiz-option ${
                                        selectedAnswers[question.id] === option.id ? 'selected' : ''
                                    } ${
                                        submitted && option.id === question.correctAnswer
                                            ? 'bg-green-100 border-green-500'
                                            : submitted && selectedAnswers[question.id] === option.id
                                            ? 'bg-red-100 border-red-500'
                                            : ''
                                    }`}
                                    onClick={() => handleAnswerSelect(question.id, option.id)}
                                >
                                    {option.text}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {!submitted ? (
                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={handleSubmit}
                        disabled={Object.keys(selectedAnswers).length !== quiz.questions.length}
                    >
                        Submit Quiz
                    </button>
                ) : (
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <p className="text-lg font-semibold">
                            Your Score: {score}%
                        </p>
                        <p className="text-gray-600 mt-2">
                            {score >= 70 ? 'Congratulations! You passed!' : 'Keep practicing!'}
                        </p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('Quiz component error:', error);
        reportError(error);
        return null;
    }
}
