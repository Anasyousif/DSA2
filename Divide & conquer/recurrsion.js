function takeShower() {
    return "Showering!"
}

function eatBreakfast() {
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Proten Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok get ready to go to work")
}
wakeUp()

///////////// first recuerrsion function
function countDown(num) {
    if (num <= 0) {
        console.log("All done")
        return; 
    }
    console.log(num)
    num--;
    countDown(num);
}
countDown(5)

function sumRange(num) {
    if (num === 1) return 1; 
    return num + sumRange(num - 1)
}

sumRange(4)

/////////////////////////////////////////////
// non recursive
function factorial(num) {
    let total  = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

function factorial2(num) {
    if (num === 1) return 1; 
    return num * factorial2(num-1);
}

factorial2(5)