import { fetchAskList, fetchNewsList, fetchJobsList } from '@/api'

async function loadNewsList({state, commit}) {
    if (state.newsList.length === 0) {
        const res = await fetchNewsList()
        commit('setNewsList', res.data)
    }
}
async function loadJobsList({state, commit}) {
    if( state.jobsList.length === 0 ) {
        const res = await fetchJobsList()
        commit('setJobsList', res.data)
    }
}
async function loadAskList({state, commit}) {
    if( state.askList.length === 0 ) {
        const res = await fetchAskList()
        commit('setAskList', res.data)
    }
}

export default {
    loadNewsList,
    loadJobsList,
    loadAskList,
}