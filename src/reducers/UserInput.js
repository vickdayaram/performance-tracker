export default function (state = { selected: "BLK", name: "BlackRock"}, action) {
    switch (action.type) {
        case 'STOCK_SELECTED':
            return Object.assign({}, state, {
              selected: action.payload.symbol,
              name: action.payload.name
            })
            break;
    }
    return state;
}
