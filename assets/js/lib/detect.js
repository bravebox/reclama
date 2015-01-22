define(
function ($) {
	'use strict';

	// Init
	    var init = function() {
			var browser_data = getBrowserObject();
			return browser_data;
		};

	// Functions
	    var getBrowserObject = function() {
			// array
			    var dataBrowser = [
			        { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
			        { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" },
			        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
			        { string: navigator.userAgent, subString: "Safari", identity: "Safari" },
			        { string: navigator.userAgent, subString: "Opera", identity: "Opera" }
			    ];

			// result
			    var browser = searchString(dataBrowser) || "Other";
			    var version = searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || "Unknown";

			// return object
		    	var info = {
		        	browser: browser,
					version: version
		    	}

	    	return info;
	    };
	    
	    var searchString = function(data) {
	        for (var i=0 ; i < data.length ; i++) {
	            var dataString = data[i].string;
	            versionSearchString = data[i].subString;
	            if (dataString.indexOf(data[i].subString) !== -1) {
	                return data[i].identity;
	            }
	        }
	    };

	    var searchVersion = function(dataString) {
	        var index = dataString.indexOf(this.versionSearchString);
	        if (index === -1) return;
	        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	    };
		
		return {
			init: init
		};
});