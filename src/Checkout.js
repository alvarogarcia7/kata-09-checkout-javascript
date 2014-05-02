var Checkout = function(){
	this.totalAmount = 0;
}

Checkout.prototype.total = function() {
	return this.totalAmount;
};

Checkout.prototype.scan = function(products) {
	this.totalAmount += 50;
};