export type User = {
    firstName: string,
    lastName: string
}

let user: User = {
    firstName: '',
    lastName: ''
}

export const setUserData = (data: User) => {
    user = { ...data }
}

export const getUserData = () => {
    return user
}





