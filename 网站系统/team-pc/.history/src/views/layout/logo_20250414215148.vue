<template>
    <div>
        <img :src="logo">
        <div class="title">西北电子科技大学社团信息化平台</div>
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/image.png'
</script>

<style scoped lang="scss">

.logo{
    display: flex;
    align-items: center;
    padding-left: 30px;
    img{
        width: 40px;
        height: 40px;
    }
    .title{
        color: white;
        font-size: 24px;
        font-weight: 600;
        font-family: FZYaoti;
        padd
    }
}
</style>