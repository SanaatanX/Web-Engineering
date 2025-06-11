<template>
    <div class="logo">
        <img :src="logo" />
        <div class="title">西北电子大学社团信息化平台</div>
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.png'
</script>

<style scoped lang="scss">
.logo{
    display: flex;
    align-items: center;
    padding-left: 50px;
    img{
        width: 40px;
        height: 40px;
    }
    .title{
        color: #FFF;
        font-size: 1.5rem;
        font-weight: 600;
        font-family: FZYaoti;
        padding-left: 7px;
    }
}
</style>