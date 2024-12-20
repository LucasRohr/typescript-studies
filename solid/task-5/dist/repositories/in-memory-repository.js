"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRepository = void 0;
var InMemoryRepository = /** @class */ (function () {
    function InMemoryRepository() {
        this.db = [];
    }
    InMemoryRepository.prototype.addClient = function (client) {
        this.db.push(client);
    };
    InMemoryRepository.prototype.getClients = function () {
        return this.db;
    };
    return InMemoryRepository;
}());
exports.InMemoryRepository = InMemoryRepository;
