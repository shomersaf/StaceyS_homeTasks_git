function genUserName() {
  const userName = `user_${Math.ceil(Math.random() * 99999)}`;
  return userName;
}
function genUserAge() {
  const userAge = Math.ceil(Math.random() * 120);
  return userAge;
}

function genBirthDate() {
  const birthDate = new Date().toString();
  return birthDate;
}

function generateUserObj() {
  const userObj = {
    name: genUserName,
    age: genUserAge,
    bDate: genBirthDate,
  };
  return userObj;
}


module.exports = {
  genUserName,
  genUserAge,
  genBirthDate,
  generateUserObj,
};
