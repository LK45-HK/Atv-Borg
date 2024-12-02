document.getElementById('showMoreBtn').addEventListener('click', function() {
    var info = document.getElementById('moreInfo');
    if (info.style.display === "none") {
        info.style.display = "block";
        this.textContent = "Ocultar";
    } else {
        info.style.display = "none";
        this.textContent = "Mostrar mais";
    }
});

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

var thumbnails = document.getElementsByClassName("thumbnail");
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Obrigado pelo seu feedback!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});