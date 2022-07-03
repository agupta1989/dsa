class MyPromise {
	constructor(executorFunction) {
		this.promiseChain = [];
		this.handleError = () => {};

		this.onResolve = this.onResolve.bind(this);
		this.onReject = this.onReject.bind(this);

		executorFunction(this.onResolve, this.onReject);
	}

	then(onResolve) {
		this.promiseChain.push(onResolve);
		return this;
	}

	onResolve(value) {
		let storedValue = value;

		try {
			this.promiseChain.forEach(nextFunction => {
				storedValue = nextFunction(storedValue);
			});
		} catch (error) {
			this.promiseChain = [];
			this.onReject(error);
		}
	}
	
	catch(handleError) {
		this.handleError = handleError;
		return this;
	}

	onReject(error) {
		this.handleError(error);
	}
}

// TESTING

const promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		if (true) {
			resolve("Success!");
		} else {
			reject("Failure!");
		}
	}, 1000);
});

promise.then(result => result).then(prev => prev).then(prev => console.log(prev)).catch(error => console.log(error));
