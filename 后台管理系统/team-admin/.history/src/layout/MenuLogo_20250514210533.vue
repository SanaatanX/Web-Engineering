<template>
    <div class="mylogo">
        <img class="logo" :src="logo" />
        <img v-if="show" class="title" :src="title" />
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
import title from '@/assets/title.png'
import { menuStore } from "@/store/menu";
import { computed, ref, watch } from 'vue';
const store = menuStore();
// const show = computed(()=>{
//     return store.getCollapse
// })
const show = ref(true)
watch(
    ()=>store.getCollapse,
    (collapsed:boolean)=>{
        if(!collapsed){
            setTimeout(() => {
                show.value = collapsed;
            }, 300);
        }else{
            show.value = collapsed;
        }
    }
)
</script>

<style scoped lang="scss">
.mylogo{
    height: 60px;
    background-color: #0f2542;
    color: #FFF;
    display: flex;
    align-items: center;
    .logo{
        height: 40px;
        width: 40px;
        margin-left: 10px;
        margin-right: 5px;
    }
    .title{
        width: 150px;
        height: 50px;
    }
}
</style>