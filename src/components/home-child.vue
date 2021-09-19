<template>
  <div>home child: {{$route.params.id}}</div>
</template>

<script>
import lifecycle from '@/lifecycle'
export default {
    mixins: [lifecycle],
    name:"homeChild",
    beforeRouteUpdate (to, from, next) {
      console.log('to.params.id: ', to.params.id);
      next()
    }
}
</script>

<style>

</style>