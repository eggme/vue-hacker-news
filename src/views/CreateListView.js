import ListView from "@/views/ListView.vue";
import bus from "@/utils/bus";
import {store} from "@/store/store";
import { h } from 'vue';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name: name,
        created() {
            bus.emit('startSpinner')
            console.log("this.$route.name -> ", this.$route.name)
            store.dispatch('loadList', this.$route.name)
                .then(() => { bus.emit('endSpinner') })
        },
        render() {
            return h(ListView);
        }
    }
}