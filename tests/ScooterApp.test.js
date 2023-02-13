const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user

// log in

// log out

// rent scooter

// dock scooter
const scooterApp = new ScooterApp()

describe('ScooterApp', () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  describe('registerUser', () => {
    test('should register a new user', () => {
      const user = scooterApp.registerUser('user', 'password', 20);
      expect(scooterApp.registeredUser).toHaveProperty('user');
      
    });
    it('should throw an error if user is already registered', () => {
      const user = scooterApp.registerUser('User1', 'Password1', 20);
      expect(() => scooterApp.registerUser('User1', 'Password1', 20)).toThrowError('already registered');
    });

    it('should throw an error if user is too young to register', () => {
      expect(() => scooterApp.registerUser('testUser', 'testPassword', 17)).toThrowError('Not old enough to register');
    });
  });
})

describe('loginUser', () => {
  let user;

  beforeEach(() => {
    user = scooterApp.registerUser('testUser', 'testPassword', 20);
  });

  test('logs in a registered user', () => {
    scooterApp.loginUser('testUser', 'testPassword');
    expect(user.loggedIn).toBe(true);
  });

  test('throws an error if user is not found', () => {
    expect(() => scooterApp.loginUser('User1', 'Password1')).toThrow('Username or password is incorrect');
  });

  test('throws an error if password is incorrect', () => {
    expect(() => scooterApp.loginUser('testUser', 'wrongPassword')).toThrow('Username or password is incorrect');
  });
});

  describe('logoutUser', () => {
    it('should logout a logged-in user', () => {
      const user = scooterApp.registerUser('testUser', 'testPassword', 20);
      user.login();
      scooterApp.logoutUser('testUser');
      expect(user.isLoggedIn()).toBe(false);
      expect(console.log).toHaveBeenCalledWith('User has successfully logged out');
    });

    it('should throw an error if user is not logged in', () => {
      scooterApp.registerUser('testUser', 'testPassword', 20);
      expect(() => scooterApp.logoutUser('testUser')).toThrowError('No such user is logged in');
    });
  });

  describe('createScooter', () => {
    it('should create a new scooter at a station', () => {
      const scooter = scooterApp.createScooter('Manchester');
      expect(scooter.station).toBe('Manchester');
      expect(scooter.charge()).toBe(true);
      expect(scooter.isBroken()).toBe(false);
      expect(scooterApp.dockStations['Manchester']).toContain(scooter);
      expect(console.log).toHaveBeenCalledWith('New Scooter has been created');
    });

    it('should throw an error if station does not exist', () => {
      expect(() => scooterApp.createScooter('nonexistentStation')).toThrowError('There is no such station');
    });
  });

  describe('dockScooter', () => {
    test('docks a scooter at the station', () => {
      const station = 'Manchester';
      const scooter = new Scooter(station);
      scooterApp.dockScooter(scooter, station);
      expect(scooterApp.dockStation[station]).toContain(scooter);
    });

    test('throws an error if station does not exist', () => {
      const scooter = new Scooter('Berlin');
      expect(() => {
        scooterApp.dockScooter('Berlin');
      }).toThrow('There is no such station');
    });
  })
