
let role;

// role = "moderator";

switch (role) {
    case "guest":
        console.log("Sw...Case Guest User");
        break;
    case "moderator":
        console.log("Sw...Case Moderator User");
        break;
    default:
        console.log("Sw...Case Unknown User");
}

// same as above but using if else
if (role === 'guest') console.log('if...else Guest User');
else if (role === 'moderator') console.log('if...else Moderator User');
else console.log('if...else Unknown User');