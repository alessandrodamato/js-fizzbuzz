FizzBuzz
===
**Consegna**  
Scrivi un programma che **stampi in console** i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.  
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.  

**Prima di partire a scrivere codice poniamoci qualche domanda:**  
Come faccio a sapere se un numero è divisibile per un altro?  
Abbiamo visto qualcosa di particolare che possiamo usare? 

**Consigli del giorno**  
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare  
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”  

**Bonus 1**  
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()` oppure concatenando un template literal con innerHTML) un elemento html con il numero o la stringa corretta da mostrare.  

**Bonus 2**  
Applica stili differenti agli elementi aggiunti al DOM nel *Bonus 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.  
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.  

## Svolgimento
1. Utilizzare un ciclo *for* per stampare in console i numeri da 1 a 100.
2. Inserire le varie condizioni per i multipli di 3, di 5 e di 3 e 5 insieme. Per sapere se un numero è divisibile per un altro possiamo usare un modulo *%*.
3. Stampare nel DOM il relativo blocco in base alla condizione (Bonus).
