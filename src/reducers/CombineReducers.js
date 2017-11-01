
import { combineReducers } from 'redux';
import UserInput from './UserInput';
import WatchList from './WatchList';

const reducers = combineReducers({
    selected: UserInput,
    watchlist: WatchList
});

export default reducers
