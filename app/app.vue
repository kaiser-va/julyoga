<template>
  <div class="maintenance-page">
    <main class="maintenance" aria-labelledby="maintenance-title">
      <div class="maintenance-content">
        <p class="brand"><span aria-hidden="true">✳</span> JULYOGA · KIEL</p>
        <h1 id="maintenance-title">Wir sind bald <em>wieder da.</em></h1>
        <p>Unsere Website wird gerade überarbeitet. Bitte schau bald wieder vorbei.</p>
        <a href="mailto:info@julyoga.de">info@julyoga.de</a>
      </div>
    </main>

    <footer class="maintenance-imprint">
      <h2>Impressum</h2>
      <p>Angaben gemäß § 5 DDG</p>
      <address>Ronja Ehlers<br>Krusenrotter Weg 107<br>24113 Kiel</address>
      <p>E-Mail: <a href="mailto:info@julyoga.de">info@julyoga.de</a></p>
    </footer>
  </div>
</template>

<style scoped>
.maintenance-page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}

.maintenance {
  flex: 1;
  display: grid;
  place-items: center;
  padding: 32px;
  text-align: center;
}

.maintenance-content {
  width: min(100%, 680px);
}

.brand {
  margin-bottom: 28px;
  color: var(--wine);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.brand span {
  margin-right: 8px;
  font-size: 20px;
}

h1 {
  margin-bottom: 20px;
  font-size: clamp(42px, 8vw, 72px);
  line-height: 1.08;
}

.maintenance-content > p:not(.brand) {
  max-width: 460px;
  margin: 0 auto 24px;
  color: var(--muted);
}

.maintenance-content > a {
  color: var(--wine);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.maintenance-imprint {
  padding: 18px 24px 24px;
  border-top: 1px solid #35383012;
  text-align: center;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.6;
}

.maintenance-imprint h2 {
  margin-bottom: 4px;
  color: var(--ink);
  font-size: 18px;
  letter-spacing: 0;
}

.maintenance-imprint p {
  margin: 0 0 4px;
}

.maintenance-imprint address {
  margin-bottom: 4px;
  font-style: normal;
}

.maintenance-imprint a {
  color: var(--wine);
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>
