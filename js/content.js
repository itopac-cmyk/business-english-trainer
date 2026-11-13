const CONTENT = {
  "appName": "Business English",
  "userName": "Isa",
  "areas": {
    "meetings": "Meetings & Kommunikation",
    "project": "Projektmanagement",
    "security": "IT-Security & CRA",
    "conditionals": "If-Sätze / Conditionals",
    "tenses": "Zeiten",
    "formality": "Höflichkeit & Formalität",
    "inversion": "Inversion & formelle Strukturen",
    "prepositions": "Präpositionen & False Friends",
    "email": "E-Mails schreiben",
    "intro": "Sich vorstellen",
    "pitch": "Projekt vorstellen",
    "presentation": "Beratung & Präsentation"
  },
  "packs": [
    {
      "id": "meetings",
      "title": "Meetings & Communication",
      "titleDe": "Meetings & Kommunikation",
      "blurb": "Besprechungen, Abstimmung und typische Wendungen aus dem Beratungsalltag.",
      "emoji": "💬",
      "color": "#1F8A70",
      "words": [
        {
          "id": "m01",
          "term": "agenda",
          "de": "Tagesordnung",
          "example": "Please send the agenda at least one day before the meeting.",
          "exampleDe": "Bitte schicken Sie die Tagesordnung mindestens einen Tag vor dem Meeting.",
          "emoji": "📋",
          "hint": "Die agenda ist die Themenliste, nicht der Terminkalender (calendar).",
          "phon": "/əˈdʒendə/"
        },
        {
          "id": "m02",
          "term": "minutes (of a meeting)",
          "de": "Protokoll (einer Sitzung)",
          "example": "I will circulate the minutes by tomorrow morning.",
          "exampleDe": "Ich lasse das Protokoll bis morgen früh in Umlauf gehen.",
          "emoji": "📝",
          "hint": "Im Geschäftsenglisch sind minutes das Protokoll, nicht nur Minuten.",
          "phon": "/ˈmɪnɪts/"
        },
        {
          "id": "m03",
          "term": "to align (on)",
          "de": "sich abstimmen (über)",
          "example": "Let's align on the next steps before we contact the client.",
          "exampleDe": "Lass uns die nächsten Schritte abstimmen, bevor wir den Kunden kontaktieren.",
          "emoji": "🧭",
          "hint": "Sehr typisch in Meetings: align on scope, timeline, responsibilities.",
          "phon": "/əˈlaɪn/"
        },
        {
          "id": "m04",
          "term": "to follow up",
          "de": "nachfassen, nachhaken",
          "example": "I will follow up with the client on Friday if we have not received the documents.",
          "exampleDe": "Ich fasse am Freitag beim Kunden nach, falls uns die Unterlagen bis dahin nicht vorliegen.",
          "emoji": "📞",
          "hint": "",
          "phon": "/ˌfɒləʊ ˈʌp/"
        },
        {
          "id": "m05",
          "term": "to recap",
          "de": "zusammenfassen",
          "example": "Let me recap the key points before we wrap up.",
          "exampleDe": "Lassen Sie mich die wichtigsten Punkte zusammenfassen, bevor wir schließen.",
          "emoji": "🔁",
          "hint": "",
          "phon": "/ˌriːˈkæp/"
        },
        {
          "id": "m06",
          "term": "action item",
          "de": "Aufgabe, offener Punkt",
          "example": "Each action item needs an owner and a deadline.",
          "exampleDe": "Jeder offene Punkt braucht eine verantwortliche Person und eine Frist.",
          "emoji": "✅",
          "hint": "",
          "phon": "/ˈækʃn ˌaɪtəm/"
        },
        {
          "id": "m07",
          "term": "to kick off",
          "de": "starten, eröffnen",
          "example": "We will kick off the project with a workshop next Monday.",
          "exampleDe": "Wir starten das Projekt nächsten Montag mit einem Workshop.",
          "emoji": "🚀",
          "hint": "",
          "phon": "/ˌkɪk ˈɒf/"
        },
        {
          "id": "m08",
          "term": "to wrap up",
          "de": "abschließen, zu Ende bringen",
          "example": "Let's wrap up and confirm the action items.",
          "exampleDe": "Lassen Sie uns abschließen und die offenen Punkte bestätigen.",
          "emoji": "🎁",
          "hint": "",
          "phon": "/ˌræp ˈʌp/"
        },
        {
          "id": "m09",
          "term": "to raise a point",
          "de": "einen Punkt ansprechen",
          "example": "I would like to raise a point about the proposed timeline.",
          "exampleDe": "Ich möchte einen Punkt zum vorgeschlagenen Zeitplan ansprechen.",
          "emoji": "☝️",
          "hint": "Höflicher als I have a problem with.",
          "phon": "/reɪz ə pɔɪnt/"
        },
        {
          "id": "m10",
          "term": "stakeholder",
          "de": "Stakeholder, Interessengruppe",
          "example": "We need to keep all stakeholders informed throughout the project.",
          "exampleDe": "Wir müssen alle Stakeholder während des gesamten Projekts informiert halten.",
          "emoji": "👥",
          "hint": "",
          "phon": "/ˈsteɪkhəʊldə/"
        },
        {
          "id": "m11",
          "term": "to postpone",
          "de": "verschieben (auf später)",
          "example": "Could we postpone the call until Thursday afternoon?",
          "exampleDe": "Könnten wir das Gespräch auf Donnerstagnachmittag verschieben?",
          "emoji": "⏭️",
          "hint": "postpone = auf später legen. Dagegen cancel = ganz absagen.",
          "phon": "/pəˈspəʊn/"
        },
        {
          "id": "m12",
          "term": "to reschedule",
          "de": "neu terminieren",
          "example": "I need to reschedule our kick-off meeting because of a conflicting workshop.",
          "exampleDe": "Ich muss unser Kick-off-Meeting neu terminieren, weil ein Workshop kollidiert.",
          "emoji": "📅",
          "hint": "",
          "phon": "/ˌriːˈʃedjuːl/"
        },
        {
          "id": "m13",
          "term": "to brief someone",
          "de": "jemanden einweisen, briefen",
          "example": "Please brief the team before the client workshop.",
          "exampleDe": "Bitte weisen Sie das Team vor dem Kundenworkshop ein.",
          "emoji": "🗣️",
          "hint": "",
          "phon": "/briːf/"
        },
        {
          "id": "m14",
          "term": "to loop someone in",
          "de": "jemanden einbeziehen (z. B. in den Verteiler)",
          "example": "Please loop me in on the email thread with the manufacturer.",
          "exampleDe": "Bitte nehmen Sie mich in den E-Mail-Verlauf mit dem Hersteller auf.",
          "emoji": "🔄",
          "hint": "Sehr üblich in E-Mails: I'll loop in our legal colleague.",
          "phon": "/luːp ɪn/"
        },
        {
          "id": "m15",
          "term": "to be on the same page",
          "de": "denselben Wissensstand haben, an einem Strang ziehen",
          "example": "I just want to make sure we are on the same page regarding the scope.",
          "exampleDe": "Ich möchte nur sichergehen, dass wir beim Umfang denselben Stand haben.",
          "emoji": "📖",
          "hint": "Wörtlich auf derselben Seite stehen, im übertragenen Sinn.",
          "phon": "/ɒn ðə seɪm peɪdʒ/"
        },
        {
          "id": "m16",
          "term": "to touch base",
          "de": "kurz Rücksprache halten",
          "example": "Let's touch base after the audit to discuss the findings.",
          "exampleDe": "Lass uns nach dem Audit kurz Rücksprache halten, um die Feststellungen zu besprechen.",
          "emoji": "👋",
          "hint": "Etwas informell, aber in internen Mails und Meetings üblich.",
          "phon": "/tʌtʃ beɪs/"
        },
        {
          "id": "m17",
          "term": "to clarify",
          "de": "klären, verdeutlichen",
          "example": "Could you clarify the scope of the assessment?",
          "exampleDe": "Könnten Sie den Umfang der Bewertung klären?",
          "emoji": "🔍",
          "hint": "",
          "phon": "/ˈklærəfaɪ/"
        },
        {
          "id": "m18",
          "term": "to confirm",
          "de": "bestätigen",
          "example": "Please confirm your availability by Wednesday.",
          "exampleDe": "Bitte bestätigen Sie Ihre Verfügbarkeit bis Mittwoch.",
          "emoji": "☑️",
          "hint": "",
          "phon": "/kənˈfɜːm/"
        },
        {
          "id": "m19",
          "term": "availability",
          "de": "Verfügbarkeit",
          "example": "What is your availability next week for a two-hour workshop?",
          "exampleDe": "Wie ist Ihre Verfügbarkeit nächste Woche für einen zweistündigen Workshop?",
          "emoji": "🗓️",
          "hint": "",
          "phon": "/əˌveɪləˈbɪləti/"
        },
        {
          "id": "m20",
          "term": "to escalate",
          "de": "eskalieren, an die nächste Ebene geben",
          "example": "If we cannot resolve this today, we will need to escalate it to the project sponsor.",
          "exampleDe": "Wenn wir das heute nicht klären können, müssen wir es an den Projektauftraggeber eskalieren.",
          "emoji": "⬆️",
          "hint": "Im Business-Englisch heißt escalate meist: an eine höhere Ebene weitergeben.",
          "phon": "/ˈeskəleɪt/"
        },
        {
          "id": "m21",
          "term": "takeaway",
          "de": "Kernpunkt, Erkenntnis, Takeaway",
          "example": "The main takeaway is that we need more evidence from the manufacturer.",
          "exampleDe": "Der wichtigste Punkt ist, dass wir mehr Nachweise vom Hersteller brauchen.",
          "emoji": "💡",
          "hint": "",
          "phon": "/ˈteɪkəweɪ/"
        },
        {
          "id": "m22",
          "term": "to circulate",
          "de": "in Umlauf bringen, verteilen",
          "example": "I will circulate the slide deck after the call.",
          "exampleDe": "Ich lasse die Folien nach dem Gespräch in Umlauf gehen.",
          "emoji": "📤",
          "hint": "",
          "phon": "/ˈsɜːkjəleɪt/"
        },
        {
          "id": "m23",
          "term": "dial-in details",
          "de": "Einwahldaten",
          "example": "The dial-in details are in the calendar invitation.",
          "exampleDe": "Die Einwahldaten stehen in der Kalendereinladung.",
          "emoji": "🔢",
          "hint": "",
          "phon": "/ˈdaɪəl ɪn/"
        },
        {
          "id": "m24",
          "term": "constructive feedback",
          "de": "konstruktives Feedback",
          "example": "Thank you for the constructive feedback on the draft report.",
          "exampleDe": "Vielen Dank für das konstruktive Feedback zum Berichtsentwurf.",
          "emoji": "💬",
          "hint": "",
          "phon": "/kənˈstrʌktɪv ˈfiːdbæk/"
        },
        {
          "id": "m25",
          "term": "to take the minutes",
          "de": "das Protokoll führen",
          "example": "Anna has agreed to take the minutes today.",
          "exampleDe": "Anna hat zugesagt, heute das Protokoll zu führen.",
          "emoji": "✍️",
          "hint": "",
          "phon": "/teɪk ðə ˈmɪnɪts/"
        }
      ]
    },
    {
      "id": "project",
      "title": "Project Management",
      "titleDe": "Projektmanagement",
      "blurb": "Umfang, Zeitplan, Lieferergebnisse und typische Projektwörter für Beratungsmandate.",
      "emoji": "📊",
      "color": "#1E4A66",
      "words": [
        {
          "id": "p01",
          "term": "scope",
          "de": "Projektumfang, Leistungsrahmen",
          "example": "We need to define the scope of the gap analysis before the kick-off.",
          "exampleDe": "Wir müssen den Umfang der Gap-Analyse vor dem Kick-off festlegen.",
          "emoji": "📐",
          "hint": "",
          "phon": "/skəʊp/"
        },
        {
          "id": "p02",
          "term": "in scope / out of scope",
          "de": "im / außerhalb des Leistungsumfangs",
          "example": "Source-code review is out of scope for this engagement.",
          "exampleDe": "Eine Quellcode-Prüfung liegt außerhalb des Leistungsumfangs dieses Mandats.",
          "emoji": "🧰",
          "hint": "Sehr nützlich, um Erwartungen klar zu stecken.",
          "phon": "/ɪn skəʊp/"
        },
        {
          "id": "p03",
          "term": "milestone",
          "de": "Meilenstein",
          "example": "The first milestone is the kick-off workshop with the product team.",
          "exampleDe": "Der erste Meilenstein ist der Kick-off-Workshop mit dem Produktteam.",
          "emoji": "🚩",
          "hint": "",
          "phon": "/ˈmaɪlstəʊn/"
        },
        {
          "id": "p04",
          "term": "deliverable",
          "de": "Liefergegenstand, Arbeitsergebnis",
          "example": "The main deliverable is a written CRA gap analysis report.",
          "exampleDe": "Das Hauptergebnis ist ein schriftlicher CRA-Gap-Analysebericht.",
          "emoji": "📦",
          "hint": "",
          "phon": "/dɪˈlɪvərəbl/"
        },
        {
          "id": "p05",
          "term": "deadline",
          "de": "Frist, Stichtag",
          "example": "The report deadline is 15 December.",
          "exampleDe": "Die Frist für den Bericht ist der 15. Dezember.",
          "emoji": "⏰",
          "hint": "Auch: due date. The report is due on 15 December.",
          "phon": "/ˈdedlaɪn/"
        },
        {
          "id": "p06",
          "term": "timeline",
          "de": "Zeitplan",
          "example": "The timeline is tight but realistic if the documents arrive this week.",
          "exampleDe": "Der Zeitplan ist knapp, aber realistisch, wenn die Unterlagen diese Woche eintreffen.",
          "emoji": "📈",
          "hint": "",
          "phon": "/ˈtaɪmlaɪn/"
        },
        {
          "id": "p07",
          "term": "constraint",
          "de": "Rahmenbedingung, Einschränkung",
          "example": "The main constraint is the limited availability of the engineering team.",
          "exampleDe": "Die wichtigste Einschränkung ist die geringe Verfügbarkeit des Entwicklungsteams.",
          "emoji": "🧱",
          "hint": "",
          "phon": "/kənˈstreɪnt/"
        },
        {
          "id": "p08",
          "term": "dependency",
          "de": "Abhängigkeit",
          "example": "This task has a dependency on the client's technical documentation.",
          "exampleDe": "Diese Aufgabe hängt von der technischen Dokumentation des Kunden ab.",
          "emoji": "🔗",
          "hint": "",
          "phon": "/dɪˈpendənsi/"
        },
        {
          "id": "p09",
          "term": "bottleneck",
          "de": "Engpass",
          "example": "The review process is currently a bottleneck.",
          "exampleDe": "Der Review-Prozess ist derzeit ein Engpass.",
          "emoji": "🚧",
          "hint": "",
          "phon": "/ˈbɒtlnek/"
        },
        {
          "id": "p10",
          "term": "to assign",
          "de": "zuweisen",
          "example": "I will assign the risk workshop to a senior consultant.",
          "exampleDe": "Ich weise den Risiko-Workshop einer Senior-Beraterin zu.",
          "emoji": "📌",
          "hint": "",
          "phon": "/əˈsaɪn/"
        },
        {
          "id": "p11",
          "term": "owner (of a task)",
          "de": "Verantwortliche(r) für eine Aufgabe",
          "example": "Who is the owner of this action item?",
          "exampleDe": "Wer ist für diesen offenen Punkt verantwortlich?",
          "emoji": "👤",
          "hint": "owner hier nicht im Sinne von Eigentümer, sondern von Zuständigkeit.",
          "phon": "/ˈəʊnə/"
        },
        {
          "id": "p12",
          "term": "to track progress",
          "de": "den Fortschritt verfolgen",
          "example": "We will track progress in a short weekly status call.",
          "exampleDe": "Den Fortschritt verfolgen wir in einem kurzen wöchentlichen Statusgespräch.",
          "emoji": "📡",
          "hint": "",
          "phon": "/træk ˈprəʊɡres/"
        },
        {
          "id": "p13",
          "term": "status update",
          "de": "Statusbericht, Zwischenstand",
          "example": "I will send a brief status update every Friday.",
          "exampleDe": "Ich schicke jeden Freitag einen kurzen Statusbericht.",
          "emoji": "🗞️",
          "hint": "",
          "phon": "/ˈsteɪtəs ˌʌpdeɪt/"
        },
        {
          "id": "p14",
          "term": "to be on track",
          "de": "im Plan liegen",
          "example": "We are on track to deliver the draft report next week.",
          "exampleDe": "Wir liegen im Plan, den Berichtsentwurf nächste Woche zu liefern.",
          "emoji": "🛤️",
          "hint": "Gegenteil: to be off track.",
          "phon": "/ɒn træk/"
        },
        {
          "id": "p15",
          "term": "to fall behind schedule",
          "de": "in Verzug geraten",
          "example": "We have fallen behind schedule because the evidence arrived late.",
          "exampleDe": "Wir sind in Verzug geraten, weil die Nachweise spät eingetroffen sind.",
          "emoji": "🐢",
          "hint": "",
          "phon": "/fɔːl bɪˈhaɪnd ˈʃedjuːl/"
        },
        {
          "id": "p16",
          "term": "contingency plan",
          "de": "Alternativplan, Notfallplan",
          "example": "We should agree on a contingency plan if the workshop has to be postponed.",
          "exampleDe": "Wir sollten einen Alternativplan vereinbaren, falls der Workshop verschoben werden muss.",
          "emoji": "🛟",
          "hint": "",
          "phon": "/kənˈtɪndʒənsi plæn/"
        },
        {
          "id": "p17",
          "term": "change request",
          "de": "Änderungsantrag",
          "example": "An additional plant visit would require a formal change request.",
          "exampleDe": "Ein zusätzlicher Werksbesuch würde einen formellen Änderungsantrag erfordern.",
          "emoji": "📝",
          "hint": "",
          "phon": "/tʃeɪndʒ rɪˌkwest/"
        },
        {
          "id": "p18",
          "term": "to sign off (on)",
          "de": "freigeben, abnehmen",
          "example": "We cannot close the project until the client signs off on the final report.",
          "exampleDe": "Wir können das Projekt erst abschließen, wenn der Kunde den Abschlussbericht freigibt.",
          "emoji": "🖋️",
          "hint": "",
          "phon": "/saɪn ɒf/"
        },
        {
          "id": "p19",
          "term": "work package",
          "de": "Arbeitspaket",
          "example": "The conformity assessment is a separate work package.",
          "exampleDe": "Die Konformitätsbewertung ist ein eigenes Arbeitspaket.",
          "emoji": "📂",
          "hint": "",
          "phon": "/wɜːk ˌpækɪdʒ/"
        },
        {
          "id": "p20",
          "term": "to prioritise",
          "de": "priorisieren",
          "example": "We need to prioritise the high-risk findings first.",
          "exampleDe": "Wir müssen die Feststellungen mit hohem Risiko zuerst priorisieren.",
          "emoji": "🥇",
          "hint": "BE: prioritise, AE: prioritize. Beide sind korrekt.",
          "phon": "/praɪˈɒrətaɪz/"
        },
        {
          "id": "p21",
          "term": "to roll out",
          "de": "ausrollen, einführen",
          "example": "The manufacturer plans to roll out the new vulnerability process in January.",
          "exampleDe": "Der Hersteller plant, das neue Verfahren zum Umgang mit Schwachstellen im Januar auszurollen.",
          "emoji": "📤",
          "hint": "",
          "phon": "/rəʊl aʊt/"
        },
        {
          "id": "p22",
          "term": "baseline",
          "de": "Ausgangsbasis, Baseline",
          "example": "The gap analysis will establish a baseline against the CRA requirements.",
          "exampleDe": "Die Gap-Analyse schafft eine Ausgangsbasis gegenüber den CRA-Anforderungen.",
          "emoji": "📏",
          "hint": "",
          "phon": "/ˈbeɪslaɪn/"
        },
        {
          "id": "p23",
          "term": "handover",
          "de": "Übergabe",
          "example": "A structured handover is important if another consultant takes over the account.",
          "exampleDe": "Eine strukturierte Übergabe ist wichtig, wenn eine andere Beratungsperson das Mandat übernimmt.",
          "emoji": "🤝",
          "hint": "",
          "phon": "/ˈhændəʊvə/"
        },
        {
          "id": "p24",
          "term": "lessons learned",
          "de": "Lessons Learned, gewonnene Erkenntnisse",
          "example": "We will document the lessons learned after the first CRA engagement.",
          "exampleDe": "Nach dem ersten CRA-Mandat halten wir die Lessons Learned fest.",
          "emoji": "🎓",
          "hint": "",
          "phon": "/ˈlesnz lɜːnd/"
        },
        {
          "id": "p25",
          "term": "kick-off meeting",
          "de": "Kick-off-Meeting, Startbesprechung",
          "example": "The kick-off meeting is scheduled for Tuesday at 10:00.",
          "exampleDe": "Das Kick-off-Meeting ist für Dienstag um 10:00 Uhr geplant.",
          "emoji": "🎬",
          "hint": "Schreibweise oft kick-off (mit Bindestrich) als Substantiv.",
          "phon": "/ˈkɪk ɒf ˌmiːtɪŋ/"
        }
      ]
    },
    {
      "id": "security",
      "title": "IT Security & CRA",
      "titleDe": "IT-Security & CRA / Compliance",
      "blurb": "Fachwortschatz für Gap-Analysen, Risikobewertung und den Cyber Resilience Act.",
      "emoji": "🛡️",
      "color": "#0E2A3D",
      "words": [
        {
          "id": "s01",
          "term": "gap analysis",
          "de": "Gap-Analyse, Abweichungsanalyse",
          "example": "The purpose of the gap analysis is to compare the current state with the CRA requirements.",
          "exampleDe": "Ziel der Gap-Analyse ist der Abgleich des Ist-Zustands mit den CRA-Anforderungen.",
          "emoji": "🔎",
          "hint": "",
          "phon": "/ɡæp əˈnæləsɪs/"
        },
        {
          "id": "s02",
          "term": "compliance",
          "de": "Regelkonformität, Compliance",
          "example": "The manufacturer must demonstrate compliance with the essential cybersecurity requirements.",
          "exampleDe": "Der Hersteller muss die Einhaltung der wesentlichen Cybersicherheitsanforderungen nachweisen.",
          "emoji": "⚖️",
          "hint": "",
          "phon": "/kəmˈplaɪəns/"
        },
        {
          "id": "s03",
          "term": "Cyber Resilience Act (CRA)",
          "de": "Cyber Resilience Act (EU-Verordnung)",
          "example": "The Cyber Resilience Act introduces mandatory cybersecurity requirements for products with digital elements.",
          "exampleDe": "Der Cyber Resilience Act führt verbindliche Cybersicherheitsanforderungen für Produkte mit digitalen Elementen ein.",
          "emoji": "🇪🇺",
          "hint": "EU-Verordnung über Cybersicherheitsanforderungen für Produkte mit digitalen Elementen.",
          "phon": "/ˌsaɪbə rɪˈzɪliəns ækt/"
        },
        {
          "id": "s04",
          "term": "vulnerability",
          "de": "Schwachstelle",
          "example": "The team discovered a critical vulnerability in the firmware update process.",
          "exampleDe": "Das Team hat eine kritische Schwachstelle im Firmware-Update-Prozess entdeckt.",
          "emoji": "🕳️",
          "hint": "",
          "phon": "/ˌvʌlnərəˈbɪləti/"
        },
        {
          "id": "s05",
          "term": "threat",
          "de": "Bedrohung",
          "example": "We should assess the most relevant threats to this product category.",
          "exampleDe": "Wir sollten die relevantesten Bedrohungen für diese Produktkategorie bewerten.",
          "emoji": "⚠️",
          "hint": "",
          "phon": "/θret/"
        },
        {
          "id": "s06",
          "term": "risk assessment",
          "de": "Risikobewertung",
          "example": "A risk assessment is required before we can prioritise the remediation work.",
          "exampleDe": "Eine Risikobewertung ist nötig, bevor wir die Nachbesserungen priorisieren können.",
          "emoji": "📉",
          "hint": "",
          "phon": "/rɪsk əˈsesmənt/"
        },
        {
          "id": "s07",
          "term": "mitigation measure",
          "de": "Gegenmaßnahme, Maßnahme zur Risikominderung",
          "example": "Encryption of data in transit is one of the proposed mitigation measures.",
          "exampleDe": "Die Verschlüsselung von Daten bei der Übertragung ist eine der vorgeschlagenen Gegenmaßnahmen.",
          "emoji": "🛡️",
          "hint": "",
          "phon": "/ˌmɪtɪˈɡeɪʃn ˌmeʒə/"
        },
        {
          "id": "s08",
          "term": "residual risk",
          "de": "Restrisiko",
          "example": "Even after remediation, a certain residual risk will remain and must be accepted by the client.",
          "exampleDe": "Auch nach der Nachbesserung bleibt ein gewisses Restrisiko, das der Kunde akzeptieren muss.",
          "emoji": "📊",
          "hint": "",
          "phon": "/rɪˈzɪdjuəl rɪsk/"
        },
        {
          "id": "s09",
          "term": "due diligence",
          "de": "Sorgfaltspflicht, Due Diligence",
          "example": "The manufacturer is expected to exercise due diligence throughout the product life cycle.",
          "exampleDe": "Vom Hersteller wird erwartet, dass er während des gesamten Produktlebenszyklus die gebotene Sorgfalt walten lässt.",
          "emoji": "🔎",
          "hint": "",
          "phon": "/ˌdjuː ˈdɪlɪdʒəns/"
        },
        {
          "id": "s10",
          "term": "evidence",
          "de": "Nachweis, Beleg",
          "example": "We cannot close this finding until the client provides sufficient evidence.",
          "exampleDe": "Wir können diese Feststellung erst schließen, wenn der Kunde ausreichende Nachweise vorlegt.",
          "emoji": "📎",
          "hint": "Unzählbar: evidence, nicht evidences. a piece of evidence wenn man zählt.",
          "phon": "/ˈevɪdəns/"
        },
        {
          "id": "s11",
          "term": "to remediate",
          "de": "beheben, nachbessern",
          "example": "The vendor has 90 days to remediate the high-risk findings.",
          "exampleDe": "Der Anbieter hat 90 Tage Zeit, die Feststellungen mit hohem Risiko zu beheben.",
          "emoji": "🔧",
          "hint": "",
          "phon": "/rɪˈmiːdieɪt/"
        },
        {
          "id": "s12",
          "term": "security incident",
          "de": "Sicherheitsvorfall",
          "example": "Every security incident must be documented and assessed.",
          "exampleDe": "Jeder Sicherheitsvorfall muss dokumentiert und bewertet werden.",
          "emoji": "🚨",
          "hint": "",
          "phon": "/sɪˈkjʊərəti ˈɪnsɪdənt/"
        },
        {
          "id": "s13",
          "term": "incident response",
          "de": "Vorfallreaktion, Incident Response",
          "example": "The incident response process should be tested at least once a year.",
          "exampleDe": "Der Prozess zur Vorfallreaktion sollte mindestens einmal jährlich getestet werden.",
          "emoji": "🚑",
          "hint": "",
          "phon": "/ˈɪnsɪdənt rɪˈspɒns/"
        },
        {
          "id": "s14",
          "term": "manufacturer",
          "de": "Hersteller",
          "example": "Under the CRA, the manufacturer is responsible for the cybersecurity of the product.",
          "exampleDe": "Nach dem CRA ist der Hersteller für die Cybersicherheit des Produkts verantwortlich.",
          "emoji": "🏭",
          "hint": "",
          "phon": "/ˌmænjuˈfæktʃərə/"
        },
        {
          "id": "s15",
          "term": "product life cycle",
          "de": "Produktlebenszyklus",
          "example": "Security support must be provided throughout the product life cycle.",
          "exampleDe": "Support für die Sicherheit muss während des gesamten Produktlebenszyklus geleistet werden.",
          "emoji": "🔄",
          "hint": "Auch: product lifetime, je nach Kontext.",
          "phon": "/ˌprɒdʌkt ˈlaɪf ˌsaɪkl/"
        },
        {
          "id": "s16",
          "term": "vulnerability handling",
          "de": "Umgang mit Schwachstellen",
          "example": "The CRA requires a clear vulnerability handling process, including coordinated disclosure.",
          "exampleDe": "Der CRA verlangt einen klaren Prozess für den Umgang mit Schwachstellen, einschließlich koordinierter Offenlegung.",
          "emoji": "📥",
          "hint": "",
          "phon": "/ˌvʌlnərəˈbɪləti ˈhændlɪŋ/"
        },
        {
          "id": "s17",
          "term": "Software Bill of Materials (SBOM)",
          "de": "Software-Stückliste (SBOM)",
          "example": "An up-to-date Software Bill of Materials helps you respond quickly to newly disclosed vulnerabilities.",
          "exampleDe": "Eine aktuelle Software-Stückliste hilft Ihnen, auf neu bekannt gewordene Schwachstellen schnell zu reagieren.",
          "emoji": "📄",
          "hint": "",
          "phon": "/es bɒm/"
        },
        {
          "id": "s18",
          "term": "conformity assessment",
          "de": "Konformitätsbewertung",
          "example": "The conformity assessment procedure depends on the product class.",
          "exampleDe": "Das Verfahren der Konformitätsbewertung hängt von der Produktklasse ab.",
          "emoji": "✔️",
          "hint": "",
          "phon": "/kənˈfɔːməti əˌsesmənt/"
        },
        {
          "id": "s19",
          "term": "CE marking",
          "de": "CE-Kennzeichnung",
          "example": "Once compliance is demonstrated, the manufacturer may affix the CE marking.",
          "exampleDe": "Sobald die Konformität nachgewiesen ist, darf der Hersteller die CE-Kennzeichnung anbringen.",
          "emoji": "©️",
          "hint": "",
          "phon": "/siː iː ˈmɑːkɪŋ/"
        },
        {
          "id": "s20",
          "term": "finding",
          "de": "Feststellung (z. B. in einem Audit oder einer Analyse)",
          "example": "The report lists seven findings, two of which are high risk.",
          "exampleDe": "Der Bericht listet sieben Feststellungen auf, davon zwei mit hohem Risiko.",
          "emoji": "🔖",
          "hint": "Im Audit-Kontext ist finding die neutrale Fachbezeichnung, nicht einfach Fehler.",
          "phon": "/ˈfaɪndɪŋ/"
        },
        {
          "id": "s21",
          "term": "recommendation",
          "de": "Empfehlung",
          "example": "Our main recommendation is to formalise the vulnerability handling process.",
          "exampleDe": "Unsere wichtigste Empfehlung ist, den Prozess zum Umgang mit Schwachstellen zu formalisieren.",
          "emoji": "💡",
          "hint": "",
          "phon": "/ˌrekəmenˈdeɪʃn/"
        },
        {
          "id": "s22",
          "term": "to implement",
          "de": "umsetzen, implementieren",
          "example": "The client has agreed to implement the high-priority measures within three months.",
          "exampleDe": "Der Kunde hat zugesagt, die Maßnahmen mit hoher Priorität innerhalb von drei Monaten umzusetzen.",
          "emoji": "⚙️",
          "hint": "",
          "phon": "/ˈɪmplɪment/"
        },
        {
          "id": "s23",
          "term": "supply chain",
          "de": "Lieferkette",
          "example": "CRA compliance also requires appropriate measures across the supply chain.",
          "exampleDe": "Die CRA-Konformität erfordert auch angemessene Maßnahmen entlang der Lieferkette.",
          "emoji": "⛓️",
          "hint": "",
          "phon": "/səˈplaɪ tʃeɪn/"
        },
        {
          "id": "s24",
          "term": "non-compliance",
          "de": "Nichteinhaltung, Non-Compliance",
          "example": "Non-compliance with the CRA can lead to significant administrative fines.",
          "exampleDe": "Die Nichteinhaltung des CRA kann zu erheblichen Geldbußen führen.",
          "emoji": "🚫",
          "hint": "",
          "phon": "/ˌnɒnkəmˈplaɪəns/"
        },
        {
          "id": "s25",
          "term": "essential cybersecurity requirements",
          "de": "wesentliche Cybersicherheitsanforderungen",
          "example": "We will map each essential cybersecurity requirement to the current product documentation.",
          "exampleDe": "Wir ordnen jede wesentliche Cybersicherheitsanforderung der aktuellen Produktdokumentation zu.",
          "emoji": "📑",
          "hint": "Fester Begriff im CRA-Kontext.",
          "phon": "/ɪˈsenʃl ˌsaɪbəsɪˈkjʊərəti rɪˈkwaɪəmənts/"
        }
      ]
    }
  ],
  "grammar": [
    {
      "id": "conditionals",
      "title": "If-Sätze (Conditionals)",
      "emoji": "🔀",
      "intro": "If-Sätze gehören zu den häufigsten Stolperstellen – besonders der Impuls, will in den if-Satz zu setzen.",
      "theory": [
        {
          "h": "Die Grundregel",
          "p": "Im if-Satz steht in der Regel kein will, auch wenn es um die Zukunft geht. Will kommt in der Nachfolgeklausel vor (bei der First Conditional)."
        },
        {
          "h": "First Conditional – reale Zukunft",
          "p": "If + present simple, will + infinitive. Beispiel: If the client accepts the offer, we will start next month. Nicht: If the client will accept…"
        },
        {
          "h": "Second Conditional – hypothetisch / unwahrscheinlich",
          "p": "If + past simple, would + infinitive. Beispiel: If we had more time, we would extend the workshop. Feste Wendung: If I were you, I would…"
        },
        {
          "h": "Third Conditional – irreale Vergangenheit",
          "p": "If + past perfect, would/could/might have + past participle. Beispiel: If we had been informed earlier, we could have mitigated the risk."
        },
        {
          "h": "Weitere Signalwörter",
          "p": "Dieselbe Zeitregel gilt oft auch nach as soon as, when, unless, provided that und after, wenn sie sich auf die Zukunft beziehen: We will share the report as soon as it is ready (nicht: will be ready)."
        }
      ],
      "exercises": [
        {
          "id": "c01",
          "type": "mc",
          "area": "conditionals",
          "prompt": "If the client ___ the offer, we will start next month.",
          "options": [
            "accepts",
            "will accept",
            "accepted",
            "would accept"
          ],
          "answer": 0,
          "explain": "First Conditional: if + present simple, will + infinitive. Im if-Satz steht kein will."
        },
        {
          "id": "c02",
          "type": "mc",
          "area": "conditionals",
          "prompt": "If we ___ more time, we would extend the workshop.",
          "options": [
            "have",
            "had",
            "would have",
            "will have"
          ],
          "answer": 1,
          "explain": "Second Conditional (hypothetisch): if + past simple, would + infinitive."
        },
        {
          "id": "c03",
          "type": "mc",
          "area": "conditionals",
          "prompt": "If the documentation ___ earlier, we could have started last week.",
          "options": [
            "arrived",
            "had arrived",
            "would have arrived",
            "would arrive"
          ],
          "answer": 1,
          "explain": "Third Conditional (irreale Vergangenheit): if + past perfect (had arrived)."
        },
        {
          "id": "c04",
          "type": "gap",
          "area": "conditionals",
          "prompt": "If you ___ any clarification, please let me know.",
          "accept": [
            "need"
          ],
          "explain": "Höfliches Angebot in der Gegenwart/Zukunft: if + present simple. Nicht: If you will need…",
          "placeholder": "Antwort eingeben"
        },
        {
          "id": "c05",
          "type": "mc",
          "area": "conditionals",
          "prompt": "Welche Aussage ist korrekt?",
          "options": [
            "If the auditor will find a gap, we will remediate it.",
            "If the auditor finds a gap, we will remediate it.",
            "If the auditor would find a gap, we will remediate it.",
            "If the auditor found a gap, we will remediate it."
          ],
          "answer": 1,
          "explain": "Richtig ist die First Conditional: If the auditor finds a gap, we will remediate it."
        },
        {
          "id": "c06",
          "type": "mc",
          "area": "conditionals",
          "prompt": "If I ___ you, I would escalate this today.",
          "options": [
            "am",
            "were",
            "will be",
            "would be"
          ],
          "answer": 1,
          "explain": "Feste formelle Wendung: If I were you… (Konjunktiv). If I was you hört man umgangssprachlich, gilt aber als weniger korrekt."
        },
        {
          "id": "c07",
          "type": "mc",
          "area": "conditionals",
          "prompt": "We will share the report as soon as it ___ ready.",
          "options": [
            "is",
            "will be",
            "would be",
            "was"
          ],
          "answer": 0,
          "explain": "Nach as soon as, when oder after steht Present Simple, nicht will – auch wenn es um die Zukunft geht."
        },
        {
          "id": "c08",
          "type": "mc",
          "area": "conditionals",
          "prompt": "Unless the client ___ the evidence, we cannot close the finding.",
          "options": [
            "provides",
            "will provide",
            "provided",
            "would provide"
          ],
          "answer": 0,
          "explain": "Unless (= if not) steht ebenfalls mit present simple, nicht mit will."
        },
        {
          "id": "c09",
          "type": "mc",
          "area": "conditionals",
          "prompt": "If we had been informed earlier, we ___ the risk.",
          "options": [
            "could have mitigated",
            "can mitigate",
            "will mitigate",
            "mitigate"
          ],
          "answer": 0,
          "explain": "Third Conditional: die Folge in der Vergangenheit steht mit could/would/might have + past participle."
        },
        {
          "id": "c10",
          "type": "mc",
          "area": "conditionals",
          "prompt": "Welche Formulierung ist in einer formellen Mail am passendsten?",
          "options": [
            "If you would have any questions, please contact me.",
            "Should you have any questions, please do not hesitate to contact me.",
            "If you will have questions, contact me.",
            "If you would have questions, you contact me."
          ],
          "answer": 1,
          "explain": "Should you have… ist die höfliche, formelle Inversion. If you would have any questions ist grammatikalisch falsch. Auch korrekt, etwas schlichter: If you have any questions…"
        }
      ]
    },
    {
      "id": "tenses",
      "title": "Present Perfect, Past Simple & Continuous",
      "emoji": "⏱️",
      "intro": "Wann ist etwas abgeschlossen (yesterday, ago, last quarter) – und wann reicht es bis in die Gegenwart (for, since, yet, this month)?",
      "theory": [
        {
          "h": "Present Perfect Continuous für Dauer bis jetzt",
          "p": "I have been working in IT security for ten years now. Die Handlung hat in der Vergangenheit begonnen und gilt noch. Signalwörter: for, since, how long, now."
        },
        {
          "h": "Past Simple für abgeschlossene Zeitpunkte",
          "p": "We had the kick-off meeting yesterday. / I completed the report two hours ago. / Last quarter we completed three gap analyses. Signalwörter: yesterday, ago, last week/month/quarter, in 2022, on Monday."
        },
        {
          "h": "Present Perfect für unvollendete Zeiträume und Ergebnis",
          "p": "The client hasn't sent the documents yet. / We have seen the same issue three times this month. Signalwörter: yet, already, just, ever, never, this week/month, so far."
        },
        {
          "h": "Past Continuous + Past Simple",
          "p": "Eine laufende Handlung in der Vergangenheit (were delivering) wird von einem Ereignis unterbrochen (the fire alarm went off): While we were delivering the workshop, the fire alarm went off."
        }
      ],
      "exercises": [
        {
          "id": "t01",
          "type": "mc",
          "area": "tenses",
          "prompt": "I ___ in IT security for ten years now.",
          "options": [
            "have been working",
            "work",
            "worked",
            "am working"
          ],
          "answer": 0,
          "explain": "Dauer vom Beginn in der Vergangenheit bis jetzt: Present Perfect Continuous + for/since."
        },
        {
          "id": "t02",
          "type": "mc",
          "area": "tenses",
          "prompt": "We ___ the kick-off meeting yesterday.",
          "options": [
            "had",
            "have had",
            "have been having",
            "are having"
          ],
          "answer": 0,
          "explain": "Yesterday markiert einen abgeschlossenen Zeitpunkt → Past Simple."
        },
        {
          "id": "t03",
          "type": "mc",
          "area": "tenses",
          "prompt": "The client ___ the documents yet.",
          "options": [
            "hasn't sent",
            "didn't send",
            "hasn't been sending",
            "doesn't send"
          ],
          "answer": 0,
          "explain": "Yet ist typisch für das Present Perfect (verneint oder als Frage)."
        },
        {
          "id": "t04",
          "type": "mc",
          "area": "tenses",
          "prompt": "I ___ TPC Security since 2023.",
          "options": [
            "have been with",
            "am with",
            "was with",
            "had been with"
          ],
          "answer": 0,
          "explain": "Since + Beginnzeitpunkt, Zugehörigkeit dauert an → Present Perfect: have been with."
        },
        {
          "id": "t05",
          "type": "mc",
          "area": "tenses",
          "prompt": "While we ___ the workshop, the fire alarm went off.",
          "options": [
            "were delivering",
            "have delivered",
            "deliver",
            "had delivered"
          ],
          "answer": 0,
          "explain": "Past Continuous für die laufende Handlung, Past Simple für die Unterbrechung (went off)."
        },
        {
          "id": "t06",
          "type": "gap",
          "area": "tenses",
          "prompt": "She ___ already ___ the risk assessment. (finish)",
          "accept": [
            "has already finished",
            "has finished already"
          ],
          "explain": "Present Perfect mit already: has already finished (Reihenfolge already nach has ist die üblichste).",
          "placeholder": "has already finished"
        },
        {
          "id": "t07",
          "type": "mc",
          "area": "tenses",
          "prompt": "Last quarter we ___ three gap analyses.",
          "options": [
            "completed",
            "have completed",
            "have been completing",
            "were completing"
          ],
          "answer": 0,
          "explain": "Last quarter ist ein abgeschlossener Zeitraum → Past Simple."
        },
        {
          "id": "t08",
          "type": "mc",
          "area": "tenses",
          "prompt": "How long ___ on this engagement?",
          "options": [
            "have you been working",
            "are you working",
            "did you work",
            "you have worked"
          ],
          "answer": 0,
          "explain": "How long + andauernde Tätigkeit → have you been working."
        },
        {
          "id": "t09",
          "type": "mc",
          "area": "tenses",
          "prompt": "I ___ the report two hours ago.",
          "options": [
            "completed",
            "have completed",
            "have been completing",
            "complete"
          ],
          "answer": 0,
          "explain": "Ago verlangt Past Simple, nicht Present Perfect."
        },
        {
          "id": "t10",
          "type": "mc",
          "area": "tenses",
          "prompt": "We ___ the same issue three times this month.",
          "options": [
            "have seen",
            "saw",
            "were seeing",
            "see"
          ],
          "answer": 0,
          "explain": "This month ist ein Zeitraum, der noch nicht vorbei ist → Present Perfect."
        }
      ]
    },
    {
      "id": "formality",
      "title": "Höfliche Bitten & Formalität",
      "emoji": "🎩",
      "intro": "Im Kundenkontakt entscheidet oft die Formulierung, nicht nur die Grammatik. Direkte Formen wie Send me the file klingen auf Englisch schnell unhöflich.",
      "theory": [
        {
          "h": "Bitten abschwächen",
          "p": "Could you please… und I would appreciate it if you could… sind sicherer als Can you…, I want you to… oder der Imperativ (Send me…)."
        },
        {
          "h": "look forward to + -ing",
          "p": "I look forward to hearing from you. / I look forward to our meeting. Das to ist hier eine Präposition, darum folgt ein Gerund oder ein Nomen – nicht der Infinitiv (I look forward to hear)."
        },
        {
          "h": "Anrede und Gruß",
          "p": "In der ersten Kundenmail: Dear John, oder Dear Mr Smith, – danach ein Komma, und der nächste Satz beginnt groß. Der sicherste Schluss ist Best regards,. Nur Regards ist kürzer und etwas kühler; Cheers ist intern und informell."
        },
        {
          "h": "Kleine, aber sichtbare Fehler",
          "p": "My name is… (name klein). responsible (nicht responsable). Bitte konkrete Terminvorschläge machen, nicht nur Can we set up a meeting?"
        }
      ],
      "exercises": [
        {
          "id": "f01",
          "type": "mc",
          "area": "formality",
          "prompt": "Welche Formulierung ist in einer Kundenmail am passendsten?",
          "options": [
            "Send me the documents.",
            "I want the documents by Friday.",
            "I would appreciate it if you could send the documents by Friday.",
            "You must send me the documents."
          ],
          "answer": 2,
          "explain": "I would appreciate it if you could… ist höflich, klar und im Kundenverkehr üblich."
        },
        {
          "id": "f02",
          "type": "mc",
          "area": "formality",
          "prompt": "I look forward to ___ from you.",
          "options": [
            "hearing",
            "hear",
            "heard",
            "be hearing"
          ],
          "answer": 0,
          "explain": "look forward to + Gerund (-ing). To ist hier Präposition, kein Infinitivzeichen."
        },
        {
          "id": "f03",
          "type": "gap",
          "area": "formality",
          "prompt": "Would you mind ___ the meeting to Thursday? (reschedule)",
          "accept": [
            "rescheduling"
          ],
          "explain": "Would you mind + Gerund: Would you mind rescheduling…? Sehr höfliche Bitte.",
          "placeholder": "rescheduling"
        },
        {
          "id": "f04",
          "type": "mc",
          "area": "formality",
          "prompt": "Welche Anrede und welcher Schluss passen am besten zu einer ersten Kundenmail?",
          "options": [
            "Hey John, / Cheers",
            "Dear John, / Best regards",
            "Hi, / Regards",
            "Hello John! / Bye"
          ],
          "answer": 1,
          "explain": "Dear + Name und Best regards sind die sicherste formelle Kombination. Den Vornamen zu nutzen ist in Ordnung, wenn er bereits in der Kommunikation verwendet wird; sonst eher Dear Mr Smith."
        },
        {
          "id": "f05",
          "type": "mc",
          "area": "formality",
          "prompt": "„Please find attached the draft report.“ Ist das in einer formellen Mail angemessen?",
          "options": [
            "Ja, das ist eine übliche formelle Wendung.",
            "Nein, das ist unhöflich.",
            "Nein, man darf nur „I attach“ schreiben.",
            "Nein, Anhänge erwähnt man nicht im Text."
          ],
          "answer": 0,
          "explain": "Please find attached… ist eine etablierte, formelle Wendung. Eine moderne Alternative ist: I have attached the draft report."
        },
        {
          "id": "f06",
          "type": "mc",
          "area": "formality",
          "prompt": "Wähle die höflichste Bitte:",
          "options": [
            "Can you send this now?",
            "Could you please send this at your earliest convenience?",
            "Send this ASAP.",
            "I need this."
          ],
          "answer": 1,
          "explain": "Could you please… at your earliest convenience ist höflich und im Geschäftsverkehr üblich. ASAP klingt gedrängt, der Imperativ unhöflich."
        },
        {
          "id": "f07",
          "type": "mc",
          "area": "formality",
          "prompt": "Welcher Satz ist falsch?",
          "options": [
            "Please let me know which option suits you best.",
            "I am looking forward to our meeting.",
            "I am looking forward to hear from you.",
            "Please do not hesitate to contact me."
          ],
          "answer": 2,
          "explain": "Falsch ist looking forward to hear – richtig: looking forward to hearing from you."
        },
        {
          "id": "f08",
          "type": "gap",
          "area": "formality",
          "prompt": "I am writing to ___ a kick-off meeting for the CRA gap analysis.",
          "accept": [
            "propose",
            "suggest"
          ],
          "explain": "I am writing to… ist ein klassischer Einstieg. Danach ein Verb im Infinitiv: propose oder suggest.",
          "placeholder": "propose"
        },
        {
          "id": "f09",
          "type": "mc",
          "area": "formality",
          "prompt": "Welche Schreibweise ist korrekt?",
          "options": [
            "My Name is Isa.",
            "My name is Isa.",
            "my Name is Isa.",
            "My name Is Isa."
          ],
          "answer": 1,
          "explain": "name wird klein geschrieben. Nur das erste Wort des Satzes und Eigennamen werden großgeschrieben."
        },
        {
          "id": "f10",
          "type": "mc",
          "area": "formality",
          "prompt": "Welche Variante ist korrekt und höflich?",
          "options": [
            "Thanks for the documents. I wait for your feedback.",
            "Thank you for the documents. I look forward to your feedback.",
            "Thx for the docs, wait for FB.",
            "Thank you for the documents. I wait your feedback."
          ],
          "answer": 1,
          "explain": "I wait for… klingt unidiomatisch. Üblich ist I look forward to your feedback. Außerdem: wait for something, nicht wait something."
        }
      ]
    },
    {
      "id": "inversion",
      "title": "Inversion & formelle Strukturen",
      "emoji": "⬆️",
      "intro": "In formellen Mails und Berichten wirkt die Inversion (Had we been informed…, Should you have…) souveräner als ein schlichter if-Satz.",
      "theory": [
        {
          "h": "Had we… statt If we had…",
          "p": "Had we been informed earlier, we could have mitigated the risk. Das ist die gehobene Form von If we had been informed earlier… Wichtig: If allein reicht nicht, wenn had fehlt (If we been informed)."
        },
        {
          "h": "Should you… statt If you…",
          "p": "Should you have any questions, please do not hesitate to contact me. Höflicher, formeller Briefschluss. Bedeutung: If you have any questions…"
        },
        {
          "h": "Were we to…",
          "p": "Were we to postpone the workshop, the timeline would slip. Bedeutung: If we postponed the workshop… / If we were to postpone…"
        },
        {
          "h": "Verneinende oder einschränkende Adverbiale am Satzanfang",
          "p": "Nach Not only, Under no circumstances oder Only after steht die Umschreibung mit Hilfsverb vor dem Subjekt: Not only did we identify the gaps, but we also proposed a plan. Under no circumstances should we share the report with third parties."
        }
      ],
      "exercises": [
        {
          "id": "i01",
          "type": "mc",
          "area": "inversion",
          "prompt": "___ we been informed earlier, we could have mitigated the risk.",
          "options": [
            "Had",
            "If",
            "Have",
            "Should"
          ],
          "answer": 0,
          "explain": "Formale Inversion im Third Conditional: Had we been informed… = If we had been informed… If allein ist hier falsch, weil dann had fehlen würde."
        },
        {
          "id": "i02",
          "type": "mc",
          "area": "inversion",
          "prompt": "___ you have any questions, please do not hesitate to contact me.",
          "options": [
            "Should",
            "If would",
            "Had",
            "Would"
          ],
          "answer": 0,
          "explain": "Should you have any questions… ist die klassische formelle Mail-Wendung."
        },
        {
          "id": "i03",
          "type": "mc",
          "area": "inversion",
          "prompt": "___ we to postpone the workshop, the timeline would slip.",
          "options": [
            "Were",
            "Was",
            "If",
            "Had"
          ],
          "answer": 0,
          "explain": "Were we to postpone… = If we postponed… / If we were to postpone…"
        },
        {
          "id": "i04",
          "type": "mc",
          "area": "inversion",
          "prompt": "Not only ___ the gaps, but we also proposed a remediation plan.",
          "options": [
            "did we identify",
            "we identified",
            "we did identify",
            "identified we"
          ],
          "answer": 0,
          "explain": "Nach Not only am Satzanfang steht Inversion: Hilfsverb + Subjekt + Hauptverb."
        },
        {
          "id": "i05",
          "type": "mc",
          "area": "inversion",
          "prompt": "Under no circumstances ___ the report with third parties.",
          "options": [
            "should we share",
            "we should share",
            "we share should",
            "share we"
          ],
          "answer": 0,
          "explain": "Nach Under no circumstances steht das Hilfsverb vor dem Subjekt: should we share."
        },
        {
          "id": "i06",
          "type": "mc",
          "area": "inversion",
          "prompt": "Welche zwei Sätze bedeuten dasselbe?",
          "options": [
            "If we had received the logs, we would have finished earlier. / Had we received the logs, we would have finished earlier.",
            "If we had received the logs, we would have finished earlier. / Should we received the logs, we would have finished earlier.",
            "If we had received the logs, we would have finished earlier. / Were we received the logs, we would have finished earlier.",
            "If we received the logs, we would have finished earlier. / Had we received the logs, we would have finished earlier."
          ],
          "answer": 0,
          "explain": "Had we received… ist die Inversion von If we had received… Option 4 vermischt Second und Third Conditional."
        },
        {
          "id": "i07",
          "type": "mc",
          "area": "inversion",
          "prompt": "Only after the audit ___ the full picture.",
          "options": [
            "did we see",
            "we saw",
            "we did see",
            "have we saw"
          ],
          "answer": 0,
          "explain": "After Only after + Zeitangabe am Satzanfang: did we see (Inversion mit did)."
        },
        {
          "id": "i08",
          "type": "gap",
          "area": "inversion",
          "prompt": "___ anything change, please inform us immediately.",
          "accept": [
            "Should"
          ],
          "explain": "Should anything change… = If anything changes… Formell und knapp.",
          "placeholder": "Should"
        },
        {
          "id": "i09",
          "type": "mc",
          "area": "inversion",
          "prompt": "Wähle die formelle Variante von: If you need support, call me.",
          "options": [
            "Should you require any support, please contact me.",
            "If you will need support, you must call me.",
            "Had you need support, call me.",
            "Were you need support, call me."
          ],
          "answer": 0,
          "explain": "Should you require any support, please contact me. ist höflich und formal. require klingt dabei etwas gehobener als need."
        },
        {
          "id": "i10",
          "type": "mc",
          "area": "inversion",
          "prompt": "Welcher Satz ist grammatikalisch falsch?",
          "options": [
            "Had the client provided the evidence, we could have closed the finding.",
            "If the client had provided the evidence, we could have closed the finding.",
            "If the client would have provided the evidence, we could have closed the finding.",
            "Were the evidence available, we could close the finding."
          ],
          "answer": 2,
          "explain": "Ein häufiger Fehler: if + would have. Richtig ist if + past perfect (had provided) oder die Inversion Had the client provided…"
        }
      ]
    },
    {
      "id": "prepositions",
      "title": "Präpositionen & False Friends",
      "emoji": "↔️",
      "intro": "Viele typisch deutsche Fehler entstehen durch direkte Übersetzungen: responsable, discuss about, actually für aktuell, become für bekommen.",
      "theory": [
        {
          "h": "Wichtige Präpositionen",
          "p": "responsible for, depend on, consist of, interested in, agree with someone, agree on something, attend a meeting (ohne Präposition), discuss something (ohne about), by Friday (Frist)."
        },
        {
          "h": "False Friends",
          "p": "aktuell ist nicht actually (actually = eigentlich / in Wirklichkeit; aktuell = currently / at the moment). eventuell ist nicht eventually (eventually = schließlich; eventuell = possibly / perhaps). bekommen ist nicht become (become = werden; bekommen = get / receive). sensible = vernünftig; sensitive = empfindlich / vertraulich. attend = teilnehmen; assist = helfen."
        },
        {
          "h": "Rechtschreibung",
          "p": "responsible (nicht responsable). by Friday für Deadlines, nicht until, wenn du „spätestens bis“ meinst."
        }
      ],
      "exercises": [
        {
          "id": "r01",
          "type": "mc",
          "area": "prepositions",
          "prompt": "I am the security consultant ___ your CRA project.",
          "options": [
            "responsible for",
            "responsable for",
            "responsible of",
            "responsable of"
          ],
          "answer": 0,
          "explain": "Schreibweise: responsible (nicht responsable). Präposition: responsible for."
        },
        {
          "id": "r02",
          "type": "mc",
          "area": "prepositions",
          "prompt": "We need to discuss ___ the audit results.",
          "options": [
            "— (keine Präposition)",
            "about",
            "on",
            "over"
          ],
          "answer": 0,
          "explain": "discuss something – ohne about. Dagegen: talk about the results / a discussion about the results."
        },
        {
          "id": "r03",
          "type": "mc",
          "area": "prepositions",
          "prompt": "The timeline depends ___ the client's documentation.",
          "options": [
            "on",
            "of",
            "from",
            "at"
          ],
          "answer": 0,
          "explain": "depend on (nicht of oder from). Das deutsche „abhängen von“ verführt zu from."
        },
        {
          "id": "r04",
          "type": "mc",
          "area": "prepositions",
          "prompt": "Was ist die richtige Übersetzung von „aktuell“ in „Aktuell prüfen wir die Unterlagen“?",
          "options": [
            "actually",
            "currently / at the moment",
            "eventual",
            "actual"
          ],
          "answer": 1,
          "explain": "aktuell = currently, at the moment, presently. actually bedeutet eigentlich / in Wirklichkeit."
        },
        {
          "id": "r05",
          "type": "mc",
          "area": "prepositions",
          "prompt": "Was bedeutet „eventuell“ auf Englisch?",
          "options": [
            "eventually",
            "possibly / perhaps",
            "finally",
            "currently"
          ],
          "answer": 1,
          "explain": "eventuell = possibly, perhaps. eventually heißt schließlich, am Ende."
        },
        {
          "id": "r06",
          "type": "mc",
          "area": "prepositions",
          "prompt": "We will ___ the signed contract tomorrow.",
          "options": [
            "receive",
            "become",
            "becoming",
            "collect from"
          ],
          "answer": 0,
          "explain": "bekommen = get / receive, nicht become. become bedeutet werden."
        },
        {
          "id": "r07",
          "type": "mc",
          "area": "prepositions",
          "prompt": "This information is confidential and ___.",
          "options": [
            "sensitive",
            "sensible",
            "handy",
            "actual"
          ],
          "answer": 0,
          "explain": "sensitive = vertraulich / empfindlich. sensible = vernünftig. handy im Englischen oft „praktisch“, umgangssprachlich auch Mobiltelefon – hier unpassend."
        },
        {
          "id": "r08",
          "type": "mc",
          "area": "prepositions",
          "prompt": "I will ___ the meeting at 10:00.",
          "options": [
            "attend",
            "assist",
            "visit",
            "participate"
          ],
          "answer": 0,
          "explain": "attend a meeting = teilnehmen. assist heißt helfen (false friend). participate müsste participate in the meeting heißen."
        },
        {
          "id": "r09",
          "type": "mc",
          "area": "prepositions",
          "prompt": "Please send the draft ___ Friday.",
          "options": [
            "by",
            "until",
            "to",
            "since"
          ],
          "answer": 0,
          "explain": "by Friday = spätestens bis Freitag (Deadline). until beschreibt eine Dauer (until Friday = bis Freitag durchgehend). Für Fristen im Geschäftsverkehr: by."
        },
        {
          "id": "r10",
          "type": "mc",
          "area": "prepositions",
          "prompt": "I agree ___ you that the residual risk is acceptable.",
          "options": [
            "with",
            "on",
            "to",
            "about"
          ],
          "answer": 0,
          "explain": "agree with someone, agree on something, agree to a proposal / to do something. Hier geht es um die Person: agree with you."
        }
      ]
    }
  ],
  "cases": [
    {
      "id": "email",
      "title": "E-Mail schreiben",
      "titleEn": "Writing a professional email",
      "emoji": "✉️",
      "area": "email",
      "blurb": "Struktur, Höflichkeit und feste Wendungen – vom Betreff bis Best regards.",
      "goals": [
        "Eine klare Struktur nutzen: Anrede, Kontext, Anliegen, konkrete Termine, Schluss.",
        "Höfliche Bitten statt direkte Imperative.",
        "Typische Rechtschreib- und Formalitätsfehler vermeiden."
      ],
      "phrases": [
        {
          "en": "Dear John, / Dear Mr Smith,",
          "de": "Formelle oder halbförmliche Anrede. Danach Komma, nächster Satz groß.",
          "note": ""
        },
        {
          "en": "I hope this email finds you well.",
          "de": "Höfliche, etwas formelhafte Eröffnung. Nicht in jeder Mail nötig, besonders nicht in einer kurzen Folge-Mail.",
          "note": ""
        },
        {
          "en": "My name is Isa Topac, and I am the security consultant responsible for…",
          "de": "Kurze Vorstellung in der ersten Mail an eine neue Kontaktperson.",
          "note": ""
        },
        {
          "en": "I am writing to propose a kick-off meeting for the CRA gap analysis.",
          "de": "Ich schreibe Ihnen, um ein Kick-off-Meeting vorzuschlagen. I am writing to… ist ein klassischer Einstieg.",
          "note": ""
        },
        {
          "en": "Please find attached the draft report.",
          "de": "Anbei finden Sie den Berichtsentwurf.",
          "note": ""
        },
        {
          "en": "I would appreciate it if you could send the documents by Friday.",
          "de": "Höfliche Bitte mit klarer Frist.",
          "note": ""
        },
        {
          "en": "Would Tuesday, 24 November, at 10:00 or Thursday, 26 November, at 14:00 work for you?",
          "de": "Immer konkrete Terminvorschläge machen, nicht nur um einen Termin bitten.",
          "note": ""
        },
        {
          "en": "Please let me know which option suits you best, or feel free to suggest an alternative.",
          "de": "Bitte teilen Sie mir mit, welche Option besser passt – oder schlagen Sie eine Alternative vor.",
          "note": ""
        },
        {
          "en": "Should you have any questions, please do not hesitate to contact me.",
          "de": "Formeller, höflicher Angebotssatz am Ende.",
          "note": ""
        },
        {
          "en": "I look forward to hearing from you. / I look forward to our meeting.",
          "de": "look forward to + -ing oder Nomen.",
          "note": ""
        },
        {
          "en": "Best regards,",
          "de": "Der sicherste formelle Gruß. Darunter Name, Rolle und Unternehmen.",
          "note": ""
        }
      ],
      "model": {
        "kind": "email",
        "title": "Mustermail: Kick-off zur CRA-Gap-Analyse",
        "intro": "Eine erste Mail an eine neue Kundenkontaktperson. Achte auf Vorstellung, Zweck, konkrete Termine und einen ruhigen, formellen Ton.",
        "lines": [
          {
            "speaker": "",
            "text": "Dear John,"
          },
          {
            "speaker": "",
            "text": "My name is Isa Topac, and I am the security consultant responsible for your Cyber Resilience Act (CRA) project at TPC Security. I am looking forward to working with you and your team."
          },
          {
            "speaker": "",
            "text": "As a first step, I would like to propose a kick-off meeting for the CRA gap analysis. In this session, we would align on the scope, timeline, and the key contacts on your side. Would Tuesday, 24 November, at 10:00 or Thursday, 26 November, at 14:00 work for you?"
          },
          {
            "speaker": "",
            "text": "Please let me know which option suits you best, or feel free to suggest an alternative."
          },
          {
            "speaker": "",
            "text": "Best regards,"
          },
          {
            "speaker": "",
            "text": "Isa Topac"
          },
          {
            "speaker": "",
            "text": "Security Consultant, TPC Security"
          }
        ]
      },
      "exercises": [
        {
          "id": "e01",
          "type": "order",
          "area": "email",
          "prompt": "Bringe die Teile dieser Kundenmail in die richtige Reihenfolge.",
          "items": [
            "Dear John,",
            "My name is Isa Topac, and I am the security consultant responsible for your CRA project at TPC Security.",
            "I would like to propose a kick-off meeting for the CRA gap analysis.",
            "Would Tuesday, 24 November, at 10:00 or Thursday, 26 November, at 14:00 work for you?",
            "Please let me know which option suits you best.",
            "Best regards,\nIsa Topac"
          ],
          "answer": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "explain": "Bewährte Reihenfolge: Anrede – kurze Vorstellung – Anliegen – konkrete Termine – Bitte um Rückmeldung – formeller Schluss."
        },
        {
          "id": "e02",
          "type": "mc",
          "area": "email",
          "prompt": "Welche Formulierung ist in einer ersten Kundenmail am professionellsten?",
          "options": [
            "Can we set up a kick-off meeting for our CRA gap analysis?",
            "As a first step, I would like to propose a kick-off meeting for the CRA gap analysis. Would Tuesday at 10:00 or Thursday at 14:00 work for you?",
            "Set up a meeting. I am available sometime next week.",
            "I want a kick-off next week. Tell me when."
          ],
          "answer": 1,
          "explain": "Die professionelle Version nennt den Zweck und macht konkrete Terminvorschläge. Die kurze Frage ist höflich, aber zu knapp für eine erste Mail."
        },
        {
          "id": "e03",
          "type": "mc",
          "area": "email",
          "prompt": "Welcher Schluss ist in einer formellen Kundenmail am angemessensten?",
          "options": [
            "Cheers,",
            "Bye,",
            "Best regards,",
            "Regards only, without a name"
          ],
          "answer": 2,
          "explain": "Best regards, plus Name und Rolle ist der sicherste Schluss. Nur Regards ist möglich, wirkt aber knapper; Cheers ist informell."
        },
        {
          "id": "e04",
          "type": "gap",
          "area": "email",
          "prompt": "I would ___ it if you could send the documents by Friday.",
          "accept": [
            "appreciate"
          ],
          "explain": "I would appreciate it if you could… ist eine der nützlichsten Bitten im Business-Englisch.",
          "placeholder": "appreciate"
        },
        {
          "id": "e05",
          "type": "gap",
          "area": "email",
          "prompt": "I look forward to ___ from you.",
          "accept": [
            "hearing"
          ],
          "explain": "look forward to hearing (Gerund), nicht to hear.",
          "placeholder": "hearing"
        },
        {
          "id": "e06",
          "type": "mc",
          "area": "email",
          "prompt": "Welcher Satz enthält einen typischen Fehler?",
          "options": [
            "I am the security consultant responsible for your CRA project.",
            "I am the security consultant responsable for your CRA project.",
            "I am looking forward to working with you and your team.",
            "Please let me know which option suits you best."
          ],
          "answer": 1,
          "explain": "responsable ist Französisch bzw. eine typische Falschschreibung. Richtig: responsible."
        }
      ]
    },
    {
      "id": "intro",
      "title": "Sich vorstellen",
      "titleEn": "Introducing yourself",
      "emoji": "🤝",
      "area": "intro",
      "blurb": "Ein klarer, ruhiger Einstieg im Kick-off: Name, Rolle, Verantwortung, Erfahrung, Blick nach vorn.",
      "goals": [
        "Sich in 20–30 Sekunden vollständig, aber nicht langatmig vorstellen.",
        "responsible for und I have been working… sicher verwenden.",
        "Einen freundlichen, professionellen Ton treffen."
      ],
      "phrases": [
        {
          "en": "Good morning, everyone.",
          "de": "Neutrale, sichere Begrüßung im Meeting.",
          "note": ""
        },
        {
          "en": "My name is Isa Topac, and I am a security consultant at TPC Security.",
          "de": "Name + Rolle + Unternehmen in einem Satz.",
          "note": ""
        },
        {
          "en": "I am responsible for your Cyber Resilience Act project, in particular the gap analysis.",
          "de": "Zuständigkeit klar benennen. responsible for + Thema.",
          "note": ""
        },
        {
          "en": "I have been working in IT security for several years, with a focus on product compliance.",
          "de": "Erfahrung mit Present Perfect Continuous + Fokus.",
          "note": ""
        },
        {
          "en": "It's a pleasure to meet you.",
          "de": "Es freut mich, Sie kennenzulernen.",
          "note": ""
        },
        {
          "en": "I look forward to working with you.",
          "de": "Ich freue mich auf die Zusammenarbeit.",
          "note": ""
        },
        {
          "en": "Today I would like to walk you through the agenda.",
          "de": "Heute möchte ich Sie durch die Tagesordnung führen.",
          "note": ""
        },
        {
          "en": "Please feel free to ask questions at any time.",
          "de": "Fragen sind jederzeit willkommen – freundlicher als Any questions?",
          "note": ""
        }
      ],
      "model": {
        "kind": "dialogue",
        "title": "Musterdialog: Vorstellung im Kick-off",
        "intro": "Anna Meier (CISO der Kundenseite) bittet Isa, sich dem Team vorzustellen.",
        "lines": [
          {
            "speaker": "Anna",
            "text": "Good morning, Isa. Thank you for coming in today. Could you start by introducing yourself to the team?"
          },
          {
            "speaker": "Isa",
            "text": "Good morning, everyone. My name is Isa Topac, and I am a security consultant at TPC Security. I am responsible for your Cyber Resilience Act project, in particular the gap analysis and the risk assessment."
          },
          {
            "speaker": "Isa",
            "text": "I have been working in IT security for several years, with a focus on product compliance and cybersecurity requirements. It's a pleasure to meet you, and I look forward to working with you."
          },
          {
            "speaker": "Anna",
            "text": "Thank you, Isa. We're glad to have you on board."
          }
        ]
      },
      "exercises": [
        {
          "id": "n01",
          "type": "order",
          "area": "intro",
          "prompt": "Ordne die Vorstellung in eine natürliche Reihenfolge.",
          "items": [
            "Good morning, everyone.",
            "My name is Isa Topac, and I am a security consultant at TPC Security.",
            "I am responsible for your CRA project, in particular the gap analysis.",
            "I have been working in IT security for several years, with a focus on product compliance.",
            "It's a pleasure to meet you, and I look forward to working with you."
          ],
          "answer": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Bewährte Reihenfolge: Begrüßung – Name und Rolle – Zuständigkeit – Erfahrung – Blick auf die Zusammenarbeit."
        },
        {
          "id": "n02",
          "type": "mc",
          "area": "intro",
          "prompt": "Welche Vorstellung klingt am professionellsten?",
          "options": [
            "Hi, I'm Isa, I do security stuff and CRA.",
            "My name is Isa Topac, and I am a security consultant at TPC Security. I am responsible for your CRA project.",
            "I am Isa. I will now tell you everything about me and my career.",
            "My Name is Isa and I am the Security Consultant responsable for CRA."
          ],
          "answer": 1,
          "explain": "Klar, vollständig und ohne Rechtschreibfehler. Option 4 enthält Name großgeschrieben und responsable."
        },
        {
          "id": "n03",
          "type": "gap",
          "area": "intro",
          "prompt": "I am ___ for your Cyber Resilience Act project.",
          "accept": [
            "responsible"
          ],
          "explain": "responsible for – Schreibweise und Präposition fest merken.",
          "placeholder": "responsible"
        },
        {
          "id": "n04",
          "type": "mc",
          "area": "intro",
          "prompt": "Wähle die korrekte Form:",
          "options": [
            "I work in IT security since ten years.",
            "I have been working in IT security for several years.",
            "I am working in IT security since several years.",
            "I worked in IT security for several years now."
          ],
          "answer": 1,
          "explain": "for + Zeitraum, since + Zeitpunkt. Bei andauernder Tätigkeit: have been working."
        },
        {
          "id": "n05",
          "type": "mc",
          "area": "intro",
          "prompt": "Welche Wendung passt am Ende einer Vorstellung?",
          "options": [
            "So, that's it from my side, I guess.",
            "I look forward to working with you.",
            "We will see if this works.",
            "I wait for a good cooperation."
          ],
          "answer": 1,
          "explain": "I look forward to working with you. ist freundlich, idiomatisch und professionell."
        }
      ]
    },
    {
      "id": "pitch",
      "title": "Projekt vorstellen",
      "titleEn": "Presenting a project",
      "emoji": "📑",
      "area": "pitch",
      "blurb": "Zweck, Umfang, Vorgehen, Meilensteine und Lieferergebnis in einer klaren Mini-Präsentation.",
      "goals": [
        "Ein Projekt in fünf Blöcken vorstellen: Zweck, Scope, Ansatz, Zeitplan, Deliverable.",
        "Erwartungen steuern: what is in scope / out of scope.",
        "Abhängigkeiten höflich, aber klar benennen."
      ],
      "phrases": [
        {
          "en": "The purpose of this project is to identify gaps against the CRA requirements.",
          "de": "Zweck des Projekts klar in einem Satz.",
          "note": ""
        },
        {
          "en": "I would like to walk you through the scope, the approach, and the timeline.",
          "de": "Ich möchte Sie durch Umfang, Vorgehen und Zeitplan führen.",
          "note": ""
        },
        {
          "en": "The scope includes a document review, stakeholder interviews, and a gap analysis report.",
          "de": "Der Umfang umfasst…",
          "note": ""
        },
        {
          "en": "A full technical penetration test is out of scope for this engagement.",
          "de": "Außerhalb des Leistungsumfangs – Erwartungen früh klären.",
          "note": ""
        },
        {
          "en": "Our approach is divided into three phases: kick-off, assessment, and reporting.",
          "de": "Unser Vorgehen gliedert sich in drei Phasen…",
          "note": ""
        },
        {
          "en": "The first milestone is the kick-off workshop with your product and security teams.",
          "de": "Der erste Meilenstein ist…",
          "note": ""
        },
        {
          "en": "The main deliverable will be a written gap analysis report with prioritised recommendations.",
          "de": "Das zentrale Lieferergebnis wird… sein. BE: prioritised.",
          "note": ""
        },
        {
          "en": "This timeline depends on timely access to documentation and key contacts.",
          "de": "Höflich, aber klar: ohne Unterlagen verschiebt sich der Plan.",
          "note": ""
        },
        {
          "en": "I am happy to go into more detail on any of these points.",
          "de": "Ich gehe auf jeden dieser Punkte gern näher ein.",
          "note": ""
        }
      ],
      "model": {
        "kind": "monologue",
        "title": "Mustervortrag: CRA-Gap-Analyse vorstellen",
        "intro": "Kurze Vorstellung des Projekts im Kick-off, etwa eine Minute.",
        "lines": [
          {
            "speaker": "Isa",
            "text": "Thank you. I would like to walk you through the purpose, the scope, and the proposed timeline of this engagement."
          },
          {
            "speaker": "Isa",
            "text": "The purpose of this project is to identify gaps between your current product security practices and the essential cybersecurity requirements of the Cyber Resilience Act."
          },
          {
            "speaker": "Isa",
            "text": "The scope includes a review of existing documentation, interviews with key stakeholders, and a written gap analysis report. A full penetration test is out of scope for this engagement."
          },
          {
            "speaker": "Isa",
            "text": "Our approach is divided into three phases: kick-off and information gathering, detailed assessment, and reporting. The first milestone is this workshop. The main deliverable will be a report with prioritised findings and recommendations."
          },
          {
            "speaker": "Isa",
            "text": "We propose to share the draft report within four weeks, provided that we receive the documentation this week. I am happy to go into more detail on any of these points."
          }
        ]
      },
      "exercises": [
        {
          "id": "k01",
          "type": "order",
          "area": "pitch",
          "prompt": "Ordne die Blöcke einer Projektvorstellung sinnvoll.",
          "items": [
            "The purpose of this project is to identify gaps against the CRA requirements.",
            "The scope includes a document review, interviews, and a written report. A penetration test is out of scope.",
            "Our approach is divided into three phases: kick-off, assessment, and reporting.",
            "The main deliverable will be a gap analysis report with prioritised recommendations.",
            "This timeline depends on timely access to documentation."
          ],
          "answer": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Zuerst der Zweck, dann der Umfang (inkl. out of scope), dann das Vorgehen, das Lieferergebnis und erst danach Abhängigkeiten oder der Zeitplan."
        },
        {
          "id": "k02",
          "type": "mc",
          "area": "pitch",
          "prompt": "Welche Formulierung steuert Erwartungen am klarsten?",
          "options": [
            "We will probably also do a penetration test if we have time.",
            "A full technical penetration test is out of scope for this engagement.",
            "Maybe we do more later, we will see.",
            "The scope is kind of flexible."
          ],
          "answer": 1,
          "explain": "Out of scope sollte früh und eindeutig gesagt werden, sonst entstehen falsche Erwartungen."
        },
        {
          "id": "k03",
          "type": "gap",
          "area": "pitch",
          "prompt": "The main ___ will be a written gap analysis report.",
          "accept": [
            "deliverable"
          ],
          "explain": "deliverable = Liefergegenstand / Arbeitsergebnis. Ein Schlüsselwort im Projektmanagement.",
          "placeholder": "deliverable"
        },
        {
          "id": "k04",
          "type": "mc",
          "area": "pitch",
          "prompt": "Wähle die korrekteste und professionellste Variante:",
          "options": [
            "We do three phases and then a report, okay?",
            "Our approach is divided into three phases: kick-off, assessment, and reporting.",
            "Our approach is divide in three phases.",
            "We will start and then we see the approach later."
          ],
          "answer": 1,
          "explain": "is divided into (nicht divide in) plus eine klare Dreiteilung wirkt strukturiert und souverän."
        },
        {
          "id": "k05",
          "type": "mc",
          "area": "pitch",
          "prompt": "Wie nennst du höflich eine Abhängigkeit?",
          "options": [
            "If you don't send the files, this is your problem.",
            "This timeline depends on timely access to documentation and key contacts.",
            "The timeline depends from your documents.",
            "You must give us everything immediately."
          ],
          "answer": 1,
          "explain": "depends on (nicht from) und eine sachliche Formulierung ohne Vorwurf."
        }
      ]
    },
    {
      "id": "presentation",
      "title": "Beratung & Präsentation",
      "titleEn": "Consulting and presenting findings",
      "emoji": "🎤",
      "area": "presentation",
      "blurb": "Feststellungen präsentieren, Risiken erklären, Empfehlungen geben und das nächste Vorgehen vorschlagen.",
      "goals": [
        "Findings klar und ohne unnötige Schärfe vortragen.",
        "Empfehlung und Restrisiko in einem Atemzug denken.",
        "Den Übergang zu Fragen und nächsten Schritten souverän gestalten."
      ],
      "phrases": [
        {
          "en": "As you can see on this slide, we identified seven findings.",
          "de": "Wie Sie auf dieser Folie sehen…",
          "note": ""
        },
        {
          "en": "Let me highlight three key findings.",
          "de": "Lassen Sie mich drei zentrale Feststellungen hervorheben.",
          "note": ""
        },
        {
          "en": "This poses a risk because an unpatched vulnerability could be exploited during the product life cycle.",
          "de": "Das stellt ein Risiko dar, weil…",
          "note": ""
        },
        {
          "en": "We recommend that you formalise the vulnerability handling process.",
          "de": "Wir empfehlen, dass Sie… recommend that + Subjekt + Verb.",
          "note": ""
        },
        {
          "en": "If this measure is implemented, the residual risk would be significantly lower.",
          "de": "Wenn diese Maßnahme umgesetzt wird, wäre das Restrisiko deutlich geringer.",
          "note": ""
        },
        {
          "en": "I am happy to take questions at the end, but please feel free to interrupt me.",
          "de": "Fragenführung klären – sehr typisch in der Beratung.",
          "note": ""
        },
        {
          "en": "To conclude, / In summary,",
          "de": "Zum Schluss / Zusammenfassend.",
          "note": ""
        },
        {
          "en": "The next step would be a short workshop to prioritise the remediation plan.",
          "de": "Der nächste Schritt wäre… – höflicher Vorschlag statt Anordnung.",
          "note": ""
        },
        {
          "en": "Let's take this finding as an example.",
          "de": "Nehmen wir diese Feststellung als Beispiel.",
          "note": ""
        }
      ],
      "model": {
        "kind": "monologue",
        "title": "Mustervortrag: Ergebnisse der Gap-Analyse",
        "intro": "Isa stellt dem Lenkungsausschuss die zentralen Ergebnisse vor.",
        "lines": [
          {
            "speaker": "Isa",
            "text": "Thank you for your time today. I am happy to take questions at the end, but please feel free to interrupt me if anything is unclear."
          },
          {
            "speaker": "Isa",
            "text": "As you can see on this slide, we identified seven findings, two of which we have classified as high risk. Let me highlight the three most important points."
          },
          {
            "speaker": "Isa",
            "text": "First, there is currently no formal vulnerability handling process. This poses a risk because newly discovered vulnerabilities may not be assessed and remediated in time."
          },
          {
            "speaker": "Isa",
            "text": "Second, the Software Bill of Materials is incomplete, which makes it difficult to react to new disclosures in the supply chain. Third, security support commitments over the product life cycle are not yet clearly documented."
          },
          {
            "speaker": "Isa",
            "text": "We recommend that you formalise the vulnerability handling process and complete the SBOM as a priority. If these measures are implemented, the residual risk would be significantly lower."
          },
          {
            "speaker": "Isa",
            "text": "In summary, the product has a solid baseline, but a few structured processes are still missing. The next step would be a short workshop to prioritise the remediation plan. I would now be happy to take your questions."
          }
        ]
      },
      "exercises": [
        {
          "id": "v01",
          "type": "mc",
          "area": "presentation",
          "prompt": "Welche Formulierung ist in einer Ergebnispräsentation am professionellsten?",
          "options": [
            "You did this completely wrong.",
            "This is a disaster, to be honest.",
            "We identified a gap in the vulnerability handling process. This poses a risk because new vulnerabilities may not be remediated in time.",
            "There are many problems, but let's not go into details."
          ],
          "answer": 2,
          "explain": "In der Beratung beschreibt man Feststellung + Risiko sachlich, ohne Schuldzuweisung und ohne zu verharmlosen."
        },
        {
          "id": "v02",
          "type": "order",
          "area": "presentation",
          "prompt": "Ordne den Ablauf einer kurzen Ergebnispräsentation.",
          "items": [
            "I am happy to take questions at the end, but please feel free to interrupt me.",
            "As you can see on this slide, we identified seven findings. Let me highlight three key points.",
            "This poses a risk because newly discovered vulnerabilities may not be remediated in time.",
            "We recommend that you formalise the vulnerability handling process.",
            "In summary, a few structured processes are still missing. The next step would be a short workshop."
          ],
          "answer": [
            0,
            1,
            2,
            3,
            4
          ],
          "explain": "Zuerst die Spielregel zu Fragen, dann Überblick, dann Risiko, dann Empfehlung, dann Zusammenfassung und nächster Schritt."
        },
        {
          "id": "v03",
          "type": "gap",
          "area": "presentation",
          "prompt": "We recommend that you ___ the vulnerability handling process.",
          "accept": [
            "formalise",
            "formalize"
          ],
          "explain": "recommend that you + infinitive ohne to: We recommend that you formalise… BE-Schreibweise formalise, AE formalize – beide werden akzeptiert.",
          "placeholder": "formalise"
        },
        {
          "id": "v04",
          "type": "mc",
          "area": "presentation",
          "prompt": "Welche Beschreibung des Restrisikos ist korrekt und klar?",
          "options": [
            "If this measure is implemented, the residual risk would be significantly lower.",
            "If this measure will be implemented, the residual risk will be zero.",
            "If this measure is implemented, the residual risk would be zero for sure.",
            "If this measure would be implemented, the residual risk is lower."
          ],
          "answer": 0,
          "explain": "If this measure is implemented (kein will im if-Satz). Residual risk vollständig auf null zu setzen ist fachlich und sprachlich unvorsichtig."
        },
        {
          "id": "v05",
          "type": "mc",
          "area": "presentation",
          "prompt": "Wähle die beste Überleitung zum Abschluss:",
          "options": [
            "That's all from me, I guess you understood.",
            "In summary, the product has a solid baseline, but a few structured processes are still missing. The next step would be a short workshop to prioritise the remediation plan.",
            "So, yeah, we should maybe do something sometime.",
            "I am finished. Any complain?"
          ],
          "answer": 1,
          "explain": "In summary + ausgewogene Bewertung + konkreter nächster Schritt. complain wäre außerdem falsch (complaint / questions)."
        }
      ]
    }
  ],
  "exam": [
    {
      "id": "x01",
      "type": "mc",
      "area": "conditionals",
      "prompt": "If the client ___ the offer, we will start next month.",
      "options": [
        "accepts",
        "will accept",
        "accepted",
        "would accept"
      ],
      "answer": 0,
      "explain": "First Conditional: if + present simple, will + infinitive."
    },
    {
      "id": "x02",
      "type": "mc",
      "area": "inversion",
      "prompt": "___ we been informed earlier, we could have mitigated the risk.",
      "options": [
        "Had",
        "If",
        "Have",
        "Did"
      ],
      "answer": 0,
      "explain": "Inversion: Had we been informed… = If we had been informed…"
    },
    {
      "id": "x03",
      "type": "mc",
      "area": "formality",
      "prompt": "Welche Formulierung ist in einer Kundenmail am passendsten?",
      "options": [
        "Send me the documents by Friday.",
        "I would appreciate it if you could send the documents by Friday.",
        "I want the documents Friday.",
        "You have to send me the documents."
      ],
      "answer": 1,
      "explain": "I would appreciate it if you could… ist höflich und klar."
    },
    {
      "id": "x04",
      "type": "mc",
      "area": "tenses",
      "prompt": "I ___ in IT security for ten years now.",
      "options": [
        "have been working",
        "work",
        "worked",
        "was working"
      ],
      "answer": 0,
      "explain": "Dauer bis in die Gegenwart: Present Perfect Continuous."
    },
    {
      "id": "x05",
      "type": "mc",
      "area": "prepositions",
      "prompt": "I am the security consultant ___ your CRA project.",
      "options": [
        "responsible for",
        "responsable for",
        "responsible of",
        "responsable of"
      ],
      "answer": 0,
      "explain": "responsible for – Schreibweise und Präposition."
    },
    {
      "id": "x06",
      "type": "mc",
      "area": "email",
      "prompt": "I look forward to ___ from you.",
      "options": [
        "hearing",
        "hear",
        "heard",
        "hears"
      ],
      "answer": 0,
      "explain": "look forward to + Gerund."
    },
    {
      "id": "x07",
      "type": "mc",
      "area": "meetings",
      "prompt": "Was bedeutet „to be on the same page“?",
      "options": [
        "im selben Dokument arbeiten",
        "denselben Wissensstand haben / an einem Strang ziehen",
        "dieselbe Seite im Bericht zitieren",
        "die Agenda noch nicht gelesen haben"
      ],
      "answer": 1,
      "explain": "Feste Wendung: denselben Stand haben, einig sein bzw. dasselbe Verständnis teilen."
    },
    {
      "id": "x08",
      "type": "mc",
      "area": "security",
      "prompt": "Was ist eine „gap analysis“ im CRA-Kontext?",
      "options": [
        "ein Penetrationstest des fertigen Produkts",
        "ein Abgleich zwischen Ist-Zustand und Anforderungen, um Abweichungen festzustellen",
        "eine Marketinganalyse der Zielgruppe",
        "die endgültige CE-Kennzeichnung"
      ],
      "answer": 1,
      "explain": "Eine Gap-Analyse vergleicht den aktuellen Stand mit den Soll-Anforderungen."
    },
    {
      "id": "x09",
      "type": "mc",
      "area": "conditionals",
      "prompt": "We will share the report as soon as it ___ ready.",
      "options": [
        "is",
        "will be",
        "would be",
        "has"
      ],
      "answer": 0,
      "explain": "Nach as soon as steht Present Simple, nicht will."
    },
    {
      "id": "x10",
      "type": "mc",
      "area": "tenses",
      "prompt": "The client ___ the documents yet.",
      "options": [
        "hasn't sent",
        "didn't send",
        "hasn't been sending",
        "doesn't sent"
      ],
      "answer": 0,
      "explain": "yet → Present Perfect: hasn't sent."
    },
    {
      "id": "x11",
      "type": "mc",
      "area": "formality",
      "prompt": "Welcher Satz ist falsch?",
      "options": [
        "Please let me know which option suits you best.",
        "I am looking forward to our meeting.",
        "I am looking forward to hear from you.",
        "Could you please confirm your availability?"
      ],
      "answer": 2,
      "explain": "Richtig ist: looking forward to hearing."
    },
    {
      "id": "x12",
      "type": "mc",
      "area": "inversion",
      "prompt": "___ you have any questions, please do not hesitate to contact me.",
      "options": [
        "Should",
        "Would",
        "Had",
        "If would"
      ],
      "answer": 0,
      "explain": "Should you have any questions… ist die formelle Standardwendung."
    },
    {
      "id": "x13",
      "type": "mc",
      "area": "prepositions",
      "prompt": "We need to discuss ___ the audit results.",
      "options": [
        "— (keine Präposition)",
        "about",
        "on",
        "from"
      ],
      "answer": 0,
      "explain": "discuss something, ohne about."
    },
    {
      "id": "x14",
      "type": "mc",
      "area": "project",
      "prompt": "The main deliverable is a written gap analysis report. Was ist ein deliverable?",
      "options": [
        "ein Meeting ohne Agenda",
        "ein konkretes Arbeitsergebnis bzw. Liefergegenstand",
        "eine interne Pause im Zeitplan",
        "eine Abhängigkeit ohne Eigentümer"
      ],
      "answer": 1,
      "explain": "deliverable = das vereinbarte Lieferergebnis."
    },
    {
      "id": "x15",
      "type": "mc",
      "area": "pitch",
      "prompt": "Welche Formulierung ist am klarsten, um Erwartungen zu steuern?",
      "options": [
        "We might also do a penetration test, or not.",
        "A full technical penetration test is out of scope for this engagement.",
        "The scope is flexible and we can see later.",
        "Everything is in scope if needed."
      ],
      "answer": 1,
      "explain": "Out of scope sollte eindeutig benannt werden."
    },
    {
      "id": "x16",
      "type": "mc",
      "area": "presentation",
      "prompt": "Welche Beschreibung eines Findings ist am professionellsten?",
      "options": [
        "You clearly failed to handle vulnerabilities.",
        "We identified a gap in the vulnerability handling process. This poses a risk because new vulnerabilities may not be remediated in time.",
        "There are issues, but they are probably fine.",
        "This is all wrong, to be honest."
      ],
      "answer": 1,
      "explain": "Sachlich: Feststellung + Risiko, ohne Schuldzuweisung."
    },
    {
      "id": "x17",
      "type": "mc",
      "area": "intro",
      "prompt": "Wähle die korrekte Vorstellung:",
      "options": [
        "I work in IT security since ten years.",
        "I have been working in IT security for several years, with a focus on product compliance.",
        "I am working in IT security since several years.",
        "My Name is Isa and I am responsable for CRA."
      ],
      "answer": 1,
      "explain": "have been working + for + Zeitraum. Achte außerdem auf name und responsible."
    },
    {
      "id": "x18",
      "type": "gap",
      "area": "formality",
      "prompt": "I would ___ it if you could send the documents by Friday.",
      "accept": [
        "appreciate"
      ],
      "explain": "I would appreciate it if you could…",
      "placeholder": "appreciate"
    },
    {
      "id": "x19",
      "type": "mc",
      "area": "prepositions",
      "prompt": "Please send the draft ___ Friday.",
      "options": [
        "by",
        "until",
        "to",
        "since"
      ],
      "answer": 0,
      "explain": "by Friday = spätestens bis Freitag (Deadline)."
    },
    {
      "id": "x20",
      "type": "mc",
      "area": "conditionals",
      "prompt": "If we had been informed earlier, we ___ the risk.",
      "options": [
        "could have mitigated",
        "can mitigate",
        "will mitigate",
        "could mitigate"
      ],
      "answer": 0,
      "explain": "Third Conditional: could have mitigated."
    },
    {
      "id": "x21",
      "type": "mc",
      "area": "meetings",
      "prompt": "Each ___ needs an owner and a deadline.",
      "options": [
        "action item",
        "agenda",
        "dial-in",
        "takeaway only"
      ],
      "answer": 0,
      "explain": "action item = offener Punkt / Aufgabe mit Verantwortung und Frist."
    },
    {
      "id": "x22",
      "type": "mc",
      "area": "security",
      "prompt": "What does residual risk mean?",
      "options": [
        "das Risiko, bevor irgendwelche Maßnahmen ergriffen wurden",
        "das Risiko, das nach den Gegenmaßnahmen noch verbleibt",
        "ein Risiko, das ignoriert werden darf, ohne es zu benennen",
        "die Wahrscheinlichkeit eines Terminsausfalls"
      ],
      "answer": 1,
      "explain": "residual risk = Restrisiko nach Mitigationsmaßnahmen."
    },
    {
      "id": "x23",
      "type": "mc",
      "area": "inversion",
      "prompt": "Welcher Satz ist falsch?",
      "options": [
        "Had the client provided the evidence, we could have closed the finding.",
        "If the client had provided the evidence, we could have closed the finding.",
        "If the client would have provided the evidence, we could have closed the finding.",
        "Should you require any support, please contact me."
      ],
      "answer": 2,
      "explain": "if + would have im if-Satz ist falsch. Richtig: if + had provided."
    },
    {
      "id": "x24",
      "type": "mc",
      "area": "prepositions",
      "prompt": "Aktuell prüfen wir die Unterlagen. Welche Übersetzung ist richtig?",
      "options": [
        "Actually, we are reviewing the documents.",
        "Currently, we are reviewing the documents.",
        "Eventually, we are reviewing the documents.",
        "Sensibly, we are reviewing the documents."
      ],
      "answer": 1,
      "explain": "aktuell = currently. actually = eigentlich / in Wirklichkeit; eventually = schließlich."
    }
  ]
};
