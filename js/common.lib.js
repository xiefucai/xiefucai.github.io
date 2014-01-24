(function(common){
	var lib = {
		'string':{
			'parseJSON':function(s){
				try {
					eval('common.__json__=' + s);
					return common.__json__;
				} catch(e) {
					return null;
				}
			},
			'toJSON':function(s){
				if (window.JSON) {
					try {
						return JSON.parse(s);
					} catch(e) {
						return null;
					}
				} else {
					try {
						eval('common.__json__=' + s);
						return common.__json__;
					} catch(e) {
						return null;
					}
				}
			}	
		},
		'json':{
			'toString':function(o){
				if (window.JSON){
					return JSON.stringify(o);
				}
			
				var arr = [],
					format = function(s){
						if (typeof s === 'object' && s !== null){
							if (s.length){
								var sarr = [];
								for(var j=0,jk=s.length;j<jk;j++){
									sarr.push(format(s[j]));
								}
								return '['+sarr.join(',')+']';
							}
							return common.json.toString(s);
						}else if(typeof s === 'string'){
							return '"'+s+'"';
						}else if(typeof s === 'number'){
							return '"'+s+'"';
						}else{
							return s;
						}
					};
				for(var i in o){
					arr.push(['"'+i+'"',format(o[i])].join(':'));
				}
				return '{'+arr.join(',')+'}';
			}	
		}
	}

	$.extend(window.common,lib);
})(window.common);