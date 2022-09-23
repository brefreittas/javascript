function verificar() {
  let ano = new Date().getFullYear();
  let fano = document.querySelector('input#txtano');
  let res = document.querySelector('div#res');

  if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
    alert('VERIFIQUE OS DADOS E TENTE NOVAMENTE');
  } else {
    let fsex = document.getElementsByName('radsex');
    let idade = ano - fano.value;
    let gen = '';
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
      gen = 'Homem';

      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'img/homem-crianca.png');
      } else if (idade < 21) {
        img.setAttribute('src', 'img/homem-jovem.png');
      } else if (idade < 50) {
        img.setAttribute('src', 'img/homem-adulto.png');
      } else {
        img.setAttribute('src', 'img/homem-idoso.png');
      }
    } else {
      gen = 'Mulher';

      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'img/mulher-crianca.png');
      } else if (idade < 21) {
        img.setAttribute('src', 'img/mulher-jovem.png');
      } else if (idade < 50) {
        img.setAttribute('src', 'img/mulher-adulta.png');
      } else {
        img.setAttribute('src', 'img/mulher-idosa.png');
      }
    }
    res.innerHTML = `Detectamos ${gen} com ${idade} anos`;
    res.appendChild(img);
  }
}
