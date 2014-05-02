var Checkout = function(){
	this.totalAmount = 0;
}

Checkout.prototype.total = function() {
	return this.totalAmount;
};

Checkout.prototype.scan = function(products) {
	var i, j=0, unitPrice = 50, multipleUnitsDiscount = 20;
	if("B" == products){
		unitPrice = 30;
	}
	for (i = products.length - 1; i >= 0; i--) {
		this.totalAmount += unitPrice;
		j++;
		if(j%3 == 0){
			j = 0;
			this.totalAmount -= multipleUnitsDiscount;
		}
	};
	
};