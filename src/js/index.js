/* ==================== INIT SCORE ===================== */
const homeScore = document.getElementById("score-home");
const guestScore = document.getElementById("score-guest");

homeScore.textContent = localStorage.getItem("score-home") || 0;
guestScore.textContent = localStorage.getItem("score-guest") || 0;

/* ==================== ADD SCORE ===================== */
function addScore(score, idScore) {
    const scoreEl = document.getElementById(idScore);

    const totalScore = Number(scoreEl.textContent) + score;

    scoreEl.textContent = totalScore;

    localStorage.setItem(idScore, totalScore);
}
