/* Collocations for the 60s challenge and two extra grammar chapters. */
const COLLOCATIONS = [
  ["co01", "___ a decision", "make", ["do", "put", "give"]],
  ["co02", "___ a meeting", "hold", ["make", "do", "lead out"]],
  ["co03", "___ a deadline", "meet", ["hit on", "make", "reach out"]],
  ["co04", "___ a concern", "raise", ["rise", "lift", "make"]],
  ["co05", "___ an audit", "carry out", ["make", "lead", "take up"]],
  ["co06", "___ a conclusion", "draw", ["make out", "pull", "take up"]],
  ["co07", "___ action", "take", ["make", "do", "set"]],
  ["co08", "___ an agreement", "reach", ["make up", "arrive", "get on"]],
  ["co09", "___ a product on the market", "place", ["put out", "set up", "lay"]],
  ["co10", "___ a report", "submit", ["hand on", "commit", "admit"]],
  ["co11", "___ an interview", "conduct", ["lead", "make", "drive"]],
  ["co12", "___ an issue", "address", ["adress", "speak", "tell"]],
  ["co13", "___ a risk", "pose", ["make", "do", "put up"]],
  ["co14", "___ access", "grant", ["borrow", "lend out", "give up"]],
  ["co15", "___ a workshop", "run", ["make", "hold up", "lead off"]],
  ["co16", "___ a patch", "apply", ["lay", "put on", "make"]],
  ["co17", "___ evidence", "provide", ["deliver up", "make", "do"]],
  ["co18", "___ responsibility", "take", ["make", "carry out", "hold up"]],
  ["co19", "___ a presentation", "give", ["hold", "make up", "do up"]],
  ["co20", "___ a gap", "close", ["shut down", "end", "finish"]],
  ["co21", "___ an owner", "assign", ["sign", "design", "consign"]],
  ["co22", "___ the budget", "exceed", ["excess", "succeed", "pass over"]],
  ["co23", "___ a quote", "request", ["ask", "demand for", "question"]],
  ["co24", "___ a contract", "sign", ["subscribe", "underwrite on", "make"]],
  ["co25", "___ track of", "keep", ["hold", "make", "stay"]],
  ["co26", "___ a call", "join", ["enter in", "go on to", "take part"]],
  ["co27", "___ priority", "give", ["make", "do", "set up"]],
  ["co28", "___ an incident", "report", ["tell", "say", "speak"]],
  ["co29", "___ the scope", "define", ["defy", "describe out", "fix up"]],
  ["co30", "___ feedback", "gather", ["collect up", "pick", "find out"]],
  ["co31", "___ an impact assessment", "carry out", ["make up", "do up", "lead"]],
  ["co32", "___ a vulnerability", "disclose", ["unclose", "disclaim", "discover out"]]
].map((r) => ({ id: r[0], gap: r[1], answer: r[2], wrong: r[3] }));

const GRAMMAR_EXTRA = [
  {
    id: "reported", title: "Reported Speech im Projektalltag", emoji: "🗣️",
    intro: "Was der Kunde gesagt hat, sauber wiedergeben – im Protokoll, in der Mail, im Status-Call.",
    theory: [
      { h: "Backshift", p: "Nach said / told rückt die Zeit meist eine Stufe zurück: „We will deliver“ → She said they would deliver." },
      { h: "say vs. tell", p: "say something (to someone), tell someone something: He told us that … / He said that …" },
      { h: "Fragen", p: "Keine Frage-Wortstellung: She asked when the report would be ready. (nicht: when would the report be)" },
      { h: "Bitten", p: "ask / tell + Objekt + to-Infinitiv: He asked us to send the logs." }
    ],
    exercises: [
      ["rs01", "The client said that they ___ the documents by Friday.", ["would send", "will sent", "sending", "sends to"], 0, "Backshift: will → would."],
      ["rs02", "She ___ us that the audit had been postponed.", ["told", "said", "spoke", "talked"], 0, "tell + Person: She told us …"],
      ["rs03", "He ___ that the budget was approved.", ["said", "told", "told to", "said us"], 0, "say ohne Personenobjekt: He said that …"],
      ["rs04", "The CISO asked when the report ___ ready.", ["would be", "would the report be", "will it be", "is it"], 0, "Indirekte Frage: normale Wortstellung + Backshift."],
      ["rs05", "Mark asked us ___ the timeline in writing.", ["to confirm", "confirming", "that we confirm to", "confirm"], 0, "ask + Objekt + to-Infinitiv."],
      ["rs06", "They mentioned that they ___ the vulnerability the week before.", ["had found", "have found", "find", "were find"], 0, "Past simple → past perfect."],
      ["rs07", "She wanted to know ___ we could start in January.", ["whether", "that", "what", "if that"], 0, "Ja/Nein-Fragen indirekt: whether / if."],
      ["rs08", "The supplier told us ___ worry about the delay.", ["not to", "don't", "to not to", "no to"], 0, "Negative Bitte: tell someone not to do something."],
      ["rs09", "He explained that the tests ___ still running.", ["were", "are being", "have", "be"], 0, "Backshift: are → were."],
      ["rs10", "Laura suggested ___ the scope to three products.", ["reducing", "to reduce", "that reduce", "reduce"], 0, "suggest + -ing (oder: suggest that we reduce)."],
      ["rs11", "The auditor recommended that the manufacturer ___ a vulnerability disclosure policy.", ["publish", "publishes to", "to publish", "publishing to"], 0, "recommend that + Grundform (subjunctive) – C1-Stil."],
      ["rs12", "In the minutes: \"The client confirmed that the go-live ___ moved to March.\"", ["had been", "has be", "is being to", "was been"], 0, "Passiv in der Vorvergangenheit: had been moved."]
    ]
  },
  {
    id: "modals", title: "Modalverben & Register", emoji: "🎚️",
    intro: "Wie stark klingt deine Aussage? Modalverben steuern Verbindlichkeit, Höflichkeit und Vorsicht.",
    theory: [
      { h: "Pflicht", p: "must / have to / be required to – im CRA-Kontext: Manufacturers are required to …" },
      { h: "Empfehlung", p: "should / would recommend / it would be advisable to – weicher als must." },
      { h: "Vorsicht", p: "may / might / could / is likely to – für Einschätzungen ohne volle Gewissheit." },
      { h: "Vergangenheit", p: "should have done (hätte sollen), could have done (hätte können), must have done (muss … haben)." }
    ],
    exercises: [
      ["mo01", "Under the CRA, manufacturers ___ report actively exploited vulnerabilities.", ["are required to", "might", "could", "would like to"], 0, "Gesetzliche Pflicht: are required to / must."],
      ["mo02", "We ___ enabling MFA as a quick win.", ["would recommend", "must recommend to", "should to recommend", "are recommend"], 0, "Weiche Empfehlung: would recommend + -ing."],
      ["mo03", "The product ___ fall under Annex III, but we need to check its core functionality.", ["might", "must", "has to", "shall"], 0, "Vorsichtige Einschätzung: might / may / could."],
      ["mo04", "We ___ informed the client earlier – that was a mistake.", ["should have", "should", "must", "had to have"], 0, "Kritik an Vergangenem: should have + past participle."],
      ["mo05", "The logs ___ been deleted – they are not on the server.", ["must have", "should have", "can have", "must"], 0, "Logischer Schluss über Vergangenes: must have + past participle."],
      ["mo06", "___ you send me the agenda before the call?", ["Could", "Must", "Shall", "Should to"], 0, "Höfliche Bitte: Could you …?"],
      ["mo07", "With more time, we ___ have tested all interfaces.", ["could", "must", "can", "should to"], 0, "Verpasste Möglichkeit: could have + past participle."],
      ["mo08", "You ___ attend the workshop if you're busy – the slides will be shared.", ["don't have to", "mustn't", "can't to", "shouldn't to"], 0, "don't have to = muss nicht. mustn't = darf nicht!"],
      ["mo09", "You ___ share passwords by email under any circumstances.", ["mustn't", "don't have to", "needn't", "might not"], 0, "Verbot: must not / mustn't."],
      ["mo10", "It ___ be advisable to start the gap analysis this quarter.", ["would", "will to", "must to", "can to"], 0, "Gehobene Empfehlung: It would be advisable to …"],
      ["mo11", "The report is likely ___ ready by Thursday.", ["to be", "being", "be", "that be"], 0, "be likely to + Grundform."],
      ["mo12", "___ I suggest a short break before we continue?", ["May", "Must", "Will", "Do"], 0, "Sehr höflicher Vorschlag: May I suggest …?"]
    ].map((r) => ({ id: r[0], type: "mc", area: "modals", prompt: r[1], options: r[2], answer: r[3], explain: r[4] }))
  }
];
GRAMMAR_EXTRA[0].exercises = GRAMMAR_EXTRA[0].exercises.map((r) => Array.isArray(r) ? ({ id: r[0], type: "mc", area: "reported", prompt: r[1], options: r[2], answer: r[3], explain: r[4] }) : r);
