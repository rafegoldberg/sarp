module.exports= {
	sep:{
		case: '-',
		bem:{//@example
			child:'--',
			modf:'_',
			modv:'='
			}
		},
	case:{
		un:{
			camel(str,sep=null){
				var
				sep= sep||UiApp.utl.sep.case,
				unc= require('uncamelize');
				return unc(str).toLowerCase().split(' ').join(sep||'-');
				}
			}
		}
	};