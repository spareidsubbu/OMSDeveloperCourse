
scDefine(["scbase/loader!dojo/_base/declare","scbase/loader!extn/customer/details/CustomerDetailsExtnUI"]
,
function(			 
			    _dojodeclare
			 ,
			    _extnCustomerDetailsExtnUI
){ 
	return _dojodeclare("extn.customer.details.CustomerDetailsExtn", [_extnCustomerDetailsExtnUI],{
	loadWishList: function() {
		console.log("Load Wish List");
	}
});
});

