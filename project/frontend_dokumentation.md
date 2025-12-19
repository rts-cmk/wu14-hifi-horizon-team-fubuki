# Frontend dokumentation

## Projektoversigt
Dette dokument beskriver opbygningen af en frontend-hjemmeside udviklet med **Vite**, **React** og **React Router**. Projektet er struktureret med fokus på genbrugelige komponenter, overskuelig mappestruktur og klar adskillelse mellem logik, styling og visning.

Projektet fungerer som en webshop-lignende applikation med flere sider såsom produkter, profil, betaling og sammenligning af produkter.

---

## Teknologier

Projektet er bygget med følgende teknologier:

- **Vite** – Hurtigt build-tool og udviklingsserver
- **React** – Komponentbaseret JavaScript-bibliotek
- **React Router** – Håndtering af navigation og sider (pages)
- **SASS (.sass)** – Styling af applikationen
- **JavaScript (ES6+)** – Logik og datahåndtering

---

## Mappestruktur

Projektets struktur er opdelt i logiske mapper for bedre overblik:

```
/public
 └── images

/src
 ├── components
 │    ├── CartItem.jsx
 │    ├── CreateAccount.jsx
 │    ├── Delivery.jsx
 │    ├── footer.jsx
 │    ├── header.jsx
 │    ├── LoginAccount.jsx
 │    ├── Method.jsx
 │    ├── Newsletter.jsx
 │    ├── PaymentProgress.jsx
 │    ├── Popular.jsx
 │    ├── ProductCategories.jsx
 │    ├── Products.jsx
 │    ├── ProfileContent.jsx
 │    ├── ProfileInfo.jsx
 │    ├── ProfileOrders.jsx
 │    ├── Terms.jsx
 │    └── YourInfo.jsx
 ├── pages
 │    ├── Layout.jsx
 │    ├── Home.jsx
 │    ├── AboutUs.jsx
 │    ├── ContactUs.jsx
 │    ├── Product.jsx
 │    ├── ProductDetails.jsx
 │    ├── ProductComparison.jsx
 │    ├── MoreInfo.jsx
 │    ├── Cart.jsx
 │    ├── Payment.jsx
 │    ├── Invoice.jsx
 │    ├── Login.jsx
 │    ├── Profile.jsx
 │    └── Error.jsx
 ├── helpers
 │    ├── cartHandler.js
 │    ├── compareLoader.js
 │    ├── dataLoader.js
 │    ├── popularLoader.js
 │    ├── productLoader.js
 │    └── profileLoader.js
 ├── styles
 │    ├── _aboutus.sass
 │    ├── _cart.sass
 │    ├── _comparison.sass
 │    ├── _contactus.sass
 │    ├── _details.sass
 │    ├── _footer.sass
 │    ├── _header.sass
 │    ├── _invoice.sass
 │    ├── _login.sass
 │    ├── _menu.sass
 │    ├── _payment.sass
 │    ├── _primary.sass
 │    ├── _product.sass
 │    ├── _profile.sass
 │    ├── _progress.sass
 │    ├── _resets.sass
 │    ├── _sections.sass
 │    ├── _terms.sass
 │    ├── _variables.sass
 │    └── main.sass
 ├── App.jsx
 ├── main.jsx

```

---

## Styling

Alle styles i projektet er samlet i én hovedfil:

- `main.sass`

Denne fil indeholder:

- Globale styles
- Variabler (farver, fonts osv.)
- Imports af eventuelle del-styles

`main.sass` er linket direkte i **main.jsx**, så alle styles bliver indlæst globalt i applikationen.

Dette giver:

- Bedre struktur
- Nemmere vedligeholdelse
- Ensartet design på tværs af sider

---

## Routing og Layout

### React Router

Projektet anvender **React Router** til at styre navigation mellem siderne.

### Layout.jsx

`Layout.jsx` fungerer som en wrapper for alle sider og indeholder:

- **Header-komponent**
- **Footer-komponent**
- `<Outlet />` til visning af den aktive side

Dette sikrer, at header og footer vises på alle sider uden gentagelse af kode.

---

## Pages

## Routing og sideoversigt

Nedenstående visualisering viser, hvordan **routes** i `App.jsx` er opbygget ved hjælp af `createBrowserRouter`, og hvordan de mapper til de forskellige pages i projektet.

### Overordnet routing-struktur

```
/
└── Layout
    ├── /                     → Home
    ├── /products             → Product
    ├── /details/:product     → ProductDetails
    ├── /compare/:id          → ProductComparison
    ├── /cart/orders          → Cart
    ├── /cart/payment         → Payment
    ├── /cart/invoice         → Invoice
    ├── /profile              → Profile
    ├── /profile/:type        → Login
    ├── /contact              → ContactUs
    ├── /about                → AboutUs
    ├── /info                 → MoreInfo
    └── *                     → Error (404)
```

Alle routes er indlejret under **Layout-komponenten**, hvilket betyder at header og footer deles på tværs af alle sider.

---

### Route-tabel

| Path | Page-komponent | Beskrivelse |
|-----|---------------|------------|
| `/` | Home | Forside med populære produkter |
| `/products` | Product | Oversigt over alle produkter |
| `/details/:product` | ProductDetails | Detaljer for et specifikt produkt |
| `/compare/:id` | ProductComparison | Sammenligning af produkter |
| `/cart/orders` | Cart | Indkøbskurv |
| `/cart/payment` | Payment | Betalingsside |
| `/cart/invoice` | Invoice | Faktura / kvittering |
| `/profile` | Profile | Brugerprofil |
| `/profile/:type` | Login | Login / registrering |
| `/contact` | ContactUs | Kontakt side |
| `/about` | AboutUs | Om os side |
| `/info` | MoreInfo | Ekstra information |
| `*` | Error | Fejlside (404) |

---

### Loaders og fejl-håndtering

Flere routes anvender **loaders**, som bruges til at hente data, før siden renderes:

- `popularLoader` → Home
- `dataLoader` → Product
- `productLoader` → ProductDetails og Cart
- `compareLoader` → ProductComparison
- `profileLoader` → Layout

Derudover anvendes:

- `errorElement: <Error />` til global fejlhåndtering
- `hydrateFallbackElement` til loading-state under datahentning


Følgende sider findes i projektet:

- **Home** – Forside
- **AboutUs** – Om os
- **ContactUS** – Kontakt side
- **Product** – Produktoversigt
- **ProductDetails** – Detaljer for et enkelt produkt
- **ProductComparison** – Sammenligning af produkter
- **Cart** – Indkøbskurv
- **Payment** – Betaling
- **Invoice** – Faktura / kvittering
- **Login** – Login-side
- **Profile** – Brugerprofil
- **Error** – Fejlside (404)

Hver side er opbygget som en separat React-komponent.

---

## Components

I `components`-mappen ligger genbrugelige komponenter, som anvendes på tværs af siderne, fx:

- Header
- Footer
- Produktkort
- Knapper
- Formular-elementer

Denne tilgang reducerer gentagelse af kode og gør projektet mere overskueligt.

---

## Helpers

`helpers`-mappen indeholder JavaScript-filer, der håndterer:

- Fetch-kald til JSON-data
- Kommunikation med serverdelen
- Genbrugelige funktioner til datahåndtering

Dette adskiller forretningslogik fra UI-komponenter og forbedrer kodekvaliteten.

---

## Public mappe

I `public`-mappen ligger statiske filer, herunder:

- Produktbilleder
- Andre assets

Disse filer kan tilgås direkte i applikationen uden ekstra import.

---

## Konklusion

Projektet er struktureret på en moderne og overskuelig måde ved brug af React og Vite. Mappestrukturen gør det nemt at vedligeholde og videreudvikle applikationen, og brugen af React Router samt genbrugelige komponenter sikrer en effektiv frontend-løsning.

Denne opbygning er velegnet til både skoleprojekter og større webapplikationer.

