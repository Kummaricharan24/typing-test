// ======================
// Tablet Data (Database)
// ======================
const tablets = {
    "1234567890": {
        en: "Paracetamol 500mg - Pain Relief",
        hi: "पेरासिटामोल 500mg - दर्द निवारक",
        te: "పెరాసెటమాల్ 500mg - నొప్పి నివారణ"
    },
    "9876543210": {
        en: "Cetirizine 10mg - Allergy Relief",
        hi: "सेटिरीज़िन 10mg - एलर्जी राहत",
        te: "సిటిరిజైన్ 10mg - అలర్జీ నివారణ"
    }
};

// ===================
// Show Tablet Details
// ===================
function showTabletInfo(code, lang) {
    const infoElement = document.getElementById('info');
    if (!tablets[code]) {
        infoElement.innerText = "Tablet Not Found";
        return;
    }
    infoElement.innerText = tablets[code][lang];
    saveToHistory(code);
}

// ================
// Set Alarm (Demo)
// ================
function setAlarm(minutes = 1) {
    setTimeout(() => {
        alert("⏰ Reminder: Time to take your tablet!");
    }, minutes * 60000);
}

// ===================
// Save Scan to History
// ===================
function saveToHistory(code) {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    if (!history.includes(code)) {
        history.push(code);
        localStorage.setItem('history', JSON.stringify(history));
    }
}

// ===================
// Load History (List)
// ===================
function loadHistory() {
    const historyList = document.getElementById('history-list');
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.forEach(code => {
        const li = document.createElement('li');
        li.innerText = code;
        historyList.appendChild(li);
    });
}
