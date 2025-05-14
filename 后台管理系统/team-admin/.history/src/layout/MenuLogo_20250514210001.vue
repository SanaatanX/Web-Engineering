<template>
    <div class="mylogo">
        <img class="logo" :src="logo" />
        <img class="title" :src="title" />
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
import title from '@/assets/title.png'
</script>

<style scoped lang="scss">
.mylogo{
    height: 60px;
    background-color: #0f2542;
    color: #FFF;
    display: flex;
    align-items: center;
    .logo{
        height: 44px;
        width: 44px;
        margin-left: 10px;
        margin-right: 5px;
    }
    .title{
        width: 150px;
        height: 50px;
    }
}
</style>