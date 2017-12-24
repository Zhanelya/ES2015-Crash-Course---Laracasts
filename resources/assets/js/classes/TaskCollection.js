export default class TaskCollection{
	constructor(tasks = []){
		this.tasks = tasks
	}

	log(){
		//this.tasks.foreach(function(task){
		//	console.log(task)
		//})

		//the code snippet above will be same as the following using an arrow syntax:
		this.tasks.forEach(task => console.log(task));
		
		//if you have multiple parameters, you need to wrap them in parentheses:
		this.tasks.forEach((task, index) => console.log(task, index));
		
		//if you have no parameters, you need to have empty parentheses:
		this.tasks.forEach(() => console.log('task'));
	
		//beware that the value of 'this' is different in arrow syntax

		//and note that return keyword is implicit, you don't need to use it
	}

	prepare(){
		this.tasks.forEach(task => task.toGulp());
	}

	dump(){
		console.log(this.tasks);
	}
}

export let taskCollectionFoo = 'taskCollectionFoo';