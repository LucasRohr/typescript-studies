"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collaborator = /** @class */ (function () {
    function Collaborator(name, position) {
        this.name = name;
        this._position = position;
        this._balance = 0;
    }
    Object.defineProperty(Collaborator.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (position) {
            this._position = position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Collaborator.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (balance) {
            this._balance += balance;
        },
        enumerable: false,
        configurable: true
    });
    return Collaborator;
}());
exports.default = Collaborator;
