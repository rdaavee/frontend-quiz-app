import { useParams } from "react-router-dom";

const QuizPage = () => {

    const params = useParams();

    console.log(params);

    const quizType = params?.quizType;
    return (
        <div>
            Quiz Page {quizType}
        </div>
    )
}

export default QuizPage
