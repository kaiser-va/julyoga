<template>
  <main class="maintenance" aria-labelledby="maintenance-title">
    <div class="maintenance-content">
      <p class="brand"><span aria-hidden="true">✳</span> JULYOGA · KIEL</p>
      <h1 id="maintenance-title">Wir sind bald <em>wieder da.</em></h1>
      <p>Unsere Website wird gerade überarbeitet. Bitte schau bald wieder vorbei.</p>
      <a href="mailto:info@julyoga.de">info@julyoga.de</a>
    </div>
  </main>
</template>

<style scoped>
.maintenance {
  min-height: 100svh;
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
</style>
