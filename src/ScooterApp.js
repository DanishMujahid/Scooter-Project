const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
//   Each ScooterApp should include the following properties
// stations: An object whose keys are the names of station locations, and whose values are arrays of Scooters. You can hard-code these stations in the constructor. 
//There should be at least three. Initially, there are no scooters at any stations.
// registeredUsers: An object whose keys are usernames to store all users 
  constructor() {
    this.dockStations = {
      Manchester: [],
      Liverpool: [],
      Blackburn: [],
    }
    this.registeredUser = {}
  }

  //registerUser(username, password, age)
  //If the user is not already registered AND is 18 or older, then add them as a new registered user. Log to the console that the user has been registered and return the user.
  //If the user cannot be registered, throw an error: already registered or too young to register.
    
  registerUser(username, password, age) {
    if ((!this.registeredUser.hasOwnProperty(username)) && (age >= 18)) {
      this.registeredUser[username] = new User (username, password, age)
      console.log("should register a new user")
      return this.registeredUser [username]
    } else if (!(this.registeredUser.hasOwnProperty(username))) {
      throw new Error ('Not old enough to register')
    } else {
      throw new Error ('already registered')
    }
  }

  // Locate the registered user by name and call its login method. Log to the console that the user has been logged in. 
  // If the user cannot be located or if the password is incorrect, then throw an error: Username or password is incorrect.

  loginUser(username, password) {
  if (!(this.registeredUser.hasOwnProperty(username)) && (password !== this.registeredUser[password].password)){
    throw newError("Username or password is incorrect")
  } else {
    this.registeredUser[username].login(password)
    console.log("User has been logged in.")
  }
}

// Locate the registered user and call its logout method. Log user is logged out to the console.
// If the user cannot be located, throw no such user is logged in error

logoutUser(username) {
  if(!(this.registeredUser.hasOwnProperty(username))){
    throw new Error('User is not logged in')
  } else {
    this.registeredUser[username].logout()
    console.log("User has successfully logged out")
  }
}

// This method is called by the Scooter company’s home office when new scooters are deployed. 
// Create a new scooter, add it to the station’s scooter list, and set its station property. Log created new scooter to the console. Return the scooter. 
// Throws no such station error if the station does not exist. 

createScooter(station) {
  try {
    const scooter = new Scooter(station)
    this.dockStations[station].push(scooter)
    console.log("New Scooter has been created")
  } catch(err) {
    throw new Error ('There is no such station')
  }
}

// Add the scooter to the station’s scooter list, and dock it. 
// Log scooter is docked to the console.  
// Throws no such station error if the station does not exist. 
// Throws scooter already at station error if the scooter is already there.

dockScooter(scooter, station) {
  if(!(this.dockStations.hasOwnProperty(station))) {
    throw new Error('There is no such station')
  } else if (scooter.station === station) {
    throw new Error ('Scooter is docked at station')
  } else {
    this.dockStations[scooter.station].push(scooter)
    scooter.dock(station)
    console.log("Scooter has been docked successfully")
  }
}

// Locate the given scooter at one of the stations, and remove it from that station. Rent it to the user. Log scooter is rented to the console. 
// If the scooter is already rented, throw the error scooter already rented.

rentScooter(scooter, user) {
  if(scooter.user !== null) {
    throw new Error("Scooter is rented")
  } else {
    if (scooter.rent()) {
      this.dockStations[scooter.station].splice(this.dockStations[scooter.station].indexOf(scooter), 1)
      scooter.user = user
      scooter.station = null
      console.log("Scooter is already rented")
    }
  }
// You will use this handy method when testing your ScooterApp.
// Log the list of registered users to the console.
// Log the list of stations and how many scooters are at each station to the console.
// Take a moment to format it nicely so you can read it.

  print() 
  console.log(this.registeredUser)
  console.log(this.dockStations)
}
}


module.exports = ScooterApp
