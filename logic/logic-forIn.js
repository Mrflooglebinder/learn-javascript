
const person = {
    name: "Marty McFly",
    occupation: "Student",
    age: 17,
    hometown: "Hill Valley, California",
    timePeriod: "1985",
    interests: ['Skateboarding', 'Playing guitar', 'Hanging out with Doc Brown'],
    clothing: {
      jacket: "Red vest over a denim jacket",
      pants: "Blue jeans",
      shoes: "White Nike sneakers",
      accessories: ['Digital Casio watch', 'Sunglasses']
    },
    family: {
      father: "George McFly",
      mother: "Lorraine Baines-McFly",
      siblings: ["Dave McFly", "Linda McFly"]
    },
    friends: ["Dr. Emmett Brown", "Jennifer Parker"],
    nemesis: ["Biff Tannen", "Buford Tannen", "Griff Tannen", "Mad Dog Tannen"],
    vehicle: {
        type: "Hoverboard",
        details: {
          brand: "Mattel",
          color: "Pink with futuristic decals"
        }
    },
    notableEvents: [
      "Accidentally traveled back to 1955 in a time-traveling DeLorean",
      "Played 'Johnny B. Goode' at the Enchantment Under the Sea Dance",
      "Helped his parents fall in love",
      "Traveled to 2015 to save his future children"
    ],
    characteristics: {
      brave: true,
      resourceful: true,
      loyal: true,
      catchPhrases: [
        "This is heavy.",
        "Nobody calls me chicken.",
        "Hey, Doc!",
        "Wait a minute, Doc. Are you telling me you built a time machine... out of a DeLorean?",
        "I guess you guys aren't ready for that yet. But your kids are gonna love it."
      ],
      dislikes: "Being called chicken"
    }
  };

  
//   // log all parent keys
//   for (let key in person) {
//     console.log(key);
//   }


// log all parent keys and values, including nested objects
for (let key in person) 
console.log(key, person[key]);


// // this will print out the entire object
// console.log(person);


// // log specific properties
// console.log(person['clothing']);


// // This works the same way as the previous example
// console.log(person.clothing);


// // or for nested properties
// console.log(person.clothing.accessories);


// // this will print out the entire object in a readable format
// for (let key in person) {
//     console.log(`${key}: ${JSON.stringify(person[key], null, 2)}`);
// }

