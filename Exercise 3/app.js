new Vue({
        el: '#exercise',
        data: {
            value: 0
            
        },
        computed: {
            result: function(){
                return this.value >= 17 ? 'done' : 'over the number';
            }
        },
        watch: {
            result: function(){
                self = this;
                setTimeout(function(){
                    self.value = 0;
                }, 5000);
            }
        },
        methods: {
         //not needed
            }
        
    });