---
title: "Carta del Mese: Saga di Urza"
createdAt: 2021-08-26T20:57:00.000Z
updatedAt: 2021-08-26T20:57:00.000Z
author: nonno-scialpi
category: carta-del-mese
abstract: "Fino a pochi mesi fa, \"Saga di Urza\" era univocamente il nome di
  una fondamentale espansione di Magic, uscita nel remoto 1998. Giugno 2021:
  viene pubblicata Modern Horizons II, una espansione dal power level
  decisamente elevato, che porterà sconquasso in tutti i formati in cui è
  legale. Urza's Saga è una carta di MH2. Molto più che un inside joke, è una
  delle carte più di valore e ricercate dell'es..."
---
![Saga di Urza - MH2](/uploads/mh2-259-urza-s-saga.jpg "Saga di Urza - MH2")

Fino a pochi mesi fa, "Saga di Urza" era univocamente il nome di una fondamentale espansione di Magic, uscita nel remoto 1998.\
Giugno 2021: viene pubblicata Modern Horizons II, una espansione dal power level decisamente elevato, che porterà sconquasso in tutti i formati in cui è legale.

<Card>Urza's Saga</Card> è una carta di MH2. Molto più che un inside joke, è una delle carte più di valore e ricercate dell'espansione, ha cambiato il volto del Modern, e ha avuto un impatto anche sul Legacy.\
La versatilità e potenza della carta sono pari alla sua peculiarità dal punto di vista del regolamento (una terra che è anche una Saga, per dirne una): facciamone quindi una trattazione estesa.

## Sulla terza abilità

Quando aggiungiamo il terzo segnalino, l'abilità "search for an artifact card" va in pila. Appena l'abilità lascia la pila, Urza's Saga viene sacrificata come azione di stato.\
È possibile rispondere all'abilità, e se lo facciamo, lo facciamo con Urza's Saga ancora in campo. Ad esempio, prima di cercare l'artefatto, siamo ancora in tempo a tappare Urza's Saga per prendere mana (e ricordiamo che il tutto avviene in main phase, quindi ci saranno molti modi per spendere quel mana).\
Non è possibile lasciar risolvere l'abilità e poi tappare per il mana: poiché Urza's Saga viene sacrificata come azione di stato, i giocatori non ricevono priorità prima del sacrificio!\
La terza abilità ci consente di cercare una carta artefatto con mana cost {0} o {1}. Attenzione a non confondere il mana cost (tipo e quantità di mana richiesti per lanciare la magia) con il mana value (fu "costo di mana convertito" – quantità di mana richiesto per lanciare la magia, senza considerare il tipo).\
L'artefatto cercato deve proprio costare {0} o {1}, non basta che abbia mana value 0 o 1.

- <Card>Lotus Petal</Card> ha mana cost {0} OK! {0} = {0}
- <Card>Lotus Bloom</Card> non ha mana cost, quindi ha mana value 0 NO! Null != {0}
- <Card>Darksteel Citadel</Card> non ha mana cost, quindi ha mana value 0 NO! Null != {0}
- <Card>Engineered Explosives</Card> ha mana cost {X}, quindi ha mana value 0 NO! {X} != {0}
- <Card>Pithing Needle</Card> ha mana cost {1} OK! {1} = {1}
- <Card>Executioner's Capsule</Card> ha mana cost {B} NO! {B} != {1}
- <Card>Arcum's Astrolabe</Card> ha mana cost {S} NO! {S} != {1}


## Interazione con Thespian's Stage

Cosa succede se copiamo <Card>Urza's Saga</Card> con <Card>Thespian's Stage</Card>?\
Thespian's Stage diventa una copia di Urza's Saga, inizialmente senza segnalini e senza abilità. Nei turni successivi, guadagnerà segnalini e abilità, esattamente come l'originale.

Supponiamo di mettere l'abilità del capitolo III in pila, e di rispondere trasformando Thespian Stage in una copia di una terra non Saga, diciamo una <Card>Forest</Card>.\
Quando l'abilità del capitolo III lascia la pila, Thespian's Stage / <Card>Forest</Card> non solo non viene sacrificata (non è più una Saga, la relativa azione di stato non si applica), ma conserva le abilità dei capitoli I e II! (Gli effetti "gain abilities" si applicano sempre dopo gli effetti di copia, anche quando sono stati generati prima temporalmente).

Alla fine del processo, Thespian's Stage è una Foresta base, con in più:

- la seconda abilità di Thespian's Stage
- le due abilità derivanti da Capitolo I e Capitolo II di Urza's Saga
- tre segnalini

Le varie abilità guadagnate permangono anche se Thespian's Stage diventa una copia di un'altra terra ancora. Copiare una seconda Urza's Saga potrebbe non essere un'idea brillante, perchè a causa della presenza dei segnalini, la copia verrebbe sacrificata immediatamente.


## Interazione con Blood Moon

Che succede se <Card>Urza's Saga</Card> è in campo, e risolve <Card>Blood Moon</Card>?

Urza's Saga è una "Enchantment Land - Urza's Saga". Nello specifico, è un incantesimo con sottotipo Saga, e una terra con sottotipo Urza's.\
Blood Moon ha due effetti su Urza's Saga:

1) Sovrascrive il sottotipo di terra Urza's col sottotipo Mountain. Non sovrascrive il sottotipo di incantesimo Saga
2) Urza's Saga perde tutto il proprio testo, e acquista il testo intrinseco delle montagne "{TAP}: add {R}"

Urza's Saga è ancora una Saga, ma ha perso il testo contenente i capitoli.\
Se una saga ha sopra tanti segnalini quanti sono i suoi capitoli, o più segnalini dei capitoli, viene sacrificata come azione di stato. \
Urza's Saga sotto Blood Moon ha zero capitoli, e per forza di cose ha almeno zero segnalini sopra, quindi viene sacrificata immediatamente.\
Se Blood Moon era già in campo, e giochiamo Urza's Saga, essa entra in campo come "Enchantment Land - Mountain Saga", senza testo a parte "{TAP}: add {R}", e viene sacrificata immediatamente.

## Interazione con effetti simili a Blood Moon

Quanto detto vale solo per <Card>Blood Moon</Card>, o anche per altre carte?

Distinguiamo gli effetti che rendono <Card>Urza's Saga</Card> "un tipo di terra base" _tout court_, e quelli che la rendono "un tipo di terra base _in aggiunta agli altri tipi di terra_".

Gli effetti della prima categoria sbianchettano il testo di Urza's Saga, che viene sacrificata. Esempi: <Card>Spreading Seas</Card>, <Card>Tide Shaper</Card>.

Gli effetti della seconda categoria non sbianchettano il testo di Urza's Saga, che semplicemente guadagna un tipo di terra e un'abilità di mana, senza perdere nulla. Esempio: <Card>Urborg</Card>, <Card>Tomb of Yawgmoth</Card>. Urza's Saga guadagna il sottotipo Swamp, l'abilità "{TAP}: add {B}", ma non perde il testo come nell'altro caso descritto.
