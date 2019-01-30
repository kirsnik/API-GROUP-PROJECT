var candy = ["../dippin-dots.png", "../buttered-popcorn.png", "../sno-caps.png", "../red-vines", "../junior-mints", "../sour-patch-kids"];
for (i=0; i<candy.length; i++) {

    var img = $("<img>");
    var divImger = $("<div>")
    var snackImage = img.attr ("src", candy[i]);
    console.log (snackImage);
    $(divImger).append(snackImage);
    $("#datesTimes").append(snackImage);
}