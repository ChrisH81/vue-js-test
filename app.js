new Vue({
  el: '#vue-app',
  data: {
    name: 'Chris',
    job: 'Developer',
    age: '35',
    website: 'https://www.dribbble.com',
    websiteTag:'<a href="https://www.dribbble.com">The Site</a>'
  },
  methods:{
    greet:function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
