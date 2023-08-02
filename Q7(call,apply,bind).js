// Q7 CALL APPLY BIND
var person = {
    name : "Mudassir Arif",
    hello : function(thing){
        console.log(this.name + " says hello " + thing);
    },
}

var alterEgo={
    name : "Abdul ahad",
};

// Simple example
// person.hello("world");

// Example of call
// person.hello.call(alterEgo,"world");

// Example of apply
// person.hello.apply(alterEgo,["world"]);

// Example of bind
const newHello = person.hello.bind(alterEgo);
newHello("world");