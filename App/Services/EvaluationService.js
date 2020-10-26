import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

axios.defaults.withCredentials = true

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const evaluationApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchTest(ageCategory) {
  return evaluationApiClient
    .get(`evaluation/${ageCategory}`)
    .then((response) => {
      if (in200s(response.status)) {
        console.log('Test: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

export const evaluationService = {
  fetchTest,
}
