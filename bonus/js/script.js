const btn = document.querySelector('button');


btn.addEventListener('click',function(){
    const Numsquare = parseInt( document.getElementById('difficolta').value);
    const result = document.getElementById('playground');
    // impedisce che l'utente ripremendo invia ricrei più celle del limite
    result.innerHTML=``;

    //creo quadratini con la funzione e li stampo in html con i numeri sopra
    for(let i=0;i<Numsquare;i++){
        let square = drawSquare(i,Numsquare);
        result.append(square);
    }
});

//la funzione prende l'indice dei quadrati e il numero di quadrati da scrivere
//poi crea dei div
//aggiunge classe square da css
//da dimensione ai quadratini a seconda dell'numSquare
//stampa indice nel quadratino
//da modifiche con funzione di click
function drawSquare(squareIndex,numSquare){
    const square = document.createElement('div');
    square.classList.add('square');
    const squareWith = Math.sqrt(numSquare);
    square.style.width =` calc(100% / ${squareWith})`;
    // square.style.height =` calc(100% / ${squareWith})`;
    square.style.height = square.style.width;
    square.innerHTML= squareIndex+1;

    //al click sul quadratino aggiunge classe active di css e stampa in console indice del quadratino cliccato
    square.addEventListener('click', function(){
        square.classList.add('active');
        console.log(squareIndex+1);
    }) ;

    return square;
}