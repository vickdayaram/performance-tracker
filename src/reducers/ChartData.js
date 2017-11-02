export default function (state = {chartData: []}, action){
    switch (action.type) {
        case 'SUCCESS':
            return Object.assign({}, state, {
              chartData: action.data
            })
        default:
            return state;
    }
}
