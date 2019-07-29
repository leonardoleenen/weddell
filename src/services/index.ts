import axios from 'axios'

export const sendMessage = (message: string, accessToken:string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  return axios.post(
    'https://dialogflow.googleapis.com/v2/projects/outtripper-register-evwgya/agent/sessions/12345:detectIntent',
    {
      "query_input": {
        "text": {
          "text": message,
          "language_code": "en-US"
        }
      }
    })
} 