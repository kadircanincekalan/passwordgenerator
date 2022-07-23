function getPassword(){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@$%^&*( )_+?<>:{}[]";
    let passwordLenght = 16;
    let password = '';
    
    for(let i = 0; i< passwordLenght; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        

        password += chars.substring(randomNumber, randomNumber + 1);
        
    }
    document.getElementById("password").value = password 
}

