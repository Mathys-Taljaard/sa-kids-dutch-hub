// ============================================================
// Dutch Practice Tool — Content Data
// Three levels: 8-9 jaar, 10-11 jaar, 12-13 jaar
// ============================================================

const LEVEL_INFO = {
  age8_9:   { label: "8–9 jaar",  emoji: "🌱", desc: "Eenvoudige verhalen en basiswoorden" },
  age10_11: { label: "10–11 jaar", emoji: "🌿", desc: "Langere teksten en uitdagendere woorden" },
  age12_13: { label: "12–13 jaar", emoji: "🌳", desc: "Complexe teksten en woordenschat" }
};

const CONTENT = {

  // ──────────────────────────────────────────────
  // BEGRIJPEND LEZEN — Reading Comprehension
  // ──────────────────────────────────────────────
  lezen: {
    age8_9: [
      {
        id: "l5-1",
        title: "De Kat van Oma",
        text: `Oma heeft een dikke rode kat. De kat heet Moppie. Moppie slaapt het liefst op de bank. Elke ochtend geeft oma Moppie een bakje melk. Dan spint Moppie heel hard. Soms gaat Moppie naar buiten. Dan jaagt hij op vogels in de tuin. Maar hij vangt ze nooit. Oma zegt: "Moppie is te dik om vogels te vangen!" Als het avond is, kruipt Moppie bij oma op schoot. Dan kijken ze samen televisie.`,
        questions: [
          { q: "Hoe heet de kat van oma?", options: ["Poekie", "Moppie", "Snoepje", "Tijger"], correct: 1, explanation: "In de tekst staat: 'De kat heet Moppie.'" },
          { q: "Wat doet Moppie het liefst?", options: ["Vogels vangen", "Op de bank slapen", "Buiten spelen", "Melk drinken"], correct: 1, explanation: "Er staat: 'Moppie slaapt het liefst op de bank.'" },
          { q: "Waarom vangt Moppie geen vogels?", options: ["Hij is te snel", "Hij is te dik", "Hij is te klein", "Hij wil niet"], correct: 1, explanation: "Oma zegt dat Moppie te dik is om vogels te vangen." },
          { q: "Wat doen oma en Moppie 's avonds?", options: ["Ze gaan wandelen", "Ze eten samen", "Ze kijken televisie", "Ze gaan slapen"], correct: 2, explanation: "In de tekst staat dat ze 's avonds samen televisie kijken." }
        ]
      },
      {
        id: "l5-2",
        title: "Het Schoolreisje",
        text: `Vandaag gaat groep 5 op schoolreisje. Ze gaan naar de dierentuin. Alle kinderen zijn vroeg op school. Ze zijn heel blij! De bus staat al klaar. Juf Lisa telt alle kinderen. "We zijn compleet!" zegt ze. In de bus zingt iedereen liedjes. Bij de dierentuin zien ze eerst de apen. De apen zijn heel grappig. Daarna gaan ze naar de leeuwen. Tim is een beetje bang. "Maak je niet druk," zegt juf Lisa. "Ze zitten achter glas." Na de leeuwen eten ze hun boterhammen op het gras. Het is de leukste dag van het jaar!`,
        questions: [
          { q: "Waar gaat groep 5 naartoe?", options: ["Het strand", "De dierentuin", "Het bos", "Het zwembad"], correct: 1, explanation: "Er staat: 'Ze gaan naar de dierentuin.'" },
          { q: "Wie telt de kinderen?", options: ["De directeur", "Meester Jan", "Juf Lisa", "De buschauffeur"], correct: 2, explanation: "In de tekst staat: 'Juf Lisa telt alle kinderen.'" },
          { q: "Welke dieren zien ze het eerst?", options: ["Leeuwen", "Olifanten", "Apen", "Giraffen"], correct: 2, explanation: "Er staat: 'Bij de dierentuin zien ze eerst de apen.'" },
          { q: "Waarom is Tim bang?", options: ["Hij is verdwaald", "Door de leeuwen", "Het is donker", "De bus gaat te snel"], correct: 1, explanation: "Tim is een beetje bang bij de leeuwen." }
        ]
      },
      {
        id: "l5-3",
        title: "Regen op het Plein",
        text: `Het regent heel hard. De kinderen staan onder het afdak op het schoolplein. Ze mogen niet buiten spelen. Sanne kijkt naar de plassen. "Ik wil zo graag in de plassen springen!" zegt ze. Maar juf zegt: "Je wordt helemaal nat." Na een tijdje stopt de regen. De zon komt door de wolken. Er verschijnt een regenboog aan de hemel! Alle kinderen rennen naar buiten. Sanne springt meteen in de grootste plas. Haar schoenen zijn helemaal nat. Maar ze lacht heel hard.`,
        questions: [
          { q: "Waarom mogen de kinderen niet buiten spelen?", options: ["Het is te koud", "Het regent hard", "Het is pauze afgelopen", "De juf is ziek"], correct: 1, explanation: "Er staat: 'Het regent heel hard' en ze mogen niet buiten spelen." },
          { q: "Wat wil Sanne graag doen?", options: ["Naar huis gaan", "Tekenen", "In de plassen springen", "Binnen spelen"], correct: 2, explanation: "Sanne zegt: 'Ik wil zo graag in de plassen springen!'" },
          { q: "Wat verschijnt er aan de hemel?", options: ["Een vliegtuig", "Een regenboog", "Een vogel", "De maan"], correct: 1, explanation: "Er staat: 'Er verschijnt een regenboog aan de hemel!'" },
          { q: "Hoe voelt Sanne zich aan het einde?", options: ["Boos", "Verdrietig", "Bang", "Blij"], correct: 3, explanation: "Ze lacht heel hard, dus ze is blij!" }
        ]
      },
      {
        id: "l5-4",
        title: "De Nieuwe Hond",
        text: `Luuk krijgt een hond voor zijn verjaardag! De hond is klein en bruin. Hij heeft lange oren. Luuk noemt hem Rakker. Rakker rent door het hele huis. Hij bijt in de schoenen van papa. Papa vindt dat niet leuk. Mama zegt: "Luuk, jij moet Rakker opvoeden." Luuk gaat elke dag met Rakker oefenen. Na een paar weken luistert Rakker goed. Hij kan zitten en pootjes geven. Papa is nu ook trots op Rakker.`,
        questions: [
          { q: "Wanneer krijgt Luuk de hond?", options: ["Met Kerstmis", "Op zijn verjaardag", "Na school", "In de vakantie"], correct: 1, explanation: "Luuk krijgt de hond voor zijn verjaardag." },
          { q: "Hoe ziet Rakker eruit?", options: ["Groot en wit", "Klein en bruin", "Klein en zwart", "Groot en bruin"], correct: 1, explanation: "Er staat: 'De hond is klein en bruin.'" },
          { q: "Waarom is papa niet blij?", options: ["Rakker blaft hard", "Rakker bijt in zijn schoenen", "Rakker is vies", "Rakker rent weg"], correct: 1, explanation: "Rakker bijt in de schoenen van papa." },
          { q: "Wat kan Rakker na een paar weken?", options: ["Rollen", "Zitten en pootjes geven", "Blaffen op commando", "Springen"], correct: 1, explanation: "Er staat: 'Hij kan zitten en pootjes geven.'" }
        ]
      },
      {
        id: "l5-5",
        title: "De Boomhut",
        text: `Eva en haar broer Daan bouwen een boomhut. Papa helpt met de planken. De boomhut komt in de grote eik in de tuin. Eva mag de kleur kiezen. Ze kiest blauw. Daan vindt dat een mooie kleur. Ze verven samen de planken. Na drie dagen is de boomhut klaar. Eva hangt een vlag aan de boomhut. Op de vlag staat: "Eva & Daan." Nu spelen ze elke middag in de boomhut. Soms nemen ze hun knuffels mee naar boven.`,
        questions: [
          { q: "In welke boom komt de boomhut?", options: ["Een den", "Een eik", "Een berk", "Een appelboom"], correct: 1, explanation: "Er staat: 'De boomhut komt in de grote eik.'" },
          { q: "Welke kleur kiest Eva?", options: ["Rood", "Groen", "Blauw", "Geel"], correct: 2, explanation: "Eva kiest blauw voor de boomhut." },
          { q: "Hoe lang duurt het bouwen?", options: ["Eén dag", "Twee dagen", "Drie dagen", "Een week"], correct: 2, explanation: "Er staat: 'Na drie dagen is de boomhut klaar.'" },
          { q: "Wat nemen ze mee naar de boomhut?", options: ["Boeken", "Eten", "Knuffels", "Speelgoed"], correct: 2, explanation: "Soms nemen ze hun knuffels mee naar boven." }
        ]
      }
    ],
    age10_11: [
      {
        id: "l10-1",
        title: "De Uitvinding van de Fiets",
        text: `Wist je dat de fiets niet altijd bestond? De eerste fiets werd in 1817 uitgevonden door Karl von Drais. Maar die fiets had geen pedalen! Je moest met je voeten over de grond duwen om vooruit te komen. Pas in 1860 kwamen de eerste pedalen. De fiets werd steeds populairder, vooral in Nederland. Nederland is nu het land met de meeste fietsen per inwoner ter wereld. Er zijn meer fietsen dan mensen in Nederland! Fietsen is gezond, goed voor het milieu en het is een snelle manier om je te verplaatsen in de stad. Veel Nederlandse kinderen leren al fietsen als ze vier of vijf jaar oud zijn. De fiets is een belangrijk onderdeel van de Nederlandse cultuur geworden.`,
        questions: [
          { q: "Wanneer werd de eerste fiets uitgevonden?", options: ["1750", "1817", "1860", "1900"], correct: 1, explanation: "In de tekst staat: 'De eerste fiets werd in 1817 uitgevonden.'" },
          { q: "Wat was er bijzonder aan de eerste fiets?", options: ["Hij was heel snel", "Hij had geen pedalen", "Hij had geen wielen", "Hij was van hout"], correct: 1, explanation: "De eerste fiets had geen pedalen — je moest met je voeten duwen." },
          { q: "Wat is bijzonder aan Nederland en fietsen?", options: ["Nederland heeft de duurste fietsen", "Er zijn meer fietsen dan mensen", "Fietsen is verboden in steden", "Alleen volwassenen fietsen"], correct: 1, explanation: "Er staat: 'Er zijn meer fietsen dan mensen in Nederland!'" },
          { q: "Wat is de hoofdgedachte van deze tekst?", options: ["Karl von Drais was slim", "Fietsen is gevaarlijk", "De fiets heeft een lange geschiedenis en is belangrijk in Nederland", "Kinderen moeten leren fietsen"], correct: 2, explanation: "De tekst gaat over de geschiedenis van de fiets en het belang ervan in Nederland." }
        ]
      },
      {
        id: "l10-2",
        title: "Het Geheim van de Bijen",
        text: `Bijen zijn ongelooflijk belangrijke dieren. Zonder bijen zouden veel planten en bomen geen vruchten kunnen maken. Dat komt door bestuiving. Als een bij nectar uit een bloem haalt, blijft er stuifmeel aan haar pootjes plakken. Dat stuifmeel brengt ze naar de volgende bloem. Zo kunnen planten zich voortplanten. Een bijenvolk kan uit wel 60.000 bijen bestaan! In elk volk is er maar één koningin. Zij legt alle eitjes. De werkbijen verzamelen voedsel en beschermen het nest. Helaas gaat het niet goed met de bijen. Door bestrijdingsmiddelen en het verdwijnen van bloemen worden er steeds minder bijen. Gelukkig kun je helpen! Plant bloemen in je tuin of op je balkon. Zo geef je bijen voedsel en help je de natuur.`,
        questions: [
          { q: "Waarom zijn bijen zo belangrijk?", options: ["Ze maken honing", "Ze zorgen voor bestuiving", "Ze eten insecten", "Ze zijn mooi"], correct: 1, explanation: "Bijen zijn belangrijk vanwege bestuiving — ze helpen planten vruchten te maken." },
          { q: "Wat is de rol van de koningin?", options: ["Voedsel zoeken", "Het nest beschermen", "Alle eitjes leggen", "Nectar verzamelen"], correct: 2, explanation: "Er staat: 'Zij legt alle eitjes.'" },
          { q: "Waardoor gaat het slecht met de bijen?", options: ["Te veel hitte", "Bestrijdingsmiddelen en minder bloemen", "Te veel bijen", "Ziektes alleen"], correct: 1, explanation: "Door bestrijdingsmiddelen en het verdwijnen van bloemen worden er minder bijen." },
          { q: "Wat kun je zelf doen om bijen te helpen?", options: ["Honing kopen", "Bloemen planten", "Bijen vangen", "Niets"], correct: 1, explanation: "De tekst zegt: 'Plant bloemen in je tuin of op je balkon.'" }
        ]
      },
      {
        id: "l10-3",
        title: "De Watercyclus",
        text: `Water beweegt in een eindeloze kringloop over de aarde. Dit noemen we de watercyclus. De zon verwarmt het water in zeeën, rivieren en meren. Het water verdampt en stijgt als onzichtbare waterdamp omhoog. Hoog in de lucht koelt de waterdamp af en vormt wolken. Dit heet condensatie. Wanneer de druppeltjes in de wolken groot genoeg zijn, vallen ze als regen, hagel of sneeuw naar beneden. Dit noemen we neerslag. Het regenwater stroomt via beken en rivieren terug naar de zee. Een deel zakt de grond in en wordt grondwater. Planten nemen dit water op via hun wortels. Zo begint de cyclus steeds opnieuw. Zonder de watercyclus zou er geen leven op aarde mogelijk zijn.`,
        questions: [
          { q: "Wat is de watercyclus?", options: ["Een soort waterval", "De kringloop van water over de aarde", "Een apparaat dat water zuivert", "Een rivier in Nederland"], correct: 1, explanation: "De watercyclus is de eindeloze kringloop van water over de aarde." },
          { q: "Wat betekent 'condensatie' in de tekst?", options: ["Water wordt warm", "Waterdamp koelt af en vormt wolken", "Water verdwijnt", "Water wordt ijs"], correct: 1, explanation: "Condensatie is wanneer waterdamp afkoelt en wolken vormt." },
          { q: "Wat gebeurt er als druppeltjes groot genoeg zijn?", options: ["Ze verdampen", "Ze vallen als neerslag naar beneden", "Ze worden ijs", "Ze blijven in de lucht"], correct: 1, explanation: "Wanneer de druppeltjes groot genoeg zijn, vallen ze als neerslag (regen, hagel of sneeuw)." },
          { q: "Waar gaat het regenwater naartoe?", options: ["Het verdwijnt", "Via rivieren terug naar de zee en in de grond", "Het blijft op straat", "Het gaat de lucht in"], correct: 1, explanation: "Het water stroomt via rivieren terug naar zee en zakt deels in de grond als grondwater." }
        ]
      },
      {
        id: "l10-4",
        title: "Het Dagboek van Anne Frank",
        text: `Anne Frank was een Joods meisje dat in 1929 werd geboren in Duitsland. Toen ze vier was, verhuisde haar familie naar Amsterdam om te ontsnappen aan de nazi's. In 1942, toen Anne dertien was, moest haar familie onderduiken in een geheim achterhuis. Daar leefden ze met acht mensen in een kleine ruimte. Anne schreef al haar gedachten in een dagboek dat ze Kitty noemde. Ze schreef over haar gevoelens, haar dromen en het dagelijks leven in het achterhuis. In 1944 werd de schuilplaats ontdekt. Anne stierf in 1945 in een concentratiekamp. Na de oorlog werd haar dagboek gevonden en gepubliceerd. Het is vertaald in meer dan 70 talen en wordt over de hele wereld gelezen.`,
        questions: [
          { q: "Waar werd Anne Frank geboren?", options: ["Nederland", "België", "Duitsland", "Frankrijk"], correct: 2, explanation: "Anne Frank werd in 1929 geboren in Duitsland." },
          { q: "Waarom verhuisde de familie naar Amsterdam?", options: ["Voor werk", "Om te ontsnappen aan de nazi's", "Voor school", "Voor het weer"], correct: 1, explanation: "Ze verhuisden naar Amsterdam om te ontsnappen aan de nazi's." },
          { q: "Hoe noemde Anne haar dagboek?", options: ["Lief dagboek", "Beste vriend", "Kitty", "Anne"], correct: 2, explanation: "Anne noemde haar dagboek Kitty." },
          { q: "Waarom is het dagboek van Anne Frank belangrijk?", options: ["Het is heel dik", "Het vertelt over het leven tijdens de oorlog en is wereldwijd gelezen", "Het gaat over Amsterdam", "Het is het oudste boek"], correct: 1, explanation: "Het dagboek geeft een persoonlijk verhaal over de oorlog en is in meer dan 70 talen vertaald." }
        ]
      },
      {
        id: "l10-5",
        title: "Hoe Werkt het Internet?",
        text: `Bijna iedereen gebruikt het internet, maar hoe werkt het eigenlijk? Het internet is een enorm netwerk van computers over de hele wereld die met elkaar verbonden zijn. Wanneer je een website bezoekt, stuurt jouw computer een verzoek via je internetprovider. Dit verzoek reist als kleine pakketjes data door kabels, soms zelfs door kabels op de bodem van de oceaan! De pakketjes komen aan bij een server — een krachtige computer die de website bewaart. De server stuurt de informatie terug naar jouw computer, en de website verschijnt op je scherm. Dit alles gebeurt in minder dan een seconde. Het internet werd oorspronkelijk in de jaren zestig ontwikkeld voor het leger. Niemand had toen kunnen bedenken dat het zo belangrijk zou worden voor ons dagelijks leven.`,
        questions: [
          { q: "Wat is het internet volgens de tekst?", options: ["Een grote computer", "Een netwerk van verbonden computers", "Een programma", "Een website"], correct: 1, explanation: "Het internet is een enorm netwerk van computers die met elkaar verbonden zijn." },
          { q: "Wat is een 'server'?", options: ["Een soort kabel", "Een krachtige computer die websites bewaart", "Een internetprovider", "Een programma op je telefoon"], correct: 1, explanation: "Een server is een krachtige computer die de website bewaart." },
          { q: "Hoe snel verschijnt een website meestal?", options: ["Na een minuut", "Na tien seconden", "In minder dan een seconde", "Na een uur"], correct: 2, explanation: "Dit alles gebeurt in minder dan een seconde." },
          { q: "Waarvoor werd het internet oorspronkelijk ontwikkeld?", options: ["Voor scholen", "Voor winkels", "Voor het leger", "Voor kinderen"], correct: 2, explanation: "Het internet werd oorspronkelijk in de jaren zestig ontwikkeld voor het leger." }
        ]
      }
    ],
    age12_13: [
      {
        id: "l12-1",
        title: "Leven op Mars",
        text: `Wetenschappers dromen ervan om mensen naar Mars te sturen. Mars is de vierde planeet vanaf de zon en staat bekend als de 'rode planeet'. De kleur komt door ijzeroxide (roest) op het oppervlak. Mars is veel kouder dan de aarde: gemiddeld -60 graden Celsius! Er is ook bijna geen zuurstof. Toch zijn er plannen om er mensen naartoe te sturen. Bedrijven zoals SpaceX werken aan raketten die de reis mogelijk moeten maken. De reis naar Mars duurt ongeveer zeven maanden. Op Mars zouden mensen in speciale gebouwen moeten wonen met eigen zuurstof en voedselproductie. Het is een enorme uitdaging, maar wetenschappers geloven dat het binnen enkele tientallen jaren mogelijk is.`,
        questions: [
          { q: "Waarom wordt Mars de 'rode planeet' genoemd?", options: ["Het is er heel warm", "Door ijzeroxide op het oppervlak", "Door rode wolken", "Vanwege rode planten"], correct: 1, explanation: "De rode kleur komt door ijzeroxide (roest) op het oppervlak." },
          { q: "Hoe lang duurt de reis naar Mars?", options: ["Twee weken", "Drie maanden", "Zeven maanden", "Twee jaar"], correct: 2, explanation: "Er staat: 'De reis naar Mars duurt ongeveer zeven maanden.'" },
          { q: "Wat is een groot probleem voor mensen op Mars?", options: ["Te veel water", "Bijna geen zuurstof", "Te veel zwaartekracht", "Te veel planten"], correct: 1, explanation: "Er is bijna geen zuurstof op Mars." },
          { q: "Welke conclusie kun je trekken uit de tekst?", options: ["Leven op Mars is onmogelijk", "Het is makkelijk om naar Mars te gaan", "Het is moeilijk maar wetenschappers werken eraan", "Mensen wonen al op Mars"], correct: 2, explanation: "De tekst noemt het een 'enorme uitdaging' maar zegt ook dat wetenschappers geloven dat het mogelijk wordt." },
          { q: "Wat betekent het woord 'toch' in de vijfde zin?", options: ["Daarom", "Ondanks dat / maar toch", "Bovendien", "Ten slotte"], correct: 1, explanation: "'Toch' is een signaalwoord dat een tegenstelling aangeeft — ondanks de moeilijke omstandigheden zijn er toch plannen." }
        ]
      },
      {
        id: "l12-2",
        title: "De Gouden Eeuw",
        text: `In de zeventiende eeuw was Nederland één van de rijkste landen ter wereld. Deze periode noemen we de Gouden Eeuw. Nederlandse schepen voeren over de hele wereld om handel te drijven. Ze brachten specerijen, zijde en andere kostbare goederen mee terug. Amsterdam werd een belangrijk centrum voor handel en kunst. Beroemde schilders zoals Rembrandt en Vermeer maakten in die tijd hun mooiste werken. Maar de Gouden Eeuw had ook een donkere kant. Nederland verdiende veel geld met de slavenhandel. Mensen uit Afrika werden gedwongen om als slaaf te werken. Dit is een deel van de geschiedenis waar we nu anders over denken. Het is belangrijk om zowel de mooie als de moeilijke kanten van het verleden te kennen.`,
        questions: [
          { q: "Wanneer was de Gouden Eeuw?", options: ["Vijftiende eeuw", "Zestiende eeuw", "Zeventiende eeuw", "Achttiende eeuw"], correct: 2, explanation: "De Gouden Eeuw was in de zeventiende eeuw." },
          { q: "Waarmee verdiende Nederland geld in die tijd?", options: ["Alleen met kunst", "Handel en helaas ook slavenhandel", "Alleen met landbouw", "Alleen met visserij"], correct: 1, explanation: "Nederland dreef handel over de wereld, maar verdiende ook geld met slavenhandel." },
          { q: "Wie waren Rembrandt en Vermeer?", options: ["Koningen", "Ontdekkingsreizigers", "Schilders", "Handelaren"], correct: 2, explanation: "Het waren 'beroemde schilders' die hun mooiste werken maakten." },
          { q: "Wat is de boodschap van de laatste twee zinnen?", options: ["De Gouden Eeuw was perfect", "We moeten het verleden vergeten", "We moeten zowel mooie als moeilijke kanten kennen", "Slavenhandel was niet erg"], correct: 2, explanation: "De tekst zegt dat het belangrijk is om alle kanten van de geschiedenis te kennen." },
          { q: "Wat is het verwijswoord 'dit' in de voorlaatste zin?", options: ["De kunst", "De handel", "De slavenhandel", "Amsterdam"], correct: 2, explanation: "'Dit' verwijst terug naar de slavenhandel — het deel waar we nu anders over denken." }
        ]
      },
      {
        id: "l12-3",
        title: "Plastic Soep",
        text: `In de oceanen drijft een enorme hoeveelheid plastic afval. Dit noemen we 'plastic soep'. Het plastic komt van land: uit rivieren, van stranden en door de wind. Elk jaar belandt er ongeveer 8 miljoen ton plastic in de oceaan. Dat is hetzelfde als elke minuut een vrachtwagen vol plastic in zee legen. Dieren zoals zeeschildpadden en zeevogels verwarren plastic met voedsel. Ze eten het op en worden er ziek van, of ze sterven eraan. Het plastic breekt heel langzaam af — een plastic fles doet er 450 jaar over! Gelukkig zijn er oplossingen. Je kunt minder plastic gebruiken, afval scheiden en herbruikbare tassen meenemen. Wetenschappers werken ook aan systemen om plastic uit de oceaan te halen. Iedereen kan helpen om dit probleem kleiner te maken.`,
        questions: [
          { q: "Hoeveel plastic belandt er per jaar in de oceaan?", options: ["1 miljoen ton", "5 miljoen ton", "8 miljoen ton", "20 miljoen ton"], correct: 2, explanation: "Er staat: 'Elk jaar belandt er ongeveer 8 miljoen ton plastic in de oceaan.'" },
          { q: "Waarom is plastic gevaarlijk voor dieren?", options: ["Het is te groot", "Ze verwarren het met voedsel", "Het is giftig water", "Het maakt lawaai"], correct: 1, explanation: "Dieren verwarren plastic met voedsel, eten het op en worden ziek." },
          { q: "Hoe lang doet een plastic fles erover om af te breken?", options: ["50 jaar", "100 jaar", "450 jaar", "1000 jaar"], correct: 2, explanation: "Er staat: 'Een plastic fles doet er 450 jaar over!'" },
          { q: "Wat is het doel van de schrijver?", options: ["Ons bang maken", "Ons informeren en aansporen om te helpen", "Plastic verkopen", "Wetenschappers bekritiseren"], correct: 1, explanation: "De schrijver informeert over het probleem én geeft oplossingen — hij wil dat we helpen." },
          { q: "Welke vergelijking wordt gebruikt om de hoeveelheid plastic duidelijk te maken?", options: ["Een zwembad vol", "Een vrachtwagen per minuut", "Een berg", "Een voetbalveld"], correct: 1, explanation: "De tekst vergelijkt het met 'elke minuut een vrachtwagen vol plastic in zee legen'." }
        ]
      },
      {
        id: "l12-4",
        title: "Kunstmatige Intelligentie",
        text: `Kunstmatige intelligentie, vaak afgekort als AI, is een technologie die computers in staat stelt om taken uit te voeren die normaal menselijk denkvermogen vereisen. Denk aan spraakherkenning, het vertalen van talen of het besturen van zelfrijdende auto's. AI leert door enorme hoeveelheden data te analyseren en patronen te herkennen. Een voorbeeld is een AI die duizenden foto's van katten bekijkt en daarna zelf kan bepalen of een nieuwe foto een kat toont. Hoewel AI veel voordelen biedt, zijn er ook zorgen. Sommige mensen vrezen dat AI banen overneemt. Anderen maken zich zorgen over privacy, omdat AI veel persoonlijke gegevens kan verwerken. Het is daarom belangrijk dat er duidelijke regels komen voor het gebruik van AI. De technologie zelf is niet goed of slecht — het hangt af van hoe wij mensen ermee omgaan.`,
        questions: [
          { q: "Waarvoor staat de afkorting AI?", options: ["Automatische Informatie", "Kunstmatige Intelligentie", "Actieve Instructie", "Analyserende Input"], correct: 1, explanation: "AI staat voor kunstmatige intelligentie (Artificial Intelligence)." },
          { q: "Hoe leert AI volgens de tekst?", options: ["Door boeken te lezen", "Door enorme hoeveelheden data te analyseren", "Door naar mensen te kijken", "Door vragen te stellen"], correct: 1, explanation: "AI leert door enorme hoeveelheden data te analyseren en patronen te herkennen." },
          { q: "Welke zorgen bestaan er over AI?", options: ["Het is te duur", "Verlies van banen en privacyproblemen", "Het werkt niet goed", "Het is saai"], correct: 1, explanation: "Mensen vrezen dat AI banen overneemt en maken zich zorgen over privacy." },
          { q: "Wat is de conclusie van de schrijver?", options: ["AI moet verboden worden", "AI is altijd goed", "Het hangt af van hoe wij ermee omgaan", "AI is niet belangrijk"], correct: 2, explanation: "De schrijver zegt: 'De technologie zelf is niet goed of slecht — het hangt af van hoe wij mensen ermee omgaan.'" },
          { q: "Welk signaalwoord geeft een tegenstelling aan?", options: ["Daarom", "Hoewel", "Omdat", "Dus"], correct: 1, explanation: "'Hoewel' geeft een tegenstelling aan: ondanks de voordelen zijn er ook zorgen." }
        ]
      },
      {
        id: "l12-5",
        title: "Het Klimaatprobleem",
        text: `De aarde wordt steeds warmer. Sinds het begin van de industriële revolutie, rond 1750, is de gemiddelde temperatuur met meer dan 1 graad Celsius gestegen. Dat klinkt misschien weinig, maar de gevolgen zijn enorm. Gletsjers smelten, de zeespiegel stijgt en extreme weersomstandigheden komen vaker voor. De oorzaak is de uitstoot van broeikasgassen, vooral CO2, door het verbranden van fossiele brandstoffen zoals olie, gas en kolen. Deze gassen houden warmte vast in de atmosfeer, vergelijkbaar met een deken om de aarde. Om het klimaatprobleem aan te pakken, moeten we overstappen op duurzame energie zoals zonne- en windenergie. Daarnaast kunnen we minder vliegen, meer recyclen en zuiniger omgaan met energie. In 2015 tekenden bijna alle landen het Klimaatakkoord van Parijs, waarin ze beloofden de opwarming te beperken tot maximaal 2 graden. Het is een race tegen de klok.`,
        questions: [
          { q: "Hoeveel is de gemiddelde temperatuur gestegen sinds 1750?", options: ["0,5 graad", "Meer dan 1 graad", "3 graden", "5 graden"], correct: 1, explanation: "De gemiddelde temperatuur is met meer dan 1 graad Celsius gestegen." },
          { q: "Wat is de belangrijkste oorzaak van de opwarming?", options: ["De zon wordt heter", "Uitstoot van broeikasgassen", "Vulkaanuitbarstingen", "Ontbossing alleen"], correct: 1, explanation: "De oorzaak is de uitstoot van broeikasgassen door het verbranden van fossiele brandstoffen." },
          { q: "Welke vergelijking wordt gebruikt voor broeikasgassen?", options: ["Een muur", "Een deken om de aarde", "Een paraplu", "Een spiegel"], correct: 1, explanation: "Broeikasgassen houden warmte vast 'vergelijkbaar met een deken om de aarde'." },
          { q: "Wat is het Klimaatakkoord van Parijs?", options: ["Een boek over het klimaat", "Een afspraak om opwarming te beperken tot 2 graden", "Een wet tegen auto's", "Een plan om bomen te planten"], correct: 1, explanation: "In het Klimaatakkoord beloofden landen de opwarming te beperken tot maximaal 2 graden." },
          { q: "Wat betekent de uitdrukking 'een race tegen de klok'?", options: ["We hebben veel tijd", "We moeten snel handelen want de tijd raakt op", "Horloges zijn belangrijk", "Het gaat over een wedstrijd"], correct: 1, explanation: "'Een race tegen de klok' betekent dat er haast bij is — we moeten snel handelen." }
        ]
      }
    ]
  },
  // ──────────────────────────────────────────────
  // WOORDENSCHAT — Vocabulary
  // ──────────────────────────────────────────────
  woordenschat: {
    age8_9: [
      { word: "schitterend", meaning: "heel mooi, prachtig", sentence: "De prinses droeg een ___ jurk.", emoji: "✨" },
      { word: "hongerig", meaning: "je hebt trek, je wilt eten", sentence: "Na het zwemmen ben ik altijd erg ___.", emoji: "🍽️" },
      { word: "stiekem", meaning: "zonder dat iemand het ziet", sentence: "Hij at ___ een koekje uit de trommel.", emoji: "🤫" },
      { word: "dapper", meaning: "moedig, niet bang zijn", sentence: "De ___ ridder vocht tegen de draak.", emoji: "🦸" },
      { word: "verdrietig", meaning: "je voelt je niet blij, je wilt huilen", sentence: "Lisa was ___ omdat haar kat weg was.", emoji: "😢" },
      { word: "avontuur", meaning: "een spannende reis of gebeurtenis", sentence: "Ze gingen op ___ in het bos.", emoji: "🗺️" },
      { word: "eigenlijk", meaning: "in werkelijkheid, als je eerlijk bent", sentence: "Ik vind het ___ best leuk op school.", emoji: "🤔" },
      { word: "fluisteren", meaning: "heel zacht praten", sentence: "In de bieb moet je ___.", emoji: "🤐" },
      { word: "trots", meaning: "blij zijn met wat je hebt gedaan", sentence: "Mama was ___ op mijn goede cijfer.", emoji: "🏆" },
      { word: "verbaasd", meaning: "je had dit niet verwacht, verrast", sentence: "Ik was heel ___ door het cadeau.", emoji: "😮" },
      { word: "gezellig", meaning: "leuk samen, fijn om bij te zijn", sentence: "Het was ___ bij oma thuis.", emoji: "🏠" },
      { word: "enorm", meaning: "heel erg groot", sentence: "De olifant was ___!", emoji: "🐘" },
      { word: "slim", meaning: "je begrijpt dingen snel, knap", sentence: "Mijn zus is heel ___ met rekenen.", emoji: "🧠" },
      { word: "verschil", meaning: "niet hetzelfde, anders zijn", sentence: "Wat is het ___ tussen een hond en een kat?", emoji: "↔️" },
      { word: "ontdekken", meaning: "iets nieuws vinden of zien", sentence: "We gaan het bos in om dieren te ___.", emoji: "🔍" },
      { word: "plezier", meaning: "lol, vrolijkheid, fun", sentence: "De kinderen hadden veel ___ op het feest.", emoji: "🎉" },
      { word: "eerlijk", meaning: "de waarheid spreken, niet vals", sentence: "Wees altijd ___ tegen je vrienden.", emoji: "💯" },
      { word: "zenuwachtig", meaning: "een beetje bang of gespannen", sentence: "Ik was ___ voor de toets.", emoji: "😰" },
      { word: "verzinnen", meaning: "iets bedenken dat niet echt is", sentence: "Kun jij een leuk verhaal ___?", emoji: "💡" },
      { word: "geweldig", meaning: "fantastisch, heel erg goed", sentence: "Het optreden was ___!", emoji: "🌟" }
    ],
    age10_11: [
      { word: "betrouwbaar", meaning: "iemand op wie je kunt rekenen", sentence: "Een goede vriend is altijd ___.", emoji: "🤝" },
      { word: "onderzoeken", meaning: "uitzoeken hoe iets werkt of wat er aan de hand is", sentence: "De politie gaat de zaak ___.", emoji: "🔬" },
      { word: "uiteindelijk", meaning: "aan het einde, na alles wat er gebeurd is", sentence: "___ won het beste team de wedstrijd.", emoji: "🏁" },
      { word: "tegenstelling", meaning: "het tegenovergestelde, het verschil", sentence: "Er is een grote ___ tussen arm en rijk.", emoji: "⚖️" },
      { word: "omstandigheden", meaning: "de situatie, hoe de dingen zijn", sentence: "Onder deze ___ kunnen we niet verder.", emoji: "🌍" },
      { word: "verantwoordelijk", meaning: "jij moet ervoor zorgen", sentence: "Wie is ___ voor dit project?", emoji: "📋" },
      { word: "samenwerken", meaning: "samen iets doen, als team werken", sentence: "We moeten goed ___ aan dit project.", emoji: "🤜🤛" },
      { word: "inmiddels", meaning: "nu, op dit moment, intussen", sentence: "Het is ___ al donker buiten.", emoji: "🌙" },
      { word: "bijzonder", meaning: "speciaal, niet gewoon", sentence: "Dit is een ___ moment in de geschiedenis.", emoji: "⭐" },
      { word: "toekomst", meaning: "de tijd die nog moet komen", sentence: "In de ___ wil ik arts worden.", emoji: "🔮" },
      { word: "vergelijken", meaning: "kijken wat hetzelfde en anders is", sentence: "We gaan de twee boeken met elkaar ___.", emoji: "🔎" },
      { word: "herinneren", meaning: "iets niet vergeten, terugdenken aan", sentence: "Kun jij je ___ wat er gisteren gebeurde?", emoji: "💭" },
      { word: "waarschuwen", meaning: "iemand vertellen dat er gevaar is", sentence: "De leraar moest de kinderen ___ voor het gladde ijs.", emoji: "⚠️" },
      { word: "oplossing", meaning: "het antwoord op een probleem", sentence: "We moeten een ___ vinden voor dit probleem.", emoji: "🧩" },
      { word: "tevreden", meaning: "blij met hoe iets is, je hebt genoeg", sentence: "De leraar was ___ over mijn werkstuk.", emoji: "😊" },
      { word: "uitleggen", meaning: "duidelijk maken hoe iets werkt", sentence: "Kun je mij ___ hoe dit spel werkt?", emoji: "🗣️" },
      { word: "verbazing", meaning: "het gevoel als iets je verrast", sentence: "Tot mijn grote ___ won ik de wedstrijd.", emoji: "😲" },
      { word: "aandacht", meaning: "goed opletten, je richten op iets", sentence: "Geef ___ aan wat de juf zegt!", emoji: "👀" },
      { word: "behoorlijk", meaning: "best veel, redelijk flink", sentence: "Het waaide ___ hard vandaag.", emoji: "💨" },
      { word: "voordeel", meaning: "iets dat goed uitkomt, een pluspunt", sentence: "Het ___ van fietsen is dat het gezond is.", emoji: "👍" }
    ],
    age12_13: [
      { word: "consequentie", meaning: "het gevolg van iets, wat er daarna gebeurt", sentence: "Te laat komen heeft een ___.", emoji: "➡️" },
      { word: "overwegen", meaning: "erover nadenken, het bekijken", sentence: "Ik ga ___ of ik meedoe.", emoji: "🤔" },
      { word: "conclusie", meaning: "wat je aan het einde besluit na nadenken", sentence: "Mijn ___ is dat we beter moeten oefenen.", emoji: "📝" },
      { word: "zelfstandig", meaning: "alleen, zonder hulp van anderen", sentence: "Je moet dit ___ kunnen doen.", emoji: "💪" },
      { word: "invloed", meaning: "effect, macht om iets te veranderen", sentence: "Het weer heeft ___ op je humeur.", emoji: "🌦️" },
      { word: "waarschijnlijk", meaning: "het kan bijna zeker, vermoedelijk", sentence: "Het gaat ___ morgen regenen.", emoji: "🌧️" },
      { word: "nauwkeurig", meaning: "heel precies, zonder fouten", sentence: "De chirurg werkt heel ___.", emoji: "🎯" },
      { word: "voldoende", meaning: "genoeg, niet te weinig", sentence: "Heb je ___ water bij je?", emoji: "✅" },
      { word: "geleidelijk", meaning: "langzaam, stap voor stap", sentence: "Het weer wordt ___ warmer.", emoji: "📈" },
      { word: "oorspronkelijk", meaning: "het eerste, van het begin", sentence: "De ___ tekst was in het Latijn geschreven.", emoji: "📜" },
      { word: "perspectief", meaning: "een bepaalde manier van kijken naar iets", sentence: "Vanuit mijn ___ is dit de beste keuze.", emoji: "👁️" },
      { word: "analyseren", meaning: "iets heel goed bestuderen en uitzoeken", sentence: "We moeten de resultaten goed ___.", emoji: "📊" },
      { word: "controversieel", meaning: "waar veel discussie over is", sentence: "Het is een ___ onderwerp waar mensen het oneens over zijn.", emoji: "🔥" },
      { word: "sympathie", meaning: "een goed gevoel over iemand, je vindt iemand aardig", sentence: "Ik heb veel ___ voor die nieuwe leerling.", emoji: "❤️" },
      { word: "hypothese", meaning: "een vermoeden dat je nog moet bewijzen", sentence: "Onze ___ is dat planten sneller groeien met muziek.", emoji: "🧪" },
      { word: "genuanceerd", meaning: "met oog voor verschillende kanten", sentence: "Zijn mening over het onderwerp is heel ___.", emoji: "🎨" },
      { word: "aanzienlijk", meaning: "behoorlijk veel, best groot", sentence: "De kosten zijn ___ gestegen dit jaar.", emoji: "📈" },
      { word: "innovatie", meaning: "iets nieuws bedenken of uitvinden", sentence: "___ is belangrijk voor de toekomst.", emoji: "💡" },
      { word: "duurzaam", meaning: "goed voor het milieu en lang meegaand", sentence: "We moeten ___ omgaan met energie.", emoji: "♻️" },
      { word: "complexiteit", meaning: "hoe ingewikkeld iets is", sentence: "De ___ van dit probleem verraste iedereen.", emoji: "🧩" }
    ]
  },

  // ──────────────────────────────────────────────
  // SPELLING & GRAMMATICA
  // ──────────────────────────────────────────────
  spelling: {
    age8_9: [
      { q: "Kies het goede woord: Ik ___ gisteren naar school.", options: ["fiets", "fietste", "gefietst", "fietsen"], correct: 1, rule: "Verleden tijd: stam + te (fietsen → fiets + te = fietste)" },
      { q: "Welk woord is goed geschreven?", options: ["paard", "paart", "paart", "part"], correct: 0, rule: "Een paard schrijf je met -d aan het eind. Je hoort het als je 'paarden' zegt." },
      { q: "Ik ___ elke dag een boek.", options: ["lees", "leez", "les", "leest"], correct: 0, rule: "Ik-vorm: de stam van het werkwoord. Lezen → ik lees." },
      { q: "De ___ zijn rood.", options: ["appel's", "appelen", "appels", "appel"], correct: 2, rule: "Meervoud van appel = appels (geen apostrof nodig)." },
      { q: "Kies goed: Hij ___ hard.", options: ["rent", "rend", "ren", "rende"], correct: 0, rule: "Hij/zij/het-vorm: stam + t. Rennen → hij rent." },
      { q: "Welk woord hoort erbij? De kat zit op de ___.", options: ["mat", "mad", "maat", "maad"], correct: 0, rule: "Korte klank in een gesloten lettergreep: mat." },
      { q: "Ik heb een boek ___.", options: ["gelezen", "geleest", "gelees", "geleezen"], correct: 0, rule: "Voltooid deelwoord van lezen = gelezen." },
      { q: "De ___ schijnt.", options: ["Son", "Zon", "son", "zon"], correct: 3, rule: "Zon schrijf je met een z, en niet met een hoofdletter (behalve aan het begin van een zin)." },
      { q: "Wij ___ naar het park.", options: ["loopt", "lopen", "loopen", "loop"], correct: 1, rule: "Wij-vorm = hele werkwoord: wij lopen." },
      { q: "Welke zin is goed?", options: ["Ik word blij.", "Ik wordt blij.", "Ik worded blij.", "Ik wort blij."], correct: 0, rule: "Ik word (zonder -t). Worden → ik word." },
      { q: "De ___ is groot.", options: ["boom", "bom", "booom", "boomm"], correct: 0, rule: "Lange oo-klank in gesloten lettergreep: boom." },
      { q: "Ze hebben de hele dag ___.", options: ["gespeeld", "gespeelt", "gespeld", "gesspeld"], correct: 0, rule: "Voltooid deelwoord: ge + stam + d. Spelen → gespeeld." },
      { q: "Kies goed: Mijn vader ___ de krant.", options: ["leest", "lees", "leez", "leezen"], correct: 0, rule: "Hij-vorm: stam + t. Lezen → mijn vader leest." },
      { q: "Het is ___ koud buiten.", options: ["hel", "heel", "heeel", "hee"], correct: 1, rule: "Heel schrijf je met ee (lange klank) en één l." },
      { q: "Kies het goede woord: De muis ___ in het huis.", options: ["zit", "zid", "zitt", "sit"], correct: 0, rule: "De stam van zitten is zit. De muis zit." }
    ],
    age10_11: [
      { q: "Kies goed: Hij ___ dat het waar was.", options: ["beweerde", "beweerte", "beweerden", "beweerdde"], correct: 0, rule: "Verleden tijd: beweren → beweer + de = beweerde." },
      { q: "Welk woord is correct? De ___ (meervoud van auto)", options: ["auto's", "autos", "autoos", "auto'en"], correct: 0, rule: "Woorden op een klinker: meervoud met apostrof-s: auto's." },
      { q: "Kies de goede dt-vorm: Jij ___ het goed.", options: ["vindt", "vind", "vint", "vinden"], correct: 0, rule: "Jij vindt (stam + t). Bij inversie (vindt jij? → vind jij?) valt de -t weg." },
      { q: "Welk woord is fout?", options: ["gezelligheid", "moeilijkheid", "vriendelijkheid", "slimmigheid"], correct: 3, rule: "Slim → slimheid (niet slimmigheid). Niet elk woord krijgt -igheid." },
      { q: "De jongen ___ door het bos. (verleden tijd van rennen)", options: ["rende", "rente", "renden", "rent"], correct: 0, rule: "Rennen → stam ren + de = rende (n is niet in 't kofschip)." },
      { q: "Zij ___ al naar huis. (voltooid tegenwoordige tijd van vertrekken)", options: ["is vertrokken", "heeft vertrokken", "is vertrekken", "heeft vertrekken"], correct: 0, rule: "Vertrekken = beweging → hulpwerkwoord 'zijn': zij is vertrokken." },
      { q: "Kies goed: Het boek ___ op de tafel. (liggen, tegenwoordige tijd)", options: ["ligt", "legt", "lid", "lig"], correct: 0, rule: "Liggen (ergens zijn) → het boek ligt. Leggen (ergens neerleggen) → ik leg het boek neer." },
      { q: "Welk woord is een bijvoeglijk naamwoord?", options: ["rennen", "de", "prachtig", "school"], correct: 2, rule: "Prachtig beschrijft hoe iets is → bijvoeglijk naamwoord." },
      { q: "De leraar ___ ons een opdracht. (geven, tegenwoordige tijd)", options: ["geeft", "geef", "geefde", "geven"], correct: 0, rule: "De leraar = hij/zij → stam + t. Geven → geef + t = geeft." },
      { q: "Welk woord is correct geschreven?", options: ["ongelooflijk", "ongelofelijk", "ongeloflijk", "ongeloofelijk"], correct: 0, rule: "Ongelooflijk: on + geloof + lijk." },
      { q: "Wij ___ gisteren naar het park. (lopen, verleden tijd)", options: ["liepen", "loopten", "liepten", "loopte"], correct: 0, rule: "Lopen is een sterk werkwoord: wij liepen (niet loopten)." },
      { q: "Kies goed: De hond ___ al. (eten, voltooid)", options: ["heeft gegeten", "heeft geëten", "is gegeten", "heeft geten"], correct: 0, rule: "Eten → voltooid deelwoord: gegeten. De hond heeft gegeten." },
      { q: "Het meisje ___ een brief. (schrijven, verleden tijd)", options: ["schreef", "schrijfde", "schreefde", "schrijvde"], correct: 0, rule: "Schrijven is een sterk werkwoord: zij schreef." },
      { q: "Welke zin is correct?", options: ["Ik heb het boek gelezen.", "Ik heb het boek geleest.", "Ik heb het boek gelees.", "Ik heb het boek leest."], correct: 0, rule: "Lezen → voltooid deelwoord: gelezen." },
      { q: "Kies goed: ___ je morgen ook? (komen)", options: ["Kom", "Komt", "Komen", "Komd"], correct: 0, rule: "Bij inversie (jij-vorm met werkwoord voorop): kom jij? (zonder -t)." }
    ],
    age12_13: [
      { q: "Ik heb het ___ (verleden deelwoord van verhuizen).", options: ["verhuist", "verhuisd", "verhuized", "verhuizd"], correct: 0, rule: "Verhuizen → stam verhuis. 's' staat in 't kofschip → ge + verhuis + t = verhuist." },
      { q: "Welke zin heeft de juiste komma?", options: ["Als het regent, pak ik mijn paraplu.", "Als het regent pak ik, mijn paraplu.", "Als het regent pak ik mijn, paraplu.", "Als, het regent pak ik mijn paraplu."], correct: 0, rule: "Na een bijzin aan het begin van een zin komt een komma." },
      { q: "Kies de juiste spelling: Hij heeft het ___ (voltooid deelwoord van leven).", options: ["geleefd", "geleeved", "geleft", "geleeft"], correct: 0, rule: "Leven → stam leef (v→f). Ge + leef + d = geleefd." },
      { q: "Zij ___ gisteren naar Amsterdam. (reizen, verleden tijd)", options: ["reisde", "reiste", "reizde", "reiden"], correct: 0, rule: "Reizen → stam reis (z→s). Reis + de = reisde." },
      { q: "Welk signaalwoord geeft een opsomming aan?", options: ["maar", "want", "bovendien", "toch"], correct: 2, rule: "'Bovendien' voegt iets toe aan wat al gezegd is → opsomming." },
      { q: "De wetenschapper ___ een nieuw medicijn. (ontdekken, verleden tijd)", options: ["ontdekte", "ontdekde", "ontdekt", "ontdekken"], correct: 0, rule: "Ontdekken → stam ontdek. 'k' staat in 't kofschip → ontdek + te = ontdekte." },
      { q: "Kies de juiste vorm: Het probleem ___ opgelost. (worden, tegenwoordige tijd)", options: ["wordt", "word", "wordde", "worden"], correct: 0, rule: "Het probleem = het → wordt (3e persoon enkelvoud + t)." },
      { q: "Welke zin bevat een lijdend voorwerp?", options: ["De kat slaapt.", "Jan geeft Maria een boek.", "Het regent hard.", "Zij loopt naar school."], correct: 1, rule: "'Een boek' is het lijdend voorwerp (wat geeft Jan? → een boek)." },
      { q: "Hij heeft de wedstrijd ___. (verliezen, voltooid deelwoord)", options: ["verloren", "verliest", "verliezen", "verliesde"], correct: 0, rule: "Verliezen is een sterk werkwoord → voltooid deelwoord: verloren." },
      { q: "Kies goed: Zij ___ het niet. (weten, verleden tijd)", options: ["wist", "wiste", "weette", "wistte"], correct: 0, rule: "Weten is een sterk werkwoord: zij wist." },
      { q: "Welke zin is correct?", options: ["Hij wordt gekozen als leider.", "Hij word gekozen als leider.", "Hij wordde gekozen als leider.", "Hij worden gekozen als leider."], correct: 0, rule: "Hij wordt (3e persoon enkelvoud: stam + t)." },
      { q: "Het ___ een mooie dag geweest. (zijn, voltooid verleden tijd)", options: ["is", "was", "waren", "zijn"], correct: 0, rule: "Voltooid verleden tijd van zijn: het was (enkelvoud)." },
      { q: "Kies goed: De leerlingen ___ hun huiswerk. (maken, tegenwoordige tijd)", options: ["maken", "maakt", "maakten", "maak"], correct: 0, rule: "De leerlingen = meervoud → hele werkwoord: maken." },
      { q: "Welk woord is een bijwoord?", options: ["snel", "de", "tafel", "mooie"], correct: 0, rule: "'Snel' kan een bijwoord zijn: Hij rent snel (hoe rent hij?)." },
      { q: "De directeur ___ een toespraak. (houden, verleden tijd)", options: ["hield", "houdde", "hielde", "houdde"], correct: 0, rule: "Houden is een sterk werkwoord: hij hield." }
    ]
  },

  // ──────────────────────────────────────────────
  // REKENEN — Mathematics
  // ──────────────────────────────────────────────
  rekenen: {
    age8_9: {
      categories: [
        {
          name: "Optellen & Aftrekken",
          emoji: "➕",
          generate: () => {
            const ops = ["+", "-"];
            const op = ops[Math.floor(Math.random() * 2)];
            let a, b;
            if (op === "+") { a = 10 + Math.floor(Math.random() * 90); b = 10 + Math.floor(Math.random() * 90); }
            else { a = 20 + Math.floor(Math.random() * 80); b = 5 + Math.floor(Math.random() * (a - 5)); }
            const answer = op === "+" ? a + b : a - b;
            return { q: `${a} ${op} ${b} = ?`, answer, type: "number" };
          }
        },
        {
          name: "Tafels van Vermenigvuldiging",
          emoji: "✖️",
          generate: () => {
            const a = 2 + Math.floor(Math.random() * 9);
            const b = 2 + Math.floor(Math.random() * 9);
            return { q: `${a} × ${b} = ?`, answer: a * b, type: "number" };
          }
        },
        {
          name: "Delen",
          emoji: "➗",
          generate: () => {
            const b = 2 + Math.floor(Math.random() * 9);
            const answer = 2 + Math.floor(Math.random() * 10);
            const a = b * answer;
            return { q: `${a} ÷ ${b} = ?`, answer, type: "number" };
          }
        },
        {
          name: "Geld Rekenen",
          emoji: "💰",
          generate: () => {
            const items = [
              { name: "een broodje", price: 1.50 },
              { name: "een appel", price: 0.80 },
              { name: "een pakje melk", price: 1.20 },
              { name: "een ijsje", price: 2.50 },
              { name: "een boek", price: 5.00 },
              { name: "een potlood", price: 0.60 },
              { name: "een koekje", price: 0.75 },
              { name: "een flesje water", price: 1.00 }
            ];
            const item1 = items[Math.floor(Math.random() * items.length)];
            let item2 = items[Math.floor(Math.random() * items.length)];
            while (item2.name === item1.name) item2 = items[Math.floor(Math.random() * items.length)];
            const total = +(item1.price + item2.price).toFixed(2);
            return { q: `Je koopt ${item1.name} (€${item1.price.toFixed(2)}) en ${item2.name} (€${item2.price.toFixed(2)}). Hoeveel betaal je samen?`, answer: total, type: "money", unit: "€" };
          }
        },
        {
          name: "Klokkijken",
          emoji: "🕐",
          generate: () => {
            const scenarios = [
              () => { const h = 1 + Math.floor(Math.random() * 12); return { q: `De klok wijst half ${h + 1 > 12 ? 1 : h + 1} aan. Hoe laat is het?`, answer: `${h}:30`, type: "time" }; },
              () => { const h = 1 + Math.floor(Math.random() * 12); return { q: `Het is kwart over ${h}. Hoe laat is het?`, answer: `${h}:15`, type: "time" }; },
              () => { const h = 1 + Math.floor(Math.random() * 12); return { q: `Het is kwart voor ${h + 1 > 12 ? 1 : h + 1}. Hoe laat is het?`, answer: `${h}:45`, type: "time" }; },
              () => { const h = 1 + Math.floor(Math.random() * 12); const start = h; const dur = 1 + Math.floor(Math.random() * 3); const end = start + dur > 12 ? start + dur - 12 : start + dur; return { q: `Je begint om ${start}:00 uur te spelen. Je speelt ${dur} uur. Hoe laat ben je klaar?`, answer: `${end}:00`, type: "time" }; }
            ];
            return scenarios[Math.floor(Math.random() * scenarios.length)]();
          }
        },
        {
          name: "Woordsommen",
          emoji: "📝",
          questions: [
            { q: "Er zitten 24 kinderen in de klas. 8 kinderen gaan naar buiten. Hoeveel kinderen blijven er?", answer: 16, type: "number" },
            { q: "Jan heeft 5 zakjes met 6 knikkers. Hoeveel knikkers heeft hij in totaal?", answer: 30, type: "number" },
            { q: "Er staan 3 rijen stoelen. In elke rij staan 7 stoelen. Hoeveel stoelen zijn er?", answer: 21, type: "number" },
            { q: "Lisa heeft €10. Ze koopt een boek van €3,50. Hoeveel geld houdt ze over?", answer: 6.50, type: "money", unit: "€" },
            { q: "Er zijn 36 koekjes. Die worden eerlijk verdeeld over 4 kinderen. Hoeveel krijgt elk kind?", answer: 9, type: "number" },
            { q: "Een trein vertrekt om 9:00 uur en de reis duurt 2 uur. Hoe laat komt de trein aan?", answer: "11:00", type: "time" },
            { q: "Mama koopt 4 pakken melk van €1,20. Hoeveel betaalt ze?", answer: 4.80, type: "money", unit: "€" },
            { q: "Er zitten 48 eieren in dozen van 6. Hoeveel dozen zijn er nodig?", answer: 8, type: "number" }
          ]
        }
      ]
    },
    age10_11: {
      categories: [
        {
          name: "Grote Getallen",
          emoji: "🔢",
          generate: () => {
            const ops = ["+", "-"];
            const op = ops[Math.floor(Math.random() * 2)];
            let a, b;
            if (op === "+") { a = 100 + Math.floor(Math.random() * 9900); b = 100 + Math.floor(Math.random() * 9900); }
            else { a = 1000 + Math.floor(Math.random() * 9000); b = 100 + Math.floor(Math.random() * (a - 100)); }
            const answer = op === "+" ? a + b : a - b;
            return { q: `${a.toLocaleString("nl-NL")} ${op} ${b.toLocaleString("nl-NL")} = ?`, answer, type: "number" };
          }
        },
        {
          name: "Vermenigvuldigen & Delen",
          emoji: "✖️",
          generate: () => {
            const type = Math.random() > 0.5 ? "mul" : "div";
            if (type === "mul") {
              const a = 10 + Math.floor(Math.random() * 90);
              const b = 2 + Math.floor(Math.random() * 9);
              return { q: `${a} × ${b} = ?`, answer: a * b, type: "number" };
            } else {
              const b = 2 + Math.floor(Math.random() * 12);
              const answer = 5 + Math.floor(Math.random() * 50);
              return { q: `${b * answer} ÷ ${b} = ?`, answer, type: "number" };
            }
          }
        },
        {
          name: "Breuken",
          emoji: "🍕",
          questions: [
            { q: "Wat is ½ + ¼?", options: ["¾", "½", "⅔", "1"], correct: 0, type: "mc", explanation: "½ = 2/4, dus 2/4 + 1/4 = ¾" },
            { q: "Wat is groter: ⅔ of ¾?", options: ["⅔", "¾", "Ze zijn gelijk"], correct: 1, type: "mc", explanation: "¾ = 0,75 en ⅔ ≈ 0,67 — dus ¾ is groter." },
            { q: "Je hebt een pizza in 8 stukken. Je eet er 3 op. Welk deel heb je gegeten?", options: ["⅜", "⅝", "⅓", "½"], correct: 0, type: "mc", explanation: "3 van de 8 stukken = 3/8 = ⅜" },
            { q: "Wat is ½ van 60?", answer: 30, type: "number" },
            { q: "Wat is ¼ van 100?", answer: 25, type: "number" },
            { q: "Wat is ¾ van 80?", answer: 60, type: "number" },
            { q: "Wat is ⅕ van 50?", answer: 10, type: "number" },
            { q: "Hoeveel is 2/5 van 35?", answer: 14, type: "number" }
          ]
        },
        {
          name: "Procenten",
          emoji: "💯",
          questions: [
            { q: "Wat is 10% van 200?", answer: 20, type: "number" },
            { q: "Wat is 50% van 80?", answer: 40, type: "number" },
            { q: "Wat is 25% van 120?", answer: 30, type: "number" },
            { q: "Een broek kost €40. Er is 25% korting. Hoeveel betaal je?", answer: 30, type: "money", unit: "€" },
            { q: "Je hebt 20 van de 25 vragen goed. Wat is je percentage?", answer: 80, type: "number", unit: "%" },
            { q: "Wat is 75% van 200?", answer: 150, type: "number" },
            { q: "Een fiets kost €300. Er is 10% korting. Wat is de korting in euro's?", answer: 30, type: "money", unit: "€" },
            { q: "In een klas van 30 kinderen is 60% een meisje. Hoeveel meisjes zijn er?", answer: 18, type: "number" }
          ]
        },
        {
          name: "Meten & Omrekenen",
          emoji: "📏",
          questions: [
            { q: "Hoeveel centimeter is 2,5 meter?", answer: 250, type: "number", unit: "cm" },
            { q: "Hoeveel milliliter is 1,5 liter?", answer: 1500, type: "number", unit: "ml" },
            { q: "Hoeveel gram is 3 kilogram?", answer: 3000, type: "number", unit: "g" },
            { q: "Hoeveel minuten is 2,5 uur?", answer: 150, type: "number", unit: "min" },
            { q: "Hoeveel meter is 4 kilometer?", answer: 4000, type: "number", unit: "m" },
            { q: "Een tafel is 120 cm lang. Hoeveel is dat in meters?", answer: 1.2, type: "number", unit: "m" },
            { q: "Hoeveel seconden zitten er in 3 minuten?", answer: 180, type: "number", unit: "sec" },
            { q: "Hoeveel centimeter is 0,75 meter?", answer: 75, type: "number", unit: "cm" }
          ]
        },
        {
          name: "Woordsommen",
          emoji: "📝",
          questions: [
            { q: "Een boer heeft 245 schapen. Hij koopt er 78 bij. Hoeveel schapen heeft hij nu?", answer: 323, type: "number" },
            { q: "Een school heeft 480 leerlingen verdeeld over 12 klassen. Hoeveel leerlingen per klas?", answer: 40, type: "number" },
            { q: "Een auto rijdt 90 km per uur. Hoe ver komt hij in 3 uur?", answer: 270, type: "number", unit: "km" },
            { q: "Je spaart elke week €3,50. Hoeveel heb je na 8 weken gespaard?", answer: 28, type: "money", unit: "€" },
            { q: "Een zwembad is 25 meter lang. Je zwemt 12 baantjes. Hoeveel meter zwem je?", answer: 300, type: "number", unit: "m" },
            { q: "Er zijn 156 appels. Elke krat past 12 appels. Hoeveel kratten heb je nodig?", answer: 13, type: "number" },
            { q: "Een film duurt 1 uur en 45 minuten. Hij begint om 14:00. Hoe laat is hij afgelopen?", answer: "15:45", type: "time" },
            { q: "Papa koopt 3 shirts van €17,50 per stuk. Hoeveel betaalt hij?", answer: 52.50, type: "money", unit: "€" }
          ]
        }
      ]
    },
    age12_13: {
      categories: [
        {
          name: "Rekenen met Negatieve Getallen",
          emoji: "➖",
          generate: () => {
            const scenarios = [
              () => { const a = -10 + Math.floor(Math.random() * 21); const b = -10 + Math.floor(Math.random() * 21); return { q: `${a} + (${b}) = ?`, answer: a + b }; },
              () => { const a = -10 + Math.floor(Math.random() * 21); const b = -10 + Math.floor(Math.random() * 21); return { q: `${a} − (${b}) = ?`, answer: a - b }; },
              () => { const a = -5 + Math.floor(Math.random() * 11); const b = -5 + Math.floor(Math.random() * 11); return { q: `${a} × ${b} = ?`, answer: a * b }; }
            ];
            const s = scenarios[Math.floor(Math.random() * scenarios.length)]();
            return { ...s, type: "number" };
          }
        },
        {
          name: "Breuken & Decimalen",
          emoji: "🍕",
          questions: [
            { q: "Wat is 3/8 + 1/8?", options: ["4/8 = ½", "3/8", "4/16", "2/8"], correct: 0, type: "mc", explanation: "3/8 + 1/8 = 4/8 = ½" },
            { q: "Wat is 2/3 − 1/6?", options: ["1/2", "1/3", "1/6", "5/6"], correct: 0, type: "mc", explanation: "2/3 = 4/6, dus 4/6 − 1/6 = 3/6 = 1/2" },
            { q: "Wat is 0,75 als breuk?", options: ["¾", "⅔", "⅗", "⅘"], correct: 0, type: "mc", explanation: "0,75 = 75/100 = ¾" },
            { q: "Wat is 3/5 × 20?", answer: 12, type: "number" },
            { q: "Wat is 2,5 × 1,2?", answer: 3, type: "number" },
            { q: "Reken om: 7/4 = ? (decimaal getal, 2 decimalen)", answer: 1.75, type: "number" },
            { q: "Wat is 5/6 afgerond op 1 decimaal?", answer: 0.8, type: "number" },
            { q: "Wat is ⅔ van 270?", answer: 180, type: "number" }
          ]
        },
        {
          name: "Procenten & Verhoudingen",
          emoji: "📊",
          questions: [
            { q: "Een laptop kost €600. De prijs stijgt met 15%. Wat is de nieuwe prijs?", answer: 690, type: "money", unit: "€" },
            { q: "Je had 80 punten en nu 100. Met hoeveel procent is je score gestegen?", answer: 25, type: "number", unit: "%" },
            { q: "In een verhouding van 3:5 zijn er 40 items. Hoeveel items zijn er in het kleinste deel?", answer: 15, type: "number" },
            { q: "Een winkel geeft 30% korting op een jas van €90. Wat betaal je?", answer: 63, type: "money", unit: "€" },
            { q: "Van de 250 leerlingen sport 64%. Hoeveel leerlingen sporten?", answer: 160, type: "number" },
            { q: "Een recept voor 4 personen vraagt 200g bloem. Hoeveel voor 6 personen?", answer: 300, type: "number", unit: "g" },
            { q: "Je koopt iets voor €45 inclusief 21% BTW. Hoeveel is de BTW?", options: ["€7,80", "€9,45", "€7,50", "€9,00"], correct: 0, type: "mc", explanation: "Prijs zonder BTW: 45/1,21 ≈ €37,19. BTW = 45 − 37,19 ≈ €7,80" },
            { q: "De verhouding jongens:meisjes is 2:3. Er zijn 12 jongens. Hoeveel meisjes?", answer: 18, type: "number" }
          ]
        },
        {
          name: "Oppervlakte & Inhoud",
          emoji: "📐",
          questions: [
            { q: "Wat is de oppervlakte van een rechthoek van 8 cm × 5 cm?", answer: 40, type: "number", unit: "cm²" },
            { q: "Wat is de omtrek van een vierkant met zijde 9 cm?", answer: 36, type: "number", unit: "cm" },
            { q: "Wat is de oppervlakte van een driehoek met basis 10 cm en hoogte 6 cm?", answer: 30, type: "number", unit: "cm²" },
            { q: "Een bak is 20 cm × 10 cm × 15 cm. Wat is de inhoud in liters?", answer: 3, type: "number", unit: "liter" },
            { q: "Een cirkel heeft straal 7 cm. Wat is de oppervlakte? (Rond af op hele cm²)", answer: 154, type: "number", unit: "cm²" },
            { q: "Een tuin is 12 m × 8 m. Hoeveel m² is dat?", answer: 96, type: "number", unit: "m²" },
            { q: "Wat is de omtrek van een rechthoek van 15 cm × 7 cm?", answer: 44, type: "number", unit: "cm" },
            { q: "Een zwembad is 25 m lang, 10 m breed en 2 m diep. Hoeveel m³ water past erin?", answer: 500, type: "number", unit: "m³" }
          ]
        },
        {
          name: "Grafieken & Tabellen",
          emoji: "📈",
          questions: [
            { q: "In een staafdiagram scoort Team A: 15, Team B: 22, Team C: 18. Welk team scoort het meest?", options: ["Team A", "Team B", "Team C"], correct: 1, type: "mc", explanation: "Team B scoort 22, dat is het hoogst." },
            { q: "De temperatuur was: ma 12°C, di 15°C, wo 10°C, do 14°C, vr 16°C. Wat is het gemiddelde?", answer: 13.4, type: "number", unit: "°C" },
            { q: "In een klas scoorden 5 leerlingen: 6, 7, 8, 7, 9. Wat is de mediaan?", answer: 7, type: "number" },
            { q: "Een lijndiagram toont: jan 100, feb 120, mrt 90, apr 150. Wat is het verschil tussen de hoogste en laagste waarde?", answer: 60, type: "number" },
            { q: "Van 30 leerlingen hebben er 12 een hond, 8 een kat, 4 een konijn, 6 niets. Hoeveel procent heeft een hond?", answer: 40, type: "number", unit: "%" },
            { q: "De omzet per kwartaal was: Q1 €2000, Q2 €3500, Q3 €2800, Q4 €4200. Wat is de totale jaaromzet?", answer: 12500, type: "money", unit: "€" }
          ]
        },
        {
          name: "Woordsommen",
          emoji: "📝",
          questions: [
            { q: "Een trein rijdt 120 km/u. Hoe lang doet hij over 450 km? (in uren, 1 decimaal)", answer: 3.75, type: "number", unit: "uur" },
            { q: "Je krijgt 4% rente per jaar over €500 spaargeld. Hoeveel rente krijg je na 1 jaar?", answer: 20, type: "money", unit: "€" },
            { q: "Een winkel verkoopt 3 boeken voor €8,95 per stuk en 2 pennen voor €1,50. Wat is het totaal?", answer: 29.85, type: "money", unit: "€" },
            { q: "Een hardloper rent 5 km in 22 minuten. Wat is zijn gemiddelde snelheid in km/u? (Rond af op 1 decimaal)", answer: 13.6, type: "number", unit: "km/u" },
            { q: "Een kamer is 4,5 m × 3,2 m. Laminaat kost €12 per m². Wat kost het laminaat?", answer: 172.80, type: "money", unit: "€" },
            { q: "Je bestelt 2 pizza's van €9,75 en 3 frisdranken van €2,25. Je betaalt met €30. Hoeveel wisselgeld krijg je?", answer: 3.75, type: "money", unit: "€" }
          ]
        }
      ]
    }
  },

  // ──────────────────────────────────────────────
  // FUN / Encouraging Messages
  // ──────────────────────────────────────────────
  encouragement: {
    correct: [
      "Super goed! 🌟", "Helemaal goed! 🎉", "Wat knap! 💪", "Fantastisch! 🚀",
      "Je bent een ster! ⭐", "Geweldig gedaan! 🏆", "Top! 👏", "Briljant! 🧠",
      "Wauw, goed zo! 🎊", "Jij kunt het! 💎", "Perfect! 🎯", "Knap hoor! 🌈"
    ],
    incorrect: [
      "Bijna! Probeer het nog eens! 💪", "Niet goed, maar je leert ervan! 📚",
      "Oeps! Lees de uitleg en probeer opnieuw! 🔄", "Volgende keer beter! 🌱",
      "Dat was lastig hè? Kijk naar de uitleg! 🤔", "Geeft niks, je wordt steeds beter! 📈"
    ],
    streak: [
      "🔥 {n} op een rij goed!", "⚡ {n}x achter elkaar! Ga zo door!",
      "🌟 Wat een reeks! {n} goed!", "🏅 {n} achter elkaar — ongelofelijk!"
    ]
  },

  // Badges / Achievements
  badges: [
    { id: "first-read", name: "Eerste Verhaal", emoji: "📖", desc: "Je eerste tekst gelezen!", requirement: (p) => p.lezenDone >= 1 },
    { id: "vocab-10", name: "Woordenkenner", emoji: "📚", desc: "10 woorden geleerd!", requirement: (p) => p.vocabDone >= 10 },
    { id: "streak-5", name: "Op Dreef", emoji: "🔥", desc: "5 vragen op een rij goed!", requirement: (p) => p.bestStreak >= 5 },
    { id: "streak-10", name: "Onhoudbaar", emoji: "⚡", desc: "10 vragen op een rij goed!", requirement: (p) => p.bestStreak >= 10 },
    { id: "spelling-pro", name: "Spellingskampioen", emoji: "✍️", desc: "15 spellingsoefeningen goed!", requirement: (p) => p.spellingCorrect >= 15 },
    { id: "all-texts", name: "Leesbeest", emoji: "🐛", desc: "Alle teksten gelezen!", requirement: (p) => p.lezenDone >= 5 },
    { id: "perfect-text", name: "Alles Goed!", emoji: "💯", desc: "Een tekst met alles goed!", requirement: (p) => p.perfectTexts >= 1 },
    { id: "hundred", name: "De 100!", emoji: "💎", desc: "100 vragen beantwoord!", requirement: (p) => p.totalAnswered >= 100 },
    { id: "math-whiz", name: "Rekenwonder", emoji: "🧮", desc: "20 rekensommen goed!", requirement: (p) => (p.rekenCorrect || 0) >= 20 },
    { id: "math-master", name: "Rekenmeester", emoji: "👑", desc: "50 rekensommen goed!", requirement: (p) => (p.rekenCorrect || 0) >= 50 }
  ]
};
