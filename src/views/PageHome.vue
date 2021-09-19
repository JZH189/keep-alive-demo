<template>
<div>
    <h1>HOME PAGE</h1>
    <router-view></router-view>
</div>
</template>

<script>
import lifecycle from '@/lifecycle';
export default {
    name: "home",
    mixins: [lifecycle]

}
</script>

<style>
</style>
