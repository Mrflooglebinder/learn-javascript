// Prototype Inheritance: Exercise 2 Polyphormism
function HtmlElement() {
    this.click = function() {
      console.log('clicked');
    }
  };
  
HtmlElement.prototype.focus = function() {
    console.log('focused');
}
  
function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        return `
        <select>${this.items.map(item => `
        <option>${item}</option>`).join('')}
        </select>`;
    }
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
    this.src = src;
    
    this.render = function() {
        return `<img src="${this.src}" alt="Image" style="width: 150px; height: 150px;" />`;
    }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('https://floogle.au/assets/floogle-DSCNaQrv.webp')
    ];

for (let element of elements) {
    console.log(element.render());
}

const outputElement = document.getElementById('output');

elements.forEach(element => {
    const container = document.createElement('div');
    container.innerHTML = element.render();
    outputElement.appendChild(container);
});
