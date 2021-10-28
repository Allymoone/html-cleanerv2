document.getElementById("upload").addEventListener("click", uploadFunc)
const htmlContainer = document.getElementById("uploaded-html");

function uploadFunc() {
    while (htmlContainer.firstChild) {
        htmlContainer.removeChild(htmlContainer.firstChild);
      }
    const htmlInput = document.getElementsByName("input")[0].value
    const newDiv = document.createElement("div");
    newDiv.classList = "htmlDiv";
    newDiv.innerHTML = htmlInput;
    htmlContainer.appendChild(newDiv);
    
   var htmlArray = [];
   var divChildren = document.querySelector(".htmlDiv").children;

    for (let i = 0; i < divChildren.length; i++) {
        if (divChildren[i].nodeType == 1) {
            recurseAndAdd(divChildren[i], htmlArray);
    }
}
    document.getElementsByName('output')[0].value = htmlArray;


}

function recurseAndAdd(el, descendants) {
  descendants.push(el.id);
  var children = el.childNodes;
  for(let i = 0; i < children.length; i++) {
     if (children[i].nodeType == 1) {
         recurseAndAdd(children[i]);
     }
  }
}

