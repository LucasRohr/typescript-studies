"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
var ClientController = /** @class */ (function () {
    function ClientController(repository) {
        this.repository = repository;
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
