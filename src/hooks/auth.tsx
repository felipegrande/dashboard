import React, {createContext, useState, useContext} from "react";


interface IAuthProps{
    logged?: boolean;
    signIn?( email: string, password: string): void;
    sigOut?(): void;
    children?: React.ReactNode;
}


const AuthContext = createContext<IAuthProps>({} as IAuthProps);


const AuthProvider: React.FC<IAuthProps> = ({ children  }) => {


    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged');

        return !!isLogged;
    });


    const signIn = (email: string, password: string) => {
        if(email === 'Felipe@gmail.com' || password === '123'){
            localStorage.setItem('@minha-carteira:logged', 'true')
            setLogged(true)
        }else{
            alert('Senha ou usuário Inválidos')
        }

    }

    const sigOut = () =>{
        localStorage.removeItem('@minha-carteira:logged')
        setLogged(false)
    }

    return (
        <AuthContext.Provider value={{logged  , signIn, sigOut }}>
            {children}
        
        </AuthContext.Provider>
    )

}
 function useAuth(): IAuthProps{
    const context = useContext(AuthContext)

    return context
 }

 export  { AuthProvider ,  useAuth }



 