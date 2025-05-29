<template>
    <div class="logo">
        <img :src="logo">
        <div class="title">西电科大社团信息化平台</div>
    </div>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png"
</script>

<style lang="scss">
.logo{
    display: flex;
    align-items: center;
    padding-left: 40px;
    img{
        width: 40px;
        height: 40px;
    }
    .title{
        color: white;
        font-size: 24px;
        font-weight: 600;
        font-family: FZYaoTi;
        padding-left: 7px;
    }
}
</style>