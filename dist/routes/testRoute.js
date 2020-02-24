"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Test = /** @class */ (function () {
    function Test() {
        this.getTest();
    }
    Test.prototype.getTest = function () {
        var app = express_1.Router();
        app.get("/", function (req, res) {
            res.json("Tudo funcionando");
        });
    };
    return Test;
}());
exports.default = Test;
