//DATA LAYER-->
	// 	var digitalData = {
	// 		"page": {
	// 			"pageInfo" : {
	// 				"pageName": location.pathname
	// 				}
	// 			},
	// 			product: []
	// 	};
	// function test(){
	// 	$(".snipcart-details").click(function(){
	// 		var i = digitalData.product.length;
	// 		if(i<=0) {
	// 			var pname=jQuery(this).parents('.snipcart-item').find(".snipcart-thumb p").text();
	// 			digitalData.product.push(pname);
	// 		}
	// 		else {
	// 			digitalData.product.pop();
	// 			var pname=jQuery(this).parents('.snipcart-item').find(".snipcart-thumb p").text();
	// 			digitalData.product.push(pname);
	// 		}
	// 	});
	// };
	
	 	var	digitalData = {
			page: {
				pageInfo: {
					pageName: document.title,
					pageURL : window.location.href,
					siteSection :"example site section",
					}
				},
			user: {
				userID: "",
				domain : window.location.hostname,
				device : navigator.userAgent,
				date : new Date().toDateString()
				} 
			
		 }

	