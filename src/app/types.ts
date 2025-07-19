import { AuthData } from "./interfaces"

export type LoginState = {
    isLoading:boolean,
    data:AuthData | null,
    errorMessage:loginError | null
}

export type loginError = {
    message:string
}
export type LoginFailed = {
    errorMessage:Record<string,string | number>
    isLoading:boolean,
}

export type AppStateInterface = {
    login:LoginState
} 

export type LoginData = {
    username:string | undefined,
    password:string | undefined
}

