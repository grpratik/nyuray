const initState = {
    showModal: false,
    modalComponent: ''
}

const modalReducer = (state = initState, action) => {
    switch(action.type){
        case 'TOGGLE_MODAL':
          return {
            ...state,
            showModal: !state.showModal
          }
        case 'MODAL_COMPONENT':
            return{
                ...state,
                modalComponent: action.component
            }
        default:
              return {...state}
        }
}

export default modalReducer;