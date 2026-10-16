<script setup lang="ts">
import { contact, events, testimonials, faqs, profile } from './data/content'

const menuOpen = ref(false)
const legal = ref<'impressum' | 'datenschutz' | null>(null)
const navigation = [
  { label: 'Termine', href: '#termine' },
  { label: 'Yoga entdecken', href: '#angebote' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Kontakt', href: '#kontakt' }
]
const upcomingEvents = computed(() => {
  const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Berlin' }).format(new Date())
  return events.filter(event => event.date >= today).sort((a, b) => a.date.localeCompare(b.date))
})
const formatDate = (value: string) => new Intl.DateTimeFormat('de-DE', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Berlin' }).format(new Date(`${value}T12:00:00+01:00`))
const emailLink = (subject: string) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`
const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { menuOpen.value = false; legal.value = null } }
onMounted(() => window.addEventListener('keydown', closeOnEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', closeOnEscape))
</script>

<template>
  <UApp>
    <a class="skip-link" href="#inhalt">Zum Inhalt springen</a>
    <header class="site-header">
      <div class="shell header-inner">
        <a class="wordmark" href="#" aria-label="JulYoga Startseite">Jul<span>Y</span>oga<span class="logo-dot">.</span></a>
        <nav class="desktop-nav" aria-label="Hauptnavigation">
          <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
        </nav>
        <UButton class="header-cta" :to="emailLink('Hallo Ronja – Anfrage zu JulYoga')" color="primary" variant="outline" trailing-icon="i-lucide-arrow-up-right">Schreib mir</UButton>
        <UButton class="mobile-toggle" color="neutral" variant="ghost" :icon="menuOpen ? 'i-lucide-x' : 'i-lucide-menu'" :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'" :aria-expanded="menuOpen" aria-controls="mobile-nav" @click="menuOpen = !menuOpen" />
      </div>
      <nav v-if="menuOpen" id="mobile-nav" class="mobile-nav" aria-label="Mobile Navigation">
        <a v-for="item in navigation" :key="item.href" :href="item.href" @click="menuOpen = false">{{ item.label }}</a>
      </nav>
    </header>

    <main id="inhalt">
      <section class="hero shell" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="tiny-flower">✳</span> YOGA MIT RONJA · KIEL</p>
          <h1 id="hero-title">Kleine Momente.<br>Großes <em>Miteinander.</em></h1>
          <p class="hero-description">Bewegen, lachen, zur Ruhe kommen. Yoga für Kinder, ihre Lieblingsmenschen und alle, die sich eine kleine Auszeit wünschen.</p>
          <div class="hero-actions">
            <UButton to="#termine" size="xl" trailing-icon="i-lucide-arrow-down">Nächste Termine</UButton>
            <a class="text-link" href="#angebote">Yoga entdecken <span aria-hidden="true">↗</span></a>
          </div>
          <p class="hero-note">Mit Freude. Mit Fantasie. Ganz ohne Perfektion.</p>
        </div>
        <div class="hero-art">
          <span class="art-sage" aria-hidden="true"></span>
          <span class="art-rose" aria-hidden="true"></span>
          <div class="art-apricot"><YogaCat /><span class="art-caption">Einfach du selbst sein.</span></div>
          <span class="art-star star-one" aria-hidden="true">✧</span>
          <span class="art-star star-two" aria-hidden="true">✳</span>
          <div class="art-stamp" aria-label="Bewegung, Fantasie, Gemeinsamkeit">Bewegung.<br>Fantasie.<br><em>Gemeinsamkeit.</em></div>
        </div>
      </section>

      <section id="termine" class="dates-section" aria-labelledby="dates-title">
        <div class="shell dates-inner">
          <div class="dates-heading"><p class="eyebrow">ZEIT FÜR DIE MATTE</p><h2 id="dates-title">Wir sehen uns <em>bald.</em></h2></div>
          <div v-if="upcomingEvents.length" class="event-list">
            <article v-for="event in upcomingEvents" :key="event.date + event.title" class="event">
              <p class="event-date">{{ formatDate(event.date) }} · {{ event.time }}</p>
              <h3>{{ event.title }}</h3><p>{{ event.audience }} · {{ event.location }} · {{ event.price }}</p>
              <UButton :to="emailLink('Anmeldung: ' + event.title + ' am ' + formatDate(event.date))" variant="outline" trailing-icon="i-lucide-arrow-up-right">Termin anfragen</UButton>
            </article>
          </div>
          <div v-else class="dates-empty"><p><strong>Neue Termine sind in Planung.</strong><br>Du möchtest beim nächsten Mal dabei sein? Schreib mir – ich freue mich auf dich.</p><UButton :to="emailLink('Bitte informiere mich über neue JulYoga-Termine')" color="primary" variant="outline" trailing-icon="i-lucide-arrow-up-right">Nach Terminen fragen</UButton></div>
        </div>
      </section>

      <section id="angebote" class="offers-section shell" aria-labelledby="offers-title">
        <div class="section-intro"><p class="eyebrow">DEIN PLATZ BEI JULYOGA</p><h2 id="offers-title">Für kleine Entdecker:innen.<br>Und große <em>Lieblingsmenschen.</em></h2><p>Jede Stunde schafft Raum für Bewegung, Fantasie und Entspannung. Finde das Angebot, das zu dir und euch passt.</p></div>
        <div class="offer-grid">
          <article class="offer offer-family">
            <div class="offer-top"><span class="offer-number">01 / GEMEINSAM</span><UIcon name="i-lucide-heart" class="offer-icon" /></div>
            <h3>Eltern-Kind-Yoga</h3><p class="offer-subtitle">Eine kleine Auszeit. Für euch zwei.</p>
            <p>Gemeinsam auf Fantasiereise gehen, spielerische Yogaübungen entdecken und am Ende zur Ruhe kommen. Mit Platz für Spaß, Lachen und Verbundenheit.</p>
            <p class="offer-detail">Ein Lieblingsmensch ist eine erwachsene Person, mit der dein Kind gern Zeit verbringt: Mama, Papa, Onkel, Tante, Oma, Opa, Patentante, eine große Freundin oder die Lieblingsnachbarin. Verwandtschaft ist keine Voraussetzung – vertraut miteinander sein zählt.</p>
            <ul class="offer-facts"><li><strong>Kindergartenalter:</strong> 4–6 Jahre + Lieblingsmensch</li><li><strong>Grundschulalter:</strong> Kind + Lieblingsmensch</li><li>Je Angebot eine Altersgruppe · maximal 6 Duos</li><li>Dauer und Preis beim jeweiligen Termin</li></ul>
            <a :href="emailLink('Ich interessiere mich für Eltern-Kind-Yoga')" class="offer-link">Gemeinsame Zeit anfragen <span aria-hidden="true">↗</span></a>
          </article>
          <article class="offer offer-kids">
            <div class="offer-top"><span class="offer-number">02 / SPIELERISCH</span><UIcon name="i-lucide-sparkles" class="offer-icon" /></div>
            <h3>Kinder-Yoga</h3><p class="offer-subtitle">Mehr als ruhig sitzen.</p>
            <p>Mal stark wie ein Baum, mal neugierig wie eine Katze: Mit Geschichten und Bewegung entdecken Kinder ihren Körper und finden kleine Ruheinseln.</p>
            <p class="offer-detail">Hier gehört die Yoga-Zeit ganz den Kindern – ohne begleitende Erwachsene. Eine eigene Auszeit zum Ausprobieren, Bewegen und Entspannen.</p>
            <ul class="offer-facts"><li>Nur für Kinder · ohne Erwachsene</li><li>Raum für Körpergefühl und Selbstvertrauen</li><li>Spielerisch, lebendig und fantasievoll</li><li>Altersgruppe, Dauer und Preis beim Termin</li></ul>
            <a :href="emailLink('Ich interessiere mich für Kinder-Yoga')" class="offer-link">Kinder-Yoga kennenlernen <span aria-hidden="true">↗</span></a>
          </article>
          <article class="offer offer-adults">
            <div class="offer-top"><span class="offer-number">03 / BEI DIR ANKOMMEN</span><UIcon name="i-lucide-sun" class="offer-icon" /></div>
            <h3>Workshops für Erwachsene</h3><p class="offer-subtitle">Zeit für dich. Und füreinander.</p>
            <p>Gemeinsam etwas Schönes erleben – als Paar, mit Freundinnen oder anderen Lieblingsmenschen. In meinen Workshops verbinden sich Yoga, Bewegung und Entspannung mit wechselnden Themen.</p>
            <p class="offer-detail">Zum Beispiel ein Paar-Workshop oder eine Auszeit mit herzöffnenden Übungen für die Weihnachtszeit. Ich denke mir immer wieder Neues aus – mal für gemeinsame Momente, mal ganz für dich.</p>
            <ul class="offer-facts"><li>Für Einzelpersonen, Paare oder Freund:innen</li><li>Immer wieder neue Themen und Formate</li><li>Beispiel: Herzöffner zur Weihnachtszeit</li><li>Thema, Dauer und Preis beim aktuellen Termin</li></ul>
            <a :href="emailLink('Ich interessiere mich für Workshops für Erwachsene')" class="offer-link">Workshop anfragen <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section class="philosophy" aria-label="Die Haltung von JulYoga"><div class="shell philosophy-inner"><span class="philosophy-star" aria-hidden="true">✳</span><p>Kinder dürfen einfach<br><em>sie selbst sein.</em></p><div class="philosophy-aside">Ganz ohne Druck.<br>Ganz ohne Perfektion.<br><strong>Mit Freude, Fantasie<br>und Leichtigkeit.</strong></div></div></section>

      <section id="ueber-mich" class="about-section shell" aria-labelledby="about-title">
        <div class="about-art"><div class="portrait-frame"><img v-if="profile.photoSrc" :src="profile.photoSrc" :alt="profile.photoAlt" class="portrait-photo" loading="lazy" width="480" height="560"><div v-else class="portrait-placeholder"><UIcon name="i-lucide-camera" /><span>Ein Foto von mir folgt.</span><span class="handwritten">Mit Herz.<br>Und beiden Füßen<br>auf der Matte.</span></div></div><span class="about-flower" aria-hidden="true">✳</span></div>
        <div class="about-copy"><p class="eyebrow">DER MENSCH HINTER JULYOGA</p><h2 id="about-title">Hallo, ich bin <em>Ronja.</em></h2><p class="lead">Yogalehrerin, Mama und überzeugt von der Kraft gemeinsamer Zeit.</p><p>Seit vielen Jahren bin ich selbst regelmäßig auf der Matte. Als ausgebildete Vinyasa- und Kinder-Yoga-Lehrerin möchte ich diese Freude weitergeben – mit Herz, Ruhe und Begeisterung.</p><p>In meinen Stunden geht es um Geschichten, Bewegung und das gute Gefühl, einfach da sein zu dürfen. Ich gestalte Räume, in denen sich Groß und Klein wohlfühlen können.</p><div class="qualification-tags"><span>Vinyasa-Yoga</span><span>Kinder-Yoga</span><span>Mit Herz in Kiel</span></div><a class="text-link" :href="emailLink('Hallo Ronja – ich möchte dich kennenlernen')">Lass uns kennenlernen <span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="feedback" class="feedback-section shell" aria-labelledby="feedback-title">
        <div><p class="eyebrow">WAS BLEIBT, IST EIN GUTES GEFÜHL</p><h2 id="feedback-title">Eure <em>Yoga-Momente.</em></h2></div>
        <div v-if="testimonials.length" class="testimonial-grid"><figure v-for="(feedback, index) in testimonials" :key="index"><blockquote>{{ feedback.text }}</blockquote><figcaption>{{ feedback.name }}<span v-if="feedback.offer"> · {{ feedback.offer }}</span></figcaption></figure></div>
        <div v-else class="feedback-invitation"><UIcon name="i-lucide-messages-square" /><p>Du warst schon dabei? Ich freue mich zu hören, was du und ihr aus unserer gemeinsamen Zeit mitgenommen habt.</p><a class="text-link" :href="emailLink('Mein Feedback zu JulYoga')">Erfahrung mit mir teilen <span aria-hidden="true">↗</span></a></div>
      </section>

      <section class="faq-section shell" aria-labelledby="faq-title"><div><p class="eyebrow">GUT ZU WISSEN</p><h2 id="faq-title">Noch ein paar <em>Fragen?</em></h2><p>Alles rund um deine Yoga-Zeit – allein, zu zweit oder mit Kind.</p></div><UAccordion :items="faqs" :ui="{ trigger: 'text-base py-5 cursor-pointer', body: 'text-base leading-relaxed pb-5 whitespace-pre-line' }" /></section>

      <section class="gift-section shell"><UIcon name="i-lucide-gift" /><div><h3>Gemeinsame Zeit verschenken.</h3><p>Mit einem JulYoga-Wertgutschein verschenkst du kleine Auszeiten und schöne Momente. Schreib mir deinen gewünschten Gutscheinwert.</p></div><UButton :to="emailLink('Ich möchte einen JulYoga-Wertgutschein kaufen')" variant="outline" trailing-icon="i-lucide-arrow-up-right">Wertgutschein anfragen</UButton></section>

      <section class="private-section shell" aria-labelledby="private-title"><div><p class="eyebrow">DEINE IDEE. EURE YOGA-ZEIT.</p><h2 id="private-title">Ein besonderer Anlass?<br>Ich bin <em>dabei.</em></h2><p>Ob Yoga beim Kindergeburtstag oder ein privater Workshop zu einem Thema, das dir am Herzen liegt: Du kannst mich auch ganz persönlich buchen. Erzähl mir von deiner Idee – wir besprechen die Details und finden gemeinsam ein passendes Format.</p><UButton :to="emailLink('Meine Idee für eine private Yoga-Buchung')" variant="outline" trailing-icon="i-lucide-arrow-up-right">Private Yoga-Zeit anfragen</UButton></div><div class="private-note"><UIcon name="i-lucide-party-popper" /><p>Kindergeburtstag.<br>Lieblingsmenschen.<br><em>Dein Wunschthema.</em></p></div></section>

      <section id="kontakt" class="contact-section" aria-labelledby="contact-title"><div class="shell contact-inner"><p class="eyebrow">DER ERSTE SCHRITT IST GANZ EINFACH</p><h2 id="contact-title">Lust auf einen<br>gemeinsamen <em>Yoga-Moment?</em></h2><p>Fragen, Kursinteresse oder einfach ein Hallo:<br>Ich freue mich auf deine Nachricht.</p><a class="contact-email" :href="emailLink('Hallo Ronja – Anfrage zu JulYoga')">{{ contact.email }} <span aria-hidden="true">↗</span></a><a class="instagram-link" :href="contact.instagram" target="_blank" rel="noopener noreferrer"><UIcon name="i-lucide-instagram" /> {{ contact.instagramLabel }} <span aria-hidden="true">↗</span></a><span class="contact-flower" aria-hidden="true">✳</span></div></section>
    </main>

    <footer class="site-footer shell"><a href="#" class="wordmark">Jul<span>Y</span>oga<span class="logo-dot">.</span></a><p>Bewegung. Fantasie. Gemeinsamkeit.</p><div class="footer-links"><button @click="legal = 'impressum'">Impressum</button><button @click="legal = 'datenschutz'">Datenschutz</button><a href="#inhalt" aria-label="Zurück nach oben">Nach oben ↑</a></div></footer>

    <UModal :open="legal !== null" :title="legal === 'impressum' ? 'Impressum' : 'Datenschutz'" description="Informationen zum aktuellen Website-Entwurf" @update:open="value => { if (!value) legal = null }">
      <template #body><div class="legal-copy"><template v-if="legal === 'impressum'"><p><strong>JulYoga · Ronja</strong><br>Kontakt: <a :href="'mailto:' + contact.email">{{ contact.email }}</a></p><p>Diese Website ist ein privater Entwurf. Die vollständigen Anbieterangaben, insbesondere vollständiger Name und ladungsfähige Anschrift, werden vor einer öffentlichen Veröffentlichung ergänzt.</p></template><template v-else><p>Diese Website ist ein privater Entwurf. Die vollständige Datenschutzerklärung mit den Angaben zur verantwortlichen Person und zum tatsächlichen Hosting wird vor einer öffentlichen Veröffentlichung ergänzt.</p><p>Die Website selbst enthält kein Kontaktformular und keine eingebetteten Instagram-Inhalte. Bei Klick auf die E-Mail-Adresse öffnet sich dein E-Mail-Programm. Der Instagram-Link führt auf eine externe Website.</p></template></div></template>
    </UModal>
  </UApp>
</template>
