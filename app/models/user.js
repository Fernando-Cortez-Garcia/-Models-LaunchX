class User {
    constructor(id, username, name, bio) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }
    getUserName() {
        return this.username;
    }
    getBio() {
        return this.bio;
    }
    getDateCreated() {
        return this.dateCreated;
    }
    getLastUpdated() {
        return this.lastUpdated;
    }
    set setUserName(newUsername) {
        this.username = newUsername
    }
    set setBio(newBio) {
        this.bio = newBio
    }
}
//export the class
module.exports = User;