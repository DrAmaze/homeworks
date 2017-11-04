
// Hammer time brah

window.setTimeout(function () {
  alert('HAMMER TIME!');
}, 5000);

// setTimeout must be a asynchronous!

function hammerTime(time) {
  window.setTimeout(function() {
    alert(`${time} is hammertime!`);
  });
};

hammerTime(`noon`);

// some tea? some biscuits?

const readLine = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function politeBrunch() {
  reader.question("Would you like some tea?", function (ans) {
    console.log(`${ans}!`);
    reader.question("How 'bout sum biscuits?", function (secondAans) {
      console.log(`${secondAns}!`);

      const first = (ans === 'yes') ? 'do' : 'don\'t';
      const second = (secondAns === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
}

// cats n dogs (is it raining?)

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase(Markov);

Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);
