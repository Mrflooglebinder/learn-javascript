// Control Flow Exercise 4

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3) => 1
// 12 points -> suspended

// checkSpeed(77);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    
    if (points >= maxPoints)
        console.log('License Suspended');
    else 
        console.log('Points:', points);
}

for (let i = 60; i <= 135; i++) {
    console.log('Speed is: ' + i );
    checkSpeed(i);
}
    