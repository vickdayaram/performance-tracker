
export default function (state = { selected: "BLK" }, action) {
    switch (action.type) {
        case 'STOCK_SELECTED':
            return Object.assign({}, state, {
              selected: action.payload
            })
            break;
    }
    return state;
}
