    document.addEventListener('DOMContentLoaded', function () {
      // Animación de barras de habilidades
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        setTimeout(() => {
          bar.style.width = percent + '%';
        }, 300);
      });

      // Botón de impresión
      document.getElementById('printBtn').addEventListener('click', function () {
        // Mostrar mensaje de ayuda
        alert('Para mejor resultado, en la ventana de impresión:\n1. Selecciona "Guardar como PDF"\n2. Ajusta márgenes a "Mínimo"\n3. Verifica que todo el contenido esté visible');

        // Imprimir después de 500ms
        setTimeout(() => {
          window.print();
        }, 500);
      });

      // Ajustar automáticamente al imprimir
      window.addEventListener('beforeprint', () => {
        document.body.style.fontSize = '10pt';
      });

      window.addEventListener('afterprint', () => {
        document.body.style.fontSize = '';
      });

      // Validar que todo entre en una hoja
      function checkPageFit() {
        const container = document.querySelector('.cv-container');
        const containerHeight = container.offsetHeight;
        const maxHeight = 29.7 * 37.8; // 29.7cm a píxeles (1cm = 37.8px)

        if (containerHeight > maxHeight) {
          console.log('Aviso: El contenido podría exceder una página. Altura actual:',
            Math.round(containerHeight / 37.8) + 'cm');
        }
      }

      // Verificar después de cargar
      setTimeout(checkPageFit, 1000);
    });
