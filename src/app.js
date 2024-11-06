window.onload = function() {
  let pronombres = ["the", "our"];

  let adjetivos = ["great", "big"];

  let sustantivos = ["jogger", "racoon"];

  let dominios = pronombres
    .map(x => adjetivos.map(y => sustantivos.map(z => x + y + z).flat()).flat())
    .flat();

  console.log(dominios.map(i => i + ".com"));
};
