new Vue({
  el: '#vue-app',
  data: {
    name: 'Chris',
    job: 'Developer',
    age: '35'
  },
  methods:{
    greet:function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
