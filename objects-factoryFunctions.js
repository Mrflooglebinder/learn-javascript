// Objects: Factory Functions

// Factory Function
function createCircle(radius) {
    return {
        radius,         
        draw() {        
            console.log('draw');
        }
    };
}