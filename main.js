
function plantGrowth(weeks){

        const PI = 3.1415;
        const area = PI * 5**2

        const min = .8;
        const start = 20
        const max = area / .8

        let i = 0;
        let num;

        while(i <= weeks){
                num ??= start
                console.log(i>0? `The number of plants after week ${i} is ${num}.`: `We are starting with ${num} plants.`)
                if(.8*max < num) return `The number of plants is more than 80% capacity, we should start PRUNING.` 

                console.log(max/2 >= num? "The plants are growing at an acceptable rate, we should continue to monitor them." :
                "There is room to plant more plants.")
                num*=2
                i++
        }
}


console.log(plantGrowth(3))
