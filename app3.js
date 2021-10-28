document.getElementById("upload").addEventListener("click", cleanHtml);

regex = /\[(.*?)\]/g
regex0 = / align\=(.*?)\]/g
regex1 = / style(.*?)\;\"/g
regex2 = / class\=(.*?)\"/g
regex3 = /\<table(.*)\<\/table\>/g
regex4 = /\<.*\>^.{0}$\<\/.*\>/g

function cleanHtml() {
    var htmlInput = String(document.getElementsByName("input")[0].value);

    console.log(htmlInput);
    var htmlOutput = htmlInput.replace("[et_pb_image", "<img")
    htmlOutput = htmlOutput.replace(regex0, ">");
    htmlOutput = htmlOutput.replace(regex, "");
    htmlOutput = htmlOutput.replace(regex1, "");
    htmlOutput =  htmlOutput.replace("</span>", "");
    htmlOutput =  htmlOutput.replace(regex2, "");
    htmlOutput =  htmlOutput.replace(regex3, "");
    htmlOutput =  htmlOutput.replace(regex4, "");

    document.getElementsByName('output')[0].value = htmlOutput;
}
