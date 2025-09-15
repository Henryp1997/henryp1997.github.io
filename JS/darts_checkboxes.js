function darts_checkbox(elem) {
    target = elem.id.split("_")[0];
    all_checkboxes = [`${target}_first_dart`, `${target}_second_dart`, `${target}_third_dart`, `${target}_singles`, `${target}_doubles`, `${target}_trebles`];
    
    checked = [0, 0, 0, 0, 0, 0];
    for (i in all_checkboxes) {
        if (document.getElementById(all_checkboxes[i]).checked) {
            checked[i] = 1;
        }
    }

    if (checked.slice(0, 3).every(num => num === 0) || checked.slice(3).every(num => num === 0)) {
        // Don't allow the user to deselect the last item in("singles", "doubles" and "trebles") or ("first dart", "second dart", "third dart")
        document.getElementById(elem.id).checked = true;
        checked[all_checkboxes.indexOf(elem.id)] = 1;
    }

    // Use checkbox values to point to correct graph image
    svgfile = `./assets/darts/${target}/`
    svgfile += `${checked[0]}${checked[1]}${checked[2]}${checked[3]}${checked[4]}${checked[5]}.svg`;

    document.getElementById(`${target}_image_wrapper`).href = svgfile;
    document.getElementById(`${target}_image`).src = svgfile
}
