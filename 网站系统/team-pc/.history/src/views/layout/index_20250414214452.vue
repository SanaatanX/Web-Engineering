<template>
    <el-container class="maincontainer">
    <el-header class="header">
        <logo
    </el-header>
    <el-main class="main">Main</el-main>
    <el-footer class="footer">Footer</el-footer>
    </el-container>
</template>

<script setup lang="ts">
    import logo from './logo.vue'
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
        padding:0px;
    }
    .footer{
        // background-color: coral;
    }
}
</style>