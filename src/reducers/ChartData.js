import formatCurrency from 'format-currency'
const options = { format: '%s%v', symbol: '$' }

export default function (state = {chartData: {data: [], labels: []}}, action){
    switch (action.type) {
        case 'SUCCESS':
            return Object.assign({}, state, {
              chartData: structureDataHighCharts(action.data)
            })
        default:
            return state;
    }
}


const structureData = (json) => {
  let rawData = json["Time Series (Daily)"]
  let labels = Object.keys(rawData)
  let data = Object.values(rawData).map((value) => parseFloat(value["1. open"]))
  let chartData = {
              labels: labels.reverse(),
              datasets: [{
              backgroundColor: 'rgba(65,105,225, 0.5)',
              borderColor: 'rgb(0,0,139)',
              data: data.reverse(),
          }]
      }
  return chartData
}


const structureDataHighCharts = (json) => {
  let rawData = json["Time Series (Daily)"]
  let labels = Object.keys(rawData)
  let data = Object.values(rawData).map((value) => parseFloat(value["1. open"]))
  return {data: data.reverse(), labels: labels.reverse()}
}
