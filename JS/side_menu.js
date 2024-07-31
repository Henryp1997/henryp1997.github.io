function main_menu_btn_clicked() {
    // check if already open, if so, can click button again to close
    var menu = document.getElementById("side_menu");
    if (menu.style.width != "15rem") {
        menu.style.width = "15rem";
    }
    else {
        menu.style.width = "0"
    }
}

function close_menu_btn_clicked() {
    document.getElementById("side_menu").style.width = "0";
}