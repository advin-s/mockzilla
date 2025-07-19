export type LoginState = LoggingInState | LoginSuccess | LoginFailed

type LoggingInState = {
    isLoading:boolean
}

type LoginSuccess = {
    data:Record<string,string | number>
    isLoading:boolean,
}

type LoginFailed = {
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

