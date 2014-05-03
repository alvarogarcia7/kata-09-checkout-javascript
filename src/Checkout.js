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
	var i, j=0, unitPrice;
	
	for (i = products.length - 1; i >= 0; i--) {
		if(this.productPricing[products[i]]){
			unitPrice = this.productPricing[products[i]];
			this.amount[products[i]]++;
			this.totalAmount += unitPrice;

			if(this.isDiscountedProduct(products[i])){
				this.totalAmount -= this.amount[products[i]]*unitPrice;
				this.totalAmount += this.productPricing[this.getCompoundName(products[i])];
				this.amount[products[i]]=0;
			}	
		}
	};

};

Checkout.prototype.getCompoundName = function(product) {
	var compoundName = '';

	if(this.amount[product] === 2){
		compoundName= product+""+product;
	} else if(this.amount[product] === 3) {
		compoundName= product+""+product + ""+product;
	}
	return compoundName;
};

Checkout.prototype.isDiscountedProduct = function(product) {

	var compoundName = this.getCompoundName(product);

	if(this.productPricing[compoundName]){
		return true;
	} else {
		return false;
	}
};

