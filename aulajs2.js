function saldoatual(saldoinicial,valordacompra){
    return `o seu saldo atual e ${saldoinicial - valordacompra}`
}
let saldoinicial = prompt(`digite seu saldo`)

let valordacompra = prompt(`digite o valor da compra`)

if (saldoinicial < valordacompra)
    alert(`seu saldo e inscuficiente`)
else if(saldoinicial >= valordacompra)
    alert(`sua compra foi concluida e o seu saldo atual e ${saldoinicial - valordacompra}`)  
    
        





//alert(saldoatual(prompt(`digite seu saldo inicial`,prompt(`digite o valor da compra`))))

//let saldoinicial = prompt(`digite seu saldo`)

//let valordacompra = prompt(`digite o valor da compra`)

//let saldoatual = `saldoinicial` - `valordacompra`
//alert(`seu saldo atual é ${saldoinicial-valordacompra}`)

//if (valordacompra <= saldoinicial)
    //alert('parabens sua compra foi concluida');



//else if (valordacompra  > saldoinicial)
    
    //alert('saldo inscuficiente');
