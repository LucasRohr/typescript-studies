"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CollaboratorBoard = /** @class */ (function () {
    function CollaboratorBoard() {
        this._collaborators = [];
    }
    CollaboratorBoard.prototype.hireCollaborator = function (collaborator) {
        this._collaborators.push(collaborator);
    };
    CollaboratorBoard.prototype.dismissCollaborator = function (collaboratorKey) {
        this._collaborators = this._collaborators.filter(function (_collaborator) { return _collaborator !== collaboratorKey; });
    };
    Object.defineProperty(CollaboratorBoard.prototype, "collaborators", {
        get: function () {
            return this._collaborators;
        },
        enumerable: false,
        configurable: true
    });
    return CollaboratorBoard;
}());
exports.default = CollaboratorBoard;
