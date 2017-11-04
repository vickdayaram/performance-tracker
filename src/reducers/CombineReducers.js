import { combineReducers } from 'redux';
import UserInput from './UserInput';
import WatchList from './WatchList';
import chartData from './ChartData'
import Messages from './Messages'

const reducers = combineReducers({
    selected: UserInput,
    watchlist: WatchList,
    chartData: chartData,
    messages: Messages
});

export default reducers
