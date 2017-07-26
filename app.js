new Vue({
  el: '#vue-app',
  data: {
    age: 24,
    x: 0,
    y: 0
  },
  methods: {
    logName: function (){
      console.log('You entered your name');
    },
    logAge: function (){
      console.log('You entered your age')
    }
  }
});
