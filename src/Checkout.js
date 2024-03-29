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

Checkout.prototype.getPrice = function(product) {
	return this.productPricing[product];
};

Checkout.prototype.total = function() {
	return this.totalAmount;
};

Checkout.prototype.addUnit = function(product) {
	this.amount[product]++;
};

Checkout.prototype.resetUnits = function(product) {
	this.amount[product] = 0;
};

Checkout.prototype.getAmount = function(product) {
	return this.amount[product];
};

Checkout.prototype.scan = function(products) {
	var i, currentProduct, unitPrice;
	
	for (i = products.length - 1; i >= 0; i--) {
		currentProduct = products[i];
		unitPrice = this.getPrice(currentProduct);
		if(unitPrice){
			this.addUnit(currentProduct);
			this.totalAmount += unitPrice;

			if(this.isDiscountedProduct(currentProduct)){
				this.totalAmount -= this.getAmount(currentProduct) * unitPrice;
				this.totalAmount += this.getPrice(this.getCompoundName(currentProduct));
				this.resetUnits(currentProduct);
			}	
		}
	};
};

Checkout.prototype.getCompoundName = function(product) {
	var compoundName = '';

	if(this.amount[product] === 2){
		compoundName= product + "" + product;
	} else if(this.amount[product] === 3) {
		compoundName= product + "" + product + "" + product;
	}
	return compoundName;
};

Checkout.prototype.isDiscountedProduct = function(product) {
	var compoundName = this.getCompoundName(product);
	return this.productPricing[compoundName] !== undefined	;
};

