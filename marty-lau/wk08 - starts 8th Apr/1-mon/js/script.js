document.querySelectorAll(".poster").forEach(poster => {
    poster.addEventListener("click", function() {
        const currentHeight = this.clientHeight;
        if (currentHeight === 150) {
            this.style.height = "300px";
        } else if (currentHeight === 300) {
            this.style.height = "75px";
        } else {
            this.style.height = "150px";
        }
    });
});

