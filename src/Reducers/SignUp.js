
const nameReducer = (state="",action)=>{
    switch(action.type){
        case 'handleName':
            state=action.payload
            return state
        default: 
            return state
    }
}
const userNameReducer = (state="",action)=>{
    switch(action.type){
        case 'handleUserName':
            state=action.payload
            return state
        default: 
            return state
    }
}
const passwordReducer = (state="",action)=>{
    switch(action.type){
        case 'handlePassword':
            state=action.payload
            return state
        default: 
            return state
    }
}

export {nameReducer,userNameReducer,passwordReducer}