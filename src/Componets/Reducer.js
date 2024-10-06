export var defaultState={
    userName:"",
    password:"",
    address:""
}
// var actions={
//     type:"",
//     userName:"dndlfn",
//     password:"jbdjfbdf"
// }
export function ValuesReducer(state,actions){
        if(actions.type === "VALUES"){
            defaultState={...defaultState,userName:actions.userName,password:actions.password
                ,address:actions.address
            };
            return defaultState;
        }
        else{
            return defaultState;
        }
}