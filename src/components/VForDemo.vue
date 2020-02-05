<template>
  <div>
    <ul>
      <li v-for="tech in technologies">
        {{tech}}
      </li>
    </ul>
    <hr/>
    <div>
      <p v-bind:style="'color:' + my_color">Vue.js学起来好开心~</p>
    </div>
    <hr/>
    <div>
      <label>
        <input v-model="input1" type="text"/>
        <p>{{input1}}</p>
      </label>
      <label>
        <input v-model.lazy="input2" type="text"/>
        <p>{{input2}}</p>
      </label>
      <label>
        <input v-model.number="input3" type="text"/>
        <p>{{input3}}</p>
      </label>
      <label>
        <input v-model.trim="input4" type="text"/>
        <p>{{input4}}</p>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VForDemo",
    data() {
      return {
        technologies: [
          "nvm", "npm", "node", "webpack", "vue", "es6"
        ],
        my_color: "red",
        input1: '',
        input2: '',
        input3: '',
        input4: '',
      }
    }
  }
</script>

<style scoped>

</style>
