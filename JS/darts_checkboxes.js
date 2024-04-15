function darts_checkbox_t20(elem) {
    all_checkboxes = ["t20_first_dart", "t20_second_dart", "t20_third_dart", "t20_singles", "t20_doubles", "t20_trebles"];
    checked = [false, false, false, false, false, false];
    for (i in all_checkboxes) {
        if (document.getElementById(all_checkboxes[i]).checked) {
            checked[i] = true;
        }
    }
    
    file = "./assets/darts/t20/score_freq_dart_"

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
    document.getElementById("t20_image_wrapper").href = file;
    document.getElementById("t20_image").src = file
}

function darts_checkbox_t19(elem) {
    all_checkboxes = ["t19_first_dart", "t19_second_dart", "t19_third_dart", "t19_singles", "t19_doubles", "t19_trebles"];
    checked = [false, false, false, false, false, false];
    for (i in all_checkboxes) {
        if (document.getElementById(all_checkboxes[i]).checked) {
            checked[i] = true;
        }
    }
    
    file = "./assets/darts/t19/score_freq_dart_"

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
    document.getElementById("t19_image_wrapper").href = file;
    document.getElementById("t19_image").src = file
}