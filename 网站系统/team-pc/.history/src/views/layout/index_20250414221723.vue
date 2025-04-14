<template>
    <el-container class="maincontainer">
    <el-header class="header">
        <logo></logo>
        <tabs></tabs>
    </el-header>
    <el-main class="main"><router-view/></el-main>
        
    <el-footer class="footer"></el-footer>
    </el-container>
</template>

<script setup lang="ts">
    import router from '@/router';
import logo from './logo.vue'
    import tabs from './tabs.vue'
</script>
<style scoped lang="scss">
.maincontainer {
    height: 100%;
    .header {
        background-color: #1077cc;
        display: flex;
        align-items: center;
        padding: 0px;
    }
    .main{
        padding: 0px;
    }
    .footer{
        // background-color: coral;
    }
}
</style>