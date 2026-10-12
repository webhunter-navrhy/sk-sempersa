# Koncept – Sempersa s.r.o. (medicínske centrum, Bratislava-Prievoz)

Zdroj obsahu: sempersa.sk (Mioweb, staženo headless 12. 10. 2026), všechny texty, ceník, tým, ordinační hodiny a fotky jsou jejich.

## 1. Tři koncepty
1. **Hodina pre pacienta** – ciferník 60 minut. Jejich hlavní odlišení je čas („na každého pacienta máme dostatok času, nezriedka aj viac ako hodinu“, komplexní vyšetření 60 min). Ciferník se scrollem vyplní oranžovou přes 4 kroky návštěvy (vypočuje → vyšetrí → určí postup → sleduje aj po odchode) a v ceníku má každá položka malý ciferník podle délky.
2. **Pohybový aparát ako mapa** – silueta těla s body, kam aplikují GUNA injekce, služby podle části těla.
3. **Ordinačná karta** – web jako karta pacienta s razítky a rukopisem lékaře.

## 2. Výběr: 1 – Hodina pre pacienta
- Obor: soukromá ambulance, za kterou se platí, rozhoduje důvěra a čas lékaře, ne přístroje (jejich text: „Nezakladáme si na tom, že máme najviac prístrojov“).
- Brand: oranžové logo s hadem v „S“ (Asklépios), oranžová je výrazná a teplá → ciferník v oranžové.
- Fotky: profesionální série z ambulance (Brano Molnár), skuteční lékaři a terapeuti → web nese foto, ne ilustrace.
- 2 není: silueta těla z ruky by vypadala amatérsky a lékařsky zavádějící. 3 není: razítka a rukopis působí retro, u lékaře spíš nepořádně.

## 3. Skladba (úvod)
hlavička (logo vlevo, menu jako na jejich webu, tlačítko Objednať sa = telefon recepce)
→ hero: text vlevo (claim, 3 doložené fakty), velká fotka konzultace vpravo, malý ciferník „60 min“
→ tři ambulance jako řádky s fotkou (ne karty s ikonami) + kdo ordinuje a kdy
→ **signature: Hodina pre pacienta** (sticky ciferník + 4 kroky, scroll-driven)
→ citát „ak nevieš, čo očakávať…“ přes celou šířku
→ Špeciality (24h monitor, GUNA) dvě fotky
→ tým (portréty, jejich motto)
→ referencie (2 skutečné z jejich webu)
→ kontakt: ordinační hodiny jako tabulka, adresa, výhody (prostredie, doprava, parkovanie)
Podstránky: My, Služby, Cenník (**signature 2**: záložky + mini ciferník u každé položky s délkou), Špeciality, Radíme (10 článků s odkazem), Kontakt.

## 4. Písmo a paleta
- Literata 400 (display, opsz) + Albert Sans 400–600 (text). Háčky SK ověřené renderem (ľ ď ť ĺ ŕ ô ä) – /tmp/semp/hacky.png.
- Poslední weby v registru: Gilda Display, Archivo, Spectral → Literata se neopakuje.
- Paleta: oranžová loga #FD7F06 (plochy, ciferník, tlačítko s tmavým textem), tmavě vínová #971B1E z jejich webu (odkazy, aktivní menu, drobné akcenty), teplá bílá #FBF7F2, inkoust #2A1F1A, linky #E8DDD2. Žádná modrá (#27a8d7 je výchozí barva cookie lišty Miowebu, ne brand).

## 5. Zakázané vzory
Žádný. Čísla jen doložená (od roku 2006, ceny z ceníku, minuty z ceníku). „17 rokov praxe“ z jejich webu nepoužívám (zastaralé, rozpor s 2006).

## 6. Porovnání
- schvalene.md: princip „nástroj/obsah jako hlavní věc“ (náborový web, Computherm) → ceník s ciferníky; fotky klienta nesou web (fotografové).
- odmitnute.md: žádná tmavá + zlatá, žádné intro animace, žádné obdélníčky s ikonami, ne kopie (jejich web = hero přes fotku + bloky textu; nový má jinou skladbu, čas jako osu a použitelný ceník).
- Posledních 5 webů: Durrës (časová osa pobytu), Computherm (schéma), Laremia (slovník), Donareal, LTC – skladba hero + ciferník + řádky ambulancí se neopakuje.

## 7. Úpravy po review (12. 10. 2026)
- Skladba úvodu po 5 kolech review: hero (text + fotka, poisťovne pod CTA) → týdenní rozvrh ordinačních hodin na časové ose 7–15 h (oranžová interná, vínová rehabilitácia) + 3 sloupce ambulancí → **Hodina pre pacienta: ciferník rozdělený na 4 čtvrtiny = 4 kroky návštěvy kolem něj** (bez scroll animace, bez číslovaných koleček) → Špeciality s citátem semper + sanus → tím (spolupracovníci bez malých fotek) → referencie → kontakt.
- Reveal animace odstraněny (QA koláže je zachytávaly jako prázdná místa).
