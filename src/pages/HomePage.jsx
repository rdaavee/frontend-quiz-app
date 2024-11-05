import quizData from "../assets/data.json";
import QuizSelectionItem from "../components/QuizSelectionItem";

const HomePage = () => {
    const quizzes = quizData?.quizzes || [];

    return (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
            <div className="flex flex-col gap-4 lg:gap-12 lg:flex-1">
                <h1 className="flex flex-col gap-1 text-[2.5rem] md:text-5xl lg:text-6xl text-darkNavy dark:text-white">
                    <span>Welcome to the</span>
                    <span className="font-bold">Frontend Quiz</span>
                </h1>
                <p className="text-sm md:text-xl italic">Pick a subject to get started.</p>
            </div>
            <div className="flex flex-col gap-5 lg:flex-1">
                {
                    quizzes?.map(quiz => {
                        return (
                            <QuizSelectionItem
                                key={quiz.title}
                                icon={quiz.icon}
                                title={quiz.title}
                                iconBackground={quiz.iconBackground}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default HomePage
