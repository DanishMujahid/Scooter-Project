class Scooter{
  // scooter code here
//   Each Scooter should have the following properties
// station: string; the station the scooter is located at, or null if checked out
// user: the User who checked out the Scooter, or null if docked
// serial: a number assigned sequentially from nextSerial
// nextSerial: a static number which starts at 1 and increments each time a new serial number is assigned
// charge: a number from 0 (no charge at all) to 100 (fully charged)
//isBroken: boolean

  static nextSerial = 1
  constructor(station) {
    this.station = station
    this.user = null
    this.charge = 100
    this.isBroken = false
    //this.serial = nextSerial;
    //nextSerial++;
  
  }
   
//   rent()
// If the Scooter is charged above 20% and not broken, remove it from its station, check it out to user. 
// Otherwise, throw an error scooter needs to charge or scooter needs repair.

  rent() {
    if((this.charge > 20) && !(this.isBroken)) {
      this.station = null
      this.user = user
    } else if (this.charge <= 20) {
      throw new Error ('Scooter needs to charge')
    } else {
      throw new Error ('Scooter needs repair')
    }
  }
  //Return the scooter to the station. Be sure to clear out the user, so they don’t get charged unfairly!
  dock(station) {
    this.station = station
    this.user = null
  }
  //BONUS: Set a timer to incrementally update the Scooter’s charge to 100. 
  //Every so often, log the new percentage of charge.
  async recharge() {
    console.log("Charging...") 
    while(this.charge < 100) {
      await new Promise(resolve => setTimeout(resolve, 20))
      this.charge++
      if(this.charge % 5 === 0) {
        console.log("Charge at: " + this.charge + "%")
      }
    }
  }
}


module.exports = Scooter
