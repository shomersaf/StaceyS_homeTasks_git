const faker = require("faker_shomer_s");

 const users = [];
 for (i = 0; i < 30; i++) {
  users.push(getUser());
 }
const user = faker.generateUserObj()
function getUser() {
  return {
    userName: faker.genUserName(),
    age: faker.genUserAge(),
    birthDate: faker.genBirthDate(),
    nameFromObj:faker.generateUserObj().name(),
    ageFromObj:faker.generateUserObj().age(),
    bDateFromObj:faker.generateUserObj().bDate(),
  };
}

console.log(users);

