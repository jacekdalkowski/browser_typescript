/// <reference path="services/CustomersService.ts"/>

// some fake stuff
document.body.innerHTML = new services.CustomersService().getCustomers()[0].firstname;