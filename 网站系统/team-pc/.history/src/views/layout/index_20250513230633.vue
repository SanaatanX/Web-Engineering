<template>
    <el-container class="container">
    <el-header class="header">
        <logo></logo>
        <tabs></tabs>
    </el-header>

    <el-main class="main">
        <router-view/>
    </el-main>
    
    <el-footer class="footer">Footer</el-footer>
    </el-container>
</template>

<script setup lang="ts">
//    import router from '@/router';
    import Loginout from './loginout.vue'
import logo from './logo.vue'
    import tabs from './tabs.vue'
    importc Loginout
</script>
<style scoped lang="scss">
.container {
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