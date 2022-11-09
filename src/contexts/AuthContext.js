import { createContext, useState } from "react";

const AuthContext = createContext({})

export default AuthContext;

export const AuthContextProvider = function({children}){
    let initAuth={
        authoried: false, //有沒有登入
        sid:0,
        account: '',
        token: '',
    }

// 取得目前狀態
const str = localStorage.getItem('auth')
if(str){
    const localAuth = JSON.parse(str)
    if(localAuth && localAuth.token){
        initAuth = {...localAuth, authoried:true}
    }
}
const [myAuth, setMyAuth] = useState(initAuth);

    // TODO: 取得目前狀態
    // 2. 登入: 成功, 失敗
    // TODO: 登出
    return (
        <AuthContext.Provider value={{myAuth, setMyAuth}}>
            {children}
        </AuthContext.Provider>

    )
}