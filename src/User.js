class User {
  // User code here
//   Each User has the following properties:
// username: String
// password: String
// age: In years
// loggedIn: boolean
// username, password, and age are provided to the constructor as arguments. 
//loggedIn represents whether the user is currently logged in. 
//A user is NOT logged in when they first register.

  constructor(username, password, age) {
    this.username = username;
    this.password = password
    this.age = age;
    this.loggedIn = false;
  }
  // Each User has the following methods (each called by ScooterApp):
  // login(password)
  // If password is correct, logs the User in. If not, throws incorrect password error.
  // logout()  
  // Logs the User out.

  login(password) {
    if (this.password === password) {
      this.loggedIn = true;
    } else {
      throw new Error('Incorrect password')
    }
  }
  logout() {
    this.loggedIn = false
  }
}

module.exports = User
