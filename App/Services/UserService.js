import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import jwt from 'jwt-decode'

axios.defaults.withCredentials = true

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const userApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchUser(idToken) {
  const id = jwt(idToken).sub.split('|')[1]
  return userApiClient
    .get(`user/${id}`)
    .then((response) => {
      if (in200s(response.status)) {
        console.log('User: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

function updateProfile(payload) {
  const updatedMetadata = Object.assign(payload.profile, { profile_complete: true })
  return userApiClient
    .put(`user/${payload.id}`, { user_metadata: updatedMetadata })
    .then((response) => {
      if (in200s(response.status)) {
        console.log('User: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

function sendEvaluation(id, category, evaluation) {
  return userApiClient
    .put(`user/${id}/evaluation/${category}`, { evaluation: evaluation })
    .then((response) => {
      if (in200s(response.status)) {
        console.log('User: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

function syncWithFB(id, fbId, value) {
  return userApiClient
    .put(`user/${id}`, { fb_id: fbId, fb_sync: value })
    .then((response) => {
      if (in200s(response.status)) {
        console.log('User: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

function syncWithTW(id, twId, value) {
  return userApiClient
    .put(`user/${id}`, { tw_id: twId, tw_sync: value })
    .then((response) => {
      if (in200s(response.status)) {
        console.log('User: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

function sendSocialMediaPost(id, target, post) {
  const payload = {
    object: 'user',
    entry: [
      {
        id: id,
        uid: id,
        time: Math.round(new Date().getTime() / 1000),
        changes: [
          {
            field: 'status',
            id: id,
            value: post,
          },
        ],
      },
    ],
  }

  return userApiClient
    .post(`user/${id}/social/${target}`, { post: payload })
    .then((response) => {
      if (in200s(response.status)) {
        console.log('POST: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

function fetchContactInfo(id) {
  return userApiClient
    .get(`user/${id}/contact`)
    .then((response) => {
      if (in200s(response.status)) {
        console.log('Contact: ', response.data)
        return response.data
      }
      return null
    })
    .catch((error) => {
      return error
    })
}

export const userService = {
  fetchUser,
  updateProfile,
  syncWithFB,
  syncWithTW,
  sendEvaluation,
  sendSocialMediaPost,
  fetchContactInfo,
}
