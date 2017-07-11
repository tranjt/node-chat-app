const expect = require("expect");

const { Users } =  require("./users");

describe("Users", () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: "1",
            name: "Mike",
            room: "Super kek"
        }, {
            id: "2",
            name: "Jane",
            room: "Super kek"
        }, {
            id: "3",
            name: "Julie",
            room: "Lister"
        }];
    });

    it("should add new user", () => {
        const users = new Users();
        const user = { 
            id: "123",
            name: "Joe",
            room: "The Room"
        }

        const resUsers = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it("should remove a user", () => {
        const userId = "1";
        const user = users.removeUser(userId);
        
        expect(user.id).toBe(userId);

        expect(users).toExclude({
            id: "1",
            name: "Mike",
            room: "Super kek"
        });

        expect(users.users.length).toEqual(2);
    });

    it("should not remove a user", () => {
        const userId = "99";
        const user = users.removeUser(userId);        
             
        expect(user).toNotExist(); 
        expect(users.users.length).toEqual(3);
    });

    it("should find user", () => {
        const userId = "1";
        const user = users.getUser(userId);
        expect(user.id).toEqual(userId);
    });

    it("should find user", () => {
        const user = users.getUser("99");
        expect(user).toNotExist();
    });

    it("should return names for Super kek", () => {
        const userList = users.getUserList("Super kek");

        expect(userList).toEqual(["Mike", "Jane"]);

    });

    it("should return names for Lister", () => {
        const userList = users.getUserList("Lister");

        expect(userList).toEqual(["Julie"]);
    });


});