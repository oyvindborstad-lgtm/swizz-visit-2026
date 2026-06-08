/* ============================================================
   Metode-demo — DEUTSCH.  window.MD_TX.de
   ============================================================ */
window.MD_TX = window.MD_TX || {};
window.MD_TX.de = {

  circle: {
    hub: {
      short: "Das Projekt", csub: "Kollaborationsleitung", title: "Kollaborationsleitung — der Kern",
      role: "Das Projekt im Zentrum · die Nabe des Rades",
      ansvar: ["Legt gemeinsame Ziele, Richtung und Takt für das ganze Rad fest",
        "Leitet die Zusammenarbeit und treibt die Lean-Prozesse ab Tag eins",
        "Verantwortet die übergeordnete Besprechungsstruktur und den Entscheidungsrhythmus",
        "Sorgt dafür, dass alle Gruppen in dieselbe Richtung ziehen, zum selben Ziel",
        "Beseitigt Hindernisse, die die Gruppen nicht selbst lösen können",
        "Baut eine Kultur aus Vertrauen, Offenheit und kontinuierlicher Verbesserung auf"],
      samspill: "Das Projekt steht im Zentrum, und im Kern sitzt die Kollaborationsleitung. Alles andere ordnet sich darum herum an — nicht als Hierarchie, sondern als Rad, in dem die Nähe zum Kern zeigt, wie eng man am Ziel arbeitet.",
      tips: "Der Kern ist kein Chef — er ist das gemeinsame Ziel, auf das alle hin optimieren. Diese Rolle übernimmt Lean Communications am häufigsten."
    },
    nodes: {
      PL: { short: "Projektleitung", title: "Projektleitung", role: "Das Ganze — Fortschritt, Kosten und Qualität",
        ansvar: ["Gesamtverantwortung für Fortschritt, Kosten und Qualität", "Bindeglied zu Bauherr, Nutzern und Lenkungsgruppe", "Verantwortet die Besprechungsstruktur und die Entscheidungsprozesse", "Verwaltet Vertrag, Ziele und Anreizmodell", "Sorgt dafür, dass Ressourcen und Personal zum Takt passen", "Eskalationspunkt, wenn Gruppen feststecken"],
        samspill: "Setzt den Rahmen, in dem die Gruppen lösen — führt die Richtung, entscheidet aber nicht allein. Hört im Rad nach unten und holt die Entscheidungsgrundlage dort, wo die Arbeit gemacht wird.",
        tips: "Die Leitung hört im Rad nach unten, bevor sie entscheidet." },
      PRL: { short: "Planungsleitung", title: "Planungsleitung", role: "Vom Modell zur baubaren Grundlage",
        ansvar: ["Leitet die interdisziplinäre Planung Richtung Produktion", "Steuert die Reife und die richtige Entscheidungsreihenfolge", "Verantwortet die ICE-/VDC-Besprechungen und den modellbasierten Prozess", "Sichert interdisziplinäre Klärung und Kollisionskontrolle", "Liefert Arbeitsgrundlagen im Takt der Produktion", "Verwaltet den Planungslieferplan"],
        samspill: "Verbindet die Fachgruppen mit dem Takt der Produktion und sorgt dafür, dass die Grundlage fertig ist, bevor der Kontrollbereich startet — nicht danach.",
        tips: "Die Planung ist fertig, wenn die Produktion bauen kann — nicht wenn die Zeichnung «schön» ist." },
      PRODL: { short: "Produktionsleitung", title: "Produktionsleitung", role: "Der Bau — Takt und Fluss im Feld",
        ansvar: ["Verantwortet die Produktion und den Taktplan auf der Baustelle", "Steuert die Züge durch die Kontrollbereiche", "Räumt Hindernisse aus und sichert den Fluss zwischen den Gewerken", "Verfolgt SGU, Qualität und Fertigstellung im Feld", "Führt die tägliche/wöchentliche Taktbesprechung mit den Teams", "Gibt der Planung Rückmeldung zur Baubarkeit"],
        samspill: "Ist die Stimme «der Baustelle» in der Leitung — und sorgt dafür, dass diejenigen, die tatsächlich bauen, beim Planen des Wie mitwirken.",
        tips: "Wer baut, soll mitplanen." },
      IL: { short: "Einkaufsleitung", title: "Einkaufsleitung", role: "Die richtige Lieferung zum richtigen Takt",
        ansvar: ["Strategischer Einkauf, an Takt und Fortschritt gekoppelt", "Frühe Einbindung von Lieferanten und Nachunternehmern", "Vertrags- und Schnittstellensteuerung zwischen den Parteien", "Verantwortet den Einkaufsplan gegenüber dem Produktionsplan", "Sichert richtige Qualität und Lieferzeit in den Verträgen", "Beobachtet den Markt und steuert Preis- und Lieferrisiko"],
        samspill: "Sorgt dafür, dass die richtige Lieferung zum richtigen Takt da ist und die Lieferanten Teil des Teams werden — kein Gegenüber.",
        tips: "Der Einkauf ist Teil der Planung — kein Nachklang." },
      RL: { short: "Risikosteuerung", title: "Risikosteuerung", role: "Die Unsicherheit — sichtbar und gesteuert",
        ansvar: ["Verantwortet das übergeordnete Risikobild des Projekts", "Betreibt Risikoregister, Maßnahmen und Nachverfolgung", "Koppelt Risiko an Kalkulation, Takt und Entscheidungen", "Quantifiziert Unsicherheit (Kosten und Zeit)", "Sorgt dafür, dass Risiko reduziert wird, bevor es den Bau trifft", "Verfolgt Chancen, nicht nur Bedrohungen"],
        samspill: "Ist eine Prämisse für alle Gruppen im Rad — Unsicherheit wird dort verantwortet, wo sie entsteht, aber gemeinsam gesteuert.",
        tips: "Risiko, das in der Kalkulation nichts kostet, steuerst du nicht." },
      GLM: { short: "Gruppenleiter-Runde", title: "Die Gruppenleiter-Runde", role: "«Scrum of Scrums» — der Klebstoff des Rades",
        ansvar: ["Versammelt alle Gruppenleiter — als «Scrum of Scrums»", "Sichert gemeinsame Ziele, Schnittstellen und das Ganze", "Klärt Abhängigkeiten zwischen den Gruppen", "Gibt der Leitung Einblick in Fortschritt und Hindernisse", "Trifft die Entscheidungen, die den Fluss aufrechterhalten", "Verankert Takt und Prioritäten übergreifend"],
        samspill: "Vielleicht die wichtigste Besprechung im ganzen Rad: Hier sehen wir, dass alle Gruppen auf dasselbe Ziel hinarbeiten, und treffen die Entscheidungen, damit nichts stockt.",
        tips: "Ohne eine gut funktionierende Gruppenleiter-Runde zerfällt die Interdisziplinarität." },
      FGA: { short: "Gründung & Rohbau", title: "Fachgruppe: Baugrund, Gründung und Rohbau", role: "Funktionsübergreifendes Team — gibt den Rhythmus vor",
        ansvar: ["Funktionsübergreifendes Team für Baugrund, Gründung und Rohbau", "Arbeitet in Sprints von 1–2 Wochen", "Verantwortet die ganze Kette von der Lösung bis zur Montage", "Koordiniert Geotechnik, Tragwerk und Ausführung", "Gibt den Takt vor, dem die übrigen Züge folgen", "Klärt Toleranzen und Schnittstellen zur Fassade"],
        samspill: "Gibt den Rhythmus vor, dem die übrigen Züge folgen — und zieht Geotechnik und Tragwerk per Pull hinzu, wenn Prämissen geklärt werden müssen.",
        tips: "Funktionsübergreifend heißt, das Gewerk verantwortet die ganze Kette — nicht nur Zeichnung oder Bau." },
      FGB: { short: "Dach & Fassade", title: "Fachgruppe: Dach und Fassaden", role: "Die Gebäudehülle — bis zum dichten Bau",
        ansvar: ["Gebäudehülle: Dach, Fassade, Fenster und Abdichtung", "Sprintbasierte Entwicklung bis zum dichten Bau", "Koordiniert Toleranzen, Befestigung und Montage", "Sichert Feuchte-, Wärme- und Luftdichtheit mit der Bauphysik", "Plant Gerüst, Kran und Logistik in der Höhe", "Hängt Lieferungen an den Takt des Rohbaus"],
        samspill: "Bleibt eng am Rohbau und an der Technik — der dichte Bau ist der Meilenstein, der alle Innenarbeiten freischaltet.",
        tips: "Ein früher dichter Bau schaltet alle Innenzüge frei." },
      FGC: { short: "Technische Anlagen", title: "Fachgruppe: Technische Anlagen", role: "HLK, Elektro und Automation als eins",
        ansvar: ["HLK, Elektro und Automation als ein gemeinsames Team", "Trassen, Schächte und technische Integration (ITB)", "Kollisionskontrolle im Modell vor der Produktion", "Inbetriebnahme, Prüfung und Einregulierung", "Koordiniert Technikräume und Kapazitäten", "Plant Lieferungen gegen den Takt"],
        samspill: "Löst die Schnittstellen zwischen den technischen Gewerken im Sprint — und holt HLK-/Elektro-Prämissen per Pull, wenn sie gebraucht werden.",
        tips: "Die technischen Gewerke müssen zusammen geplant werden, nicht getrennt." },
      FGD: { short: "Innenausbau", title: "Fachgruppe: Innenausbau", role: "Bis zur Fertigstellung und Übergabe",
        ansvar: ["Wände, Decken, Böden, Oberflächen und Einrichtung", "Sprintbasierte Arbeit bis zur Fertigstellung", "Standardisierung und Wiederholung von Räumen", "Koordiniert die Reihenfolge gegenüber der Technik", "Sichert Qualität und Finish bei der Übergabe", "Plant Einrichtungslieferungen im Takt"],
        samspill: "Folgt den technischen Anlagen im Takt — und standardisiert Räume früh, damit die Wiederholung Fluss und gleichmäßige Qualität bringt.",
        tips: "Wiederholung ist der Freund des Innenausbaus — früh standardisieren." },
      PGK: { short: "Dynamische Kalkulation", title: "Prozessgruppe: Dynamische Kalkulation", role: "Lebende Kosten im Open Book",
        ansvar: ["Lebende Kalkulation im Open Book, laufend aktualisiert", "Koppelt jede Entscheidung an Kosten und Reife", "Verfolgt die Entwicklung Richtung Zielpreis", "Macht den Gewerken die Folgen von Optionen sichtbar", "Verantwortet Schätzunsicherheit und Reserven", "Berichtet transparent an alle Parteien"],
        samspill: "Gibt allen Gruppen die wahren Kosten in Echtzeit, damit Entscheidungen auf Zahlen getroffen werden, die wirklich stimmen.",
        tips: "Die Kalkulation lebt — sie ist kein Schlussdokument." },
      PGI: { short: "Einkauf & Risiko", title: "Prozessgruppe: Einkauf und Risiko", role: "Lieferungen und Unsicherheit, operativ",
        ansvar: ["Operativer Einkauf, an den Takt gekoppelt", "Risikoregister und aktive Maßnahmen-Nachverfolgung", "Lieferanten früh in den Prozess", "Klärt Schnittstellen zwischen Lieferungen", "Verfolgt Lieferzeiten und kritische Bestellungen", "Quantifiziert und schließt Risiko laufend"],
        samspill: "Sorgt dafür, dass Unsicherheit und Lieferungen gesteuert werden, bevor sie den Bau treffen — eng an Kalkulation und Planung gekoppelt.",
        tips: "Früher Einkauf nimmt dem Projekt Risiko." },
      PGP: { short: "Planwerk", title: "Prozessgruppe: Planwerk (Takt)", role: "Ein gemeinsamer Takt für das ganze Projekt",
        ansvar: ["Produktionsplan auf Taktbasis", "Detailplanungs- und Einkaufsplan im Takt", "Bauherren-Entscheidungsplan, an den Takt gekoppelt", "Definiert Kontrollbereiche und Zugreihenfolge", "Hält die Pläne synchronisiert und aktuell", "Misst die Planzuverlässigkeit (PPC) und verbessert"],
        samspill: "Bindet alle Pläne an einen gemeinsamen Takt — wenn die Pläne den Takt teilen, spricht das ganze Projekt dieselbe Sprache.",
        tips: "Wenn die Pläne den Takt teilen, spricht das ganze Projekt dieselbe Sprache." },
      PGR: { short: "Baustelle & Logistik", title: "Prozessgruppe: Baustelleneinrichtung und Logistik", role: "Der Fluss auf der Baustelle",
        ansvar: ["Baustelleneinrichtung, Logistik und gemeinsame Funktionen", "Vertikaltransport, Krane, Aufzüge und Lager", "SGU-Rahmen und sicherer Betrieb auf der Baustelle", "Sichert Zufahrt, Lagerplatz und Just-in-time-Fluss", "Koordiniert gemeinsame Ressourcen zwischen den Gewerken", "Hält die Einrichtung über die Phasen an den Takt angepasst"],
        samspill: "Hält den Fluss für alle Züge aufrecht — unsichtbar, wenn sie funktioniert, aber ein Hemmschuh für alle, wenn sie versagt.",
        tips: "Gute Baustelleneinrichtung ist unsichtbar — schlechte stoppt alles." },
      RIA: { short: "Akustik", title: "Akustik", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Raumakustik, Schalldämmung und Nachhall", "Anforderungen und Dokumentation gegen die Norm", "Unterstützt die Innen- und Technikgruppe bei Bedarf", "Verifiziert Lösungen durch Messung und Kontrolle"],
        samspill: "Wird hinzugezogen, wenn eine Gruppe darum bittet — Pull, nicht Push. Klärt die Prämissen früh, trägt aber konkret bei, wenn die Lösungen tatsächlich entwickelt werden.",
        tips: "Prämissenberater haben keinen festen Platz im Rad; sie tragen bei, wenn der Bedarf entsteht." },
      RIM: { short: "Umwelt", title: "Umwelt / BREEAM", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Umwelt-, Klima- und Nachhaltigkeitsprämissen", "BREEAM-Nachverfolgung und Punktegewinn übergreifend", "Treibhausgasbilanz und Materialwahl", "Unterstützt alle Gruppen, wenn Umweltanforderungen erfüllt werden müssen"],
        samspill: "Unterstützt alle Gruppen per Pull — Nachhaltigkeit ist eine Prämisse in jeder Gruppe, kein eigenes Silo daneben.",
        tips: "Prämissen werden früh geklärt, die Unterstützung aber bei Bedarf hinzugezogen." },
      RIByfy: { short: "Bauphysik", title: "Bauphysik", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Feuchte, Wärme, Kondensation und Luftdichtheit", "Energieberechnung und U-Werte in der Gebäudehülle", "Unterstützt die Dach-/Fassaden- und Rohbaugruppe bei Bedarf", "Detaillösungen für Wärmebrücken und Abdichtung"],
        samspill: "Kommt per Pull hinzu, wenn die Gebäudehülle entwickelt wird — eng zusammen mit Dach/Fassade und der Technik.",
        tips: "Die richtige Kompetenz zur richtigen Zeit — weder vorher noch nachher." },
      RIBr: { short: "Brandschutz", title: "Brandschutz", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Brandschutzprämissen, Konzept und Strategie", "Flucht, Abschottung und Feuerwiderstand", "Verifizierung gegen Vorschriften und Bauordnung", "Unterstützt Fach- und Prozessgruppen bei Klärungen"],
        samspill: "Wird hinzugezogen, wenn die Gruppen Klärung brauchen — die Prämisse wird früh gelegt, die Detailhilfe aber per Pull gegeben.",
        tips: "Spezialisten sind am wertvollsten, wenn sie präzise hinzugezogen werden." },
      STOY: { short: "Lärm & Vibration", title: "Lärm, Vibration und Schall", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Außenlärm, Vibration und Grenzwerte", "Lärm in der Bau- und Betriebsphase", "Unterstützt die Baugrund-, Fassaden- und Technikgruppe", "Messung, Berechnung und Minderungsmaßnahmen"],
        samspill: "Wird bei Bedarf hinzugezogen, ohne festen Platz im Rad — typischerweise wenn Erdarbeiten, Fassade oder Technik entwickelt werden.",
        tips: "Lärm und Vibration werden als Prämisse geklärt — die Unterstützung wird per Pull gegeben." },
      RIG: { short: "Geotechnik", title: "Geotechnik", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Baugrundverhältnisse, Setzungen und Gründungsprämissen", "Baugrunduntersuchungen und geotechnische Planung", "Unterstützt die Baugrund-/Rohbaugruppe in der frühen Phase", "Bewertet Stabilität, Spundwand und Aussteifung"],
        samspill: "Pull aus der Baugrundgruppe ganz am Anfang — wo ein Großteil des Projektrisikos entschieden wird, bevor irgendetwas anderes beginnen kann.",
        tips: "Geotechnik entscheidet einen Großteil des Risikos ganz am Anfang." },
      UU: { short: "Barrierefreiheit", title: "Barrierefreiheit (Universal Design)", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Zugänglichkeit und Prämissen der Barrierefreiheit", "Anforderungen an Leitlinien, Steigungen, Kontraste und Schall", "Unterstützt die Innen- und Architekturarbeit bei Bedarf", "Verifiziert Lösungen gegen Bauordnung und Normen"],
        samspill: "Trägt per Pull dort bei, wo die Lösungen entwickelt werden — Zugänglichkeit wird eingebaut, nicht am Ende hineingeprüft.",
        tips: "Prämissenberater sollen verfügbar sein — nicht immer anwesend." },
      LYS: { short: "Licht & Tageslicht", title: "Licht und Tageslicht", role: "Prämissenberater · wird per Pull hinzugezogen",
        ansvar: ["Tageslicht, Beleuchtung und Blendung", "Lichtberechnung und Energie im Zusammenspiel mit der Technik", "Unterstützt die Fassaden-, Innen- und Technikgruppe", "Wägt Tageslichtanforderungen gegen Energie und Sonnenschutz ab"],
        samspill: "Wird hinzugezogen, wenn die Gruppen darum bitten — oft an der Schnittstelle zwischen Fassade, Automation und Innenräumen.",
        tips: "Das Pull-Prinzip verhindert, dass Berater Arbeit produzieren, um die niemand gebeten hat." }
    }
  },

  org: {
    styre: { short: "IPD-Gremium", title: "IPD-Gremium", ansvar: ["Oberstes Entscheidungsorgan in der Ausführung", "Verantwortet Zielpreis und Gesamtrisiko", "Entscheidet über grundsätzliche Abweichungen"], note: "Steuerungsebene — gleichberechtigte Vertretung der Parteien." },
    ledelse: { short: "IPD-Leitung", title: "Integrierte Projektleitung", ansvar: ["Tägliche Leitung über die Parteien hinweg", "Verantwortet Fortschritt, Kosten und Qualität", "Berichtet an das IPD-Gremium"], note: "Von der Zusammenarbeit zur Linie — Entscheidungen werden aber weiterhin integriert getroffen." },
    PL2: { short: "PL", title: "Projektleiter", ansvar: ["Gesamtausführung von Fortschritt, Kosten und Qualität", "Verantwortet Besprechungsstruktur, Berichtswesen und Entscheidungslog", "Bindeglied zu IPD-Leitung und Bauherr", "Sichert Personal und Ressourcen gegen den Takt"], note: "Leitet die Linie, entscheidet aber weiterhin integriert mit den Parteien." },
    PRL2: { short: "PRL", title: "Planungsleiter", ansvar: ["Restplanung und Arbeitsgrundlagen Richtung Produktion", "Änderungsmanagement und Folgenbewertung", "Verantwortet den Planungslieferplan im Takt", "Kollisionskontrolle und interdisziplinäre Klärung"], note: "Liefert die Grundlage, bevor der Kontrollbereich startet — nicht danach." },
    AL2: { short: "BL", title: "Bauleiter", ansvar: ["Produktion und Takt im Feld", "Hindernisbeseitigung und tägliche Steuerung der Teams", "SGU und Qualität auf der Baustelle", "Rückmeldung zur Baubarkeit an die Planung"], note: "Die Stimme «der Baustelle» in der Leitung." },
    ITB2: { short: "ITB-Koord.", title: "ITB-Koordinator", ansvar: ["Technische Schnittstellen zwischen den Gewerken", "Inbetriebnahme, Prüfung und Einregulierung", "Verantwortet die Schnittstellenmatrix (ITB)", "Sichert integrierte technische Gebäudeinstallationen"], note: "Bindet die technischen Gewerke von der Planung bis zum Betrieb zusammen." },
    FG1b: { short: "FG1", title: "FG1 Planung", ansvar: ["Arbeitsgrundlagen fertig im Takt", "Interdisziplinäres Modell und Kollisionskontrolle", "Klärungen per Pull aus der Produktion"], note: "" },
    FG2b: { short: "FG2", title: "FG2 Bau", ansvar: ["Rohbau, Baugrund und bauliche Arbeiten", "Gibt den Rhythmus für die übrigen Züge vor", "Koordiniert Toleranzen zu Fassade und Technik"], note: "" },
    FG3b: { short: "FG3", title: "FG3 HLK", ansvar: ["HLK-Produktion im Takt", "Trassen und Technikräume", "Inbetriebnahme zusammen mit ITB"], note: "" },
    FG4b: { short: "FG4", title: "FG4 Elektro", ansvar: ["Elektro- und Telekommunikationsproduktion im Takt", "Trassen und Kapazitäten", "Test und Einregulierung mit der Automation"], note: "" },
    FG5b: { short: "FG5", title: "FG5 ITB", ansvar: ["Technische Integration über die Gewerke hinweg", "Funktionstest zusammenwirkender Anlagen", "Übergabe der technischen Dokumentation"], note: "" },
    PG1b: { short: "PG1", title: "PG1 SGU", ansvar: ["Sicherheit, Gesundheit und Umwelt in der Produktion", "Risikobewertung der Aktivitäten im Takt", "Sicherheitsrundgänge und Schließen von Abweichungen"], note: "" },
    PG2b: { short: "PG2", title: "PG2 Kalkulation", ansvar: ["Endkosten gegen Zielpreis im Open Book", "Koppelt Änderungen an Kosten und Reife", "Prognose und Abweichungsberichte"], note: "" },
    PG3b: { short: "PG3", title: "PG3 Nutzer", ansvar: ["Nutzerbetreuung und Funktionsklärung", "Verwaltet Änderungen im Nutzerprogramm", "Bereitet Betrieb und Übernahme vor"], note: "" },
    vdc: { short: "VDC / ICE", title: "VDC- und ICE-Prozess (Unterstützung)", ansvar: ["Strukturierte ICE-Besprechungen über die Gewerke hinweg", "Modellbasierte Entscheidungsunterstützung", "Messung und kontinuierliche Verbesserung"], note: "Läuft neben der Linie und bindet die Ebenen zusammen — der Kern der Lean-Communications-Methode." }
  },

  bindings: {
    b1: { k: "Lean Communications", t: "Ein wöchentlicher Rhythmus: Kollaborationsbesprechungen, Wochenpläne (WWP) und eine lebende Hindernisliste, die alle Gewerke im Takt hält." },
    b2: { k: "Taktplan", t: "Die Produktionssequenz aller Gewerke durch jeden Kontrollbereich — die eigene Visualisierung dieses Moduls." },
    b3: { k: "BIM / VDC", t: "Offenes BIM (IFC) als gemeinsame Wahrheit, mit Kollisionskontrolle und Modellreife vor der Produktion." },
    b4: { k: "Kalkulation (Open Book)", t: "Monatliche Transparenz der Kosten — alle Gruppen sehen dieselben Zahlen, gekoppelt an Reife und Zielpreis." },
    b5: { k: "ITB-Koordination", t: "Eine Schnittstellenmatrix, die die technischen Gewerke von der Planung bis zur Inbetriebnahme zusammenbindet." }
  },

  roles: {
    PL: { role: "Projektleiter", f1: "Setzt Rahmen, Besprechungsstruktur und gemeinsame Ziele der Zusammenarbeit. Leitet den Prozess — nicht die Entscheidungen.", f2: "Gesamtverantwortung für Fortschritt, Kosten und Qualität in der Ausführung." },
    LK: { role: "Kalkulationsleiter", f1: "Baut die dynamische Kalkulation im Open Book und koppelt jede Entscheidung an Kosten und Reife.", f2: "Steuert die Endkosten Richtung Zielpreis und berichtet Abweichungen früh." },
    SL: { role: "Kollaborationsleiter", f1: "Moderiert die Lean-Prozesse, sichert die Einbindung aller Gewerke und verantwortet den Wochenrhythmus.", f2: "Führt die Zusammenarbeit in die Linie und hält die Verbesserungsarbeit am Laufen." },
    PT: { role: "Technischer Projektentwickler", f1: "Entwickelt technische Lösungen und Optionen zusammen mit den Gewerken in der Entwicklungsphase.", f2: "Stellt sicher, dass die gewählten Lösungen gebaut und betrieben werden können." },
    PV: { role: "Leiter virtuelle Entwicklung", f1: "Leitet die virtuelle Projektentwicklung — ICE, Modell und Entscheidungsunterstützung.", f2: "Treibt Messung, Lernen und kontinuierliche Verbesserung durch die gesamte Ausführung." }
  },

  trades: { bygg: { navn: "Bau" }, vvs: { navn: "HLK" }, el: { navn: "Elektro" }, auto: { navn: "Automation" }, flate: { navn: "Oberflächen" }, rigg: { navn: "Abbruch/Einrichtung" } },

  taktAreas: ["KB-01 · Baugrund, Gründung und Keller", "KB-02 · Ebene 1 — Publikumsbereich", "KB-03 · Ebene 2 — Nutzerräume", "KB-04 · Ebene 3 — Nutzerräume", "KB-05 · Ebene 4 — Büros und Besprechungsräume", "KB-06 · Dach und Technik", "KB-07 · Fassade und Gebäudehülle", "KB-08 · Außenanlagen und Anschlüsse"],

  calc: {
    months: ["Jan 27", "Apr 27", "Jul 27", "Okt 27", "Jan 28", "Apr 28", "Jul 28", "Sep 28"],
    groups: {
      FG1: { navn: "FG1 Rohbau", sub: ["Beton und Gründung", "Stahl und Tragwerk", "Prefab-Decken"] },
      FG2: { navn: "FG2 Fassade und Dach", sub: ["Fassadenelemente", "Dach und Abdichtung", "Fenster und Glas"] },
      FG3: { navn: "FG3 Technik (HLK/EL)", sub: ["HLK", "Elektro", "Automation"] },
      FG4: { navn: "FG4 Innenoberflächen", sub: ["Trennwände und Decken", "Böden und Beläge", "Einrichtung"] },
      FG5: { navn: "FG5 Planung", sub: ["Architekt und Tragwerk", "Technische Berater", "VDC/BIM"] },
      FG8: { navn: "FG8 Einrichtung und Logistik", sub: ["Baustelleneinrichtung und Betrieb", "Krane und Aufzüge", "Provisorien"] }
    },
    spg: [
      ["Selbstkosten", "Tatsächliche Kosten für ausgeführte Arbeit — im Open Book dokumentiert."],
      ["Overhead (Zuschlag)", "Vereinbarter Zuschlag für Verwaltung und indirekte Kosten."],
      ["Risiko und Chancen", "Ein gemeinsamer Topf, aktiv über das Risikoregister gesteuert."],
      ["Gewinn", "Vereinbarter Gewinn, fest und planbar für die Parteien."],
      ["KPI-Bonus", "Anreiz, gekoppelt an die gemeinsame Zielerreichung (Zeit, Qualität, SGU)."]
    ]
  },

  alt: {
    FG1: { navn: "FG1 Rohbau", items: [
      { navn: "Vorgefertigte Betondecken", kons: "Kürzere Bauzeit und weniger Schalung, erfordert aber frühes Festlegen der Geometrie." },
      { navn: "Pfahlgründung vs. Bodenplatte", kons: "Reduziert das Setzungsrisiko bei schlechtem Baugrund; höhere Kalkulation, aber geringerer Risikotopf." },
      { navn: "Hochfester Beton in Stützen", kons: "Schlankere Stützen geben mehr Fläche, erfordern aber engere Qualitätssicherung." }
    ]},
    FG2: { navn: "FG2 Fassade", items: [
      { navn: "Prefab-Fassadenelemente", kons: "Schneller dichter Bau und bessere SGU in der Höhe; Transport- und Toleranzanforderungen." },
      { navn: "Begrüntes Dach", kons: "Höhere Kosten, bringt aber Regenwasserbewirtschaftung und BREEAM-Punkte." },
      { navn: "Dynamischer Sonnenschutz", kons: "Reduziert den Kühlbedarf; Zusammenspiel von Fassade, Automation und Energie." }
    ]},
    FG3: { navn: "FG3 Technik", items: [
      { navn: "Rechteckige vs. runde Kanäle", kons: "Runde Kanäle geben geringeren Druckverlust und Schachtplatz, erfordern aber Umplanung." },
      { navn: "Zentrale vs. dezentrale Kühlung", kons: "Zentral bringt Betriebsvorteile; dezentral bringt kürzere Trassen." },
      { navn: "Freie Kühlung aus Meer-/Flusswasser", kons: "Großes Energie- und Kostenpotenzial, hängt aber von Genehmigung und Leitungen ab." }
    ]},
    FG4: { navn: "FG4 Innenausbau", items: [
      { navn: "Modulbasierte Nutzerräume", kons: "Industrialisierte Produktion und gleichmäßige Qualität; erfordert strenge Standardisierung." },
      { navn: "Anpassung der Robustheitsanforderungen", kons: "Passt Oberflächen an die tatsächliche Nutzung an, ohne die Funktionsanforderungen zu unterschreiten." },
      { navn: "Systemwände vs. gemauerte Trennwände", kons: "Systemwände geben Flexibilität bei einem späteren Umbau." }
    ]},
    FG5: { navn: "FG5 Planung", items: [
      { navn: "BREEAM-Ambitionsniveau", kons: "Ein höheres Niveau bringt jetzt Mehrkosten, aber geringere Betriebskosten und Marktwert." },
      { navn: "BIM-Detaillierungsgrad (LOD)", kons: "Der richtige LOD zur richtigen Zeit spart Planungsstunden, ohne das Risiko zu erhöhen." },
      { navn: "Strukturierter Nutzerprozess", kons: "Frühes Festlegen reduziert teure Änderungen spät in der Produktion." }
    ]},
    PG1: { navn: "PG1 Kalkulation", items: [
      { navn: "Früher Einkauf von Stahl", kons: "Sichert den Preis gegen Inflation, bindet aber Kapital und erfordert frühe Reife." }
    ]},
    PG2: { navn: "PG2 Fortschritt", items: [
      { navn: "Off-site-Logistik und Just-in-time", kons: "Weniger Zwischenlagerung auf engem Gelände; erfordert präzise Taktsteuerung." }
    ]},
    PG3: { navn: "PG3 Einrichtung", items: [
      { navn: "Vertikaltransport — zusätzlicher Bauaufzug", kons: "Höhere Einrichtungskosten, beseitigt aber einen Engpass, der sonst mehrere Züge verzögert." }
    ]}
  },

  risks: [
    { b: "Zugang zu einem Technikraum im Nachbargebäude während des Betriebs", tiltak: "Betriebsfenster früh geklärt und temporäre Umlegung" },
    { b: "Änderungen im Nutzerprogramm nach dem Festlegen", tiltak: "Strenges Änderungslog und A3-Entscheidung bei jeder Abweichung" },
    { b: "Kostensteigerung bei Material (Inflation)", tiltak: "Früher Einkauf und indexgebundene Verträge" },
    { b: "Koordination mit dem Betrieb im Nachbargebäude", tiltak: "Gemeinsamer Betriebsplan und feste Koordinationsbesprechungen" },
    { b: "Schlechtere Baugrundverhältnisse als angenommen", tiltak: "Ergänzende Baugrunduntersuchungen vor der Produktion" },
    { b: "Toleranzanforderungen an die Prefab-Fassade", tiltak: "Probemontage und 3D-Vermessung" },
    { b: "Kollision der HLK-/Elektro-Trassen im Schacht", tiltak: "Kollisionskontrolle im BIM vor der Produktion" },
    { b: "Verzögerte Arbeitsgrundlage gegenüber dem Takt", tiltak: "Grundlage sechs Wochen vor jedem Kontrollbereich fertig" },
    { b: "Lieferzeit der Einrichtung", tiltak: "Frühe Bestellung und Puffer im Takt" },
    { b: "Witterung beeinflusst den dichten Bau", tiltak: "Wetterschutz und flexible Zugreihenfolge" },
    { b: "Inbetriebnahme verzögert die Übergabe", tiltak: "ITB-Test als eigener Meilenstein im Takt" },
    { b: "Abweichung zwischen Kalkulation und Endmenge", tiltak: "Reifegesteuerte Mengenklärung" },
    { b: "Dichtheitsanforderung in der Gebäudehülle", tiltak: "Druckprüfung laufend, nicht nur am Ende" },
    { b: "Enges Baustellengelände begrenzt die Logistik", tiltak: "Off-site-Lager und Just-in-time-Lieferung" },
    { b: "Setzungen an einer angrenzenden Konstruktion", tiltak: "Setzungsmessung und Dimensionierung mit Reserve" },
    { b: "Unzureichende Testdokumentation bei der Übergabe", tiltak: "Laufendes Testprotokoll im Takt" }
  ],

  ui: {
    mtag: "Das Ausführungsmodell",
    modA: "Das Ausführungsmodell", modB: "Taktplan", modC: "Kalkulation & Risiko",
    footerAbout: "Norwegens größter Anbieter von Lean- und VDC-Schulungen für die Bauindustrie. Partner der NTNU. Büros in Oslo und Bergen.",
    footerNote: "Interaktive Methoden-Demo. Das Modell, die Taktsteuerung und die dynamische Kalkulation sind Methoden, die Lean Communications entwickelt hat und in eigenen Projekten einsetzt — und in denen sie schult. Die Zahlen hier sind illustrativ.",

    aEyebrow: "Modul 1 · Unser Organisationsmodell", aTitlePre: "Das Kollaborations", aTitleHi: "rad",
    aLead: "Das Projekt steht im Zentrum, und im Kern sitzt die <b>Kollaborationsleitung</b>. Darum liegt die Leitung, dann die funktionsübergreifenden Fach- und Prozessgruppen, die in Sprints arbeiten — und außen die Prämissenberater, die per <b>Pull, nicht Push</b> hinzugezogen werden. Klicke auf einen beliebigen Teil des Rades, um ihn zu erkunden.",
    phaseSamspill: "Kollaborationsphase", phaseGjennom: "Ausführungsphase",
    emptyTitle: "Klicke auf eine Rolle", emptyBody: "Tippe auf einen Knoten im Modell, um Verantwortlichkeiten zu sehen, mit wem die Rolle zusammenarbeitet, und einen konkreten Tipp aus unserer Methode.",
    lblAnsvar: "Verantwortlichkeiten", lblSamspill: "Zusammenarbeit", lblRolleFase: "Rolle in der Phase", tipsLabel: "Tipp: ", closeLabel: "Schließen",
    legend: ["Kern — Kollaborationsleitung", "Leitung", "Fachgruppen", "Prozessgruppen", "Gruppenleiter-Runde", "Prämissenberater · Pull"],
    infoPullT: "Pull, nicht Push",
    infoPullB: "Die drei inneren Schichten haben einen festen Platz im Rad und arbeiten eng zusammen. Die Prämissenberater außen haben keinen festen Platz — sie werden hinzugezogen, wenn eine Gruppe um Hilfe bittet. Das ist das Lean-Prinzip Pull: Kompetenz wird geholt, wenn der Bedarf da ist, statt sie hineinzudrücken (Push).",
    infoLineT: "Von der Zusammenarbeit zur Linie",
    infoLineB: "In der Ausführung wird die Arbeit hierarchisch organisiert, für Tempo und klare Verantwortung, aber Entscheidungen werden weiterhin integriert getroffen. Der VDC/ICE-Prozess bindet die Ebenen zusammen.",
    bindShow: "Bindeelemente anzeigen", bindHide: "Bindeelemente ausblenden",
    ownNoteA: "Das Modell kann jeder schematisch kopieren — aber es ist <b>anspruchsvoll, es in der Praxis umzusetzen</b>. Genau hier kommen wir ins Spiel: Lean Communications entwickelt das Modell zusammen mit dem Projekt, leitet den Prozess und schult die Menschen in seiner Anwendung. Das ist eines unserer fortgeschrittensten Produkte.",
    rolesTitle: "Schlüsselrollen im Modell", rolesLead: "Das Modell ist rollenbasiert, nicht personenbasiert. Tippe auf eine Karte, um die Verantwortung in jeder Phase zu sehen.",
    roleF1: "Kollaborationsphase", roleF2: "Ausführungsphase",

    bEyebrow: "Modul 2 · Unsere Methode", bTitlePre: "Takt", bTitleHi: "plan",
    bLead: "Die Produktion wird als <b>Produktionssystem</b> aufgebaut: Die Arbeit wird in gleich große Kontrollbereiche (KB) geteilt, und «Züge» von Gewerken bewegen sich in festem Rhythmus durch sie hindurch. Jedes Gewerk folgt dem vorherigen — um einen Takt versetzt. Schalte Gewerke ein und aus, um zu sehen, wie sich die Diagonale aufbaut.",
    bKO: "Kontrollbereich", weekPrefix: "Woche ",
    bExplain: [
      { k: "Zeilen = KB", p: "Jeder Kontrollbereich ist ein gleich großer Teil des Gebäudes — eine Zone, in der die Arbeit fertiggestellt werden kann." },
      { k: "Spalten = Wochen", p: "Die Zeit läuft nach rechts. Der Takt ist fest: Ein Gewerk bewegt sich einen Kontrollbereich pro Woche." },
      { k: "Die Diagonale = Fluss", p: "Die Gewerke folgen einander versetzt. Die Diagonale ist der Fortschritt — und zeigt sofort, wenn ein Zug ins Stocken gerät." }
    ],
    bQuote: "«Alle Gewerke bewegen sich durch die Kontrollbereiche in <span class=\"g\">fester Sequenz mit festem Takt</span>.»",
    ownNoteB: "Den Taktplan zu zeichnen ist einfach. <b>Den Takt in der Praxis zu halten</b> — mit der richtigen Reife der Arbeitsgrundlagen, beseitigten Hindernissen und Gewerken, die tatsächlich im Rhythmus liefern — das ist anspruchsvoll. Hier leiten wir die Arbeit und schulen das Team.",

    cEyebrow: "Modul 3 · Unsere Methode", cTitlePre: "Kalkulation, Reife ", cTitleHi: "und Risiko",
    cLead: "Dynamische Steuerung Richtung Zielpreis. Die Kosten werden <b>nicht geraten — sie werden entwickelt</b>, Entscheidung für Entscheidung, indem Risiko reduziert und Reife erhöht wird. Hier sind die drei Werkzeuge, die das steuern.",
    subKalk: "Dynamische Kalkulation", subAlt: "Optionen", subRisk: "Risikosteuerung",
    timeline: "Zeitachse", nowSuffix: " · jetzt",
    kpiCur: "Aktuelle Kalkulation", unit: "MNOK", ksHist: "Historisch / tatsächlich", ksPlan: "Planzahlen (vorausschauend)",
    kpiTarget: "Gegen das Ziel", malPrefix: "Ziel: ",
    kpiMove: "Letzte Änderung", moveDown: "Die Kalkulation sinkt — gutes Zeichen", moveUp: "Die Kalkulation steigt — nachverfolgen",
    gaugeLabel: "Reife · Ziel 8,5", outOf: "von 10",
    chartTitle: "Kalkulationsentwicklung vs. Ziel",
    legKalkHist: "Kalkulation (historisch)", legKalkPlan: "Kalkulation (Plan)", legMal: "Ziel", legMod: "Reife (rechte Achse)",
    barsTitle: "Verteilung pro Fachgruppe", barsMeta: "Klicke auf eine Gruppe, um sie aufzuschlüsseln. Die Linie zeigt das Ziel.", malTitle: "Ziel ",
    vederlag: "Vergütungsstruktur (Open Book)", posterSuffix: " Posten",
    altLead1: "Jede wertschöpfende Idee folgt demselben Pfad — vom Input bis zur Grundsatzentscheidung. ", altLead2: " Optionen sind erfasst. Klicke auf eine Gruppe, um die Bewertungen zu sehen.",
    flow: ["Input (FG/PG)", "Identifizieren", "Bewerten (FG-Runde)", "Zur Entscheidung vorgelegt", "Relevant → Studio (max. 3 Tage) → L1 (A3)", "Nicht relevant → mit Begründung archiviert"],
    underlagLabel: "Grundlage: ", fristLabel: "L1-Frist: ", altSing: " Option", altPlur: " Optionen",
    rsteps: [["1", "Identifizieren", "Risiko aus allen Gewerken und Gruppen erfassen."], ["2", "Analysieren", "Folge und Wahrscheinlichkeit bewerten."], ["3", "Bewerten", "Nach Risikozahl und Verantwortung priorisieren."], ["4", "Behandeln", "Maßnahmen, Nachverfolgung und Kopplung an die Kalkulation."]],
    rRed: "Rote Risiken (≥ 5 MNOK)", rExpo: "Gesamtfolge (MNOK)", rCount: "Erfasste Risiken",
    filterGroup: "Gruppe", filterStatus: "Status", allLabel: "Alle",
    rtableHead: ["", "Nr.", "Gr.", "Beschreibung", "Verantw.", "Folge", "Wahr.", "Risikozahl", "Maßnahme", "Status"],
    status: { ok: "Geklärt", pending: "Laufend", decide: "Zur Entscheidung" },
    ownNoteC: "Die Werkzeuge sind schematisch einfach. Anspruchsvoll ist <b>die Disziplin dahinter</b>: die Kalkulation im Open Book lebendig zu halten, die Optionen bis zur Entscheidung zu treiben und Risiko zu steuern, bevor es die Kosten trifft. Genau das leiten wir an und vermitteln wir." 
  }
};
