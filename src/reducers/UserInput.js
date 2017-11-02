export default function (state = { selected: "BLK", name: "BlackRock"}, action) {
    switch (action.type) {
        case 'STOCK_SELECTED':
            let selected = Object.assign({}, state, {
              selected: action.payload.symbol,
              name: action.payload.name
            })
            localStorage.setItem('selected', JSON.stringify(selected))
            return selected
            break;
        case 'RESET_SELECT_FOR_RESTART':
            if(localStorage.getItem('selected')){
              let restartSelect = JSON.parse(localStorage.getItem('selected'))
              return Object.assign({}, state, restartSelect)
              break;
            } else {
              return state
              break;
            }
    }
    return state;
}
