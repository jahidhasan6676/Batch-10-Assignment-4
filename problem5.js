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
         serialNumberRemaining = (serialNumber - 1) - length;
         isratSerialTimes = averageTimes * serialNumberRemaining;
         
        }
        return isratSerialTimes;
}

const result = waitingTime(7, 7);
console.log(result);