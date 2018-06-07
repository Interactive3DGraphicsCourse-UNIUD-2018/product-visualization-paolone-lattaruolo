
# Journal

## Day 1
  Abbiamo cercato un modello idoneo per il progetto, abbiamo optato per diversi oggetti, ma alla fine abbiamo deciso di utilizzare un
  comodino.
  Dal sito sketchfab abbiamo provato diversi modelli finchè non abbiamo trovato quello idoneo e che più ci piacesse.
  ### Problemi
  Abbiamo avuto diversi problemi a caricare il file scaricato dal sito sopra citato nello script di javascript. Molti modelli provati, 
  pur scaricandoli nel formato gltf non funzionavano oppure non venivano caricati da THREEjs
  ### Soluzioni
  Uno dei problemi era dovuto alla vecchia versione di THREEjs che si stava utilizzando; dopo l'aggiornamento di questa molti modelli
  si riuscivano a caricare senza problemi. Anche se alcuni modelli presentavano dei difetti in merito ai materiali.
  Alcuni modelli scaricati in GLTF non era possibile modificarli o lavorarci sopra è stato necessario scaricarli nel formato obj e poi 
  convertirli nel formato GLTF.
  
## Day 2
  Dopo aver preso il modello abbiamo visionato i materiali idonei per la realizzazione. Utilizzando bit2mapmaterial è stato possibile
  reperire le texture aggiuntive per rendere il modello più realistico tra cui la normal,roughness,ecc...
  ### Problemi
  Non ci sono stati grossi problemi apparte riuscire a capire come utilizzare bit2map per ottenere le texture che ci interessavano.

## Day 3
  Inizio progettazione e stesura codice per il sito web, abbiamo optato per un sito ecommerce incentrato sul mobilio. 
  ### Problemi
  ### Soluzioni
  
## Day 4
  Luci aggiunte all'ambiente, dopo diverse prove è stato deciso di adottare una point light come luce principale, una ambientlight per
  i materiali plastici e legnosi , mentre per i metalli è stata adottata una EnvironmentLight proveniente dal EM. 
  ## Problemi
  Più che problemi sono stati riscontrati momenti di indecisione e dubbi sulle luci da utilizzare,
  ## Soluzioni
  
## Day 5
   Siamo riusciti a mettere delle icone/immagini in cui è possibile cliccare per cambiare il materiale dell'oggetto dinamicamente.
   ### Problemi
   Il grosso problema è stato capire che metodi utilizzare per il passaggio dei parametri. O meglio come riuscire a passare i valori
   desiderati come parametri allo script del modello caricato nello script js.
   Quando siamo riusciti a fare il passagio dei parametri ci siamo accorti che,con il metodo che abbiamo adottato, siamo in grado di
   passare un solo materiale per volta(quello che viene cliccato); per cui era necessario trovare un modo per far si che non perdessimo
   i vecchi materiali scelti dall'utente.
   ### Soluzioni
   Il passaggio dei parametri tra le due interfaccie è stato possibile con ....
   Mentre fare in modo di ricordarsi i vecchi materiali è stato reso possibile grazie ai cookie.
## Day 6
  Revisione progetto ultime modiche.
  ### Problemi
  ### Soluzioni
