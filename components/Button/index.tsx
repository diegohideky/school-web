import { Button as AntButton } from 'antd';


interface ButtonProps {
    text: string;
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <AntButton type="primary" onClick={onClick}>{text}</AntButton>
    );
}

export default Button;
