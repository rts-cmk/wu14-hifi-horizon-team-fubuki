# 📦 API Dokumentation – Express Server

## 🧾 Overblik

Dette projekt er en simpel **REST API** bygget med **Node.js** og **Express**, der leverer data om produkter og kategorier fra lokale JSON-filer.

API’et giver mulighed for at:

- Hente alle produkter            ("/api/products")
- Hente alle kategorier           ("/api/categories")
- Hente ét produkt via ID         ("/api/product/:id")
- Kontrollere om serveren kører   ("/api")

---

## 📂 Hjælpefunktioner

- saveData (lavet til fremtidig brug)
- loadData (bruges aktivt)

---

## 🗂 Projektstruktur

```bash
project-root/
│
├─ jsons/
│  ├─ products.json
│  └─ categories.json
│
├─ public/
│
└─ index.js
```
