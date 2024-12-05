# Ascom-Challenge

Questo progetto è un'applicazione web basata su React per la gestione dei dati dei pazienti. L'applicazione permette di visualizzare una lista di pazienti.

Funzionalità principali
Visualizzazione lista pazienti: Recupera e mostra un elenco di pazienti.
Dettagli paziente: Visualizza i dettagli completi di un singolo paziente, incluse le informazioni personali e i parametri associati.
Sistema di allarme: Ogni parametro ha uno stato di allarme che può attivare avvisi visivi quando il valore di un parametro supera una soglia prestabilita.

Tecnologie utilizzate
Frontend: React.js, JSX, HTML, CSS
Gestione dello stato: React Hooks (useState, useEffect, etc.)
Richieste HTTP: Axios per le chiamate API
Strumento di build: Webpack per il bundling dell'applicazione
API: L'app interagisce con un'API di backend per ottenere e inviare dati dei pazienti

Requisiti
Per eseguire questo progetto in locale, è necessario avere installato sul proprio computer:

Node.js (versione 14 o successiva)
npm (Node package manager)

Una volta dentro la cartella del progetto, esegui il comando per installare tutte le dipendenze necessarie:
npm install

Per avviare il server di sviluppo e visualizzare l'app in locale, esegui il seguente comando:
npm start
Questo avvierà l'applicazione su http://localhost:3000.

Se desideri preparare una versione ottimizzata per la produzione, puoi creare una build eseguendo:
npm run build
Questo genererà una cartella build/ contenente i file minificati e ottimizzati per il deployment.
