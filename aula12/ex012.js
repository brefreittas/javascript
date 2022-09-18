var now = new Date()
var hour = now.getHours()

console.log(`Agora são exatamente ${hour} horas.`)

if (hour < 5 && hour >= 0) {
    console.log('Boa Madrugada!')
} else if (hour < 12) {
    console.log('Bom Dia!')
} else if (hour <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}