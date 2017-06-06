function func1() {
	console.log(func1.caller.toString());
}

function func2() {
	func1();
}

function func3() {
	func1();
}

func2();
func3();