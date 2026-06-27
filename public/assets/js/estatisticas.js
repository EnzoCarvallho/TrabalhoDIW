fetch("http://localhost:3000/artistas")
  .then(res => res.json())
  .then(artistas => {

    const paises = {};

    artistas.forEach(artista => {

      if (paises[artista.pais]) {
        paises[artista.pais]++;
      } else {
        paises[artista.pais] = 1;
      }

    });

    const ctx = document.getElementById("graficoPais");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(paises),
        datasets: [{
          label: "Quantidade de artistas",
          data: Object.values(paises)
        }]
      }
    });

  });