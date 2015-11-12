var expect = require("chai").expect;
var converter = require("../app/converter");
require("approvals").mocha();

describe("Color Code Converter", function () {
	describe("RGB to Hex conversion", function () {
		it("converts red", function () {
			var redHex = converter.rgbToHex(255, 0, 0);
			this.verify(redHex);
		});
	});
});