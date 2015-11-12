var expect = require("chai").expect;
var converter = require("../../app/converter");
require("approvals").mocha();

describe("Color Code Converter", function () {	
	describe("Hex to RGB conversion", function () {
		it("converts the basic colors", function () {
			var red = converter.hexToRgb("ff0000");
			this.verify(red);
		});
	});
})