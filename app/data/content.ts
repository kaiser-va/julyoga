export interface YogaEvent {
  title: string
  date: string
  time: string
  audience: string
  location: string
  price: string
}

// Nur bestätigte, aktuelle Termine eintragen. ISO-Datum: YYYY-MM-DD.
export const events: YogaEvent[] = []

// Nur echte Rückmeldungen mit Freigabe zur Veröffentlichung eintragen.
export const testimonials: { text: string; name: string; offer?: string }[] = []

export const contact = {
  email: 'info@julyoga.de',
  instagram: 'https://www.instagram.com/julyoga_kiel/',
  instagramLabel: '@julyoga_kiel'
}

// Nach dem Hochladen des Portraits z. B. '/images/ronja.jpg' eintragen.
export const profile = { photoSrc: '', photoAlt: 'Ronja, Vinyasa- und Kinder-Yoga-Lehrerin bei JulYoga in Kiel' }

export const faqs = [
  { label: 'Brauche ich Yoga-Erfahrung?', content: 'Nein. Du brauchst keine Vorerfahrung – nur Lust auf Bewegung und darauf, etwas Neues auszuprobieren. Ob allein, als Paar, mit Freund:innen oder mit einem Kind: Ich begleite euch durch die Übungen. Jede Person darf im eigenen Tempo mitmachen.' },
  { label: 'Was soll ich mitbringen und anziehen?', content: 'Du brauchst kein eigenes Equipment und keine Yogamatte: Matten sind vorhanden. Komm in bequemer Kleidung, in der du dich gut bewegen kannst. Wir machen Yoga immer barfuß.' },
  { label: 'Gibt es Getränke und eine Toilette?', content: 'Wasser steht immer für dich bereit. Je nach Workshop gibt es vielleicht auch noch etwas anderes zu trinken. Eine Toilette ist im Raum vorhanden.' },
  { label: 'Wie lange dauert eine Yoga-Einheit?', content: 'Je nach Angebot dauert eine Einheit zwischen 45 Minuten und zwei Stunden. Ich passe die Dauer altersgerecht und an das jeweilige Thema an. Die genaue Zeit findest du beim aktuellen Termin.' },
  { label: 'Wer kann an welchem Angebot teilnehmen?', content: 'Beim Eltern-Kind-Yoga kommt ein Kind mit einem erwachsenen Lieblingsmenschen: Es gibt Angebote für das Kindergartenalter (4–6 Jahre) und für das Grundschulalter. Beim Kinder-Yoga gehört die Zeit ganz den Kindern, ohne begleitende Erwachsene. Workshops für Erwachsene richten sich je nach Thema an Einzelpersonen, Paare oder Freund:innen. Die passende Altersgruppe und Zielgruppe stehen immer beim jeweiligen Termin.' },
  { label: 'Wie groß ist die Gruppe?', content: 'Das hängt vom Angebot und vom Raum ab. Beim Eltern-Kind-Yoga nehmen maximal sechs Kind-Lieblingsmensch-Duos teil. Für andere Formate findest du die Angaben beim jeweiligen Termin oder erfährst sie direkt von mir.' },
  { label: 'Was kostet die Teilnahme?', content: 'Die Preise stehen immer bei den aktuellen Terminen. Bei einer privaten Buchung besprechen wir den Umfang und den Preis vorab persönlich.' },
  { label: 'Wie kann ich bezahlen?', content: 'Du kannst per PayPal, Überweisung oder bar bezahlen. In der Regel zahlst du 50 % des Teilnahmebetrags innerhalb von sieben Kalendertagen nach Zugang meiner Buchungsbestätigung. Der Rest ist spätestens 14 Tage vor Beginn fällig. Du kannst auch direkt den gesamten Betrag bezahlen. Bei kurzfristigen Buchungen vereinbaren wir vorab eine passende Zahlungsfrist vor Beginn. Die genauen Beträge und Termine teile ich dir vor deiner verbindlichen Anmeldung mit und halte sie in der Buchungsbestätigung fest. Die Anzahlung begrenzt den Gesamtpreis oder mögliche Stornokosten nicht auf 50 %.' },
  { label: 'Wie melde ich mich an und wann ist meine Buchung verbindlich?', content: '1. Schreib mir eine E-Mail an info@julyoga.de mit deinem gewünschten Angebot und Termin. Bei Kinder-Angeboten nenne bitte auch das Alter des Kindes. Diese erste Anfrage ist unverbindlich.\n\n2. Ich prüfe die freien Plätze und schicke dir alle Informationen: Termin, Ort, Preis, Zahlungsfristen sowie die geltenden Buchungs- und Stornobedingungen. Du kannst sie in Ruhe lesen und Fragen stellen.\n\n3. Wenn alles passt, meldest du dich per E-Mail ausdrücklich verbindlich unter Zustimmung zu diesen Bedingungen an. Ich bestätige dir anschließend die Buchung per E-Mail. Mit Zugang meiner Bestätigung kommt der kostenpflichtige Vertrag zustande und dein Platz ist fest gebucht – unabhängig davon, ob du bereits bezahlt hast.\n\n4. In der Regel zahlst du 50 % innerhalb von sieben Kalendertagen nach Zugang meiner Buchungsbestätigung und den Rest spätestens 14 Tage vor Beginn. Du erhältst dafür konkrete Zahlungsdaten. Bei kurzfristigen Buchungen gelten die vorher vereinbarten Fristen. Ein Ausbleiben der Zahlung ist keine Stornierung.' },
  { label: 'Welche Stornobedingungen gelten für Workshops?', content: 'Für Workshops mit einem festen Termin ist folgende Staffel vorgesehen:\n\n• Geht deine Absage spätestens 10 Tage (240 Stunden) vor Beginn bei mir ein, beträgt die Stornopauschale 50 % des vereinbarten Teilnahmebetrags.\n• Bei einer späteren Absage oder wenn du nicht kommst, beträgt sie 100 %.\n\nBitte sage möglichst früh per E-Mail an info@julyoga.de ab. Maßgeblich ist der Eingang deiner Nachricht. Eine Erkrankung führt bei diesen Workshops grundsätzlich nicht automatisch zu einer kostenlosen Stornierung. Gesetzliche Rücktritts- und Kündigungsrechte bleiben unberührt.\n\nDu kannst jederzeit nachweisen, dass kein oder ein wesentlich geringerer Schaden entstanden ist. Dann entfällt oder reduziert sich die Pauschale entsprechend. Ersparte Aufwendungen und Einnahmen aus einer anderweitigen Vergabe deines Platzes werden angerechnet. Bereits geleistete Zahlungen werden auf die verbleibenden Kosten angerechnet; einen Überschuss erstatte ich.\n\nDie vollständigen Bedingungen erhältst du vor deiner verbindlichen Anmeldung. Für Kursreihen und private Buchungen vereinbaren wir die passenden Bedingungen gesondert vor Vertragsschluss.' },
  { label: 'Kann ich meinen Platz weitergeben?', content: 'Ja. Wenn du verhindert bist, kannst du eine für das Angebot passende Ersatzperson oder beim Eltern-Kind-Yoga ein passendes Kind-Lieblingsmensch-Duo benennen. Bitte informiere mich vorab per E-Mail, damit wir die Übernahme und die Kontaktdaten klären können. Übernimmt die Ersatzperson die Buchung vollständig, entstehen dir keine zusätzlichen Stornokosten. Die Altersgruppe und die sonstigen Teilnahmevoraussetzungen gelten weiterhin.' },
  { label: 'Was passiert, wenn du den Workshop absagen musst?', content: 'Wenn ich den Workshop ersatzlos absage, erstatte ich dir den bereits gezahlten Teilnahmebetrag vollständig. Falls ich einen Ersatztermin anbiete, kannst du wählen, ob du ihn wahrnehmen möchtest oder die Erstattung bevorzugst.' },
  { label: 'Kann ich einen Wertgutschein kaufen?', content: 'Ja! Du kannst bei mir Wertgutscheine kaufen und damit Yoga-Zeit verschenken. Schreib mir deinen gewünschten Gutscheinwert. Gemeinsam klären wir die Details zum Kauf und zur Einlösung.' },
  { label: 'Kann ich dich auch privat buchen?', content: 'Sehr gern – zum Beispiel für eine Yoga-Einheit bei einem Kindergeburtstag oder für einen Workshop zu einem anderen Thema. Schreib mir deine Idee. Wir besprechen gemeinsam, was du dir wünschst, welches Format passt und wie wir es gestalten können.' },
  { label: 'Kann ich auch ohne aktuellen Termin anfragen?', content: 'Sehr gern. Schreib mir, für welches Angebot du dich interessierst. Auch wenn gerade kein Termin auf der Website steht, kannst du dich bei mir nach neuen Workshops erkundigen.' }
]
