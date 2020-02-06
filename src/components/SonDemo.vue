<template>
  <div>
    <p>{{this.$props}}</p>
  </div>
</template>

<script>
  export default {
    name: "SonDemo",
    props: ['tt'],
    inheritAttrs: false,
    mounted() {
      console.log(this.tt);
    }
  }
</script>

<style scoped>

</style>
