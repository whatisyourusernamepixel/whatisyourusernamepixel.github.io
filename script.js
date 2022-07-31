let darkMode = JSON.parse(sessionStorage.getItem("darkModeBool"));
let popSeen = JSON.parse(sessionStorage.getItem("popupBool"));

if (darkMode === null) {
    darkMode = false;
}

if (popSeen === null) {
    popSeen = false;
}

// Create turnDark function
function turnDark() {
    console.log('fn run');
    const targetText = document.querySelectorAll('h1, h2, h3, p, td, th, a:not(.cta-btn), b');
    targetText.forEach(element => {
        element.classList.toggle("dark-mode-text");
    });

    const targetHeader = document.querySelectorAll('[id=site-navigation], [class^=modal-header]');
    targetHeader.forEach(element => {
        element.classList.toggle("dark-mode-header");
    });

    const tarBackground = document.querySelectorAll('body, [class^=modal-content]');
    tarBackground.forEach(element => {
        element.classList.toggle("dark-mode-bg");
    });

    const tarImage = document.querySelectorAll('img');
    tarImage.forEach(element => {
        element.classList.toggle("dark-mode-img");
    });

    const tarRows = document.querySelectorAll('[class^=grey-row]');
    tarRows.forEach(element => {
        element.classList.toggle('dark-mode-row');
    });

    const tarBtn = document.querySelectorAll('button:not(.carousel-control-prev, .carousel-control-next), a.cta-btn');
    tarBtn.forEach(element => {
        element.classList.toggle('dark-mode-btn');
        element.classList.toggle('dark-mode-btn:hover');
    });

    const tarFooter = document.querySelector('[class^=footer]');
    tarFooter.classList.toggle("dark-mode-footer");
}

// Change dark mode variable on button click */
function toggleDark () {
    darkMode = !darkMode;
    turnDark();
    sessionStorage.setItem("darkModeBool", darkMode)
    console.log(darkMode);
}

document.addEventListener('DOMContentLoaded', function(){
    // Toggle dark mode if user enabled it on prev page
    if (darkMode === true) {
        turnDark();
    }

    let pageViews = 0;

    // Get the modal
    var modal = document.getElementById("modal-popup");
    if (modal === null)
    {
        return;
    }

    // Get the button that opens the modal
    var btn = document.getElementById("tar-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Display popup after 1 minute, provided user has not seen it yet
    if (!popSeen) {
        setTimeout (function() {
            modal.style.display = "block";
            popSeen = true;
            sessionStorage.setItem("popupBool", popSeen);
        }, 60000);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});