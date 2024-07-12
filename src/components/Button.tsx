import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode,
    className?: string
    href?: string

    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Button: React.FC<ButtonProps> = ({
    children,
    href = '',
    className = '',
    onClick=() => {}
}) => {
    return (
        <Link
            href={href}
            className={`text-center font-semibold rounded ${className}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default Button;
