<template>
  <div>
    <ul>
      <li>{{this.moduleA.name}}</li>
      <li>{{this.moduleA.age}}</li>
      <li>{{this.moduleA.gender}}</li>
    </ul>
    <br/>
    <input type="text" v-model="name"/><br/>
    <button v-on:click=updateName(name)>更新姓名</button>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters} from 'vuex';

  export default {
    name: "ModuleADemo",
    data() {
      return {
        name: 'TTT',
      }
    },
    computed: mapGetters('moduleA', [
      'moduleA'
    ]),
    methods: mapActions('moduleA', [
      'updateName'
    ])
  }
</script>

<style scoped>

</style>
