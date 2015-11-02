var BabeCounter = function(name, options) {
	this.name = name;
	this.count = 0;
	this.counter = document.getElementById(options.counter);

	this.get = function() {
		var cookies = document.cookie.split(';');

		for (var i = 0; i < cookies.length; i++) {
			var cook = cookies[i];
			var index = cook.indexOf(this.name) 
			if (index != -1 ) {
				this.count = parseFloat(cook.substring(cook.indexOf('=') + 1));
				this.counter.innerHTML = this.count;
 			}
		}
	}

	this.set = function() {
		document.cookie = this.name + "=" + this.count;
	}

	this.up = function() {
		this.counter.innerHTML = ++this.count;
	}

	window.addEventListener('unload', function() {
		this.set();
	}.bind(this));

	var b = document.getElementById(options.button).onclick = this.up.bind(this);

	this.get();
}

var zach = new BabeCounter("zach", {
	button: "Z",
	counter: "Zc"
});
var ash  = new BabeCounter("ashley", {
	button: "A",
	counter: "Ac"
});