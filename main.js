function unfurlTopnav() {
    var x = document.getElementById("pageTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}