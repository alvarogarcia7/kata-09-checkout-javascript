describe("Checkout", function(){
	var checkout;
	beforeEach(function () {
		checkout = new Checkout({"A":50, "AAA":130});
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

	describe("applying product B", function(){
		it("should be simple pricing with one product", function(){
			checkout = new Checkout({"B":30});
			checkout.scan("B");
			expect(checkout.total()).toEqual(30);
		});

		it("should be simple pricing with multiple products", function(){
			checkout = new Checkout({"B":30, "BB":45});
			checkout.scan("BB");
			expect(checkout.total()).toEqual(45);
		});
	});

	describe("applying multiple products", function(){
		it("should not matter the order of the products", function(){
			checkout = new Checkout({"A":50, "AAA":130, "B":30});
			checkout.scan("AA");
			checkout.scan("B");
			checkout.scan("A");
			expect(checkout.total()).toEqual(130+30);
		});

		it("should increment the price at each scan", function(){
			checkout = new Checkout({"A":50, "AAA":130, "B":30});
			checkout.scan("AA");
			expect(checkout.total()).toEqual(2*50);
			checkout.scan("B");
			expect(checkout.total()).toEqual(2*50+30);
			checkout.scan("A");
			expect(checkout.total()).toEqual(130+30);
		});
	});
});