
(function () {
    var condFieldCtx = {};

    // Define template variable  
    condFieldCtx.Templates = {};

    // Define your required fields and functions to call in each case.
    // In our case the field is Progress
    // Override Function is ClientProgressViewTemplate
    condFieldCtx.Templates.Fields = {
        "Status": {"View": StatusFormat},

    };
    // Register the template override with SP2013 
	SPClientTemplates.TemplateManager.RegisterTemplateOverrides(condFieldCtx);

})();
 // Total Percent Field Conditional Formatting


function StatusFormat(ctx) {

var Status = ctx.CurrentItem.Status;

if (Status == "Draft") {
	 return  "<span style='color: #fff; background-color: #05eafd; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
else if (Status == "Submitted") {
	 return "<span style='color: #fff; background-color: #0097a3; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
else if (Status == "Not Started") {
	 return "<span style='color: #000000; background-color: #fff; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
else if (Status == "In Progress") {
	 return "<span style='color: #fff; background-color: #009a0a; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
else if (Status == "Issues") {
	 return "<span style='color: #fff; background-color: #ee9000; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
else if (Status == "Requires Attention") {
	 return "<span style='color: #fff; background-color: #ff0000; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
else if (Status == "Complete") {
	 return "<span style='color: #fff; background-color: #b8a8ff; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
else if (Status == "Deferred") {
	 return "<span style='color: #fff; background-color: #70d7ff; padding:2px; font-weight:500; text-transform:uppercase;'>" +ctx.CurrentItem.Status+ "</span>";
	}
};