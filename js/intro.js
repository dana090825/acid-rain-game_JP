document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("game-time-input");
    const diffSelect = document.getElementById("difficulty-select");
    const langSelect = document.getElementById("language-select");
    const startBtn = document.getElementById("start-btn");

    // 저장된 언어를 반영하고 화면 문구를 적용
    langSelect.value = getLang();
    applyI18n();

    // 언어를 바꾸면 즉시 저장하고 화면 문구를 갱신
    langSelect.addEventListener("change", function () {
        localStorage.setItem("acidRainLang", langSelect.value);
        applyI18n();
    });

    startBtn.addEventListener("click", function () {
        const time = parseInt(timeInput.value, 10);
        const diff = diffSelect.value;

        localStorage.setItem("acidRainGameTime", time);
        localStorage.setItem("acidRainDifficulty", diff);
        localStorage.setItem("acidRainLang", langSelect.value);

        window.location.href = "game.html";
    });

    const infoBtn = document.getElementById("infoBtn");
    const infoModal = document.getElementById("infoModal");
    const infoOverlay = document.getElementById("infoOverlay");
    const infoClose = document.getElementById("infoClose");

    const openModal = () => {
        infoModal.classList.add("open");
    };

    const closeModal = () => {
        infoModal.classList.remove("open");
    };

    infoBtn.addEventListener("click", openModal);
    infoClose.addEventListener("click", closeModal);
    infoOverlay.addEventListener("click", closeModal);

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && infoModal.classList.contains("open")) {
            closeModal();
        }
    });
});
