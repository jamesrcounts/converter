var expect = require("chai").expect;
var converter = require("../../app/converter");
require("approvals").mocha();

describe("Color Code Converter", function () {
	describe("RGB to Hex conversion", function () {
		it("converts blue", function () {
			var blueHex = converter.rgbToHex(0, 255, 0);
			this.verify(blueHex);
		});
	});
});