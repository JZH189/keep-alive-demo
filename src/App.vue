<template>
<div id="app">
    <div class="navigation">
        <router-link to="/">to index</router-link>
        <router-link to="/home">to home</router-link>
        <router-link to="/home/homeChild/foo">/home/homeChild/foo</router-link>
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
</style>
