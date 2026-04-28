// ==== SLOVNÍ ZÁSOBA (Lekce 6–10) ====
const VOCAB = [
  {
    id: "l6", title: "Lekce 6: Jídlo, restaurace a volný čas",
    groups: [
      { name: "Gerichte (Pokrmy)", items: [
        ["das Hauptgericht, -e", "hlavní chod"],
        ["die Speise, -n", "pokrm"],
        ["die Vorspeise, -n", "předkrm"],
        ["die Hauptspeise, -n", "hlavní jídlo"],
        ["die Nachspeise, -n", "moučník / dezert"],
        ["das Dessert, -s", "dezert"],
        ["der Nachtisch, -e", "dezert / moučník"],
        ["die Beilage, -n", "příloha"],
        ["das Brot, -e", "chléb"],
        ["die Kartoffel, -n", "brambora"],
        ["die Salzkartoffel", "vařený brambor"],
        ["der Kloß, ¨-e", "knedlík"],
        ["das Klößchen, -", "knedlíček"],
        ["die Nudel, -n", "nudle"],
        ["der Reis (nur Sg.)", "rýže"],
        ["das Fleisch (nur Sg.)", "maso"],
        ["das Hühnerfleisch", "kuřecí maso"],
        ["das Lammfleisch", "jehněčí maso"],
        ["das Rindfleisch", "hovězí maso"],
        ["das Schweinefleisch", "vepřové maso"],
        ["der Braten, -", "pečeně"],
        ["der Sauerbraten", "svíčková / pečeně na kyselo"],
        ["das Eisbein, -e", "vepřové koleno"],
        ["die Hühnerbrust, ¨-e", "kuřecí prsa"],
        ["die Roulade, -n", "roláda"],
        ["die Rinderroulade", "hovězí roláda"],
        ["die Wurst, ¨-e", "klobása / uherák"],
        ["die Bratwurst", "klobása na opékání"],
        ["der Fisch, -e", "ryba"],
        ["die Forelle, -n", "pstruh"],
        ["der Matjessalat, -e", "salát z naložených sledů"],
        ["das Gemüse, -n", "zelenina"],
        ["die Erbse, -n", "hrách"],
        ["die Möhre, -n", "mrkev"],
        ["der Kohl (nur Sg.)", "zelí"],
        ["der Rotkohl", "červené zelí"],
        ["das Kraut (nur Sg.)", "bylinka / zelí"],
        ["das Sauerkraut", "kysané zelí"],
        ["die Zwiebel, -n", "cibule"],
        ["vegetarisch", "vegetariánský"],
        ["der Auflauf, ¨-e", "nákyp"],
        ["die Pizza, -s / Pizzen", "pizza"],
        ["der Salat, -e", "salát"],
        ["gemischter Salat", "míchaný salát"],
        ["die Suppe, -n", "polévka"],
        ["das Eis (nur Sg.)", "zmrzlina"],
        ["die rote Grütze", "ovocný rosol / puding"],
        ["die Schlagsahne (nur Sg.)", "šlehačka"],
        ["die Sauce, -n", "omáčka"],
        ["die Vanillesauce", "vanilková omáčka"],
        ["der Apfelstrudel, -", "jablečný závin"]
      ]},
      { name: "Getränke (Nápoje)", items: [
        ["der Kaffee, -s", "káva"],
        ["der Espresso, -s / -i", "espresso"],
        ["der Tee, -s", "čaj"],
        ["das Wasser, -", "voda"],
        ["das Mineralwasser", "minerálka"],
        ["der Saft, ¨-e", "džus"],
        ["der Orangensaft", "pomerančový džus"],
        ["die Schorle, -n", "střik (džus s perlivou vodou)"],
        ["die Apfelschorle", "jablečný střik"],
        ["der Aperitif, -s", "aperitiv"],
        ["das Bier, -e", "pivo"],
        ["das Altbier", "druh tmavého piva"],
        ["das Weizenbier", "pšeničné pivo"],
        ["der Sekt, -e", "sekt / šumivé víno"],
        ["der Wein, -e", "víno"],
        ["der Rotwein", "červené víno"],
        ["der Weißwein", "bílé víno"],
        ["das Glas, ¨-er", "sklenice"],
        ["alkoholisch", "alkoholický"]
      ]},
      { name: "Im Restaurant (V restauraci)", items: [
        ["die Brauerei, -en", "pivovar"],
        ["der Gast, ¨-e", "host"],
        ["der Kellner, - / die Kellnerin, -nen", "číšník / servírka"],
        ["die Karte, -n", "lístek"],
        ["die Kreditkarte", "kreditní karta"],
        ["die Getränkekarte", "nápojový lístek"],
        ["die Speisekarte", "jídelní lístek"],
        ["empfehlen", "doporučit"],
        ["mögen", "mít rád"],
        ["probieren", "ochutnat / zkusit"],
        ["schmecken", "chutnat"],
        ["die Reservierung, -en", "rezervace"],
        ["reservieren", "rezervovat"],
        ["der Schein, -e", "bankovka"],
        ["das Geld, -er", "peníze"],
        ["das Kleingeld", "drobné"],
        ["das Trinkgeld", "spropitné"],
        ["zahlen / bezahlen", "platit"],
        ["bar", "v hotovosti"],
        ["getrennt ≠ zusammen", "zvlášť ≠ dohromady"]
      ]},
      { name: "Die Familie (Rodina)", items: [
        ["die Frau, -en", "žena / manželka"],
        ["das Kind, -er", "dítě"],
        ["der Mann, ¨-er", "muž / manžel"],
        ["der Sohn, ¨-e", "syn"],
        ["die Tochter, ¨", "dcera"]
      ]},
      { name: "Sport", items: [
        ["der Fußball (Sg.)", "fotbal"],
        ["das Tennis (nur Sg.)", "tenis"]
      ]},
      { name: "Das Wetter (Počasí)", items: [
        ["die Sonne (Sg.)", "slunce"],
        ["die Temperatur, -en", "teplota"],
        ["das Grad", "stupeň"],
        ["15 Grad Celsius", "15 stupňů Celsia"],
        ["regnen", "pršet"],
        ["scheinen", "svítit"],
        ["bewölkt", "oblačno"],
        ["kalt ≠ warm", "studený ≠ teplý"],
        ["normal", "normální"]
      ]},
      { name: "Verben (Slovesa)", items: [
        ["beenden", "ukončit"],
        ["fahren", "jet"],
        ["finden (gut/schlecht)", "shledávat (dobrým/špatným)"],
        ["genießen", "užívat si"],
        ["halten (der Bus hält)", "zastavit (autobus staví)"],
        ["laufen", "běžet / chodit"],
        ["lieben", "milovat"],
        ["raten", "radit / hádat"],
        ["schlafen", "spát"],
        ["stimmen", "souhlasit"],
        ["studieren", "studovat"]
      ]},
      { name: "Nomen (Podstatná jména)", items: [
        ["die Altstadt, ¨-e", "staré město"],
        ["die Aussage, -n", "výpověď / výrok"],
        ["der Bus, -se", "autobus"],
        ["die Ecke, -n", "roh"],
        ["der Kunde, -n", "zákazník"],
        ["der Großkunde", "velkoodběratel"],
        ["die Idee, -n", "nápad"],
        ["der Hafen, ¨", "přístav"],
        ["das Hobby, -s", "koníček"],
        ["der Hunger (Sg.)", "hlad"],
        ["die Krankheit, -en", "nemoc"],
        ["das Interesse, -n", "zájem"],
        ["das Leben, -", "život"],
        ["das Privatleben", "soukromý život"],
        ["die Medizin (Sg.)", "medicína"],
        ["die Party, -s", "oslava"],
        ["die Politik (Sg.)", "politika"],
        ["das Projekt, -e", "projekt"],
        ["das Protokoll, -e", "protokol"],
        ["die Religion, -en", "náboženství"],
        ["die Schule, -n", "škola"],
        ["der Small Talk, -s", "nezávazná konverzace"],
        ["das Zimmer, -", "pokoj"]
      ]},
      { name: "Adjektive (Přídavná jména)", items: [
        ["beliebt", "oblíbený"],
        ["dunkel ≠ hell", "tmavý ≠ světlý"],
        ["hübsch", "hezký"],
        ["hungrig", "hladový"],
        ["positiv", "pozitivní"],
        ["ruhig", "klidný"],
        ["typisch", "typický"],
        ["weit", "daleký / široký"]
      ]},
      { name: "Adverbien & Präpositionen", items: [
        ["erst ≠ schon", "teprve ≠ už"],
        ["gern – lieber", "rád – raději"],
        ["immer", "vždy"],
        ["nur", "jen"],
        ["wieder", "znovu"],
        ["für + A", "pro"],
        ["nach (Hause)", "domů"],
        ["über + A (sprechen über)", "o (mluvit o)"]
      ]},
      { name: "Redemittel (Fráze)", items: [
        ["... am Apparat", "... u telefonu"],
        ["Einen Moment, bitte", "Moment, prosím"],
        ["Leider sind schon alle Tische reserviert", "Bohužel už jsou všechny stoly rezervované"],
        ["Auf welchen Namen bitte?", "Na jaké jméno prosím?"],
        ["Auf den Namen ...", "Na jméno ..."],
        ["Einen schönen Tag noch", "Hezký zbytek dne"],
        ["Auf Wiederhören!", "Na slyšenou!"],
        ["Ich hätte gern ...", "Dal bych si / Chtěl bych ..."],
        ["Ich nehme als Vorspeise ...", "Jako předkrm si dám ..."],
        ["Dazu nehme ich / hätte ich gern ...", "K tomu si dám / chtěl bych ..."],
        ["(Be)zahlen Sie getrennt oder zusammen?", "Platíte zvlášť, nebo dohromady?"],
        ["Ich habe es (leider nicht) klein", "Nemám to (bohužel) drobné"],
        ["Können Sie auf ... € herausgeben?", "Můžete mi vrátit na ... €?"],
        ["Stimmt so", "To je dobré (nechte si drobné)"],
        ["Machen Sie ... €", "Udělejte to ... € (částka včetně dýška)"]
      ]}
    ]
  },

  {
    id: "l7", title: "Lekce 7: Cesta a stěhování",
    groups: [
      { name: "Straßen (Ulice)", items: [
        ["die Autobahn, -en (A)", "dálnice"],
        ["die Allee, -n", "alej / třída"],
        ["die Bundesstraße, -n (B)", "spolková silnice"],
        ["die Landesstraße, -n (L)", "zemská silnice"],
        ["die Gasse, -n", "ulička"],
        ["die Kreuzung, -en", "křižovatka"],
        ["der Weg, -e", "cesta"]
      ]},
      { name: "Wegbeschreibung (Popis cesty)", items: [
        ["abbiegen", "odbočit"],
        ["einbiegen", "zahnout"],
        ["abfahren", "odjet"],
        ["wegfahren", "odjet pryč"],
        ["weiterfahren", "jet dál"],
        ["zurückfahren", "jet zpátky"],
        ["wenden", "otočit se"],
        ["überqueren", "přejít / přejet"],
        ["verlassen", "opustit"],
        ["die Meile, -n", "míle"],
        ["der Meter, - (m)", "metr"],
        ["der Kilometer, - (km)", "kilometr"],
        ["die Karte, -n", "mapa"],
        ["das Navigationsgerät, -e (Navi)", "navigace"],
        ["die Richtung, -en", "směr"],
        ["die Route, -n", "trasa"],
        ["der Stau, -s", "dopravní zácpa"],
        ["geradeaus", "rovně"],
        ["links ≠ rechts", "vlevo ≠ vpravo"]
      ]},
      { name: "Orte (Místa)", items: [
        ["die Ampel, -n", "semafor"],
        ["der Bahnhof, ¨-e", "nádraží"],
        ["der Hauptbahnhof", "hlavní nádraží"],
        ["die Bank, -en", "banka"],
        ["die Baustelle, -n", "staveniště"],
        ["der Flughafen, ¨", "letiště"],
        ["das Museum, Museen", "muzeum"],
        ["der Platz, ¨-e", "náměstí / místo"],
        ["der Parkplatz", "parkoviště"],
        ["Park & Ride-Parkplatz", "parkoviště P+R"],
        ["parken", "parkovat"],
        ["das Stadtzentrum, -zentren", "centrum města"]
      ]},
      { name: "Termin (Schůzka)", items: [
        ["vereinbaren", "domluvit"],
        ["verschieben", "odložit / posunout"],
        ["vorschlagen", "navrhnout"]
      ]},
      { name: "Verkehrsmittel (Dopravní prostředky)", items: [
        ["das Auto, -s", "auto"],
        ["die Bahn, -en", "dráha / vlak"],
        ["die S-Bahn", "příměstský vlak"],
        ["die U-Bahn", "metro"],
        ["die Straßenbahn", "tramvaj"],
        ["die Tram / das Tram", "tramvaj"],
        ["der Bus, -se", "autobus"],
        ["der Zug, ¨-e", "vlak"],
        ["zu Fuß (gehen)", "jít pěšky"]
      ]},
      { name: "Leistungen beim Umzug (Stěhování)", items: [
        ["anbringen", "připevnit"],
        ["das Angebot, -e", "nabídka"],
        ["anschließen", "zapojit / připojit"],
        ["der Anschluss, ¨-e", "přípojka"],
        ["auspacken", "vybalit"],
        ["einpacken", "zabalit"],
        ["lagern", "skladovat"],
        ["die Lagerung, -en", "skladování"],
        ["die Leistung, -en", "výkon / služba"],
        ["montieren", "montovat"],
        ["die Montage, -n", "montáž"],
        ["die Organisation", "organizace"],
        ["transportieren", "přepravovat"],
        ["der Transport, -e", "doprava / transport"],
        ["umziehen", "stěhovat se"],
        ["der Umzug, ¨-e", "stěhování"],
        ["der Herd, -e", "sporák"],
        ["die Spülmaschine, -n", "myčka nádobí"],
        ["der Strom (Sg.)", "elektřina"]
      ]},
      { name: "Einpacken (Balení)", items: [
        ["die Box, -en", "bedna / box"],
        ["die Kleiderbox", "krabice na šaty"],
        ["die Folie, -n", "fólie"],
        ["die Hülle, -n", "obal / pouzdro"],
        ["der Karton, -s", "karton / krabice"],
        ["das Seidenpapier", "hedvábný papír"]
      ]},
      { name: "Getränke (Nápoje)", items: [
        ["die Milch (Sg.)", "mléko"],
        ["der Saft, ¨-e", "džus"],
        ["mit / ohne Zucker", "s / bez cukru"],
        ["das Wasser (Sg.)", "voda"],
        ["mit / ohne Kohlensäure", "s bublinkami / bez bublinek"]
      ]},
      { name: "Verben (Slovesa)", items: [
        ["abladen", "vyložit (náklad)"],
        ["abschicken", "odeslat"],
        ["anhängen", "připojit / pověsit"],
        ["ansehen", "prohlédnout si"],
        ["bleiben", "zůstat"],
        ["dauern", "trvat"],
        ["einrichten", "zařídit"],
        ["einzeichnen", "zakreslit"],
        ["entschuldigen", "omluvit"],
        ["formulieren", "formulovat"],
        ["fragen nach (dem Weg)", "ptát se na (cestu)"],
        ["halten (etw.)", "držet (něco)"],
        ["herkommen", "přijít sem"],
        ["holen", "dojít pro / přinést"],
        ["abholen", "vyzvednout"],
        ["hoffen", "doufat"],
        ["kaufen ≠ verkaufen", "koupit ≠ prodat"],
        ["kosten", "stát (cena)"],
        ["lassen", "nechat"],
        ["leidtun", "mrzet (je mi to líto)"],
        ["mitnehmen", "vzít s sebou"],
        ["öffnen", "otevřít"],
        ["schaffen", "zvládnout / stihnout"],
        ["stören", "rušit"],
        ["verwenden", "použít"],
        ["warten", "čekat"],
        ["weitermachen", "pokračovat"]
      ]},
      { name: "Nomen (Podstatná jména)", items: [
        ["der Ablauf, ¨-e", "průběh"],
        ["die Akte, -n", "spis / složka"],
        ["die Anweisung, -en", "instrukce / pokyn"],
        ["die Beschreibung, -en", "popis"],
        ["der Betrieb", "provoz / podnik"],
        ["die Einrichtung, -en", "zařízení / vybavení"],
        ["der Eintritt", "vstup"],
        ["die Fahrt, -en", "jízda"],
        ["das Fest, -e", "slavnost"],
        ["die Info, -s", "info"],
        ["das Klavier, -e", "klavír"],
        ["das Netzwerk, -e", "síť"],
        ["die Qualität, -en", "kvalita"],
        ["der Rest, -e", "zbytek"],
        ["der Rucksack, ¨-e", "batoh"],
        ["die Sache, -n", "věc"],
        ["der Schlüssel, -", "klíč"],
        ["der Student / die Studentin", "student / studentka"],
        ["Übersee", "zámoří"],
        ["die Veranstaltung, -en", "akce / událost"],
        ["die Verbindung, -en", "spojení"],
        ["der Verkauf, ¨-e", "prodej"],
        ["der Zettel, -", "lístek (papíru)"]
      ]},
      { name: "Adjektive & Adverbien", items: [
        ["besorgt ≠ unbesorgt", "ustaraný ≠ bezstarostný"],
        ["entspannt", "uvolněný"],
        ["fertig", "hotový"],
        ["gut – besser – am besten", "dobrý – lepší – nejlepší"],
        ["kompliziert", "komplikovaný"],
        ["kostenlos", "zdarma"],
        ["wirklich", "skutečný / opravdu"],
        ["gerade", "zrovna / rovně"],
        ["zirka / circa (ca.)", "přibližně"]
      ]},
      { name: "Präpositionen", items: [
        ["auf", "na"],
        ["nach (links / Hennef / Deutschland)", "do / na (vlevo / město / země)"],
        ["nach (200 m / 1 km)", "po (200 m / 1 km)"],
        ["über (den Platz / die Kreuzung)", "přes (náměstí / křižovatku)"],
        ["von (Bonn / Hennef)", "z (Bonnu / Hennefu)"],
        ["zu (zum / zur)", "k (ke)"]
      ]},
      { name: "Redemittel (Fráze)", items: [
        ["... am Apparat", "... u telefonu"],
        ["Hilfe!", "Pomoc!"],
        ["Entschuldigen Sie bitte, wie komme ich nach/zum/zur ...?", "Promiňte prosím, jak se dostanu do/k ...?"],
        ["Danke schön! / Bitte schön!", "Děkuji pěkně! / Prosím pěkně!"],
        ["Nichts zu danken", "Není zač"],
        ["Vielen Dank für Ihre E-Mail", "Děkuji moc za Váš e-mail"],
        ["Was passt Ihnen besser?", "Co Vám vyhovuje lépe?"],
        ["Tut mir leid", "To je mi líto / omlouvám se"],
        ["morgen früh", "zítra ráno"]
      ]}
    ]
  },

  {
    id: "l8", title: "Lekce 8: Jubileum, firma a stroje",
    groups: [
      { name: "Das Jubiläum (Jubileum)", items: [
        ["einladen", "pozvat"],
        ["die Einladung, -en", "pozvání"],
        ["zusagen ≠ absagen", "přislíbit ≠ odříct"],
        ["die Zusage ≠ die Absage", "příslib ≠ odmítnutí"],
        ["feiern", "slavit"],
        ["die Feier, -n", "oslava"],
        ["das Fest, -e", "slavnost"],
        ["der Geschäftspartner, -", "obchodní partner"],
        ["teilnehmen", "zúčastnit se"],
        ["wünschen", "přát si"]
      ]},
      { name: "Die Firma (Firma)", items: [
        ["der Maschinenbau (Sg.)", "strojírenství"],
        ["die Industrie, -n", "průmysl"],
        ["die Automobilindustrie", "automobilový průmysl"],
        ["die Bauindustrie", "stavební průmysl"],
        ["die Luftfahrtindustrie", "letecký průmysl"],
        ["der Erfolg, -e", "úspěch"],
        ["erfolgreich", "úspěšný"],
        ["die Loyalität, -en", "loajalita"],
        ["der Markt, ¨-e", "trh"],
        ["das Prinzip, -ien", "princip"],
        ["die Präzision (Sg.)", "preciznost"],
        ["die Qualität, -en", "kvalita"],
        ["die Zusammenarbeit (Sg.)", "spolupráce"],
        ["führen", "vést"],
        ["wachsen", "růst"]
      ]},
      { name: "Die Maschine (Stroj)", items: [
        ["das Bauteil, -e", "součástka"],
        ["CNC", "počítačové řízení"],
        ["die Investition, -en", "investice"],
        ["die Komplettmontage, -n", "kompletní montáž"],
        ["die Konstruktion, -en", "konstrukce"],
        ["der Schlosser, -", "zámečník"],
        ["bearbeiten", "opracovat / zpracovat"],
        ["bohren", "vrtat"],
        ["fräsen", "frézovat"],
        ["die Fräsmaschine, -n", "frézka"],
        ["die Höhe, -n", "výška"],
        ["die Länge, -n", "délka"],
        ["die Tonne, -n (t)", "tuna"]
      ]},
      { name: "Die Festplanung (Plánování oslavy)", items: [
        ["die Agentur, -en", "agentura"],
        ["die Eventagentur", "eventová agentura"],
        ["der Auftrag, ¨-e", "zakázka"],
        ["weitergeben", "předat dál"],
        ["die Bitte, -n", "prosba"],
        ["bitten", "prosit"],
        ["der Vorschlag, ¨-e", "návrh"],
        ["die Bank, ¨-e", "lavice"],
        ["das Buffet, -s", "bufet / raut"],
        ["der Empfang, ¨-e", "recepce / přijetí"],
        ["der Sektempfang", "recepce se sektem"],
        ["empfangen", "přijmout"],
        ["die Flasche, -n", "láhev"],
        ["die Jazzband, -s", "jazzová kapela"],
        ["der Kuchen, -", "koláč / buchta"],
        ["der Lieferant, -en", "dodavatel"],
        ["liefern", "dodat"],
        ["der Plan, ¨-e", "plán"],
        ["der Zeitplan", "časový plán"],
        ["einplanen", "naplánovat"],
        ["der Platz, ¨-e", "místo"],
        ["die Servicekraft, ¨-e", "obsluha / servisní pracovník"],
        ["das Serviceteam, -s", "servisní tým"],
        ["der Stehtisch, -e", "stůl na stání"],
        ["die Stelle, -n", "místo"],
        ["die Theke, -n", "bar / pult"],
        ["das Zelt, -e", "stan"],
        ["das Festzelt", "párty stan"],
        ["anbieten", "nabídnout"],
        ["aufbauen", "postavit / sestavit"],
        ["aufstellen", "umístit / postavit"]
      ]},
      { name: "Die Rede (Projev)", items: [
        ["die Broschüre, -n", "brožura"],
        ["die Firmenbroschüre", "firemní brožura"],
        ["die Infobroschüre", "informační brožura"],
        ["die Geschichte", "historie"],
        ["die Firmengeschichte", "historie firmy"],
        ["fehlen", "chybět"],
        ["kürzen", "zkrátit"]
      ]},
      { name: "Der Sommerurlaub (Letní dovolená)", items: [
        ["die Aktivität, -en", "aktivita"],
        ["der Tourist / die Touristin", "turista / turistka"],
        ["der Berg, -e", "hora"],
        ["in den Bergen sein", "být na horách"],
        ["das Meer, -e", "moře"],
        ["am Meer sein", "být u moře"],
        ["der Strand, ¨-e", "pláž"],
        ["am Strand sein", "být na pláži"],
        ["fliegen", "letět"],
        ["Gleitschirm fliegen", "létat na paraglidingu"],
        ["Ballon fahren", "letět balonem"],
        ["Kanu fahren", "jet na kánoi"],
        ["Mountainbike fahren", "jet na horském kole"],
        ["Rad fahren", "jet na kole"],
        ["Ski fahren", "lyžovat"],
        ["reisen", "cestovat"],
        ["reiten", "jezdit na koni"],
        ["segeln", "plachtit"],
        ["das Segelboot, -e", "plachetnice"],
        ["schwimmen", "plavat"],
        ["surfen", "surfovat"],
        ["wandern", "chodit na túry"]
      ]},
      { name: "Verben & Nomen", items: [
        ["bedeuten", "znamenat"],
        ["beginnen", "začít"],
        ["durchlesen", "pročíst"],
        ["kennenlernen", "poznat / seznámit se"],
        ["klären", "vyjasnit"],
        ["sollen", "mít (povinnost)"],
        ["suchen", "hledat"],
        ["das Ausland ≠ das Inland", "zahraničí ≠ vnitrozemí"],
        ["die Notiz, -en", "poznámka"],
        ["die Rente, -n", "důchod"],
        ["in Rente gehen", "jít do důchodu"],
        ["der Schwerpunkt, -e", "těžiště / priorita"],
        ["das Stück, -e", "kus"],
        ["Stück für Stück", "kus po kuse"],
        ["die Überraschung, -en", "překvapení"],
        ["die Zeitung, -en", "noviny"],
        ["die Zukunft (Sg.)", "budoucnost"]
      ]},
      { name: "Adjektive & Ostatní", items: [
        ["fit (für + A)", "fit (pro)"],
        ["komplett", "kompletní"],
        ["klar ≠ unklar", "jasný ≠ nejasný"],
        ["sicher", "jistý / bezpečný"],
        ["stolz (auf + A)", "hrdý (na)"],
        ["ab", "od (časově i místně)"],
        ["durch", "skrze / přes"],
        ["Wie lange?", "Jak dlouho?"],
        ["dieses ≠ letztes (Jahr)", "tento ≠ minulý (rok)"],
        ["ebenso", "nápodobně / stejně tak"],
        ["(nicht) mehr", "(už ne) více"],
        ["selbst", "sám / sama"]
      ]},
      { name: "Redemittel (Fráze)", items: [
        ["Ich nehme an dem Fest teil", "Zúčastním se slavnosti"],
        ["Viel Erfolg für das Fest!", "Hodně úspěchů při slavnosti!"],
        ["Das ist eine gute Idee", "To je dobrý nápad"],
        ["Das ist ja eine Überraschung!", "To je ale překvapení!"],
        ["Lange nicht gesehen", "Dlouho jsme se neviděli"],
        ["Die Zeit ist schnell vergangen", "Čas rychle utekl"],
        ["wieder da sein", "být zase zpátky"],
        ["mit 63", "ve věku 63 let"]
      ]}
    ]
  },

  {
    id: "l9", title: "Lekce 9: Oddělení a úkoly",
    groups: [
      { name: "Abteilungen (Oddělení)", items: [
        ["das Controlling (Sg.)", "controlling"],
        ["der Versand (Sg.)", "expedice / odesílání"]
      ]},
      { name: "Aufgaben und Tätigkeiten", items: [
        ["die Daten (Pl.)", "data"],
        ["verwalten", "spravovat"],
        ["die Finanzen (Pl.)", "finance"],
        ["analysieren", "analyzovat"],
        ["das Gehalt, ¨-er", "plat"],
        ["berechnen", "vypočítat"],
        ["der Kunde, -n", "zákazník"],
        ["akquirieren", "získávat (zákazníky)"],
        ["beraten", "radit"],
        ["vor Ort besuchen", "navštívit na místě"],
        ["betreuen", "pečovat o / mít na starosti"],
        ["der Mitarbeiter / die Mitarbeiterin", "spolupracovník / spolupracovnice"],
        ["einstellen", "zaměstnat / přijmout"],
        ["entlassen", "propustit"],
        ["die Mitteilung, -en", "sdělení / zpráva"],
        ["die Pressemitteilung", "tisková zpráva"],
        ["erstellen", "vyhotovit / vytvořit"],
        ["die Post (Sg.)", "pošta"],
        ["zum Versand bringen", "odnést k odeslání"],
        ["der Preis, -e", "cena"],
        ["recherchieren", "vyhledávat / dělat rešerši"],
        ["verhandeln", "vyjednávat"],
        ["das Produkt, -e", "produkt"],
        ["bauen", "stavět / budovat"],
        ["entwickeln", "vyvíjet"],
        ["konstruieren", "konstruovat"],
        ["testen", "testovat"],
        ["vermarkten", "uvést na trh"],
        ["der Server, -", "server"],
        ["betreiben", "provozovat"],
        ["die Rechnung, -en", "faktura / účet"],
        ["prüfen", "kontrolovat"],
        ["der Vertrag, ¨-e", "smlouva"],
        ["schreiben", "psát"],
        ["die Unterlage, -n", "podklad / dokument"],
        ["kontrollieren", "kontrolovat"],
        ["kopieren", "kopírovat"],
        ["die Ware, -n", "zboží"],
        ["annehmen", "přijmout"],
        ["bereitstellen", "připravit / přichystat"],
        ["transportieren", "přepravovat"],
        ["verpacken", "zabalit"],
        ["verschicken", "rozeslat"],
        ["das Intranet, -s", "intranet"],
        ["die Webseite, -n", "webová stránka"],
        ["pflegen", "udržovat / pečovat o"]
      ]},
      { name: "Reisekostenabrechnung", items: [
        ["die Abrechnung, -en", "vyúčtování"],
        ["abrechnen", "vyúčtovat"],
        ["die Kosten (Pl.)", "náklady"],
        ["das Formular, -e", "formulář"],
        ["die Auszahlung, -en", "výplata"],
        ["die Bank, -en", "banka"],
        ["die Bankverbindung, -en", "bankovní spojení"],
        ["die IBAN", "IBAN"],
        ["der BIC", "BIC"],
        ["der Beleg, -e", "doklad / stvrzenka"],
        ["die Bemerkung, -en", "poznámka"],
        ["die Bewirtung, -en", "pohoštění"],
        ["die Fahrt, -en", "jízda"],
        ["die Hinfahrt", "cesta tam"],
        ["die Rückfahrt", "cesta zpět"],
        ["der Flug, ¨-e", "let"],
        ["das Flugzeug, -e", "letadlo"],
        ["die Genehmigung, -en", "schválení / povolení"],
        ["der Grund, ¨-e", "důvod"],
        ["das Kennzeichen, -", "poznávací značka (SPZ)"],
        ["der Transport, -e", "doprava"],
        ["die Übernachtung, -en", "přenocování"],
        ["die Verpflegung, -en", "stravování"],
        ["der/die Vorgesetzte, -n", "nadřízený / nadřízená"]
      ]},
      { name: "Arbeit am Computer", items: [
        ["aktivieren", "aktivovat"],
        ["anhängen", "připojit (přílohu)"],
        ["ausdrucken", "vytisknout"],
        ["ausfüllen", "vyplnit"],
        ["downloaden / herunterladen", "stáhnout"],
        ["einfügen", "vložit"],
        ["eingeben", "zadat"],
        ["eintragen", "zapsat"],
        ["hochfahren ≠ herunterfahren", "spustit ≠ vypnout (počítač)"],
        ["speichern", "uložit"],
        ["abspeichern", "uložit si"],
        ["schließen", "zavřít"],
        ["der Briefkopf, ¨-e", "záhlaví dopisu"],
        ["die Datenbank, -en", "databáze"],
        ["das Dokument, -e", "dokument"],
        ["das Word-Dokument", "wordovský dokument"],
        ["das Feld, -er", "pole"],
        ["das Programm, -e", "program"],
        ["das Mailprogramm", "e-mailový program"],
        ["das Rechtschreibprogramm", "program na kontrolu pravopisu"],
        ["die Software, -s", "software"]
      ]},
      { name: "Personen (Osoby)", items: [
        ["der Arbeiter, -", "dělník"],
        ["der Betriebswirt, -e", "ekonom"],
        ["der Controller / die Controllerin", "kontrolor / kontrolorka"],
        ["die Fachkraft, ¨-e", "odborná síla / specialista"],
        ["der Fotograf / die Fotografin", "fotograf / fotografka"],
        ["der Profi, -s", "profesionál"],
        ["der Reporter / die Reporterin", "reportér / reportérka"]
      ]},
      { name: "Ausbildung / Studium", items: [
        ["der Abschluss, ¨-e", "ukončení / absolvování"],
        ["der Schulabschluss", "ukončení školní docházky"],
        ["der Absolvent / die Absolventin", "absolvent / absolventka"],
        ["Hochschulabsolvent", "absolvent VŠ"],
        ["das Studium, Studien", "studium"],
        ["studieren", "studovat"],
        ["der Trainee, -s", "praktikant (v zácviku)"],
        ["als Trainee", "jako praktikant"],
        ["das Traineeprogramm, -e", "program pro absolventy"]
      ]},
      { name: "Verben & Nomen", items: [
        ["ankommen", "dorazit"],
        ["aussprechen", "vyslovit"],
        ["ausgeben", "vydat / utratit"],
        ["einladen", "pozvat"],
        ["geben", "dát"],
        ["einen Rat geben", "dát radu"],
        ["spülen", "mýt / oplachovat"],
        ["verbringen", "strávit (čas)"],
        ["verdienen", "vydělat"],
        ["vergessen", "zapomenout"],
        ["verstehen", "rozumět"],
        ["zuständig sein (für + A)", "být zodpovědný (za)"],
        ["die Bedingung, -en", "podmínka"],
        ["die Berechnung, -en", "výpočet"],
        ["der Bericht, -e", "zpráva / report"],
        ["die Betriebswirtschaft (Sg.)", "podnikové hospodářství"],
        ["das Ende", "konec"],
        ["am Ende", "na konci"],
        ["das Erdgeschoss, -e", "přízemí"],
        ["der Flyer, -", "leták"],
        ["die Karriere, -n", "kariéra"],
        ["die Kopie, -n", "kopie"],
        ["der Kopierer, -", "kopírka"],
        ["der Lageplan, ¨-e", "plánek polohy"],
        ["die Lösung, -en", "řešení"],
        ["die Mitte, -n", "střed"],
        ["in der Mitte", "uprostřed"],
        ["das Praktikum, Praktika", "praxe / stáž"],
        ["der Rat (Sg.)", "rada"],
        ["die Recherche, -n", "rešerše / vyhledávání"],
        ["der Stammtisch, -e", "stůl pro štamgasty"],
        ["das Tablet, -s", "tablet"],
        ["der Vergleich, -e", "srovnání"],
        ["die Verpackung, -en", "obal"],
        ["der Wunsch, ¨-e", "přání"]
      ]},
      { name: "Adjektive & Adverbien", items: [
        ["anstrengend", "namáhavý"],
        ["hilfreich", "nápomocný"],
        ["krank", "nemocný"],
        ["lustig", "veselý / vtipný"],
        ["schwer", "těžký"],
        ["oben ≠ unten", "nahoře ≠ dole"],
        ["etwas Besonderes", "něco zvláštního"]
      ]}
    ]
  },

  {
    id: "l10", title: "Lekce 10: Cestování, počasí a oblečení",
    groups: [
      { name: "Das Reisen (Cestování)", items: [
        ["das Reisebüro, -s", "cestovní kancelář"],
        ["die Reisestelle, -n", "cestovní oddělení"],
        ["der Intercity-Express (ICE)", "vlak ICE"],
        ["der Intercity (IC)", "vlak IC"],
        ["der Regionalexpress (RE)", "regionální expres"],
        ["der Flug, ¨-e", "let"],
        ["der Abflug", "odlet"],
        ["der Direktflug", "přímý let"],
        ["Charterflug ≠ Linienflug", "charterový ≠ linkový let"],
        ["Hinflug ≠ Rückflug", "let tam ≠ zpáteční let"],
        ["abfliegen", "odletět"],
        ["hinfliegen ≠ zurückfliegen", "letět tam ≠ letět zpátky"],
        ["die Abfahrt, -en", "odjezd"],
        ["der Start, -s", "start"],
        ["starten", "startovat"],
        ["die Ankunft, ¨-e", "příjezd / přílet"],
        ["ankommen", "dorazit / přijet"],
        ["die Landung, -en", "přistání"],
        ["landen", "přistát"],
        ["die Dauer (Sg.)", "trvání"],
        ["dauern", "trvat"],
        ["die Haltestelle, -n", "zastávka"],
        ["die Ortszeit, -en", "místní čas"],
        ["der Stopp, -s", "zastávka / stopka"],
        ["das Ticket, -s", "jízdenka / letenka"],
        ["umsteigen", "přestoupit"],
        ["die Vorbereitung, -en", "příprava"],
        ["vorbereiten", "připravit"],
        ["buchen", "rezervovat"],
        ["ab ≠ an", "odjezd ≠ příjezd"],
        ["hin ≠ zurück", "tam ≠ zpět"],
        ["über (Paris)", "přes (Paříž = ne přímo)"]
      ]},
      { name: "Die Firmenentwicklung", items: [
        ["die Entwicklung, -en", "vývoj"],
        ["der Absatz, ¨-e", "odbyt"],
        ["der Umsatz, ¨-e", "obrat"],
        ["der Marktanteil, -e", "tržní podíl"],
        ["die Grafik, -en", "graf"],
        ["die Balkengrafik", "sloupcový graf"],
        ["die Liniengrafik", "liniový graf"],
        ["die Tortengrafik", "koláčový graf"],
        ["einstellen", "zaměstnat"],
        ["entlassen", "propustit"],
        ["erhöhen", "zvýšit"],
        ["sinken (auf) ≠ steigen (auf)", "klesnout ≠ stoupnout (na)"],
        ["steigern", "stupňovat / zvyšovat"],
        ["verlieren", "ztratit / prohrát"],
        ["um (5%)", "o (5 %)"]
      ]},
      { name: "Das Wetter (Počasí)", items: [
        ["der Wetterbericht, -e", "předpověď počasí"],
        ["die Wetterkarte, -n", "mapa počasí"],
        ["das Gewitter, -", "bouřka"],
        ["gewittern", "bouřit"],
        ["blitzen", "blýskat se"],
        ["donnern", "hřmít"],
        ["der Himmel (Sg.)", "nebe"],
        ["der Nebel, -", "mlha"],
        ["neblig", "mlhavo"],
        ["der Niederschlag, ¨-e", "srážky"],
        ["der Regen (Sg.)", "déšť"],
        ["regnen", "pršet"],
        ["regnerisch", "deštivý"],
        ["der Schnee (Sg.)", "sníh"],
        ["der Schneefall, ¨-e", "sněžení"],
        ["schneien", "sněžit"],
        ["die Sonne (Sg.)", "slunce"],
        ["sonnig", "slunečno"],
        ["scheinen (die Sonne)", "svítit (slunce)"],
        ["stürmen", "být bouřlivý"],
        ["stürmisch", "bouřlivý"],
        ["die Temperatur, -en", "teplota"],
        ["die Temperatur beträgt", "teplota činí"],
        ["das Grad, -e", "stupeň"],
        ["3 Grad Celsius", "3 stupně Celsia"],
        ["der Wind, -e", "vítr"],
        ["windig", "větrno"],
        ["wehen", "foukat"],
        ["werden (es wird schön)", "stát se (bude hezky)"],
        ["bedeckt", "zataženo"],
        ["bewölkt", "oblačno"],
        ["heiter", "jasný / polojasný"],
        ["kalt – warm – heiß", "studený – teplý – horký"],
        ["klar", "jasný"],
        ["kühl", "chladný"],
        ["trocken", "suchý"],
        ["minus ≠ plus", "minus ≠ plus"]
      ]},
      { name: "Die Himmelsrichtungen", items: [
        ["der Norden", "sever"],
        ["der Osten", "východ"],
        ["der Süden", "jih"],
        ["der Westen", "západ"]
      ]},
      { name: "Die Kleidung (Oblečení)", items: [
        ["das Kleidungsstück, -e", "kus oblečení"],
        ["der Anzug, ¨-e", "oblek"],
        ["der Hosenanzug", "kalhotový kostým"],
        ["der Blazer, -", "sako (dámské)"],
        ["das Sakko, -s", "sako (pánské)"],
        ["die Hose, -n", "kalhoty"],
        ["die Jeans (Pl.)", "džíny"],
        ["das Kostüm, -e", "kostým"],
        ["das Kleid, -er", "šaty"],
        ["der Rock, ¨-e", "sukně"],
        ["das Hemd, -en", "košile"],
        ["die Bluse, -n", "blůza"],
        ["der Pullover, -", "svetr"],
        ["die Jacke, -n", "bunda / sako"],
        ["die Regenjacke", "bunda do deště"],
        ["der Mantel, ¨", "kabát"],
        ["die Socke / der Socken", "ponožka"],
        ["das Söckchen, -", "ponožtička"],
        ["die Krawatte, -n", "kravata"],
        ["der Handschuh, -e", "rukavice"],
        ["der Schal, -s", "šála"],
        ["die Mütze, -n", "čepice"],
        ["der Schuh, -e", "bota"],
        ["das Paar, -e", "pár"],
        ["das Paar Schuhe", "pár bot"],
        ["das Paar Socken", "pár ponožek"],
        ["der Stiefel, -", "holínka / kozačka"],
        ["der Koffer, -", "kufr"],
        ["dick ≠ dünn", "tlustý ≠ tenký"]
      ]},
      { name: "Das Frühstück (Snídaně)", items: [
        ["das Frühstück, -e", "snídaně"],
        ["frühstücken", "snídat"],
        ["das Brot, -e", "chléb"],
        ["das Brötchen, -", "houska / žemle"],
        ["das Croissant, -s", "croissant"],
        ["der Toast, -e", "toast"],
        ["das Ei, -er", "vejce"],
        ["das Rührei", "míchaná vajíčka"],
        ["das Spiegelei", "volské oko"],
        ["die Butter (Sg.)", "máslo"],
        ["die Margarine (Sg.)", "margarín"],
        ["der Käse, -", "sýr"],
        ["der Joghurt, -s", "jogurt"],
        ["der Quark (Sg.)", "tvaroh"],
        ["der Schinken, -", "šunka"],
        ["der Speck", "slanina"],
        ["der Frühstücksspeck", "snídaňová slanina"],
        ["die Wurst, ¨-e", "uzenina / klobása"],
        ["das Würstchen, -", "párek"],
        ["der Honig, -e", "med"],
        ["die Marmelade, -n", "džem / marmeláda"],
        ["die Tomate, -n", "rajče"],
        ["die Gurke, -n", "okurka"],
        ["das Obst (Sg.)", "ovoce"],
        ["der Apfel, ¨", "jablko"],
        ["die Orange, -n", "pomeranč"]
      ]},
      { name: "Verben, Nomen & Adj.", items: [
        ["aufhören", "přestat"],
        ["berichten", "podat zprávu / informovat"],
        ["gelingen", "podařit se"],
        ["gewinnen", "vyhrát"],
        ["packen", "balit"],
        ["stehen", "stát (také slušet)"],
        ["treffen", "potkat"],
        ["überlegen", "přemýšlet / uvažovat"],
        ["wiederholen", "opakovat"],
        ["vermuten", "tušit / předpokládat"],
        ["der Bescheid, -e", "vyrozumění / zpráva"],
        ["Bescheid geben", "dát vědět"],
        ["der Besuch, -e", "návštěva"],
        ["die Niederlassung, -en", "pobočka"],
        ["das Spiel, -e", "hra"],
        ["langsam ≠ schnell", "pomalý ≠ rychlý"],
        ["preiswert ≠ teuer", "cenově výhodný ≠ drahý"],
        ["schwach ≠ stark", "slabý ≠ silný"],
        ["weit – weiter", "daleký – dále"]
      ]},
      { name: "Redemittel (Fráze)", items: [
        ["Freut mich, Sie kennenzulernen", "Těší mě, že vás poznávám"],
        ["Nehmen Sie doch Platz", "Posaďte se přece"],
        ["Nichts zu danken!", "Není zač!"]
      ]}
    ]
  }
];

// ==== GRAMATIKA (Týden 1–10) ====
const GRAMMAR = [
  {
    id: "w1", title: "1. týden — Záliby, přivl. zájmena, für",
    sections: [
      { h: "Rozdíl mezi „gern“ a „mögen“", body: `
<p>Je zásadní rozlišovat, zda vyjadřujete zálibu v činnosti (sloveso) nebo v objektu (podstatné jméno).</p>
<ul>
<li><b>etwas gern machen</b> (sloveso + gern) — Rád něco dělám.<br><i>Ich schwimme gern.</i> (Rád plavu.)</li>
<li><b>etwas mögen</b> (mögen + podstatné jméno) — Mám rád (něco).<br><i>Ich mag Wasser.</i> (Mám rád vodu.)</li>
</ul>
<p><b>Časování mögen:</b> ich mag, du magst, er/sie/es mag, wir mögen, ihr mögt, sie/Sie mögen.</p>
` },
      { h: "Přivlastňovací zájmena (1. a 4. pád)", body: `
<p>Zájmena se skloňují podobně jako neurčitý člen (ein).</p>
<ul>
<li>Základní tvary (m.): <b>mein, dein, sein, ihr, unser, euer, ihr/Ihr</b></li>
<li>V ženském rodě a plurálu: koncovka <b>-e</b> (meine).</li>
<li>V mužském rodě ve 4. pádě: koncovka <b>-en</b> (meinen Sohn).</li>
</ul>
` },
      { h: "Předložka „für“", body: `
<p>Pojí se vždy se <b>4. pádem</b>.</p>
<p><i>Ich brauche einen Tisch für vier Personen.</i></p>
` },
      { h: "Slovní zásoba — rodina, koníčky, restaurace", body: `
<p><b>Rodina:</b> r Vater, e Mutter, r Bruder, e Schwester, r Sohn, e Tochter, s Kind, r Opa, e Oma, r Onkel, e Tante.</p>
<p><b>Koníčky:</b> Fußball spielen, schwimmen, laufen, Rad fahren, lesen, malen, tanzen, Gitarre spielen.</p>
<p><b>Restaurace:</b> Ich mag tschechische Küche. Mein Lieblingsessen ist Lendenbraten. Ich probiere gern neue Gerichte.</p>
` }
    ]
  },
  {
    id: "w2", title: "2. týden — Restaurace, nepravidelná slovesa",
    sections: [
      { h: "Rezervace, objednávka, placení", body: `
<p><b>Rezervace:</b> „Ich möchte am vierten März um 19 Uhr einen Tisch reservieren.“ — „Für drei Personen. Auf den Namen Müller.“</p>
<p><b>Objednávání:</b> Host: „Wir möchten bestellen.“ / „Ich nehme eine Suppe.“<br>Číšník: „Was möchten Sie trinken?“ / „Können Sie etwas empfehlen?“</p>
<p><b>Placení:</b> „Wir möchten gerne zahlen.“ — „Zahlen Sie mit Karte oder bar?“ — „Zusammen oder getrennt?“ — „Das stimmt.“</p>
` },
      { h: "Nepravidelná slovesa — změna kmenové samohlásky", body: `
<p>Změna nastává <b>pouze ve 2. a 3. osobě jednotného čísla</b> (du, er/sie/es).</p>
<p><b>e → i / ie:</b> sprechen (du sprichst, er spricht), sehen (du siehst, er sieht). Další: nehmen, essen, lesen, empfehlen.</p>
<p><b>a → ä, au → äu:</b> fahren (du fährst, er fährt), laufen (du läufst, er läuft). Další: schlafen, halten, raten.</p>
<p><b>mögen</b>: ich mag, du magst, er mag — pojí se s předmětem bez dalšího slovesa.</p>
` },
      { h: "Slovní zásoba — jídlo a pití", body: `
<table><tr><th>Kategorie</th><th>Příklady</th></tr>
<tr><td>Nápoje</td><td>s Wasser, r Kaffee, r Saft, s Bier, r Wein</td></tr>
<tr><td>Maso</td><td>s Fleisch, r Fisch, Hühnerfleisch, Rindfleisch</td></tr>
<tr><td>Přílohy</td><td>e Kartoffel, r Reis, r Kloß/Knödel, e Nudel</td></tr>
<tr><td>Ostatní</td><td>e Suppe, s Gemüse, s Eis, e Beilage</td></tr>
</table>
` }
    ]
  },
  {
    id: "w3", title: "3. týden — Popis cesty, odluč. slovesa, imperativ Sie",
    sections: [
      { h: "Doprava a navigace", body: `
<p><b>Dopravní prostředky:</b> s Auto, e Bahn, e Straßenbahn, e U-Bahn.</p>
<p><b>Cesta:</b> e Autobahn, e Kreuzung, e Ampel, r Stau.</p>
<p><b>Předložky:</b> S dopravními prostředky <b>mit</b> (mit dem Auto, mit dem Bus). Pěšky <b>zu Fuß</b>.</p>
<p><b>Fráze:</b> Fahren Sie geradeaus. / Biegen Sie links/rechts ab. / Fahren Sie bis zur Kreuzung. / Wenden Sie.</p>
` },
      { h: "Slovesa s odlučitelnými předponami", body: `
<ul>
<li><b>Jednoduchá věta:</b> předpona se <b>oddělí</b> a stojí na konci věty.<br><i>Ich fahre morgen früh <u>ab</u>.</i></li>
<li><b>S modálním slovesem:</b> předpona zůstává u slovesa v infinitivu na konci.<br><i>Ich will morgen <u>abfahren</u>.</i></li>
</ul>
<p>Časté odlučitelné předpony: ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-.</p>
` },
      { h: "Rozkazovací způsob — vykání (Sie)", body: `
<p>Rozkaz pro <b>Sie</b> vytvoříme prohozením slovosledu: sloveso jde na <b>1. místo</b>.</p>
<ul>
<li>Sie lesen. → <b>Lesen Sie!</b></li>
<li>U odlučitelných: <b>Biegen Sie rechts ab!</b></li>
</ul>
` },
      { h: "Komunikace — cesta na univerzitu", body: `
<ul>
<li>Wie oft müssen Sie zur Universität? — Ich muss dreimal pro Woche zur Universität.</li>
<li>Fahren Sie oder gehen Sie zu Fuß? — Ich fahre mit der U-Bahn.</li>
<li>Müssen Sie umsteigen? — Ja, ich muss einmal umsteigen.</li>
<li>Wie lange dauert der Weg? — Der Weg dauert zirka dreißig Minuten.</li>
<li>Stehen Sie oft im Stau? — Nein, ich stehe nicht oft im Stau.</li>
</ul>
` }
    ]
  },
  {
    id: "w4", title: "4. týden — Imperativ (du/ihr), lokální předložky",
    sections: [
      { h: "Místa ve městě a doprava", body: `
<p><b>Místa:</b> r Hauptbahnhof, s Stadtzentrum, e Haltestelle, s Kino, s Museum, r Flughafen.</p>
<p><b>Slovesa:</b> einsteigen (nastoupit), aussteigen (vystoupit), umsteigen (přestoupit), überqueren (přejít).</p>
<p><b>Fráze:</b> „Entschuldigen Sie bitte…“ / „Wie komme ich zum/zur…?“ / „Tut mir leid, ich weiß nicht.“</p>
` },
      { h: "Rozkazovací způsob — tykání (du / ihr)", body: `
<p><b>du:</b> Odtrhne se koncovka <b>-st</b>, zájmeno du zmizí.</p>
<ul>
<li>Pravidelná: du machst → <b>Mach!</b></li>
<li>e→i: du nimmst → <b>Nimm!</b> (změna zůstává)</li>
<li>a→ä: du läufst → <b>Lauf!</b> (přehláska mizí)</li>
<li>Slovesa na -d, -t: du entschuldigst → <b>Entschuldige!</b></li>
</ul>
<p><b>ihr:</b> stejný tvar jako přítomný čas bez zájmena. ihr macht → <b>Macht!</b></p>
<p><b>Nepravidelné:</b><br>
sein: <b>sei</b> (du), <b>seid</b> (ihr), <b>seien Sie</b><br>
haben: <b>hab(e)</b>, <b>habt</b>, <b>haben Sie</b></p>
` },
      { h: "Lokální předložky (3. a 4. pád)", body: `
<p>Předložky <b>in, an, auf</b> mění pád podle otázky:</p>
<ul>
<li><b>WO?</b> (Kde?) → <b>3. pád (Dativ)</b>: popis místa.<br>im Park (in + dem), in der Stadt, am Alexanderplatz (an + dem).</li>
<li><b>WOHIN?</b> (Kam?) → <b>4. pád (Akkusativ)</b>: popis směru/pohybu.<br>in den Park, in die Stadt, ans Museum (an + das).</li>
</ul>
` },
      { h: "Vzorové odpovědi", body: `
<ul>
<li>Wo ist hier ein Laden? — Ein Laden ist in der Mozartstraße. Gehen Sie geradeaus und biegen Sie dann rechts ab.</li>
<li>Wo ist hier ein Kino? — Das Kino ist am Marktplatz. Fahren Sie mit dem Bus drei Stationen.</li>
<li>Wie komme ich ins Stadtzentrum? — Nehmen Sie die U-Bahn Richtung Zentrum und steigen Sie am Hauptbahnhof aus.</li>
<li>Wie komme ich zum Hauptbahnhof? — Gehen Sie immer geradeaus, überqueren Sie den Platz und da ist der Hauptbahnhof.</li>
</ul>
` }
    ]
  },
  {
    id: "w5", title: "5. týden — Oslavy, sollen, ab vs. seit",
    sections: [
      { h: "Pozvání — přijetí / odmítnutí", body: `
<ul>
<li><b>Zusage:</b> Vielen Dank für die Einladung. Ich nehme an der Feier gerne teil.</li>
<li><b>Absage:</b> Leider muss ich für den 1. Juni absagen.</li>
<li><b>Plánování:</b> „Soll ich…?“ (Mám…?), „Wollen wir…?“ (Chceme…?).</li>
</ul>
` },
      { h: "Oficiální e-mail — struktura", body: `
<ul>
<li><b>Oslovení:</b> Sehr geehrte Frau Müller / Sehr geehrter Herr Müller</li>
<li><b>Poděkování:</b> Vielen Dank für die Einladung.</li>
<li><b>Závěr:</b> Mit freundlichen Grüßen</li>
</ul>
` },
      { h: "Modální sloveso „sollen“", body: `
<p>Vyjadřuje úkol, příkaz nebo doporučení od někoho jiného.</p>
<p><b>Časování:</b> ich soll, du sollst, er soll, wir sollen, ihr sollt, sie sollen.</p>
<p><b>Rámec věty:</b> sollen na <b>2. místě</b>, významové sloveso v infinitivu na <b>konci</b>.<br>
<i>Sie sollen Getränke bestellen.</i></p>
` },
      { h: "„ab“ vs. „seit“ (3. pád)", body: `
<ul>
<li><b>AB</b> — budoucnost / přítomnost (odteď dále). Ab wann? → Ab Mai.</li>
<li><b>SEIT</b> — děj začal v minulosti a stále trvá. Seit wann? → Seit einem Jahr.</li>
</ul>
` },
      { h: "Vzorové odpovědi", body: `
<ul>
<li>Seit wann studieren Sie? — Ich studiere seit September.</li>
<li>Wie lange sollen Sie noch studieren? — Ich soll noch zwei Jahre studieren.</li>
<li>Wie lange lernen Sie Deutsch? — Ich lerne Deutsch seit einem Semester.</li>
<li>Ab wann ist die Prüfungszeit? — Die Prüfungszeit ist ab Mai.</li>
<li>Von wann bis wann haben Sie Sommerferien? — Ich habe von Juli bis August Sommerferien.</li>
</ul>
` }
    ]
  },
  {
    id: "w6", title: "6. týden — Perfektum, nach vs. in",
    sections: [
      { h: "Dovolená — slovní zásoba", body: `
<p><b>Místa:</b> r Strand, s Meer, s Ausland, r Berg.</p>
<p><b>Čas:</b> dieses Jahr, letztes Jahr, nächstes Jahr.</p>
<table><tr><th>Kam? (Akuzativ)</th><th>Kde? (Dativ)</th><th>Překlad</th></tr>
<tr><td>ans Meer</td><td>am Meer</td><td>k moři / u moře</td></tr>
<tr><td>in die Berge</td><td>in den Bergen</td><td>na hory / na horách</td></tr>
<tr><td>ins Ausland</td><td>im Ausland</td><td>do/v zahraničí</td></tr>
<tr><td>in den Urlaub</td><td>im Urlaub</td><td>na dovolenou / na dovolené</td></tr>
</table>
` },
      { h: "Perfektum — minulý čas", body: `
<p>Perfektum = <b>pomocné sloveso (haben/sein)</b> + <b>příčestí minulé (Partizip II)</b>.<br>
Pomocné sloveso je na <b>2. pozici</b>, příčestí je vždy na <b>konci věty</b>.</p>
<p><i>Ich bin im Sommer nach Deutschland gefahren.</i></p>
<h4>Pomocné sloveso</h4>
<ul>
<li><b>SEIN:</b> slovesa pohybu (fahren, reisen, kommen), změny stavu, sein, bleiben.</li>
<li><b>HABEN:</b> všechna ostatní slovesa (machen, lesen, arbeiten).</li>
</ul>
<h4>Tvoření Partizip II</h4>
<ul>
<li><b>Pravidelná:</b> ge- + kmen + -t → machen → <b>gemacht</b></li>
<li><b>Slovesa na -ieren:</b> bez ge- → studieren → <b>studiert</b></li>
<li><b>Odlučitelné předpony:</b> -ge- doprostřed → anrufen → <b>an-ge-rufen</b></li>
<li><b>Neodlučitelné (be-, ge-, er-, ver-, …):</b> bez ge- → verstehen → <b>verstanden</b></li>
<li><b>Nepravidelná:</b> mění kmen, končí na -en → sehen → <b>gesehen</b></li>
</ul>
` },
      { h: "NACH vs. IN (cestování do zemí)", body: `
<ul>
<li><b>NACH</b> — pro státy <b>bez členu</b>: nach Deutschland, nach Tschechien, nach Italien.</li>
<li><b>IN</b> — pro státy <b>se členem</b> (4. pád): in die Schweiz, in die USA, in die Slowakei, in die Niederlande.</li>
</ul>
` },
      { h: "Vzorové odpovědi", body: `
<ul>
<li>Wo waren Sie letztes Jahr im Urlaub? — Letztes Jahr war ich in den Bergen in Österreich.</li>
<li>Wie sind Sie gereist? — Ich bin mit dem Auto gefahren. / Ich bin geflogen.</li>
<li>Wie lange sind Sie dort geblieben? — Ich bin eine Woche dort geblieben.</li>
<li>Was haben Sie gemacht? — Ich bin gewandert, ich bin geschwommen und ich habe Zeitschriften gelesen.</li>
<li>Wohin möchten Sie dieses Jahr fahren? — Dieses Jahr möchte ich ans Meer nach Spanien fahren.</li>
</ul>
` }
    ]
  },
  {
    id: "w7", title: "7. týden — Perfektum s „haben“",
    sections: [
      { h: "Oddělení a činnosti", body: `
<p><b>Oddělení:</b> die Abteilung, die Finanzen, die IT-Abteilung.</p>
<p><b>Slovesa:</b> analysieren, beraten, entwickeln, erstellen, verwalten, verdienen.</p>
<p><b>Pojmy:</b> s Gehalt, r Vertrag, e Rechnung, r Mitarbeiter, s Praktikum.</p>
` },
      { h: "Partizip II u sloves s „haben“", body: `
<ol>
<li><b>Pravidelná:</b> ge- + kmen + -t → machen → gemacht.</li>
<li><b>-ieren:</b> -t bez ge- → analysieren → analysiert.</li>
<li><b>Nepravidelná:</b> mění kmen, -en → sehen → gesehen, schreiben → geschrieben.</li>
<li><b>Odlučitelné:</b> -ge- doprostřed → fernsehen → ferngesehen.</li>
<li><b>Neodlučitelné (be-, ver-, er-, …):</b> bez ge- → verstehen → verstanden.</li>
<li><b>Smíšená:</b> mění kmen, končí na -t → bringen → gebracht.</li>
</ol>
` },
      { h: "Komunikace — vysněné povolání", body: `
<ul>
<li>Was ist Ihr Traumberuf? — Mein Traumberuf ist Manager / Agraringenieur.</li>
<li>Warum möchten Sie diese Arbeit? — Ich finde die Arbeit interessant und möchte viel Geld verdienen.</li>
<li>Müssen Sie mit Menschen arbeiten? — Ja, ich muss viel mit Kunden telefonieren und kommunizieren.</li>
<li>Haben Sie schon gearbeitet? — Ja, ich habe ein Praktikum bei einer Firma gemacht.</li>
<li>Was haben Sie gemacht? — Ich habe Rechnungen kontrolliert und E-Mails geschrieben.</li>
<li>Hat die Arbeit Ihnen gefallen? — Ja, die Arbeit hat mir sehr gefallen.</li>
</ul>
` }
    ]
  },
  {
    id: "w8", title: "8. týden — Zájmena dieser/welcher, opakování perfekta",
    sections: [
      { h: "Práce na počítači a služební cesty", body: `
<p><b>Počítač:</b> ausdrucken, speichern, herunterladen, eingeben.</p>
<p><b>Cesty:</b> die Dienstreise, die Reisekostenabrechnung, die Unterkunft, die Versicherung.</p>
<p><b>Fráze:</b> am Computer arbeiten, im Internet.</p>
` },
      { h: "Zájmena v 1. a 4. pádě (dieser/welcher)", body: `
<p>Řídí se vzorem určitého členu.</p>
<table>
<tr><th>Pád</th><th>Mask.</th><th>Fem.</th><th>Neutr.</th><th>Plurál</th></tr>
<tr><td>Nominativ</td><td>dieser / welcher</td><td>diese / welche</td><td>dieses / welches</td><td>diese / welche</td></tr>
<tr><td>Akkusativ</td><td>diesen / welchen</td><td>diese / welche</td><td>dieses / welches</td><td>diese / welche</td></tr>
</table>
` },
      { h: "Komunikace — studium, praxe", body: `
<ul>
<li>Wo studieren Sie? — Ich studiere an der Tschechischen Agraruniversität in Prag.</li>
<li>Welches Fach studieren Sie? — Ich studiere Öffentliche Verwaltung.</li>
<li>Haben Sie ein Praktikum gemacht? — Ja, ich habe in einer Firma in der Administration gearbeitet.</li>
<li>Welche Aufgaben hatten Sie? — Ich habe Dokumente ausgedruckt, Formulare ausgefüllt und Daten eingegeben.</li>
</ul>
` }
    ]
  },
  {
    id: "w9", title: "9. týden — nicht/kein…sondern, spojky ADUSO",
    sections: [
      { h: "Cestování, počasí, oblečení", body: `
<p><b>Cestování:</b> die Abfahrt, die Ankunft, die Fahrkarte, buchen, abfliegen.</p>
<p><b>Počasí:</b> Es regnet. Es schneit. Es ist bewölkt. kalt, warm, heiß.</p>
<p><b>Oblečení:</b> der Anzug, das Hemd, die Hose, das Kleid, der Koffer.</p>
` },
      { h: "nicht / kein …, sondern", body: `
<ul>
<li><b>nicht</b> neguje část věty nebo sloveso: <i>Ich fliege nicht, sondern ich nehme den Zug.</i></li>
<li><b>kein</b> neguje podstatná jména: <i>Ich nehme keinen Pullover, sondern ein T-Shirt.</i></li>
</ul>
` },
      { h: "Spojky ADUSO", body: `
<p>Souřadící spojky, které <b>nemění slovosled</b> (sloveso zůstává na 2. pozici):</p>
<ul>
<li><b>A</b>ber — ale</li>
<li><b>D</b>enn — neboť / protože</li>
<li><b>U</b>nd — a</li>
<li><b>S</b>ondern — ale / nýbrž</li>
<li><b>O</b>der — nebo</li>
</ul>
` },
      { h: "Komunikace — počasí, dovolená", body: `
<ul>
<li>Wie war das Wetter gestern in Prag? — Gestern war es in Prag bewölkt und ein bisschen kalt.</li>
<li>Wie ist das Wetter heute? — Heute ist es sonnig, aber es sind nur 10 Grad.</li>
<li>Wohin möchten Sie in den Urlaub fahren? — Ich möchte nach Deutschland fahren.</li>
<li>Wie möchten Sie dorthin fahren? — Ich möchte mit dem Zug fahren. Die Verbindung ist sehr gut.</li>
<li>Was packen Sie in den Koffer ein? — Ich packe eine Hose, zwei Hemden, einen Pullover und Schuhe ein.</li>
</ul>
` }
    ]
  },
  {
    id: "w10", title: "10. týden — Modální slovesa v préteritu",
    sections: [
      { h: "Vývoj firmy, snídaně", body: `
<p><b>Firma:</b> die Niederlassung, die Firmenentwicklung, der Umsatz, der Mitarbeiter.<br>
Slovesa: einstellen, entlassen, sinken, steigen.</p>
<p><b>Snídaně:</b> das Frühstück, frühstücken, das Brötchen, der Käse, der Schinken, die Marmelade, das Ei, der Honig.</p>
` },
      { h: "Modální slovesa v préteritu", body: `
<p>Pravidla:</p>
<ul>
<li>Modální slovesa v préteritu <b>ztrácejí přehlásku</b> (müssen → musste, können → konnte).</li>
<li>Typická přípona <b>-te-</b>.</li>
<li><b>1. a 3. osoba jednotného čísla</b> (ich, er/sie/es) jsou vždy shodné.</li>
<li>Modální sloveso na <b>2. pozici</b>, významové sloveso v infinitivu na <b>konci</b>.</li>
</ul>
<table>
<tr><th>Osoba</th><th>können</th><th>müssen</th><th>dürfen</th><th>sollen</th><th>wollen</th></tr>
<tr><td>ich / er</td><td>konnte</td><td>musste</td><td>durfte</td><td>sollte</td><td>wollte</td></tr>
<tr><td>du</td><td>konntest</td><td>musstest</td><td>durftest</td><td>solltest</td><td>wolltest</td></tr>
<tr><td>wir / sie</td><td>konnten</td><td>mussten</td><td>durften</td><td>sollten</td><td>wollten</td></tr>
<tr><td>ihr</td><td>konntet</td><td>musstet</td><td>durftet</td><td>solltet</td><td>wolltet</td></tr>
</table>
` },
      { h: "Komunikace — snídaně a firma", body: `
<ul>
<li>Was essen Sie zum Frühstück? — Ich frühstücke meistens Brötchen mit Käse oder Schinken und trinke dazu Kaffee.</li>
<li>Was essen Sie zu Mittag? — Ich esse oft in der Mensa der Universität.</li>
<li>Was ist Ihr Lieblingsessen? — Mein Lieblingsessen ist Pasta.</li>
<li>Können Sie eine Firma vorstellen? — Ich habe bei einer Firma in Prag gearbeitet. Die Firma hat viele Niederlassungen. Letztes Jahr ist der Umsatz gestiegen. Die Firma stellt neue Mitarbeiter ein.</li>
</ul>
` }
    ]
  }
];

// ==== ZÁPOČTOVÉ TESTY ====
const TESTS = {
  info: {
    title: "Test Deutsch A1 — Sommersemester 2026",
    body: `
<p><b>Struktura testu (100 bodů):</b></p>
<ul>
<li><b>A) Hörverstehen</b> — 15 bodů (5 × 3) — poslech, odpovědi v celých větách</li>
<li><b>B) Bilden Sie Sätze</b> — 12 bodů (4 × 3) — tvoření vět (Perfekt, Präsens, Imperativ)</li>
<li><b>C) Ins Perfekt setzen</b> — 8 bodů (4 × 2) — převod do perfekta</li>
<li><b>D) nicht/kein…, sondern</b> — 15 bodů (5 × 3)</li>
<li><b>E) Essen und Trinken</b> — 15 bodů (5 × 3) — vlastní věty</li>
<li><b>F) Pracovní dny</b> — 5 bodů (5 × 1)</li>
<li><b>G) Popis 5 obrázků</b> — 30 bodů (5 × 2 × 3) — 2 věty ke každému obrázku</li>
</ul>
<p style="color:var(--muted)">Minimální pro zápočet (starší test): <b>26 bodů z 40</b> (+3). Nový test 2026 je 100 p = 100 %.</p>
`
  },
  tasks: [
    {
      id: "A", title: "A) Hörverstehen — poslech",
      desc: "Odpovídej v celých větách. Sluchový materiál při zápočtu bude jiný, ale vzorové otázky:",
      items: [
        { q: "1. Was will Frau Ehlert diesen Sommer machen?", a: "Frau Ehlert will im Sommer ans Meer (nach Italien / nach Spanien) fahren." },
        { q: "2. Mit wem hat Herr Lauer letztes Jahr Ferien gemacht?", a: "Herr Lauer hat letztes Jahr mit seiner Familie (mit seiner Frau / mit seinen Kindern) Ferien gemacht." },
        { q: "3. Was hat er gemacht?", a: "Er ist gewandert und er hat viel gelesen. / Er hat in den Bergen Urlaub gemacht." },
        { q: "4. Wohin fährt Jochen diesen Sommer?", a: "Jochen fährt dieses Jahr nach Österreich / in die Berge / ans Meer." },
        { q: "5. Was macht Markus in den Ferien?", a: "Markus bleibt zu Hause und arbeitet. / Markus macht ein Praktikum." }
      ]
    },
    {
      id: "B", title: "B) Bilden Sie sinnvolle Sätze",
      desc: "Ze slov v závorce vytvoř větu v daném čase / tvaru.",
      items: [
        { q: "1. (ich / Auto / fahren / Prag) — Perfekt", a: "Ich bin mit dem Auto nach Prag gefahren." },
        { q: "2. (Gemüse / wir / einkaufen) — Präsens", a: "Wir kaufen Gemüse ein." },
        { q: "3. (du / sein / 20 Uhr / müssen / zu Hause) — Präsens", a: "Du musst um 20 Uhr zu Hause sein." },
        { q: "4. (20. Mai / abholen / ich / Sie) — Imperativ", a: "Holen Sie mich am 20. Mai ab!" }
      ]
    },
    {
      id: "C", title: "C) Setzen Sie die Sätze ins Perfekt",
      desc: "Převeď větu z přítomného času do perfekta (haben/sein + Partizip II).",
      items: [
        { q: "1. Er ist intelligent.", a: "Er ist intelligent gewesen." },
        { q: "2. Du studierst Psychoanalyse.", a: "Du hast Psychoanalyse studiert." },
        { q: "3. Die Prinzessin liebt das Monster.", a: "Die Prinzessin hat das Monster geliebt." },
        { q: "4. Wir fliegen zum Mars.", a: "Wir sind zum Mars geflogen." }
      ]
    },
    {
      id: "D", title: "D) nicht/kein …, sondern",
      desc: "Vytvoř 5 vět s konstrukcí „nicht/kein …, sondern“.",
      items: [
        { q: "1. (nehmen / Zug nach Berlin / Zug nach Wien / du)", a: "Du nimmst nicht den Zug nach Berlin, sondern den Zug nach Wien." },
        { q: "2. (haben / Auto / Fahrrad / ich)", a: "Ich habe kein Auto, sondern ein Fahrrad." },
        { q: "3. (lieben / hassen / Ulrike / er)", a: "Er liebt Ulrike nicht, sondern er hasst sie." },
        { q: "4. (essen / Sie / Fleisch / Gemüse / nur)", a: "Sie essen nicht Fleisch, sondern nur Gemüse." },
        { q: "5. (sprechen / können / ich / Japanisch / schreiben / Arabisch)", a: "Ich kann nicht Japanisch sprechen, sondern Arabisch schreiben." }
      ]
    },
    {
      id: "E", title: "E) Was essen und trinken Sie gerne?",
      desc: "Napiš 5 úplných vět o jídle a pití, které máš rád/a.",
      items: [
        { q: "Věta 1", a: "Ich esse gern Pizza und Pasta." },
        { q: "Věta 2", a: "Zum Frühstück trinke ich gern Kaffee mit Milch." },
        { q: "Věta 3", a: "Mein Lieblingsessen ist Lendenbraten mit Knödeln." },
        { q: "Věta 4", a: "Ich mag auch Gemüse und Obst, besonders Äpfel." },
        { q: "Věta 5", a: "Am Wochenende trinke ich manchmal ein Glas Wein." }
      ]
    },
    {
      id: "F", title: "F) Pracovní dny (5 Arbeitstage)",
      desc: "Napiš 5 pracovních dní v týdnu.",
      items: [
        { q: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag", a: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag" }
      ]
    },
    {
      id: "G", title: "G) Popis 5 obrázků — 2 věty ke každému",
      desc: "Na zkoušce dostaneš 5 obrázků. Ke každému napiš 2 smysluplné věty. Typické scény:",
      items: [
        { q: "🏖 Pláž / moře / léto", a: "Die Menschen sind am Strand. Das Wetter ist sonnig und warm. Sie schwimmen im Meer und spielen im Sand." },
        { q: "🪩 Diskotéka / tanec", a: "Die Leute tanzen in der Disko. Sie hören laute Musik und haben viel Spaß." },
        { q: "⛰ Hory / turistika", a: "Der Mann wandert in den Bergen. Die Landschaft ist wunderschön und es ist ein bisschen kalt." },
        { q: "☕ Café / schůzka", a: "Zwei Freunde trinken Kaffee im Café. Sie unterhalten sich und es ist sehr gemütlich." },
        { q: "🚣 Loď na řece / pár", a: "Ein Paar fährt mit dem Boot auf dem Fluss. Das ist sehr romantisch." }
      ]
    }
  ],
  // Interaktivní drilly
  perfektDrill: [
    { q: "Ich mache Hausaufgaben.", a: "Ich habe Hausaufgaben gemacht.", hint: "haben + ge-macht (pravidelné)" },
    { q: "Er fährt nach Berlin.", a: "Er ist nach Berlin gefahren.", hint: "SEIN (pohyb A→B)" },
    { q: "Wir studieren Deutsch.", a: "Wir haben Deutsch studiert.", hint: "-ieren: bez ge-" },
    { q: "Sie kommt nach Hause.", a: "Sie ist nach Hause gekommen.", hint: "SEIN (pohyb)" },
    { q: "Du liest ein Buch.", a: "Du hast ein Buch gelesen.", hint: "nepravidelné: lesen → gelesen" },
    { q: "Ich schreibe eine E-Mail.", a: "Ich habe eine E-Mail geschrieben.", hint: "schreiben → geschrieben" },
    { q: "Wir bleiben zu Hause.", a: "Wir sind zu Hause geblieben.", hint: "výjimka: bleiben = SEIN" },
    { q: "Er ruft mich an.", a: "Er hat mich angerufen.", hint: "odluč.: an-ge-rufen" },
    { q: "Sie versteht die Frage.", a: "Sie hat die Frage verstanden.", hint: "neodluč. ver-: bez ge-" },
    { q: "Ich sehe den Film.", a: "Ich habe den Film gesehen.", hint: "sehen → gesehen" },
    { q: "Die Kinder schlafen.", a: "Die Kinder haben geschlafen.", hint: "schlafen → geschlafen" },
    { q: "Wir fliegen nach Spanien.", a: "Wir sind nach Spanien geflogen.", hint: "SEIN (pohyb)" },
    { q: "Er arbeitet im Büro.", a: "Er hat im Büro gearbeitet.", hint: "arbeiten → gearbeitet" },
    { q: "Sie kauft Brot ein.", a: "Sie hat Brot eingekauft.", hint: "odluč.: ein-ge-kauft" },
    { q: "Ich bin müde.", a: "Ich bin müde gewesen.", hint: "sein → gewesen (vždy SEIN)" },
    { q: "Er ist intelligent.", a: "Er ist intelligent gewesen.", hint: "sein → gewesen" },
    { q: "Du studierst Psychoanalyse.", a: "Du hast Psychoanalyse studiert.", hint: "-ieren: studiert" },
    { q: "Die Prinzessin liebt das Monster.", a: "Die Prinzessin hat das Monster geliebt.", hint: "lieben → geliebt" },
    { q: "Wir fliegen zum Mars.", a: "Wir sind zum Mars geflogen.", hint: "SEIN (pohyb)" },
    { q: "Ich trinke Kaffee.", a: "Ich habe Kaffee getrunken.", hint: "trinken → getrunken" },
    { q: "Er isst Fleisch.", a: "Er hat Fleisch gegessen.", hint: "essen → gegessen" },
    { q: "Sie geht in die Schule.", a: "Sie ist in die Schule gegangen.", hint: "SEIN (gehen)" },
    { q: "Wir besuchen Oma.", a: "Wir haben Oma besucht.", hint: "neodluč. be-: besucht (bez ge-)" },
    { q: "Ich stehe früh auf.", a: "Ich bin früh aufgestanden.", hint: "SEIN + odluč.: auf-ge-standen" },
    { q: "Er telefoniert mit Anna.", a: "Er hat mit Anna telefoniert.", hint: "-ieren: telefoniert" }
  ],
  sondernDrill: [
    { q: "ich / trinken / Kaffee / Tee", a: "Ich trinke nicht Kaffee, sondern Tee.", hint: "nicht (slovo už určené, nepřidáváme neurčitý člen)" },
    { q: "er / haben / Hund / Katze", a: "Er hat keinen Hund, sondern eine Katze.", hint: "kein + Akk. mask. = keinen" },
    { q: "wir / fahren / nach Berlin / nach München", a: "Wir fahren nicht nach Berlin, sondern nach München.", hint: "nicht (neguje jméno s předložkou)" },
    { q: "sie / essen / Fisch / Fleisch", a: "Sie isst nicht Fisch, sondern Fleisch.", hint: "3. os.: isst (e→i)" },
    { q: "du / lernen / Englisch / Deutsch", a: "Du lernst nicht Englisch, sondern Deutsch.", hint: "jazyky bez členu → nicht" },
    { q: "ich / kaufen / Auto / Fahrrad", a: "Ich kaufe kein Auto, sondern ein Fahrrad.", hint: "neurčité podst. jméno → kein" },
    { q: "er / wohnen / in Prag / in Wien", a: "Er wohnt nicht in Prag, sondern in Wien.", hint: "města s in → nicht" },
    { q: "ich / spielen / Tennis / Fußball", a: "Ich spiele nicht Tennis, sondern Fußball.", hint: "sporty bez členu → nicht" },
    { q: "nehmen / Zug nach Berlin / Zug nach Wien / du", a: "Du nimmst nicht den Zug nach Berlin, sondern den Zug nach Wien.", hint: "určitý člen 'den' → nicht" },
    { q: "haben / Auto / Fahrrad / ich", a: "Ich habe kein Auto, sondern ein Fahrrad.", hint: "neurčité podst. j. → kein" },
    { q: "lieben / hassen / Ulrike / er", a: "Er liebt Ulrike nicht, sondern er hasst sie.", hint: "opozice sloves (2 věty)" },
    { q: "essen / Sie / Fleisch / Gemüse / nur", a: "Sie essen nicht nur Fleisch, sondern auch Gemüse.", hint: "nicht nur..., sondern auch..." },
    { q: "sprechen / können / ich / Japanisch / schreiben / Arabisch", a: "Ich kann nicht Japanisch sprechen, sondern Arabisch schreiben.", hint: "modálka: kann ... sprechen/schreiben" }
  ],
  imperativDrill: [
    { q: "Sie / kommen / bitte", a: "Kommen Sie bitte!", hint: "Sie-forma: sloveso na 1. pozici" },
    { q: "Sie / sprechen / langsam", a: "Sprechen Sie langsam!", hint: "Sie-forma" },
    { q: "Sie / abbiegen / rechts", a: "Biegen Sie rechts ab!", hint: "odluč. předpona na konec" },
    { q: "du / machen / Hausaufgaben", a: "Mach die Hausaufgaben!", hint: "du: -st zmizí" },
    { q: "du / nehmen / das Buch", a: "Nimm das Buch!", hint: "e→i zůstává v imperativu" },
    { q: "du / fahren / langsam", a: "Fahr langsam!", hint: "přehláska a→ä v imperativu MIZÍ" },
    { q: "du / essen / den Apfel", a: "Iss den Apfel!", hint: "e→i zůstává: du isst → Iss!" },
    { q: "Sie / Frau Wagner / fragen", a: "Fragen Sie Frau Wagner!", hint: "Sie na 2. pozici po slovesu" },
    { q: "Sie / warten / hier", a: "Warten Sie hier!", hint: "Sie-forma" },
    { q: "du / sein / ruhig", a: "Sei ruhig!", hint: "nepravidelný: sei (tykání)" },
    { q: "du / haben / Geduld", a: "Hab Geduld!", hint: "nepravidelný: hab (tykání)" },
    { q: "Sie / mich / anrufen", a: "Rufen Sie mich an!", hint: "odluč. předp. na konci" },
    { q: "Sie / 20. Mai / abholen / mich", a: "Holen Sie mich am 20. Mai ab!", hint: "pořadí: Zeit (čas) na konci před odluč." },
    { q: "du / trinken / den Kaffee", a: "Trink den Kaffee!", hint: "du trinkst → Trink!" },
    { q: "du / schreiben / die E-Mail", a: "Schreib die E-Mail!", hint: "du schreibst → Schreib!" }
  ],
  satzbauDrill: [
    { q: "ich / Auto / fahren / Prag — Perfekt", a: "Ich bin mit dem Auto nach Prag gefahren.",
      hint: "Pohyb → SEIN. Přidej: MIT DEM (dopr. prostředek) + NACH (směr)." },
    { q: "Gemüse / wir / einkaufen — Präsens", a: "Wir kaufen Gemüse ein.",
      hint: "Odlučitelné einkaufen → kaufen … ein. Podmět na 1. pozici." },
    { q: "du / sein / 20 Uhr / müssen / zu Hause — Präsens", a: "Du musst um 20 Uhr zu Hause sein.",
      hint: "Modálka (musst) na 2. pozici, infinitiv (sein) na konci. UM 20 Uhr." },
    { q: "20. Mai / abholen / ich / Sie — Imperativ", a: "Holen Sie mich am 20. Mai ab!",
      hint: "Sie-imperativ, AM 20. Mai, odluč. 'ab' na konci." },
    { q: "er / arbeiten / seit / Jahr / Firma — Präsens", a: "Er arbeitet seit einem Jahr in der Firma.",
      hint: "seit + Dat. (einem Jahr), in der Firma (Dat.)." },
    { q: "ich / Brot / kaufen / Bäckerei — Perfekt", a: "Ich habe Brot in der Bäckerei gekauft.",
      hint: "haben + gekauft; in der Bäckerei (kde → Dativ)." },
    { q: "wir / nach Italien / fliegen / gestern — Perfekt", a: "Wir sind gestern nach Italien geflogen.",
      hint: "SEIN (fliegen). Čas 'gestern' hned za pom. slovesem." },
    { q: "Sie / ruhig / sein — Imperativ", a: "Seien Sie ruhig!",
      hint: "sein v Sie-imperativu: 'Seien Sie...!'" },
    { q: "ich / letztes Jahr / Praktikum / machen — Perfekt", a: "Ich habe letztes Jahr ein Praktikum gemacht.",
      hint: "haben + gemacht. Neurčitý člen EIN Praktikum." },
    { q: "sie / jeden Tag / zur Uni / gehen — Präsens", a: "Sie geht jeden Tag zur Uni.",
      hint: "3. os.: geht. ZUR Uni (zu + der)." }
  ],
  pictureGuide: {
    intro: `Dostaneš 5 obrázků → na každý napiš 2 vety (5×2×3 = 30 bodů). Použij jednoduché věty: <b>Ich sehe… / Das ist… / Die Person/en ist/sind… / Das Wetter ist… / Sie + sloveso…</b>`,
    scenes: [
      { name: "🏖 Pláž / moře / léto",
        vocab: "r Strand, s Meer, e Sonne, r Sand, schwimmen, sonnig, warm, spielen, baden",
        samples: [
          "Die Menschen sind am Strand.",
          "Das Wetter ist sonnig und warm.",
          "Eine Frau schwimmt im Meer.",
          "Die Kinder spielen im Sand.",
          "Die Sonne scheint und es ist heiß."
        ]},
      { name: "🪩 Diskotéka / tanec / párty",
        vocab: "e Disko, e Musik, tanzen, r Spaß, laut, e Leute, Freunde",
        samples: [
          "Die Leute tanzen in der Disko.",
          "Sie hören laute Musik.",
          "Die Freunde haben viel Spaß.",
          "Es ist sehr laut und bunt.",
          "Die Menschen tanzen gerne zusammen."
        ]},
      { name: "⛰ Hory / turistika",
        vocab: "r Berg, e Landschaft, wandern, r Rucksack, kalt, schön, Ski fahren",
        samples: [
          "Der Mann wandert in den Bergen.",
          "Die Landschaft ist wunderschön.",
          "Er hat einen Rucksack auf dem Rücken.",
          "Es ist kalt und es gibt Schnee.",
          "Die Berge sind sehr hoch."
        ]},
      { name: "☕ Café / kavárna / schůzka",
        vocab: "s Café, r Kaffee, trinken, sich unterhalten, gemütlich, r Freund/e Freundin",
        samples: [
          "Zwei Freunde trinken Kaffee im Café.",
          "Sie unterhalten sich gemütlich.",
          "Es ist ein schönes Café.",
          "Die Frau bestellt einen Kaffee.",
          "Der Mann und die Frau lachen."
        ]},
      { name: "🚣 Loď / řeka / romantika",
        vocab: "s Boot, r Fluss, s Paar, romantisch, fahren, Blumen",
        samples: [
          "Ein Paar fährt mit dem Boot auf dem Fluss.",
          "Das ist sehr romantisch.",
          "Die Sonne scheint und es gibt Blumen.",
          "Sie genießen die Zeit zusammen.",
          "Das Wasser ist ruhig und schön."
        ]},
      { name: "🏠 Doma / rodina",
        vocab: "s Haus, e Familie, zu Hause, essen, zusammen, am Tisch",
        samples: [
          "Die Familie ist zu Hause.",
          "Sie essen zusammen am Tisch.",
          "Die Mutter kocht das Essen.",
          "Die Kinder spielen im Zimmer.",
          "Es ist gemütlich und warm."
        ]},
      { name: "🛍 Nakupování / obchod",
        vocab: "r Supermarkt, kaufen, s Gemüse, s Obst, bezahlen, r Kunde",
        samples: [
          "Die Frau kauft im Supermarkt ein.",
          "Sie kauft Gemüse und Obst.",
          "An der Kasse bezahlt sie mit Karte.",
          "Es gibt viele Produkte.",
          "Der Kunde nimmt einen Einkaufswagen."
        ]},
      { name: "🏢 Práce / kancelář",
        vocab: "s Büro, arbeiten, r Computer, r Mitarbeiter, e Kollegin, telefonieren",
        samples: [
          "Die Frau arbeitet im Büro.",
          "Sie sitzt am Computer.",
          "Ihre Kollegin telefoniert.",
          "Sie haben viel Arbeit.",
          "Das Büro ist modern und hell."
        ]}
    ]
  },
  // "Cheat sheet" — principy, co zkoušku projde
  principles: [
    {
      h: "🧱 Princip 1: PERFEKTUM (nejdůležitější!)",
      b: `
<p>V testu se objeví <b>minimálně 2× (úloha B1 + celá C = 11 bodů</b>). Bez perfekta zápočet neuděláš.</p>
<h4>Krok 1 — Vyber pomocné sloveso</h4>
<ul>
<li><b>SEIN</b>: pohyb z A do B (<i>fahren, gehen, kommen, fliegen, reisen, laufen, wandern, schwimmen</i>), změna stavu (<i>aufstehen, einschlafen</i>), + výjimky <b>sein</b> (gewesen) a <b>bleiben</b> (geblieben).</li>
<li><b>HABEN</b>: všechno ostatní (~90 % sloves).</li>
</ul>
<h4>Krok 2 — Vytvoř Partizip II</h4>
<table>
<tr><th>Typ</th><th>Pravidlo</th><th>Příklad</th></tr>
<tr><td>Pravidelná</td><td>ge- + kmen + -t</td><td>machen → <b>gemacht</b></td></tr>
<tr><td>Nepravidelná</td><td>ge- + kmen + -en (často změna kmene)</td><td>sehen → <b>gesehen</b>, schreiben → <b>geschrieben</b></td></tr>
<tr><td>-ieren</td><td>bez ge-, -t na konci</td><td>studieren → <b>studiert</b></td></tr>
<tr><td>Odlučitelná</td><td>předpona + <b>-ge-</b> + kmen</td><td>einkaufen → <b>ein-ge-kauft</b>, anrufen → <b>an-ge-rufen</b></td></tr>
<tr><td>Neodlučitelná (be-, ge-, er-, ver-, zer-, ent-)</td><td><b>bez ge-</b></td><td>verstehen → <b>verstanden</b>, besuchen → <b>besucht</b></td></tr>
</table>
<h4>Krok 3 — Slovosled</h4>
<p><b>Pom. sloveso na 2. pozici, Partizip II na konci věty.</b></p>
<p><i>Ich <b>habe</b> gestern einen Film <b>gesehen</b>.</i><br>
<i>Wir <b>sind</b> letztes Jahr nach Italien <b>gefahren</b>.</i></p>
<p><b>Tip na test:</b> typická proměna „Er ist intelligent.“ → pamatuj, že <b>sein</b> v Perfektu = „ist gewesen“ (pomocné + Partizip 'gewesen'), takže: <b>Er ist intelligent gewesen.</b></p>
`
    },
    {
      h: "🧩 Princip 2: TVORBA VĚTY Z KLÍČOVÝCH SLOV (úloha B)",
      b: `
<p>V úloze B dostaneš kostru věty, např. <code>(ich/Auto/fahren/Prag) Perfekt</code>. Musíš <b>doplnit členy, předložky, vyčasovat</b> sloveso a dodržet slovosled.</p>
<h4>Co vždy musíš přidat</h4>
<ul>
<li><b>mit dem/der</b> u dopravního prostředku: <i>mit dem Auto, mit dem Bus, mit der Bahn</i></li>
<li><b>nach</b> pro směr k městu/zemi bez členu: <i>nach Prag, nach Deutschland, nach Hause</i></li>
<li><b>in die</b> u zemí se členem: <i>in die Schweiz, in die USA</i></li>
<li><b>um</b> + hodina: <i>um 20 Uhr</i></li>
<li><b>am</b> + datum: <i>am 20. Mai</i></li>
<li><b>seit</b> / <b>ab</b> + Dativ: <i>seit einem Jahr, ab Mai</i></li>
</ul>
<h4>Typické proměny</h4>
<ul>
<li><code>ich/Auto/fahren/Prag</code> Perfekt → <i>Ich bin mit dem Auto nach Prag gefahren.</i></li>
<li><code>Gemüse/wir/einkaufen</code> Präsens → <i>Wir kaufen Gemüse ein.</i> (odluč. ein-)</li>
<li><code>du/sein/20 Uhr/müssen/zu Hause</code> → <i>Du musst um 20 Uhr zu Hause sein.</i></li>
<li><code>20. Mai/abholen/ich/Sie</code> Imperativ → <i>Holen Sie mich am 20. Mai ab!</i></li>
</ul>
<h4>Slovosled — „TMP“ pravidlo</h4>
<p>Když je více informací, řadí se <b>Temporal (čas) → Modal (jak) → Lokal (kam/kde)</b>:<br>
<i>Ich fahre <u>morgen</u> (T) <u>mit dem Auto</u> (M) <u>nach Prag</u> (L).</i></p>
`
    },
    {
      h: "❌ Princip 3: NICHT / KEIN …, SONDERN (úloha D = 15 bodů!)",
      b: `
<p>Celých 15 % testu. Musíš vědět, kdy použít <b>nicht</b> a kdy <b>kein</b>.</p>
<h4>NICHT vs KEIN</h4>
<ul>
<li><b>KEIN</b> → neguje <b>podstatné jméno</b>, které má normálně <b>neurčitý člen (ein)</b> nebo <b>žádný člen</b> (množné č., abstrakta, látky): <i>Ich habe <b>kein</b> Auto.</i> / <i>Ich habe <b>keine</b> Zeit.</i></li>
<li><b>NICHT</b> → všechno ostatní: neguje sloveso, přídavné jméno, jméno s určitým členem, vlastní jména, města, sporty, jazyky: <i>Ich spiele <b>nicht</b> Fußball.</i> / <i>Ich fahre <b>nicht</b> nach Berlin.</i></li>
</ul>
<h4>Skloňování „kein“</h4>
<table>
<tr><th></th><th>Nominativ</th><th>Akkusativ</th></tr>
<tr><td>m</td><td>kein Hund</td><td><b>keinen</b> Hund</td></tr>
<tr><td>f</td><td>keine Katze</td><td>keine Katze</td></tr>
<tr><td>n</td><td>kein Auto</td><td>kein Auto</td></tr>
<tr><td>Pl</td><td>keine Bücher</td><td>keine Bücher</td></tr>
</table>
<h4>Konstrukce „…, sondern…“</h4>
<p>Po <b>nicht/kein</b> následuje pozitivní alternativa se spojkou <b>sondern</b>. <b>Nemění slovosled</b> (ADUSO).</p>
<ul>
<li><i>Ich habe <b>kein</b> Auto, <b>sondern</b> ein Fahrrad.</i></li>
<li><i>Ich trinke <b>nicht</b> Kaffee, <b>sondern</b> Tee.</i></li>
<li><i>Wir fahren <b>nicht nur</b> nach Berlin, <b>sondern auch</b> nach München.</i> (varianta „nicht nur…, sondern auch…“)</li>
</ul>
<h4>Nejčastější past</h4>
<p>❌ <i>Ich habe nicht Auto, sondern Fahrrad.</i> — špatně! Auto je neurčité → <b>kein</b>.<br>
✅ <i>Ich habe kein Auto, sondern ein Fahrrad.</i></p>
`
    },
    {
      h: "📢 Princip 4: IMPERATIV",
      b: `
<h4>Sie-forma (nejčastější!)</h4>
<p>Sloveso <b>na 1. pozici</b>, zájmeno <b>Sie</b> hned za ním. Odluč. předpona na konec.</p>
<ul>
<li><i>Kommen Sie bitte!</i></li>
<li><i>Biegen Sie rechts <b>ab</b>!</i></li>
<li><i>Holen Sie mich am 20. Mai <b>ab</b>!</i></li>
</ul>
<p><b>Výjimka:</b> sein → <b>Seien Sie ruhig!</b></p>
<h4>du-forma</h4>
<p>Odtrhne se koncovka <b>-st</b>, zájmeno <b>du</b> zmizí.</p>
<ul>
<li>du machst → <b>Mach!</b></li>
<li>du nimmst → <b>Nimm!</b> (e→i zůstává)</li>
<li>du fährst → <b>Fahr!</b> (a→ä <u>mizí</u>)</li>
<li>du arbeitest → <b>Arbeite!</b> (slovesa na -d/-t přidávají -e)</li>
</ul>
<p><b>Výjimky:</b> sein → <b>Sei!</b>, haben → <b>Hab!</b></p>
<h4>ihr-forma</h4>
<p>Stejný tvar jako přítomný čas, jen bez zájmena ihr:</p>
<ul><li>ihr macht → <b>Macht!</b></li></ul>
`
    },
    {
      h: "✍️ Princip 5: PRODUKTIVNÍ PSANÍ (úlohy E, F, G = 50 bodů!)",
      b: `
<p>Polovina testu je <b>„napiš věty o sobě / o obrázcích“</b>. Tady neztrácej body na banální chyby.</p>
<h4>Úloha E — jídlo a pití (15 b.)</h4>
<p>Připrav si 5 „univerzálních“ vět:</p>
<ol>
<li><i>Ich esse gern Pizza und Pasta.</i></li>
<li><i>Zum Frühstück trinke ich Kaffee mit Milch.</i></li>
<li><i>Mein Lieblingsessen ist Lendenbraten mit Knödeln.</i></li>
<li><i>Ich mag Obst, besonders Äpfel und Orangen.</i></li>
<li><i>Am Wochenende trinke ich ein Glas Wein.</i></li>
</ol>
<h4>Úloha F — 5 pracovních dnů (5 b.)</h4>
<p>DARMO: <b>Montag, Dienstag, Mittwoch, Donnerstag, Freitag</b>. (Pozor na pravopis Mittwoch — NE „Mitwoch“!)</p>
<h4>Úloha G — popis 5 obrázků (30 b.!)</h4>
<p>2 věty na obrázek. Univerzální šablona:</p>
<ol>
<li><b>Věta 1:</b> Co vidíš / co se děje — <i>„Die Menschen sind am Strand.“ / „Der Mann wandert in den Bergen.“ / „Zwei Freunde trinken Kaffee.“</i></li>
<li><b>Věta 2:</b> Detail / emoce / počasí — <i>„Das Wetter ist sonnig.“ / „Sie haben viel Spaß.“ / „Es ist sehr romantisch.“</i></li>
</ol>
<p>Sekce <b>„Popis obrázků“</b> má připravené věty pro 8 typických scén.</p>
`
    },
    {
      h: "🧠 Princip 6: SLOVOSLED V NĚMČINĚ",
      b: `
<h4>Pravidlo V2 (sloveso na 2. pozici)</h4>
<p>V oznamovací větě je <b>vyčasované sloveso vždy na 2. pozici</b>, podmět se může posunout.</p>
<ul>
<li><i><u>Ich</u> (1) <b>fahre</b> (2) morgen nach Prag.</i></li>
<li><i><u>Morgen</u> (1) <b>fahre</b> (2) ich nach Prag.</i> — podmět šel na 3. místo</li>
</ul>
<h4>Rámec (Satzklammer)</h4>
<p>Když je v větě více částí slovesa, „obklopují“ větu:</p>
<ul>
<li><b>Perfektum:</b> pom. sloveso (2) … Partizip II (konec): <i>Ich <b>habe</b> gestern einen Film <b>gesehen</b>.</i></li>
<li><b>Modálka:</b> modálka (2) … infinitiv (konec): <i>Ich <b>will</b> morgen Deutsch <b>lernen</b>.</i></li>
<li><b>Odluč. sloveso:</b> kmen (2) … předpona (konec): <i>Ich <b>rufe</b> dich morgen <b>an</b>.</i></li>
</ul>
<h4>Otázka</h4>
<ul>
<li><b>Ano/ne:</b> sloveso na 1. pozici — <i>Fährst du nach Prag?</i></li>
<li><b>W-otázka:</b> tázací slovo (1) + sloveso (2) — <i>Wohin fährst du?</i></li>
</ul>
`
    },
    {
      h: "📅 Princip 7: DATUM, ČAS, PŘEDLOŽKY",
      b: `
<h4>Čas</h4>
<ul>
<li><b>um</b> + hodina: <i>um 20 Uhr, um halb sieben</i></li>
<li><b>am</b> + den / datum: <i>am Montag, am 20. Mai</i></li>
<li><b>im</b> + měsíc / rok: <i>im Mai, im Jahr 2026</i></li>
<li><b>von … bis …</b>: <i>von Juli bis August</i></li>
<li><b>seit</b> + Dat. (trvá): <i>seit einem Jahr</i></li>
<li><b>ab</b> + Dat. (odteď): <i>ab Mai</i></li>
</ul>
<h4>Dny a měsíce</h4>
<p><b>Dny:</b> Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.<br>
<b>Měsíce:</b> Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.</p>
<h4>Směr vs. místo</h4>
<ul>
<li><b>Kam?</b> (Akk.) → <i>in die Stadt, ans Meer, nach Berlin</i></li>
<li><b>Kde?</b> (Dat.) → <i>in der Stadt, am Meer, in Berlin</i></li>
</ul>
`
    }
  ]
};

// ==== KVÍZOVÉ OTÁZKY (gramatika) ====
const QUIZ = [
  { q: "Jak zní správně: „Ich ___ Wasser.“ (mám rád vodu)", opts: ["schwimme gern","mag","gern","habe"], a: 1,
    expl: "U podstatného jména (Wasser) používáme mögen. Činnost by byla „Ich schwimme gern“." },
  { q: "Doplň: „Ich brauche einen Tisch ___ vier Personen.“", opts: ["für","mit","zu","von"], a: 0,
    expl: "für + 4. pád: pro čtyři osoby." },
  { q: "Která forma je správná? „Du ___ schnell.“ (sprechen)", opts: ["sprechst","sprechest","sprichst","sprecht"], a: 2,
    expl: "sprechen mění e→i ve 2. os. sg.: du sprichst." },
  { q: "„Er ___ nach Berlin.“ (fahren)", opts: ["fahrt","fahrt","fährt","führt"], a: 2,
    expl: "fahren mění a→ä: er fährt." },
  { q: "Rozkaz pro Sie ze slovesa „abbiegen rechts“:", opts: ["Rechts abbiegen Sie!","Sie biegen rechts ab.","Biegen Sie rechts ab!","Ab biegen Sie rechts!"], a: 2,
    expl: "Sloveso na 1. místo, odlučitelná předpona na konec." },
  { q: "„Morgen früh ___ ich ___.“ (abfahren)", opts: ["ab / fahre","fahre / ab","abfahre / —","fahren / ab"], a: 1,
    expl: "V jednoduché větě: časovaný tvar na 2. pozici, předpona na konci: fahre … ab." },
  { q: "Imperativ du od „nehmen“:", opts: ["Nehm!","Nimm!","Nimme!","Nimmst!"], a: 1,
    expl: "Změna e→i zůstává i v imperativu: Nimm!" },
  { q: "Imperativ du od „laufen“:", opts: ["Läuf!","Laufe!","Lauf!","Läufst!"], a: 2,
    expl: "Přehláska v imperativu du mizí: Lauf!" },
  { q: "Kde? – „___ Park“ (in)", opts: ["in dem / im","in den","in das / ins","in der"], a: 0,
    expl: "WO? → 3. pád: im Park (in + dem)." },
  { q: "Kam? – „___ Stadt“ (in)", opts: ["in der","in die","in den","im"], a: 1,
    expl: "WOHIN? → 4. pád: in die Stadt." },
  { q: "„___ Mai ist Prüfungszeit.“ (od května)", opts: ["Seit","Ab","Von","Nach"], a: 1,
    expl: "Budoucnost/odteď = ab. Seit by znamenalo „od té doby trvá“." },
  { q: "„Ich lerne Deutsch ___ einem Semester.“", opts: ["ab","seit","von","für"], a: 1,
    expl: "Děj začal v minulosti a stále trvá → seit." },
  { q: "Pomocné sloveso u „fahren“ v perfektu:", opts: ["haben","sein","werden","mögen"], a: 1,
    expl: "fahren = pohyb z A do B → sein. Ich bin gefahren." },
  { q: "Partizip II od „studieren“:", opts: ["gestudiert","studiert","studieren","gestudieren"], a: 1,
    expl: "Slovesa na -ieren nepřibírají ge-: studiert." },
  { q: "Partizip II od „anrufen“:", opts: ["angerufen","gerufen an","ruf an","geanrufen"], a: 0,
    expl: "Odlučitelná předpona: -ge- se vkládá → an-ge-rufen." },
  { q: "Partizip II od „verstehen“:", opts: ["geverstanden","verstanden","verstehen","verstand"], a: 1,
    expl: "Neodlučitelné předpony (ver-) ge- nepřibírají: verstanden." },
  { q: "„Ich fahre ___ Deutschland.“", opts: ["in","nach","zu","an"], a: 1,
    expl: "Země bez členu → nach Deutschland." },
  { q: "„Wir fahren ___ Schweiz.“", opts: ["nach","in die","zu","in der"], a: 1,
    expl: "Die Schweiz má člen → in die Schweiz (Akkusativ)." },
  { q: "Sondern / aber – „Ich nehme keinen Pullover, ___ ein T-Shirt.“", opts: ["aber","denn","sondern","oder"], a: 2,
    expl: "Po záporu a opravě: sondern (nýbrž)." },
  { q: "„Ich muss arbeiten, ___ ich brauche Geld.“", opts: ["denn","sondern","aber","oder"], a: 0,
    expl: "denn = neboť / protože (ADUSO, slovosled se nemění)." },
  { q: "Préteritum od „müssen“ (ich):", opts: ["musste","müsste","musstete","mussen"], a: 0,
    expl: "Přehláska mizí, přidá se -te: ich musste." },
  { q: "Préteritum od „können“ (wir):", opts: ["kannten","könnten","konnten","konntet"], a: 2,
    expl: "wir/sie/Sie: konnten." },
  { q: "Dieser/welcher – Akkusativ mask. sg.:", opts: ["dieser","diesen","diesem","dieses"], a: 1,
    expl: "Maskulinum Akkusativ: diesen / welchen." },
  { q: "Doplň: „Sie ___ Getränke bestellen.“ (mají objednat)", opts: ["sollen","wollen","mögen","dürfen"], a: 0,
    expl: "sollen = úkol/povinnost od někoho jiného." },
  { q: "S autem jedu: „Ich fahre ___ Auto.“", opts: ["zu","mit der","mit dem","in der"], a: 2,
    expl: "Dopravní prostředek: mit dem Auto (s dativem)." },
  { q: "Pěšky: „Ich gehe ___.“", opts: ["mit Fuß","zu Fuß","auf Fuß","in Fuß"], a: 1,
    expl: "Ustálená vazba: zu Fuß gehen." },
  { q: "Perfektum: „Er ___ ein Buch ___.“ (lesen)", opts: ["ist / gelesen","hat / lesen","hat / gelesen","ist / lest"], a: 2,
    expl: "lesen = haben + Partizip II gelesen." },
  { q: "Perfektum: „Wir ___ in Österreich ___.“ (bleiben)", opts: ["haben / geblieben","sind / geblieben","sind / bleiben","haben / bleiben"], a: 1,
    expl: "bleiben tvoří perfektum se sein." },
  { q: "„Was ___ Sie zum Frühstück?“ (essen – du/er forma pro Sie)", opts: ["esst","essen","isst","ißt"], a: 1,
    expl: "Sie = 3. os. pl.: Sie essen. Správně: Was essen Sie zum Frühstück?" },
  { q: "Absage — formulace:", opts: ["Ich nehme gerne teil.","Leider muss ich absagen.","Das stimmt so.","Viel Erfolg!"], a: 1,
    expl: "„Leider muss ich absagen“ = bohužel musím odmítnout." }
];

// ==== Minulé zápočtové testy (ČZU Šumperk, LS 2024/2025) ====
// Každá otázka: q = věta s mezerou, opts = 3 možnosti (a/b/c), a = index správné, expl = krátké vysvětlení.
const PAST_TESTS = [
  // ---------- VARIANTA A ----------
  { v: "A", n: 1, q: "Monika ______ schon gut deutsch.", opts: ["sprecht","spricht","sprichst"], a: 1,
    expl: "3. os. sg. (Monika = sie): sprechen → e→i → spricht.", cz: "Monika už mluví dobře německy." },
  { v: "A", n: 2, q: "Was ______ du jetzt?", opts: ["liest","lest","lies"], a: 0,
    expl: "lesen v 2. os. sg. mění e→ie: du liest. „Lies!“ je imperativ.", cz: "Co teď čteš?" },
  { v: "A", n: 3, q: "Ihr ______ sehr schnell.", opts: ["läufst","läuft","lauft"], a: 2,
    expl: "Ihr-tvar: přehláska MIZÍ → ihr lauft. (Umlaut je jen v du/er/sie/es.)", cz: "Vy běžíte velmi rychle." },
  { v: "A", n: 4, q: "______ Lehrbuch kaufst du morgen?", opts: ["Welches","Welchen","Welch"], a: 0,
    expl: "das Lehrbuch = neutrum. Akkusativ neutra: welches.", cz: "Kterou učebnici si zítra koupíš?" },
  { v: "A", n: 5, q: "Sie essen kein ______ Fleisch.", opts: ["gebratenen","gebraten","gebratenes"], a: 2,
    expl: "kein + neutrum akuzativ → koncovka -es: kein gebratenes Fleisch.", cz: "Nejedí pečené maso." },
  { v: "A", n: 6, q: "Heute haben wir ______ Mai.", opts: ["der vierundzwanzigste","vierundzwanzigsten","den vierundzwanzigsten"], a: 2,
    expl: "„Heute haben wir den 24. Mai“ = akuzativ s členem den.", cz: "Dnes máme 24. května." },
  { v: "A", n: 7, q: "Thomas wohnt ______.", opts: ["in einem kleinen Zimmer","in ein kleines Zimmer","in eines klein Zimmer"], a: 0,
    expl: "wohnen in + DATIV (kde?). Neutrum dativ: in einem kleinen Zimmer.", cz: "Thomas bydlí v malém pokoji." },
  { v: "A", n: 8, q: "Mit ______ gehen wir ins Kino.", opts: ["der gute Freund","dem guten Freund","den guten Freund"], a: 1,
    expl: "Předložka mit vždy řídí DATIV. Maskulinum dativ: dem guten Freund.", cz: "S dobrým přítelem jdeme do kina." },
  { v: "A", n: 9, q: "Wohin kommt der Fernseher? ______.", opts: ["Im Schlafzimmer","In den Schlafzimmer","Ins Schlafzimmer"], a: 2,
    expl: "Wohin? → AKUZATIV. Neutrum: in das = ins Schlafzimmer.", cz: "Kam přijde televize? Do ložnice." },
  { v: "A", n: 10, q: "Ich möchte Ihnen ______.", opts: ["meine Frau vorstellen","stellen meine Frau vor","vorstellen meine Frau"], a: 0,
    expl: "Modální/möchte + infinitiv: infinitiv jde NA KONEC, odlučitelná předpona zůstává: meine Frau vorstellen.", cz: "Rád bych Vám představil svou ženu." },
  { v: "A", n: 11, q: "Ich bitte dich, dass ______.", opts: ["du mir mit der Arbeit hilfst","du hilfst mir mit der Arbeit","hilfst du mir mit der Arbeit"], a: 0,
    expl: "Po spojce „dass“ jde určité sloveso NA KONEC věty.", cz: "Prosím tě, abys mi pomohl s prací." },
  { v: "A", n: 12, q: "Heute ist zum Mittagessen ______ Reis.", opts: ["keiner","keinen","kein"], a: 2,
    expl: "„ist“ = nominativ. Reis je maskulinum → kein Reis.", cz: "Dnes není k obědu (žádná) rýže." },
  { v: "A", n: 13, q: "Ich weiss alles ______ deinem Freund.", opts: ["über","aus","von"], a: 2,
    expl: "„wissen/erzählen von + dativ“. Über by chtělo akuzativ (deinen Freund).", cz: "Vím všechno o tvém příteli." },
  { v: "A", n: 14, q: "Weisst du nicht, ob ______ ?", opts: ["Eva zu uns kommt","kommt Eva zu uns","zu uns Eva kommt"], a: 0,
    expl: "Po spojce „ob“ jde sloveso NA KONEC: ob Eva zu uns kommt.", cz: "Nevíš, jestli k nám Eva přijde?" },
  { v: "A", n: 15, q: "______ Auto ist nicht schön.", opts: ["Jede","Jeder","Jedes"], a: 2,
    expl: "das Auto = neutrum, nominativ → jedes Auto.", cz: "Každé auto není pěkné." },
  { v: "A", n: 16, q: "Ich wasche ______ immer die Hände.", opts: ["mir","sich","mich"], a: 0,
    expl: "Reflexivum s částí těla = DATIV: Ich wasche mir die Hände. (Já si myju ruce.)", cz: "Vždycky si myju ruce." },
  { v: "A", n: 17, q: "Wenn ich Schmerzen habe, ______.", opts: ["ich gehe zum Arzt","gehe ich zum Arzt","ich zum Arzt gehe"], a: 1,
    expl: "Po vedlejší větě (wenn...) jde v hlavní větě sloveso NA 1. MÍSTO (inverze).", cz: "Když mám bolesti, jdu k lékaři." },
  { v: "A", n: 18, q: "Legst du heute die Prüfung ______ ?", opts: ["ab","aus","bei"], a: 0,
    expl: "ablegen = složit/vykonat (zkoušku). Odlučitelná předpona ab jde na konec.", cz: "Skládáš dnes zkoušku?" },
  { v: "A", n: 19, q: "Wir tragen gern die ______ Sommerhose.", opts: ["leicht","leichtere","leichter"], a: 1,
    expl: "Po „die“ (fem. akuzativ) potřebuje přídavné jméno koncovku -e. „leichtere“ = komparativ + -e.", cz: "Rádi nosíme lehčí letní kalhoty." },
  { v: "A", n: 20, q: "Das Mädchen ist ______ als die Modelle.", opts: ["am schönsten","schön","schöner"], a: 2,
    expl: "Po „als“ je vždy KOMPARATIV: schöner als.", cz: "Ta dívka je hezčí než ty modelky." },
  { v: "A", n: 21, q: "Das ist mein ______ Student.", opts: ["bester","beste","besten"], a: 0,
    expl: "mein + maskulinum nominativ → koncovka -er: mein bester Student.", cz: "To je můj nejlepší student." },
  { v: "A", n: 22, q: "Michael ist in Deutsch so gut ______ ich.", opts: ["0","als","wie"], a: 2,
    expl: "Konstrukce „so ... wie“ (stejně jako). „als“ se pojí s komparativem.", cz: "Michael je v němčině tak dobrý jako já." },
  { v: "A", n: 23, q: "Sie läuft ______ von allen.", opts: ["schnell","am schnellsten","schnellste"], a: 1,
    expl: "„von allen“ = superlativ příslovce: am schnellsten.", cz: "Ona běhá ze všech nejrychleji." },
  { v: "A", n: 24, q: "Mit diesem ______ Mantel ist Anette sehr elegant.", opts: ["weiß","weißen","weißer"], a: 1,
    expl: "diesem = dativ (člen-slovo). Po der-slově v dativu vždy -en: weißen.", cz: "V tomhle bílém kabátě je Anette velmi elegantní." },
  { v: "A", n: 25, q: "Diese ______ Blusen gefallen mir.", opts: ["blau","blaue","blauen"], a: 2,
    expl: "diese + PLURÁL (der-slovo) → koncovka -en: blauen Blusen.", cz: "Tyhle modré halenky se mi líbí." },
  { v: "A", n: 26, q: "Ich kaufe mir etwas nach ______ Mode.", opts: ["der neuesten","den neuesten","die neueste"], a: 0,
    expl: "Předložka nach + DATIV. Mode je feminin → der neuesten Mode.", cz: "Koupím si něco podle nejnovější módy." },
  { v: "A", n: 27, q: "Das ist ein ______ Buch von Patrik Hartl.", opts: ["interessant","interessanten","interessantes"], a: 2,
    expl: "ein + neutrum nominativ → -es: ein interessantes Buch.", cz: "To je zajímavá kniha od Patrika Hartla." },
  { v: "A", n: 28, q: "Er fragt, ______.", opts: ["wie lange wir müssen arbeiten","wie lange wir arbeiten müssen","wie lange müssen wir arbeiten"], a: 1,
    expl: "Nepřímá otázka = vedlejší věta. Sloveso NA KONEC; modální až úplně poslední: wir arbeiten müssen.", cz: "Ptá se, jak dlouho musíme pracovat." },
  { v: "A", n: 29, q: "Hast du hier ein Heft? Ja, ich habe ______.", opts: ["eins","ein","einen"], a: 0,
    expl: "Zástupné zájmeno za ein Heft (neutrum, akuzativ) = eins.", cz: "Máš tu sešit? Ano, mám jeden." },
  { v: "A", n: 30, q: "Ja, ich komme zu dir sehr ______.", opts: ["froh","gern","lieber"], a: 1,
    expl: "„gern kommen“ = rád přicházet. Ustálená vazba.", cz: "Ano, k tobě přijdu velmi rád." },

  // ---------- VARIANTA B ----------
  { v: "B", n: 1, q: "Morgen haben wir ______ Mai.", opts: ["das fünfundzwanzigste","fünfundzwanzigsten","den fünfundzwanzigsten"], a: 2,
    expl: "„Haben wir den 25. Mai“ — akuzativ s členem den.", cz: "Zítra máme 25. května." },
  { v: "B", n: 2, q: "Ich gebe das Lehrbuch ______.", opts: ["das fleißige Mädchen","den fleißigen Mädchen","dem fleißigen Mädchen"], a: 2,
    expl: "geben + DATIV pro příjemce. das Mädchen = neutrum → dem fleißigen Mädchen.", cz: "Dávám učebnici té pilné dívce." },
  { v: "B", n: 3, q: "Sie essen nicht ______.", opts: ["gegrillten Fisch","gegrillt Fisch","gegrilltes Fisch"], a: 0,
    expl: "Bez členu = silné skloňování. Maskulinum akuzativ → -en: gegrillten Fisch.", cz: "Nejedí grilovanou rybu." },
  { v: "B", n: 4, q: "Thomas bekommt ______.", opts: ["ein japanischer Fernseher","einen japanischen Fernseher","einem japanischen Fernseher"], a: 1,
    expl: "bekommen + AKUZATIV. Maskulinum akuzativ s ein → einen + -en: einen japanischen Fernseher.", cz: "Thomas dostane japonskou televizi." },
  { v: "B", n: 5, q: "Wohin geben Sie das Heft? ______.", opts: ["In den Tisch","In dem Tisch","In der Tisch"], a: 0,
    expl: "Wohin? → AKUZATIV. Tisch = maskulinum → in den Tisch.", cz: "Kam dáváte sešit? Do stolu." },
  { v: "B", n: 6, q: "Ich will schon im Mai ______.", opts: ["alle Prüfungen ablegen","legen alle Prüfungen ab","ablegen alle Prüfungen"], a: 0,
    expl: "Modální will + infinitiv na konci. Odlučitelné „ab“ zůstává u slovesa: ablegen.", cz: "Chci už v květnu složit všechny zkoušky." },
  { v: "B", n: 7, q: "In dieser ______ Hose kannst du im Winter nicht gehen.", opts: ["kurzer","kurze","kurzen"], a: 2,
    expl: "in dieser = DATIV feminin (der-slovo). Po der-slově v dativu → -en: kurzen.", cz: "V těchhle krátkých kalhotách nemůžeš v zimě chodit." },
  { v: "B", n: 8, q: "Die grüne Farbe passt mir nicht. Ich habe keine ______ Kleider.", opts: ["grüne","grünen","grün"], a: 1,
    expl: "keine + PLURÁL (ein-slovo) → -en: keine grünen Kleider.", cz: "Zelená barva mi nesluší. Nemám žádné zelené šaty." },
  { v: "B", n: 9, q: "Hier wartet ein ______ Mann.", opts: ["junger","jung","junge"], a: 0,
    expl: "ein + maskulinum nominativ → přídavné jméno má -er: ein junger Mann.", cz: "Tady čeká (jeden) mladý muž." },
  { v: "B", n: 10, q: "Weisst du das ______ meinem Vati?", opts: ["zu","aus","von"], a: 2,
    expl: "„wissen von + dativ“ (vědět o kom/čem). meinem Vati = dativ.", cz: "Víš to od mého taty?" },
  { v: "B", n: 11, q: "Wir wissen nicht, ______.", opts: ["warum sie nicht fahren wollen","warum sie wollen nicht fahren","warum wollen sie nicht fahren"], a: 0,
    expl: "Po „warum“ (vedlejší věta) jde sloveso NA KONEC; modální úplně poslední: sie nicht fahren wollen.", cz: "Nevíme, proč nechtějí jet." },
  { v: "B", n: 12, q: "Monika und Peter bestellen ______.", opts: ["guten Kaffees","guten Kaffee","guter Kaffee"], a: 1,
    expl: "bestellen + AKUZATIV, bez členu = silné skloňování. Maskulinum akuzativ → -en: guten Kaffee.", cz: "Monika a Peter si objednávají dobrou kávu." },
  { v: "B", n: 13, q: "Interessierst du ______ für moderne Kunst?", opts: ["sich","dir","dich"], a: 2,
    expl: "sich interessieren für + AKUZATIV. 2. os. sg. reflexivum akuzativ = dich.", cz: "Zajímáš se o moderní umění?" },
  { v: "B", n: 14, q: "Warum ______ ihr nichts zum Abendbrot?", opts: ["nimmst","nehmt","nimmt"], a: 1,
    expl: "ihr-tvar nehmen: ihr nehmt (bez e→i změny, přehláska mizí).", cz: "Proč si nedáte nic k večeři?" },
  { v: "B", n: 15, q: "Andreas, ______ mit!", opts: ["fährt","fahrt","fahr"], a: 2,
    expl: "Imperativ du od fahren — přehláska MIZÍ: Fahr mit!", cz: "Andreasi, jeď s námi!" },
  { v: "B", n: 16, q: "______ du mir bitte auch ein Stück Torte?", opts: ["Geben","Gibst","Gebt"], a: 1,
    expl: "du-tvar geben: e→i → du gibst.", cz: "Dáš mi prosím taky kousek dortu?" },
  { v: "B", n: 17, q: "Wir wollen Ihnen ______.", opts: ["bieten Tee an","anbieten Tee","Tee anbieten"], a: 2,
    expl: "Modální wollen + infinitiv NA KONCI. Odlučitelná předpona zůstává u slovesa: anbieten.", cz: "Chceme Vám nabídnout čaj." },
  { v: "B", n: 18, q: "Ist hier noch ______ Stuhl?", opts: ["ein","einer","einen"], a: 0,
    expl: "„ist“ = nominativ. Stuhl = maskulinum nominativ → ein Stuhl.", cz: "Je tu ještě (nějaká) židle?" },
  { v: "B", n: 19, q: "Ich möchte wissen, ob ______.", opts: ["ich muss zur Kontrolle kommen","ich zur Kontrolle kommen muss","muss ich zur Kontrolle kommen"], a: 1,
    expl: "Po „ob“ sloveso NA KONEC; modální muss až úplně poslední.", cz: "Rád bych věděl, jestli musím přijít na kontrolu." },
  { v: "B", n: 20, q: "Wenn Andrea in Prag ist, ______.", opts: ["besucht sie mich immer","sie mich immer besucht","sie besucht mich immer"], a: 0,
    expl: "Po vedlejší větě (wenn...) v hlavní větě INVERZE: sloveso na 1. místě — besucht sie.", cz: "Když je Andrea v Praze, vždycky mě navštíví." },
  { v: "B", n: 21, q: "______ Student legt die Prüfung ab.", opts: ["Jede","Jeder","Jedes"], a: 1,
    expl: "Student = maskulinum, nominativ → jeder Student.", cz: "Každý student skládá zkoušku." },
  { v: "B", n: 22, q: "Der Ober bietet uns noch Bier ______.", opts: ["ein","an","aus"], a: 1,
    expl: "anbieten = nabízet. Odlučitelná předpona an na konci: bietet ... an.", cz: "Číšník nám ještě nabízí pivo." },
  { v: "B", n: 23, q: "Das ist der ______ Bruder von Marianne.", opts: ["alt","älter","ältere"], a: 2,
    expl: "der + maskulinum nominativ → koncovka -e. ältere = komparativ + -e.", cz: "To je starší bratr Marianne." },
  { v: "B", n: 24, q: "Meine Freundin ist jünger ______ ich.", opts: ["wie","als","0"], a: 1,
    expl: "Po KOMPARATIVU vždy „als“.", cz: "Moje kamarádka je mladší než já." },
  { v: "B", n: 25, q: "Das ist mein ______ Pullover.", opts: ["warm","wärmster","wärmste"], a: 1,
    expl: "mein + maskulinum nominativ superlativ → -er: mein wärmster Pullover.", cz: "To je můj nejteplejší svetr." },
  { v: "B", n: 26, q: "Unser Auto fährt ______ von allen.", opts: ["am schnellsten","schneller","schnell"], a: 0,
    expl: "„von allen“ = SUPERLATIV příslovce: am schnellsten.", cz: "Naše auto jede ze všech nejrychleji." },
  { v: "B", n: 27, q: "Ich lese gern etwas aus ______ Buch von Haruki Murakami.", opts: ["das beste","dem besten","besten"], a: 1,
    expl: "aus + DATIV. Neutrum das Buch → dem besten Buch.", cz: "Rád čtu něco z nejlepší knihy od Harukiho Murakamiho." },
  { v: "B", n: 28, q: "Frau Fischer kommt immer ______ von uns.", opts: ["spät","späteste","am spätesten"], a: 2,
    expl: "Superlativ příslovce: am spätesten.", cz: "Paní Fischerová z nás přichází vždycky nejpozději." },
  { v: "B", n: 29, q: "Hast du einen Freund in Ostrava? Ja, ich habe ______.", opts: ["einer","ein","einen"], a: 2,
    expl: "Zástupné zájmeno za einen Freund (masc. akuzativ) = einen.", cz: "Máš přítele v Ostravě? Ano, mám (jednoho)." },
  { v: "B", n: 30, q: "Die Bluse ______ Ihnen sehr gut.", opts: ["kostet","steht","versteht"], a: 1,
    expl: "jdm. stehen = slušet komu (+ DATIV). „Die Bluse steht Ihnen gut.“", cz: "Ta halenka Vám velmi sluší." },

  // ---------- VARIANTA B (ZS 2023/2024) — KOMPLETNÍ TEST ----------
  { v: "B23", n: 1, q: "______ du in Prag?", opts: ["studieren","studierst","studiert"], a: 1,
    expl: "du-tvar pravidelného slovesa studieren: du studierst.", cz: "Studuješ v Praze?" },
  { v: "B23", n: 2, q: "Sie kommt spät ______.", opts: ["zu Hause","Haus","nach Hause"], a: 2,
    expl: "„nach Hause“ = DOMŮ (směr, kam). „zu Hause“ = DOMA (kde).", cz: "Přichází domů pozdě." },
  { v: "B23", n: 3, q: "Thomas spielt sehr gut ______.", opts: ["ein Tennis","Tennis","das Tennis"], a: 1,
    expl: "Sportovní hry v němčině stojí BEZ členu: spielt Tennis / Fußball / Schach.", cz: "Thomas hraje velmi dobře tenis." },
  { v: "B23", n: 4, q: "Monika kommt ______ Berlin.", opts: ["bei","aus","in"], a: 1,
    expl: "„kommen aus“ + DATIV = přicházet/pocházet odkud: aus Berlin.", cz: "Monika je z Berlína." },
  { v: "B23", n: 5, q: "Eva, das ist ______ Mutter.", opts: ["meine","meiner","mein"], a: 0,
    expl: "Mutter = feminin, nominativ → přivl. zájmeno má -e: meine Mutter.", cz: "Evo, to je moje matka." },
  { v: "B23", n: 6, q: "Gehst du auch ______ Metro?", opts: ["zur","in der","auf der"], a: 0,
    expl: "„gehen zu + DATIV“ = jít k/do (směr). zur = zu der (feminin).", cz: "Jdeš taky k metru?" },
  { v: "B23", n: 7, q: "______ ihr zufrieden?", opts: ["Seid","Ist","Sind"], a: 0,
    expl: "2. os. pl. slovesa sein: ihr seid.", cz: "Jste spokojeni?" },
  { v: "B23", n: 8, q: "Ich nehme noch eine Tasse ______.", opts: ["des Kaffees","der Kaffee","Kaffee"], a: 2,
    expl: "Po udání množství/nádoby stojí substantivum BEZ členu: eine Tasse Kaffee.", cz: "Dám si ještě (jeden) šálek kávy." },
  { v: "B23", n: 9, q: "Sie kennen ______ gut.", opts: ["ihm","ihn","er"], a: 1,
    expl: "kennen + AKUZATIV. 3. os. sg. maskulinum akuzativ = ihn.", cz: "Vy ho dobře znáte." },
  { v: "B23", n: 10, q: "Meine Schwester Simona wohnt ______ in Zábřeh.", opts: ["nicht","nein","kein"], a: 0,
    expl: "„nicht“ popírá sloveso (nebydlí v Zábřehu). „kein“ by popíralo substantivum, „nein“ je odpověď.", cz: "Moje sestra Simona nebydlí v Zábřehu." },
  { v: "B23", n: 11, q: "Ich habe ______ Freund in Telč.", opts: ["keinen","keiner","kein"], a: 0,
    expl: "haben + AKUZATIV. Freund = maskulinum akuzativ → keinen Freund.", cz: "V Telči nemám (žádného) přítele." },
  { v: "B23", n: 12, q: "Andreas hat heute ______ Zeit.", opts: ["nein","keine","nicht"], a: 1,
    expl: "Zeit = feminin akuzativ → keine Zeit. „kein-“ popírá substantivum s neurčitým významem.", cz: "Andreas dnes nemá čas." },
  { v: "B23", n: 13, q: "Günter ist sehr ______.", opts: ["neugierig","neugierigen","neugierige"], a: 0,
    expl: "Predikativní přídavné jméno (po slovese sein) je BEZ KONCOVKY: ist neugierig.", cz: "Günter je velmi zvědavý." },
  { v: "B23", n: 14, q: "______ ist 25 Jahre alt.", opts: ["Sein","Ihm","Er"], a: 2,
    expl: "Podmět věty = NOMINATIV: er (on). „Sein“ je infinitiv, „Ihm“ je dativ.", cz: "Je mu 25 let." },
  { v: "B23", n: 15, q: "______ Buch ist das?", opts: ["Wessen","Was","Wer"], a: 0,
    expl: "„Wessen?“ = Čí? (tázací zájmeno v genitivu, nemění se s rodem).", cz: "Čí je to kniha?" },
  { v: "B23", n: 16, q: "Mein Bruder arbeitet ______ Lehrer.", opts: ["0","wie","als"], a: 2,
    expl: "„arbeiten als“ = pracovat jako (povolání). „wie“ je pro přirovnání (jako co/kdo).", cz: "Můj bratr pracuje jako učitel." },
  { v: "B23", n: 17, q: "Unsere Freundin Elisabeth ______ drei ______.", opts: ["habt - Kind","hat - Kinder","hat - Kind"], a: 1,
    expl: "Elisabeth (sie) hat + plurál: drei Kinder (3 děti, plurál od Kind).", cz: "Naše kamarádka Elisabeth má tři děti." },
  { v: "B23", n: 18, q: "Warum machst du keine Aufgabe? ______ die Aufgabe!", opts: ["Machst du","Mach","Macht"], a: 1,
    expl: "Imperativ du od machen: Mach! (bez -st, bez zájmena). Macht = imperativ ihr.", cz: "Proč neděláš úkol? Udělej (ten) úkol!" },
  { v: "B23", n: 19, q: "Sagt ihr es nicht? ______ es doch!", opts: ["Sagt","Sag","Sagt ihr"], a: 0,
    expl: "Otázka směřuje na ihr → imperativ pro ihr = tvar přít. času BEZ zájmena: Sagt!", cz: "Vy to neřeknete? Tak to (přece) řekněte!" },
  { v: "B23", n: 20, q: "Warum besuchst du ______ nicht?", opts: ["mich","ich","mein"], a: 0,
    expl: "besuchen + AKUZATIV. 1. os. sg. akuzativ = mich.", cz: "Proč mě nenavštěvuješ?" },
  { v: "B23", n: 21, q: "Wir kommen ______ Freitag.", opts: ["im","am","um"], a: 1,
    expl: "Dny v týdnu vždy s „am“: am Freitag, am Montag. „im“ = měsíce/roční období, „um“ = hodiny.", cz: "Přijdeme v pátek." },
  { v: "B23", n: 22, q: "Hat Martin etwas gegen ______?", opts: ["du","dich","dir"], a: 1,
    expl: "gegen + AKUZATIV. 2. os. sg. akuzativ = dich.", cz: "Má Martin něco proti tobě?" },
  { v: "B23", n: 23, q: "Paul wohnt ______ in München.", opts: ["nicht","nein","kein"], a: 0,
    expl: "„nicht“ popírá celé sloveso (nebydlí v Mnichově). „kein“ by popíralo substantivum.", cz: "Paul nebydlí v Mnichově." },
  { v: "B23", n: 24, q: "Sie ______ heute nicht kommen.", opts: ["könnt","kann","kennt"], a: 1,
    expl: "sie (ona) + können v 3. os. sg. = kann. „kennen“ znamená znát (špatný význam).", cz: "Ona dnes nemůže přijít." },
  { v: "B23", n: 25, q: "Frau Niedermayer ist hier mit ______ Freund.", opts: ["ihrem","ihre","ihrer"], a: 0,
    expl: "mit + DATIV. Freund = maskulinum dativ → ihrem Freund (s jejím přítelem).", cz: "Paní Niedermayerová je tu se svým přítelem." },
  { v: "B23", n: 26, q: "Wir haben heute drei ______ Deutsch.", opts: ["Zeit","Uhr","Stunden"], a: 2,
    expl: "„drei Stunden Deutsch“ = tři vyučovací hodiny němčiny. Uhr = hodiny (přístroj/čas).", cz: "Dnes máme tři hodiny němčiny." },
  { v: "B23", n: 27, q: "Wie oft ______ Sie Englisch?", opts: ["sollen","müssen","haben"], a: 2,
    expl: "„Wie oft haben Sie [předmět]?“ = Jak často máte [angličtinu] (ve škole/v rozvrhu)?", cz: "Jak často máte angličtinu?" },
  { v: "B23", n: 28, q: "Jetzt ist ______ halb zwölf.", opts: ["man","0","es"], a: 1,
    expl: "Po „Jetzt ist“ následuje přímo čas, další podmět se NEVKLÁDÁ: Jetzt ist halb zwölf.", cz: "Teď je půl dvanácté." },
  { v: "B23", n: 29, q: "Französisch ist für ______ zu schwer.", opts: ["sie","ihr","ihrer"], a: 0,
    expl: "für + AKUZATIV. „sie“ = ji/je (3. os. sg. fem. / 3. os. pl. akuzativ).", cz: "Francouzština je pro ni příliš těžká." },
  { v: "B23", n: 30, q: "Sind das ______ Lehrerin?", opts: ["Lehrbuch unser","Lehrbücher unserer","Lehrbücher unsere"], a: 1,
    expl: "„Lehrbücher unserer Lehrerin“ = učebnice naší učitelky (plurál + GENITIV feminin: unserer).", cz: "To jsou učebnice naší učitelky?" },

  // ---------- VARIANTA A (ZS 2023/2024) — otázky 1-30 ----------
  { v: "A23", n: 1, q: "Kommt Andreas ______ Dresden?", opts: ["aus","in","bei"], a: 0,
    expl: "kommen aus + DATIV = pocházet/přicházet z. „Kommt Andreas aus Dresden?“ = Pochází Andreas z Drážďan?", cz: "Pochází Andreas z Drážďan?" },
  { v: "A23", n: 2, q: "Simone, das ist ______ Freund Michael.", opts: ["meiner","meine","mein"], a: 2,
    expl: "Freund = maskulinum, NOMINATIV (přísudek po „ist“). Přivlastňovací zájmeno mužského rodu v nom. → mein Freund.", cz: "Simone, to je můj přítel Michael." },
  { v: "A23", n: 3, q: "Wo ______ Herr Wagner?", opts: ["wohnst","wohnt","wohnen"], a: 1,
    expl: "Herr Wagner = on (3. os. sg.) → wohnt. „wohnst“ je 2. os. sg. (du), „wohnen“ je infinitiv / 1.+3. os. pl.", cz: "Kde bydlí pan Wagner?" },
  { v: "A23", n: 4, q: "Ich gehe ______ Strassenbahn.", opts: ["in der","auf der","zur"], a: 2,
    expl: "„zu“ + DATIV = k/do (cíl pohybu). zu + der → zur. „Ich gehe zur Straßenbahn“ = jdu k tramvaji (na zastávku).", cz: "Jdu k tramvaji." },
  { v: "A23", n: 5, q: "Monika kommt oft spät ______.", opts: ["nach Hause","Haus","zu Hause"], a: 0,
    expl: "POHYB domů = nach Hause. STAV doma = zu Hause. „kommen“ = pohyb → nach Hause.", cz: "Monika často přichází domů pozdě." },
  { v: "A23", n: 6, q: "Spielt Peter auch ______?", opts: ["Hockey","das Hockey","ein Hockey"], a: 0,
    expl: "Sporty se v němčině používají BEZ ČLENU: Hockey/Tennis/Fußball spielen.", cz: "Hraje Peter taky hokej?" },
  { v: "A23", n: 7, q: "Ich kenne ______ nicht gut.", opts: ["er","ihn","ihm"], a: 1,
    expl: "kennen + AKUZATIV. 3. os. sg. mask. akuz. = ihn (jeho). „er“ = nominativ, „ihm“ = dativ.", cz: "Neznám ho dobře." },
  { v: "A23", n: 8, q: "______ ihr krank?", opts: ["Ist","Sind","Seid"], a: 2,
    expl: "ihr (vy, 2. os. pl.) → seid. „Ist“ = on/ona/ono, „sind“ = wir/sie/Sie.", cz: "Jste nemocní?" },
  { v: "A23", n: 9, q: "Wir nehmen noch eine Tasse ______.", opts: ["der Tee","Tee","des Tees"], a: 1,
    expl: "Po jednotce množství („eine Tasse / ein Glas / ein Kilo…“) následuje materiál v nominativu/akuzativu BEZ ČLENU: eine Tasse Tee, ein Glas Wasser.", cz: "Dáme si ještě (jeden) šálek čaje." },
  // (otázka 10 — „Ist Ursula…?“ — možnosti chybí v podkladu, doplníme až bude k dispozici)

  { v: "A23", n: 11, q: "______ ist 42 Jahre alt.", opts: ["Er","Sein","Ihm"], a: 0,
    expl: "Podmět věty = NOMINATIV: er (on).", cz: "Je mu 42 let." },
  { v: "A23", n: 12, q: "______ Lampe ist das?", opts: ["Wer","Was","Wessen"], a: 2,
    expl: "„Wessen Lampe?“ = Čí lampa? (tázací zájmeno v genitivu).", cz: "Čí je to lampa?" },
  { v: "A23", n: 13, q: "Eva und Thomas wohnen ______ in Olomouc.", opts: ["nein","nicht","kein"], a: 1,
    expl: "„nicht“ popírá sloveso (nebydlí v Olomouci).", cz: "Eva a Thomas nebydlí v Olomouci." },
  { v: "A23", n: 14, q: "Sabine hat doch ______ Bruder.", opts: ["kein","keiner","keinen"], a: 2,
    expl: "haben + AKUZATIV. Bruder = maskulinum akuzativ → keinen Bruder.", cz: "Sabine přece nemá (žádného) bratra." },
  { v: "A23", n: 15, q: "Wir haben heute ______ Zeit.", opts: ["keine","nicht","nein"], a: 0,
    expl: "Zeit = feminin akuzativ → keine Zeit.", cz: "Dnes nemáme čas." },
  { v: "A23", n: 16, q: "Meine Schwester ______ zwei ______.", opts: ["hat - Kinder","habt - Kinder","hat - Kind"], a: 0,
    expl: "sie (Schwester) hat + plurál: zwei Kinder (2 děti).", cz: "Moje sestra má dvě děti." },
  { v: "A23", n: 17, q: "Warum besuchen Sie ______ nicht?", opts: ["ich","mich","mein"], a: 1,
    expl: "besuchen + AKUZATIV. 1. os. sg. akuzativ = mich.", cz: "Proč mě nenavštívíte?" },
  { v: "A23", n: 18, q: "Mein Vater arbeitet ______ Techniker.", opts: ["wie","als","0"], a: 1,
    expl: "„arbeiten als“ = pracovat jako (povolání).", cz: "Můj otec pracuje jako technik." },
  { v: "A23", n: 19, q: "Warum schreibst du das nicht? ______ das!", opts: ["Schreib","Schreibst du","Schreibst"], a: 0,
    expl: "Imperativ du od schreiben: Schreib! (bez -st).", cz: "Proč to nenapíšeš? Napiš to!" },
  { v: "A23", n: 20, q: "Warum besucht ihr die Galerie nicht? ______ es bald!", opts: ["Besucht ihr","Besuche","Besucht"], a: 2,
    expl: "Imperativ ihr = tvar přít. času bez zájmena: Besucht es bald!", cz: "Proč nenavštívíte galerii? Brzy ji navštivte!" },
  { v: "A23", n: 21, q: "Sie gehen ohne ______.", opts: ["mich","mir","ich"], a: 0,
    expl: "ohne + AKUZATIV. 1. os. sg. akuzativ = mich.", cz: "Jdou beze mě." },
  { v: "A23", n: 22, q: "Frau Fischer kommt mit ______ Mann.", opts: ["ihre","ihrer","ihrem"], a: 2,
    expl: "mit + DATIV. Mann = maskulinum dativ → ihrem Mann.", cz: "Paní Fischerová přichází se svým manželem." },
  { v: "A23", n: 23, q: "Wir kommen nach Jihlava ______ Mittwoch.", opts: ["um","im","am"], a: 2,
    expl: "Dny v týdnu vždy s „am“: am Mittwoch. („um“ je pro hodiny, „im“ pro měsíce.)", cz: "Do Jihlavy přijedeme ve středu." },
  { v: "A23", n: 24, q: "Ich habe heute zwei ______ Italienisch.", opts: ["Stunden","Zeit","Uhr"], a: 0,
    expl: "„zwei Stunden Italienisch“ = dvě vyučovací hodiny italštiny.", cz: "Dnes mám dvě hodiny italštiny." },
  { v: "A23", n: 25, q: "Jetzt ist ______ Viertel sieben.", opts: ["0","es","man"], a: 0,
    expl: "Po „Jetzt ist“ následuje přímo čas, další podmět se NEVKLÁDÁ.", cz: "Teď je čtvrt na sedm." },
  { v: "A23", n: 26, q: "Er ______ heute auch kommen.", opts: ["kann","könnt","kennt"], a: 0,
    expl: "er + können v 3. os. sg. = kann. „könnt“ je ihr-tvar, „kennt“ = zná (špatný význam).", cz: "Dnes může přijít taky." },
  { v: "A23", n: 27, q: "Das Kino beginnt ______ 19 Uhr.", opts: ["am","im","um"], a: 2,
    expl: "Přesné hodiny vždy s „um“: um 19 Uhr, um 8 Uhr.", cz: "Kino začíná v 19 hodin." },
  { v: "A23", n: 28, q: "Wie oft ______ Sie Deutsch?", opts: ["müssen","haben","sollen"], a: 1,
    expl: "„Wie oft haben Sie [předmět]?“ = Jak často máte [němčinu] (v rozvrhu)?", cz: "Jak často máte němčinu?" },
  { v: "A23", n: 29, q: "Spanisch ist für ______ nicht schwer.", opts: ["ihrer","ihr","sie"], a: 2,
    expl: "für + AKUZATIV. „sie“ = ji/je (3. os. akuzativ).", cz: "Španělština pro ni není těžká." },
  { v: "A23", n: 30, q: "Wo sind ______ Freundin?", opts: ["Kinder unserer","Kind unser","Kinder unser"], a: 0,
    expl: "„Kinder unserer Freundin“ = děti naší kamarádky (plurál + GENITIV feminin: unserer).", cz: "Kde jsou děti naší kamarádky?" }
];
