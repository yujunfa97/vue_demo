<template>
    <div>
      <hr/>
      <br/>
      <br/>
      <br/>
      <slot></slot>
      <br/>
      <br/>
      <hr/>
      <br/>
      <slot name="demo01"></slot>
      <br/>
      <br/>
      <slot name="demo02"></slot>
      <hr/>
    </div>
</template>

<script>
    export default {
        name: "SlotDemo"
    }
</script>

<style scoped>

</style>
