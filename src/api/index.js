import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}


function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchUser(params) {
    return axios.get(`${config.baseUrl}user/${params}.json`)
}

function fetchItem(params) {
    return axios.get(`${config.baseUrl}item/${params}.json`)
}

export {
    fetchAskList,
    fetchJobsList,
    fetchNewsList,
    fetchUser,
    fetchItem,
}