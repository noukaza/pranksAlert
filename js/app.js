    function save(){

        html2canvas(document.querySelector("#capture")).then(function(canvas) {
        // Generate the base64 representation of the canvas
        var base64image = canvas.toDataURL("image/png");
        // Split the base64 string in data and contentType
        var block = base64image.split(";");
        // Get the content type
        var mimeType = block[0].split(":")[1];// In this case "image/png"
        // get the real base64 content of the file
        var realData = block[1].split(",")[1];// For example:  iVBORw0KGgouqw23....

        // Convert b64 to blob and store it into a variable (with real base64 as value)
        var canvasBlob = b64toBlob(realData, mimeType);

        // Generate file download
         saveAs(canvasBlob, "yourwebsite_screenshot.png");
        });
    }
