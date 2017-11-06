export default function (state = { symbol: "BLK", name: "BlackRock"}, action) {
    switch (action.type) {
        case 'STOCK_SELECTED':
            let selected = Object.assign({}, state, {
              symbol: action.payload.symbol,
              name: action.payload.name
            })
            localStorage.setItem('selected', JSON.stringify(selected))
            return selected
            break;
        default:
            return state
    }
}
