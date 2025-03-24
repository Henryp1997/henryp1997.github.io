fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        // Apply styles after inserting navbar
        const navbar = document.getElementById("navbar");
        if (navbar) {
            navbar.style.position = "sticky";
            navbar.style.top = "0px";
            navbar.style.zIndex = "1000"; // Force above other elements
        }
    })
