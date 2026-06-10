interface Props {
    subtitle: string;
    title: string;
}

const Title = (props: Props) => {
    const { subtitle, title } = props;

    return (
        <div className="title">
            {subtitle ? <h2>{subtitle}</h2> : null}
            {title ? <p>{title}</p> : null}
        </div>
    );
};

export default Title;
