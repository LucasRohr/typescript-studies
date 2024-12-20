"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresRepository = void 0;
// Fake PostgreSQL DB representation using a class
var PostgresRepository = /** @class */ (function () {
    function PostgresRepository() {
        this.db = {};
    }
    PostgresRepository.prototype.addClient = function (client) {
        this.db[client.getId] = client;
    };
    PostgresRepository.prototype.getClients = function () {
        var clients = [];
        for (var chave in this.db) {
            if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
                clients.push(this.db[chave]);
            }
        }
        return clients;
    };
    return PostgresRepository;
}());
exports.PostgresRepository = PostgresRepository;
