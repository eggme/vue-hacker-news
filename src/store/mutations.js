const setNewsList = (state, newsList) => {
    state.newsList = newsList
}
const setJobsList = (state, jobsList) => {
    state.jobsList = jobsList
}
const setAskList = (state, askList) => {
    state.askList = askList
}

export default { setNewsList, setJobsList, setAskList }