const modal = document.getElementById("review-modal");
const modalEdit = document.getElementById("review-modal-edit");
const btn = document.getElementById("review-game-btn");
const btnEdit = document.getElementById("edit-review-btn");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

btnEdit.onclick = function() {
    modalEdit.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
    modalEdit.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalEdit) {
        modalEdit.style.display = "none";
    }
}
