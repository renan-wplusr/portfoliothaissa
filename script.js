const tituloOriginal = document.querySelector("h1.h1_section").innerHTML;
const textoOriginal = document.querySelector("p.p_section1").innerHTML;
const imagemOriginal = "/templates/thaissar.jpg";

function mudarTextos(botao) {
  const titulo = document.querySelector("h1.h1_section");
  const paragrafo = document.querySelector("p.p_section1");
  const imagem = document.querySelector("img");

  titulo.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  paragrafo.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  imagem.style.transition = "transform 0.6s ease, opacity 0.6s ease";
  titulo.style.transform = "rotateY(90deg)";
  paragrafo.style.transform = "rotateY(90deg)";
  imagem.style.transform = "rotateY(90deg)";
  titulo.style.opacity = "0";
  paragrafo.style.opacity = "0";
  imagem.style.opacity = "0";

  setTimeout(() => {
    if (botao === "Habilidades") {
      titulo.innerHTML = "Habilidades";
      paragrafo.innerHTML =
        "Introduzir habilidades de Thaissar. BLEBLEBLE BLELBEL BLEBEL.";
      imagem.src = "/templates/thaissa_ghibli.png";
    } else if (botao === "Experiências") {
      titulo.innerHTML = "Experiências";
      paragrafo.innerHTML =
        "Introduzir experiências de Thaissar. BLEBLEBLE BLELBEL BLEBEL.";
      imagem.src = "/templates/expr.png";
    } else {
      titulo.innerHTML = tituloOriginal;
      paragrafo.innerHTML = textoOriginal;
      imagem.src = imagemOriginal;
    }

    titulo.style.transform = "rotateY(0deg)";
    paragrafo.style.transform = "rotateY(0deg)";
    imagem.style.transform = "rotate(0deg)";
    titulo.style.opacity = "1";
    paragrafo.style.opacity = "1";
    imagem.style.opacity = "1";
  }, 600);
}
