// Gustavo Moscovich - Comision 48130

// se pide al usuario que seleccione un tipo prefijado de Héroe y de Villano
// cada héroe y villano tienen defindo una energía inicial y una determinada potencia de ataque
// se ejecutan 4 peleas entre ambos, si entre pelea y pelea alguno baja su energía a cero o debajo de cero
// se notifica al usuario y se termina la contienda.
// si se llegan a ejecutar las 4 peleas se evalúa las energías de ambos contrincantes y gana quien mas energía tenga
// si ambos tienen el mismo nivel de energía se decreta empate.
// 


let pregunta = ''
let formaHeroe = ''
let energiaBaseHeroe = 0
let danioHeroe = 0
let formaVillano = ''
let energiaBaseVillano = 0
let danioVillano = 0

const esPar = (x) => { return (x%2) }

// Setea al Héroe....
do {
    pregunta = prompt('Desea Crear un Mago, Guerrero o Tanque? (M / G / T): ')
    if (pregunta==='M' || pregunta==='G' || pregunta==='T') {
        configuraPersonaje('H'+pregunta)
        break
    } else {
            alert('Su opción debe ser M, G o T - Vuela a intentarlo ')
            continue
        }
} while (1===1)

// Setea al Villano....
do {
    pregunta = prompt('Desea Crear un Goblin, Orco o Demonio? (G / O / D): ')
    if (pregunta==='G' || pregunta==='O' || pregunta==='D') {
        configuraPersonaje('V'+pregunta)
        break
    } else {
        alert('Su opción debe ser G, O o D - Vuela a intentarlo ')
        continue
        }
} while (1===1)

// luchan 4 veces las impares Villano ataca a Heroe y las pares Héroe ataca a Villano
for (i=1; i<5; i++) {
    if (esPar(i)===0) {
        batalla('H') // Es Par entonces ataca el Héroe
        alert('El Héroe '+formaHeroe+' ha atacado al Villano '+formaVillano+' con una potencia de '+danioHeroe+'\n\n El Villano solo tiene '+energiaBaseVillano+' unidades de vida')
    } else {
            batalla('V') // Es Impar entonces ataca el Villano
            alert('El Villano '+formaVillano+' ha atacado al Héroe '+formaHeroe+' con una potencia de '+danioVillano+'\n\n El Héroe solo tiene '+energiaBaseHeroe+' unidades de vida')
        }

    if (energiaBaseHeroe<=0) {
        alert('EL HÉROE '+formaHeroe+' FUE VENCIDO POR EL VILLANO '+formaVillano)
        break
    }

    if (energiaBaseVillano<=0) {
        alert('EL VILLANO '+formaVillano+' FUE VENCIDO POR EL HÉROE '+formaHeroe)
        break
    }

}

if (energiaBaseHeroe>0 && energiaBaseVillano>0) {

    if ((energiaBaseHeroe-energiaBaseVillano)>0) {
        alert('Si bien ambos siguen con vida ha ganado el Héroe!!')
    } else if ((energiaBaseHeroe-energiaBaseVillano)<0) {
            alert('Si bien ambos siguen con vida ha ganado el Villano!!')
        } else {
            alert('La batalla ha resultado en un empate entre '+formaHeroe+' y '+formaVillano)
            }
}



function batalla (ataca) {
    if (ataca==='H') {
        energiaBaseVillano=energiaBaseVillano-danioHeroe
    } else {
        energiaBaseHeroe=energiaBaseHeroe-danioVillano
        }
}


function configuraPersonaje (personaje) {
    switch (personaje) {
        case 'HM':
            formaHeroe='MAGO'
            energiaBaseHeroe=225
            danioHeroe = 150
            break
        case 'HG':
            formaHeroe='GUERRERO'
            energiaBaseHeroe=300
            danioHeroe = 80
            break
        case 'HT':
            formaHeroe='TANQUE'
            energiaBaseHeroe=450
            danioHeroe = 50
            break
        case 'VG':
            formaVillano='GOBLIN'
            energiaBaseVillano = 180
            danioVillano = 70
            break    
        case 'VO':
            formaVillano='ORCO'
            energiaBaseVillano = 350
            danioVillano = 130
            break
        case 'VD':
            formaVillano='DEMONIO'
            energiaBaseVillano = 450
            danioVillano = 110
            break
        }
}

