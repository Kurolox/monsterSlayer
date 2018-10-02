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
            this.log.push({player: "The player deals " + damageDealt + " damage to the monster."});

            this.monsterLife -= damageDealt;

            if(this.monsterLife < 0){
                this.monsterLife = 0;
            }
        },

        monsterAttack: function(){
            damageDealt = Math.floor(12 + Math.random() * 10); // Deals random damage between 12 and 21
            this.playerLife -= damageDealt;

            if(this.playerLife < 0){
                this.playerLife = 0;
            }

            this.log.push({monster: "The monster deals " + damageDealt + " damage to the player."});
        },

        specialAttack: function(){
            criticalRoll = Math.random();
            if (criticalRoll >= 0.75){ // 25% chance of critical hit
                damageDealt = Math.floor(15 + Math.random() * 40)
                this.log.push({player: "The player deals " + damageDealt + " damage to the monster with an amazing critical hit."});
            }
            else {
                damageDealt = Math.floor(1 + (15 + Math.random() * 10) * criticalRoll)  // Otherwise it deals less damage depending on the roll. 1 damage minimum.
                this.log.push({player: "The player deals " + damageDealt + " damage to the monster."});
            }

            this.monsterLife -= damageDealt;

            if(this.monsterLife < 0){
                this.monsterLife = 0;
            }
        },

        heal: function(){
            healingReceived = Math.floor(Math.random() * 30); // Heals randomly between 0 and 30
            this.log.push({player: "The player heals himself for " + healingReceived + "."});

            this.playerLife += healingReceived;

            this.monsterAttack(); // Since we didn't attack, we have to manually call the monster attack.
        },

        surrender: function(){

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

            console.log("Monster life: " + this.monsterLife);
            if(this.monsterLife === 0){ 
                // TODO: Call "You Win" function
                
            }

            this.monsterAttack(); // If he isn't dead, he attacks back.


        },
        
        playerLife: function(){

            console.log("Player life: " + this.playerLife);

            if(this.playerLife === 0){ 
                // TODO: Call "You Lose" function
                
            }
        },
    },
});