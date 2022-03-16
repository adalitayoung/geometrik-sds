import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:4000/api"
})

export const users = () => api.get(`/users`);

const api_list = {
    users,
}

export default api_list