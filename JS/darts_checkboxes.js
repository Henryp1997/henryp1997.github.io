function darts_checkbox(elem) {
    target = elem.id.split("_")[0];
    all_checkboxes = [`${target}_first_dart`, `${target}_second_dart`, `${target}_third_dart`, `${target}_singles`, `${target}_doubles`, `${target}_trebles`];
    checked = [0, 0, 0, 0, 0, 0];
    for (i in all_checkboxes) {
        if (document.getElementById(all_checkboxes[i]).checked) {
            checked[i] = 1;
        }
    }
    file = `./assets/darts/${target}/`

    // Use checkbox values to point to correct graph image
    file += `${checked[0]}${checked[1]}${checked[2]}${checked[3]}${checked[4]}${checked[5]}.svg`;

    document.getElementById(`${target}_image_wrapper`).href = file;
    document.getElementById(`${target}_image`).src = file
}