import { Card as AntCard } from 'antd';

import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import styles from './Card.module.scss';

interface CardProps {
    link: string;
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ link, title, text }) => {
    const { user } = useContext(UserContext);

    return (
        <AntCard title={title} extra={<a href={link}>More</a>} style={{ width: 300 }}>
            <p>{text}</p>
            {user?.name && <h1>{user.name}</h1>}
        </AntCard>
    );
}

export default Card;
