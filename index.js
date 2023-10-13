function valores(d, k, f, kl, pk, t) {
    const front = document.querySelector('.result')

    const ul = document.createElement('ul')
    ul.className = "result"

    const liD = document.createElement('li')
    liD.className = "destino-final"
    liD.innerText = `Você viajou para ${d}.`

    const liValues = document.createElement('li')
    liValues.className = "dados-viagem"
    liValues.innerText = `Você percoreu ${k} KM e gastou ${f} reais de combustivel!`

    const liCalcs = document.createElement('li')
    liCalcs.className = "calculos-viagem"
    liCalcs.innerText = `Seu carro fez ${kl.toFixed(2)} Km/L. A viagem teve o gasto total de ${t} reais, sendo R$ ${pk} por KM.`

    ul.append(liD, liValues, liCalcs)
    front.append(ul)
}

document.querySelector('.calc').addEventListener("click", (ev)=>{
    ev.preventDefault()

    const destiny = document.getElementById('destiny').value
    const km = document.getElementById('km').value
    const fuel = document.getElementById('fuel').value
    const price = document.getElementById('price').value

    let kmL = parseFloat(km) / parseFloat(fuel)
    let priceKm = parseFloat(price) / kmL
    let total  = parseFloat(fuel) * parseFloat(price)

    valores(destiny, km, fuel, kmL, priceKm, total)

})