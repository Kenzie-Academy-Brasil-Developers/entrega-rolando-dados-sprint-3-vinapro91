const resultNumero = document.getElementById("resultados-numeros")
const resultGrafico = document.getElementById("resultado-grafico")
const resultCel = document.getElementById("resultado-cel")

const buttom = document.getElementById("hiden")

    const rollDice1 = () => {
    let dado = Math.floor(Math.random() * 6)+ 1
    return dado
    }

    const rollDice2 = () => {
        let dado = Math.floor(Math.random() * 6)+ 1
        return dado
    }

    const sunDice = (dado1, dado2) => {
        let somaDados = dado1 + dado2
        return somaDados
    }

    const milDados = () => {
        let rolamento =[] 
        for (let i = 1; i <1000; i++){
            rolamento[i] = rollDice1() + rollDice2()
        }
        return rolamento
    }

    let arrayDados = milDados()

    
     const contaRolamento = () => {
            let counts = []
            for (let i = 0; i < arrayDados.length; i++){
            counts[arrayDados[i]-2] = (counts[arrayDados[i]-2] + 1) || 1
                
            }
            
        return counts
                
    }
        contaRolamento()
 console.log(contaRolamento())
 let objectRolmento = contaRolamento()

 const renderizaResultado  = () => {
     let conta = contaRolamento()
    
    for (let i = 0; i<conta.length; i++){
        let newElement = document.createElement("div");
            newElement.className = "bar";
            newElement.style.width = 10 + conta[i]*2 + "px";
        let text = document.createTextNode(i + 2 + ":" + conta[i] )
        newElement.appendChild(text)
        resultGrafico.appendChild(newElement)
    }
 } 
 renderizaResultado()

            let newElement = document.createElement("div");
            for(let i = 0; i <objectRolmento.length;i++){
                let text = document.createTextNode(i + 2 +  ":" + objectRolmento[i])
                let newParagraf = document.createElement("p")
            newElement.appendChild(newParagraf)
            newParagraf.appendChild(text)
            resultNumero.appendChild(newElement)
            }
 
 const mostraTela = () => {
     resultNumero.style.display = "block"
     resultGrafico.style.display = "flex"
 }
    
 buttom.addEventListener("click" , mostraTela)

 const renderizaResultado2  = () => {
    let conta = contaRolamento()
   
   for (let i = 0; i<conta.length; i++){
       let newElement = document.createElement("div");
           newElement.className = "bar";
           newElement.style.height = 10 + conta[i]*2 + "px";
       let text = document.createTextNode(i + 2 + ":" + conta[i] )
       newElement.appendChild(text)
       resultCel.appendChild(newElement)
   }
} 
renderizaResultado2()