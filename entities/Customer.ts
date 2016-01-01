 /// <reference path="User.ts"/>

 module entities {
	
	export class Customer  {

		address : string;
		fullname : string;

	    constructor(public id, public firstname, public lastname) {
	        this.fullname = firstname + " " + lastname;
	    }
	}

}
