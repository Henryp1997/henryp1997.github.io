function darts_checkbox(elem) {
    target = elem.id.split("_")[0];
    all_checkboxes = [`${target}_first_dart`, `${target}_second_dart`, `${target}_third_dart`, `${target}_singles`, `${target}_doubles`, `${target}_trebles`];
    checked = [false, false, false, false, false, false];
    for (i in all_checkboxes) {
        if (document.getElementById(all_checkboxes[i]).checked) {
            checked[i] = true;
        }
    }
    
    file = `./assets/darts/${target}/score_freq_dart_`

    // check cases for dart 1 box ticked
    if (checked[0]) {
        if (checked[1]) {
            if (checked[2]) {
                file += "all"
            }
            else {
                file += "1_and_2"
            }
        }
        else {
            if (checked[2]) {
                file += "1_and_3"
            }
            else {
                file += "1"
            }
        }
    }
    else {
        // check cases for dart 2 and 3 box ticked
        if (checked[1]) {
            if (checked[2]) {
                file += "2_and_3"
            }
            else {
                file += "2"
            }
        }
        else if (checked[2]) {
            file += "3"
        }
    }

    // now check cases for singles box ticked
    if (checked[3]) {
        file += "_sngl"
        if (checked[4]) {
            file += "_dbl"
        }
        if (checked[5]) {
            file += "_tbl"
        }
    }
    else if (checked[4]) {
        file += "_dbl"
        if (checked[5]) {
            file += "_tbl"
        }
    }
    else {
        file += "_tbl"
    }

    file += ".svg";
    document.getElementById(`${target}_image_wrapper`).href = file;
    document.getElementById(`${target}_image`).src = file
}