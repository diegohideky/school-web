import Router from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { login } from '../../lib/api';

const useLogin = () => {
    const { setUser, setToken } = useContext(UserContext);

    const handleLogin = async (data: any) => {
        try {
            const payload = await login(data);

            console.log({ payload });

            setToken(payload.token);
            setUser(payload.user);

            Router.push('/');
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    return {
        handleLogin
    };
};

export default useLogin;
