import Vue from 'vue'
import {add} from './mathUtil.js'
import app from '../vue/app.vue'

const {add, mul} = require('./mathUtil.js')

add(20, 100);

const app = new new Vue({
  el : '#app',
  template : '<app/>',
  components: {
    app
  }
})
