interface Props {
    btnOnClick: () => void;
    children: any;
    htmlClass?: string;
    isDisabled?: boolean;
}

const Button = (props: Props) => {
    const { btnOnClick, children, htmlClass, isDisabled } = props;

    if (!children) console.warn("children required");

    return (
        <button className={`btn-primary ${htmlClass}`} onClick={btnOnClick} disabled={isDisabled}>
            {children}
        </button>
    );
};

export default Button;
