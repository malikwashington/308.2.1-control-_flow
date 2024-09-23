
function plantGrowth(weeks, start=20, r=5){

        const PI = 3.1415;
        const area = PI * r**2

        const min = .8;
        const max = area / .8

        let i = 0;
        let num;

        if(weeks== 0){
                while(i<=10){
                        if(i==10) return `After 10 weeks we would have ${num} plants, taking up ${num*.8-area} sq meters more space.
If the space had remained circular it's approximate radius would be ${Math.sqrt((num*.8)/PI)} meters.\n`
                        num??=start
                        num*=2
                        i++
                }
        }

        while(i <= weeks){
                num ??= start
                console.log(i>0? `The number of plants after week ${i} is ${num}.`: `We are starting with ${num} plants.`)
                if(.8*max < num) return `The number of plants is more than 80% capacity, we should start PRUNING.\n`

                console.log(max/2 >= num? "The plants are growing at an acceptable rate, we should continue to monitor them." :
                "There is room to plant more plants.")
                num*=2
                i++
        }
}


console.log(plantGrowth(3))
console.log(plantGrowth(0, 100))
