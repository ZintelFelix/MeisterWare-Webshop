# **Produktverwaltungs-Anwendung**

Dies ist eine einfache Webanwendung zur Verwaltung von Produkten. Die Anwendung bietet folgende Hauptfunktionen:

- **Produkte anzeigen**: Produkte auf der Homepage anzeigen.
- **Produkte hinzufügen und löschen**: Über die Admin-Seite verwalten.

Dieses Projekt verwendet moderne Technologien wie **React**, **TypeScript**, **.NET 9**, und **SQLite**.

---

## **Inhaltsverzeichnis**
1. [Technologien](#technologien)
2. [Features](#features)
3. [Voraussetzungen](#voraussetzungen)
4. [Installation und Ausführung](#installation-und-ausf%C3%BChrung)
   - [Backend starten](#backend-starten)
   - [Frontend starten](#frontend-starten)
5. [Projekt testen](#projekt-testen)
6. [Fehlerbehebung](#fehlerbehebung)
---

## **Technologien**

- **Frontend**:
  - React (mit TypeScript)
  - Vite (für schnelles Frontend-Building)
  - CSS für Styling

- **Backend**:
  - .NET 9 (ASP.NET Core Web API)
  - Entity Framework Core (mit SQLite)

- **Datenbank**:
  - SQLite (leichtgewichtig und einfach zu verwenden)

---

## **Features**

1. **Homepage**:
   - Zeigt alle Produkte an.
   - Zeigt eine Nachricht an, wenn keine Produkte verfügbar sind.

2. **Admin-Seite**:
   - Produkte können erstellt und gelöscht werden.

3. **Datenbank-Persistenz**:
   - Alle Produkte werden in einer SQLite-Datenbank gespeichert und bleiben auch nach einem Neustart des Backends erhalten.

---

## **Voraussetzungen**

Stellen Sie sicher, dass die folgenden Tools installiert sind:

1. **Node.js** (Version 16 oder höher)  
   [Node.js herunterladen](https://nodejs.org/)

2. **.NET SDK** (Version 6 oder höher)  
   [.NET SDK herunterladen](https://dotnet.microsoft.com/download)

3. **SQLite Database Viewer** (optional, um die Datenbank zu prüfen)  
   [DB Browser for SQLite](https://sqlitebrowser.org/) herunterladen.

---

## **Installation und Ausführung**

### **Backend starten**

1. **In den Backend-Ordner wechseln**:
   ```bash
   cd backend/ProductApi
   ```

2. **Abhängigkeiten installieren**:
   ```bash
   dotnet restore
   ```

3. **Datenbank initialisieren**: Wenden Sie Migrations an und erstellen Sie die SQLite-Datenbank:
   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```

4. **Backend starten**:
   ```bash
   dotnet run
   ```

   Der Server läuft jetzt auf [http://localhost:5254](http://localhost:5254).

### **Frontend starten**

1. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```

2. **Frontend starten**:
   ```bash
   npm run dev
   ```

   Die Anwendung ist jetzt auf [http://localhost:5173](http://localhost:5173) verfügbar.

---

## **Projekt testen**

### **Homepage**

- Öffnen Sie [http://localhost:5173](http://localhost:5173), um die verfügbaren Produkte anzuzeigen.
- Wenn keine Produkte vorhanden sind, wird eine entsprechende Nachricht angezeigt.

### **Admin-Seite**

- Öffnen Sie [http://localhost:5173/admin](http://localhost:5173/admin), um:
  - **Produkte hinzuzufügen**: Klicken Sie auf die Schaltfläche **+ Add Product**. Ein Popup-Formular erscheint.
  - **Produkte zu bearbeiten**: (Noch in Bearbeitung.)
  - **Produkte zu löschen**: Klicken Sie auf **Delete**, um ein Produkt aus der Datenbank zu entfernen.

---

## **Fehlerbehebung**

### **Häufige Probleme**

1. **Fehler bei `dotnet ef`-Befehlen**:
   - Stellen Sie sicher, dass Entity Framework CLI installiert ist:
     ```bash
     dotnet tool install --global dotnet-ef
     ```

2. **CORS-Fehler**:
   - Wenn Frontend-Anfragen blockiert werden, überprüfen Sie, ob CORS im Backend konfiguriert ist:
     ```csharp
     builder.Services.AddCors(options =>
     {
         options.AddDefaultPolicy(policy =>
         {
             policy.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
         });
     });
     app.UseCors();
     ```

3. **Port-Konflikte**:
   - **Backend-Port (5254)**: Ändern Sie den Port in `launchSettings.json`.
   - **Frontend-Port (5173)**: Ändern Sie den Port in `vite.config.js`.

4. **Datenbankprobleme**:
   - Wenn die Tabelle `Products` bereits existiert, löschen Sie die Datenbank `products.db` und führen Sie den folgenden Befehl aus:
     ```bash
     dotnet ef database update
     ```
