function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number' ){
        return "Invalid Input";
    }
    let sum = 0;
    let length = waitingTimes.length;
    
    for(let times of waitingTimes){
        sum = sum + times;
         averageTimes = sum / length;
        averageTimes = Math.round(averageTimes);
         remainingPeople = (serialNumber - 1) - length;
         totalWaitingTimes = averageTimes * remainingPeople;
         
        }
        return totalWaitingTimes;
}

const result = waitingTime([ 3, 5, 7, 11, 6 ], 10);
console.log(result);