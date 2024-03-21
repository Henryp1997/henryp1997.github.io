function change_tab_background_col () {
    url = window.location.href;
    if (url.includes("piano")) {
        var tab = document.getElementById("piano_link");
        tab.className = navbar_link_current;
    }
}