const Scooter = require('../src/Scooter')
const User = require('../src/User')

// //typeof scooter === object
// // describe('scooter object', () => {
// //   test('does something', () => {
// //     // edit this to be a real test!
// //     expect(false).toEqual(true);
// //   }
// // )
// // })
// describe('test suite for User class', () => {
//       const scooter1 = new Scooter("Manchester" , [])
//       expect(scooter1).toHaveProperty("null")
//       expect(scooter1).toHaveProperty("serial")
//       expect(scooter1).toHaveProperty("charge")
//       expect(typeof scooter1.isBroken).toBe("boolean")
//       expect(scooter1.station).toBe("Manchester")
//       this.station = station
//       this.user = null
//       this.charge = 100
//       this.isBroken = false
//       this.serial = 1

//       })
// //Method tests
// describe("scooter methods", () => {
//   let scooter
//   let user

//   beforeEach(() => {
//     scooter = new Scooter("Manchester")
//     user = new User()
//   })
//   it("allow scooter to be checked out by user", () => {
//     scooter.checkOut(user)
//     expect(scooter.user).toBe(user)
//     expect(scooter.station).toBe(null)
//   }) 
// })
//   // tests here!
 
//   //rent method
  

//   //dock method

//   //requestRepair method

//   //charge method
  

// const Scooter = require('./scooter');

describe('Scooter', () => {
  let scooter;
  beforeEach(() => {
    scooter = new Scooter('Manchester', null, 1, 2, 100, false);
  });

  test('scooter is initialized correctly', () => {
    expect(scooter.station).toBe('Manchester');
    expect(scooter.charge).toBe(100);
    expect(scooter.isBroken).toBe(false);
  });

  describe('rent', () => {
    test('scooter is rented if charged above 20% and not broken', () => {
      scooter.charge = true;
      scooter.isBroken = false;
      expect(scooter.user).toBe(null);
    });
  })

    test('scooter throws error if charged below 20%', () => {
      scooter.charge = false;
      scooter.isBroken = false;
      expect(() => {
        scooter.rent()
      }).toThrow('Scooter needs to charge');
    });


    test('scooter throws error if broken', () => {
      scooter.isBroken = true;
      expect(() => {
        scooter.rent()
    }).toThrow('Scooter needs repair');
    });
  

  describe('dock', () => {
    test('scooter is returned to the station and user is cleared', () => {
      scooter.user = null;
      scooter.station = 'Manchester';
      expect(scooter.station).toBe('Manchester');
      expect(scooter.user).toBe(null);
    });
  });
})