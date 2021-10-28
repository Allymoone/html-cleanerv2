document.getElementById("upload").addEventListener("click", uploadFunc)
const htmlContainer = document.getElementById("uploaded-html");
var htmlArray = [];

function uploadFunc() {
    while (htmlContainer.firstChild) {
        htmlContainer.removeChild(htmlContainer.firstChild);
      }
    const htmlInput = document.getElementsByName("input")[0].value
    const newDiv = document.createElement("div");
    newDiv.classList = "htmlDiv";
    newDiv.innerHTML = htmlInput;
    htmlContainer.appendChild(newDiv);
    var divi1 = document.querySelector(".htmlDiv").children;
    
    for (let i = 0; i < divi1.length; i++) {
        if (divi1[i].childElementCount === 0) {
            htmlArray.push(divi1[i])
        } else {
            seGrandchildren(divi1[i])
        }
        
   }
   htmlOutput = "";
   for (i = 0; i < htmlArray.length; i++) {
    htmlOutput += htmlArray[i].outerHTML
   }
   
   document.getElementsByName('output')[0].value = htmlOutput;
}


function seGrandchildren(child) {
    for (let i = 0; i < child.children.length; i++) {
        
    }


    while (child.firstChild) {
        child.removeChild(child.firstChild);
      }

      for (let i = 0; i < htmlArray[child].length; i++) {
        if (htmlArray[child[i]].childElementCount === 0) {
            child.appendChild(htmlArray[child[i]])
         } else {
             seGrandchildren(htmlArray[child[i]])
         }
    }
    

}

function reGrandchildren(child) {
    var grandchildren = [];
    for (let i = 0; i < child.children.length; i++) {
            grandchildren.push(child.children[i]);
    }

    while (child.firstChild) {
        child.removeChild(child.firstChild);
      }
    
    for (let i = 0; i < grandchildren.length; i++) {
        if (grandchildren[i].childElementCount === 0) {
            child.appendChild(grandchildren[i])
            console.log(grandchildren);
         } else {
             reGrandchildren(grandchildren[i])
         }
        
        }
    

}