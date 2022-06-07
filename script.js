let switchMode = document.getElementById("switchMode");

switchMode.oneclick = function () {
    let theme = document.getElementById("theme")

    if(theme.getAttribute("href") == "main.css") {
        theme.href = "dark-mode.css";
    } else {
        theme.href = "main.css";    
    }
}