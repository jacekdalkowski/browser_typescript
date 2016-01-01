/// <reference path="User.ts"/>
var entities;
(function (entities) {
    var Customer = (function () {
        function Customer(id, firstname, lastname) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = firstname + " " + lastname;
        }
        return Customer;
    })();
    entities.Customer = Customer;
})(entities || (entities = {}));
