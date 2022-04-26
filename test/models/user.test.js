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