# Mettings-Client

Aplikacja wspomagająca organizowanie spotkań lub wydarzeń, umożliwiająca użytkownikom przeglądanie i tworzenie wydarzeń z zdefiniowaniem potrzebnych informacji (opis, typ, miejsce wydarzenia, opcjonalne zdjęcie) oraz komentowanie danego wydarzenia.

## Technologie i narzędzia

- JavaScript
- React 16.13.1
- Material-UI
- React Redux 4.0.5
- Enzyme 3.11.0
- React-toastify 6.0.5
- HERE Maps
- Leaflet 1.6.0

## Funkcjonalności

Aplikacja umożliwia tworzenie konta, dzięki któremu użytkownik ma możliwość podglądu dostępnych wydarzeń, dodawania nowych wydarzeń, ich aktualizowania i usuwania. Jako wydarzenie rozumiane są typy wydarzeń takie jak koncerty, prezentacje lub mniejsze spotkania skupiające przyjaciół, osób o wspólnych zainteresowaniach. Każde wydarzenie zawiera formularz do dodawania komentarzy oraz możliwość ich wyświetlenia. Użytkownik ma możliwość wyświetlenia wszystkich wydarzeń na mapie. Jest również udostępniona funkcjonalność wyszukiwania wydarzeń po ich typie. Z poziomu administratora jest dostępna funkcjonalność usuwania wydarzeń oraz użytkowników. Użytkownik również posiada możliwość usuwania i aktualizowania dodanych przez siebie wydarzeń.

## Porty

| Nazwa            | Port  |
| ---------------- | ----- |
| MongoDB          | 27017 |
| meetings-service | 8080  |
| mettings-client  | 3000  |

## Uruchomienie aplikacji

Aplikacja była uruchamiana i testowana za pomocą środowiska Visual Studio Code

- musi być uruchomiony serwer (mettings-server) oraz baza danych MongoDB
- instalacja Node.js

Przejście do katalogu z projektem

```bash
$ cd mettings-client
```

Rejestracja na [HERE Developer](https://developer.here.com/develop/rest-apis) aby otrzymać API KEY

Stworzenie zmiennej `.env.REACT_APP_HEREMAPS_API_KEY` oraz `.env.REACT_APP_HEREMAPS_URL` do przechowywania API KEY i URL

Instalacja pakietów

```bash
$ npm install
```

Uruchomienie aplikacji

```bash
$ npm start
```

Uruchomienie testów

```bash
$ npm run test
```
