export const Button = ({buttonText, buttonStyle}) => {
    return (
        <button className={`${buttonStyle} px-9.25 py-3.5 w-47.5 font-secondary text-size-l1 rounded-[50px] focus:border-2 justify-center items-center flex`}>
            {buttonText}
        </button>
    )
}