import { fetchAskList, fetchNewsList, fetchJobsList, fetchUser, fetchItem, fetchList } from '@/api'

async function loadNewsList({ state, commit }) {
    if (state.newsList.length === 0) {
        const res = await fetchNewsList()
        commit('setNewsList', res.data)
    }
}
async function loadJobsList({ state, commit }) {
    if( state.jobsList.length === 0 ) {
        const res = await fetchJobsList()
        commit('setJobsList', res.data)
    }
}
async function loadAskList({ state, commit }) {
    if( state.askList.length === 0 ) {
        const res = await fetchAskList()
        commit('setAskList', res.data)
    }
}

async function loadUser({ commit }, payload) {
    console.log('payload => ', payload)
    const res = await fetchUser(payload)
    commit('setUser', res.data)
}

async function loadItem({ commit }, payload) {
    console.log('payload => ', payload)
    const res = await fetchItem(payload)
    console.log('item -> ', JSON.stringify(res.data))
    commit('setItem', res.data)
}

async function loadList({ commit }, type) {
    console.log('type => ', type)
    const res = await fetchList(type)
    console.log('item -> ', JSON.stringify(res.data))
    commit('setList', res.data)
}

export default {
    loadNewsList,
    loadJobsList,
    loadAskList,
    loadUser,
    loadItem,
    loadList,
}