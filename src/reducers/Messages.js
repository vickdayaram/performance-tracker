export default function (state = {showDelete:false, showAdd:false, symbol:""}, action){
    switch (action.type) {
        case 'SHOW_ADD_MESSAGE':
            return Object.assign({}, state, {showAdd:true, symbol: action.payload })
        case 'SHOW_DELETE_MESSAGE':
            return Object.assign({}, state, {showDelete:true, symbol: action.payload })
        case 'RESET_MESSAGES':
            return Object.assign({}, state, {showDelete:false, showAdd:false, symbol:"" })
        default:
            return state
            break;
    }
}
