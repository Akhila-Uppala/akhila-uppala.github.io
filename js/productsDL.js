
	
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
           } ,
       productEvent: "",
       product: []
           
        }