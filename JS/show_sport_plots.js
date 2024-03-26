function show_run_plot(elem) {
    // show plot corresponding to element that was clicked
    // and change clickable text arrow direction
    ref_dict = {
        " Distance": "dist_plot",
        " Weekly distance": "wkly_dist_plot",
        " Average pace": "pace_plot",
        " Average heart rate": "hr_plot",
        " Average cadence": "cad_plot",
        " Av. heart rate vs Av. pace": "hr_vs_pace_plot",
        " Av. cadence vs Av. pace": "cad_vs_pace_plot"
    }

    if (elem.innerHTML.includes("▸")) {
        const id = ref_dict[elem.innerHTML.split("▸")[1]];
        elem.innerHTML = elem.innerHTML.replace("▸", "▾");
        document.getElementById(id).className = "running_plot_shown" 
    }
    else {
        const id = ref_dict[elem.innerHTML.split("▾")[1]];
        elem.innerHTML = elem.innerHTML.replace("▾", "▸");
        document.getElementById(id).className = "running_plot_hidden" 
    }
}

function show_darts_img(elem) {
    // show darts screenshot and stats plot
    ref_dict = {
        " App GUI": "gui_img",
        " Score frequency": "score_freq"
    }

    if (elem.innerHTML.includes("▸")) {
        const id = ref_dict[elem.innerHTML.split("▸")[1]];
        elem.innerHTML = elem.innerHTML.replace("▸", "▾");
        document.getElementById(id).className = "running_plot_shown" 
    }
    else {
        const id = ref_dict[elem.innerHTML.split("▾")[1]];
        elem.innerHTML = elem.innerHTML.replace("▾", "▸");
        document.getElementById(id).className = "running_plot_hidden" 
    }
}