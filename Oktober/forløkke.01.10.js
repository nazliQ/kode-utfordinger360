// opg.1  Lag et rutenett med tall
//Skriv et program som genererer en streng som 
//representerer et rutenett på 5x5 der hvert tall i 
//rutenettet er summen av radnummer og kolonnenummer. 
//Bruk newline (\n) for å skille linjene.


function tabell(){
    let rutenett = 5;
    let string = "0";

    for(let rad = 0; rad < rutenett; rad++ ){
        for(let kol = 0; kol < rutenett; kol++){

            string += (rad + kol) + " ";
        }
        string += "\n";
    }

    console.log(string)
}

