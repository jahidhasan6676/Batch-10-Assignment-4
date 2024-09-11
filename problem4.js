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

const details = {
    name: 'Rajib',
    testScore: 40,
    schoolGrade: 25,
    isFFamily: true,
};


const info = calculateFinalScore(details);
console.log(info);