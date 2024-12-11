<script>
        let audioElement = new Audio();  // Crea un oggetto audio globale
	function playSound(type) {
    let audioElement;
    switch (type) {
        case 'accept':
            audioElement = document.getElementById('audio-accept');
            break;
        case 'refuse':
            audioElement = document.getElementById('audio-refuse');
            break;
        case 'destiny':
            audioElement = document.getElementById('audio-destiny');
            break;
    }
    if (audioElement) {
        audioElement.currentTime = 0; // Riavvia l'audio
        audioElement.play();
    }
}
function playAudioAndStartTimer(audioFile, points) {
    audioElement.pause(); // Ferma l'audio precedente
    audioElement.src = audioFile;  // Imposta il nuovo file audio
    audioElement.play();  // Riproduce il nuovo audio
    audioElement.onended = function() {
        startTimer(points);  // Quando l'audio finisce, avvia il timer
    };
}
        let points = 0;
        let character = "";
        let currentChallenge = {};
        let currentChallengeType = '';
        let timerInterval;
        let totalTime;
	    
        const challengeList = {
            accept: [
    { "challenge": "Fai 20 salti consecutivi senza fermarti", "points": 5 },
    { "challenge": "Danza per 1 minuto senza ripetere i movimenti", "points": 5 },
    { "challenge": "Racconta una barzelletta e fallo senza ridere", "points": 5 },
    { "challenge": "Imita una celebrità senza dire il suo nome", "points": 5 },
    { "challenge": "Trova 5 oggetti che iniziano con la lettera 'S'", "points": 5 },
    { "challenge": "Disegna un animale con gli occhi chiusi", "points": 5 },
    { "challenge": "Conta da 1 a 50 al contrario senza sbagliare", "points": 5 },
    { "challenge": "Stai in equilibrio su un piede per 30 secondi", "points": 5 },
    { "challenge": "Fai 15 flessioni in meno di 30 secondi", "points": 5 },
    { "challenge": "Recita il testo di una canzone famosa senza cantare", "points": 5 },
    { "challenge": "Trova un oggetto di ogni colore dell'arcobaleno", "points": 5 },
    { "challenge": "Inventati una nuova parola e usa 3 frasi per spiegarla", "points": 5 },
    { "challenge": "Scrivi una parola usando solo la bocca (mima con le labbra)", "points": 5 },
    { "challenge": "Fai 3 salti con una giravolta completa", "points": 5 },
    { "challenge": "Disegna un oggetto usando solo linee rette", "points": 5 },
    { "challenge": "Imita il verso di 3 animali diversi", "points": 5 },
    { "challenge": "Trova 3 oggetti fatti di metallo", "points": 5 },
    { "challenge": "Dì il tuo nome al contrario in meno di 10 secondi", "points": 5 },
    { "challenge": "Crea una piccola storia usando 5 parole a caso", "points": 5 },
    { "challenge": "Trova qualcosa nella stanza che non può rompersi", "points": 5 },
    { "challenge": "Racconta una breve storia inventata in 1 minuto", "points": 5 },
    { "challenge": "Fai 10 squat con un oggetto in mano", "points": 5 },
    { "challenge": "Disegna una mappa della tua città in 1 minuto", "points": 5 },
    { "challenge": "Trova un oggetto che inizi con la lettera 'Z'", "points": 5 },
    { "challenge": "Conta 15 oggetti nella stanza in 30 secondi", "points": 5 },
    { "challenge": "Fai un passo di danza complicato e ripetilo due volte", "points": 5 },
    { "challenge": "Trova un oggetto che pesa più di 1 kg", "points": 5 },
    { "challenge": "Crea una forma geometrica con 3 oggetti della stanza", "points": 5 },
    { "challenge": "Disegna un animale che non esiste", "points": 5 },
    { "challenge": "Trova un oggetto che può galleggiare in acqua", "points": 5 },
    { "challenge": "Canta una canzone al contrario (parole invertite)", "points": 5 },
    { "challenge": "Dì 3 città di uno stesso continente in 10 secondi", "points": 5 },
    { "challenge": "Fai 20 passi indietro senza guardare", "points": 5 },
    { "challenge": "Scrivi una frase usando solo le iniziali che scegli", "points": 5 },
    { "challenge": "Trova un oggetto nella stanza che è morbido e rotondo", "points": 5 },
    { "challenge": "Fai una statua vivente e stai fermo per 30 secondi", "points": 5 },
    { "challenge": "Indovina un numero tra 1 e 20 in 3 tentativi", "points": 5 },
    { "challenge": "Conta da 1 a 30 saltellando", "points": 5 },
    { "challenge": "Disegna una faccia che mostra 2 emozioni diverse", "points": 5 },
    { "challenge": "Trova un oggetto che è più alto di te", "points": 5 },
    { "challenge": "Trova qualcosa che emette luce", "points": 5 },
    { "challenge": "Disegna un animale marino in meno di 20 secondi", "points": 5 },
    { "challenge": "Fai una piramide con oggetti della stanza", "points": 5 },
    { "challenge": "Descrivi il tuo film preferito senza nominarlo", "points": 5 },
    { "challenge": "Dì un proverbio in meno di 5 secondi", "points": 5 },
    { "challenge": "Indossa 3 oggetti che non sono vestiti", "points": 5 },
    { "challenge": "Imita il tuo personaggio di film o serie preferito", "points": 5 },
    { "challenge": "Trova un oggetto con una scritta sopra e leggila al contrario", "points": 5 },
    { "challenge": "Crea una figura usando 5 dita e un oggetto", "points": 5 },
    { "challenge": "Trova qualcosa che inizia con 'F' e spiegane l'uso", "points": 5 },
    { "challenge": "Danza come un robot per 20 secondi", "points": 5 },
    { "challenge": "Inventati una nuova mossa di ballo e mostrala", "points": 5 },
    { "challenge": "Racconta un fatto interessante su te stesso", "points": 5 },
    { "challenge": "Disegna il tuo animale preferito senza staccare la penna dal foglio", "points": 5 },
    { "challenge": "Trova un oggetto con più di 5 lettere nel suo nome", "points": 5 },
    { "challenge": "Fai 10 piegamenti sulle ginocchia con le mani in alto", "points": 5 },
    { "challenge": "Trova un oggetto che emette suono", "points": 5 },
    { "challenge": "Conta da 50 a 0 al contrario in meno di 1 minuto", "points": 5 },
    { "challenge": "Racconta un indovinello e dai 2 indizi", "points": 5 },
    { "challenge": "Fai una mini-lezione su un argomento che conosci", "points": 5 },
    { "challenge": "Inventati una nuova parola e scrivi una breve poesia usando quella parola", "points": 5 },
    { "challenge": "Trova un oggetto triangolare", "points": 5 },
    { "challenge": "Disegna un oggetto di fantasia con tre colori diversi", "points": 5 }
            ],
            refuse: [
    { "challenge": "Trova un oggetto blu nella stanza", "points": 2 },
    { "challenge": "Conta da 1 a 20 senza fermarti", "points": 2 },
    { "challenge": "Disegna un cuore in meno di 10 secondi", "points": 2 },
    { "challenge": "Trova un oggetto che sia rotondo", "points": 2 },
    { "challenge": "Fai un sorriso per 10 secondi di fila", "points": 2 },
    { "challenge": "Batti le mani 10 volte di seguito", "points": 2 },
    { "challenge": "Descrivi il tuo colore preferito in una frase", "points": 2 },
    { "challenge": "Trova un oggetto che puoi tenere in una mano", "points": 2 },
    { "challenge": "Dì il nome di 3 animali che vivono nell'acqua", "points": 2 },
    { "challenge": "Trova qualcosa che profuma", "points": 2 },
    { "challenge": "Imita il verso di un cane", "points": 2 },
    { "challenge": "Conta quanti oggetti hai addosso (vestiti e accessori)", "points": 2 },
    { "challenge": "Trova un oggetto che puoi usare per scrivere", "points": 2 },
    { "challenge": "Fai 5 piccoli saltelli sul posto", "points": 2 },
    { "challenge": "Disegna un sole con un sorriso", "points": 2 },
    { "challenge": "Trova un oggetto di forma quadrata", "points": 2 },
    { "challenge": "Dì una parola che inizia con la lettera 'M'", "points": 2 },
    { "challenge": "Trova un oggetto morbido nella stanza", "points": 2 },
    { "challenge": "Fai un movimento come se stessi nuotando", "points": 2 },
    { "challenge": "Trova qualcosa che puoi usare per bere", "points": 2 },
    { "challenge": "Trova un oggetto che si accende", "points": 2 },
    { "challenge": "Fai un piccolo disegno su un pezzo di carta", "points": 2 },
    { "challenge": "Trova qualcosa di più piccolo della tua mano", "points": 2 },
    { "challenge": "Dì il nome di un frutto rosso", "points": 2 },
    { "challenge": "Trova un oggetto che si può piegare", "points": 2 },
    { "challenge": "Conta fino a 10 nella tua testa", "points": 2 },
    { "challenge": "Trova un oggetto che abbia almeno 3 colori", "points": 2 },
    { "challenge": "Imita il verso di un gatto", "points": 2 },
    { "challenge": "Trova qualcosa che sia lungo e stretto", "points": 2 },
    { "challenge": "Disegna una stella in meno di 15 secondi", "points": 2 },
    { "challenge": "Trova un oggetto che abbia una scritta sopra", "points": 2 },
    { "challenge": "Dì una parola che termina con la lettera 'O'", "points": 2 },
    { "challenge": "Trova un oggetto che inizi con la lettera 'C'", "points": 2 },
    { "challenge": "Fai un applauso lento per 5 secondi", "points": 2 },
    { "challenge": "Trova un oggetto che è fatto di plastica", "points": 2 },
    { "challenge": "Descrivi un oggetto nella stanza usando una sola parola", "points": 2 },
    { "challenge": "Trova un oggetto che abbia un bordo liscio", "points": 2 },
    { "challenge": "Dì il nome di un animale che vive nel bosco", "points": 2 },
    { "challenge": "Trova un oggetto che sia più corto del tuo piede", "points": 2 },
    { "challenge": "Fai un piccolo cerchio con le mani", "points": 2 },
    { "challenge": "Trova un oggetto che sia fatto di carta", "points": 2 },
    { "challenge": "Canta una nota musicale per 3 secondi", "points": 2 },
    { "challenge": "Trova qualcosa che sia trasparente", "points": 2 },
    { "challenge": "Conta quanti oggetti ci sono su una superficie vicina", "points": 2 },
    { "challenge": "Dì il nome di un colore che ti piace", "points": 2 },
    { "challenge": "Trova un oggetto che emetta luce (acceso o spento)", "points": 2 },
    { "challenge": "Trova qualcosa che sia più alto di una bottiglia", "points": 2 },
    { "challenge": "Fai una mini giravolta sul posto", "points": 2 },
    { "challenge": "Trova un oggetto con una superficie ruvida", "points": 2 }
            ],
            destiny: [
    { "challenge": "Esegui 50 salti sul posto in meno di 1 minuto", "points": 10 },
    { "challenge": "Memorizza e recita una frase di 20 parole lette solo una volta", "points": 10 },
    { "challenge": "Stai in equilibrio su un piede per 1 minuto senza muoverti", "points": 10 },
    { "challenge": "Trova 10 oggetti nella stanza che non hanno nulla in comune tra loro", "points": 10 },
    { "challenge": "Completa un sudoku semplice in meno di 5 minuti", "points": 10 },
    { "challenge": "Risolvi un indovinello complesso senza aiuti esterni", "points": 10 },
    { "challenge": "Recita una poesia famosa senza sbagliare una parola", "points": 10 },
    { "challenge": "Trova e descrivi 3 differenze tra due immagini simili in meno di 2 minuti", "points": 10 },
    { "challenge": "Dì il nome di 10 città europee in meno di 15 secondi", "points": 10 },
    { "challenge": "Disegna una figura geometrica complessa usando un solo tratto continuo", "points": 10 },
    { "challenge": "Trova un oggetto che pesi esattamente 500 grammi (puoi usare una bilancia)", "points": 10 },
    { "challenge": "Esegui una verticale (anche appoggiato a un muro) per almeno 5 secondi", "points": 10 },
    { "challenge": "Risolvi una moltiplicazione a mente con numeri a due cifre (es. 47x56)", "points": 10 },
    { "challenge": "Trova 5 oggetti nella stanza che iniziano con la stessa lettera", "points": 10 },
    { "challenge": "Crea un origami di base usando solo un foglio di carta", "points": 10 },
    { "challenge": "Disegna una mappa dettagliata del quartiere dove vivi", "points": 10 },
    { "challenge": "Memorizza una sequenza di 10 numeri in 30 secondi e ripetila", "points": 10 },
    { "challenge": "Canta una canzone famosa sostituendo le parole con rime diverse", "points": 10 },
    { "challenge": "Trova un oggetto che galleggia in acqua e dimostralo", "points": 10 },
    { "challenge": "Calcola la somma dei numeri da 1 a 50 a mente", "points": 10 },
    { "challenge": "Trova una parola di almeno 10 lettere e spiegane il significato", "points": 10 },
    { "challenge": "Imita 5 accenti diversi in meno di 1 minuto", "points": 10 },
    { "challenge": "Fai 30 flessioni consecutive senza fermarti", "points": 10 },
    { "challenge": "Trova 3 oggetti che rappresentano concetti opposti (es. caldo e freddo)", "points": 10 },
    { "challenge": "Disegna un autoritratto in meno di 2 minuti", "points": 10 },
    { "challenge": "Trova un oggetto nella stanza e spiegane il funzionamento tecnico", "points": 10 },
    { "challenge": "Crea una frase che contenga almeno 5 parole che iniziano con 'P'", "points": 10 },
    { "challenge": "Completa una divisione lunga a mente (es. 178 ÷ 6)", "points": 10 },
    { "challenge": "Trova un oggetto con una superficie irregolare e descrivilo", "points": 10 },
    { "challenge": "Scrivi una breve storia che inizia con 'Una volta, in un luogo lontano...'", "points": 10 },
    { "challenge": "Impara a dire 'Ciao' in 5 lingue diverse", "points": 10 },
    { "challenge": "Esegui un passo di danza che non conosci cercandolo in un video tutorial", "points": 10 },
    { "challenge": "Trova 3 oggetti fatti di materiali diversi (es. metallo, legno, plastica)", "points": 10 },
    { "challenge": "Crea un castello di carte che rimanga in piedi per almeno 10 secondi", "points": 10 },
    { "challenge": "Disegna un animale inventato e assegnagli un nome e una descrizione", "points": 10 },
    { "challenge": "Trova 5 parole che terminano con la stessa lettera", "points": 10 },
    { "challenge": "Ripeti una filastrocca famosa al contrario (parola per parola)", "points": 10 },
    { "challenge": "Trova 3 oggetti che producono suoni diversi e dimostralo", "points": 10 },
    { "challenge": "Crea una frase con tutte le vocali dell'alfabeto italiano (A, E, I, O, U)", "points": 10 },
    { "challenge": "Disegna una macchina futuristica con almeno 3 funzionalità immaginarie", "points": 10 },
    { "challenge": "Calcola quante ore ci sono in 17 giorni", "points": 10 },
    { "challenge": "Trova un oggetto che sia multifunzionale e spiegane i vari utilizzi", "points": 10 },
    { "challenge": "Racconta una storia di 1 minuto usando solo parole di due sillabe", "points": 10 },
    { "challenge": "Trova un oggetto con un design unico e descrivine i dettagli", "points": 10 },
    { "challenge": "Trova una poesia breve e recitala con enfasi", "points": 10 },
    { "challenge": "Descrivi un oggetto usando solo termini scientifici", "points": 10 },
    { "challenge": "Impara il nome di 3 costellazioni e descrivine una", "points": 10 },
    { "challenge": "Trova un oggetto che abbia una storia legata alla tua famiglia", "points": 10 },
    { "challenge": "Crea un gioco da tavolo usando materiali che hai in casa", "points": 10 },
    { "challenge": "Trova 5 parole che abbiano la stessa radice", "points": 10 }
],
	       };
document.getElementById('intro-video').addEventListener('ended', function() {
    // Nascondi il video quando è terminato
    document.getElementById('intro-video').style.display = 'none';
    // Mostra la schermata di selezione del personaggio
    document.getElementById('start-screen').classList.remove('hidden');
});
document.getElementById('challenge-video').addEventListener('ended', function() {
    // Nascondi il video quando è terminato
    document.getElementById('challenge-video').style.display = 'none';
});
	    
function selectCharacter() {
            character = document.getElementById('character-select').value;
            document.getElementById('character-name').innerText = character;
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('game-screen').classList.remove('hidden');
        }

        function acceptChallenge() {
		    playSound('accept'); // Riproduce il suono per "Sfida accettata"
            currentChallengeType = 'accept';
            loadChallenge();
        }

        function refuseChallenge() {
		    playSound('refuse'); // Riproduce il suono per "Sfida rifiutata"
            currentChallengeType = 'refuse';
            loadChallenge();
        }

        function destinyChallenge() {
		    playSound('destiny'); // Riproduce il suono per "Mettiti alla prova"
            currentChallengeType = 'destiny';
            loadChallenge();
        }

        function loadChallenge() {
    const challenge = getRandomChallenge(currentChallengeType);  // Recupera la sfida
    currentChallenge = challenge;

    // Mostra la sfida nell'interfaccia utente
    document.getElementById('challenge-title').innerText = challenge.challenge;
    document.getElementById('challenge-description').innerText = `Punti: ${challenge.points}`;
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('challenge-screen').classList.remove('hidden');

    // Riproduce l'audio e poi avvia il timer
    if (currentChallengeType === 'accept') {
        playAudioAndStartTimer('sfida_accettata.mp3', challenge.points);
    } else if (currentChallengeType === 'refuse') {
        playAudioAndStartTimer('sfida_rifiutata.mp3', challenge.points);
    } else if (currentChallengeType === 'destiny') {
        playAudioAndStartTimer('mettiti_in_gioco.mp3', challenge.points);
    }
}

        function getRandomChallenge(type) {
            const challenges = challengeList[type];
            return challenges[Math.floor(Math.random() * challenges.length)];
        }
		
function showTimeUpModal() {
    document.getElementById('time-up-modal').style.display = 'flex';  // Mostra il pop-up
}

function closeTimeUpModal() {
    document.getElementById('time-up-modal').style.display = 'none';  // Nasconde il pop-up
}

        function startTimer(points) {
            let duration;
            if (points === 2) {
                duration = 15;  // 15 secondi per sfide da 2 punti
            } else if (points === 5) {
                duration = 30;  // 30 secondi per sfide da 5 punti
            } else if (points === 10) {
                duration = 45;  // 45 secondi per sfide da 10 punti
            }

            totalTime = duration;
            document.getElementById('timer-number').innerText = `${totalTime}s`;

            const barWidth = (duration / totalTime) * 100;
            document.getElementById('timer-bar').style.width = `${barWidth}%`;

            timerInterval = setInterval(function() {
                duration--;
                document.getElementById('timer-number').innerText = `${duration}s`;
                const barWidth = (duration / totalTime) * 100;
                document.getElementById('timer-bar').style.width = `${barWidth}%`;

                if (duration <= 0) {
    clearInterval(timerInterval);
    showTimeUpModal();  // Mostra il pop-up del tempo scaduto
    returnToGameScreen();
}
            }, 1000);
        }

        function completeChallenge() {
            clearInterval(timerInterval);  // Ferma il timer
            points += currentChallenge.points;
            document.getElementById('points-value').innerText = points;
            returnToGameScreen();
            checkForWinner();
        }

        function returnToGameScreen() {
            document.getElementById('challenge-screen').classList.add('hidden');
            document.getElementById('game-screen').classList.remove('hidden');
            document.getElementById('points').classList.remove('hidden');
        }

        function changeChallenge() {
            clearInterval(timerInterval);  // Ferma il timer
            returnToGameScreen();
        }

        function showRegulation() {
            document.getElementById('regulation-modal').style.display = 'flex';
        }

        function closeRegulation() {
            document.getElementById('regulation-modal').style.display = 'none';
        }

        function checkForWinner() {
            if (points >= 50) {
                showCongratulations();
            }
        }

        function showCongratulations() {
            document.getElementById('winner-name').innerText = character;
            document.getElementById('final-points').innerText = points;
            document.getElementById('congratulations-modal').style.display = 'flex';
        }

        function closeCongratulations() {
            document.getElementById('congratulations-modal').style.display = 'none';
        }
    </script>
