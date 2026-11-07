interface BadgeProps {
    textContent: string;
}
const Badge = (props: BadgeProps) => {
    const { textContent } = props;
    return <span className="badge">{textContent}</span>;
};

export default Badge;
