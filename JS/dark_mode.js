function toggle_dark_mode () {
    const current_mode = localStorage.getItem("dark_mode");
    if (!current_mode) {
        return toggle_dark();
    }
    if (!current_mode | current_mode.includes("light")) {
        return toggle_dark();
    }
    return toggle_light();
}

function toggle_light () {
    document.getElementById("pagestyle").setAttribute("href", "./assets/light.css");
    localStorage.setItem("dark_mode", "./assets/light.css");
    const toggleCircle = document.getElementById('toggleCircle');
    toggleCircle.style.transform = 'translateX(0)';
}

function toggle_dark () {
    document.getElementById("pagestyle").setAttribute("href", "./assets/dark.css");
    localStorage.setItem("dark_mode", "./assets/dark.css");
    const toggleCircle = document.getElementById('toggleCircle');
    toggleCircle.style.transform = 'translateX(20px)';
}