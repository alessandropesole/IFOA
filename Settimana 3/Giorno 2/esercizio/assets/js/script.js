  /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = () =>  {
        const titolo = document.querySelector('h1');
        titolo.innerText = 'Questo è il titolo h1 modificato'; 
       }
       changeTitle()
       

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
       document.querySelector('h1').className = 'myHeading';
       }
       addClassToTitle()
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        const pFigliDiv = document.querySelectorAll('div p');
        for(i = 0; i < pFigliDiv.length; i++) {
            pFigliDiv[i].innerText = 'Sto provando a cambiare il testo'
        }
       }
       
       changePcontent()
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        const rinominaLink = document.querySelectorAll('a');
            for (i = 0; i < rinominaLink.length - 1; i++) {
                rinominaLink[i].href = 'https://www.google.com'
                rinominaLink[i].innerText = 'Questo link porterà alla home page di Google.'
            }
       }
       changeUrls()
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
      

       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
       
        const addParagraph = function (content) {
            const div = document.querySelector('div')
      
            let par = document.createElement("p")
            par.innerText = content
            div.appendChild(par)

       }
       addParagraph('paragrafo aggiunto')
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
        document.getElementById('firstList').style.display = 'none'
       }
       hideFirstUl();
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        const verde = document.querySelectorAll('ul');
        for (i=0; i < verde.length; i++) {
            verde[i].style.backgroundColor = 'green';
        }
        }
        paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {}
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {}
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {}
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}