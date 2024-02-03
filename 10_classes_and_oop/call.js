function setUsername(Username){
    this.Username = Username
}

function createUser(Username,email,pasword){
    setUsername.call(this,Username)


    this.email = email
    this.pasword = pasword
}

const Abd = new createUser("abd","khan@gmail.com","2223344")
console.log(Abd);