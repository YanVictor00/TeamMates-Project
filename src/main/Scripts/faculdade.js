function mostrarSemestre(semestre) {
      const cards = document.querySelectorAll('.cards');
      cards.forEach(card => {
        card.classList.remove('active');
      });

      if (semestre) {
        const cardSelecionado = document.getElementById(semestre);
        if (cardSelecionado) {
          cardSelecionado.classList.add('active');
        }
      }
    }