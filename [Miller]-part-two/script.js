//prompt the user for an action. they can type one of the three options: feed,pet, or walk
// step 1 : prompt the user for the pet's name.
// step 2 : prompt the user 6 times for an action.
// Feed increase energy by 2
// Pet increase happyness by 2 and decreases energy by 1
// alerts the user if there is not enough energy for walk
// does not affect happiness or energy if there is not enough energy for a walk
// logs the pet's name the console at the end
// logs the happiness and energy level to console at the end
// the pet's name, happiness, and energy level are all logged to console together in the correct sentence format:______has____happiness and ____energy.

let petName = prompt("What is your pet name?");
let energy = 0;
let happiness = 0;

for (let i = 0; i < 6; i++) {
    let userAction = prompt("Feed,Pet, or Walk?");

    if (userAction === "pet") {
        happiness = happiness + 1;
    }


    if (userAction === "feed") {
        energy = energy + 2;
    }


    if (userAction === "walk") {
        happiness = happiness + 2;
        energy = energy - 1;

    }

    if (energy <= 2) {

        if (userAction === "walk") {

            alert("Not enough energy to enjoy a walk!!");

        }
        else if (energy <= 0) console.log("do not effect happiness and energy if there is not enough energy for a walk")

    }
}



console.log(petName);
console.log(energy);
console.log(happiness);

let str = ("The pet's name" + ":" + [petName] + " " + "has" + " " + [happiness] + " " + "happiness" + " " + "and" + " " + [energy] + " " + "energy" + ".")
console.log(str);//