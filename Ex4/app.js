new Vue({
    el: '#exercise',
    data: {
        attachRed: false,
        color: "green"

    },
    computed: {
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        divClasses2: function () {
            return {
                red: !this.attachRed,
                blue: this.attachRed
            }
        }
    }

});