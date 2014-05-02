var Checkout = function(productPricing){
	this.productPricing = productPricing;
	this.amount = [];
	for(var i in productPricing){
		if(productPricing.hasOwnProperty(i)){
			this.amount[i]=0;
		}	
	}
	this.totalAmount = 0;
}

Checkout.prototype.total = function() {
	return this.totalAmount;
};

Checkout.prototype.scan = function(products) {
	var i, j=0, unitPrice, multipleUnitsDiscount = 20;
	
	for (i = products.length - 1; i >= 0; i--) {
		if(this.productPricing[products[i]]){
			unitPrice = this.productPricing[products[i]];
			this.amount[products[i]]++;
			this.totalAmount += unitPrice;
		}

		if(this.isDiscountedProduct(products[i])){
			this.totalAmount -= multipleUnitsDiscount;
		}
	};

};

Checkout.prototype.isDiscountedProduct = function(product) {

	var compoundName = '';

	if(this.amount[product] === 2){
		compoundName= product+""+product;
	} else if(this.amount[product] === 3) {
		compoundName= product+""+product + ""+product;
	}

	if(this.productPricing[compoundName]){
		this.amount[product] = 0;
		return true;
	} else {
		return false;
	}
};

