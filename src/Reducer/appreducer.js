
const initialState = {
    users: []
}

const appreducer = (state = initialState, action) => {

    // if (action.type === 'users'){

    //     let updatedUsers = action.res;
    //     return {
    //         ...state,
    //         users : updatedUsers

    //     }
    //  }
    //  return state;

    const  updateObject = (oldObject, updatedProperties) => {
        return {
            ...oldObject,
            ...updatedProperties
        };
    };


    if (action.type === 'delete_user') {

        let newUsers = state.users.filter(user => {
            return user.id !== action.id
        });
        return {
            ...state,
            users: newUsers
        }
    }
    else if (action.type === 'users') {
    
        let updatedUsers = action.res;
        return  updateObject( state, {  users : updatedUsers } );
    }

    // {
    //     ...state,
    //    users : updatedUsers
    // }
    return state;
}

export default appreducer;
