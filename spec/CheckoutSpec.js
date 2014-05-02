describe("Checkout", function(){
	var checkout;
	beforeEach(function () {
		checkout = new Checkout();
	});
	
	it("should exist", function(){
		expect(checkout).toBeTruthy();
	});

	it("should be zero when there are no items", function(){
		expect(checkout.total()).toEqual(0);
	});

	it("should be simple pricing with one product", function(){
		checkout.scan("A");
		expect(checkout.total()).toEqual(50);
	});

	it("should apply special pricing with three products in a row", function(){
		checkout.scan("AAA");
		expect(checkout.total()).toEqual(130);
	});
});