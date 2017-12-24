class Person{
  constructor(name, email){
    this.name = name;
    this.email = email;
    this.foos = [];
  }

  static introduce(...args){
  	return new Person(...args);
  }

  get foo(){
  	return this.foos;
  }

  set foo(newFoo){
  	this.foos.push(newFoo);
  }

  greet(){
  	return this.name + ' says hello.'; //review template strings
  }

  changeName(newName){
	this.name = newName;
  }
}

export default Person;