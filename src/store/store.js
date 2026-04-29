import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

export const store = new Vuex.Store({
    state: {
        newsList: [],
        askList: [],
        jobsList: [],
        user: {},
        item: {},
    },
    mutations: mutations,
    actions: actions
})
