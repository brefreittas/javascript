function calcular() {
    let nome = document.getElementById('txtnome').value
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let media = (nota1 + nota2) / 2

    let msg
    if (media >= 5) {
        msg = 'Aprovado!'
    } else {
        msg = 'Reprovado!'
    }

    res.innerHTML = `Calculando a média final de <strong>${nome}</strong> <br>
    As notas obtidas foram <strong>${nota1}</strong> e <strong>${nota2}</strong> <br>
    A média final será <strong>${media}</strong> <br>
    A situação final do aluno é: <strong>${msg}</strong>`
}