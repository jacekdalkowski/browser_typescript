/// <reference path="../entities/Customer.ts"/>
var services;
(function (services) {
    var CustomersService = (function () {
        function CustomersService() {
            this._customers = new Array();
            this._customers.push(new entities.Customer(1, 'Jacek', 'Dalkowski'));
        }
        CustomersService.prototype.getCustomers = function () {
            return this._customers;
        };
        return CustomersService;
    })();
    services.CustomersService = CustomersService;
})(services || (services = {}));
