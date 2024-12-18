"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
var InMemoryRepository_1 = require("../repositories/InMemoryRepository");
var ClientController = /** @class */ (function () {
    function ClientController() {
        this.repository = new InMemoryRepository_1.InMemoryRepository();
    }
    ClientController.prototype.addClient = function (cliente) {
        this.repository.addClient(cliente);
    };
    ClientController.prototype.getClients = function () {
        return this.repository.getClients();
    };
    return ClientController;
}());
exports.ClientController = ClientController;
