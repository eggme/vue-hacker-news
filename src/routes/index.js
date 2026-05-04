import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import ItemView from "@/views/ItemView.vue";
import UserView from "@/views/UserView.vue";
// import createListView from "@/views/CreateListView";

export const routes = [
    {
        path: '/',
        redirect: '/news',
    },
    {
        // path: url 주소
        path: '/news',
        // component : url 주소로 갔을 때 표시될 컴포넌트
        name: 'news',
        component: NewsView,
        // component: createListView('NewsView'),
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView,
        // component: createListView('AskView'),
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
        // component: createListView('JobsView'),
    },
    {
        path: '/item',
        name: 'item',
        component: ItemView,
        // component: createListView('ItemView'),
    },
    {
        path: '/user', // '/user/:id',
        name: 'user',
        component: UserView,
        // component: createListView('UserView'),
    }
]