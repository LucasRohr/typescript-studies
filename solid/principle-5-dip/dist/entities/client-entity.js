"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEntity = void 0;
var ClientEntity = /** @class */ (function () {
    function ClientEntity(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(ClientEntity.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return ClientEntity;
}());
exports.ClientEntity = ClientEntity;
