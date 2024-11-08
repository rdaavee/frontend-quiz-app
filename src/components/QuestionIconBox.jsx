const QuestionIconBox = ({ title, icon, backgroundCode }) => {

    return (
        <div
            className="rounded-lg h-12 w-12 flex items-center justify-center text-center p-2"
            style={{ backgroundColor: backgroundCode }}>
            <img
                className="w-full h-full object-contain"
                src={icon}
                alt={title}
            />
        </div>
    )
}

export default QuestionIconBox
