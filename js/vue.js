new Vue({
    el: "#app",
    data: {
        isGameStarted: false,
        playerLife: 100,
        monsterLife: 100,
        log: [],
    },
    methods: {
        playerAttack: function(){
            damageDealt = Math.floor(6 + Math.random() * 8); // Deals random damage between 6 and 13
            this.monsterLife -= damageDealt;
            if(this.monsterLife < 0){
                this.monsterLife = 0;
            }
            console.log("Monster life: " + this.monsterLife);

            this.log.push({player: "The player deals " + damageDealt + " damage to the monster."});

            if(this.monsterLife === 0){ 
                // TODO: Call "You Win" function
                
            }
        },

        startGame: function(){
            this.isGameStarted = true;
        },

    },
    computed: {
        monsterBarStyle: function(){return {
            'background-color': "green",
            margin: 0,
            color: "white",
            width: this.monsterLife + '%',
        }},

        playerBarStyle: function(){return {
            'background-color': "green",
            margin: 0,
            color: "white",
            width: this.playerLife + '%',
        }},
    },
    watch: {
        monsterLife: function(){
            damageDealt = Math.floor(12 + Math.random() * 10); // Deals random damage between 12 and 21
            this.playerLife -= damageDealt;
            if(this.playerLife < 0){
                this.playerLife = 0;
            }
            console.log("Player life: " + this.playerLife);

            this.log.push({monster: "The monster deals " + damageDealt + " damage to the player."});

            if(this.playerLife === 0){ 
                // TODO: Call "You Lose" function
                
            }
        },        
    },
});