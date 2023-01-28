const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing 'name', 'id', 'email', and 'school' properties when called with the 'new' keyword", () => {
            const obj = new Intern();

            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
        });

        it("should set 'name', 'id', 'email', and 'school' when created", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const school = "Temple"

            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });
    });

    describe("getSchool", () => {
        it("should return this.school", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const school = "Temple";
            const obj = new Intern(name, id, email, school)
            const herSchool = obj.getSchool()

            expect(herSchool).toEqual('Temple');
        });
    });
    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const name = 'Sally';
            const id = 4;
            const email = "sally@mail.com";
            const school = "Temple";
            const obj = new Intern(name, id, email, school)
            const herRole = obj.getRole()

            expect(herRole).toEqual('Intern');
        });

    });
});