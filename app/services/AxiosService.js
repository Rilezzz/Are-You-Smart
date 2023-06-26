
export const questionApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=1&category=11',
    timeout: 8000
})