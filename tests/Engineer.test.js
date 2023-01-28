const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', and 'github' properties when called with the 'new' keyword", () => {
            const obj = new Engineer();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
        });

        it("should set 'name', 'id', 'email', and 'github' when created", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const github = "sallyrepo"

            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        });
    });

    describe("getGitHub", () => {
        it("should return this.github", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const github = "sallyrepo";
            const obj = new Engineer(name, id, email, github)
            const herGithub = obj.getGitHub()

            expect(herGithub).toEqual('sallyrepo');
        });
    });
    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const github = "sallyrepo";
            const obj = new Engineer(name, id, email)
            const herRole = obj.getRole()

            expect(herRole).toEqual('Engineer');
        });

    });
});