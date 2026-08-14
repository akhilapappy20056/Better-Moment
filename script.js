/* ==================================================
   BETTERMOMENT
   COMPLETE JAVASCRIPT
================================================== */


let currentLanguage = "en";
let selectedMood = "";
let currentCategory = "";



/* ================= LANGUAGE ================= */

const languageSelect =
    document.getElementById("languageSelect");


languageSelect.addEventListener("change", function () {

    currentLanguage = this.value;

    document.documentElement.lang =
        currentLanguage;

    document
        .querySelectorAll("[data-en]")
        .forEach(element => {

            const text =
                element.dataset[currentLanguage];

            if (text) {
                element.textContent = text;
            }

        });

});



/* ================= SCROLL ================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}



/* ================= MODAL ================= */

function openSituation(category) {

    currentCategory = category;

    selectedMood = "";

    const modal =
        document.getElementById("modal");

    const body =
        document.getElementById("modalBody");


    const content =
        getCategoryContent(category);


    body.innerHTML = `

        <button class="modal-close"
                onclick="closeModal()">
            ×
        </button>

        <div class="modal-icon">
            ${content.icon}
        </div>

        <div class="eyebrow">
            ${content.eyebrow}
        </div>

        <h2>
            ${content.title}
        </h2>

        <p class="modal-description">
            ${content.description}
        </p>


        <div class="interaction-box">

            <label>
                ${getText(
                    "How are you feeling right now?",
                    "ఇప్పుడు నీకు ఎలా అనిపిస్తోంది?",
                    "अभी आपको कैसा महसूस हो रहा है?"
                )}
            </label>


            <div class="mood-options">

                <button onclick="selectMood(this,'😌 Calm')">
                    😌
                </button>

                <button onclick="selectMood(this,'😔 Low')">
                    😔
                </button>

                <button onclick="selectMood(this,'😰 Worried')">
                    😰
                </button>

                <button onclick="selectMood(this,'😡 Angry')">
                    😡
                </button>

                <button onclick="selectMood(this,'😵 Overwhelmed')">
                    😵
                </button>

                <button onclick="selectMood(this,'🤍 Numb')">
                    🤍
                </button>

            </div>


            <div id="selectedMood"
                 class="selected-mood">

                ${getText(
                    "Choose one mood",
                    "ఒక mood ఎంచుకో",
                    "एक mood चुनें"
                )}

            </div>


            <label>

                ${getText(
                    "What's actually going on?",
                    "అసలు ఏం జరుగుతోంది?",
                    "असल में क्या हो रहा है?"
                )}

            </label>


            <textarea
                id="userSituation"
                placeholder="${getPlaceholder()}"
            ></textarea>


            <button
                class="answer-button"
                onclick="generateAnswer()">

                ${getText(
                    "GET MY NEXT STEP →",
                    "నా NEXT STEP చెప్పు →",
                    "मेरा NEXT STEP बताएं →"
                )}

            </button>


            <div id="personalAnswer"></div>

        </div>
    `;


    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}



function closeModal() {

    const modal =
        document.getElementById("modal");

    modal.classList.remove("active");

    document.body.style.overflow =
        "auto";

}



document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeModal();
        }

    });



/* ================= MOOD ================= */

function selectMood(button, mood) {

    document
        .querySelectorAll(".mood-options button")
        .forEach(btn => {

            btn.classList.remove("selected");

        });


    button.classList.add("selected");

    selectedMood = mood;


    const moodBox =
        document.getElementById("selectedMood");


    moodBox.textContent =
        mood;

}



/* ================= CATEGORY CONTENT ================= */

function getCategoryContent(category) {

    const data = {

        Mind: {
            icon: "🧠",
            eyebrow: getText("YOUR MIND", "నీ మనసు", "आपका मन"),
            title: getText(
                "Let's make some space in your head.",
                "నీ మనసులో కొంచెం space చేద్దాం.",
                "चलो आपके मन में थोड़ी जगह बनाते हैं।"
            ),
            description: getText(
                "You don't have to solve every thought. Tell me what's making the most noise.",
                "ప్రతి ఆలోచనను solve చేయాల్సిన అవసరం లేదు. ఎక్కువగా disturb చేస్తున్నది ఏంటో చెప్పు.",
                "हर thought को solve करना जरूरी नहीं। सबसे ज्यादा परेशान क्या कर रहा है, बताएं।"
            )
        },

        Career: {
            icon: "🎯",
            eyebrow: getText("CAREER", "కెరీర్", "करियर"),
            title: getText(
                "Let's find your next move.",
                "నీ next career move ఏంటో చూద్దాం.",
                "आइए आपका अगला career step ढूंढते हैं।"
            ),
            description: getText(
                "You don't need your entire career figured out. Start with what's confusing you right now.",
                "మొత్తం career గురించి ఇప్పుడే clarity అవసరం లేదు. ప్రస్తుతం confusion ఏంటో చెప్పు.",
                "पूरे career का answer अभी जरूरी नहीं। अभी किस बात को लेकर confusion है, बताएं।"
            )
        },

        Money: {
            icon: "💰",
            eyebrow: getText("MONEY", "డబ్బు", "पैसे"),
            title: getText(
                "Let's make the money problem clearer.",
                "డబ్బు సమస్యను clear గా చూద్దాం.",
                "आइए पैसों की समस्या को साफ़ तरीके से समझें।"
            ),
            description: getText(
                "Tell me what feels difficult: spending, saving, income, or an upcoming expense.",
                "Spending, saving, income లేదా upcoming expense — ఏది stress ఇస్తుందో చెప్పు.",
                "Spending, saving, income या आने वाला खर्च — क्या stress दे रहा है?"
            )
        },

        Study: {
            icon: "📚",
            eyebrow: getText("STUDY", "చదువు", "पढ़ाई"),
            title: getText(
                "Let's make studying feel manageable.",
                "చదువును manageable గా చేద్దాం.",
                "पढ़ाई को manageable बनाते हैं।"
            ),
            description: getText(
                "Tell me what is stopping you: focus, syllabus, time, fear, or motivation.",
                "Focus, syllabus, time, fear లేదా motivation — ఏది problemో చెప్పు.",
                "Focus, syllabus, time, fear या motivation — समस्या क्या है?"
            )
        },

        People: {
            icon: "❤️",
            eyebrow: getText("PEOPLE", "మనుషులు", "लोग"),
            title: getText(
                "Let's understand what happened.",
                "ఏం జరిగిందో అర్థం చేసుకుందాం.",
                "आइए समझते हैं क्या हुआ।"
            ),
            description: getText(
                "You can tell me what happened, what they said, or what you wish you could say.",
                "ఏం జరిగింది, వాళ్లు ఏం అన్నారు, నువ్వు ఏం చెప్పాలనుకుంటున్నావో type చేయి.",
                "क्या हुआ, उन्होंने क्या कहा, या आप क्या कहना चाहते हैं — लिखें।"
            )
        },

        Future: {
            icon: "🌱",
            eyebrow: getText("FUTURE", "భవిష్యత్తు", "भविष्य"),
            title: getText(
                "You don't have to know everything yet.",
                "ఇప్పుడే అన్నీ తెలుసుకోవాల్సిన అవసరం లేదు.",
                "अभी सब कुछ जानना जरूरी नहीं है।"
            ),
            description: getText(
                "Tell me what you're worried about when you think about your future.",
                "Future గురించి ఆలోచించినప్పుడు ఏది ఎక్కువగా worry చేస్తుందో చెప్పు.",
                "Future के बारे में सोचते समय आपको सबसे ज्यादा किस बात की चिंता होती है?"
            )
        },

        Reset: {
            icon: "🌿",
            eyebrow: getText("RESET", "రీసెట్", "रीसेट"),
            title: getText(
                "Let's reset the noise.",
                "మనసులో noise ని కొంచెం తగ్గిద్దాం.",
                "चलो मन का noise थोड़ा कम करते हैं।"
            ),
            description: getText(
                "Tell me what is making everything feel too much.",
                "అన్నీ ఎక్కువగా అనిపించడానికి కారణం ఏంటో చెప్పు.",
                "क्या चीज़ सब कुछ बहुत ज्यादा महसूस करा रही है?"
            )
        },

        Decision: {
            icon: "🧭",
            eyebrow: getText("DECISION", "నిర్ణయం", "फैसला"),
            title: getText(
                "Let's make the decision smaller.",
                "Decision ని చిన్నదిగా చేద్దాం.",
                "आइए decision को छोटा और आसान बनाते हैं।"
            ),
            description: getText(
                "Tell me the options you're stuck between.",
                "నువ్వు ఏ options మధ్య stuck అయ్యావో చెప్పు.",
                "आप किन options के बीच stuck हैं, बताएं।"
            )
        },

        Plan: {
            icon: "📝",
            eyebrow: getText("PLAN", "ప్లాన్", "प्लान"),
            title: getText(
                "Let's turn the mess into steps.",
                "గందరగోళాన్ని చిన్న steps గా మార్చుదాం.",
                "चलो problem को छोटे steps में बदलते हैं।"
            ),
            description: getText(
                "Tell me everything you need to handle. We'll start with one thing.",
                "Handle చేయాల్సిన విషయాలన్నీ type చేయి. ఒక్కదానితో start చేద్దాం.",
                "जो कुछ handle करना है लिखें। हम एक चीज़ से शुरू करेंगे।"
            )
        },

        Words: {
            icon: "💬",
            eyebrow: getText("WORDS", "మాటలు", "बातें"),
            title: getText(
                "Let's find the words.",
                "ఏం చెప్పాలో కలిసి చూద్దాం.",
                "आइए सही शब्द ढूंढते हैं।"
            ),
            description: getText(
                "Tell me what you want to say and who you want to say it to.",
                "ఏం చెప్పాలనుకుంటున్నావో, ఎవరికి చెప్పాలనుకుంటున్నావో type చేయి.",
                "क्या कहना है और किससे कहना है, लिखें।"
            )
        },

        Motivation: {
            icon: "✨",
            eyebrow: getText("MOTIVATION", "మోటివేషన్", "मोटिवेशन"),
            title: getText(
                "You don't need a huge push.",
                "నీకు huge push అవసరం లేదు.",
                "आपको बहुत बड़ा push नहीं चाहिए।"
            ),
            description: getText(
                "Tell me what you've been avoiding or postponing.",
                "నువ్వు ఏ పని postpone చేస్తున్నావో చెప్పు.",
                "आप किस काम को टाल रहे हैं, बताएं।"
            )
        },

        Next: {
            icon: "🚶",
            eyebrow: getText("NEXT MOVE", "తదుపరి అడుగు", "अगला कदम"),
            title: getText(
                "Okay. What's happening?",
                "సరే. అసలు ఏం జరుగుతోంది?",
                "ठीक है। असल में क्या हो रहा है?"
            ),
            description: getText(
                "Tell me the situation. I'll help you choose one practical next step.",
                "Situation ని type చేయి. ఒక practical next step ఎంచుకోవడంలో help చేస్తాను.",
                "Situation लिखें। मैं एक practical next step चुनने में मदद करूंगा।"
            )
        }

    };


    return data[category] || data.Next;

}



/* ================= ANSWERS ================= */

function generateAnswer() {

    const text =
        document
        .getElementById("userSituation")
        .value
        .trim();


    const answer =
        document.getElementById("personalAnswer");


    if (!selectedMood) {

        answer.innerHTML = `
            <div class="answer-warning">
                🌱 ${getText(
                    "Choose your mood first.",
                    "ముందు నీ mood select చేయి.",
                    "पहले अपना mood चुनें।"
                )}
            </div>
        `;

        return;
    }


    if (!text) {

        answer.innerHTML = `
            <div class="answer-warning">
                💭 ${getText(
                    "Write even one sentence about what's happening.",
                    "ఏం జరుగుతుందో కనీసం ఒక sentence అయినా type చేయి.",
                    "क्या हो रहा है, कम से कम एक sentence में लिखें।"
                )}
            </div>
        `;

        return;
    }


    const result =
        makeAnswer(currentCategory, text);


    answer.innerHTML = result;

}



/* ================= SMART RESPONSE ================= */

function makeAnswer(category, situation) {

    const safe =
        escapeHTML(situation);


    let action =
        getText(
            "Pick one small thing you can control today.",
            "ఈరోజు నీ control లో ఉన్న ఒక్క చిన్న విషయం ఎంచుకో.",
            "आज अपने control में एक छोटी चीज़ चुनें।"
        );


    if (category === "Career") {

        action = getText(
            "Don't solve your whole career today. Pick one role you are interested in and spend 20 minutes understanding what skills it needs.",
            "మొత్తం career ని ఈరోజే solve చేయకు. నీకు interest ఉన్న ఒక role ఎంచుకుని దానికి ఏ skills కావాలో 20 minutes తెలుసుకో.",
            "आज पूरा career solve मत करें। एक role चुनें और 20 minutes में उसकी required skills देखें।"
        );

    }


    if (category === "Study") {

        action = getText(
            "Choose one topic. Set a 25-minute timer. Keep your phone away and finish only that one topic.",
            "ఒక్క topic ఎంచుకో. 25-minute timer పెట్టి phone పక్కన పెట్టి ఆ ఒక్క topic మాత్రమే complete చేయి.",
            "एक topic चुनें। 25 मिनट का timer लगाएं और सिर्फ वही topic पूरा करें।"
        );

    }


    if (category === "Money") {

        action = getText(
            "Write down your money coming in and your three most important expenses. Clarity comes before fixing it.",
            "నీకు వచ్చే money మరియు ముఖ్యమైన 3 expenses రాసుకో. Fix చేయడానికి ముందు clarity రావాలి.",
            "अपनी income और तीन जरूरी expenses लिखें। समाधान से पहले clarity जरूरी है।"
        );

    }


    if (category === "People") {

        action = getText(
            "Don't send a message while you're at your highest emotion. Write what you want to say first, read it once, then decide.",
            "Emotion ఎక్కువగా ఉన్నప్పుడు వెంటనే message పంపకు. ముందు ఏం చెప్పాలనుకుంటున్నావో రాసి ఒకసారి చదివి తర్వాత decide చేయి.",
            "बहुत emotion में तुरंत message न भेजें। पहले लिखें, एक बार पढ़ें और फिर decide करें।"
        );

    }


    if (category === "Mind" ||
        category === "Reset") {

        action = getText(
            "Step away from the screen for two minutes. Take a slow breath and name three things you can see around you.",
            "రెండు నిమిషాలు screen కి దూరంగా ఉండు. Slow breath తీసుకుని చుట్టూ కనిపిస్తున్న 3 things గుర్తించు.",
            "दो मिनट screen से दूर रहें। धीरे सांस लें और आसपास दिख रही 3 चीज़ों को notice करें।"
        );

    }


    return `

        <div class="personal-answer">

            <div class="answer-label">
                ${getText(
                    "YOUR NEXT STEP",
                    "నీ NEXT STEP",
                    "आपका NEXT STEP"
                )}
            </div>


            <h3>
                ${getText(
                    "I hear you.",
                    "నీ మాట అర్థమైంది.",
                    "मैं समझ रहा हूँ।"
                )}
            </h3>


            <p>
                ${getText(
                    "You said:",
                    "నువ్వు చెప్పింది:",
                    "आपने कहा:"
                )}

                <br>

                <strong>“${safe}”</strong>
            </p>


            <div class="answer-section">

                <span>
                    🧭 ${getText(
                        "What to do now",
                        "ఇప్పుడు ఏం చేయాలి",
                        "अभी क्या करें"
                    )}
                </span>

                <p>
                    ${action}
                </p>

            </div>


            <div class="answer-section">

                <span>
                    🎯 ${getText(
                        "Keep it small",
                        "చిన్నదిగా ఉంచు",
                        "इसे छोटा रखें"
                    )}
                </span>

                <p>
                    ${getText(
                        "You don't need to fix everything today. One completed step is better than ten unfinished plans.",
                        "ఈరోజే అన్నీ fix చేయాల్సిన అవసరం లేదు. Complete చేసిన ఒక్క step, unfinished plans కంటే better.",
                        "आज सब कुछ ठीक करना जरूरी नहीं। एक पूरा किया हुआ step, दस अधूरे plans से बेहतर है।"
                    )}
                </p>

            </div>


            <div class="answer-section">

                <span>
                    🤍 ${getText(
                        "Remember",
                        "గుర్తుంచుకో",
                        "याद रखें"
                    )}
                </span>

                <p>
                    ${getText(
                        "You are allowed to take this one step at a time.",
                        "ఒక్కో step గా వెళ్లడానికి నీకు permission ఉంది.",
                        "आप एक-एक step करके आगे बढ़ सकते हैं।"
                    )}
                </p>

            </div>

        </div>

    `;

}



/* ================= MEMORY ================= */

function saveThought() {

    const thought =
        prompt(
            getText(
                "Write your thought:",
                "నీ thought type చేయి:",
                "अपना thought लिखें:"
            )
        );


    if (!thought) return;


    const memories =
        JSON.parse(
            localStorage.getItem("memories") || "[]"
        );


    memories.push({
        type: "text",
        content: thought,
        date: new Date().toLocaleString()
    });


    localStorage.setItem(
        "memories",
        JSON.stringify(memories)
    );


    renderMemories();

}



function savePicture() {

    const input =
        document.createElement("input");

    input.type = "file";
    input.accept = "image/*";


    input.onchange = function() {

        const file =
            input.files[0];

        if (!file) return;


        const reader =
            new FileReader();


        reader.onload = function(event) {

            const memories =
                JSON.parse(
                    localStorage.getItem("memories") || "[]"
                );


            memories.push({
                type: "image",
                content: event.target.result,
                date: new Date().toLocaleString()
            });


            localStorage.setItem(
                "memories",
                JSON.stringify(memories)
            );


            renderMemories();

        };


        reader.readAsDataURL(file);

    };


    input.click();

}



function deleteMemory() {

    const memories =
        JSON.parse(
            localStorage.getItem("memories") || "[]"
        );


    if (!memories.length) return;


    memories.pop();


    localStorage.setItem(
        "memories",
        JSON.stringify(memories)
    );


    renderMemories();

}



function renderMemories() {

    const box =
        document.getElementById("memoryList");


    const memories =
        JSON.parse(
            localStorage.getItem("memories") || "[]"
        );


    if (!memories.length) {

        box.innerHTML =
            `<div class="empty-state">
                No memories saved yet.
            </div>`;

        return;

    }


    box.innerHTML =
        memories
        .slice()
        .reverse()
        .map(memory => {

            if (memory.type === "image") {

                return `
                    <div class="memory-item">
                        <small>${memory.date}</small>
                        <img src="${memory.content}">
                    </div>
                `;

            }


            return `
                <div class="memory-item">
                    <small>${memory.date}</small>
                    <p>${escapeHTML(memory.content)}</p>
                </div>
            `;

        })
        .join("");

}



/* ================= PEOPLE ================= */

function addPerson() {

    const name =
        prompt(
            getText(
                "Person's name:",
                "Person పేరు:",
                "व्यक्ति का नाम:"
            )
        );


    if (!name) return;


    const phone =
        prompt(
            getText(
                "Phone number:",
                "Phone number:",
                "Phone number:"
            )
        );


    if (!phone) return;


    localStorage.setItem(
        "trustedPerson",
        JSON.stringify({
            name,
            phone
        })
    );


    renderPerson();

}



function renderPerson() {

    const box =
        document.getElementById("personBox");


    const person =
        JSON.parse(
            localStorage.getItem("trustedPerson")
        );


    if (!person) {

        box.innerHTML =
            `<div class="empty-state">
                No person saved.
            </div>`;

        return;

    }


    box.innerHTML = `

        <div class="person-card">

            <strong>
                ❤️ ${escapeHTML(person.name)}
            </strong>

            <small>
                ${escapeHTML(person.phone)}
            </small>

        </div>

    `;

}



function callPerson() {

    const person =
        JSON.parse(
            localStorage.getItem("trustedPerson")
        );


    if (!person) {

        alert(
            getText(
                "Add a person first.",
                "ముందు ఒక person add చేయి.",
                "पहले एक person add करें।"
            )
        );

        return;

    }


    window.location.href =
        "tel:" + person.phone;

}



function messagePerson() {

    const person =
        JSON.parse(
            localStorage.getItem("trustedPerson")
        );


    if (!person) {

        alert(
            getText(
                "Add a person first.",
                "ముందు ఒక person add చేయి.",
                "पहले एक person add करें।"
            )
        );

        return;

    }


    window.location.href =
        "sms:" + person.phone;

}



/* ================= HELPERS ================= */

function getText(en, te, hi) {

    if (currentLanguage === "te") {
        return te;
    }

    if (currentLanguage === "hi") {
        return hi;
    }

    return en;

}



function getPlaceholder() {

    return getText(
        "Tell me what is actually happening...",
        "అసలు ఏం జరుగుతుందో ఇక్కడ type చేయి...",
        "असल में क्या हो रहा है, यहाँ लिखें..."
    );

}



function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}



/* ================= START ================= */

renderMemories();

renderPerson();
