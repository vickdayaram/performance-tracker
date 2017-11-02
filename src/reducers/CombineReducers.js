import { combineReducers } from 'redux';
import UserInput from './UserInput';
import WatchList from './WatchList';
import chartData from './ChartData'

const reducers = combineReducers({
    selected: UserInput,
    watchlist: WatchList,
    chartData: chartData
});

export default reducers
