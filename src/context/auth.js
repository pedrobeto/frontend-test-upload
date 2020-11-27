import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [searchedUser, setSearchedUser] = useState(null);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = localStorage.getItem('app:user');
            const storagedToken = localStorage.getItem('app:token');
            
            console.log(storagedUser, storagedToken);

            if(storagedToken && storagedUser) {
                setUser(JSON.parse(storagedUser));
            }
        }

        loadStorageData();
    }, []);

    async function signIn(email, password) {
        try {
            const response = await api.post('user/login', {
                email,
                password,
            });

            setUser(response.data.user);

            const { token, user } = response.data;

            localStorage.setItem('app:token', token);
            localStorage.setItem('app:user', JSON.stringify(user));

            api.defaults.headers.Authorization = `${token}`;

            console.log(response.data);

        } catch (err) {
            alert('Erro na autenticação, tente novamente.');
        }    
    }

    async function signOut() {
        setUser(null);

        localStorage.removeItem('app:token');
        localStorage.removeItem('app:user');
    }
    
    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, searchedUser, setSearchedUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;