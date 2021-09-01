import kotlinx.browser.*
import org.w3c.dom.*

var jogador = 1
var rodadas = 0

@JsName("checarFinal")
fun checarFinal(){  
    val botao1 = document.getElementById("b1") as HTMLDivElement
    val botao2 = document.getElementById("b2") as HTMLDivElement
    val botao3 = document.getElementById("b3") as HTMLDivElement
    val botao4 = document.getElementById("b4") as HTMLDivElement
    val botao5 = document.getElementById("b5") as HTMLDivElement
    val botao6 = document.getElementById("b6") as HTMLDivElement
    val botao7 = document.getElementById("b7") as HTMLDivElement
    val botao8 = document.getElementById("b8") as HTMLDivElement
    val botao9 = document.getElementById("b9") as HTMLDivElement

    val mostrador = document.querySelector("h2")

    if(botao1.innerHTML == botao2.innerHTML && botao1.innerHTML == botao3.innerHTML && botao2.innerHTML == botao3.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao1.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(botao4.innerHTML == botao5.innerHTML && botao4.innerHTML == botao6.innerHTML && botao5.innerHTML == botao6.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao4.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(botao7.innerHTML == botao8.innerHTML && botao7.innerHTML == botao9.innerHTML && botao8.innerHTML == botao9.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao7.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(botao1.innerHTML == botao4.innerHTML && botao1.innerHTML == botao7.innerHTML && botao4.innerHTML == botao7.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao1.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(botao2.innerHTML == botao5.innerHTML && botao2.innerHTML == botao8.innerHTML && botao5.innerHTML == botao8.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao2.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(botao3.innerHTML == botao6.innerHTML && botao3.innerHTML == botao9.innerHTML && botao6.innerHTML == botao9.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao3.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(botao1.innerHTML == botao5.innerHTML && botao1.innerHTML == botao9.innerHTML && botao5.innerHTML == botao9.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao1.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(botao3.innerHTML == botao5.innerHTML && botao3.innerHTML == botao7.innerHTML && botao5.innerHTML == botao7.innerHTML){
        window.setTimeout({window.alert("Jogador " + botao3.innerHTML + " venceu!")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }

    else if(rodadas == 9){
        window.setTimeout({window.alert("Velha.")}, 150)
        window.setTimeout({window.location.reload()}, 151)

        if(mostrador != null){
            mostrador.innerHTML = "Fim de Jogo!"
        }
    }
}

@JsName("click")
fun click(id:String){
    if(jogador == 1){
        val botao = document.getElementById(id) as HTMLDivElement
        val mostrador = document.querySelector("h2")

        botao.innerHTML = "X"
        botao.style.color = "rgb(3, 151, 114)"
        if(mostrador != null){
            mostrador.innerHTML = "Vez do jogador: O"
        }
        
        jogador = 2
    }else{
        val botao = document.getElementById(id) as HTMLDivElement
        val mostrador = document.querySelector("h2")
        
        botao.innerHTML = "O"
        if(mostrador != null){
            mostrador.innerHTML = "Vez do jogador: X"
        }
        
        jogador = 1
    }
    
    rodadas++
    checarFinal()     
}