document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".superimposed-image");

    images.forEach(function(image) {
        var descriptionContainer = image.nextElementSibling;

        image.addEventListener("mouseover", function() {
            var description = image.getAttribute("data-description");
            descriptionContainer.textContent = description;
        });

        image.addEventListener("click", function() {
            var description = image.getAttribute("data-description");
            descriptionContainer.textContent = description;
        });

        image.addEventListener("mouseout", function() {
            descriptionContainer.textContent = ""; // Clear the description on mouse out
        });
    });
});
