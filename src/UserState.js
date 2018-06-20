var userState ={
    filters:'',
    state:''
}

export default(state = userState, action) => {
    console.log(action);
    switch (action.type){
        case 'UPDATE_USER':
            return{
                ...state,
                filters: action.state
            }
        default:
          return state

    }

}
