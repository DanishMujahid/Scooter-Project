const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user

// log in

// log out

// rent scooter

// dock scooter

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
    it('should login an existing user', () => {
      const user = scooterApp.loginUser('User', 'Password', 20);
      scooterApp.loginUser('User', 'Password');
      expect(user.isLoggedIn()).toBe(true);
      expect(console.log).toHaveBeenCalledWith('User has been logged in.');
    });
})

    it('should throw an error if username or password is incorrect', () => {
      expect(() => scooterApp.loginUser('testUser', 'wrongPassword')).toThrowError('Username or password is incorrect');
      expect(() => scooterApp.loginUser('wrongUsername', 'testPassword')).toThrowError('Username or password is incorrect');
    });

  describe('logoutUser', () => {
    it('should logout a logged-in user', () => {
      const user = scooterApp.registerUser('testUser', 'testPassword', 20);
      user.login();
      scooterApp.logoutUser('testUser');
      expect(username.isLoggedIn()).toBe(false);
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
      const station = 'Berlin';
      const scooter = new Scooter(station);
      scooterApp.dockStation(scooter, station);
      expect(app.stations[station]).toContain(scooter);
    });

    test('throws an error if station does not exist', () => {
      const scooter = new Scooter('Berlin');
      expect(() => {
        scooterApp.dockScooter('Berlin');
      }).toThrow('There is no such station');
    });
  })
