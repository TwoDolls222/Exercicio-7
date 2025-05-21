

function adicionarBloco() {
    const area = document.getElementById("areaBlocos");
    const bloco = document.createElement("div");
    const comment = document.getElementById("comentario2").value;
    bloco.className = "bloco";
    bloco.textContent = comment;
    console.log(`comentario adicionado: ${comment}`)

    area.appendChild(bloco);
  }

  function removerBloco() {
    const area = document.getElementById("areaBlocos");
    const ultBloco = area.lastElementChild;

    if (ultBloco) {
      area.removeChild(ultBloco);
    }
  }