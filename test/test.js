// promise test
let defer = new Promise((resolve, reject) => {
	console.log('start timeout');
	setTimeout(function() {
		console.log(resolve);
		resolve('Hello');	
	});
});

function getCallback() {
	console.log('get callback');
	return (d, b) => {
		console.log(d);
		console.log(b);
		return Promise.reject('abc error');
  }
}

defer
	.then(getCallback())
	.then(a => {
		console.log(a);
	})
	.then(a => {
		console.log(a);
	})
	.catch(err => {
		console.log(err);
	});