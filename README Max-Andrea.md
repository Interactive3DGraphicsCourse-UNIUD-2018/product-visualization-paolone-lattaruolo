# Inizio progetto
Il progetto definitivo prevede la costruzione di una pagina Web legata alla fornitura di mobili e al rendering di un comodino da letto.


<a href="https://ibb.co/njUpco"><img src="https://image.ibb.co/hEQ6OT/Screenshot_67.png" alt="Screenshot_67" border="0"></a>

## Costruzione generale
La creazione della pagina web è nata  inizialmente dalla scelta del modello, basata su un comodino da letto appunto. Una volta deciso il modello da renderizzare, abbiamo iniziato a suddividere il lavoro creando alternativamente la pagina web legata alla sua visualizzazione e alla sua personalizzazione e gli shader legati ai materiali che più ci sembravano consoni al rendering di quest'ultimo.

### Costruzione della pagina web.
La pagina web è nata in seguito alla scelta del modello: abbiamo voluto personalizzarla affinchè desse l'idea di essere effettivamente un e-commerce legato in questo caso però alla sola vendita di mobilia. La personalizzazione riguarda principalmente la scelta delle immagini pubblicitarie poste all'interno della pagina e i titoli con il "logo ufficiale" dell'azienda, con evidenti richiami al settore.
Il modello in vendita è inizialmente non visibile:

<img src="https://image.ibb.co/g0MfiT/Screenshot_66.png" alt="Screenshot 66" border="0" />

sarà il cliente, in una ipotetica scelta personale (qui resa fasulla poichè di fronte ad un solo modello) a scegliere l'oggetto di cui necessita, il quale viene poi successivamente messo a schermo con la sua descrizione e la sua relativa personalizzazione.

#### Modello.
Per il modello da renderizzare la nostra scelta è ricaduta su un comodino: dopo averlo scaricato da sketchfab, lo abbiamo convertito in formato glb tramite clay viewer e poi usato all'interno del nostro progetto. Una volta fatto ciò, ci siamo adoperati per scegliere gli shader che più risaltassero il corpo da un lato e i piedini più i cassetti di quest'ultimo dall'altro. Le scelte sono ricadute nelle seguenti associazioni: 
Per il corpo del comodino sono stati scelti 3 diversi tipi di legno:
- Pino
- Ebano
- Noce
e una plastica grigia.

Per i piedini e i cassetti sono invece stati scelti  l'oro e i precedenti legni già utilizzati per il corpo.

##### CubeMap
All'interno del file del comodino abbiamo inserito una cubemap accompagnata da una IEM per risaltare magggiormente il riflesso, in particolare dell'oro: la cubemap in questione rappresenta una stanza di hotel e si può trovare nella directory cubemap/im. 
