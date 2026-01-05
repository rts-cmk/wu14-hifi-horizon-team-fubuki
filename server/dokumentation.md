# 📦 API Dokumentation – Express Server

## 🧾 Overblik

Dette projekt er en simpel **REST API** bygget med **Node.js** og **Express**, der leverer data om produkter og kategorier fra lokale JSON-filer.

API’et giver mulighed for at:

- Konto login                     "/api/account" GET (request-type: login)
- Opret konto                     "/api/account/create" POST
- Hente profil data               "/api/account" GET (request-type: info)

- Hente populære produkter        "/api/popular" GET
- Hente alle produkter            "/api/products" GET
- Hente alle kategorier           "/api/categories" GET
- Hente ét produkt via ID         "/api/product/:id" GET
- Hente alle compare IDer         "/api/compare/:id" GET
- Kontrollere om serveren kører   "/api" GET

---

## 📂 Hjælpefunktioner

- saveData (bruges minimalt)
- loadData (bruges aktivt)

---

## 🗂 Projektstruktur

```bash
server-project-root/
│
├─ jsons/
│  ├─ products.json
│  └─ categories.json
│
├─ public/
│
└─ index.js
```
