/* =========================================================
   LITTLE SPACE
   Complete website functionality
========================================================= */


/* ================= LANGUAGE ================= */

const translations = {

    en: {

        brandSub: "A softer place for your thoughts.",
        badge: "✨ NO PERFECT DAY REQUIRED",

        hero1: "Today can be",
        hero2: "a little lighter.",
        heroSub: "You don't have to fix everything today. Just take one gentle step.",

        feeling: "How am I feeling? →",
        surprise: "🎁 Surprise me",
        tiny: "No pressure • No judgement • Just you",

        exploreLabel: "A LITTLE SOMETHING FOR YOU",
        exploreTitle: "Choose what feels right.",

        peopleTitle: "People I Want Close",
        peopleSub: "Keep the people who make your world softer.",

        dreamTitle: "Something I Want",
        dreamSub: "A dream, a goal or something worth waiting for.",

        memoryTitle: "A Moment I Keep",
        memorySub: "Save a moment you never want to lose.",

        placeTitle: "A Place I Imagine",
        placeSub: "Somewhere your heart wants to go.",

        futureTitle: "The Person I'm Becoming",
        futureSub: "A small picture of the life you want.",

        stepTitle: "One Tiny Step",
        stepSub: "Forget the whole road. Look at the next step.",

        explore: "Explore →",

        happyTitle: "Your brain deserves<br>a small holiday.",
        happySub: "Sometimes you don't need an answer. You just need something nice.",
        funBtn: "Give me something nice ✨",

        historyLabel: "YOUR LITTLE ARCHIVE",
        historyTitle: "Things you chose to keep.",

        emergencyTitle: "Need someone right now?",
        emergencySub: "If you feel unsafe or feel you may hurt yourself, please reach out to a real person or emergency service now.",
        emergencyBtn: "❤️ I need help now",

        footer: "A small place to pause, breathe and choose your next step.",

        peopleModalTitle: "People I Want Close",
        peopleModalSub: "Save someone who makes difficult days feel a little easier.",

        namePlaceholder: "Person's name",
        phonePlaceholder: "Phone number",
        photoLabel: "Choose a photo",
        addPerson: "+ Add Person",
        savedPeople: "Saved people",

        dreamModalTitle: "Something I Want",
        dreamModalSub: "Give your dream a name. You can come back to it later.",
        dreamPlaceholder: "What do you want?",
        whyPlaceholder: "Why does this matter to you?",
        saveDream: "Save dream",

        memoryModalTitle: "A Moment I Keep",
        memoryModalSub: "Write something you want your future self to remember.",
        happened: "What happened?",
        feelingQuestion: "How did it feel?",
        special: "What made it special?",
        saveMemory: "Save moment",

        placeModalTitle: "A Place I Imagine",
        placeModalSub: "Tell this little space where your heart wants to travel.",
        placeName: "Place name",
        placeReason: "Why do you want to go there?",
        savePlace: "Save place",

        futureModalTitle: "The Person I'm Becoming",
        futureModalSub: "You don't have to become everything at once.",
        futureQuestion: "What kind of person do you want to become?",
        futureAction: "What is one thing you can do?",
        saveFuture: "Save this",

        stepModalTitle: "One Tiny Step",
        stepModalSub: "Forget everything else for a moment.",
        problem: "What is bothering me?",
        nextStep: "What is one small thing I can do?",
        saveStep: "Save step",

        moodModalTitle: "Let's check in.",
        moodModalSub: "No perfect answer. Pick whatever feels closest.",
        mood1: "🌧️ Heavy",
        mood2: "😵‍💫 Overwhelmed",
        mood3: "😶 Numb",
        mood4: "🌱 Okay",
        mood5: "🌤️ Better",
        mood6: "✨ Happy",

        songModalTitle: "A Song For This Moment",
        songModalSub: "Give a song a little corner in your history.",
        songName: "What song reminds you?",
        songWhy: "Why this song?",
        songFeeling: "What memory does it bring back?",
        saveSong: "Save song",

        funModalTitle: "Tiny Happiness Department",
        fun1: "Drink some water like you're a very expensive plant. 🌱",
        fun2: "Send someone a completely unnecessary heart emoji. ❤️",
        fun3: "Stand up and stretch like your Wi-Fi just came back. 📶",
        fun4: "Take a photo of something ridiculously ordinary. 📸",
        fun5: "Tell yourself: 'I survived another weird day.' 😂",
        another: "Another one 🎲",

        emergencyModalTitle: "You matter right now.",
        emergencyModalSub: "If you might hurt yourself or you are in immediate danger, please contact a real person or emergency service now.",
        emergency112: "Call 112",
        emergency112Sub: "India's pan-India emergency response number",
        emergencyMental: "Call Tele-MANAS — 14416",
        emergencyMentalSub: "Government of India 24×7 mental-health support",
        emergencyAlt: "Tele-MANAS — 1800-89-14416",
        emergencyAltSub: "Toll-free alternate number",
        savedContact: "Call a saved person",
        emergencyNote: "This website is not a replacement for emergency or professional help.",

        saved: "Saved",
        noPeople: "No people saved yet.",
        noHistory: "Your saved moments will appear here.",
        call: "📞 Call",
        view: "View"
    },


    te: {

        brandSub: "నీ ఆలోచనలకు ఒక ప్రశాంతమైన చిన్న స్థలం.",
        badge: "✨ ప్రతిరోజూ పర్ఫెక్ట్‌గా ఉండాల్సిన అవసరం లేదు",

        hero1: "ఈ రోజు",
        hero2: "కొంచెం తేలికగా ఉండొచ్చు.",
        heroSub: "ఈ రోజే అన్నింటినీ పరిష్కరించాల్సిన అవసరం లేదు. ఒక చిన్న అడుగు వేయి.",

        feeling: "నేను ఎలా ఉన్నాను? →",
        surprise: "🎁 నన్ను ఆశ్చర్యపరచు",
        tiny: "ఎలాంటి ఒత్తిడి లేదు • తీర్పు లేదు • నువ్వు మాత్రమే",

        exploreLabel: "నీ కోసం ఒక చిన్న స్థలం",
        exploreTitle: "నీకు నచ్చినదాన్ని ఎంచుకో.",

        peopleTitle: "నాకు దగ్గరగా ఉండేవాళ్లు",
        peopleSub: "నీ రోజులను కొంచెం మెరుగ్గా చేసే వాళ్లను ఇక్కడ ఉంచుకో.",

        dreamTitle: "నేను కోరుకునేది",
        dreamSub: "ఒక కల, ఒక లక్ష్యం లేదా ఎదురుచూడదగిన విషయం.",

        memoryTitle: "నేను దాచుకునే క్షణం",
        memorySub: "మర్చిపోకూడదనుకున్న ఒక అందమైన క్షణాన్ని దాచుకో.",

        placeTitle: "నేను ఊహించే ప్రదేశం",
        placeSub: "నీ మనసు వెళ్లాలని కోరుకునే ఒక ప్రదేశం.",

        futureTitle: "నేను అవుతున్న వ్యక్తి",
        futureSub: "నువ్వు కోరుకునే జీవితానికి ఒక చిన్న చిత్రం.",

        stepTitle: "ఒక చిన్న అడుగు",
        stepSub: "మొత్తం దారి గురించి ఆలోచించకు. తర్వాతి అడుగును మాత్రమే చూడు.",

        explore: "చూద్దాం →",

        happyTitle: "నీ మెదడుకి కూడా<br>ఒక చిన్న సెలవు కావాలి.",
        happySub: "కొన్నిసార్లు సమాధానం అవసరం లేదు. ఒక మంచి చిన్న విషయం చాలు.",
        funBtn: "నాకు ఒక మంచి విషయం ఇవ్వు ✨",

        historyLabel: "నీ చిన్న జ్ఞాపకాల పెట్టె",
        historyTitle: "నువ్వు దాచుకోవాలని ఎంచుకున్నవి.",

        emergencyTitle: "ఇప్పుడే ఎవరైనా కావాలా?",
        emergencySub: "నువ్వు సురక్షితంగా లేవని అనిపిస్తే లేదా నీకు నువ్వే హాని చేసుకోవాలనిపిస్తే, వెంటనే ఒక నమ్మకమైన వ్యక్తిని లేదా అత్యవసర సేవను సంప్రదించు.",
        emergencyBtn: "❤️ నాకు ఇప్పుడే సహాయం కావాలి",

        footer: "ఆగడానికి, ఊపిరి పీల్చుకోవడానికి, తర్వాతి అడుగు ఎంచుకోవడానికి ఒక చిన్న స్థలం.",

        peopleModalTitle: "నాకు దగ్గరగా ఉండేవాళ్లు",
        peopleModalSub: "కష్టమైన రోజులను కొంచెం సులభం చేసే వ్యక్తిని ఇక్కడ దాచుకో.",

        namePlaceholder: "వ్యక్తి పేరు",
        phonePlaceholder: "ఫోన్ నంబర్",
        photoLabel: "ఫోటో ఎంచుకో",
        addPerson: "+ వ్యక్తిని జోడించు",
        savedPeople: "దాచిన వ్యక్తులు",

        dreamModalTitle: "నేను కోరుకునేది",
        dreamModalSub: "నీ కలకి ఒక పేరు పెట్టు. తర్వాత మళ్లీ చూడొచ్చు.",
        dreamPlaceholder: "నీకు ఏమి కావాలి?",
        whyPlaceholder: "ఇది నీకు ఎందుకు ముఖ్యమైనది?",
        saveDream: "కలని దాచు",

        memoryModalTitle: "నేను దాచుకునే క్షణం",
        memoryModalSub: "భవిష్యత్తులో నీకు నువ్వే గుర్తు చేసుకోవాలనుకున్నది రాయ్.",
        happened: "ఏం జరిగింది?",
        feelingQuestion: "అప్పుడు ఎలా అనిపించింది?",
        special: "అది ఎందుకు ప్రత్యేకం?",
        saveMemory: "క్షణాన్ని దాచు",

        placeModalTitle: "నేను ఊహించే ప్రదేశం",
        placeModalSub: "నీ మనసు వెళ్లాలనుకునే ప్రదేశాన్ని ఇక్కడ రాయ్.",
        placeName: "ప్రదేశం పేరు",
        placeReason: "అక్కడికి ఎందుకు వెళ్లాలనుకుంటున్నావు?",
        savePlace: "ప్రదేశాన్ని దాచు",

        futureModalTitle: "నేను అవుతున్న వ్యక్తి",
        futureModalSub: "ఒక్కసారిగా అన్నీ అవ్వాల్సిన అవసరం లేదు.",
        futureQuestion: "నువ్వు ఎలాంటి వ్యక్తిగా మారాలనుకుంటున్నావు?",
        futureAction: "దాని కోసం ఈరోజు ఏ చిన్న పని చేయగలవు?",
        saveFuture: "దీన్ని దాచు",

        stepModalTitle: "ఒక చిన్న అడుగు",
        stepModalSub: "ఒక్క క్షణం మిగతా అన్నింటినీ పక్కన పెట్టు.",
        problem: "నన్ను ఇప్పుడు ఏం బాధిస్తోంది?",
        nextStep: "నేను చేయగల చిన్న పని ఏది?",
        saveStep: "అడుగును దాచు",

        moodModalTitle: "ఒక్కసారి మనసుని చూద్దాం.",
        moodModalSub: "సరైన సమాధానం అంటూ ఏమీ లేదు. నీకు దగ్గరగా అనిపించేదాన్ని ఎంచుకో.",
        mood1: "🌧️ భారంగా ఉంది",
        mood2: "😵‍💫 చాలా ఎక్కువగా ఉంది",
        mood3: "😶 ఏమీ అనిపించడం లేదు",
        mood4: "🌱 బాగానే ఉన్నాను",
        mood5: "🌤️ కొంచెం బాగుంది",
        mood6: "✨ సంతోషంగా ఉన్నాను",

        songModalTitle: "ఈ క్షణానికి ఒక పాట",
        songModalSub: "ఒక పాటకి నీ జ్ఞాపకాలలో ఒక చిన్న చోటు ఇవ్వు.",
        songName: "ఏ పాట గుర్తొస్తోంది?",
        songWhy: "ఆ పాట ఎందుకు?",
        songFeeling: "ఆ పాట ఏ జ్ఞాపకాన్ని తీసుకొస్తుంది?",
        saveSong: "పాటను దాచు",

        funModalTitle: "చిన్న ఆనందాల విభాగం",
        fun1: "నీళ్లు తాగు. నువ్వు చాలా ఖరీదైన మొక్కవని ఊహించుకో. 🌱",
        fun2: "ఎవరికైనా అవసరం లేకపోయినా ఒక heart emoji పంపు. ❤️",
        fun3: "Wi-Fi మళ్లీ వచ్చినట్టు లేచి stretch చేయి. 📶",
        fun4: "చాలా సాధారణమైన దాని ఫోటో తీయి. 📸",
        fun5: "నీకు నువ్వే చెప్పుకో: 'ఇంకో విచిత్రమైన రోజును కూడా దాటేశాను.' 😂",
        another: "ఇంకొకటి 🎲",

        emergencyModalTitle: "నువ్వు ఇప్పుడే ముఖ్యమైనవాడివి.",
        emergencyModalSub: "నీకు నువ్వే హాని చేసుకునే ప్రమాదం ఉంటే లేదా వెంటనే ప్రమాదంలో ఉంటే, ఒక నమ్మకమైన వ్యక్తిని లేదా అత్యవసర సేవను ఇప్పుడే సంప్రదించు.",
        emergency112: "112 కి కాల్ చేయి",
        emergency112Sub: "భారతదేశం అంతటా అత్యవసర సహాయం కోసం అధికారిక నంబర్",
        emergencyMental: "Tele-MANAS — 14416",
        emergencyMentalSub: "భారత ప్రభుత్వ 24×7 మానసిక ఆరోగ్య సహాయం",
        emergencyAlt: "Tele-MANAS — 1800-89-14416",
        emergencyAltSub: "టోల్-ఫ్రీ ప్రత్యామ్నాయ నంబర్",
        savedContact: "దాచిన వ్యక్తికి కాల్ చేయి",
        emergencyNote: "ఈ website అత్యవసర లేదా నిపుణుల సహాయానికి ప్రత్యామ్నాయం కాదు.",

        saved: "దాచబడింది",
        noPeople: "ఇంకా ఎవరూ దాచబడలేదు.",
        noHistory: "నువ్వు దాచిన విషయాలు ఇక్కడ కనిపిస్తాయి.",
        call: "📞 కాల్",
        view: "చూడు"
    },


    hi: {

        brandSub: "आपके विचारों के लिए एक शांत छोटी जगह।",
        badge: "✨ हर दिन परफेक्ट होना ज़रूरी नहीं",

        hero1: "आज का दिन",
        hero2: "थोड़ा हल्का हो सकता है।",
        heroSub: "आज सब कुछ ठीक करना ज़रूरी नहीं है। बस एक छोटा कदम उठाइए।",

        feeling: "मैं कैसा महसूस कर रहा हूँ? →",
        surprise: "🎁 मुझे सरप्राइज़ करो",
        tiny: "कोई दबाव नहीं • कोई फैसला नहीं • बस आप",

        exploreLabel: "आपके लिए एक छोटी जगह",
        exploreTitle: "जो सही लगे उसे चुनिए।",

        peopleTitle: "जिन्हें मैं पास रखना चाहता हूँ",
        peopleSub: "उन लोगों को संभालकर रखें जो आपके दिन को बेहतर बनाते हैं।",

        dreamTitle: "कुछ जो मैं चाहता हूँ",
        dreamSub: "एक सपना, लक्ष्य या इंतज़ार करने लायक चीज़।",

        memoryTitle: "एक पल जिसे मैं रखता हूँ",
        memorySub: "ऐसा पल सेव करें जिसे आप खोना नहीं चाहते।",

        placeTitle: "एक जगह जिसकी मैं कल्पना करता हूँ",
        placeSub: "वह जगह जहाँ आपका दिल जाना चाहता है।",

        futureTitle: "वह इंसान जो मैं बन रहा हूँ",
        futureSub: "उस जीवन की एक छोटी तस्वीर जो आप चाहते हैं।",

        stepTitle: "एक छोटा कदम",
        stepSub: "पूरी राह के बारे में मत सोचिए। सिर्फ अगले कदम को देखिए।",

        explore: "देखें →",

        happyTitle: "आपके दिमाग को भी<br>एक छोटी छुट्टी चाहिए।",
        happySub: "कभी-कभी जवाब नहीं चाहिए। बस कुछ अच्छा चाहिए।",
        funBtn: "मुझे कुछ अच्छा दो ✨",

        historyLabel: "आपकी छोटी यादों की जगह",
        historyTitle: "वे चीज़ें जिन्हें आपने संभालकर रखा।",

        emergencyTitle: "अभी किसी की ज़रूरत है?",
        emergencySub: "अगर आप असुरक्षित महसूस कर रहे हैं या खुद को नुकसान पहुँचाने का डर है, तो तुरंत किसी भरोसेमंद व्यक्ति या आपातकालीन सेवा से संपर्क करें।",
        emergencyBtn: "❤️ मुझे अभी मदद चाहिए",

        footer: "रुकने, सांस लेने और अगला कदम चुनने के लिए एक छोटी जगह।",

        peopleModalTitle: "जिन्हें मैं पास रखना चाहता हूँ",
        peopleModalSub: "ऐसे व्यक्ति को यहाँ सेव करें जो मुश्किल दिनों को थोड़ा आसान बनाता है।",

        namePlaceholder: "व्यक्ति का नाम",
        phonePlaceholder: "फोन नंबर",
        photoLabel: "फोटो चुनें",
        addPerson: "+ व्यक्ति जोड़ें",
        savedPeople: "सेव किए गए लोग",

        dreamModalTitle: "कुछ जो मैं चाहता हूँ",
        dreamModalSub: "अपने सपने को एक नाम दें। बाद में फिर देख सकते हैं।",
        dreamPlaceholder: "आप क्या चाहते हैं?",
        whyPlaceholder: "यह आपके लिए क्यों महत्वपूर्ण है?",
        saveDream: "सपना सेव करें",

        memoryModalTitle: "एक पल जिसे मैं रखता हूँ",
        memoryModalSub: "अपने भविष्य के लिए कोई खूबसूरत बात लिखें।",
        happened: "क्या हुआ?",
        feelingQuestion: "उस समय कैसा लगा?",
        special: "वह खास क्यों था?",
        saveMemory: "पल सेव करें",

        placeModalTitle: "एक जगह जिसकी मैं कल्पना करता हूँ",
        placeModalSub: "उस जगह के बारे में लिखें जहाँ आपका दिल जाना चाहता है।",
        placeName: "जगह का नाम",
        placeReason: "आप वहाँ क्यों जाना चाहते हैं?",
        savePlace: "जगह सेव करें",

        futureModalTitle: "वह इंसान जो मैं बन रहा हूँ",
        futureModalSub: "आपको एक साथ सब कुछ बनने की ज़रूरत नहीं है।",
        futureQuestion: "आप किस तरह का इंसान बनना चाहते हैं?",
        futureAction: "आज आप एक छोटा काम क्या कर सकते हैं?",
        saveFuture: "सेव करें",

        stepModalTitle: "एक छोटा कदम",
        stepModalSub: "एक पल के लिए बाकी सब कुछ छोड़ दीजिए।",
        problem: "मुझे अभी क्या परेशान कर रहा है?",
        nextStep: "मैं एक छोटा काम क्या कर सकता हूँ?",
        saveStep: "कदम सेव करें",

        moodModalTitle: "चलो एक बार खुद को समझते हैं।",
        moodModalSub: "कोई सही जवाब नहीं है। जो सबसे करीब लगे उसे चुनें।",
        mood1: "🌧️ भारी",
        mood2: "😵‍💫 बहुत ज्यादा",
        mood3: "😶 कुछ महसूस नहीं हो रहा",
        mood4: "🌱 ठीक",
        mood5: "🌤️ थोड़ा बेहतर",
        mood6: "✨ खुश",

        songModalTitle: "इस पल के लिए एक गाना",
        songModalSub: "एक गाने को अपनी यादों में एक छोटी जगह दें।",
        songName: "कौन सा गाना याद आता है?",
        songWhy: "यह गाना क्यों?",
        songFeeling: "यह गाना कौन सी याद लाता है?",
        saveSong: "गाना सेव करें",

        funModalTitle: "छोटी खुशियों का विभाग",
        fun1: "पानी पीजिए जैसे आप दुनिया के सबसे महंगे पौधे हों। 🌱",
        fun2: "किसी को बिना वजह एक heart emoji भेजिए। ❤️",
        fun3: "ऐसे stretch कीजिए जैसे Wi-Fi अभी वापस आया हो। 📶",
        fun4: "किसी बहुत साधारण चीज़ की फोटो लीजिए। 📸",
        fun5: "खुद से कहिए: 'एक और अजीब दिन भी निकल गया।' 😂",
        another: "एक और 🎲",

        emergencyModalTitle: "आप अभी महत्वपूर्ण हैं।",
        emergencyModalSub: "अगर आपको खुद को नुकसान पहुँचाने का डर है या आप तुरंत खतरे में हैं, तो अभी किसी भरोसेमंद व्यक्ति या आपातकालीन सेवा से संपर्क करें।",
        emergency112: "112 पर कॉल करें",
        emergency112Sub: "भारत का पूरे देश में आपातकालीन सहायता नंबर",
        emergencyMental: "Tele-MANAS — 14416",
        emergencyMentalSub: "भारत सरकार की 24×7 मानसिक स्वास्थ्य सहायता",
        emergencyAlt: "Tele-MANAS — 1800-89-14416",
        emergencyAltSub: "टोल-फ्री वैकल्पिक नंबर",
        savedContact: "सेव किए व्यक्ति को कॉल करें",
        emergencyNote: "यह वेबसाइट आपातकालीन या पेशेवर मदद का विकल्प नहीं है।",

        saved: "सेव किया गया",
        noPeople: "अभी कोई व्यक्ति सेव नहीं है।",
        noHistory: "आपकी सेव की गई चीज़ें यहाँ दिखाई देंगी।",
        call: "📞 कॉल",
        view: "देखें"
    }
};


/* ================= GLOBAL ================= */

let currentLanguage =
    localStorage.getItem("littleSpaceLanguage") || "en";

let history =
    JSON.parse(localStorage.getItem("littleSpaceHistory") || "[]");

let people =
    JSON.parse(localStorage.getItem("littleSpacePeople") || "[]");


/* ================= START ================= */

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("languageSelect").value = currentLanguage;

    applyLanguage();

    renderHistory();

});


/* ================= LANGUAGE CHANGE ================= */

function changeLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
        "littleSpaceLanguage",
        language
    );

    applyLanguage();

    renderHistory();

    const openModal =
        document.getElementById("modal").classList.contains("show");

    if (openModal) {
        closeModal();
    }
}


function applyLanguage() {

    const t = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(el => {

        const key = el.dataset.i18n;

        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }

    });

}


/* ================= MODAL ================= */

function showModal(content) {

    document.getElementById("modalContent").innerHTML =
        content;

    document.getElementById("modal").classList.add("show");
}


function closeModal() {

    document.getElementById("modal").classList.remove("show");

}


document.getElementById("modal").addEventListener("click", function(e) {

    if (e.target === this) {
        closeModal();
    }

});


/* ================= PEOPLE ================= */

function openPeople() {

    const t = translations[currentLanguage];

    let listHTML = "";

    if (people.length === 0) {

        listHTML =
            `<p style="color:#888;margin-top:20px">
                ${t.noPeople}
            </p>`;

    } else {

        listHTML = people.map((person, index) => {

            return `
                <div class="person-card">

                    <img
                        class="person-photo"
                        src="${person.photo || 'https://via.placeholder.com/100'}"
                    >

                    <div class="person-info">

                        <h3>${escapeHTML(person.name)}</h3>

                        <p>${escapeHTML(person.phone)}</p>

                    </div>

                    <button
                        class="call-btn"
                        onclick="callNumber('${escapeAttribute(person.phone)}')"
                    >
                        ${t.call}
                    </button>

                </div>
            `;

        }).join("");

    }


    showModal(`

        <h2 class="modal-title">
            ${t.peopleModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.peopleModalSub}
        </p>

        <div class="form-grid">

            <div class="form-group">

                <label>${t.namePlaceholder}</label>

                <input
                    id="personName"
                    placeholder="${t.namePlaceholder}"
                >

            </div>


            <div class="form-group">

                <label>${t.phonePlaceholder}</label>

                <input
                    id="personPhone"
                    type="tel"
                    placeholder="${t.phonePlaceholder}"
                >

            </div>


            <div class="form-group full">

                <label>${t.photoLabel}</label>

                <input
                    id="personPhoto"
                    type="file"
                    accept="image/*"
                >

            </div>

        </div>


        <div class="form-actions">

            <button
                class="primary-btn"
                onclick="savePerson()"
            >
                ${t.addPerson}
            </button>

        </div>


        <h3 style="margin-top:35px">
            ${t.savedPeople}
        </h3>

        <div class="people-list">
            ${listHTML}
        </div>

    `);
}


function savePerson() {

    const name =
        document.getElementById("personName").value.trim();

    const phone =
        document.getElementById("personPhone").value.trim();

    const photoInput =
        document.getElementById("personPhoto");


    if (!name || !phone) {

        alert(
            currentLanguage === "te"
                ? "పేరు మరియు నంబర్ ఇవ్వండి."
                : currentLanguage === "hi"
                ? "नाम और नंबर दर्ज करें।"
                : "Please enter name and phone number."
        );

        return;
    }


    if (photoInput.files.length > 0) {

        const reader = new FileReader();

        reader.onload = function(e) {

            addPersonToStorage(
                name,
                phone,
                e.target.result
            );

        };

        reader.readAsDataURL(photoInput.files[0]);

    } else {

        addPersonToStorage(
            name,
            phone,
            ""
        );

    }

}


function addPersonToStorage(name, phone, photo) {

    people.push({
        name,
        phone,
        photo,
        createdAt: new Date().toLocaleString()
    });

    localStorage.setItem(
        "littleSpacePeople",
        JSON.stringify(people)
    );

    openPeople();

}


/* ================= CALL ================= */

function callNumber(number) {

    const cleanNumber =
        number.replace(/[^\d+]/g, "");

    window.location.href =
        "tel:" + cleanNumber;
}


/* ================= DREAM ================= */

function openDream() {

    const t = translations[currentLanguage];

    showModal(`

        <h2 class="modal-title">
            ${t.dreamModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.dreamModalSub}
        </p>

        <div class="form-group">

            <label>${t.dreamPlaceholder}</label>

            <input id="dreamName"
                placeholder="${t.dreamPlaceholder}">

        </div>

        <div class="form-group">

            <label>${t.whyPlaceholder}</label>

            <textarea id="dreamWhy"
                placeholder="${t.whyPlaceholder}">
            </textarea>

        </div>

        <button
            class="primary-btn"
            onclick="saveDream()"
        >
            ${t.saveDream}
        </button>

    `);

}


function saveDream() {

    const title =
        document.getElementById("dreamName").value.trim();

    const text =
        document.getElementById("dreamWhy").value.trim();

    if (!title) return;

    saveHistory(
        "✨",
        title,
        text,
        "dream"
    );

    closeModal();

}


/* ================= MEMORY ================= */

function openMemory() {

    const t = translations[currentLanguage];

    showModal(`

        <h2 class="modal-title">
            ${t.memoryModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.memoryModalSub}
        </p>


        <div class="form-group">

            <label>${t.happened}</label>

            <textarea id="memoryHappened"
                placeholder="${t.happened}">
            </textarea>

        </div>


        <div class="form-group">

            <label>${t.feelingQuestion}</label>

            <textarea id="memoryFeeling"
                placeholder="${t.feelingQuestion}">
            </textarea>

        </div>


        <div class="form-group">

            <label>${t.special}</label>

            <textarea id="memorySpecial"
                placeholder="${t.special}">
            </textarea>

        </div>


        <button
            class="primary-btn"
            onclick="saveMemory()"
        >
            ${t.saveMemory}
        </button>

    `);

}


function saveMemory() {

    const happened =
        document.getElementById("memoryHappened").value.trim();

    const feeling =
        document.getElementById("memoryFeeling").value.trim();

    const special =
        document.getElementById("memorySpecial").value.trim();

    if (!happened) return;

    saveHistory(
        "🎵",
        happened,
        `${feeling} ${special}`,
        "memory"
    );

    closeModal();

}


/* ================= PLACE ================= */

function openPlace() {

    const t = translations[currentLanguage];

    showModal(`

        <h2 class="modal-title">
            ${t.placeModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.placeModalSub}
        </p>


        <div class="form-group">

            <label>${t.placeName}</label>

            <input id="placeName"
                placeholder="${t.placeName}">

        </div>


        <div class="form-group">

            <label>${t.placeReason}</label>

            <textarea id="placeReason"
                placeholder="${t.placeReason}">
            </textarea>

        </div>


        <button
            class="primary-btn"
            onclick="savePlace()"
        >
            ${t.savePlace}
        </button>

    `);

}


function savePlace() {

    const name =
        document.getElementById("placeName").value.trim();

    const reason =
        document.getElementById("placeReason").value.trim();

    if (!name) return;

    saveHistory(
        "🌍",
        name,
        reason,
        "place"
    );

    closeModal();

}


/* ================= FUTURE ================= */

function openFuture() {

    const t = translations[currentLanguage];

    showModal(`

        <h2 class="modal-title">
            ${t.futureModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.futureModalSub}
        </p>


        <div class="form-group">

            <label>${t.futureQuestion}</label>

            <textarea id="futurePerson"
                placeholder="${t.futureQuestion}">
            </textarea>

        </div>


        <div class="form-group">

            <label>${t.futureAction}</label>

            <textarea id="futureAction"
                placeholder="${t.futureAction}">
            </textarea>

        </div>


        <button
            class="primary-btn"
            onclick="saveFuture()"
        >
            ${t.saveFuture}
        </button>

    `);

}


function saveFuture() {

    const person =
        document.getElementById("futurePerson").value.trim();

    const action =
        document.getElementById("futureAction").value.trim();

    if (!person) return;

    saveHistory(
        "🌱",
        person,
        action,
        "future"
    );

    closeModal();

}


/* ================= STEP ================= */

function openStep() {

    const t = translations[currentLanguage];

    showModal(`

        <h2 class="modal-title">
            ${t.stepModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.stepModalSub}
        </p>


        <div class="form-group">

            <label>${t.problem}</label>

            <textarea id="stepProblem"
                placeholder="${t.problem}">
            </textarea>

        </div>


        <div class="form-group">

            <label>${t.nextStep}</label>

            <textarea id="stepNext"
                placeholder="${t.nextStep}">
            </textarea>

        </div>


        <button
            class="primary-btn"
            onclick="saveStep()"
        >
            ${t.saveStep}
        </button>

    `);

}


function saveStep() {

    const problem =
        document.getElementById("stepProblem").value.trim();

    const next =
        document.getElementById("stepNext").value.trim();

    if (!problem) return;

    saveHistory(
        "☀️",
        problem,
        next,
        "step"
    );

    closeModal();

}


/* ================= MOOD ================= */

function openMood() {

    const t = translations[currentLanguage];

    showModal(`

        <h2 class="modal-title">
            ${t.moodModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.moodModalSub}
        </p>


        <div class="cards-grid" style="grid-template-columns:1fr 1fr;">

            <div class="feature-card blue"
                onclick="chooseMood('${t.mood1}')">
                <h3>${t.mood1}</h3>
            </div>

            <div class="feature-card pink"
                onclick="chooseMood('${t.mood2}')">
                <h3>${t.mood2}</h3>
            </div>

            <div class="feature-card purple"
                onclick="chooseMood('${t.mood3}')">
                <h3>${t.mood3}</h3>
            </div>

            <div class="feature-card green"
                onclick="chooseMood('${t.mood4}')">
                <h3>${t.mood4}</h3>
            </div>

            <div class="feature-card yellow"
                onclick="chooseMood('${t.mood5}')">
                <h3>${t.mood5}</h3>
            </div>

            <div class="feature-card orange"
                onclick="chooseMood('${t.mood6}')">
                <h3>${t.mood6}</h3>
            </div>

        </div>

    `);

}


function chooseMood(mood) {

    saveHistory(
        "💭",
        mood,
        "Mood check-in",
        "mood"
    );

    closeModal();

    setTimeout(() => {

        alert(
            currentLanguage === "te"
                ? "నువ్వు ఎలా ఉన్నావో చూసుకున్నందుకు ❤️"
                : currentLanguage === "hi"
                ? "खुद को समझने के लिए समय निकालने के लिए ❤️"
                : "Thank you for checking in with yourself. ❤️"
        );

    }, 200);

}


/* ================= SONG ================= */

function openSong() {

    const t = translations[currentLanguage];

    showModal(`

        <h2 class="modal-title">
            🎵 ${t.songModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.songModalSub}
        </p>


        <div class="form-group">

            <label>${t.songName}</label>

            <input id="songName"
                placeholder="${t.songName}">

        </div>


        <div class="form-group">

            <label>${t.songWhy}</label>

            <textarea id="songWhy"
                placeholder="${t.songWhy}">
            </textarea>

        </div>


        <div class="form-group">

            <label>${t.songFeeling}</label>

            <textarea id="songFeeling"
                placeholder="${t.songFeeling}">
            </textarea>

        </div>


        <button
            class="primary-btn"
            onclick="saveSong()"
        >
            ${t.saveSong}
        </button>

    `);

}


function saveSong() {

    const song =
        document.getElementById("songName").value.trim();

    const why =
        document.getElementById("songWhy").value.trim();

    const feeling =
        document.getElementById("songFeeling").value.trim();

    if (!song) return;

    saveHistory(
        "🎵",
        song,
        `${why} ${feeling}`,
        "song"
    );

    closeModal();

}


/* ================= FUN ================= */

const funKeys = [
    "fun1",
    "fun2",
    "fun3",
    "fun4",
    "fun5"
];


function openFun() {

    const t = translations[currentLanguage];

    const randomKey =
        funKeys[Math.floor(Math.random() * funKeys.length)];

    showModal(`

        <div class="fun-card">

            <div class="fun-emoji">
                😄
            </div>

            <h2 class="modal-title">
                ${t.funModalTitle}
            </h2>

            <h3>
                ${t[randomKey]}
            </h3>

            <button
                class="primary-btn"
                onclick="openFun()"
                style="margin-top:25px"
            >
                ${t.another}
            </button>

        </div>

    `);

}


function surpriseMe() {

    const actions = [
        "mood",
        "fun",
        "memory",
        "step",
        "song"
    ];

    const selected =
        actions[Math.floor(Math.random() * actions.length)];

    openSection(selected);

}


/* ================= EMERGENCY ================= */

function openEmergency() {

    const t = translations[currentLanguage];

    showModal(`

        <div class="emergency-icon">
            🫶
        </div>

        <h2 class="modal-title">
            ${t.emergencyModalTitle}
        </h2>

        <p class="modal-subtitle">
            ${t.emergencyModalSub}
        </p>


        <div class="emergency-options">

            <a
                class="emergency-option"
                href="tel:112"
            >

                <div style="font-size:30px">🚨</div>

                <div>
                    <strong>
                        ${t.emergency112}
                    </strong>

                    <span>
                        ${t.emergency112Sub}
                    </span>
                </div>

            </a>


            <a
                class="emergency-option"
                href="tel:14416"
            >

                <div style="font-size:30px">🧠</div>

                <div>
                    <strong>
                        ${t.emergencyMental}
                    </strong>

                    <span>
                        ${t.emergencyMentalSub}
                    </span>
                </div>

            </a>


            <a
                class="emergency-option"
                href="tel:18008914416"
            >

                <div style="font-size:30px">📞</div>

                <div>
                    <strong>
                        ${t.emergencyAlt}
                    </strong>

                    <span>
                        ${t.emergencyAltSub}
                    </span>
                </div>

            </a>


            ${
                people.length > 0
                ?
                `
                <button
                    class="emergency-option"
                    onclick="callNumber('${escapeAttribute(people[0].phone)}')"
                >

                    <div style="font-size:30px">❤️</div>

                    <div>
                        <strong>
                            ${t.savedContact}
                        </strong>

                        <span>
                            ${escapeHTML(people[0].name)}
                        </span>
                    </div>

                </button>
                `
                :
                ""
            }

        </div>


        <p style="margin-top:25px;color:#999;font-size:12px">
            ${t.emergencyNote}
        </p>

    `);

}


/* ================= HISTORY ================= */

function saveHistory(icon, title, text, type) {

    history.unshift({

        icon,
        title,
        text,
        type,

        date:
            new Date().toLocaleString()

    });


    localStorage.setItem(
        "littleSpaceHistory",
        JSON.stringify(history)
    );


    renderHistory();

}


function renderHistory() {

    const container =
        document.getElementById("historyContainer");

    if (!container) return;

    const t = translations[currentLanguage];


    if (history.length === 0) {

        container.innerHTML =
            `<p style="color:#888">
                ${t.noHistory}
            </p>`;

        return;

    }


    container.innerHTML =
        history.slice(0, 12).map(item => {

            return `

                <div class="history-item">

                    <div style="font-size:28px">
                        ${item.icon}
                    </div>

                    <small>
                        ${escapeHTML(item.date)}
                    </small>

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>

                    <p>
                        ${escapeHTML(item.text || "")}
                    </p>

                </div>

            `;

        }).join("");

}


/* ================= OPEN SECTIONS ================= */

function openSection(section) {

    switch(section) {

        case "people":
            openPeople();
            break;

        case "dream":
            openDream();
            break;

        case "memory":
            openMemory();
            break;

        case "place":
            openPlace();
            break;

        case "future":
            openFuture();
            break;

        case "step":
            openStep();
            break;

        case "mood":
            openMood();
            break;

        case "song":
            openSong();
            break;

        case "fun":
            openFun();
            break;

        default:
            break;

    }

}


/* ================= SECURITY HELPERS ================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}
