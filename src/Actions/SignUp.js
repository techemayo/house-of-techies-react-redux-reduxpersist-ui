const handleName = (name)=> {
return {
    type:"handleName",
    payload:
        name

}
}
const handleUserName = (useranme)=> {
    return {
        type:"handleUserName",
        payload:
            useranme
      
    }
    }

    const handlePassword = (password)=> {
        return {
            type:"handlePassword",
            payload:password
        }
    }

export {
    handlePassword,handleUserName,handleName
}