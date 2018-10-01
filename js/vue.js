new Vue({
    el: "#app",
    data: {
        playerLife: 100,
        monsterLife: 100,

    },
    methods: {
        attack: function(){
            this.monsterLife -= Math.floor(6 + Math.random() * 8);
            if(this.monsterLife < 0){
                this.monsterLife = 0;
            }
            console.log("Monster life: " + this.monsterLife);

            if(this.monsterLife === 0){
                // TODO: Call "You Win" function
                
            }

        },

    },
    computed: {
        monsterBarStyle: function(){return {
            'background-color': "green",
            margin: 0,
            color: "white",
            width: this.monsterLife + '%',
        }},
    },
    watch: {
        
    },
});