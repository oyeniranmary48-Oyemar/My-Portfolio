// DARK AND LIGHT MODE
const themeToggle = document.querySelector("#theme-toggle");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
        themeToggle.textContent = "☀️ Light Mode";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}

// Load saved theme
let savedTheme = "light";

try {
    savedTheme = localStorage.getItem("portfolio-theme") || "light";
} catch (error) {
    savedTheme = "light";
}

setTheme(savedTheme);

// Change theme when button is clicked
themeToggle.addEventListener("click", function () {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    try {
        localStorage.setItem("portfolio-theme", newTheme);
    } catch (error) {
        // Theme still works even if browser storage is unavailable.
    }
});


// PROJECT PREVIEW
const previewButtons = document.querySelectorAll(".preview-button");
const projectPreview = document.querySelector("#project-preview");
const projectFrame = document.querySelector("#project-frame");
const previewTitle = document.querySelector("#preview-title");
const closePreview = document.querySelector("#close-preview");
const openFullProject = document.querySelector("#open-full-project");

// Display the selected project inside the portfolio
previewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const projectUrl = button.dataset.projectUrl;
        const projectName = button.dataset.projectName;

        previewTitle.textContent = projectName;
        projectFrame.src = projectUrl;
        openFullProject.href = projectUrl;

        projectPreview.hidden = false;

        projectPreview.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Close the preview
closePreview.addEventListener("click", function () {
    projectFrame.src = "about:blank";
    projectPreview.hidden = true;
});


// AUTOMATIC FOOTER YEAR
document.querySelector("#current-year").textContent =
    new Date().getFullYear();