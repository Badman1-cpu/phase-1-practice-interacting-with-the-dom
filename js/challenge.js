document.addEventListener("DOMContentLoaded", () => {
    // Timer functionality
    let timerValue = 0;
    const timerDisplay = document.getElementById("timer");
    const timerInterval = setInterval(() => {
        timerValue++;
        timerDisplay.textContent = timerValue;
    }, 1000);

    // Counter functionality
    let counterValue = 0;
    const counterDisplay = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");

    plusButton.addEventListener("click", () => {
        counterValue++;
        counterDisplay.textContent = counterValue;
    });

    minusButton.addEventListener("click", () => {
        counterValue--;
        counterDisplay.textContent = counterValue;
    });

    // "Like" functionality
    const likeButton = document.getElementById("like");
    const likeList = document.getElementById("like-list");
    const likeCounts = {};

    likeButton.addEventListener("click", () => {
        if (likeCounts[counterValue]) {
            likeCounts[counterValue]++;
        } else {
            likeCounts[counterValue] = 1;
        }
        renderLikes();
    });

    function renderLikes() {
        likeList.innerHTML = "";
        for (let number in likeCounts) {
            const likeItem = document.createElement("li");
            likeItem.textContent = `Number ${number}: ${likeCounts[number]} likes`;
            likeList.appendChild(likeItem);
        }
    }

    // Pause functionality
    const pauseButton = document.getElementById("pause");
    let isPaused = false;

    pauseButton.addEventListener("click", () => {
        if (isPaused) {
            isPaused = false;
            pauseButton.textContent = "Pause";
            // Resume timer and enable buttons
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;
            resumeTimer();
        } else {
            isPaused = true;
            pauseButton.textContent = "Resume";
            // Pause timer and disable buttons
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
            clearInterval(timerInterval);
        }
    });

    function resumeTimer() {
        timerInterval = setInterval(() => {
            timerValue++;
            timerDisplay.textContent = timerValue;
        }, 1000);
    }

    // Comment functionality
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const commentInput = document.getElementById("comment-input");
        const commentText = commentInput.value.trim();
        if (commentText !== "") {
            const commentItem = document.createElement("li");
            commentItem.textContent = commentText;
            commentList.appendChild(commentItem);
            commentInput.value = "";
        }
    });
});