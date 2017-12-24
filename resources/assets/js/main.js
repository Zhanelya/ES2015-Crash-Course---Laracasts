import Person from './classes/Person';
import ConsoleLogger from './classes/ConsoleLogger';
import AlertLogger from './classes/AlertLogger';
import Task from './classes/Task';
import TaskCollection, {taskCollectionFoo} from './classes/TaskCollection';
import User from './classes/User';

/***********************************************************************************************************/

console.log('CONST, VAR, LET');
//const vs var & let: const is not re-assignable
//however you still can change a const once assigned (e.g. push into a const array)
//some people say you should default to use const, and change it to let later if you need to change the variable
//some people say defaulting to const is pre-mature optimisation, so you can initially default to let instead
//let vs var: use var only if you have a valid use case

const names = ['John', 'Sandy']

function fire(bool){
	if(bool){
		let foo = 'bar'; 
		console.log(foo); 	//bar
	}else{
		//console.log(foo);	//undefined
	}
}

fire(false);
console.log(names);

/***********************************************************************************************************/

console.log('DEFAULT PARAMETERS');
//you can set a default value for your parameters
//you can even use functions as a default value

function defaultDiscountRate(){
	return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()){
	return cost - (cost*discount);
}

function applyDiscount2(cost, discount = .10){
	return cost - (cost*discount);
}

console.log(applyDiscount(100));
console.log(applyDiscount2(200));

/***********************************************************************************************************/

console.log('REST PARAMETERS');
//rest parameter takes single args and converts them into an array
//make sure your rest parameter is the last in the arguments list

function sumWithRestParams(...numbers){ 	
	return numbers.reduce(
		(prev, current) => prev + current
	);
}

console.log(sumWithRestParams(1,2,3));

/***********************************************************************************************************/

console.log('SPREAD OPERATOR');
//spread operator takes an array and converts it into single args

function sumWithSpreadOp(x,y){
	return x + y;
}

console.log(sumWithSpreadOp(...[1,2]));

/***********************************************************************************************************/

console.log('TEMPLATE STRINGS')

let name = 'Foo';
let template = `
<div class="Alert">
	<p>${name}</p>
</div>`.trim();

console.log(template);

/***********************************************************************************************************/
console.log('OBJECT ENHANCEMENTS');

function getPerson(){
	let name = 'John';
	let age = 25;

	return {
		name,								//object shorthand
		age,
		greet() {
			return `Hello, ${this.name}`;	//method shorthand/short method syntax
		}
	};
}

console.log(getPerson().name);

let personKaren ={
	karensName: 'Karen',
	karensAge:32
};

let {karensName, karensAge} = personKaren;		//object destructuring
console.log(karensName);

let data = {
	name: 'Karen',
	age: 32,
	results: ['foo','bar'],
	count: 30
}

function getDataOldES5Way(data){
	var results = data.results;
	var count = data.count;
	console.log(results, count);
}

function getData1(data){
	let {results, count} = data;
	console.log(results, count);
}

function getData2({results, count}){
	console.log(results, count);
}

getDataOldES5Way(data)
getData1(data);
getData2(data);

/***********************************************************************************************************/

console.log('CLASSES');
//classes are solely a syntactic sugar for function prototypes
let person = new Person('Zhanelya', 'zhanelya@mail.com');
console.log(person.greet());
person.changeName('Adam');
console.log(person.greet());

console.dir(person);

//you can use static initialisation like in most traditional languages
let newPerson = Person.introduce('John', 'john@mail.com');
console.log(newPerson.greet());

//you can use class getters and setters
console.log(newPerson.foo);
newPerson.foo = 'first';
newPerson.foo = 'second';
console.log(newPerson.foo);

function log(strategy){
	strategy.handle();
}

log(new ConsoleLogger());
log(new AlertLogger());

/***********************************************************************************************************/
console.log('ARROW SYNTAX & MODULE EXPORTS');

new TaskCollection([
	new Task, new Task, new Task
]).log();

new TaskCollection([
	new Task, new Task, new Task
]).prepare();

let testNames = ['Taylor', 'Jeffrey', 'Adam'];
testNames = testNames.map(name => name + ' is cool.');
//or using template strings:
testNames = testNames.map(name => `${name} Very cool!`);
console.log(testNames);

console.log(taskCollectionFoo);

/***********************************************************************************************************/

console.log('PROMISES');
//placeholders for actions that have not yet been completed, or have not even started yet
//for example, if you use vue:
//var promise = this.$http.get('/some/path');
//promise.then(function(data){
//	...
//}).catch(function(err){
//	...
//})

//OR

//var promise = this.$http.get('/some/path');
//promise.then(function(data){
//	...
//}, function(err){
//	...
//})

var timer = function(length){
	return new Promise(function(resolve, reject){
		console.log('Init Promise');

		setTimeout(function(){
			console.log('Timeout done.');
			resolve();
		}, length);
	});
}

	
//the following will get called on resolve:
timer(4000).then(function(){
	console.log('Proceed now that timer has concluded.');
});

/***********************************************************************************************************/

console.log('USEFUL STRING ADDITIONS');

let title = 'Red Rising';

//'str'.includes()
if(title.includes('Red')){
	console.log('This book title includes Red');
}

if(['Foo', 'Bar'].includes('Bar')){
	console.log('Array with Bar includes Bar');
}

//'str'.startsWith()
if(title.startsWith('Red')){
	console.log('This book title starts with Red');
}

if(title.startsWith('Rising', 4)){
	console.log('This book title has Rising at its 5th letter');
}

//'str'.endsWith()
if(title.endsWith('ing')){
	console.log('This book title ends with ing');
}

//Check if a string ends with "Ris", assuming the string is 7 characters long:
if(title.endsWith('Ris', 7)){
	console.log('This book title ends with Ris, assuming it\'s 7 characters long');
}

//'str'.repeat()
console.log(title.repeat(10));

/***********************************************************************************************************/

console.log('USEFUL ARRAY ADDITIONS');

let arr =[2, 4, 6, 8, 10];
//[].includes
console.log(arr.includes(8)); //part of ES2016/2017 - not part of the official ES2015

//[].find()
console.log(arr.find(item => item > 5)); //should return 6

//[].findIndex()
console.log(arr.findIndex(item => item > 5)); //should return 2

let users = [
	new User('Jeffrey', false),
	new User('Jane', true),
	new User('Jack', false)
];

console.log(users.find(user => user.isAdmin).name);

console.log('[].keys()')
Object.keys(arr).forEach(arrKey => console.log(arrKey));

console.log('[].values()');
Object.values(arr).forEach(arrVal => console.log(arrVal));

console.log('[].entries()');
let arrItems = arr.entries();
for(let name of arrItems) console.log(name);

console.log('[].fill()');
let luckyNumbers = new Array(5).fill(13);
console.log(luckyNumbers);

/***********************************************************************************************************/

console.log('GENERATORS');
//generators allow a function to exit (pause) at a particular point (at yield) with an ability to resume it preserving its state
//* indicates a generator function which returns an iterator
function *numbers(){ //tje star can be closer to function, to function name, or separated from both with a space
	console.log('Begin generator');
	yield 1;
	yield 2;
	yield 3;
}

let iterator = numbers();
console.log(iterator.next()); //will return the value (1) and the status (done:false)
console.log(iterator.next().value); //will return 2

function *range(start, end){
	while(start <= end){
		yield start++;
	}
}

let rangeIterator = range(1, 5);
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

//the of keyword understands iterators and fetches values instead of the iterator objects
for(let i of range(1, 4)) console.log(i);

//spread operator + generator
console.log([...range(1, 3)]);
/***********************************************************************************************************/

console.log('SETS');
//collections of values where each item must be unique
let itemsSet = new Set(['one', 'two', 'three', 'three']);
console.log(itemsSet);
console.log(itemsSet.size);
itemsSet.add('four');
itemsSet.delete('two');
console.log(itemsSet);
console.log(itemsSet.has('four'));
itemsSet.forEach(item => console.log(item));
itemsSet.clear();
console.log(itemsSet);

let tags1 = ['php', 'javascript', 'php', 'vue'];
console.log(tags1);
let tagsSet1 = new Set(tags1);
console.log(tagsSet1);
let tags2 = [...tagsSet1].filter(tag => tag.length === 3);
console.log(tags2);
let tagsSet2 = new Set(tags2);
console.log(tagsSet2);