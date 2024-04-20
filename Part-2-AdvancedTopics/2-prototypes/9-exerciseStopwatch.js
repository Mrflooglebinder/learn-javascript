// Prototypes: Exercise Soptwatch

// Using the Stopwatch object from the previous exercise.
// Move the methods 'start', 'stop', 'reset' to the prototype of the Stopwatch object.

// Note: Moving the methods to the prototype is an optimization technique and is not actually necessary for the stopwatch as it is a simple object.
// Examples of when you would are as follows:
// - When you have many instances of the object.
// - When the methods are heavy on memory.
// - When the methods are shared across instances.

// Forewarning: In moving the methods to the prototype, this will introduce another issue. Which is part of this exercise. 

function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    
    Object.defineProperty(this, 'duration', {
        get: function() { return duration;},
        set: function(value) { duration = value;}

    });
    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime;}

    });
    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime;}

    });
    Object.defineProperty(this, 'running', {
        get: function() { return running;}

    });

}


const sw = new Stopwatch();


Object.prototype.start = function() {
    if (this.running)
        throw new Error('Stopwatch has already started.');

    this.running = true;

    this.startTime = new Date();
};

Object.prototype.stop = function() {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

    this.running = false;

    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds
};

Object.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

sw.duration = 11;


// This exercise is to demonstrate the issue of premature optimization.
// Where we have modified the stopwatch by moving the methods to prototypes when in reality it was not necessary.
// and in doing so we have introduced a bug where the duration is able to be manipulated directly (which is not good).

// Famous Quote:
// "We should forget about small efficiencies, say about 97% of the time: 
// Premature Optimization is the Root of all Evil." - Donald Knuth