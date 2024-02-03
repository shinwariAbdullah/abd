class user {
    constructor(username) {
        this.username = username
    }
    log() {
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.emeil = email
        this.password = password
    }
    addcourse(){
        console.log(`A NEW COURSE WAS ADDED BY ${this.username}`);
    }
}

const Abdullah = new Teacher("Abdullah","khan@gmai.com",)
Abdullah.addcourse()

const icecream = new user("tasty ice cream")
icecream.log()

console.log(icecream instanceof user);