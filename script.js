document.addEventListener('DOMContentLoaded', () => {

  /* ── Tabs ── */
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === target));
      document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === target));
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  });

  /* ── Portfolio filter ── */
  document.querySelectorAll('.fbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll('.fbtn').forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll('.pf-cat').forEach(cat => {
        cat.classList.toggle('hidden', filter !== 'all' && cat.dataset.cat !== filter);
      });
    });
  });

  /* ── Poster modal ── */
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  document.querySelectorAll('.pf-card[data-poster]').forEach(card => {
    card.querySelector('.pf-left').addEventListener('click', () => {
      modalImg.src = `media/${card.dataset.poster}.png`;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { modalImg.src = ''; }, 200);
  }

  document.querySelector('.modal-bg').addEventListener('click', closeModal);
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
