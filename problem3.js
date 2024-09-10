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

const str = checkDigitsInName(['raj']);
console.log(str);
