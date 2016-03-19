# snes-konvolut-db

Die Readme ist zwar Plain-Text, aber auch hier gibt es einen Styling-Syntax ->> [Readme-Styling-Syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)

## Thema des Projekts
Ziel dieses Projekts ist es, eine Webanwendung zur Verwaltung von Super Nintendo (SNES) Spielen zu schaffen.

## Fachliche Anforderungen
- �bersicht �ber die gekauften Spiele mit Detailansicht
- Implementierung eines "Wunschzettels"
- Statistik Werteentwicklung einzelnes Spiel und gesamte Sammlung
- Auswertung und �bersicht s�mtliche K�ufe
- Der Aufbau und die Implementierung des Projekts darf keine bzw. nur geringe finanzielle Kosten verursachen
- Falls m�gliche nur Open-Source bzw. notwendige Tools selber coden
- unterst�tze Browser: IE 10 und 11, Edge, aktueller Firefox, aktueller Chrome, aktueller Safari
- Die Weboberfl�che soll komplett responsive sein ... Handy, Tablet und Desktop

## Technische Anforderungen
- Standalone Webanwendung mit externer DB
- Zu verwendene DB-Technologie muss noch evaluiert werden
- REST-Backend
- Fat Client
- min. 80% Testabdeckung s�mtlicher Funktionen
- Implementierung eines Systems f�r Continuous Integration bzw. Delivery
- St�ndige Architektur-Analyse im Client und auf dem Server
- Vollautomatisiereter Release- und Develpoment-Prozess
- Grunt bzw. Gulp um Frontendtask zu automatisieren

## Zu verwendene Technologien
- Maven als Buildtool
    - Start der Grunt bzw. Gulp Task auch durch Maven
- Spring Boot f�rs Backend
    - Tests
        - TestNG als Testframework
        - Mockito als MockFramework
    -Log
        - Log4j 2
- Angularjs 2.x f�rs Frontend
    - Test
        - Mocha als Testframework
        - Karma als Testrunner
        - chai als AssertionFramrwork
        - sinon als Mockframework
    - Design
        - Bootstrap, Bootstrap UI, Angular UI und Angular Material als UI - Frameworks
    - Responsive
        - Bootstrp Grid
- Continuous Delivery mittels TeamCity bzw. Continuous Integration mittels TravisCI
- Github Webhooks
    - muss noch genauer evaluiert werden
    - TravisCI
- eventuell lokale Server:
    - Dockerhub Repo
    - TeamCity
    - irgendeine VM zum deployen