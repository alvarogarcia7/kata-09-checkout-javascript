var Checkout = function(){
	this.totalAmount = 0;
}

Checkout.prototype.total = function() {
	return this.totalAmount;
};

Checkout.prototype.scan = function(products) {
	var i, j=0;
	for (i = products.length - 1; i >= 0; i--) {
		this.totalAmount += 50;
		j++;
		if(j%3 == 0){
			j = 0;
			this.totalAmount -= 20;
		}
	};
	
};