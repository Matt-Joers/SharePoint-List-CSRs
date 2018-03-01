"# SharePoint_List_CSRs" 
<html>
  <h1>CLIENT SIDE RENDERING SCRIPTS</h1>
  <ul>
    <li> <b>Confidential CSR Script</b> - Based on a "Confidential" field's equaling either "Yes" or "No" display a small shield icon to symbolize a secure file</li><br>
    <li> <b>List Percentage CSR Script</b> - Based on the percentage in the field, display a "% complete bar" with a specific color value <i><small>(if % <=1 than Gray; if % is >1 AND % is <=30, than display Red; if % is >= 30.1 and % is <=69 than display Yellow; if % is >= to 69.01 than display Green)</i></small></li><br>
      <li> <b>Row Color CSR Script</b> - Depending on the status of a field, specify a color for that record's row</li><br>
  </ul>
  <h3>CSR Script Use Instructions</h3>
  <p>There are a few ways to implement the CSR scripts, you can either reference the file from a CEWP or place it in a Script Web Part OR you can reference the file from the Document/List Web Part Properties by placing the link to the script in the jslink field. If this is a reusable solution, you can add this to the site assets folder of the Site Collection or simply place it in the current "Site Asset" folder.</p>
  <h3>Notes about Scripts</h3>
  <hr>
  <p>Many of these scripts are publically available through other resources, but some of them have been modified to include conditional formatting such as the "Percentage" javascript file. Based on the range of the percentage, a different color will display in the % bar. </p>
  
  <p>Enjoy!</p>
</html>
