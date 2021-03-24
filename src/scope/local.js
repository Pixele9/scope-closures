var scope = "im global"

const functionScope = () => {
	var scope = "im local"
	const func = () => {
		return scope
	}
	console.log(func())
}

functionScope()