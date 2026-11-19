/* Interactive client chats. Option rows: [text, score 0–3, meters "KDS" (Klarheit, Diplomatie, Souveränität, 0–3), client reaction, coaching] */
const CHAT_SCENARIOS = [
  {
    id: "kickoff", title: "CRA Gap Analysis Kick-off", emoji: "🚀", level: "B2", channel: "teams",
    goal: "Kick-off vereinbaren, Umfang erklären, Vorbereitung anfordern.",
    persona: { name: "John Miller", role: "Head of Product Security", company: "Nordlicht Devices", initials: "JM", color: "#4F46E5", voice: "male" },
    turns: [
      { client: "Hi Isa, thanks for reaching out. Before we commit to a kick-off, what exactly will the CRA gap analysis cover?", options: [
        ["Great question. We'll assess your products against the essential requirements in Annex I, review your vulnerability handling process and give you a prioritised roadmap.", 3, "333", "That's very clear, thank you. That's exactly what our management wants to see.", "Drei klare Bausteine + Bezug auf Annex I – kompetent und greifbar."],
        ["We will look at everything about the CRA and tell you what is missing.", 1, "211", "Everything? Could you be a bit more specific? I need to explain this internally.", "Zu vage. Nenne konkrete Bausteine: Annex I, Prozesse, Roadmap."],
        ["The CRA is very complex, so it is difficult to say now.", 0, "101", "Hmm, that doesn't fill me with confidence, to be honest.", "Unsicherheit ohne Struktur schwächt dich. Gib auch bei Komplexität einen klaren Rahmen."]
      ] },
      { client: "Sounds good. Who would you need from our side for the first session?", options: [
        ["Ideally, the product owner, someone from R&D and the person responsible for vulnerability handling. Ninety minutes should be enough.", 3, "332", "Perfect, I'll make sure all three are there.", "Rollen + Dauer – der Kunde kann sofort planen. Und: responsible richtig geschrieben!"],
        ["Please bring all the people who know the product.", 1, "221", "That could be quite a lot of people. Can you narrow it down?", "Konkrete Rollen wirken vorbereitet."],
        ["It doesn't matter, you can decide.", 0, "110", "Oh, okay. I was hoping for a recommendation from you as the expert.", "Als Beraterin führst du. Gib eine Empfehlung."]
      ] },
      { client: "Great. Would next week work for you?", options: [
        ["Absolutely. Would Tuesday at 10:00 or Thursday at 14:00 suit you?", 3, "333", "Thursday at 14:00 works perfectly.", "Zwei konkrete Optionen sparen eine ganze Mail-Runde."],
        ["Yes, when do you have time?", 1, "221", "Let me check… maybe Wednesday or Thursday? I'll get back to you.", "Offene Fragen verlängern die Abstimmung. Biete Slots an."],
        ["Yes, we can make a meeting next week.", 0, "111", "Sure… which day did you have in mind?", "„make a meeting“ ist ein Germanismus → schedule a meeting. Und Slots nennen."]
      ] },
      { client: "One more thing – our CEO keeps asking whether the CRA really applies to us. What should I tell him?", options: [
        ["If you place products with digital elements on the EU market, it almost certainly does. We'll confirm the exact classification during the gap analysis.", 3, "323", "That's a helpful way to put it. I'll pass that on.", "If + present simple (kein will!) + klare Aussage + nächster Schritt."],
        ["If you will sell products in the EU, the CRA will apply.", 1, "212", "Okay, I think I understand.", "Inhaltlich ok, aber: kein will im if-Satz → If you sell …"],
        ["Tell him he must read the regulation.", 0, "101", "I'm not sure he'll have time for eighty pages…", "Nicht abwimmeln – eine einfache Kernaussage liefern."]
      ] },
      { client: "Thanks, Isa. Anything you need from me before Thursday?", options: [
        ["It would be great if you could share your product list and any existing security documentation by Wednesday. I'll send the agenda tomorrow.", 3, "333", "Will do. Looking forward to Thursday!", "Höfliche Bitte + Frist + eigene Zusage = starker Abschluss."],
        ["Please send me all documents you have.", 1, "221", "All of them? That might be a lot. Which ones matter most?", "Präzisieren und Frist setzen."],
        ["No, nothing. See you.", 0, "111", "Oh, okay. See you Thursday then.", "Verpasste Chance: Vorbereitung anfordern spart Workshop-Zeit."]
      ] }
    ]
  },
  {
    id: "scope", title: "Scope Creep Pushback", emoji: "🧱", level: "B2+", channel: "teams",
    goal: "Freundlich Nein sagen und einen Change Request anbieten.",
    persona: { name: "Sarah Collins", role: "Project Manager", company: "Brightwave Systems", initials: "SC", color: "#0EA5E9", voice: "female" },
    turns: [
      { client: "Hi Isa, quick one: could your team also review our cloud backend while you're at it? It shouldn't take long.", options: [
        ["Thanks for thinking of us. The cloud backend falls outside the agreed scope, but I'd be happy to put together a short change request.", 3, "333", "Fair enough. How long would that take you?", "Wertschätzung + Grenze + Lösung: professionelles Scope Management."],
        ["This is not in the contract, so we cannot do it.", 1, "312", "Oh. I thought you'd be a bit more flexible.", "Inhaltlich richtig, aber zu hart. Biete einen Weg an."],
        ["Sure, no problem, we'll do it.", 0, "120", "Brilliant, thanks! I'll send you access today.", "Gefährlich: unbezahlter Mehraufwand und Risiko für den Zeitplan."]
      ] },
      { client: "Could you give me a ballpark figure for the extra effort?", options: [
        ["Based on similar projects, it would be around three to four days. I'll confirm the exact figure once we have the architecture diagrams.", 3, "323", "That's helpful. I can work with that.", "Ballpark figure → Spanne + Bedingung für die genaue Zahl."],
        ["Maybe some days, I don't know exactly.", 1, "221", "I'd need something a bit more concrete for my budget.", "Auch eine Schätzung braucht eine Zahl."],
        ["It is impossible to say.", 0, "101", "Then I'm not sure how I can get this approved.", "Blockiert die Kundin. Eine grobe Spanne ist fast immer möglich."]
      ] },
      { client: "Hmm, that's more than I hoped. Can't you just squeeze it in?", options: [
        ["I understand the pressure. If we squeezed it in, it would come at the expense of the CRA assessment quality – and that's what your audit depends on.", 3, "233", "Good point. I definitely don't want to compromise the audit.", "Verständnis + Trade-off sichtbar (at the expense of). Second Conditional korrekt."],
        ["No, we can't. Sorry.", 1, "311", "Okay… that's a bit disappointing.", "Klar, aber ohne Begründung wirkt es stur."],
        ["Okay, maybe we can try it somehow.", 0, "110", "Great, so it's included then?", "Unklare Zusage = späterer Konflikt."]
      ] },
      { client: "Alright. What would you suggest?", options: [
        ["Can I suggest a compromise? We start with a one-day architecture review now and decide on the full backend assessment after the CRA report.", 3, "333", "I like that. Please send me the change request.", "Kompromissformel + Phasen – lösungsorientiert."],
        ["We can do everything later.", 1, "221", "Later when, exactly?", "Zu vage – konkreten Vorschlag mit Zeitpunkt machen."],
        ["You decide what you want.", 0, "111", "I was hoping for your advice on this.", "Die Kundin will deine Empfehlung – gib sie."]
      ] }
    ]
  },
  {
    id: "board", title: "Board Briefing: Annex III Criticality", emoji: "🏛️", level: "C1", channel: "teams",
    goal: "Dem CFO in fünf Minuten Impact, Einstufung und Budgetbedarf erklären.",
    persona: { name: "Richard Hale", role: "Chief Financial Officer", company: "Kestrel Industrial", initials: "RH", color: "#0F172A", voice: "male" },
    turns: [
      { client: "Isa, I've got five minutes. In plain English: why should the board care about the CRA?", options: [
        ["In a nutshell: without CRA compliance, we cannot sell our connected products in the EU from December 2027, and fines can reach fifteen million euros or two and a half percent of global turnover.", 3, "333", "That's a number the board will understand. Go on.", "Executive-Stil: Kernaussage zuerst, dann Zahlen."],
        ["The CRA is a new EU law with many security requirements for products.", 1, "221", "Right, but why does that matter to us financially?", "Fürs Board fehlt die Konsequenz: Marktzugang und Bußgelder."],
        ["It is very complicated, there are many annexes and articles.", 0, "101", "I don't need the details, I need the impact.", "Nicht mit Komplexität starten – mit Business Impact."]
      ] },
      { client: "Our gateway product – is it 'important' or 'critical'? I keep hearing both.", options: [
        ["Based on its core functionality, it is likely to be an important product of class one under Annex III. That means a stricter conformity assessment, but not the critical category.", 3, "323", "Good, that's clearer than anything I've heard so far.", "Vorsichtig (is likely to) und präzise (Annex III, class I)."],
        ["I think it is critical, maybe.", 1, "211", "'Maybe' isn't something I can take to the board.", "Begründete Einschätzung statt Vermutung."],
        ["I can't say anything before the audit.", 0, "101", "Surely you have an initial view?", "Eine vorläufige Einschätzung mit Vorbehalt ist professionell."]
      ] },
      { client: "What happens if we're late?", options: [
        ["Had we started a year earlier, we would have more buffer. If we start now, we can still meet the deadline – provided the budget is approved this quarter.", 3, "333", "Understood. So the decision is really on us.", "Inversion (Had we started …) + provided that. Sehr C1."],
        ["If we will be late, we cannot sell anymore.", 1, "212", "That sounds dramatic. Is it really that binary?", "Kein will im if-Satz. Und: einen Lösungsweg zeigen."],
        ["We will not be late, don't worry.", 0, "101", "I'd prefer facts over reassurance.", "Beruhigen ohne Fakten wirkt beim CFO unglaubwürdig."]
      ] },
      { client: "Give me one number I can take to the board.", options: [
        ["We estimate around 180 person-days across three products, with the bulk in the first two quarters.", 3, "333", "That's concrete. I can work with that.", "Eine Zahl + Verteilung – genau das will ein CFO."],
        ["It's difficult, but it will be a lot of work.", 1, "221", "'A lot' isn't a number, Isa.", "Ein CFO braucht eine Zahl, auch als Schätzung."],
        ["The costs will become clear later.", 0, "111", "Later is too late for this budget cycle.", "Ausweichende Antwort – liefere eine Schätzung."]
      ] },
      { client: "Last question: what do you need from me?", options: [
        ["A decision on the budget by the end of the month and a named executive sponsor. With both in place, we can hit the ground running in January.", 3, "333", "Fair. I'll put it on the agenda for next week.", "Konkrete Bitte + Frist + Idiom (hit the ground running)."],
        ["Your support would be nice.", 1, "221", "Support in what form, specifically?", "Konkret sagen, was du brauchst."],
        ["Nothing, we will manage.", 0, "101", "Then I'm not sure why we're having this meeting.", "Board-Briefings enden immer mit einer klaren Bitte."]
      ] }
    ]
  },
  {
    id: "audit", title: "Defending an Audit Finding", emoji: "🔍", level: "C1", channel: "teams",
    goal: "Ein Finding sachlich verteidigen, ohne die Beziehung zu beschädigen.",
    persona: { name: "Emma Clarke", role: "Head of Engineering", company: "Vireo Medical", initials: "EC", color: "#10B981", voice: "female" },
    turns: [
      { client: "Honestly, Isa, I don't agree with finding three. Our update mechanism is perfectly secure.", options: [
        ["I hear your concern. Let me explain our reasoning: the updates are signed, but the signature is not verified on the device. That's what Annex I requires.", 3, "233", "Hmm. I wasn't aware the device skips the check.", "Aktives Zuhören + Fakten statt Meinung."],
        ["No, your update mechanism is not secure.", 1, "311", "That's a strong statement. On what basis?", "Direkter Widerspruch erzeugt Abwehr. Erst anerkennen, dann begründen."],
        ["Okay, maybe we can remove the finding.", 0, "120", "Great, please do.", "Findings nie ohne Evidenz zurückziehen."]
      ] },
      { client: "But nobody has ever exploited it.", options: [
        ["That's a fair point; however, the CRA requires products to be secure by design – the absence of an attack so far doesn't reduce the risk.", 3, "333", "Okay, I see the regulatory angle.", "That's a fair point; however … – anerkennen und Position halten."],
        ["That is not important.", 1, "211", "I think it's quite important, actually.", "Abwertend. Würdige das Argument zuerst."],
        ["Maybe you are right.", 0, "101", "So the finding isn't valid?", "Zu schnell nachgegeben."]
      ] },
      { client: "Could we at least downgrade it from high to medium?", options: [
        ["I'm afraid that won't be possible based on the current evidence. Should you implement verification on the device, we would of course re-rate it.", 3, "323", "That's fair. We'll look into it.", "I'm afraid … + Inversion mit Should + Weg nach vorn."],
        ["No, the rating stays.", 1, "311", "Fine, but I'm not happy about it.", "Korrekt, aber ohne Perspektive wirkt es hart."],
        ["Okay, medium is fine.", 0, "120", "Thanks, that helps us a lot.", "Bewertung ohne neue Fakten zu ändern macht das Audit angreifbar."]
      ] },
      { client: "What's a realistic way to fix it?", options: [
        ["A quick win would be enabling signature checks in the bootloader. We could draw up a short remediation plan together this week.", 3, "333", "Sounds good. Let's book an hour on Thursday.", "quick win + draw up + gemeinsamer nächster Schritt."],
        ["You have to change the update process.", 1, "221", "Changing it how, exactly?", "Zu allgemein – nenne die konkrete Maßnahme."],
        ["This is your job, not ours.", 0, "111", "Wow. Okay.", "Beziehung beschädigt. Unterstützung gehört zur Beratung."]
      ] }
    ]
  },
  {
    id: "delay", title: "Managing a Delayed Deliverable", emoji: "⏳", level: "B2+", channel: "mail",
    goal: "Verzögerung transparent erklären und Vertrauen zurückgewinnen.",
    persona: { name: "Mark Davies", role: "Programme Director", company: "Halden Logistics", initials: "MD", color: "#F59E0B", voice: "male" },
    turns: [
      { client: "Isa, where is the draft report? It was due yesterday.", options: [
        ["Thank you for your patience, Mark. To be completely transparent, the report is delayed because two log exports reached us later than planned. You will have the draft by Thursday noon.", 3, "333", "Thanks for being upfront. Thursday noon works.", "Transparent + Grund ohne Schuldzuweisung + konkreter neuer Termin."],
        ["Sorry, it's late. It comes soon.", 1, "221", "'Soon' isn't a date, Isa.", "Immer einen konkreten Termin nennen. It will be ready … statt „It comes“."],
        ["It's late because your team sent the logs too late.", 0, "101", "I don't appreciate the blame game.", "Fakten ja, Schuld nein. Neutral formulieren."]
      ] },
      { client: "This puts my steering committee on Friday at risk.", options: [
        ["I understand the urgency. I can send you a one-page executive summary by Wednesday evening, so you are well prepared for Friday.", 3, "333", "That would really help. Thank you.", "Dringlichkeit anerkennen + Lösung für sein eigentliches Problem."],
        ["I'm sorry, but I can't change it.", 1, "211", "So I go into the committee empty-handed?", "Denk an sein Ziel und biete eine Teillösung an."],
        ["Maybe you can move the committee.", 0, "111", "That's not really an option.", "Das Problem zurückzuschieben wirkt unprofessionell."]
      ] },
      { client: "How do I know this won't happen again?", options: [
        ["Fair question. Going forward, we'll flag up any dependency risk at least three days before a deadline and send a short weekly status update.", 3, "333", "That's exactly what I needed to hear.", "flag up + konkrete Prozessverbesserung = Vertrauen."],
        ["It will not happen again, I promise.", 1, "212", "I'd rather see a process than a promise.", "Versprechen ohne Maßnahme überzeugt nicht."],
        ["That depends on your team.", 0, "110", "Again, that's not helpful.", "Verantwortung übernehmen, nicht abschieben."]
      ] },
      { client: "Okay. Please confirm the new timeline in writing.", options: [
        ["Of course. I'll send you a short email today confirming the executive summary on Wednesday and the full draft on Thursday at noon.", 3, "333", "Perfect, thanks Isa.", "Klar, verbindlich, beide Termine wiederholt."],
        ["Okay, I write you later.", 1, "221", "Thanks, I'll look out for it.", "Besser: I'll send you an email today – mit Inhalt."],
        ["Is that really necessary?", 0, "111", "Yes, it is.", "Schriftliche Bestätigung ist Standard."]
      ] }
    ]
  },
  {
    id: "budget", title: "Day-Rate & Budget Negotiation", emoji: "💶", level: "C1", channel: "teams",
    goal: "Den Tagessatz verteidigen und über Umfang statt Preis verhandeln.",
    persona: { name: "Laura Bennett", role: "Procurement Lead", company: "Aster Energy", initials: "LB", color: "#8B5CF6", voice: "female" },
    turns: [
      { client: "Isa, your day rate is fifteen percent above the other offers. Can you match them?", options: [
        ["I appreciate you being upfront. Our rate reflects specialist CRA expertise, which typically reduces the total number of days needed.", 3, "323", "Interesting. Can you back that up?", "Wert statt Preis: reflects + Nutzen in Tagen."],
        ["Our price is high, but we are very good.", 1, "221", "Everyone says that.", "Aussage ohne Beleg – nenne konkreten Nutzen."],
        ["Okay, we can reduce it by fifteen percent.", 0, "120", "Great! That was easy.", "Sofortiger Nachlass ohne Gegenleistung schwächt dich."]
      ] },
      { client: "Can you back that up with anything concrete?", options: [
        ["Certainly. In our last two CRA projects, we completed the gap analysis in twelve days instead of the eighteen days initially quoted by others.", 3, "333", "That's a compelling comparison.", "Konkrete Zahlen untermauern das Argument."],
        ["Our clients are always happy.", 1, "211", "That's not really data, though.", "Belege mit Zahlen oder Referenzen."],
        ["You have to trust me.", 0, "101", "In procurement, trust needs evidence.", "Im Einkauf zählen Fakten."]
      ] },
      { client: "Still, I need some movement on price.", options: [
        ["Is there any flexibility on the scope? If we start with three products instead of five, the total budget will be about thirty percent lower.", 3, "333", "That could work for our first phase.", "Hebel Umfang statt Tagessatz. If + present, will – sauberer First Conditional."],
        ["Maybe five percent, but not more.", 1, "221", "Can we meet at ten?", "Nachlass ohne Gegenleistung lädt zum Nachverhandeln ein."],
        ["No, the price is fixed, sorry.", 0, "110", "Then we may have to go with another provider.", "Starre Haltung ohne Alternative riskiert den Auftrag."]
      ] },
      { client: "What if we committed to a twelve-month framework agreement?", options: [
        ["In that case, we could offer a seven percent volume discount, provided the minimum volume is forty days.", 3, "333", "That sounds reasonable. Let me run it past my manager.", "Gegenleistung für Nachlass – provided that setzt die Bedingung."],
        ["That would be nice, we can give some discount.", 1, "221", "How much, roughly?", "Zahl und Bedingung nennen."],
        ["Then we give you twenty percent.", 0, "110", "Wonderful, I'll take it!", "Zu großzügig, ohne Bedingungen."]
      ] },
      { client: "Great. Can you send me a revised offer?", options: [
        ["Of course. I'll send the revised offer by Friday, including both options: the phased scope and the framework agreement.", 3, "333", "Perfect. Looking forward to it.", "Klare Zusage mit Frist und Inhalt."],
        ["Yes, I send it soon.", 1, "221", "By when, roughly?", "I'll send it by Friday – Frist + richtige Zeitform."],
        ["Is it necessary? We discussed everything.", 0, "111", "Procurement needs it in writing.", "Schriftliche Angebote sind Pflicht."]
      ] }
    ]
  },
  {
    id: "smalltalk", title: "Executive Small Talk Before a Call", emoji: "☕", level: "B2", channel: "teams",
    goal: "Locker ins Gespräch kommen und elegant ins Business überleiten.",
    persona: { name: "James Porter", role: "Chief Technology Officer", company: "Corvid Robotics", initials: "JP", color: "#EC4899", voice: "male" },
    turns: [
      { client: "Hi Isa! Good to see you. How has your week been so far?", options: [
        ["Hi James, great to see you too! Busy, but in a good way – we kicked off two new CRA projects. How about you?", 3, "333", "Ha, same here. It's been non-stop since Monday.", "Positiv + kleines Detail + Gegenfrage – perfekter Small Talk."],
        ["Good, thanks.", 1, "221", "Great… shall we wait for the others?", "Zu knapp – das Gespräch endet sofort."],
        ["Very stressful, I have too much work and no time.", 0, "111", "Oh… sorry to hear that.", "Small Talk bleibt leicht und positiv."]
      ] },
      { client: "Did you have to travel far today?", options: [
        ["Not at all, I'm working from home today, which makes life much easier. Are you in the office?", 3, "333", "Yes, the whole team is in today – big planning day.", "Natürlich und offen – hält das Gespräch am Laufen."],
        ["No, I am at home since the morning.", 1, "211", "Ah, nice.", "since + Zeitpunkt → I've been at home since this morning."],
        ["Why do you ask?", 0, "101", "Oh, just making conversation!", "Small-Talk-Fragen einfach freundlich beantworten."]
      ] },
      { client: "Any plans for the weekend?", options: [
        ["Nothing too exciting – probably a long walk and catching up on some reading. What about you?", 3, "333", "Taking the kids to a football match, actually.", "Leicht, persönlich, nicht zu privat – plus Gegenfrage."],
        ["I don't know yet.", 1, "221", "Fair enough.", "Gib ein kleines Detail – das reicht."],
        ["I will maybe make a party.", 0, "111", "Oh, nice! What kind of party?", "Germanismus: „make a party“ → have / throw a party."]
      ] },
      { client: "Right, I think everyone's here. Shall we get started?", options: [
        ["Absolutely. Thanks, everyone, for joining. Let me briefly run through the agenda.", 3, "333", "Great, over to you.", "Fließender Übergang vom Small Talk ins Business."],
        ["Yes, we start.", 1, "221", "Okay… go ahead.", "Let's get started / Let me run through … klingt natürlicher."],
        ["Wait, I need five minutes to prepare.", 0, "110", "Oh, okay… we'll wait.", "Vorbereitung vor dem Call erledigen."]
      ] }
    ]
  },
  {
    id: "incident", title: "Security Incident Status Update", emoji: "🚨", level: "C1", channel: "teams",
    goal: "Ruhiges Lagebild geben, CRA-Meldepflicht und Kommunikation steuern.",
    persona: { name: "Olivia Grant", role: "Chief Information Security Officer", company: "Nordlicht Devices", initials: "OG", color: "#EF4444", voice: "female" },
    turns: [
      { client: "Isa, I've just heard about the suspicious firmware behaviour. What do we know so far?", options: [
        ["Here's what we know: at 09:40 we detected unusual outbound traffic from two devices. We've isolated them and are investigating the root cause.", 3, "333", "Good. Thanks for the quick summary.", "Fakten, Uhrzeit, Maßnahme, nächster Schritt – Lagebild in zwei Sätzen."],
        ["There is a problem with some devices, we look at it.", 1, "211", "I need more detail than that.", "Konkret werden – und: we are looking into it."],
        ["I don't know anything yet.", 0, "101", "That's worrying.", "Auch frühe Lagebilder haben Fakten."]
      ] },
      { client: "Is this an actively exploited vulnerability under the CRA?", options: [
        ["We can't confirm that yet. If we confirm exploitation, we will send the early warning within 24 hours, as the CRA requires.", 3, "323", "Okay, let's keep that clock in mind.", "If + present simple (kein will) + korrekte CRA-Frist."],
        ["If we will confirm it, we will send a report.", 1, "212", "Which report, and when?", "Kein will im if-Satz – und die Frist nennen."],
        ["No, I'm sure it's not.", 0, "110", "How can you be sure at this stage?", "Keine voreiligen Aussagen in einem Incident."]
      ] },
      { client: "Who else should we inform right now?", options: [
        ["I'd suggest informing the product owner and legal now, and keeping the board in the loop with a short status update every four hours.", 3, "333", "Agreed. Please set that up.", "Rollen + Frequenz – keep in the loop richtig eingesetzt."],
        ["Maybe everybody.", 1, "221", "That would cause panic.", "Gezielt kommunizieren – Rollen nennen."],
        ["Nobody yet, we wait.", 0, "111", "Waiting isn't a plan.", "Stakeholder früh informieren gehört zur Incident Response."]
      ] },
      { client: "What's the immediate risk to customers?", options: [
        ["The residual risk is limited: the affected devices are isolated, and no customer data has been accessed, as far as we can tell.", 3, "323", "That's reassuring, thank you.", "residual risk + Vorbehalt (as far as we can tell)."],
        ["No risk at all.", 1, "211", "Are you absolutely certain?", "Absolute Aussagen vermeiden."],
        ["It is very dangerous for everyone.", 0, "101", "That's alarming – what exactly is dangerous?", "Dramatisieren ohne Fakten verunsichert."]
      ] },
      { client: "When will you send the next update?", options: [
        ["I'll send a written status update at 14:00 at the latest, or earlier if anything changes.", 3, "333", "Perfect. Thanks, Isa – good work.", "Verbindliche Uhrzeit + Vorbehalt für Änderungen."],
        ["Later today.", 1, "221", "Could you be more specific?", "Uhrzeit nennen: by 14:00 at the latest."],
        ["When we know more.", 0, "111", "I need a fixed time for the board.", "In Incidents immer feste Update-Zeiten."]
      ] }
    ]
  }
];
