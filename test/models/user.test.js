const User = require('./../../app/models/user')

describe('Create test for user class', () => {
    test('Create a new user', () => {
        //Here create a new user)'
        const user = new User(1, "FernandoC", "Fernando", "Programmer", "dateCreated", "lastUpdated")
            //Here valid the data user
        expect(user.id).toBe(1);
        expect(user.username).toBe("FernandoC");
        expect(user.name).toBe("Fernando");
        expect(user.bio).toBe("Programmer");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });
})

//test de getter user
describe('Create test for comproved getters the user', () => {
    test('Add getters', () => {
        const user = new User(1, "FernandoC", "Fernando", "Programmer")
            //comproved test
        expect(user.getUserName()).toBe("FernandoC")
        expect(user.getBio()).toBe("Programmer")
        expect(user.getDateCreated()).not.toBeUndefined()
        expect(user.getLastUpdated()).not.toBeUndefined()
    })
})

//comproved setters de user

describe('add setter a class user', () => {
    test('Add setter', () => {
        const user = new User(1, "Fernandoc", "Fernando", "Programmer")
            //aproved test
        user.setUserName = "FernadoCG"
        expect(user.username).toBe("FernadoCG")

        user.setBio = "new bio"
        expect(user.bio).toBe("new bio")
    })
})