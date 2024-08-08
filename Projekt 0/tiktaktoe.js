const Felder = document.querySelectorAll('.Feld')
const blau = document.querySelectorAll('.blau')
const rot = document.querySelectorAll('.red')
const gewonnen = document.querySelector('.gewonnen')
const unentschieden = document.querySelector('.unentschieden')
const feld = document.querySelector('.wrapper')
const A1 = document.getElementById('A1')
const A2 = document.getElementById('A2')
const A3 = document.getElementById('A3')
const B1 = document.getElementById('B1')
const B2 = document.getElementById('B2')
const B3 = document.getElementById('B3')
const C1 = document.getElementById('C1')
const C2 = document.getElementById('C2')
const C3 = document.getElementById('C3')

const Einzellspieler = document.getElementById('Mehrspieler')
const Mehrspieler = document.getElementById('Einzelspieler')

let runde = 0;
let gewinn= false;
disableAll()
feld.classList.add('vor')
Einzellspieler.classList.add('vor')
Mehrspieler.classList.add('vor')

Einzellspieler.addEventListener('click', ()=>{
    if(!Einzellspieler.classList.contains('disabled')){
        feld.classList.remove('vor')
        Einzellspieler.classList.remove('vor')
        Mehrspieler.classList.remove('vor')
        disableAuswahl()
        gewinn = false
        gewonnen.classList.remove('active')
        disableAll()
        able()
        feld.classList.remove('end')
        einzelspieler()
    }
})

Mehrspieler.addEventListener('click', ()=>{
    if(!Einzellspieler.classList.contains('disabled')){
    disableAuswahl()
    feld.classList.remove('vor')
    Einzellspieler.classList.remove('vor')
    Mehrspieler.classList.remove('vor')
        gewinn = false
        gewonnen.classList.remove('active')
        disableAll()
        able()
        feld.classList.remove('end')
        mehrspieler()
    }
})

function einzelspieler(){
Felder.forEach(feld => {
    feld.addEventListener('click', ()=>{
        if(runde % 2 == 0 && !feld.classList.contains('active') && gewinn  === false){
            feld.classList.add('active')
            feld.classList.add('blue')
            runde++
            win()
        }else if(!feld.classList.contains('active')  && gewinn  === false){
            feld.classList.add('active')
            feld.classList.add('red')
            runde++
            win()
        }
        if(gewinn === true){
            disableAll
        }
    })
});
}

function win(){
    if((A1.classList.contains('blue') && A2.classList.contains('blue') && A3.classList.contains('blue')) 
        ||(B1.classList.contains('blue') && B2.classList.contains('blue') && B3.classList.contains('blue'))
        ||(C1.classList.contains('blue') && C2.classList.contains('blue') && C3.classList.contains('blue'))
        ||(A1.classList.contains('blue') && B1.classList.contains('blue') && C1.classList.contains('blue'))
        ||(A2.classList.contains('blue') && B2.classList.contains('blue') && C2.classList.contains('blue'))
        ||(A3.classList.contains('blue') && B3.classList.contains('blue') && C3.classList.contains('blue'))
        ||(A1.classList.contains('blue') && B2.classList.contains('blue') && C3.classList.contains('blue'))
        ||(A3.classList.contains('blue') && B2.classList.contains('blue') && C1.classList.contains('blue'))
        ){
                gewonnen.innerHTML= `Blau hat gewonnen`
                gewonnen.classList.add('active')
                gewonnen.classList.add('blue')
                gewonnen.classList.remove('red')
                gewinn = true
                ableAuswahl()
                feld.classList.add('end')
            }

    if((A1.classList.contains('red') && A2.classList.contains('red') && A3.classList.contains('red')) 
        ||(B1.classList.contains('red') && B2.classList.contains('red') && B3.classList.contains('red'))
        ||(C1.classList.contains('red') && C2.classList.contains('red') && C3.classList.contains('red'))
        ||(A1.classList.contains('red') && B1.classList.contains('red') && C1.classList.contains('red'))
        ||(A2.classList.contains('red') && B2.classList.contains('red') && C2.classList.contains('red'))
        ||(A3.classList.contains('red') && B3.classList.contains('red') && C3.classList.contains('red'))
        ||(A1.classList.contains('red') && B2.classList.contains('red') && C3.classList.contains('red'))
        ||(A3.classList.contains('red') && B2.classList.contains('red') && C1.classList.contains('red'))
        ){
                gewonnen.innerHTML= `Rot hat gewonnen`
                gewonnen.classList.add('active')
                gewonnen.classList.add('red')
                gewonnen.classList.remove('blue')
                gewinn = true
                ableAuswahl()
                feld.classList.add('end')
            }
    if(end()){
        gewonnen.classList.remove('red')
        gewonnen.classList.remove('blue')
        gewonnen.innerHTML= `Unentschieden`
        gewonnen.classList.add('active')
        gewinn = true
        ableAuswahl()
        feld.classList.add('end')
    }
}

function end(){
    let a = 0
    Felder.forEach(feld =>{
        if(feld.classList.contains('active')){
        a++
        }
    }
    )
    if(a === Felder.length){
        return true
    }
    else{
        return false
    }
}

function disable(){
    Felder.forEach(feld =>{
        if(!feld.classList.contains('active')){
            feld.classList.add('disabled')
        }
    })
}

function able(){
    Felder.forEach(feld =>{
        if(!feld.classList.contains('active')){
            feld.classList.remove('disabled')
        }
    })
}

function mehrspieler(){

    Felder.forEach(feld => {
        feld.addEventListener('click', ()=>{
            if(!feld.classList.contains('active') && gewinn  === false){
                feld.classList.add('active')
                feld.classList.add('blue')
                win()
                if(gewinn === false){
                myTurn()
                win()
                }
            }
        })
    });
}

function myTurn(){
    if((!A1.classList.contains('blue') && A2.classList.contains('red') && A3.classList.contains('red'))
        ||(!A1.classList.contains('blue') && B1.classList.contains('red') && C1.classList.contains('red'))
        ||(!A1.classList.contains('blue') && B2.classList.contains('red') && C3.classList.contains('red'))
    ){
        A1.classList.remove('disabled')
        A1.classList.add('active')
        A1.classList.add('red')
    }else

    if((A1.classList.contains('red') && !A2.classList.contains('blue') && A3.classList.contains('red'))
        ||(!A2.classList.contains('blue') && B2.classList.contains('red') && C2.classList.contains('red'))
    ){
        A2.classList.remove('disabled')
        A2.classList.add('active')
        A2.classList.add('red')
    }
    else
    if((A1.classList.contains('red') && A2.classList.contains('red') && !A3.classList.contains('blue'))
        ||(!A3.classList.contains('blue') && B3.classList.contains('red') && C3.classList.contains('red'))
        ||(!A3.classList.contains('blue') && B2.classList.contains('red') && C1.classList.contains('red'))
    ){
        A3.classList.remove('disabled')
        A3.classList.add('active')
        A3.classList.add('red')
    }
    else
    if((!B1.classList.contains('blue') && B2.classList.contains('red') && B3.classList.contains('red'))
        ||(A1.classList.contains('red') && !B1.classList.contains('blue') && C1.classList.contains('red'))
    ){
        B1.classList.remove('disabled')
        B1.classList.add('active')
        B1.classList.add('red')
    }
    else
    if((B1.classList.contains('red') && !B2.classList.contains('blue') && B3.classList.contains('red'))
        ||(A2.classList.contains('red') && !B2.classList.contains('blue') && C2.classList.contains('red'))
        ||(A3.classList.contains('red') && !B2.classList.contains('blue') && C1.classList.contains('red'))
    ){
        B2.classList.remove('disabled')
        B2.classList.add('active')
        B2.classList.add('red')
    }
    else
    if((B1.classList.contains('red') && B2.classList.contains('red') && !B3.classList.contains('blue'))
        ||(A3.classList.contains('red') && !B3.classList.contains('blue') && C3.classList.contains('red'))
    ){
        B3.classList.remove('disabled')
        B3.classList.add('active')
        B3.classList.add('red')
    }
    if((!C1.classList.contains('blue') && C2.classList.contains('red') && C3.classList.contains('red'))
        ||(A1.classList.contains('red') && B1.classList.contains('red') && !C1.classList.contains('blue'))
        ||(!C1.classList.contains('blue') && B2.classList.contains('red') && A3.classList.contains('red'))
    ){
        C1.classList.remove('disabled')
        C1.classList.add('active')
        C1.classList.add('red')
    }else


    if((C1.classList.contains('blue') && !C2.classList.contains('red') && C3.classList.contains('blue'))
        ||(A2.classList.contains('blue') && B2.classList.contains('blue') && !C2.classList.contains('red'))
    ){
        C2.classList.remove('disabled')
        C2.classList.add('active')
        C2.classList.add('red')
    }
    else
    if((C1.classList.contains('blue') && C2.classList.contains('blue') && !C3.classList.contains('red'))
        ||(!C3.classList.contains('red') && B3.classList.contains('blue') && A3.classList.contains('blue'))
        ||(!C3.classList.contains('red') && B2.classList.contains('blue') && A1.classList.contains('blue'))
    ){
        C3.classList.remove('disabled')
        C3.classList.add('active')
        C3.classList.add('red')
    }
    else
    if((!A1.classList.contains('red') && A2.classList.contains('blue') && A3.classList.contains('blue'))
            ||(!A1.classList.contains('red') && B1.classList.contains('blue') && C1.classList.contains('blue'))
            ||(!A1.classList.contains('red') && B2.classList.contains('blue') && C3.classList.contains('blue'))
        ){
            A1.classList.remove('disabled')
            A1.classList.add('active')
            A1.classList.add('red')
        }
    else
    
    if((A1.classList.contains('blue') && !A2.classList.contains('red') && A3.classList.contains('blue'))
            ||(!A2.classList.contains('red') && B2.classList.contains('blue') && C2.classList.contains('blue'))
        ){
            A2.classList.remove('disabled')
            A2.classList.add('active')
            A2.classList.add('red')
        }
    else
    if((A1.classList.contains('red') && A2.classList.contains('red') && !A3.classList.contains('blue'))
            ||(!A3.classList.contains('red') && B3.classList.contains('blue') && C3.classList.contains('blue'))
            ||(!A3.classList.contains('red') && B2.classList.contains('blue') && C1.classList.contains('blue'))
        ){
            A3.classList.remove('disabled')
            A3.classList.add('active')
            A3.classList.add('red')
        }
    else
    if((!B1.classList.contains('red') && B2.classList.contains('blue') && B3.classList.contains('blue'))
            ||(A1.classList.contains('blue') && !B1.classList.contains('red') && C1.classList.contains('blue'))
        ){
            B1.classList.remove('disabled')
            B1.classList.add('active')
            B1.classList.add('red')
        }
    else
    if((B1.classList.contains('blue') && !B2.classList.contains('red') && B3.classList.contains('blue'))
            ||(A2.classList.contains('blue') && !B2.classList.contains('red') && C2.classList.contains('blue'))
            ||(A3.classList.contains('blue') && !B2.classList.contains('red') && C1.classList.contains('blue'))
        ){
            B2.classList.remove('disabled')
            B2.classList.add('active')
            B2.classList.add('red')
        }
    else
    if((B1.classList.contains('blue') && B2.classList.contains('blue') && !B3.classList.contains('red'))
            ||(A3.classList.contains('blue') && !B3.classList.contains('red') && C3.classList.contains('blue'))
        ){
            B3.classList.remove('disabled')
            B3.classList.add('active')
            B3.classList.add('red')
        }
    else
    if((!C1.classList.contains('red') && C2.classList.contains('blue') && C3.classList.contains('blue'))
            ||(A1.classList.contains('blue') && B1.classList.contains('blue') && !C1.classList.contains('red'))
            ||(!C1.classList.contains('red') && B2.classList.contains('blue') && A3.classList.contains('blue'))
        ){
            C1.classList.remove('disabled')
            C1.classList.add('active')
            C1.classList.add('red')
        }
    else
    if((C1.classList.contains('blue') && !C2.classList.contains('red') && C3.classList.contains('blue'))
            ||(A2.classList.contains('blue') && B2.classList.contains('blue') && !C2.classList.contains('red'))
        ){
            C2.classList.remove('disabled')
            C2.classList.add('active')
            C2.classList.add('red')
        }
    else
    if((C1.classList.contains('blue') && C2.classList.contains('blue') && !C3.classList.contains('red'))
            ||(!C3.classList.contains('red') && B3.classList.contains('blue') && A3.classList.contains('blue'))
            ||(!C3.classList.contains('red') && B2.classList.contains('blue') && A1.classList.contains('blue'))
        ){
            C3.classList.remove('disabled')
            C3.classList.add('active')
            C3.classList.add('red')
        }
    else{
    let wiederholung = 0;
    while( wiederholung === 0){
        let Random = getRandomInt(8)
        console.log(Random)
        console.log(wiederholung)
        if(!Felder[Random].classList.contains('active')){
            Felder[Random].classList.remove('disabled')
            Felder[Random].classList.add('active')
            Felder[Random].classList.add('red')
            wiederholung++
        }
    }
}
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function disableAll(){
    Felder.forEach(feld =>{
        feld.classList.remove('blue')
        feld.classList.remove('red')
        feld.classList.remove('active')
        feld.classList.add('disabled')
    })
}

function disableAuswahl(){
    Einzellspieler.classList.add('disabled')
    Mehrspieler.classList.add('disabled')
}

function ableAuswahl(){
    Einzellspieler.classList.remove('disabled')
    Mehrspieler.classList.remove('disabled')
}