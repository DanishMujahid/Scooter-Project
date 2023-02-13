const { TestWatcher } = require('jest')
const User = require('../src/User')

describe('test suite for User class', () => {
    beforeEach(() => {
        user1 = {
            username: "userName1",
            password: "password1",
            age: 22,
            loggedIn: false,            
        }
    })
    test('Check if user has username', () => {
        expect(user1.username).toBe("userName1");
    })
    test('Check if user has password', () => {
        expect(user1.password).toBe('password1')
    })
    test('Check if user has age', () => {
        expect(user1.age).toBe(22)
    })
    test('Check if user is first set to false', () => {
        expect(user1.loggedIn).toBe(false)
        //expect(user1.loggedIn).toBe(true)
    })
    test('Check if login sets loggedIn to true', () => {
        const Danish = new User("username2", "password2", 23, true)
        const expected = true
    })
    test('Check if logout sets loggedIn to false', () => {
        const Danish = new User("username2", "password2", 23, false)
        const expected = false
    }) 
})
// User tests here

// test username

// test password

// test age

// test login

// test logout
