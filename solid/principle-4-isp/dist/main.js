"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckPaymentModel = /** @class */ (function () {
    function CheckPaymentModel(valor) {
        this.value = valor;
    }
    CheckPaymentModel.prototype.pay = function () {
        console.log("Payment of $ ".concat(this.value, " will be made using check."));
    };
    return CheckPaymentModel;
}());
var MoneyPaymentModel = /** @class */ (function () {
    function MoneyPaymentModel(valor) {
        this.value = valor;
    }
    MoneyPaymentModel.prototype.pay = function () {
        console.log("Payment of $ ".concat(this.value, " will be made using money."));
    };
    return MoneyPaymentModel;
}());
var PixPaymentModel = /** @class */ (function () {
    function PixPaymentModel(valor) {
        this.value = valor;
    }
    PixPaymentModel.prototype.pay = function () {
        console.log("Payment of $ ".concat(this.value, " will be made using Pix."));
    };
    return PixPaymentModel;
}());
var checkPayment = new CheckPaymentModel(100);
checkPayment.pay();
var moneyPayment = new MoneyPaymentModel(200);
moneyPayment.pay();
var pixPayment = new PixPaymentModel(300);
pixPayment.pay();
