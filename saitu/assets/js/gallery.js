for(const element of document.querySelectorAll(".all_new")) {
    element.addEventListener("click", function (event) {
        for(const query of document.querySelectorAll(".all_new")) {
            query.classList.remove("active");
        }
        event.target.classList.add("active");
    });
}