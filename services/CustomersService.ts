/// <reference path="../entities/Customer.ts"/>


module services {

	export class CustomersService{

		private _customers: Array<entities.Customer>;

		constructor(){
		     this._customers = new Array<entities.Customer>();
		     this._customers.push(new entities.Customer(1, 'Jacek', 'Dalkowski'));
		}

		getCustomers(){
			return this._customers;
		}
	}
 
}