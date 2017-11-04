export default function (state = {data: [], labels: [], errors: false, inProcess: false}, action){
    switch (action.type) {
        case 'SUCCESS':
            return Object.assign({}, state, structureData(action.data))
            break;
        case 'IN_PROCESS':
            return Object.assign({}, state, { inProcess:true })
            break;
        case 'ERRORS_IN_GET':
            return Object.assign({}, state, { errors:true })
        default:
            return state
            break;
    }
}

const structureData = (json) => {
  let rawData = json["Time Series (Daily)"]
  let labels = Object.keys(rawData)
  let data = Object.values(rawData).map((value) => parseFloat(value["1. open"]))
  return {data: data.reverse(), labels: labels.reverse(), errors: false, inProcess: false}
}
