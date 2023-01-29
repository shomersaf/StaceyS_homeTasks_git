const stacey = {
    name: "Stacey",
    profession: "CG artist",
    hobbies: ["musician", "poet", "crazy mom"],
    height: 162,
    weight: 66,
    status: "married",
    isStudent: true,
    cry: function() {
        console.log(`Hello! it is me - ${this.name}`);
    }
};
console.log (stacey);
stacey.cry();