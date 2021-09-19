export default {
    created(){
        console.log(`${this.$options.name} created`);
    },
    mounted() {
        console.log(`${this.$options.name} mounted`);
    },
    activated() {
        console.log(`${this.$options.name} activated`);
    },
    deactivated() {
        console.log(`${this.$options.name} deactivated`);
    },
    destroyed() {
        console.log(`${this.$options.name} destroyed`);
    }
}