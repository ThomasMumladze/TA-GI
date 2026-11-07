interface buttonProps {
    textContent: string;
    btnClassName: string;
}

const Button = (props: buttonProps) => {
    const { btnClassName, textContent } = props;
    return <button className={`app--btn ${btnClassName}`}>{textContent}</button>;
};

export default Button;
