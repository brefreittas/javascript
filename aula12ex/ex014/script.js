function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'img/foto-manha.png'
        document.body.style.background = '#cedfe7'

    }else if (hora >= 12 && hora <= 18) {
        img.src = 'img/foto-tarde.png'
        document.body.style.background = '#d8cec1'
    }else {
        img.src = 'img/foto-noite.png'
        document.body.style.background = '#493a57'

    }
}
