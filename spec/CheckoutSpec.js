describe("Checkout", function(){
	var checkout;
	beforeEach(function () {
		checkout = new Checkout({"A":50});
	});
	
	it("should exist", function(){
		expect(checkout).toBeTruthy();
	});

	it("should be zero when there are no items", function(){
		expect(checkout.total()).toEqual(0);
	});

	describe("applying product A", function(){
		it("should be simple pricing with one product", function(){
			checkout.scan("A");
			expect(checkout.total()).toEqual(50);
		});

		it("should apply special pricing with three products in a row", function(){
			checkout.scan("AAA");
			expect(checkout.total()).toEqual(130);
		});
	});

	it("should be simple pricing with one product", function(){
			checkout = new Checkout({"B":30});
			checkout.scan("B");
			expect(checkout.total()).toEqual(30);
		});
});