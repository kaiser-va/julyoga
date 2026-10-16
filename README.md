# JulYoga

Responsive SPA mit Nuxt 4, Vue 3 und Nuxt UI 4. Farben und Illustrationen stammen aus den gelieferten JulYoga-Vorlagen, ergänzt durch gedecktes Weinrot.

## Entwicklung

```bash
pnpm install
pnpm dev
```

## Statischer SPA-Build

```bash
pnpm build
```

Ausgabe: `.output/public`. Beim Hosting Unterseiten auf `index.html` zurückführen. Die Hauptnavigation verwendet Abschnittsanker. Impressum und Datenschutz öffnen als Dialoge.

## Inhalte pflegen

Termine, Feedback, Kontakt und häufige Fragen stehen in `app/data/content.ts`. Termine als `YYYY-MM-DD` eintragen; vergangene Termine werden ausgeblendet (Zeitzone Europe/Berlin). Echte Feedbacktexte nur mit Freigabe hinzufügen. Die Termine vom März/Mai 2026 wurden bewusst nicht übernommen. Ohne Termine erscheint eine E-Mail-Anfrage; ohne Feedback eine Einladung, Erfahrungen zu teilen.

Das Portrait wird über `profile.photoSrc` in derselben Datei eingebunden. Bis eine Originalaufnahme vorliegt, erscheint ein gestalteter Fotoplatzhalter. Texte verwenden genderneutrale Formen oder den Doppelpunkt.

Die FAQ enthalten die gewünschte 50-%-Vorauszahlung sowie einen Beispielentwurf einer Workshop-Stornostaffel: Eingang bis einschließlich 240 Stunden vor Beginn 50 %, danach bzw. bei Nichterscheinen 100 %. Gegenbeweis, Ersatzbelegung und ersparte Aufwendungen sind berücksichtigt. Die Staffel orientiert sich an der Praxis von yoga-essence Kiel (siehe `docs/workshop-recherche.md`), ist aber nicht rechtlich validiert. Vor öffentlicher Verwendung müssen insbesondere die Prozentsätze anhand des typischen Ausfallschadens und die vollständigen Buchungsbedingungen geprüft werden; die FAQ sind keine umfassenden AGB. Für Kursreihen und private Buchungen werden separate Bedingungen vor Vertragsschluss vereinbart. Der E-Mail-Ablauf unterscheidet unverbindliche Anfrage, Informationen einschließlich Bedingungen, verbindliche Anmeldung und Annahme per Buchungsbestätigung. Die Zahlung ist keine Bedingung für den Vertragsschluss. Private Buchungen und Wertgutscheine werden per E-Mail angefragt.

Als vorgeschlagener Zahlungsablauf sind 50 % innerhalb von sieben Kalendertagen nach Zugang der Bestätigung und der Rest spätestens 14 Tage vor Beginn hinterlegt. Vollzahlung ist ebenfalls möglich. Bei kurzfristigen Buchungen werden die Fristen vor Vertragsschluss individuell vereinbart. In E-Mails konkrete Beträge und Zahlungsdaten nennen und die gültige Fassung der Bedingungen mitsenden. Der genannte 12.12.2026 wurde noch nicht als Veranstaltung veröffentlicht, da Uhrzeit, Format, Ort und Preis fehlen.

## Vor öffentlichem Start

- Vollständige Anbieterangaben und eine auf das tatsächliche Hosting abgestimmte Datenschutzerklärung ergänzen.
- E-Mail und Instagram sowie aktuelle Angebotsdetails prüfen.
- Aktuelle Termine und Preise eintragen, echte freigegebene Rückmeldungen ergänzen.
- Optional die Illustrationen durch Original-Einzeldateien ersetzen; derzeit werden die Katzen direkt aus dem gelieferten Flyer per SVG-Ausschnitt dargestellt.

Keine erfundenen Bewertungen oder aktuellen Preise. Es gibt kein Kontaktformular, keine Instagram-Einbettung und kein eingebautes Tracking. Die Website bietet direkte mailto- und Instagram-Links. Es wird keine Online-Zahlung oder verbindliche Buchungsbestätigung vorgetäuscht.
