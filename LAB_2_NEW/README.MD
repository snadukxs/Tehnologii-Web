1. Ce este o resursă (resource) în aplicația mea?

O resursă în aplicația mea este orice pagină sau fișier care oferă informații despre campus.
Exemple de resurse:

Biblioteca – pagină cu program și locație

Cantina – meniu și ore de funcționare

Evenimente – lista evenimentelor campusului

Practic, o resursă reprezintă un obiect sau o informație specifică pe care aplicația îl pune la dispoziția utilizatorului.

2. Exemplu de URI și explicația componentelor

Exemplu de URI:

https://campusinfohub.example.com/library

https:// → scheme/protocol: indică modul de acces (HTTP securizat)

campusinfohub.example.com → domeniu/host: serverul unde se află aplicația

/library → path: identifică resursa specifică “Biblioteca”


3. Părți statice și dinamice

Statice: conținutul care nu se schimbă la cererea utilizatorului, de exemplu fișiere HTML, CSS sau imagini.

Dinamice: conținutul generat sau modificat de JavaScript folosind date din JSON (ex: lista evenimentelor sau meniul cantinei actualizat).

În aplicația mea, paginile HTML sunt statice, iar informațiile afișate din fișierul JSON sunt dynamice, pentru că se pot schimba fără a modifica codul HTML.


4. Document-centric sau interactive?

Aplicația este ambele:

Document-centric: pentru că oferă informații statice despre campus (ex: orele cantinei, locația bibliotecii).

Interactive: pentru că JavaScript încarcă date dinamice din JSON, permițând utilizatorului să vadă informații actualizate sau filtrate fără a reîncărca pagina.

Această combinație face aplicația mai flexibilă și ușor de folosit pentru studenți.