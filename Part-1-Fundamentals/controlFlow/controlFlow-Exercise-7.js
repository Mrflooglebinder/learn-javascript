// Control Flow Exercise 7

const bradPitt = {
    name: 'Brad Pitt',
    role: 'Hero',
    birthDate: '1963-12-18',
    awards: ['Oscar']
};

const angelinaJolie = {
    name: 'Angelina Jolie',
    role: 'Supporting character',
    birthDate: '1975-06-04',
    awards: ['Oscar', 'Golden Globe']
};

const morganFreeman = {
    name: 'Morgan Freeman',
    role: 'Narrator',
    birthDate: '1937-06-01',
    awards: ['Oscar', 'Golden Globe', 'SAG']
};


const movie = {
    title: 'Eclipse of Destiny',
    releaseYear: 2024,
    rating: 4.9,
    director: 'Ava Stryker',
    actors: [bradPitt, angelinaJolie, morganFreeman]
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) 

        // // log all keys and values of the object
        // console.log([key], obj[key]);

        // // log all keys and values of the object
        // console.log(key, obj[key]);

        // // log only the properties of the object
        // console.log(typeof obj[key]); // results in 'object'

        // log the key value pairs for the object properties that contain a string 
        if (typeof obj[key] === 'string') console.log(key, obj[key]);
    
}