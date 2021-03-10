const INITIAL_STATE={
    firstName:'',
    lastName:'',
    isAutenticated:false,
}

export const reducer1 = (state=INITIAL_STATE, actions) =>{
    switch(actions.type){
        case 'LOGIN':
            return{
                firstName: actions.payload.firstName,
                lastName:actions.payload.lastName,
                isAutenticated:true,
            }

        case 'LOGOUT':
            return{
                firstName:'',
                lastName:'',
                isAutenticated:false,
            }

            default: return state
    }
}