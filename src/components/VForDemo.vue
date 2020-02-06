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
    <hr/>
    <div>
      <p>
        city: <input type="text" v-model.lazy="city"/>
      </p>
      <p>
        district: <input type="text" v-model.lazy="district"/>
      </p>
      <p>
        full_address: <input type="text" v-model.lazy="full_address"/>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VForDemo",
    mixins: [],
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
        city: '',
        district: '',
      }
    },
    props: {
      name: {
        type: String,
        default: 'Tom'
      },
      age: Number,

    },
    computed: {
      full_address: {
        get: function () {
          if (this.city) {
            if (this.district) {
              return this.city + '-' + this.district;
            }
            return this.city
          } else {
            if (this.district) {
              return this.district;
            }
            return '';
          }
        },
        set: function (new_value) {
          console.log('new_value: ' + new_value);
          this.city = new_value.split('-')[0];
          this.district = new_value.split('-')[1];
        }
      }
    }
  }
</script>

<style scoped>

</style>
