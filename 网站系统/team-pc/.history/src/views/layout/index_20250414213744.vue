<template>
    <el-container class="maincontainer">
    <el-header class="header">Header</el-header>
    <el-main class="main">Main</el-main>
    <el-footer class="footer">Footer</el-footer>
    </el-container>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.maincontainer {
    height: 100%;
    .header {
        background-color: #1077cc;
        display: flex;
        align-items: center;
    }
    .main{
        background-color: rebeccapurple;
    }
    .footer{
        background-color: coral;
    }
}
</style>