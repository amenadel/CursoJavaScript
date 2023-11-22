// Debounce

//Um evento que dispara multiplas vezes pode ser um problema para a o computador do cliente

//Por isso podemos fazer um debounce, que é um suavizzador de evento para não chamar o mesmo tantas vezes

window.addEventListener("mousemove", function(){
    this.clearTimeout(timeout)
    timeout = setTimeout(() => console.log("Debounce"), 500)
})