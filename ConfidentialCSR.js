<script>
(function () {
    var confidentialFieldCtx = {};

  
    confidentialFieldCtx.Templates = {};
    confidentialFieldCtx.Templates.Fields = {
        "Confidential": {
"View": confidentialFieldViewTemplate
        }
    };

    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(
        confidentialFieldCtx
        );
})();

function confidentialFieldViewTemplate(ctx) {

    var _confidentialValue = ctx.CurrentItem.Confidential;

     if (_confidentialValue == 'yes')
     {
        return "<img src='../SiteAssets/Img/shield.png'/>";
     }};
    
</script>
    