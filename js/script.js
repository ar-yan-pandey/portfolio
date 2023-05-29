
function menubutton(){
    var head = document.getElementById("mobile")
    head.style.display='block';
    head.style.zIndex=4
}
function menuclosebutton(){
    var head = document.getElementById("mobile")
    head.style.display='none';
    
    

}
function videovisible() {
    var x = document.getElementById("videobox");
    
    if (x.style.display === "none") {
      document.getElementById("quizbox").style.display="none"
      document.getElementById("workbox").style.display="none"
      document.getElementById("languagebox").style.display="none"
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
function languagevisible() {
    var x = document.getElementById("languagebox");
    
    if (x.style.display === "none") {
      // document.getElementById("languagebox").style.position=""
      document.getElementById("workbox").style.display="none"
      document.getElementById("quizbox").style.display="none"
      document.getElementById("videobox").style.display="none"
      x.style.display = "block";
      x.style.display = "flex"

    } else {
      x.style.display = "none";
    }
  }
function quizvisible() {
    var x = document.getElementById("quizbox");
    
    if (x.style.display === "none") {
      document.getElementById("videobox").style.display="none"
      document.getElementById("workbox").style.display="none"
      document.getElementById("languagebox").style.display="none"
      x.style.display = "block";
      x.style.display = "flex"
    } else {
      x.style.display = "none";
    }
  }
function workvisible() {
    var x = document.getElementById("workbox");
    
    if (x.style.display === "none") {
      document.getElementById("quizbox").style.display="none"
      document.getElementById("videobox").style.display="none"
      document.getElementById("languagebox").style.display="none"
      x.style.display = "block";
      x.style.display = "flex"
    } else {
      x.style.display = "none";
    }
  }




  







