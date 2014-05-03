var Checkout = function(productPricing){
	this.productPricing = productPricing;
	this.generateAmounts(productPricing);
	this.totalAmount = 0;
}

Checkout.prototype.generateAmounts = function(productPricing) {
	this.amount = [];
	for(var i in productPricing){
		if(productPricing.hasOwnProperty(i)){
			this.amount[i]=0;
		}	
	}
};

Checkout.prototype.total = function() {
	return this.totalAmount;
};

Checkout.prototype.scan = function(products) {
	var i, currentProduct, unitPrice;
	
	for (i = products.length - 1; i >= 0; i--) {
		currentProduct = products[i];
		if(this.productPricing[currentProduct]){
			unitPrice = this.productPricing[currentProduct];
			this.amount[currentProduct]++;
			this.totalAmount += unitPrice;

			if(this.isDiscountedProduct(currentProduct)){
				this.totalAmount -= this.amount[currentProduct]*unitPrice;
				this.totalAmount += this.productPricing[this.getCompoundName(currentProduct)];
				this.amount[currentProduct]=0;
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
	return this.productPricing[compoundName] !== undefined	;
};

