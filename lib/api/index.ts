const API = 'http://localhost:3001';

const endpoint = (path: string): string => API + path;

const post = async (path: string, data: any) => {
    return fetch(endpoint(path), {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        method: 'POST'
    }).then(res => res.json());
}

export const login = async (data: any) => {
    return post('/auth/login', data);
};

export const signup = async (data: any) => {
    return post('/auth/signup', data);
};
