const PATH = {
  "ranks": [
    {
      "min": 0,
      "id": "junior",
      "title": "Junior Consultant",
      "emoji": "🌱"
    },
    {
      "min": 200,
      "id": "specialist",
      "title": "Security Specialist",
      "emoji": "🛡️"
    },
    {
      "min": 500,
      "id": "senior",
      "title": "Senior Advisor",
      "emoji": "📘"
    },
    {
      "min": 1000,
      "id": "principal",
      "title": "Principal",
      "emoji": "🏛️"
    },
    {
      "min": 2000,
      "id": "partner",
      "title": "C1 Partner",
      "emoji": "⭐"
    }
  ],
  "units": [
    {
      "id": "u1",
      "title": "Erster Kundenkontakt & Mails",
      "titleEn": "First contact and email",
      "blurb": "Anrede, höfliche Bitten, Nachfassen und die erste Vorstellung.",
      "emoji": "✉️",
      "color": "#1F8A70",
      "lessons": [
        {
          "id": "u1l1",
          "title": "Anrede und Einstieg",
          "emoji": "👋",
          "items": [
            {
              "id": "u1l1q1",
              "type": "mc",
              "area": "emailpack",
              "kind": "vocab",
              "prompt": "Was bedeutet „as discussed“?",
              "options": [
                "wie besprochen",
                "ausstehend, noch offen",
                "in der Zwischenzeit",
                "bitte teilen Sie uns mit / bitte um Einschätzung"
              ],
              "answer": 0,
              "audio": "as discussed",
              "explain": "as discussed = wie besprochen.",
              "vocabId": "em13"
            },
            {
              "id": "u1l1q2",
              "type": "listen",
              "area": "emailpack",
              "prompt": "Was hörst du?",
              "audio": "As discussed, we will share the interview list by Wednesday.",
              "options": [
                "Wie besprochen teilen wir die Interviewliste bis Mittwoch.",
                "Ich leite die Hinweise der Behörde zur Information weiter.",
                "Wenn Sie Klärung brauchen, stehe ich Ihnen gern zur Verfügung.",
                "In der Zwischenzeit sammeln Sie bitte die fehlenden Nachweise weiter."
              ],
              "answer": 0,
              "explain": "„As discussed, we will share the interview list by Wednesday.“ bedeutet: Wie besprochen teilen wir die Interviewliste bis Mittwoch.",
              "vocabId": "em13"
            },
            {
              "id": "u1l1q3",
              "type": "build",
              "area": "email",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich schreibe Ihnen, um ein Kick-off-Meeting für die CRA-Gap-Analyse vorzuschlagen.",
              "tokens": [
                "I",
                "am",
                "writing",
                "to",
                "propose",
                "a",
                "kick-off",
                "meeting",
                "for",
                "the",
                "CRA",
                "gap",
                "analysis."
              ],
              "accept": [
                "I am writing to propose a kick-off meeting for the CRA gap analysis.",
                "I am writing to propose a kick-off meeting for the CRA gap analysis."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I am writing to propose a kick-off meeting for the CRA gap analysis.",
              "explain": "Klassischer Einstieg: I am writing to…\nI am writing to propose a kick-off meeting for the CRA gap analysis."
            },
            {
              "id": "u1l1q4",
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
              "explain": "I would appreciate it if you could… ist höflich, klar und im Kundenverkehr üblich.",
              "chapter": "formality",
              "sourceId": "f01",
              "kind": "grammar"
            },
            {
              "id": "u1l1q5",
              "type": "match",
              "area": "emailpack",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "as discussed",
                  "right": "wie besprochen",
                  "audio": "as discussed"
                },
                {
                  "left": "outstanding",
                  "right": "ausstehend, noch offen",
                  "audio": "outstanding"
                },
                {
                  "left": "to acknowledge receipt",
                  "right": "den Empfang bestätigen",
                  "audio": "to acknowledge receipt"
                },
                {
                  "left": "in the meantime",
                  "right": "in der Zwischenzeit",
                  "audio": "in the meantime"
                },
                {
                  "left": "please advise",
                  "right": "bitte teilen Sie uns mit / bitte um Einschätzung",
                  "audio": "please advise"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u1l1q6",
              "type": "mc",
              "area": "email",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Dear John, / Dear Mr Smith,“",
              "options": [
                "Formelle oder halbförmliche Anrede. Danach Komma, nächster Satz groß.",
                "look forward to + -ing.",
                "Der sicherste formelle Gruß.",
                "Neutrale, sichere Begrüßung."
              ],
              "answer": 0,
              "audio": "Dear John, / Dear Mr Smith,",
              "explain": "Formelle oder halbförmliche Anrede. Danach Komma, nächster Satz groß."
            }
          ]
        },
        {
          "id": "u1l2",
          "title": "Höfliche Bitten",
          "emoji": "🙏",
          "items": [
            {
              "id": "u1l2q1",
              "type": "mc",
              "area": "emailpack",
              "kind": "vocab",
              "prompt": "Was bedeutet „I would appreciate it if you could…“?",
              "options": [
                "Ich wäre dankbar, wenn Sie…",
                "sobald es Ihnen möglich ist",
                "zögern Sie nicht, mich zu kontaktieren",
                "bitte teilen Sie uns mit / bitte um Einschätzung"
              ],
              "answer": 0,
              "audio": "I would appreciate it if you could…",
              "explain": "Eine der wichtigsten höflichen Bitten.",
              "vocabId": "em04"
            },
            {
              "id": "u1l2q2",
              "type": "build",
              "area": "email",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich wäre Ihnen dankbar, wenn Sie uns die Unterlagen bis Freitag schicken könnten.",
              "tokens": [
                "I",
                "would",
                "appreciate",
                "it",
                "if",
                "you",
                "could",
                "send",
                "the",
                "documents",
                "by",
                "Friday."
              ],
              "accept": [
                "I would appreciate it if you could send the documents by Friday.",
                "I would appreciate it if you could send the documents by Friday."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I would appreciate it if you could send the documents by Friday.",
              "explain": "Höfliche Bitte mit klarer Frist.\nI would appreciate it if you could send the documents by Friday."
            },
            {
              "id": "u1l2q3",
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
              "explain": "look forward to + Gerund (-ing). To ist hier Präposition.",
              "chapter": "formality",
              "sourceId": "f02",
              "kind": "grammar"
            },
            {
              "id": "u1l2q4",
              "type": "listen",
              "area": "emailpack",
              "prompt": "Was hörst du?",
              "audio": "Could you please review the draft at your earliest convenience?",
              "options": [
                "Könnten Sie den Entwurf bitte prüfen, sobald es Ihnen möglich ist?",
                "Ich wäre dankbar, wenn Sie die Unterlagen bis Freitag senden könnten.",
                "Solltest du / Sollten Sie Fragen haben, zögern Sie nicht, mich zu kontaktieren.",
                "Wenn Sie Klärung brauchen, stehe ich Ihnen gern zur Verfügung."
              ],
              "answer": 0,
              "explain": "„Could you please review the draft at your earliest convenience?“ bedeutet: Könnten Sie den Entwurf bitte prüfen, sobald es Ihnen möglich ist?",
              "vocabId": "em05"
            },
            {
              "id": "u1l2q5",
              "type": "mc",
              "area": "email",
              "kind": "phrase",
              "prompt": "Was bedeutet: „I look forward to hearing from you.“",
              "options": [
                "look forward to + -ing.",
                "Formeller Schlusssatz.",
                "Der sicherste formelle Gruß.",
                "Blick auf die Zusammenarbeit."
              ],
              "answer": 0,
              "audio": "I look forward to hearing from you.",
              "explain": "look forward to + -ing."
            },
            {
              "id": "u1l2q6",
              "type": "listen-build",
              "area": "emailpack",
              "prompt": "Was hörst du? Baue den Satz.",
              "tokens": [
                "I",
                "acknowledge",
                "receipt",
                "of",
                "the",
                "updated",
                "SBOM",
                "and",
                "will",
                "review",
                "it",
                "today."
              ],
              "accept": [
                "I acknowledge receipt of the updated SBOM and will review it today.",
                "I acknowledge receipt of the updated SBOM and will review it today."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I acknowledge receipt of the updated SBOM and will review it today.",
              "explain": "„I acknowledge receipt of the updated SBOM and will review it today.“ – Ich bestätige den Empfang der aktualisierten SBOM und prüfe sie heute.",
              "vocabId": "em18"
            }
          ]
        },
        {
          "id": "u1l3",
          "title": "Nachfassen",
          "emoji": "🔔",
          "items": [
            {
              "id": "u1l3q1",
              "type": "mc",
              "area": "emailpack",
              "kind": "vocab",
              "prompt": "Was bedeutet „outstanding“?",
              "options": [
                "ausstehend, noch offen",
                "sich bei jemandem wieder melden",
                "in der Zwischenzeit",
                "sich zurückmelden (Business-Englisch)"
              ],
              "answer": 0,
              "audio": "outstanding",
              "explain": "Hier nicht outstanding im Sinne von hervorragend.",
              "vocabId": "em17"
            },
            {
              "id": "u1l3q2",
              "type": "listen",
              "area": "emailpack",
              "prompt": "Was hörst du?",
              "audio": "I will come back to you tomorrow with a revised timeline.",
              "options": [
                "Ich melde mich morgen mit einem überarbeiteten Zeitplan bei Ihnen.",
                "Zwei Punkte aus der Dokumentenanforderung sind noch offen.",
                "Ich melde mich, sobald ich die Logs geprüft habe.",
                "Bitte teilen Sie uns mit, ob Donnerstag um 14:00 Uhr noch passt."
              ],
              "answer": 0,
              "explain": "„I will come back to you tomorrow with a revised timeline.“ bedeutet: Ich melde mich morgen mit einem überarbeiteten Zeitplan bei Ihnen.",
              "vocabId": "em16"
            },
            {
              "id": "u1l3q3",
              "type": "build",
              "area": "email",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Dies ist eine freundliche Erinnerung, dass der Nachweis zu Fund drei noch aussteht.",
              "tokens": [
                "This",
                "is",
                "a",
                "kind",
                "reminder",
                "that",
                "the",
                "evidence",
                "for",
                "finding",
                "three",
                "is",
                "still",
                "outstanding."
              ],
              "accept": [
                "This is a kind reminder that the evidence for finding three is still outstanding.",
                "This is a kind reminder that the evidence for finding three is still outstanding."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "This is a kind reminder that the evidence for finding three is still outstanding.",
              "explain": "Freundliches Nachfassen.\nThis is a kind reminder that the evidence for finding three is still outstanding."
            },
            {
              "id": "u1l3q4",
              "type": "gap",
              "area": "formality",
              "prompt": "Would you mind ___ the meeting to Thursday? (reschedule)",
              "accept": [
                "rescheduling"
              ],
              "options": [
                "rescheduling",
                "reschedule",
                "to reschedule",
                "rescheduled"
              ],
              "explain": "Would you mind + Gerund: Would you mind rescheduling…?",
              "placeholder": "Antwort wählen",
              "chapter": "formality",
              "sourceId": "f03",
              "kind": "grammar"
            },
            {
              "id": "u1l3q5",
              "type": "match",
              "area": "emailpack",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "to come back to someone",
                  "right": "sich bei jemandem wieder melden",
                  "audio": "to come back to someone"
                },
                {
                  "left": "outstanding",
                  "right": "ausstehend, noch offen",
                  "audio": "outstanding"
                },
                {
                  "left": "to acknowledge receipt",
                  "right": "den Empfang bestätigen",
                  "audio": "to acknowledge receipt"
                },
                {
                  "left": "to revert",
                  "right": "sich zurückmelden (Business-Englisch)",
                  "audio": "to revert"
                },
                {
                  "left": "to put something in writing",
                  "right": "etwas schriftlich festhalten",
                  "audio": "to put something in writing"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u1l3q6",
              "type": "mc",
              "area": "email",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Should you have any questions, please do not hesitate to contact me.“",
              "options": [
                "Formeller Schlusssatz.",
                "Schriftliches Festhalten nach einem Gespräch.",
                "look forward to + -ing.",
                "Fragen sind jederzeit willkommen."
              ],
              "answer": 0,
              "audio": "Should you have any questions, please do not hesitate to contact me.",
              "explain": "Formeller Schlusssatz."
            }
          ]
        },
        {
          "id": "u1l4",
          "title": "Sich vorstellen",
          "emoji": "🤝",
          "items": [
            {
              "id": "u1l4q1",
              "type": "mc",
              "area": "smalltalk",
              "kind": "vocab",
              "prompt": "Was bedeutet „Nice to meet you“?",
              "options": [
                "Freut mich, Sie kennenzulernen",
                "Wie war die Anreise?",
                "Sehr erfreut (sehr formell)",
                "einen guten ersten Eindruck machen"
              ],
              "answer": 0,
              "audio": "Nice to meet you",
              "explain": "Nice to meet you = Freut mich, Sie kennenzulernen.",
              "vocabId": "st01"
            },
            {
              "id": "u1l4q2",
              "type": "listen",
              "area": "smalltalk",
              "prompt": "Was hörst du?",
              "audio": "How do you do? My name is Isa Topac, from TPC Security.",
              "options": [
                "Sehr erfreut. Mein Name ist Isa Topac von TPC Security.",
                "Freut mich, Sie kennenzulernen, Anna. Danke, dass Sie sich heute Zeit nehmen.",
                "Wie war die Anreise? Haben Sie das Büro gut gefunden?",
                "Eine klare, ruhige Vorstellung hilft, einen guten ersten Eindruck zu machen."
              ],
              "answer": 0,
              "explain": "„How do you do? My name is Isa Topac, from TPC Security.“ bedeutet: Sehr erfreut. Mein Name ist Isa Topac von TPC Security.",
              "vocabId": "st11"
            },
            {
              "id": "u1l4q3",
              "type": "build",
              "area": "intro",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Mein Name ist Isa Topac, und ich bin Security Consultant bei TPC Security.",
              "tokens": [
                "My",
                "name",
                "is",
                "Isa",
                "Topac,",
                "and",
                "I",
                "am",
                "a",
                "security",
                "consultant",
                "at",
                "TPC",
                "Security."
              ],
              "accept": [
                "My name is Isa Topac, and I am a security consultant at TPC Security.",
                "My name is Isa Topac, and I am a security consultant at TPC Security."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "My name is Isa Topac, and I am a security consultant at TPC Security.",
              "explain": "Name + Rolle + Unternehmen in einem Satz.\nMy name is Isa Topac, and I am a security consultant at TPC Security."
            },
            {
              "id": "u1l4q4",
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
              "explain": "Schreibweise: responsible. Präposition: responsible for.",
              "chapter": "prepositions",
              "sourceId": "r01",
              "kind": "grammar"
            },
            {
              "id": "u1l4q5",
              "type": "mc",
              "area": "intro",
              "kind": "phrase",
              "prompt": "Was bedeutet: „It's a pleasure to meet you.“",
              "options": [
                "Es freut mich, Sie kennenzulernen.",
                "Blick auf die Zusammenarbeit.",
                "Neutrale, sichere Begrüßung.",
                "Fragen sind jederzeit willkommen."
              ],
              "answer": 0,
              "audio": "It's a pleasure to meet you.",
              "explain": "Es freut mich, Sie kennenzulernen."
            },
            {
              "id": "u1l4q6",
              "type": "match",
              "area": "smalltalk",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "Nice to meet you",
                  "right": "Freut mich, Sie kennenzulernen",
                  "audio": "Nice to meet you"
                },
                {
                  "left": "How was your trip?",
                  "right": "Wie war die Anreise?",
                  "audio": "How was your trip?"
                },
                {
                  "left": "How do you do?",
                  "right": "Sehr erfreut (sehr formell)",
                  "audio": "How do you do?"
                },
                {
                  "left": "to make a good first impression",
                  "right": "einen guten ersten Eindruck machen",
                  "audio": "to make a good first impression"
                },
                {
                  "left": "after you",
                  "right": "bitte nach Ihnen, nach Ihnen",
                  "audio": "after you"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            }
          ]
        },
        {
          "id": "u1l5",
          "title": "Klar und höflich schreiben",
          "emoji": "✍️",
          "items": [
            {
              "id": "u1l5q1",
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
              "explain": "Dear + Name und Best regards sind die sicherste formelle Kombination.",
              "chapter": "formality",
              "sourceId": "f04",
              "kind": "grammar"
            },
            {
              "id": "u1l5q2",
              "type": "mc",
              "area": "articles",
              "prompt": "Thank you for the ___ you provided yesterday.",
              "options": [
                "information",
                "informations",
                "an information",
                "many information"
              ],
              "answer": 0,
              "explain": "information ist unzählbar. Nicht informations. a piece of information, wenn man zählt.",
              "chapter": "articles",
              "sourceId": "art01",
              "kind": "grammar"
            },
            {
              "id": "u1l5q3",
              "type": "mc",
              "area": "articles",
              "prompt": "Could you give us some ___ on the timeline?",
              "options": [
                "advice",
                "advices",
                "an advice",
                "advice piece"
              ],
              "answer": 0,
              "explain": "advice ist unzählbar. a piece of advice, some advice.",
              "chapter": "articles",
              "sourceId": "art02",
              "kind": "grammar"
            },
            {
              "id": "u1l5q4",
              "type": "build",
              "area": "emailpack",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Solltest du / Sollten Sie Fragen haben, zögern Sie nicht, mich zu kontaktieren.",
              "tokens": [
                "Should",
                "you",
                "have",
                "any",
                "questions,",
                "please",
                "do",
                "not",
                "hesitate",
                "to",
                "contact",
                "me."
              ],
              "accept": [
                "Should you have any questions, please do not hesitate to contact me.",
                "Should you have any questions, please do not hesitate to contact me."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Should you have any questions, please do not hesitate to contact me.",
              "explain": "Solltest du / Sollten Sie Fragen haben, zögern Sie nicht, mich zu kontaktieren.\nShould you have any questions, please do not hesitate to contact me.",
              "vocabId": "em14"
            },
            {
              "id": "u1l5q5",
              "type": "listen",
              "area": "emailpack",
              "prompt": "Was hörst du?",
              "audio": "Please advise whether Thursday at 14:00 still works for you.",
              "options": [
                "Bitte teilen Sie uns mit, ob Donnerstag um 14:00 Uhr noch passt.",
                "Wie besprochen teilen wir die Interviewliste bis Mittwoch.",
                "Wenn Sie Klärung brauchen, stehe ich Ihnen gern zur Verfügung.",
                "In der Zwischenzeit sammeln Sie bitte die fehlenden Nachweise weiter."
              ],
              "answer": 0,
              "explain": "„Please advise whether Thursday at 14:00 still works for you.“ bedeutet: Bitte teilen Sie uns mit, ob Donnerstag um 14:00 Uhr noch passt.",
              "vocabId": "em23"
            },
            {
              "id": "u1l5q6",
              "type": "mc",
              "area": "formality",
              "prompt": "___ I suggest we take this point offline?",
              "options": [
                "May",
                "Do",
                "Must",
                "Shall to"
              ],
              "answer": 0,
              "explain": "May I suggest… ist eine höfliche, formelle Einleitung für einen Vorschlag.",
              "chapter": "formality",
              "sourceId": "f15",
              "kind": "grammar"
            }
          ]
        }
      ]
    },
    {
      "id": "u2",
      "title": "Meetings & Abstimmung",
      "titleEn": "Meetings and alignment",
      "blurb": "Agenda, Protokoll, Calls leiten und höflich das Wort ergreifen.",
      "emoji": "💬",
      "color": "#16354A",
      "lessons": [
        {
          "id": "u2l1",
          "title": "Agenda und Protokoll",
          "emoji": "📋",
          "items": [
            {
              "id": "u2l1q1",
              "type": "mc",
              "area": "meetings",
              "kind": "vocab",
              "prompt": "Was bedeutet „agenda“?",
              "options": [
                "Tagesordnung",
                "Protokoll (einer Sitzung)",
                "Aufgabe, offener Punkt",
                "Einwahldaten"
              ],
              "answer": 0,
              "audio": "agenda",
              "explain": "Die agenda ist die Themenliste, nicht der Terminkalender.",
              "vocabId": "m01"
            },
            {
              "id": "u2l1q2",
              "type": "listen",
              "area": "meetings",
              "prompt": "Was hörst du?",
              "audio": "Please send the agenda at least one day before the meeting.",
              "options": [
                "Bitte schicken Sie die Tagesordnung mindestens einen Tag vor dem Meeting.",
                "Ich lasse das Protokoll bis morgen früh in Umlauf gehen.",
                "Bitte bestätigen Sie Ihre Verfügbarkeit bis Mittwoch.",
                "Ich lasse die Folien nach dem Gespräch in Umlauf gehen."
              ],
              "answer": 0,
              "explain": "„Please send the agenda at least one day before the meeting.“ bedeutet: Bitte schicken Sie die Tagesordnung mindestens einen Tag vor dem Meeting.",
              "vocabId": "m01"
            },
            {
              "id": "u2l1q3",
              "type": "build",
              "area": "meetings",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich lasse das Protokoll bis morgen früh in Umlauf gehen.",
              "tokens": [
                "I",
                "will",
                "circulate",
                "the",
                "minutes",
                "by",
                "tomorrow",
                "morning."
              ],
              "accept": [
                "I will circulate the minutes by tomorrow morning.",
                "I will circulate the minutes by tomorrow morning."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I will circulate the minutes by tomorrow morning.",
              "explain": "Ich lasse das Protokoll bis morgen früh in Umlauf gehen.\nI will circulate the minutes by tomorrow morning.",
              "vocabId": "m02"
            },
            {
              "id": "u2l1q4",
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
              "explain": "Yesterday → Past Simple.",
              "chapter": "tenses",
              "sourceId": "t02",
              "kind": "grammar"
            },
            {
              "id": "u2l1q5",
              "type": "match",
              "area": "meetings",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "agenda",
                  "right": "Tagesordnung",
                  "audio": "agenda"
                },
                {
                  "left": "minutes (of a meeting)",
                  "right": "Protokoll (einer Sitzung)",
                  "audio": "minutes (of a meeting)"
                },
                {
                  "left": "action item",
                  "right": "Aufgabe, offener Punkt",
                  "audio": "action item"
                },
                {
                  "left": "to circulate",
                  "right": "in Umlauf bringen, verteilen",
                  "audio": "to circulate"
                },
                {
                  "left": "to take the minutes",
                  "right": "das Protokoll führen",
                  "audio": "to take the minutes"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u2l1q6",
              "type": "listen-build",
              "area": "meetings",
              "prompt": "Was hörst du? Baue den Satz.",
              "tokens": [
                "Please",
                "confirm",
                "your",
                "availability",
                "by",
                "Wednesday."
              ],
              "accept": [
                "Please confirm your availability by Wednesday.",
                "Please confirm your availability by Wednesday."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Please confirm your availability by Wednesday.",
              "explain": "„Please confirm your availability by Wednesday.“ – Bitte bestätigen Sie Ihre Verfügbarkeit bis Mittwoch.",
              "vocabId": "m18"
            }
          ]
        },
        {
          "id": "u2l2",
          "title": "Im Meeting sprechen",
          "emoji": "🗣️",
          "items": [
            {
              "id": "u2l2q1",
              "type": "mc",
              "area": "meetings",
              "kind": "vocab",
              "prompt": "Was bedeutet „to align (on)“?",
              "options": [
                "sich abstimmen (über)",
                "zusammenfassen",
                "abschließen, zu Ende bringen",
                "einen Punkt ansprechen"
              ],
              "answer": 0,
              "audio": "to align (on)",
              "explain": "Sehr typisch: align on scope, timeline, responsibilities.",
              "vocabId": "m03"
            },
            {
              "id": "u2l2q2",
              "type": "listen",
              "area": "meetings",
              "prompt": "Was hörst du?",
              "audio": "Let me recap the key points before we wrap up.",
              "options": [
                "Lassen Sie mich die wichtigsten Punkte zusammenfassen, bevor wir schließen.",
                "Lass uns die nächsten Schritte abstimmen, bevor wir den Kunden kontaktieren.",
                "Lassen Sie uns abschließen und die offenen Punkte bestätigen.",
                "Könnten Sie den Umfang der Bewertung klären?"
              ],
              "answer": 0,
              "explain": "„Let me recap the key points before we wrap up.“ bedeutet: Lassen Sie mich die wichtigsten Punkte zusammenfassen, bevor wir schließen.",
              "vocabId": "m05"
            },
            {
              "id": "u2l2q3",
              "type": "build",
              "area": "meetings",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Lassen Sie mich die wichtigsten Punkte zusammenfassen, bevor wir schließen.",
              "tokens": [
                "Let",
                "me",
                "recap",
                "the",
                "key",
                "points",
                "before",
                "we",
                "wrap",
                "up."
              ],
              "accept": [
                "Let me recap the key points before we wrap up.",
                "Let me recap the key points before we wrap up."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Let me recap the key points before we wrap up.",
              "explain": "Lassen Sie mich die wichtigsten Punkte zusammenfassen, bevor wir schließen.\nLet me recap the key points before we wrap up.",
              "vocabId": "m05"
            },
            {
              "id": "u2l2q4",
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
              "explain": "Please find attached… ist eine etablierte, formelle Wendung.",
              "chapter": "formality",
              "sourceId": "f05",
              "kind": "grammar"
            },
            {
              "id": "u2l2q5",
              "type": "mc",
              "area": "intro",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Today I would like to walk you through the agenda.“",
              "options": [
                "Heute möchte ich Sie durch die Tagesordnung führen.",
                "Heute möchte ich Sie durch den vorgeschlagenen Projektplan führen.",
                "Nur um zusammenzufassen, was wir bisher vereinbart haben:",
                "Fragen sind jederzeit willkommen."
              ],
              "answer": 0,
              "audio": "Today I would like to walk you through the agenda.",
              "explain": "Heute möchte ich Sie durch die Tagesordnung führen."
            },
            {
              "id": "u2l2q6",
              "type": "match",
              "area": "meetings",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "to align (on)",
                  "right": "sich abstimmen (über)",
                  "audio": "to align (on)"
                },
                {
                  "left": "to recap",
                  "right": "zusammenfassen",
                  "audio": "to recap"
                },
                {
                  "left": "to wrap up",
                  "right": "abschließen, zu Ende bringen",
                  "audio": "to wrap up"
                },
                {
                  "left": "to raise a point",
                  "right": "einen Punkt ansprechen",
                  "audio": "to raise a point"
                },
                {
                  "left": "to clarify",
                  "right": "klären, verdeutlichen",
                  "audio": "to clarify"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            }
          ]
        },
        {
          "id": "u2l3",
          "title": "Calls leiten",
          "emoji": "📞",
          "items": [
            {
              "id": "u2l3q1",
              "type": "mc",
              "area": "meetings",
              "kind": "vocab",
              "prompt": "Was bedeutet „to kick off“?",
              "options": [
                "starten, eröffnen",
                "verschieben (auf später)",
                "neu terminieren",
                "kurz Rücksprache halten"
              ],
              "answer": 0,
              "audio": "to kick off",
              "explain": "to kick off = starten, eröffnen.",
              "vocabId": "m07"
            },
            {
              "id": "u2l3q2",
              "type": "listen",
              "area": "meetings",
              "prompt": "Was hörst du?",
              "audio": "Could we postpone the call until Thursday afternoon?",
              "options": [
                "Könnten wir das Gespräch auf Donnerstagnachmittag verschieben?",
                "Wir starten das Projekt nächsten Montag mit einem Workshop.",
                "Ich muss unser Kick-off-Meeting neu terminieren, weil ein Workshop kollidiert.",
                "Lass uns nach dem Audit kurz Rücksprache halten, um die Feststellungen zu besprechen."
              ],
              "answer": 0,
              "explain": "„Could we postpone the call until Thursday afternoon?“ bedeutet: Könnten wir das Gespräch auf Donnerstagnachmittag verschieben?",
              "vocabId": "m11"
            },
            {
              "id": "u2l3q3",
              "type": "build",
              "area": "call",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Danke, dass Sie alle dabei sind. Kann mich jeder gut hören?",
              "tokens": [
                "Thanks,",
                "everyone,",
                "for",
                "joining.",
                "Can",
                "you",
                "all",
                "hear",
                "me",
                "clearly?"
              ],
              "accept": [
                "Thanks, everyone, for joining. Can you all hear me clearly?",
                "Thanks, everyone, for joining. Can you all hear me clearly?"
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Thanks, everyone, for joining. Can you all hear me clearly?",
              "explain": "Danke, dass Sie alle dabei sind. Kann mich jeder gut hören?\nThanks, everyone, for joining. Can you all hear me clearly?"
            },
            {
              "id": "u2l3q4",
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
              "explain": "Could you please… at your earliest convenience ist höflich und im Geschäftsverkehr üblich.",
              "chapter": "formality",
              "sourceId": "f06",
              "kind": "grammar"
            },
            {
              "id": "u2l3q5",
              "type": "mc",
              "area": "call",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Sorry to interrupt, but could I just come in here for a moment?“",
              "options": [
                "Entschuldigung, dass ich unterbreche, darf ich kurz dazwischengehen?",
                "Nur um zusammenzufassen, was wir bisher vereinbart haben:",
                "Ich schicke nach dem Call eine kurze Zusammenfassung per E-Mail.",
                "Vielen Dank. Ich melde mich in Kürze."
              ],
              "answer": 0,
              "audio": "Sorry to interrupt, but could I just come in here for a moment?",
              "explain": "Entschuldigung, dass ich unterbreche, darf ich kurz dazwischengehen?"
            },
            {
              "id": "u2l3q6",
              "type": "build",
              "area": "meetings",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Lassen Sie uns abschließen und die offenen Punkte bestätigen.",
              "tokens": [
                "Let's",
                "wrap",
                "up",
                "and",
                "confirm",
                "the",
                "action",
                "items."
              ],
              "accept": [
                "Let's wrap up and confirm the action items.",
                "Let's wrap up and confirm the action items."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Let's wrap up and confirm the action items.",
              "explain": "Lassen Sie uns abschließen und die offenen Punkte bestätigen.\nLet's wrap up and confirm the action items.",
              "vocabId": "m08"
            }
          ]
        },
        {
          "id": "u2l4",
          "title": "Smalltalk am Rand",
          "emoji": "☕",
          "items": [
            {
              "id": "u2l4q1",
              "type": "mc",
              "area": "smalltalk",
              "kind": "vocab",
              "prompt": "Was bedeutet „How was your trip?“?",
              "options": [
                "Wie war die Anreise?",
                "Wie läuft es (bei Ihnen)?",
                "Bitte bedienen Sie sich",
                "Sollen wir beginnen?"
              ],
              "answer": 0,
              "audio": "How was your trip?",
              "explain": "How was your trip? = Wie war die Anreise?.",
              "vocabId": "st02"
            },
            {
              "id": "u2l4q2",
              "type": "listen",
              "area": "smalltalk",
              "prompt": "Was hörst du?",
              "audio": "How was your trip? Did you find the office easily?",
              "options": [
                "Wie war die Anreise? Haben Sie das Büro gut gefunden?",
                "Wie läuft es mit dem neuen Reporting-Prozess?",
                "Alle sind da, sollen wir beginnen?",
                "Ich halte Sie nicht lange auf, das ist ein zehnminütiges Update."
              ],
              "answer": 0,
              "explain": "„How was your trip? Did you find the office easily?“ bedeutet: Wie war die Anreise? Haben Sie das Büro gut gefunden?",
              "vocabId": "st02"
            },
            {
              "id": "u2l4q3",
              "type": "build",
              "area": "smalltalk",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Alle sind da, sollen wir beginnen?",
              "tokens": [
                "Everyone",
                "is",
                "here,",
                "so",
                "shall",
                "we",
                "get",
                "started?"
              ],
              "accept": [
                "Everyone is here, so shall we get started?",
                "Everyone is here, so shall we get started?"
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Everyone is here, so shall we get started?",
              "explain": "Alle sind da, sollen wir beginnen?\nEveryone is here, so shall we get started?",
              "vocabId": "st09"
            },
            {
              "id": "u2l4q4",
              "type": "mc",
              "area": "intro",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Good morning, everyone.“",
              "options": [
                "Neutrale, sichere Begrüßung.",
                "Es freut mich, Sie kennenzulernen.",
                "Danke, dass Sie alle dabei sind. Kann mich jeder gut hören?",
                "Der sicherste formelle Gruß."
              ],
              "answer": 0,
              "audio": "Good morning, everyone.",
              "explain": "Neutrale, sichere Begrüßung."
            },
            {
              "id": "u2l4q5",
              "type": "match",
              "area": "smalltalk",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "How was your trip?",
                  "right": "Wie war die Anreise?",
                  "audio": "How was your trip?"
                },
                {
                  "left": "How are you getting on?",
                  "right": "Wie läuft es (bei Ihnen)?",
                  "audio": "How are you getting on?"
                },
                {
                  "left": "Please help yourself",
                  "right": "Bitte bedienen Sie sich",
                  "audio": "Please help yourself"
                },
                {
                  "left": "Shall we get started?",
                  "right": "Sollen wir beginnen?",
                  "audio": "Shall we get started?"
                },
                {
                  "left": "I won't keep you long",
                  "right": "Ich halte Sie nicht lange auf",
                  "audio": "I won't keep you long"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u2l4q6",
              "type": "listen-build",
              "area": "smalltalk",
              "prompt": "Was hörst du? Baue den Satz.",
              "tokens": [
                "I",
                "won't",
                "keep",
                "you",
                "long;",
                "this",
                "is",
                "a",
                "ten-minute",
                "update."
              ],
              "accept": [
                "I won't keep you long; this is a ten-minute update.",
                "I won't keep you long; this is a ten-minute update."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I won't keep you long; this is a ten-minute update.",
              "explain": "„I won't keep you long; this is a ten-minute update.“ – Ich halte Sie nicht lange auf, das ist ein zehnminütiges Update.",
              "vocabId": "st10"
            }
          ]
        },
        {
          "id": "u2l5",
          "title": "Höflich unterbrechen",
          "emoji": "🖐️",
          "items": [
            {
              "id": "u2l5q1",
              "type": "mc",
              "area": "smalltalk",
              "kind": "vocab",
              "prompt": "Was bedeutet „Sorry to interrupt“?",
              "options": [
                "Entschuldigung, dass ich unterbreche",
                "Das ist ein guter Punkt",
                "Wenn ich darf, gestatten Sie mir",
                "einen Punkt ansprechen"
              ],
              "answer": 0,
              "audio": "Sorry to interrupt",
              "explain": "Sorry to interrupt = Entschuldigung, dass ich unterbreche.",
              "vocabId": "st08"
            },
            {
              "id": "u2l5q2",
              "type": "listen",
              "area": "smalltalk",
              "prompt": "Was hörst du?",
              "audio": "Sorry to interrupt, but we should capture this as an action item.",
              "options": [
                "Entschuldigung, dass ich unterbreche, aber das sollten wir als offenen Punkt festhalten.",
                "Das ist ein guter Punkt. Wir sollten das Betriebsteam ebenfalls einbeziehen.",
                "Ich möchte einen Punkt zum vorgeschlagenen Zeitplan ansprechen.",
                "Da stimme ich voll zu: Eine kurze Agenda hätte uns heute Morgen geholfen."
              ],
              "answer": 0,
              "explain": "„Sorry to interrupt, but we should capture this as an action item.“ bedeutet: Entschuldigung, dass ich unterbreche, aber das sollten wir als offenen Punkt festhalten.",
              "vocabId": "st08"
            },
            {
              "id": "u2l5q3",
              "type": "build",
              "area": "call",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Entschuldigung, dass ich unterbreche, darf ich kurz dazwischengehen?",
              "tokens": [
                "Sorry",
                "to",
                "interrupt,",
                "but",
                "could",
                "I",
                "just",
                "come",
                "in",
                "here",
                "for",
                "a",
                "moment?"
              ],
              "accept": [
                "Sorry to interrupt, but could I just come in here for a moment?",
                "Sorry to interrupt, but could I just come in here for a moment?"
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Sorry to interrupt, but could I just come in here for a moment?",
              "explain": "Entschuldigung, dass ich unterbreche, darf ich kurz dazwischengehen?\nSorry to interrupt, but could I just come in here for a moment?"
            },
            {
              "id": "u2l5q4",
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
              "explain": "Falsch ist looking forward to hear – richtig: looking forward to hearing from you.",
              "chapter": "formality",
              "sourceId": "f07",
              "kind": "grammar"
            },
            {
              "id": "u2l5q5",
              "type": "mc",
              "area": "call",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Just to summarise what we have agreed so far:“",
              "options": [
                "Nur um zusammenzufassen, was wir bisher vereinbart haben:",
                "Ich schicke nach dem Call eine kurze Zusammenfassung per E-Mail.",
                "Gibt es noch etwas, das wir klären sollten, bevor wir schließen?",
                "Vielen Dank. Ich melde mich in Kürze."
              ],
              "answer": 0,
              "audio": "Just to summarise what we have agreed so far:",
              "explain": "Nur um zusammenzufassen, was wir bisher vereinbart haben:"
            },
            {
              "id": "u2l5q6",
              "type": "build",
              "area": "meetings",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Könnten Sie den Umfang der Bewertung klären?",
              "tokens": [
                "Could",
                "you",
                "clarify",
                "the",
                "scope",
                "of",
                "the",
                "assessment?"
              ],
              "accept": [
                "Could you clarify the scope of the assessment?",
                "Could you clarify the scope of the assessment?"
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Could you clarify the scope of the assessment?",
              "explain": "Könnten Sie den Umfang der Bewertung klären?\nCould you clarify the scope of the assessment?",
              "vocabId": "m17"
            }
          ]
        }
      ]
    },
    {
      "id": "u3",
      "title": "Projektsteuerung",
      "titleEn": "Project control",
      "blurb": "Scope, Meilensteine, Zeitplan und Status klar kommunizieren.",
      "emoji": "🗓️",
      "color": "#C9A227",
      "lessons": [
        {
          "id": "u3l1",
          "title": "Scope und Meilensteine",
          "emoji": "🎯",
          "items": [
            {
              "id": "u3l1q1",
              "type": "mc",
              "area": "project",
              "kind": "vocab",
              "prompt": "Was bedeutet „milestone“?",
              "options": [
                "Meilenstein",
                "Liefergegenstand, Arbeitsergebnis",
                "Frist, Stichtag",
                "Engpass"
              ],
              "answer": 0,
              "audio": "milestone",
              "explain": "milestone = Meilenstein.",
              "vocabId": "p03"
            },
            {
              "id": "u3l1q2",
              "type": "listen",
              "area": "project",
              "prompt": "Was hörst du?",
              "audio": "The report deadline is 15 December.",
              "options": [
                "Die Frist für den Bericht ist der 15. Dezember.",
                "Der erste Meilenstein ist der Kick-off-Workshop mit dem Produktteam.",
                "Das Hauptergebnis ist ein schriftlicher CRA-Gap-Analysebericht.",
                "Ich schicke jeden Freitag einen kurzen Statusbericht."
              ],
              "answer": 0,
              "explain": "„The report deadline is 15 December.“ bedeutet: Die Frist für den Bericht ist der 15. Dezember.",
              "vocabId": "p05"
            },
            {
              "id": "u3l1q3",
              "type": "build",
              "area": "project",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Die Frist für den Bericht ist der 15. Dezember.",
              "tokens": [
                "The",
                "report",
                "deadline",
                "is",
                "15",
                "December."
              ],
              "accept": [
                "The report deadline is 15 December.",
                "The report deadline is 15 December."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "The report deadline is 15 December.",
              "explain": "Die Frist für den Bericht ist der 15. Dezember.\nThe report deadline is 15 December.",
              "vocabId": "p05"
            },
            {
              "id": "u3l1q4",
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
              "explain": "depend on, nicht of oder from.",
              "chapter": "prepositions",
              "sourceId": "r03",
              "kind": "grammar"
            },
            {
              "id": "u3l1q5",
              "type": "match",
              "area": "project",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "milestone",
                  "right": "Meilenstein",
                  "audio": "milestone"
                },
                {
                  "left": "deliverable",
                  "right": "Liefergegenstand, Arbeitsergebnis",
                  "audio": "deliverable"
                },
                {
                  "left": "deadline",
                  "right": "Frist, Stichtag",
                  "audio": "deadline"
                },
                {
                  "left": "bottleneck",
                  "right": "Engpass",
                  "audio": "bottleneck"
                },
                {
                  "left": "status update",
                  "right": "Statusbericht, Zwischenstand",
                  "audio": "status update"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u3l1q6",
              "type": "mc",
              "area": "pitch",
              "kind": "phrase",
              "prompt": "Was bedeutet: „The first milestone is the kick-off, which is scheduled for 24 November.“",
              "options": [
                "Der erste Meilenstein ist das Kick-off.",
                "Derzeit planen wir, den Berichtsentwurf bis zum 15. Dezember zu liefern.",
                "Der Abschlussbericht folgt nach Ihrer Prüfung des Entwurfs.",
                "Passt dieser Zeitplan für Ihr Team?"
              ],
              "answer": 0,
              "audio": "The first milestone is the kick-off, which is scheduled for 24 November.",
              "explain": "Der erste Meilenstein ist das Kick-off."
            }
          ]
        },
        {
          "id": "u3l2",
          "title": "Den Zeitplan vorstellen",
          "emoji": "📌",
          "items": [
            {
              "id": "u3l2q1",
              "type": "mc",
              "area": "project",
              "kind": "vocab",
              "prompt": "Was bedeutet „timeline“?",
              "options": [
                "Zeitplan",
                "im Plan liegen",
                "in Verzug geraten",
                "Kick-off-Meeting, Startbesprechung"
              ],
              "answer": 0,
              "audio": "timeline",
              "explain": "timeline = Zeitplan.",
              "vocabId": "p06"
            },
            {
              "id": "u3l2q2",
              "type": "listen",
              "area": "project",
              "prompt": "Was hörst du?",
              "audio": "We are on track to deliver the draft report next week.",
              "options": [
                "Wir liegen im Plan, den Berichtsentwurf nächste Woche zu liefern.",
                "Der Zeitplan ist knapp, aber realistisch, wenn die Unterlagen diese Woche eintreffen.",
                "Wir sind in Verzug geraten, weil die Nachweise spät eingetroffen sind.",
                "Das Kick-off-Meeting ist für Dienstag um 10:00 Uhr geplant."
              ],
              "answer": 0,
              "explain": "„We are on track to deliver the draft report next week.“ bedeutet: Wir liegen im Plan, den Berichtsentwurf nächste Woche zu liefern.",
              "vocabId": "p14"
            },
            {
              "id": "u3l2q3",
              "type": "build",
              "area": "pitch",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Heute möchte ich Sie durch den vorgeschlagenen Projektplan führen.",
              "tokens": [
                "Today",
                "I",
                "would",
                "like",
                "to",
                "walk",
                "you",
                "through",
                "the",
                "proposed",
                "project",
                "plan."
              ],
              "accept": [
                "Today I would like to walk you through the proposed project plan.",
                "Today I would like to walk you through the proposed project plan."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Today I would like to walk you through the proposed project plan.",
              "explain": "Heute möchte ich Sie durch den vorgeschlagenen Projektplan führen.\nToday I would like to walk you through the proposed project plan."
            },
            {
              "id": "u3l2q4",
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
              "explain": "Last quarter ist ein abgeschlossener Zeitraum → Past Simple.",
              "chapter": "tenses",
              "sourceId": "t07",
              "kind": "grammar"
            },
            {
              "id": "u3l2q5",
              "type": "mc",
              "area": "pitch",
              "kind": "phrase",
              "prompt": "Was bedeutet: „We currently plan to deliver the draft report by 15 December.“",
              "options": [
                "Derzeit planen wir, den Berichtsentwurf bis zum 15. Dezember zu liefern.",
                "Der Abschlussbericht folgt nach Ihrer Prüfung des Entwurfs.",
                "Passt dieser Zeitplan für Ihr Team?",
                "Gibt es in diesem Stadium Fragen?"
              ],
              "answer": 0,
              "audio": "We currently plan to deliver the draft report by 15 December.",
              "explain": "Derzeit planen wir, den Berichtsentwurf bis zum 15. Dezember zu liefern."
            },
            {
              "id": "u3l2q6",
              "type": "build",
              "area": "project",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich schicke jeden Freitag einen kurzen Statusbericht.",
              "tokens": [
                "I",
                "will",
                "send",
                "a",
                "brief",
                "status",
                "update",
                "every",
                "Friday."
              ],
              "accept": [
                "I will send a brief status update every Friday.",
                "I will send a brief status update every Friday."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I will send a brief status update every Friday.",
              "explain": "Ich schicke jeden Freitag einen kurzen Statusbericht.\nI will send a brief status update every Friday.",
              "vocabId": "p13"
            }
          ]
        },
        {
          "id": "u3l3",
          "title": "Zeiten im Projekt",
          "emoji": "⏳",
          "items": [
            {
              "id": "u3l3q1",
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
              "explain": "Dauer bis jetzt: Present Perfect Continuous + for/since.",
              "chapter": "tenses",
              "sourceId": "t01",
              "kind": "grammar"
            },
            {
              "id": "u3l3q2",
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
              "explain": "since + Beginnzeitpunkt, Zugehörigkeit dauert an → have been with.",
              "chapter": "tenses",
              "sourceId": "t04",
              "kind": "grammar"
            },
            {
              "id": "u3l3q3",
              "type": "mc",
              "area": "tenses",
              "prompt": "We ___ the interviews by Friday if the list arrives tomorrow.",
              "options": [
                "will have completed",
                "completed",
                "have been completed",
                "complete"
              ],
              "answer": 0,
              "explain": "Future Perfect: bis zu einem zukünftigen Zeitpunkt abgeschlossen.",
              "chapter": "tenses",
              "sourceId": "t13",
              "kind": "grammar"
            },
            {
              "id": "u3l3q4",
              "type": "listen",
              "area": "project",
              "prompt": "Was hörst du?",
              "audio": "We will track progress in a short weekly status call.",
              "options": [
                "Den Fortschritt verfolgen wir in einem kurzen wöchentlichen Statusgespräch.",
                "Ich weise den Risiko-Workshop einer Senior-Beraterin zu.",
                "Wer ist für diesen offenen Punkt verantwortlich?",
                "Ich schicke jeden Freitag einen kurzen Statusbericht."
              ],
              "answer": 0,
              "explain": "„We will track progress in a short weekly status call.“ bedeutet: Den Fortschritt verfolgen wir in einem kurzen wöchentlichen Statusgespräch.",
              "vocabId": "p12"
            },
            {
              "id": "u3l3q5",
              "type": "build",
              "area": "project",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich weise den Risiko-Workshop einer Senior-Beraterin zu.",
              "tokens": [
                "I",
                "will",
                "assign",
                "the",
                "risk",
                "workshop",
                "to",
                "a",
                "senior",
                "consultant."
              ],
              "accept": [
                "I will assign the risk workshop to a senior consultant.",
                "I will assign the risk workshop to a senior consultant."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I will assign the risk workshop to a senior consultant.",
              "explain": "Ich weise den Risiko-Workshop einer Senior-Beraterin zu.\nI will assign the risk workshop to a senior consultant.",
              "vocabId": "p10"
            },
            {
              "id": "u3l3q6",
              "type": "mc",
              "area": "project",
              "kind": "vocab",
              "prompt": "Was bedeutet „to track progress“?",
              "options": [
                "den Fortschritt verfolgen",
                "zuweisen",
                "Verantwortliche(r) für eine Aufgabe",
                "Lenkungsausschuss"
              ],
              "answer": 0,
              "audio": "to track progress",
              "explain": "to track progress = den Fortschritt verfolgen.",
              "vocabId": "p12"
            }
          ]
        },
        {
          "id": "u3l4",
          "title": "If-Sätze für Plan B",
          "emoji": "🔀",
          "items": [
            {
              "id": "u3l4q1",
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
              "explain": "First Conditional: if + present simple, will + infinitive. Im if-Satz steht kein will.",
              "chapter": "conditionals",
              "sourceId": "c01",
              "kind": "grammar"
            },
            {
              "id": "u3l4q2",
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
              "explain": "Second Conditional (hypothetisch): if + past simple, would + infinitive.",
              "chapter": "conditionals",
              "sourceId": "c02",
              "kind": "grammar"
            },
            {
              "id": "u3l4q3",
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
              "explain": "Richtig ist die First Conditional: If the auditor finds a gap, we will remediate it.",
              "chapter": "conditionals",
              "sourceId": "c05",
              "kind": "grammar"
            },
            {
              "id": "u3l4q4",
              "type": "mc",
              "area": "project",
              "kind": "vocab",
              "prompt": "Was bedeutet „to fall behind schedule“?",
              "options": [
                "in Verzug geraten",
                "im Plan liegen",
                "Alternativplan, Notfallplan",
                "Änderungsantrag"
              ],
              "answer": 0,
              "audio": "to fall behind schedule",
              "explain": "to fall behind schedule = in Verzug geraten.",
              "vocabId": "p15"
            },
            {
              "id": "u3l4q5",
              "type": "listen",
              "area": "project",
              "prompt": "Was hörst du?",
              "audio": "An additional plant visit would require a formal change request.",
              "options": [
                "Ein zusätzlicher Werksbesuch würde einen formellen Änderungsantrag erfordern.",
                "Wir liegen im Plan, den Berichtsentwurf nächste Woche zu liefern.",
                "Wir sind in Verzug geraten, weil die Nachweise spät eingetroffen sind.",
                "Wir müssen die Feststellungen mit hohem Risiko zuerst priorisieren."
              ],
              "answer": 0,
              "explain": "„An additional plant visit would require a formal change request.“ bedeutet: Ein zusätzlicher Werksbesuch würde einen formellen Änderungsantrag erfordern.",
              "vocabId": "p17"
            },
            {
              "id": "u3l4q6",
              "type": "build",
              "area": "pitch",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Passt dieser Zeitplan für Ihr Team?",
              "tokens": [
                "Does",
                "this",
                "timeline",
                "work",
                "for",
                "your",
                "team?"
              ],
              "accept": [
                "Does this timeline work for your team?",
                "Does this timeline work for your team?"
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Does this timeline work for your team?",
              "explain": "Passt dieser Zeitplan für Ihr Team?\nDoes this timeline work for your team?"
            }
          ]
        },
        {
          "id": "u3l5",
          "title": "Status geben",
          "emoji": "📡",
          "items": [
            {
              "id": "u3l5q1",
              "type": "mc",
              "area": "project",
              "kind": "vocab",
              "prompt": "Was bedeutet „status update“?",
              "options": [
                "Statusbericht, Zwischenstand",
                "im Plan liegen",
                "Verantwortliche(r) für eine Aufgabe",
                "Lenkungsausschuss"
              ],
              "answer": 0,
              "audio": "status update",
              "explain": "status update = Statusbericht, Zwischenstand.",
              "vocabId": "p13"
            },
            {
              "id": "u3l5q2",
              "type": "listen",
              "area": "project",
              "prompt": "Was hörst du?",
              "audio": "Who is the owner of this action item?",
              "options": [
                "Wer ist für diesen offenen Punkt verantwortlich?",
                "Ich schicke jeden Freitag einen kurzen Statusbericht.",
                "Wir müssen die Feststellungen mit hohem Risiko zuerst priorisieren.",
                "Das Kick-off-Meeting ist für Dienstag um 10:00 Uhr geplant."
              ],
              "answer": 0,
              "explain": "„Who is the owner of this action item?“ bedeutet: Wer ist für diesen offenen Punkt verantwortlich?",
              "vocabId": "p11"
            },
            {
              "id": "u3l5q3",
              "type": "build",
              "area": "project",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Wer ist für diesen offenen Punkt verantwortlich?",
              "tokens": [
                "Who",
                "is",
                "the",
                "owner",
                "of",
                "this",
                "action",
                "item?"
              ],
              "accept": [
                "Who is the owner of this action item?",
                "Who is the owner of this action item?"
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Who is the owner of this action item?",
              "explain": "Wer ist für diesen offenen Punkt verantwortlich?\nWho is the owner of this action item?",
              "vocabId": "p11"
            },
            {
              "id": "u3l5q4",
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
              "explain": "How long + andauernde Tätigkeit → have you been working.",
              "chapter": "tenses",
              "sourceId": "t08",
              "kind": "grammar"
            },
            {
              "id": "u3l5q5",
              "type": "match",
              "area": "project",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "owner (of a task)",
                  "right": "Verantwortliche(r) für eine Aufgabe",
                  "audio": "owner (of a task)"
                },
                {
                  "left": "status update",
                  "right": "Statusbericht, Zwischenstand",
                  "audio": "status update"
                },
                {
                  "left": "to be on track",
                  "right": "im Plan liegen",
                  "audio": "to be on track"
                },
                {
                  "left": "to prioritise",
                  "right": "priorisieren",
                  "audio": "to prioritise"
                },
                {
                  "left": "steering committee",
                  "right": "Lenkungsausschuss",
                  "audio": "steering committee"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u3l5q6",
              "type": "mc",
              "area": "pitch",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Are there any questions at this stage?“",
              "options": [
                "Gibt es in diesem Stadium Fragen?",
                "Passt dieser Zeitplan für Ihr Team?",
                "Ich schicke nach dem Call eine kurze Zusammenfassung per E-Mail.",
                "Gibt es noch etwas, das wir klären sollten, bevor wir schließen?"
              ],
              "answer": 0,
              "audio": "Are there any questions at this stage?",
              "explain": "Gibt es in diesem Stadium Fragen?"
            }
          ]
        }
      ]
    },
    {
      "id": "u4",
      "title": "IT-Security, Audits & CRA",
      "titleEn": "Security, audits and CRA",
      "blurb": "CRA und NIS2, Funde diplomatisch erklären, Berichte im Passiv.",
      "emoji": "🔎",
      "color": "#0E2A3D",
      "lessons": [
        {
          "id": "u4l1",
          "title": "CRA und NIS2",
          "emoji": "🛡️",
          "items": [
            {
              "id": "u4l1q1",
              "type": "mc",
              "area": "security",
              "kind": "vocab",
              "prompt": "Was bedeutet „compliance“?",
              "options": [
                "Regelkonformität, Compliance",
                "Schwachstelle",
                "Bedrohung",
                "Nachweis, Beleg"
              ],
              "answer": 0,
              "audio": "compliance",
              "explain": "compliance = Regelkonformität, Compliance.",
              "vocabId": "s02"
            },
            {
              "id": "u4l1q2",
              "type": "listen",
              "area": "security",
              "prompt": "Was hörst du?",
              "audio": "The manufacturer must demonstrate compliance with the essential cybersecurity requirements.",
              "options": [
                "Der Hersteller muss die Einhaltung der wesentlichen Cybersicherheitsanforderungen nachweisen.",
                "Wir können diese Feststellung erst schließen, wenn der Kunde ausreichende Nachweise vorlegt.",
                "Der Anbieter hat 90 Tage Zeit, die Feststellungen mit hohem Risiko zu beheben.",
                "Der Bericht listet sieben Feststellungen auf, davon zwei mit hohem Risiko."
              ],
              "answer": 0,
              "explain": "„The manufacturer must demonstrate compliance with the essential cybersecurity requirements.“ bedeutet: Der Hersteller muss die Einhaltung der wesentlichen Cybersicherheitsanforderungen nachweisen.",
              "vocabId": "s02"
            },
            {
              "id": "u4l1q3",
              "type": "mc",
              "area": "security",
              "kind": "vocab",
              "prompt": "Was bedeutet „NIS2 Directive“?",
              "options": [
                "NIS-2-Richtlinie",
                "Konformitätsbewertung",
                "CE-Kennzeichnung",
                "wesentliche Einrichtung"
              ],
              "answer": 0,
              "audio": "NIS2 Directive",
              "explain": "NIS2 Directive = NIS-2-Richtlinie.",
              "vocabId": "s26"
            },
            {
              "id": "u4l1q4",
              "type": "mc",
              "area": "articles",
              "prompt": "___ Cyber Resilience Act applies to products with digital elements.",
              "options": [
                "The",
                "A",
                "An",
                "— (kein Artikel)"
              ],
              "answer": 0,
              "explain": "The Cyber Resilience Act – bestimmter Name eines Rechtsakts mit the.",
              "chapter": "articles",
              "sourceId": "art08",
              "kind": "grammar"
            },
            {
              "id": "u4l1q5",
              "type": "match",
              "area": "security",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "compliance",
                  "right": "Regelkonformität, Compliance",
                  "audio": "compliance"
                },
                {
                  "left": "vulnerability",
                  "right": "Schwachstelle",
                  "audio": "vulnerability"
                },
                {
                  "left": "evidence",
                  "right": "Nachweis, Beleg",
                  "audio": "evidence"
                },
                {
                  "left": "conformity assessment",
                  "right": "Konformitätsbewertung",
                  "audio": "conformity assessment"
                },
                {
                  "left": "NIS2 Directive",
                  "right": "NIS-2-Richtlinie",
                  "audio": "NIS2 Directive"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u4l1q6",
              "type": "listen-build",
              "area": "security",
              "prompt": "Was hörst du? Baue den Satz.",
              "tokens": [
                "We",
                "cannot",
                "close",
                "this",
                "finding",
                "until",
                "the",
                "client",
                "provides",
                "sufficient",
                "evidence."
              ],
              "accept": [
                "We cannot close this finding until the client provides sufficient evidence.",
                "We cannot close this finding until the client provides sufficient evidence."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "We cannot close this finding until the client provides sufficient evidence.",
              "explain": "„We cannot close this finding until the client provides sufficient evidence.“ – Wir können diese Feststellung erst schließen, wenn der Kunde ausreichende Nachweise vorlegt.",
              "vocabId": "s10"
            }
          ]
        },
        {
          "id": "u4l2",
          "title": "Funde und Restrisiko",
          "emoji": "⚠️",
          "items": [
            {
              "id": "u4l2q1",
              "type": "mc",
              "area": "security",
              "kind": "vocab",
              "prompt": "Was bedeutet „finding“?",
              "options": [
                "Feststellung (z. B. in einem Audit)",
                "Empfehlung",
                "beheben, nachbessern",
                "Anmerkung, Beobachtung (ohne Abweichung)"
              ],
              "answer": 0,
              "audio": "finding",
              "explain": "Im Audit-Kontext die neutrale Fachbezeichnung.",
              "vocabId": "s20"
            },
            {
              "id": "u4l2q2",
              "type": "mc",
              "area": "security",
              "kind": "vocab",
              "prompt": "Was bedeutet „mitigation measure“?",
              "options": [
                "Gegenmaßnahme, Maßnahme zur Risikominderung",
                "Schwachstelle",
                "Bedrohung",
                "Empfehlung"
              ],
              "answer": 0,
              "audio": "mitigation measure",
              "explain": "mitigation measure = Gegenmaßnahme, Maßnahme zur Risikominderung.",
              "vocabId": "s07"
            },
            {
              "id": "u4l2q3",
              "type": "listen",
              "area": "security",
              "prompt": "Was hörst du?",
              "audio": "The report lists seven findings, two of which are high risk.",
              "options": [
                "Der Bericht listet sieben Feststellungen auf, davon zwei mit hohem Risiko.",
                "Unsere wichtigste Empfehlung ist, den Prozess zum Umgang mit Schwachstellen zu formalisieren.",
                "Der Anbieter hat 90 Tage Zeit, die Feststellungen mit hohem Risiko zu beheben.",
                "Dieser Punkt wird als Anmerkung festgehalten, nicht als Abweichung."
              ],
              "answer": 0,
              "explain": "„The report lists seven findings, two of which are high risk.“ bedeutet: Der Bericht listet sieben Feststellungen auf, davon zwei mit hohem Risiko.",
              "vocabId": "s20"
            },
            {
              "id": "u4l2q4",
              "type": "build",
              "area": "security",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Unsere wichtigste Empfehlung ist, den Prozess zum Umgang mit Schwachstellen zu formalisieren.",
              "tokens": [
                "Our",
                "main",
                "recommendation",
                "is",
                "to",
                "formalise",
                "the",
                "vulnerability",
                "handling",
                "process."
              ],
              "accept": [
                "Our main recommendation is to formalise the vulnerability handling process.",
                "Our main recommendation is to formalise the vulnerability handling process."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Our main recommendation is to formalise the vulnerability handling process.",
              "explain": "Unsere wichtigste Empfehlung ist, den Prozess zum Umgang mit Schwachstellen zu formalisieren.\nOur main recommendation is to formalise the vulnerability handling process.",
              "vocabId": "s21"
            },
            {
              "id": "u4l2q5",
              "type": "mc",
              "area": "presentation",
              "kind": "phrase",
              "prompt": "Was bedeutet: „The most important finding concerns the update process.“",
              "options": [
                "Der wichtigste Fund betrifft den Update-Prozess.",
                "Insgesamt hat die Organisation eine solide Sicherheitsbasis.",
                "In der Folge bleibt das Restrisiko höher als nötig.",
                "Der Fund ist als hohes Risiko eingestuft, weil die Auswirkung erheblich wäre."
              ],
              "answer": 0,
              "audio": "The most important finding concerns the update process.",
              "explain": "Der wichtigste Fund betrifft den Update-Prozess."
            },
            {
              "id": "u4l2q6",
              "type": "match",
              "area": "security",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "mitigation measure",
                  "right": "Gegenmaßnahme, Maßnahme zur Risikominderung",
                  "audio": "mitigation measure"
                },
                {
                  "left": "to remediate",
                  "right": "beheben, nachbessern",
                  "audio": "to remediate"
                },
                {
                  "left": "finding",
                  "right": "Feststellung (z. B. in einem Audit)",
                  "audio": "finding"
                },
                {
                  "left": "recommendation",
                  "right": "Empfehlung",
                  "audio": "recommendation"
                },
                {
                  "left": "observation",
                  "right": "Anmerkung, Beobachtung (ohne Abweichung)",
                  "audio": "observation"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            }
          ]
        },
        {
          "id": "u4l3",
          "title": "Auditgespräch",
          "emoji": "🗣️",
          "items": [
            {
              "id": "u4l3q1",
              "type": "mc",
              "area": "security",
              "kind": "vocab",
              "prompt": "Was bedeutet „privileged access“?",
              "options": [
                "privilegierter Zugriff",
                "Härtung, Hardening",
                "Korrekturmaßnahme",
                "Sicherheitsvorfall"
              ],
              "answer": 0,
              "audio": "privileged access",
              "explain": "privileged access = privilegierter Zugriff.",
              "vocabId": "s33"
            },
            {
              "id": "u4l3q2",
              "type": "listen",
              "area": "security",
              "prompt": "Was hörst du?",
              "audio": "Privileged access to the production environment is not currently logged.",
              "options": [
                "Der privilegierte Zugriff auf die Produktionsumgebung wird derzeit nicht protokolliert.",
                "Die erste Empfehlung ist die Härtung der Fernwartungsschnittstelle.",
                "Jede Feststellung mit hohem Risiko braucht eine klar zugewiesene Korrekturmaßnahme.",
                "Wir können diese Feststellung erst schließen, wenn der Kunde ausreichende Nachweise vorlegt."
              ],
              "answer": 0,
              "explain": "„Privileged access to the production environment is not currently logged.“ bedeutet: Der privilegierte Zugriff auf die Produktionsumgebung wird derzeit nicht protokolliert.",
              "vocabId": "s33"
            },
            {
              "id": "u4l3q3",
              "type": "build",
              "area": "audit",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Während der Prüfung haben wir festgestellt, dass privilegierter Zugriff nicht durchgängig protokolliert wird.",
              "tokens": [
                "During",
                "the",
                "review,",
                "we",
                "noted",
                "that",
                "privileged",
                "access",
                "is",
                "not",
                "logged",
                "consistently."
              ],
              "accept": [
                "During the review, we noted that privileged access is not logged consistently.",
                "During the review, we noted that privileged access is not logged consistently."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "During the review, we noted that privileged access is not logged consistently.",
              "explain": "Während der Prüfung haben wir festgestellt, dass…\nDuring the review, we noted that privileged access is not logged consistently."
            },
            {
              "id": "u4l3q4",
              "type": "mc",
              "area": "audit",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Could you walk me through how this process currently works?“",
              "options": [
                "Könnten Sie mich einmal durch den aktuellen Ablauf führen?",
                "Das ist in diesem Stadium nicht ungewöhnlich, sollte aber angegangen werden.",
                "Was uns helfen würde, diesen Punkt zu schließen, ist ein Nachweis für regelmäßiges Testen.",
                "Könnten Sie uns das bis Ende nächster Woche bereitstellen?"
              ],
              "answer": 0,
              "audio": "Could you walk me through how this process currently works?",
              "explain": "Könnten Sie mich einmal durch den aktuellen Ablauf führen?"
            },
            {
              "id": "u4l3q5",
              "type": "mc",
              "area": "passive",
              "prompt": "Welche Formulierung klingt in einem Auditbericht am professionellsten?",
              "options": [
                "You forgot the logs.",
                "The logs were not available at the time of the review.",
                "Somebody obviously lost the logs.",
                "The logs are your problem."
              ],
              "answer": 1,
              "explain": "Unpersönlich, sachlich, ohne Schuldzuweisung: were not available at the time of the review.",
              "chapter": "passive",
              "sourceId": "pv14",
              "kind": "grammar"
            },
            {
              "id": "u4l3q6",
              "type": "build",
              "area": "security",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Jede Feststellung mit hohem Risiko braucht eine klar zugewiesene Korrekturmaßnahme.",
              "tokens": [
                "Each",
                "high-risk",
                "finding",
                "should",
                "have",
                "a",
                "clearly",
                "owned",
                "corrective",
                "action."
              ],
              "accept": [
                "Each high-risk finding should have a clearly owned corrective action.",
                "Each high-risk finding should have a clearly owned corrective action."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Each high-risk finding should have a clearly owned corrective action.",
              "explain": "Jede Feststellung mit hohem Risiko braucht eine klar zugewiesene Korrekturmaßnahme.\nEach high-risk finding should have a clearly owned corrective action.",
              "vocabId": "s34"
            }
          ]
        },
        {
          "id": "u4l4",
          "title": "Passiv im Bericht",
          "emoji": "📄",
          "items": [
            {
              "id": "u4l4q1",
              "type": "mc",
              "area": "passive",
              "prompt": "The report ___ to the steering committee last Friday.",
              "options": [
                "was submitted",
                "has submit",
                "is submit",
                "submitted"
              ],
              "answer": 0,
              "explain": "Passiv Vergangenheit: was/were + past participle. The report was submitted…",
              "chapter": "passive",
              "sourceId": "pv01",
              "kind": "grammar"
            },
            {
              "id": "u4l4q2",
              "type": "mc",
              "area": "passive",
              "prompt": "Welche Formulierung ist typisch für einen unpersönlichen Auditbericht?",
              "options": [
                "We think you did this badly.",
                "It is recommended that the process be formalised.",
                "You must fix this now.",
                "I want you to change everything."
              ],
              "answer": 1,
              "explain": "It is recommended that… ist sachlich und unpersönlich – typisch für Berichte.",
              "chapter": "passive",
              "sourceId": "pv03",
              "kind": "grammar"
            },
            {
              "id": "u4l4q3",
              "type": "mc",
              "area": "passive",
              "prompt": "It ___ that residual risk will remain after remediation.",
              "options": [
                "should be noted",
                "should note",
                "is note",
                "must noting"
              ],
              "answer": 0,
              "explain": "It should be noted that… – unpersönliche Berichtswendung.",
              "chapter": "passive",
              "sourceId": "pv06",
              "kind": "grammar"
            },
            {
              "id": "u4l4q4",
              "type": "listen",
              "area": "security",
              "prompt": "Was hörst du?",
              "audio": "The vendor has 90 days to remediate the high-risk findings.",
              "options": [
                "Der Anbieter hat 90 Tage Zeit, die Feststellungen mit hohem Risiko zu beheben.",
                "Der Bericht listet sieben Feststellungen auf, davon zwei mit hohem Risiko.",
                "Unsere wichtigste Empfehlung ist, den Prozess zum Umgang mit Schwachstellen zu formalisieren.",
                "Jede Feststellung mit hohem Risiko braucht eine klar zugewiesene Korrekturmaßnahme."
              ],
              "answer": 0,
              "explain": "„The vendor has 90 days to remediate the high-risk findings.“ bedeutet: Der Anbieter hat 90 Tage Zeit, die Feststellungen mit hohem Risiko zu beheben.",
              "vocabId": "s11"
            },
            {
              "id": "u4l4q5",
              "type": "build",
              "area": "audit",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Der Fund ist als hohes Risiko eingestuft, weil die Auswirkung erheblich wäre.",
              "tokens": [
                "The",
                "finding",
                "is",
                "classified",
                "as",
                "high",
                "risk",
                "because",
                "the",
                "impact",
                "would",
                "be",
                "significant."
              ],
              "accept": [
                "The finding is classified as high risk because the impact would be significant.",
                "The finding is classified as high risk because the impact would be significant."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "The finding is classified as high risk because the impact would be significant.",
              "explain": "Der Fund ist als hohes Risiko eingestuft, weil die Auswirkung erheblich wäre.\nThe finding is classified as high risk because the impact would be significant."
            },
            {
              "id": "u4l4q6",
              "type": "mc",
              "area": "passive",
              "prompt": "The finding ___ as high risk because privileged access is not logged.",
              "options": [
                "is classified",
                "classifies",
                "is classify",
                "has classify"
              ],
              "answer": 0,
              "explain": "is classified as… typische Berichtssprache.",
              "chapter": "passive",
              "sourceId": "pv10",
              "kind": "grammar"
            }
          ]
        },
        {
          "id": "u4l5",
          "title": "Präpositionen & typische Fallen",
          "emoji": "⚖️",
          "items": [
            {
              "id": "u4l5q1",
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
              "explain": "Schreibweise: responsible. Präposition: responsible for.",
              "chapter": "prepositions",
              "sourceId": "r01",
              "kind": "grammar"
            },
            {
              "id": "u4l5q2",
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
              "explain": "discuss something – ohne about.",
              "chapter": "prepositions",
              "sourceId": "r02",
              "kind": "grammar"
            },
            {
              "id": "u4l5q3",
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
              "explain": "agree with someone, agree on something, agree to a proposal.",
              "chapter": "prepositions",
              "sourceId": "r10",
              "kind": "grammar"
            },
            {
              "id": "u4l5q4",
              "type": "mc",
              "area": "articles",
              "prompt": "Thank you for the ___ you provided yesterday.",
              "options": [
                "information",
                "informations",
                "an information",
                "many information"
              ],
              "answer": 0,
              "explain": "information ist unzählbar. Nicht informations. a piece of information, wenn man zählt.",
              "chapter": "articles",
              "sourceId": "art01",
              "kind": "grammar"
            },
            {
              "id": "u4l5q5",
              "type": "mc",
              "area": "security",
              "kind": "vocab",
              "prompt": "Was bedeutet „evidence“?",
              "options": [
                "Nachweis, Beleg",
                "Feststellung (z. B. in einem Audit)",
                "Empfehlung",
                "Regelkonformität, Compliance"
              ],
              "answer": 0,
              "audio": "evidence",
              "explain": "Unzählbar: evidence, nicht evidences.",
              "vocabId": "s10"
            },
            {
              "id": "u4l5q6",
              "type": "listen",
              "area": "security",
              "prompt": "Was hörst du?",
              "audio": "The team discovered a critical vulnerability in the firmware update process.",
              "options": [
                "Das Team hat eine kritische Schwachstelle im Firmware-Update-Prozess entdeckt.",
                "Wir sollten die relevantesten Bedrohungen für diese Produktkategorie bewerten.",
                "Wir können diese Feststellung erst schließen, wenn der Kunde ausreichende Nachweise vorlegt.",
                "Jeder Sicherheitsvorfall muss dokumentiert und bewertet werden."
              ],
              "answer": 0,
              "explain": "„The team discovered a critical vulnerability in the firmware update process.“ bedeutet: Das Team hat eine kritische Schwachstelle im Firmware-Update-Prozess entdeckt.",
              "vocabId": "s04"
            }
          ]
        }
      ]
    },
    {
      "id": "u5",
      "title": "Präsentation & Beratung",
      "titleEn": "Presenting and advising",
      "blurb": "Ergebnisse eröffnen, Empfehlungen geben und den Workshop steuern.",
      "emoji": "📊",
      "color": "#1F8A70",
      "lessons": [
        {
          "id": "u5l1",
          "title": "Ergebnisse eröffnen",
          "emoji": "🎬",
          "items": [
            {
              "id": "u5l1q1",
              "type": "mc",
              "area": "presenting",
              "kind": "vocab",
              "prompt": "Was bedeutet „to highlight“?",
              "options": [
                "hervorheben",
                "empfehlen, dass",
                "Moderatorin / Moderator (einer Sitzung)",
                "Foliensatz"
              ],
              "answer": 0,
              "audio": "to highlight",
              "explain": "to highlight = hervorheben.",
              "vocabId": "pr03"
            },
            {
              "id": "u5l1q2",
              "type": "listen",
              "area": "presenting",
              "prompt": "Was hörst du?",
              "audio": "I will circulate the slide deck after the presentation.",
              "options": [
                "Ich lasse den Foliensatz nach der Präsentation in Umlauf gehen.",
                "Lassen Sie mich drei zentrale Feststellungen hervorheben, bevor wir ins Detail gehen.",
                "Isa übernimmt die Moderation und hält uns an der Agenda.",
                "Ein kurzes Handout mit den Feststellungen liegt in Ihrer Unterlage."
              ],
              "answer": 0,
              "explain": "„I will circulate the slide deck after the presentation.“ bedeutet: Ich lasse den Foliensatz nach der Präsentation in Umlauf gehen.",
              "vocabId": "pr16"
            },
            {
              "id": "u5l1q3",
              "type": "build",
              "area": "presentation",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Lassen Sie mich mit dem Gesamtergebnis beginnen.",
              "tokens": [
                "Let",
                "me",
                "start",
                "with",
                "the",
                "overall",
                "result."
              ],
              "accept": [
                "Let me start with the overall result.",
                "Let me start with the overall result."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Let me start with the overall result.",
              "explain": "Lassen Sie mich mit dem Gesamtergebnis beginnen.\nLet me start with the overall result."
            },
            {
              "id": "u5l1q4",
              "type": "mc",
              "area": "presentation",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Overall, the organisation has a solid security baseline.“",
              "options": [
                "Insgesamt hat die Organisation eine solide Sicherheitsbasis.",
                "Allerdings haben wir einige Bereiche identifiziert, die Aufmerksamkeit erfordern.",
                "Der wichtigste Fund betrifft den Update-Prozess.",
                "In der Folge bleibt das Restrisiko höher als nötig."
              ],
              "answer": 0,
              "audio": "Overall, the organisation has a solid security baseline.",
              "explain": "Insgesamt hat die Organisation eine solide Sicherheitsbasis."
            },
            {
              "id": "u5l1q5",
              "type": "match",
              "area": "presenting",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "to highlight",
                  "right": "hervorheben",
                  "audio": "to highlight"
                },
                {
                  "left": "to recommend that",
                  "right": "empfehlen, dass",
                  "audio": "to recommend that"
                },
                {
                  "left": "facilitator",
                  "right": "Moderatorin / Moderator (einer Sitzung)",
                  "audio": "facilitator"
                },
                {
                  "left": "slide deck",
                  "right": "Foliensatz",
                  "audio": "slide deck"
                },
                {
                  "left": "handout",
                  "right": "Handout, Teilnehmerunterlage",
                  "audio": "handout"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u5l1q6",
              "type": "build",
              "area": "presenting",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Wir empfehlen, dass Sie den Prozess zum Umgang mit Schwachstellen formalisieren.",
              "tokens": [
                "We",
                "recommend",
                "that",
                "you",
                "formalise",
                "the",
                "vulnerability",
                "handling",
                "process."
              ],
              "accept": [
                "We recommend that you formalise the vulnerability handling process.",
                "We recommend that you formalise the vulnerability handling process."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "We recommend that you formalise the vulnerability handling process.",
              "explain": "Wir empfehlen, dass Sie den Prozess zum Umgang mit Schwachstellen formalisieren.\nWe recommend that you formalise the vulnerability handling process.",
              "vocabId": "pr06"
            }
          ]
        },
        {
          "id": "u5l2",
          "title": "Empfehlungen geben",
          "emoji": "💡",
          "items": [
            {
              "id": "u5l2q1",
              "type": "mc",
              "area": "presenting",
              "kind": "vocab",
              "prompt": "Was bedeutet „to recommend that“?",
              "options": [
                "empfehlen, dass",
                "zusammenfassend / abschließend",
                "übergehen zu, sich zuwenden",
                "Fragerunde"
              ],
              "answer": 0,
              "audio": "to recommend that",
              "explain": "recommend that + Subjekt + Verb, ohne to.",
              "vocabId": "pr06"
            },
            {
              "id": "u5l2q2",
              "type": "listen",
              "area": "presenting",
              "prompt": "Was hörst du?",
              "audio": "We recommend that you formalise the vulnerability handling process.",
              "options": [
                "Wir empfehlen, dass Sie den Prozess zum Umgang mit Schwachstellen formalisieren.",
                "Zusammenfassend fehlen noch einige strukturierte Prozesse.",
                "Ich lasse den Foliensatz nach der Präsentation in Umlauf gehen.",
                "Lassen Sie mich nun zum Zeitplan und zu den geplanten Workshops kommen."
              ],
              "answer": 0,
              "explain": "„We recommend that you formalise the vulnerability handling process.“ bedeutet: Wir empfehlen, dass Sie den Prozess zum Umgang mit Schwachstellen formalisieren.",
              "vocabId": "pr06"
            },
            {
              "id": "u5l2q3",
              "type": "build",
              "area": "presentation",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich würde daher empfehlen, den Prozess im nächsten Quartal zu formalisieren.",
              "tokens": [
                "I",
                "would",
                "therefore",
                "recommend",
                "formalising",
                "the",
                "process",
                "within",
                "the",
                "next",
                "quarter."
              ],
              "accept": [
                "I would therefore recommend formalising the process within the next quarter.",
                "I would therefore recommend formalising the process within the next quarter."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I would therefore recommend formalising the process within the next quarter.",
              "explain": "Ich würde daher empfehlen, den Prozess im nächsten Quartal zu formalisieren.\nI would therefore recommend formalising the process within the next quarter."
            },
            {
              "id": "u5l2q4",
              "type": "gap",
              "area": "formality",
              "prompt": "I am writing to ___ a kick-off meeting for the CRA gap analysis.",
              "accept": [
                "propose",
                "suggest"
              ],
              "options": [
                "propose",
                "suggest",
                "proposing",
                "proposed"
              ],
              "explain": "I am writing to… + Infinitiv: propose oder suggest.",
              "placeholder": "Antwort wählen",
              "chapter": "formality",
              "sourceId": "f08",
              "kind": "grammar"
            },
            {
              "id": "u5l2q5",
              "type": "mc",
              "area": "presentation",
              "kind": "phrase",
              "prompt": "Was bedeutet: „As a result, residual risk remains higher than necessary.“",
              "options": [
                "In der Folge bleibt das Restrisiko höher als nötig.",
                "Allerdings haben wir einige Bereiche identifiziert, die Aufmerksamkeit erfordern.",
                "Insbesondere ist regelmäßiges Testen noch nicht formal dokumentiert.",
                "Soll ich mit den Hochrisiko-Funden beginnen?"
              ],
              "answer": 0,
              "audio": "As a result, residual risk remains higher than necessary.",
              "explain": "In der Folge bleibt das Restrisiko höher als nötig."
            },
            {
              "id": "u5l2q6",
              "type": "listen-build",
              "area": "presenting",
              "prompt": "Was hörst du? Baue den Satz.",
              "tokens": [
                "In",
                "summary,",
                "a",
                "few",
                "structured",
                "processes",
                "are",
                "still",
                "missing."
              ],
              "accept": [
                "In summary, a few structured processes are still missing.",
                "In summary, a few structured processes are still missing."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "In summary, a few structured processes are still missing.",
              "explain": "„In summary, a few structured processes are still missing.“ – Zusammenfassend fehlen noch einige strukturierte Prozesse.",
              "vocabId": "pr07"
            }
          ]
        },
        {
          "id": "u5l3",
          "title": "Relativsätze",
          "emoji": "🔗",
          "items": [
            {
              "id": "u5l3q1",
              "type": "mc",
              "area": "relative",
              "prompt": "The report, ___ was circulated on Friday, contains seven findings.",
              "options": [
                "which",
                "that",
                "who",
                "what"
              ],
              "answer": 0,
              "explain": "In einem nicht einschränkenden Relativsatz (mit Kommas) steht which, nicht that.",
              "chapter": "relative",
              "sourceId": "rel01",
              "kind": "grammar"
            },
            {
              "id": "u5l3q2",
              "type": "mc",
              "area": "relative",
              "prompt": "___ the tight timeline, we delivered the draft on Friday.",
              "options": [
                "Despite",
                "Although",
                "Whereas",
                "In spite"
              ],
              "answer": 0,
              "explain": "despite + Nomen (despite the tight timeline). although braucht einen Satz: Although the timeline was tight…",
              "chapter": "relative",
              "sourceId": "rel04",
              "kind": "grammar"
            },
            {
              "id": "u5l3q3",
              "type": "mc",
              "area": "relative",
              "prompt": "The engineering team focuses on features, ___ the security team focuses on residual risk.",
              "options": [
                "whereas",
                "despite",
                "although of",
                "which"
              ],
              "answer": 0,
              "explain": "whereas stellt zwei Kontraste gegenüber: während / wohingegen.",
              "chapter": "relative",
              "sourceId": "rel06",
              "kind": "grammar"
            },
            {
              "id": "u5l3q4",
              "type": "mc",
              "area": "relative",
              "prompt": "The client, ___ CISO joined the call, asked for a shorter summary.",
              "options": [
                "whose",
                "who's",
                "which",
                "that"
              ],
              "answer": 0,
              "explain": "whose = dessen / deren. who’s = who is und passt hier nicht.",
              "chapter": "relative",
              "sourceId": "rel08",
              "kind": "grammar"
            },
            {
              "id": "u5l3q5",
              "type": "listen",
              "area": "presenting",
              "prompt": "Was hörst du?",
              "audio": "Let me highlight three key findings before we go into the details.",
              "options": [
                "Lassen Sie mich drei zentrale Feststellungen hervorheben, bevor wir ins Detail gehen.",
                "Wir empfehlen, dass Sie den Prozess zum Umgang mit Schwachstellen formalisieren.",
                "Ich lasse den Foliensatz nach der Präsentation in Umlauf gehen.",
                "Ein kurzes Handout mit den Feststellungen liegt in Ihrer Unterlage."
              ],
              "answer": 0,
              "explain": "„Let me highlight three key findings before we go into the details.“ bedeutet: Lassen Sie mich drei zentrale Feststellungen hervorheben, bevor wir ins Detail gehen.",
              "vocabId": "pr03"
            },
            {
              "id": "u5l3q6",
              "type": "build",
              "area": "presenting",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ein kurzes Handout mit den Feststellungen liegt in Ihrer Unterlage.",
              "tokens": [
                "A",
                "short",
                "handout",
                "with",
                "the",
                "findings",
                "is",
                "in",
                "your",
                "pack."
              ],
              "accept": [
                "A short handout with the findings is in your pack.",
                "A short handout with the findings is in your pack."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "A short handout with the findings is in your pack.",
              "explain": "Ein kurzes Handout mit den Feststellungen liegt in Ihrer Unterlage.\nA short handout with the findings is in your pack.",
              "vocabId": "pr17"
            }
          ]
        },
        {
          "id": "u5l4",
          "title": "Inversion & formeller Ton",
          "emoji": "🎩",
          "items": [
            {
              "id": "u5l4q1",
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
              "explain": "Inversion im Third Conditional: Had we been informed… = If we had been informed…",
              "chapter": "inversion",
              "sourceId": "i01",
              "kind": "grammar"
            },
            {
              "id": "u5l4q2",
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
              "explain": "Should you have any questions… ist die klassische formelle Mail-Wendung.",
              "chapter": "inversion",
              "sourceId": "i02",
              "kind": "grammar"
            },
            {
              "id": "u5l4q3",
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
              "explain": "Were we to postpone… = If we postponed… / If we were to postpone…",
              "chapter": "inversion",
              "sourceId": "i03",
              "kind": "grammar"
            },
            {
              "id": "u5l4q4",
              "type": "build",
              "area": "email",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Sollten Sie Fragen haben, zögern Sie bitte nicht, mich zu kontaktieren.",
              "tokens": [
                "Should",
                "you",
                "have",
                "any",
                "questions,",
                "please",
                "do",
                "not",
                "hesitate",
                "to",
                "contact",
                "me."
              ],
              "accept": [
                "Should you have any questions, please do not hesitate to contact me.",
                "Should you have any questions, please do not hesitate to contact me."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Should you have any questions, please do not hesitate to contact me.",
              "explain": "Formeller Schlusssatz.\nShould you have any questions, please do not hesitate to contact me."
            },
            {
              "id": "u5l4q5",
              "type": "mc",
              "area": "presentation",
              "kind": "phrase",
              "prompt": "Was bedeutet: „I am happy to walk you through the details, if that would be helpful.“",
              "options": [
                "Ich führe Sie gerne durch die Details, wenn das hilfreich wäre.",
                "Soll ich mit den Hochrisiko-Funden beginnen?",
                "Fragen sind jederzeit willkommen.",
                "Gibt es noch etwas, das wir klären sollten, bevor wir schließen?"
              ],
              "answer": 0,
              "audio": "I am happy to walk you through the details, if that would be helpful.",
              "explain": "Ich führe Sie gerne durch die Details, wenn das hilfreich wäre."
            },
            {
              "id": "u5l4q6",
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
              "explain": "Nach Under no circumstances steht das Hilfsverb vor dem Subjekt.",
              "chapter": "inversion",
              "sourceId": "i05",
              "kind": "grammar"
            }
          ]
        },
        {
          "id": "u5l5",
          "title": "Workshops steuern",
          "emoji": "🧩",
          "items": [
            {
              "id": "u5l5q1",
              "type": "mc",
              "area": "presenting",
              "kind": "vocab",
              "prompt": "Was bedeutet „facilitator“?",
              "options": [
                "Moderatorin / Moderator (einer Sitzung)",
                "Gruppenarbeitsphase, Break-out",
                "die Sitzung abschließen",
                "Fragerunde"
              ],
              "answer": 0,
              "audio": "facilitator",
              "explain": "facilitator = Moderatorin / Moderator (einer Sitzung).",
              "vocabId": "pr12"
            },
            {
              "id": "u5l5q2",
              "type": "listen",
              "area": "presenting",
              "prompt": "Was hörst du?",
              "audio": "Let me wrap up the session with the three agreed actions.",
              "options": [
                "Lassen Sie mich die Sitzung mit den drei vereinbarten Maßnahmen schließen.",
                "Isa übernimmt die Moderation und hält uns an der Agenda.",
                "Nach dem Plenum teilen wir uns in zwei Break-out-Sessions.",
                "Für die Fragerunde am Ende sind fünfzehn Minuten vorgesehen."
              ],
              "answer": 0,
              "explain": "„Let me wrap up the session with the three agreed actions.“ bedeutet: Lassen Sie mich die Sitzung mit den drei vereinbarten Maßnahmen schließen.",
              "vocabId": "pr15"
            },
            {
              "id": "u5l5q3",
              "type": "build",
              "area": "presenting",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Lassen Sie mich die Sitzung mit den drei vereinbarten Maßnahmen schließen.",
              "tokens": [
                "Let",
                "me",
                "wrap",
                "up",
                "the",
                "session",
                "with",
                "the",
                "three",
                "agreed",
                "actions."
              ],
              "accept": [
                "Let me wrap up the session with the three agreed actions.",
                "Let me wrap up the session with the three agreed actions."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "Let me wrap up the session with the three agreed actions.",
              "explain": "Lassen Sie mich die Sitzung mit den drei vereinbarten Maßnahmen schließen.\nLet me wrap up the session with the three agreed actions.",
              "vocabId": "pr15"
            },
            {
              "id": "u5l5q4",
              "type": "mc",
              "area": "presentation",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Would you like me to start with the high-risk findings?“",
              "options": [
                "Soll ich mit den Hochrisiko-Funden beginnen?",
                "Lassen Sie mich mit dem Gesamtergebnis beginnen.",
                "Gibt es in diesem Stadium Fragen?",
                "Gibt es noch etwas, das wir klären sollten, bevor wir schließen?"
              ],
              "answer": 0,
              "audio": "Would you like me to start with the high-risk findings?",
              "explain": "Soll ich mit den Hochrisiko-Funden beginnen?"
            },
            {
              "id": "u5l5q5",
              "type": "match",
              "area": "presenting",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "facilitator",
                  "right": "Moderatorin / Moderator (einer Sitzung)",
                  "audio": "facilitator"
                },
                {
                  "left": "break-out session",
                  "right": "Gruppenarbeitsphase, Break-out",
                  "audio": "break-out session"
                },
                {
                  "left": "to wrap up the session",
                  "right": "die Sitzung abschließen",
                  "audio": "to wrap up the session"
                },
                {
                  "left": "slide deck",
                  "right": "Foliensatz",
                  "audio": "slide deck"
                },
                {
                  "left": "Q&A session",
                  "right": "Fragerunde",
                  "audio": "Q&A session"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u5l5q6",
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
              "explain": "name wird klein geschrieben.",
              "chapter": "formality",
              "sourceId": "f09",
              "kind": "grammar"
            }
          ]
        }
      ]
    },
    {
      "id": "u6",
      "title": "Verhandlung & schwierige Gespräche",
      "titleEn": "Negotiation and difficult news",
      "blurb": "Einwände, Budget, Verzögerungen und einen klaren Abschluss.",
      "emoji": "⚖️",
      "color": "#8A4B2F",
      "lessons": [
        {
          "id": "u6l1",
          "title": "Einwände aufgreifen",
          "emoji": "👂",
          "items": [
            {
              "id": "u6l1q1",
              "type": "mc",
              "area": "negotiation",
              "kind": "vocab",
              "prompt": "Was bedeutet „objection“?",
              "options": [
                "Einwand",
                "einen Einwand aufgreifen",
                "verhandeln",
                "Abwägung, Zielkonflikt"
              ],
              "answer": 0,
              "audio": "objection",
              "explain": "objection = Einwand.",
              "vocabId": "ng06"
            },
            {
              "id": "u6l1q2",
              "type": "listen",
              "area": "negotiation",
              "prompt": "Was hörst du?",
              "audio": "The most common objection is that the budget has already been fixed.",
              "options": [
                "Der häufigste Einwand ist, dass das Budget bereits feststeht.",
                "Wir müssen einen realistischen Zeitplan für den Maßnahmenplan verhandeln.",
                "Lassen Sie mich diesen Einwand direkt aufgreifen: Der zusätzliche Tag verringert späteren Nachaufwand.",
                "Ohne klares Änderungsverfahren droht eine schleichende Umfangserweiterung."
              ],
              "answer": 0,
              "explain": "„The most common objection is that the budget has already been fixed.“ bedeutet: Der häufigste Einwand ist, dass das Budget bereits feststeht.",
              "vocabId": "ng06"
            },
            {
              "id": "u6l1q3",
              "type": "build",
              "area": "negotiate",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich verstehe Ihre Sorge bezüglich des Budgets.",
              "tokens": [
                "I",
                "understand",
                "your",
                "concern",
                "about",
                "the",
                "budget."
              ],
              "accept": [
                "I understand your concern about the budget.",
                "I understand your concern about the budget."
              ],
              "distractors": [
                "informations",
                "responsable",
                "actually"
              ],
              "audio": "I understand your concern about the budget.",
              "explain": "Ich verstehe Ihre Sorge bezüglich des Budgets.\nI understand your concern about the budget."
            },
            {
              "id": "u6l1q4",
              "type": "mc",
              "area": "negotiate",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Let me see how we can address this.“",
              "options": [
                "Lassen Sie mich schauen, wie wir das lösen können.",
                "Wenn wir den Scope reduzieren, können wir im Budget bleiben.",
                "Würde es helfen, mit einer kleineren ersten Phase zu beginnen?",
                "Ist das für Sie ein gangbarer Weg?"
              ],
              "answer": 0,
              "audio": "Let me see how we can address this.",
              "explain": "Lassen Sie mich schauen, wie wir das lösen können."
            },
            {
              "id": "u6l1q5",
              "type": "match",
              "area": "negotiation",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "to negotiate",
                  "right": "verhandeln",
                  "audio": "to negotiate"
                },
                {
                  "left": "trade-off",
                  "right": "Abwägung, Zielkonflikt",
                  "audio": "trade-off"
                },
                {
                  "left": "objection",
                  "right": "Einwand",
                  "audio": "objection"
                },
                {
                  "left": "to address an objection",
                  "right": "einen Einwand aufgreifen",
                  "audio": "to address an objection"
                },
                {
                  "left": "scope creep",
                  "right": "schleichende Umfangserweiterung",
                  "audio": "scope creep"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u6l1q6",
              "type": "build",
              "area": "negotiation",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Wir müssen einen realistischen Zeitplan für den Maßnahmenplan verhandeln.",
              "tokens": [
                "We",
                "need",
                "to",
                "negotiate",
                "a",
                "realistic",
                "timeline",
                "for",
                "the",
                "remediation",
                "plan."
              ],
              "accept": [
                "We need to negotiate a realistic timeline for the remediation plan.",
                "We need to negotiate a realistic timeline for the remediation plan."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "We need to negotiate a realistic timeline for the remediation plan.",
              "explain": "Wir müssen einen realistischen Zeitplan für den Maßnahmenplan verhandeln.\nWe need to negotiate a realistic timeline for the remediation plan.",
              "vocabId": "ng01"
            }
          ]
        },
        {
          "id": "u6l2",
          "title": "Scope und Budget",
          "emoji": "💼",
          "items": [
            {
              "id": "u6l2q1",
              "type": "mc",
              "area": "negotiation",
              "kind": "vocab",
              "prompt": "Was bedeutet „scope creep“?",
              "options": [
                "schleichende Umfangserweiterung",
                "Abwägung, Zielkonflikt",
                "Honorar / Tagessatz",
                "die Kosten rechtfertigen"
              ],
              "answer": 0,
              "audio": "scope creep",
              "explain": "scope creep = schleichende Umfangserweiterung.",
              "vocabId": "ng18"
            },
            {
              "id": "u6l2q2",
              "type": "listen",
              "area": "negotiation",
              "prompt": "Was hörst du?",
              "audio": "Without a clear change-request process, we risk scope creep.",
              "options": [
                "Ohne klares Änderungsverfahren droht eine schleichende Umfangserweiterung.",
                "Es gibt einen Zielkonflikt zwischen Geschwindigkeit und der Tiefe der Bewertung.",
                "Das regulatorische Risiko hilft uns, die Kosten einer gründlichen Bewertung zu rechtfertigen.",
                "Unsere üblichen Zahlungsbedingungen sind dreißig Tage ab Rechnungsdatum."
              ],
              "answer": 0,
              "explain": "„Without a clear change-request process, we risk scope creep.“ bedeutet: Ohne klares Änderungsverfahren droht eine schleichende Umfangserweiterung.",
              "vocabId": "ng18"
            },
            {
              "id": "u6l2q3",
              "type": "build",
              "area": "negotiate",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Wenn wir den Scope reduzieren, können wir im aktuellen Budget bleiben.",
              "tokens": [
                "If",
                "we",
                "reduce",
                "the",
                "scope,",
                "we",
                "can",
                "stay",
                "within",
                "the",
                "current",
                "budget."
              ],
              "accept": [
                "If we reduce the scope, we can stay within the current budget.",
                "If we reduce the scope, we can stay within the current budget."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "If we reduce the scope, we can stay within the current budget.",
              "explain": "Wenn wir den Scope reduzieren, können wir im Budget bleiben.\nIf we reduce the scope, we can stay within the current budget."
            },
            {
              "id": "u6l2q4",
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
              "explain": "First Conditional: if + present simple, will + infinitive. Im if-Satz steht kein will.",
              "chapter": "conditionals",
              "sourceId": "c01",
              "kind": "grammar"
            },
            {
              "id": "u6l2q5",
              "type": "mc",
              "area": "negotiate",
              "kind": "phrase",
              "prompt": "Was bedeutet: „I am afraid we cannot reduce the fee without adjusting the scope.“",
              "options": [
                "Leider können wir das Honorar nicht senken, ohne den Scope anzupassen.",
                "Würde es helfen, mit einer kleineren ersten Phase zu beginnen?",
                "Wenn wir uns darauf einigen, schicke ich heute ein überarbeitetes Angebot.",
                "Ist das für Sie ein gangbarer Weg?"
              ],
              "answer": 0,
              "audio": "I am afraid we cannot reduce the fee without adjusting the scope.",
              "explain": "Leider können wir das Honorar nicht senken, ohne den Scope anzupassen."
            },
            {
              "id": "u6l2q6",
              "type": "build",
              "area": "negotiation",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Das regulatorische Risiko hilft uns, die Kosten einer gründlichen Bewertung zu rechtfertigen.",
              "tokens": [
                "The",
                "regulatory",
                "risk",
                "helps",
                "us",
                "justify",
                "the",
                "cost",
                "of",
                "a",
                "thorough",
                "assessment."
              ],
              "accept": [
                "The regulatory risk helps us justify the cost of a thorough assessment.",
                "The regulatory risk helps us justify the cost of a thorough assessment."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "The regulatory risk helps us justify the cost of a thorough assessment.",
              "explain": "Das regulatorische Risiko hilft uns, die Kosten einer gründlichen Bewertung zu rechtfertigen.\nThe regulatory risk helps us justify the cost of a thorough assessment.",
              "vocabId": "ng24"
            }
          ]
        },
        {
          "id": "u6l3",
          "title": "Verzögerungen mitteilen",
          "emoji": "⚠️",
          "items": [
            {
              "id": "u6l3q1",
              "type": "mc",
              "area": "project",
              "kind": "vocab",
              "prompt": "Was bedeutet „to fall behind schedule“?",
              "options": [
                "in Verzug geraten",
                "im Plan liegen",
                "Einwand",
                "ausstehend, noch offen"
              ],
              "answer": 0,
              "audio": "to fall behind schedule",
              "explain": "to fall behind schedule = in Verzug geraten.",
              "vocabId": "p15"
            },
            {
              "id": "u6l3q2",
              "type": "listen",
              "area": "emailpack",
              "prompt": "Was hörst du?",
              "audio": "Two items are still outstanding from the document request.",
              "options": [
                "Zwei Punkte aus der Dokumentenanforderung sind noch offen.",
                "Wir sind in Verzug geraten, weil die Nachweise spät eingetroffen sind.",
                "Wir liegen im Plan, den Berichtsentwurf nächste Woche zu liefern.",
                "In der Zwischenzeit sammeln Sie bitte die fehlenden Nachweise weiter."
              ],
              "answer": 0,
              "explain": "„Two items are still outstanding from the document request.“ bedeutet: Zwei Punkte aus der Dokumentenanforderung sind noch offen.",
              "vocabId": "em17"
            },
            {
              "id": "u6l3q3",
              "type": "build",
              "area": "badnews",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich wollte Sie so früh wie möglich informieren.",
              "tokens": [
                "I",
                "wanted",
                "to",
                "let",
                "you",
                "know",
                "as",
                "early",
                "as",
                "possible."
              ],
              "accept": [
                "I wanted to let you know as early as possible.",
                "I wanted to let you know as early as possible."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I wanted to let you know as early as possible.",
              "explain": "Ich wollte Sie so früh wie möglich informieren.\nI wanted to let you know as early as possible."
            },
            {
              "id": "u6l3q4",
              "type": "mc",
              "area": "badnews",
              "kind": "phrase",
              "prompt": "Was bedeutet: „I am sorry to have to inform you that the draft will be delayed.“",
              "options": [
                "Es tut mir leid, Ihnen mitteilen zu müssen, dass…",
                "Leider haben wir die restlichen Logdateien noch nicht erhalten.",
                "Ich bitte um Entschuldigung für die Unannehmlichkeiten.",
                "Vielen Dank für Ihr Verständnis."
              ],
              "answer": 0,
              "audio": "I am sorry to have to inform you that the draft will be delayed.",
              "explain": "Es tut mir leid, Ihnen mitteilen zu müssen, dass…"
            },
            {
              "id": "u6l3q5",
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
              "explain": "I look forward to your feedback ist idiomatisch. I wait for klingt unnatürlich.",
              "chapter": "formality",
              "sourceId": "f10",
              "kind": "grammar"
            },
            {
              "id": "u6l3q6",
              "type": "build",
              "area": "badnews",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Ich bitte um Entschuldigung für die Unannehmlichkeiten.",
              "tokens": [
                "I",
                "apologise",
                "for",
                "the",
                "inconvenience",
                "this",
                "may",
                "cause."
              ],
              "accept": [
                "I apologise for the inconvenience this may cause.",
                "I apologise for the inconvenience this may cause."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "I apologise for the inconvenience this may cause.",
              "explain": "Ich bitte um Entschuldigung für die Unannehmlichkeiten.\nI apologise for the inconvenience this may cause."
            }
          ]
        },
        {
          "id": "u6l4",
          "title": "Diplomatie",
          "emoji": "🕊️",
          "items": [
            {
              "id": "u6l4q1",
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
              "explain": "Please find attached… ist eine etablierte, formelle Wendung.",
              "chapter": "formality",
              "sourceId": "f05",
              "kind": "grammar"
            },
            {
              "id": "u6l4q2",
              "type": "gap",
              "area": "formality",
              "prompt": "I am writing to ___ a kick-off meeting for the CRA gap analysis.",
              "accept": [
                "propose",
                "suggest"
              ],
              "options": [
                "propose",
                "suggest",
                "proposing",
                "proposed"
              ],
              "explain": "I am writing to… + Infinitiv: propose oder suggest.",
              "placeholder": "Antwort wählen",
              "chapter": "formality",
              "sourceId": "f08",
              "kind": "grammar"
            },
            {
              "id": "u6l4q3",
              "type": "mc",
              "area": "passive",
              "prompt": "Welche Formulierung klingt in einem Auditbericht am professionellsten?",
              "options": [
                "You forgot the logs.",
                "The logs were not available at the time of the review.",
                "Somebody obviously lost the logs.",
                "The logs are your problem."
              ],
              "answer": 1,
              "explain": "Unpersönlich, sachlich, ohne Schuldzuweisung: were not available at the time of the review.",
              "chapter": "passive",
              "sourceId": "pv14",
              "kind": "grammar"
            },
            {
              "id": "u6l4q4",
              "type": "build",
              "area": "audit",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Das ist in diesem Stadium nicht ungewöhnlich, sollte aber angegangen werden.",
              "tokens": [
                "This",
                "is",
                "not",
                "unusual",
                "at",
                "this",
                "stage,",
                "but",
                "it",
                "does",
                "need",
                "to",
                "be",
                "addressed."
              ],
              "accept": [
                "This is not unusual at this stage, but it does need to be addressed.",
                "This is not unusual at this stage, but it does need to be addressed."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "This is not unusual at this stage, but it does need to be addressed.",
              "explain": "Das ist in diesem Stadium nicht ungewöhnlich, sollte aber angegangen werden.\nThis is not unusual at this stage, but it does need to be addressed."
            },
            {
              "id": "u6l4q5",
              "type": "mc",
              "area": "badnews",
              "kind": "phrase",
              "prompt": "Was bedeutet: „I apologise for the inconvenience this may cause.“",
              "options": [
                "Ich bitte um Entschuldigung für die Unannehmlichkeiten.",
                "Ich wollte Sie so früh wie möglich informieren.",
                "Vielen Dank für Ihr Verständnis.",
                "Ich verstehe Ihre Sorge bezüglich des Budgets."
              ],
              "answer": 0,
              "audio": "I apologise for the inconvenience this may cause.",
              "explain": "Ich bitte um Entschuldigung für die Unannehmlichkeiten."
            },
            {
              "id": "u6l4q6",
              "type": "listen",
              "area": "negotiation",
              "prompt": "Was hörst du?",
              "audio": "Let me address that objection directly: the additional day reduces later rework.",
              "options": [
                "Lassen Sie mich diesen Einwand direkt aufgreifen: Der zusätzliche Tag verringert späteren Nachaufwand.",
                "Der häufigste Einwand ist, dass das Budget bereits feststeht.",
                "Wir müssen einen realistischen Zeitplan für den Maßnahmenplan verhandeln.",
                "Es gibt einen Zielkonflikt zwischen Geschwindigkeit und der Tiefe der Bewertung."
              ],
              "answer": 0,
              "explain": "„Let me address that objection directly: the additional day reduces later rework.“ bedeutet: Lassen Sie mich diesen Einwand direkt aufgreifen: Der zusätzliche Tag verringert späteren Nachaufwand.",
              "vocabId": "ng07"
            }
          ]
        },
        {
          "id": "u6l5",
          "title": "Den Abschluss sichern",
          "emoji": "✅",
          "items": [
            {
              "id": "u6l5q1",
              "type": "mc",
              "area": "negotiation",
              "kind": "vocab",
              "prompt": "Was bedeutet „to sign an agreement“?",
              "options": [
                "eine Vereinbarung unterzeichnen",
                "Angebot, Angebotsschreiben",
                "Zahlungsbedingungen",
                "eine Einigung erzielen"
              ],
              "answer": 0,
              "audio": "to sign an agreement",
              "explain": "to sign an agreement = eine Vereinbarung unterzeichnen.",
              "vocabId": "ng14"
            },
            {
              "id": "u6l5q2",
              "type": "listen",
              "area": "negotiation",
              "prompt": "Was hörst du?",
              "audio": "Both parties need to sign the agreement before interviews start.",
              "options": [
                "Beide Seiten müssen die Vereinbarung unterzeichnen, bevor die Interviews beginnen.",
                "Ich sende ein überarbeitetes Angebot, das den reduzierten Umfang abbildet.",
                "Unsere üblichen Zahlungsbedingungen sind dreißig Tage ab Rechnungsdatum.",
                "Wir müssen einen realistischen Zeitplan für den Maßnahmenplan verhandeln."
              ],
              "answer": 0,
              "explain": "„Both parties need to sign the agreement before interviews start.“ bedeutet: Beide Seiten müssen die Vereinbarung unterzeichnen, bevor die Interviews beginnen.",
              "vocabId": "ng14"
            },
            {
              "id": "u6l5q3",
              "type": "build",
              "area": "negotiate",
              "prompt": "Bilde den englischen Satz.",
              "promptDe": "Wenn wir uns darauf einigen, schicke ich heute ein überarbeitetes Angebot.",
              "tokens": [
                "If",
                "we",
                "agree",
                "on",
                "this,",
                "I",
                "will",
                "send",
                "a",
                "revised",
                "proposal",
                "today."
              ],
              "accept": [
                "If we agree on this, I will send a revised proposal today.",
                "If we agree on this, I will send a revised proposal today."
              ],
              "distractors": [
                "about",
                "informations",
                "responsable"
              ],
              "audio": "If we agree on this, I will send a revised proposal today.",
              "explain": "Wenn wir uns darauf einigen, schicke ich heute ein überarbeitetes Angebot.\nIf we agree on this, I will send a revised proposal today."
            },
            {
              "id": "u6l5q4",
              "type": "mc",
              "area": "negotiate",
              "kind": "phrase",
              "prompt": "Was bedeutet: „Does this work for you as a way forward?“",
              "options": [
                "Ist das für Sie ein gangbarer Weg?",
                "Würde es helfen, mit einer kleineren ersten Phase zu beginnen?",
                "Lassen Sie mich schauen, wie wir das lösen können.",
                "Vielen Dank für Ihr Verständnis."
              ],
              "answer": 0,
              "audio": "Does this work for you as a way forward?",
              "explain": "Ist das für Sie ein gangbarer Weg?"
            },
            {
              "id": "u6l5q5",
              "type": "match",
              "area": "negotiation",
              "prompt": "Verbinde die Wortpaare.",
              "pairs": [
                {
                  "left": "to negotiate",
                  "right": "verhandeln",
                  "audio": "to negotiate"
                },
                {
                  "left": "to sign an agreement",
                  "right": "eine Vereinbarung unterzeichnen",
                  "audio": "to sign an agreement"
                },
                {
                  "left": "quote / proposal",
                  "right": "Angebot, Angebotsschreiben",
                  "audio": "quote / proposal"
                },
                {
                  "left": "scope creep",
                  "right": "schleichende Umfangserweiterung",
                  "audio": "scope creep"
                },
                {
                  "left": "payment terms",
                  "right": "Zahlungsbedingungen",
                  "audio": "payment terms"
                }
              ],
              "explain": "Jedes Wort hat genau eine passende Bedeutung."
            },
            {
              "id": "u6l5q6",
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
              "explain": "Nach as soon as, when oder after steht Present Simple, nicht will.",
              "chapter": "conditionals",
              "sourceId": "c07",
              "kind": "grammar"
            }
          ]
        }
      ]
    }
  ]
};
