// Code your solutions in this file

function writeCards(names, event ){
    let cards = []
    for ( let i = 0; i < names.length; i ++ ) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        console.log(message)  //Printing Message 
        cards.push(message)   //Putting Message in box
    }
    return cards; //Return array with message.
    
}


function countDown(number) {
    while (number > 0 ){
        console.log(number--);

    }
    console.log(number)
}