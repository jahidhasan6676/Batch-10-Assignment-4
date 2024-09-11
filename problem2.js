function sendNotification(email) {
    if(email.includes('@') === false){
        return 'Invalid Email';
    }
    
    let [userName, domainName] = email.split('@');
    let massage = userName + ' sent you an email from ' + domainName;
    return massage;
    

}

const gmail = sendNotification('farhan34@yahoo.com');
console.log(gmail);