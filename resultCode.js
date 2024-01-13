var messages = [   // EXEMPLU
        { title: "The Shawshank Redemption", poster: "https://example.com/poster1.jpg" },
        { title: "Inception", poster: "https://example.com/poster2.jpg" },
        { title: "The Dark Knight", poster: "https://example.com/poster3.jpg" }
    ];

   function loadMessages() {
        var messagesContainer = document.getElementById("messagesContainer");

        messages.forEach(function (message) {
            var messageDiv = document.createElement("div");
            messageDiv.classList.add("message");

            var posterImg = document.createElement("img");
            posterImg.src = message.poster;
            posterImg.alt = message.title + " Poster";
            posterImg.style.maxWidth = "200px";

            var titleParagraph = document.createElement("p");
            titleParagraph.textContent = "Movie Title: " + message.title;

            messageDiv.appendChild(posterImg);
            messageDiv.appendChild(titleParagraph);

            messagesContainer.appendChild(messageDiv);
        });
    }

    window.onload = loadMessages;