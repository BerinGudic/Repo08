var sum = 0;

function addThree() {
    sum += 3;
    console.log("addThree:", sum);
    
}

function addFive() {
    sum += 5;
    console.log("addFive:", sum);
}
console.log(addThree());
console.log(addFive());
module.exports = {
    addThree,
    addFive
};



