import bus from "@/utils/bus";
import {store} from "@/store/store";

export function useList(type) {
    // 재사용할 컴포넌트 옵션 & 로직
    console.log('composable~~~~')
    const load = async() => {
        bus.emit('startSpinner')
        console.log("this.$route.name -> ", type)
        store.dispatch('loadList', type)
            .then(() => { bus.emit('endSpinner') })
    }

    return { load }
}