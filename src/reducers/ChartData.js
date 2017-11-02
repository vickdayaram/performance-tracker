export default function (state = {chartData: []}, action){
    switch (action.type) {
        case 'SUCCESS':
            return Object.assign({}, state, {
              chartData: structureData(action.data)
            })
        default:
            return state;
    }
}

function structureData(json){
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
