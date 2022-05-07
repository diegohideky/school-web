import Router from 'next/router';
import { signup } from '../../lib/api';

const useLogin = () => {
    const handleSignup = async (data: any) => {
        try {
            await signup(data);
            alert('Account created!!!');
            Router.push('/login');
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    }

    return {
        handleSignup
    };
};

export default useLogin;
