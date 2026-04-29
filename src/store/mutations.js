const setNewsList = (state, newsList) => {
    state.newsList = newsList
}
const setJobsList = (state, jobsList) => {
    state.jobsList = jobsList
}
const setAskList = (state, askList) => {
    state.askList = askList
}
const setUser = (state, user) => {
    state.user = user
}

const setItem = (state, item) => {
    state.item = item
}

export default { setNewsList, setJobsList, setAskList, setUser, setItem }