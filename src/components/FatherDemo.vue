<template>
  <div>
    <son-demo tt="123123" ttt="00000"></son-demo>
    <slot-demo>我学到slot！！
      <p slot="demo01">
        123123 demo01
      </p>
      <p slot="demo02">
        sadfadlkj demo02
      </p>lajsdkajldfjlasdjflkasdjflsjladf
    </slot-demo>
  </div>
</template>

<script>
  import SonDemo from "./SonDemo";
  import SlotDemo from "./SlotDemo";

  export default {
    name: "FatherDemo",
    directives: {},
    components: {
      SonDemo,
      SlotDemo
    },
    mounted() {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const random = Math.random();
          if (random > 0.5) {
            resolve(random);
          } else {
            reject(random);
          }
        }, 1000);
      });
      promise.then(value => {
        console.log("success: " + value);
      }).catch(reason => {
        console.log("fail: " + reason);
      })
    }
  }
</script>

<style scoped>

</style>
