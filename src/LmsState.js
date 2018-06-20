var lmsState ={
    mainSection:'',
    subSection:'',
    filters:'',
}

export default(state = lmsState, action) => {
    console.log(action);
    switch (action.type){
        case 'UPDATE_MAIN':
          return{
              ...state,
              mainSection: action.mS,
              filters: action.state,

          }
        case 'UPDATE_SUB':
          return{
              ...state,
              subSection: action.mS
          }
               default:
          return state

    }

}
