// 한국어 / 영어 UI 문구 사전과 적용 헬퍼
// 선택 언어는 localStorage("acidRainLang")에 "ko" 또는 "en"으로 저장된다.

const I18N = {
    ko: {
        // 인트로
        introTitle: "산성비 - 일어판",
        start: "시작하기",
        timeLabel: "게임 시간(초)",
        diffLabel: "난이도",
        langLabel: "언어",
        diffEasy: "쉬움",
        diffNormal: "보통",
        diffHard: "어려움",
        creditBox: "제작자 : 이다연<br>E-mail : develu0825@gmail.com<br>LinkedIn : linkedin.com/in/develu825",

        // 설명 모달
        infoTitle: "게임 설명",
        infoP1: "위에서 떨어지는 일본어 단어의 <strong>뜻</strong>을 입력해서 점수를 얻는 게임입니다.",
        infoP2: "심심해서 재미로 만든 것이니 넓은 아량으로 즐겨주세요 : >",
        infoLi1: "⏱ 제한 시간: 인트로에서 직접 설정 가능",
        infoLi2: "❤️ 목숨: 5개 (단어를 놓치면 1개 감소)",
        infoLi3: "❌ 틀린 단어는 결과 화면에서 다시 확인 가능",
        infoLi4: "⚙ 난이도: 단어 속도와 동시 등장 개수가 달라짐",
        infoContactTitle: "문의",
        infoContact: "버그 제보 및 개선 제안은 아래 메일로 보내주세요.<br><strong>Email:</strong> develu0825@gmail.com",
        infoClose: "닫기",

        // 게임 화면
        timeLeft: "남은 시간",
        sec: "초",
        scoreLabel: "점수",
        bestLabel: "최고 점수",
        exit: "나가기",
        answerPh: "뜻을 한글로 입력 후 Enter 또는 버튼",
        submit: "입력",

        // 결과 모달
        gameOver: "게임 종료",
        reviewWrong: "오답 모아보기",
        restart: "다시 시작하기",
        quit: "그만하기",
        wrongTitle: "오답 모아보기",
        thJp: "일본어",
        thAnswer: "정답",
        thUser: "내 입력",
        back: "돌아가기",
        noWrong: "오답 없음"
    },
    en: {
        // 인트로
        introTitle: "Acid Rain - JP Edition",
        start: "Start",
        timeLabel: "Time (sec)",
        diffLabel: "Difficulty",
        langLabel: "Language",
        diffEasy: "Easy",
        diffNormal: "Normal",
        diffHard: "Hard",
        creditBox: "Creator : Dayeon Lee<br>E-mail : develu0825@gmail.com<br>LinkedIn : linkedin.com/in/develu825",

        // 설명 모달
        infoTitle: "How to Play",
        infoP1: "Type the <strong>meaning</strong> of the Japanese words falling from the top to score points.",
        infoP2: "Just a fun little side project — please enjoy it with an open mind :>",
        infoLi1: "⏱ Time limit: set it yourself on the intro screen",
        infoLi2: "❤️ Lives: 5 (lose one when you miss a word)",
        infoLi3: "❌ Review missed words on the result screen",
        infoLi4: "⚙ Difficulty: changes word speed and how many appear at once",
        infoContactTitle: "Contact",
        infoContact: "Send bug reports and suggestions to the email below.<br><strong>Email:</strong> develu0825@gmail.com",
        infoClose: "Close",

        // 게임 화면
        timeLeft: "Time left",
        sec: "s",
        scoreLabel: "Score",
        bestLabel: "Best",
        exit: "Exit",
        answerPh: "Type the meaning in English, then Enter",
        submit: "Submit",

        // 결과 모달
        gameOver: "Game Over",
        reviewWrong: "Review wrong answers",
        restart: "Restart",
        quit: "Quit",
        wrongTitle: "Wrong Answers",
        thJp: "Word",
        thAnswer: "Answer",
        thUser: "Your input",
        back: "Back",
        noWrong: "No wrong answers"
    }
};

// 현재 선택된 언어("ko" | "en")를 반환한다. 기본값은 "ko".
function getLang() {
    return localStorage.getItem("acidRainLang") === "en" ? "en" : "ko";
}

// 단어 데이터에서 현재 언어에 맞는 정답 필드 키("kr" | "en")를 반환한다.
function getAnswerKey() {
    return getLang() === "en" ? "en" : "kr";
}

// 키에 해당하는 문구를 현재 언어로 반환한다. 없으면 한국어 → 키 순으로 대체.
function t(key) {
    const lang = getLang();
    if (I18N[lang] && I18N[lang][key] != null) return I18N[lang][key];
    if (I18N.ko[key] != null) return I18N.ko[key];
    return key;
}

// data-i18n / data-i18n-html / data-i18n-ph 속성을 가진 요소에 문구를 채운다.
function applyI18n(root) {
    const scope = root || document;
    const lang = getLang();
    document.documentElement.lang = lang === "en" ? "en" : "ko";

    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        if (I18N[lang][key] != null) el.textContent = I18N[lang][key];
    });
    scope.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        const key = el.getAttribute("data-i18n-html");
        if (I18N[lang][key] != null) el.innerHTML = I18N[lang][key];
    });
    scope.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
        const key = el.getAttribute("data-i18n-ph");
        if (I18N[lang][key] != null) el.setAttribute("placeholder", I18N[lang][key]);
    });
}
