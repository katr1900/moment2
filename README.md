# Uppgift 2 
## i kursen Webbutveckling III

Detta projekt visar en automatiseringsprocess med Gulp js.

### Syfte
Fördelarna med automatiseringsprocessen är många. Man kan t.ex. bygga olika filer för olika miljöer. T.ex. kan man minifiera koden i produktion medan man inte gör det vid lokal utveckling för lättare felsökning/debuggning. Det här ger mindre filstorlek och snabbare inladdning av filerna i produktion eftersom filerna är minifierade. 

Vid utveckling kan man använda sig av automatisk omladdning av webbläsaren vid någon ändring. Det här kan underlätta om man gör många mindre ändringar ofta. Då kan det vara omständigt att behöva ladda om webbläsaren hela tiden. Har man webbläsaren uppe på skärmen så ser man ändringen direkt utan att behöva ladda om sidan.

### Uppbyggnad
De npm-paket som jag har använt i projekt för automatiseringsprocessen är följande:

- gulp - en task manager för att köra olika tasks i t.ex. en serie
- gulp-concat - paket för att konkatenera filer
- gulp-uglify-es - minifierar JavaScript-filer
- gulp-uglifycss - minifierar CSS-filer
- browser-sync - Används för att automatiskt ladda om webbläsaren vid ändringar

I uppgiften ingick att använda Gulp och de andra paketen valde jag eftersom de passar ihop bra med Gulp. De är enkla att använda och det finns bra dokumentation om dem på Internet.

## Användning

För att komma igång klona projektet till din lokala dator. Du behöver Git, Node och NPM installerat på din dator för att det ska fungera. Öppna sedan en terminal och navigera till katalogen för projektet. Kör där

```
npm i
```

Det här installerar alla filer som behövs. För att starta projektet kör

```
./node_modules/gulp/bin/gulp.js
```

Det här startar en webläsare på localhost:3000 och en default watch-task som håller koll på alla ändringar av CSS, JS och HTML-filer i projektet.

Projektet är en webbapplikation som är en TODO-app. Man kan lägga till och ta bort TODOs i en lista. Källkoden i ligger i source-mappen. När gulp körs så byggs filerna ihop och flyttas till pub-katalogen.