function calculateTax(income, expenses) {
    if(income, expenses < 0  || income < expenses){
        return  "Invalid Input";
    }
  const remainingMoney = income - expenses;
  const taxAmount = remainingMoney * 0.20;
  return taxAmount;
}


function sendNotification(email) {
    if(email.includes('@') === false){
        return 'Invalid Email';
    }
    
    let [userName, domainName] = email.split('@');
    let massage = userName + ' sent you an email from ' + domainName;
    return massage;
}


function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    
    for(i = 0; i <= 9; i++){
        if(name.includes(i)){
            return true;
        }
    }
    return false;
}


function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return  "Invalid Input";
    }
   let totalScore = obj.testScore + obj.schoolGrade;
   if(obj.isFFamily === true){
    totalScore = totalScore + 20;
   }
   
   if(totalScore >= 80){
    return true;
   }
   else{
    return false;
   }
}


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