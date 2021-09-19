<template>
<div class="content">
    <h1>INDEX PAGE</h1>
    <button v-for="tab in tabs" v-bind:key="tab" v-bind:class="['tab-button', { active: currentTab === tab }]" v-on:click="currentTab = tab">
        {{ tab }}
    </button>
    <component v-bind:is="currentTabComponent" class="tab"></component>
</div>
</template>

<script>
import lifecycle from '@/lifecycle';
import tabArchive from "@/components/tab-archive"
import tabPosts from "@/components/tab-posts"
export default {
    name: "index",
    mixins: [lifecycle],
    components: {
        tabArchive,
        tabPosts
    },
    data() {
        return {
            currentTab: "Posts",
            tabs: ["Posts", "Archive"],
        }
    },
    computed: {
        currentTabComponent: function () {
            return "tab-" + this.currentTab.toLowerCase();
        }
    },
}
</script>

<style>

</style>
