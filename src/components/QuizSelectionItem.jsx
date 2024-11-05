import QuestionIconBox from "./QuestionIconBox"

const QuizSelectionItem = ({ title, icon, iconBackground }) => {
    return (
        <div className="bg-white dark:bg-navy flex items-center gap-5 shadow-md rounded-3xl p-3 lg:p-5">
            <QuestionIconBox
                title={title}
                icon={icon}
                backgroundCode={iconBackground}
            />
            <p className="flex-1 font-bold lg:text-2xl">{title}</p>
        </div>
    )
}

export default QuizSelectionItem
