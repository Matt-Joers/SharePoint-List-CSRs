<script>
(function () {
    var condFieldCtx = {};
    // Define template variable  
    condFieldCtx.Templates = {};
    // Define your required fields and functions to call in each case.
    // In our case the field is Progress
    // Override Function is PatientProgressViewTemplate
    condFieldCtx.Templates.Fields = {
        "TotalPercentage": {"View": PercentCompleteFormat1},
    };
    // Register the template override with SP2013 
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(condFieldCtx);

})();

// Red: #fb0101
// Yellow: #f6f900
// Green: #51ce35


(function () {
    var condFieldCtx = {};

    // Define template variable  
    condFieldCtx.Templates = {};

    // Define your required fields and functions to call in each case.
    // In our case the field is Progress
    // Override Function is PatientProgressViewTemplate
    condFieldCtx.Templates.Fields = {
        "TotalPercentage": {"View": PercentCompleteFormat1},

    };
    // Register the template override with SP2013 
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(condFieldCtx);

})();

function PercentCompleteFormat1(ctx) 
{
var TotalPercentage = ctx.CurrentItem.TotalPercentage;

if (TotalPercentage <=1 ) {
	 return '<div style="background: #BCBCBC; display:block; height: 20px; width: 100px;"><span style="color: #fff; position:absolute; text-align: center; width: 100px;">'+ctx.CurrentItem.TotalPercentage+'</span><div style="background: #A9A9A9; height: 100%; width: '+ctx.CurrentItem.TotalPercentage.replace(" %", "")+'%"></div></div>';
	}
else if (TotalPercentage > 1 && TotalPercentage <= 30) {
	 return '<div style="background: #BCBCBC; display:block; height: 20px; width: 100px;"><span style="color: #fff; position:absolute; text-align: center; width: 100px;">'+ctx.CurrentItem.TotalPercentage+'</span><div style="background: #D2421F; height: 100%; width: '+ctx.CurrentItem.TotalPercentage.replace(" %", "")+'%"></div></div>';
	}
else if (TotalPercentage >= 30.01 && TotalPercentage <=69) {
		return '<div style="background: #BCBCBC; display:block; height: 20px; width: 100px;"><span style="color: #fff; position:absolute; text-align: center; width: 100px;">'+ctx.CurrentItem.TotalPercentage+'</span><div style="background: #ffa500; height: 100%; width: '+ctx.CurrentItem.TotalPercentage.replace(" %", "")+'%"></div></div>';
	}
else if (TotalPercentage  >= 69.01)  {
		return '<div style="background: #BCBCBC; display:block; height: 20px; width: 100px;"><span style="color: #fff; position:absolute; text-align: center; width: 100px;">'+ctx.CurrentItem.TotalPercentage+'</span><div style="background: #51ce35; height: 100%; width: '+ctx.CurrentItem.TotalPercentage.replace(" %", "")+'%"></div></div>';
		}
		};


</script>

