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
});