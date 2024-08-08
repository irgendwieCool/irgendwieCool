const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

const einsetzen = document.querySelector('.einsetzen')

let currentActive = 1
update()

next.addEventListener('click', () => {
    currentActive++
   if(currentActive > circles.length) {
        currentActive = circles.length
   }
   console.log(currentActive)
   update()
})

prev.addEventListener('click', () => {
    currentActive--
   if(currentActive < 1) {
        currentActive = 1
}
update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length-1) / (circles.length-1) *100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive == circles.length){
        next.disabled = true
    } else{
        prev.disabled = false
        next.disabled = false
    }

    showPresentObject()
}


function showPresentObject(){

    if(currentActive === 5){
    einsetzen.innerHTML =`<h2>Franz Reichelt(1878–1912)</h2>
    <div class="wrapper show a">
      <div class="box a">
        <img
          src="./bilder/image.png"
          alt="Bild nicht vorhanden"
          width="100"
          height="100"
        />
      </div>
      <div class="box franz">
        <p>
          Am 4. Februar 1912 um 7 Uhr morgens versammelten sich bei Minusgraden
          Reporter und Schaulustige am Eiffelturm, um Reichelts Erfindung zu
          begutachten. Der Einwand der anwesenden Reporter, sein
          „Fledermaus-Anzug“ habe noch keine befriedigenden Ergebnisse gezeigt,
          brachte ihn nicht von seinem Vorhaben ab. Um 08:22 Uhr sprang er aus
          einer Höhe von 57 Metern herab, fiel weitgehend ungebremst zu Boden
          und schlug vor laufender Kamera nach vier Sekunden Fallzeit am Boden
          auf. Reichelt starb unmittelbar nach dem Aufprall.[2]
          Reanimationsversuche blieben vergeblich.
        </p>
      </div>
      <div class="box c">
        <p>
          Im Zuge der aufkommenden Fliegerei in den 1910er Jahren und
          zunehmender Flugzeug-Stunts nahmen auch die Unfälle zu. Reichelt war
          tief bewegt von den Abstürzen der Piloten und entwarf ab Juli 1910 als
          Schneider Fallschirmanzüge. Die Konstruktionsprinzipien des
          Fallschirms liefen jedoch physikalischen Erkenntnissen zuwider.
        </p>
      </div>
      <div class="box d">
        <iframe wight="100" src="https://youtube.com/embed/MDUYPrKKM5M">
        </iframe>
      </div>
    </div>`
    }
    else if(currentActive ===3){
        einsetzen.innerHTML = `
        <h2>Adolf Friedrich, König von Schweden (1771)</h2>
    <div class="wrapper friedrich">
      <div class="box">
        <img
          src="./bilder/image copy.png"
          alt="Bild nicht vorhanden"
          width="100"
          height="100"
        />
      </div>
      <div class="box b">
        Adolf Friedrich wurde am 14. Mai 1710 in Gottorf (Schleswig-Holstein)
        geboren und war König von Schweden (von 1751 bis 1771). Sein Vorgänger
        war Friedrich I., der von 1720 bis 1751 König von Schweden war. Um seine
        Popularität während seiner Amtszeit zu steigern, unternahm er mehrere
        Reisen durch verschiedene Regionen Schwedens. Allerdings führte dies
        nicht zu einem Machtgewinn gegenüber dem Reichsrat. 1756 versuchten
        daraufhin enge Vertraute von Adolfs Frau und Anhänger der Hofpartei
        einen königlichen Staatsstreich. Dieser missglückte und mehrere
        Verbündete des Königspaares wurden hingerichtet. Adolf Friedrich starb
        am 12. Februar 1771, weil er bereits nach einem opulenten Mahl noch 14
        Portionen seines Lieblingsgerichts zum Nachtisch aß. Die
        Verdauungsprobleme, die er danach hatte, führten zu einem Schlaganfall,
        an dem er letztendlich starb.
      </div>
    </div>`
    }
    else if(currentActive ===7){
        einsetzen.innerHTML =`
            <h2>Garry Hoy (1993)</h2>

    <div class="wrapper hoy">
      <div class="box ">
        <img
          src="./bilder/image copy 2.png"
          alt="Bild nicht vorhanden"
          width="100"
          height="100"
        />
      </div>
      <div class="box b">
        Garry Hoy wurde am 28. Januar 1954 geboren und war ein kanadischer
        Anwalt. Er war Spezialist für Unternehmens- und Wertpapierrecht für die
        Anwaltskanzlei Holden Day Wilson in Toronto.
        <br />
        <br />
        Am 9. Juli 1993 wollte Hoy einer Gruppe von Künstlern die Stärke des
        Fensterglases präsentieren. In einem kleinen Konferenzraum neben einem
        Sitzungssaal, in dem ein Empfang für neue Künstlerstudenten stattfand,
        warf er sich deswegen gegen ein Fenster. Das Fenster zerbrach zwar
        nicht, jedoch lößte sich das Fenster aus dem Fensterrahmen und Hoy
        stürtzte in den Tod.
      </div>
    </div>
    `
    }
    else if(currentActive ===1){
        einsetzen.innerHTML =`
        <h2>
      Hans Staininger (1567)
    </h2>
    <div class="wrapper hans">
      <div class="box e">
        <img
        src="./bilder/image copy 3.png"
        alt="Bild nicht vorhanden"
        width="100"
        height="100"
      />
      </div>
      <div class="box f">
        <p>
        Hans hatte einen mindestens 1,5 Meter langen Bart, der ihm bis zu seinen Zehenspitzen reichte. Am 28. September 1567 hatte er seinen Bart statt wie gewöhnlich eingerollt offen getragen. Als er einem durchreisenden Fürsten dann seine Ergebenheit zeigen wollte, indem er sich beeilte, trat er auf seinen Bart und stürzte. Bei seinem Sturz brach er sich das Genick und starb.
        </p>
      </div>
      <div class="box g">
        <p> 
          Hans Staininger oder Steininger wurde um 1508 in Pfarrkirchen (Bayern) geboren. Er wurde sechs Mal zum Stadthauptmann von Braunau am Inn gewählt.
        </p>
      </div>
      <div class="box h">
        <img
        src="./bilder/image copy 4.png"
        alt="Bild nicht vorhanden"
        width="100"
        height="100"
      />
      <p>
        Barthaare von Hans Staininger
      </p>
    </div>
    </div>
        `}
        else if(currentActive === 2){
            einsetzen.innerHTML = `<h2>
      Tycho Brahe(1546-1601)
    </h2>
    <div class="wrapper tycho">
      <div class="box e">
        <img
        src="./bilder/image copy6.png"
        alt="Bild nicht vorhanden"
        width="100"
        height="100"
      />
      </div>
      <div class="box f">
        <p>
          Tycho Brahe wurde am 14. Dezember 1546 geboren. Er war dänischer Adliger und einer der bedeutensten Astronomen
        </p>
      </div>
      <div class="box g">
        <p> 
          Am 13. Oktober 1601 nahm er an einem Festbankett von Kaiser Rudolph II teil. Er starb am 24. Oktober 1601, da er am Tag des Festbanketts aus Höflichkeit und wegen der Hofetikette nicht aufstehen konnte, um zur Toilette zu gehen. Er zog sich einen Blasenriss zu, der zu einer Blaseninfektion führte.
        </p>
      </div>
      <div class="box i">
        <img
        src="./bilder/image copy5.png"
        alt="Bild nicht vorhanden"
        width="100"
        height="100"
      />
      <p>
      </p>
    </div>
  </div>`
        }
    else if(currentActive === 4){
        einsetzen.innerHTML = `<h2>
    Clement Vallandigham (1871)
  </h2>
  <div class="wrapper tycho">
    <div class="box c">
      <img
      src="./bilder/Download.png"
      alt="Bild nicht vorhanden"
      width="100"
      height="100"
    />
    </div>
    <div class="box d">
      <p>
        Tycho Brahe wurde am 14. Dezember 1546 geboren. Er war dänischer Adliger und einer der bedeutensten Astronomen
        <br>
        <br>
        Am 13. Oktober 1601 nahm er an einem Festbankett von Kaiser Rudolph II teil. Er starb am 24. Oktober 1601, da er am Tag des Festbanketts aus Höflichkeit und wegen der Hofetikette nicht aufstehen konnte, um zur Toilette zu gehen. Er zog sich einen Blasenriss zu, der zu einer Blaseninfektion führte.
      </p>
    </div>
  </div>`
}
else if(currentActive === 6){
    einsetzen.innerHTML = `
    <h2>
      Michael Malloy (1933)
    </h2>
    <div class="wrapper tycho">
      <div class="box j">
        <img
        src="./bilder/a.jpg"
        alt="Bild nicht vorhanden"
        width="100"
        height="100"
      />
      </div>
      <div class="box k">
        <p>
          Michael Malloy, auch Mike the Durable (Mike, der Langlebige) und Iron Mike (Eiserner Mike) genannt, wurde 1873 geboren. Mike war ehemaliger Feuerwehrmann und war danach ein obdachloser irischer Wanderarbeiter. Er überlebte während seiner Zeit in New York mehrere Mordanschläge, die durch Bekannte verübt wurden, da sie eine Lebensversicherung auf Michael abgeschlossen hatten und so an Geld kommen wollten.
          <br>
          <br>
          Die fünf Männer waren Tony Marino (Barbesitzer), Joseph „Red“ Murphy, Francis Pasqua, Hershey Green (Taxifahrer) und Daniel Kriesberg. Die auszuzahlende Summe, die die Männer bekommen hätten, lag bei 3500 $ (heutiger Wert: 73.198 €).
        </p>
      </div>
        <div class="box l">
          Anfangs gab ihm der Barkeeper einen unbegrenzten Kredit in der Annahme, dass sich Micheal zu Tode trinken würde. Allerdings brachte ihn der Alkohol nicht um, weswegen die Männer den Alkohol durch Frostschutzmittel ersetzten. Jedoch wurde er durch das Frostschutzmittel nur bewusstlos und kam zur Bar zurück. Danach versuchten sie es mit Terpentin, Pferde-Liniment und Rattengift, doch Michael kam jedes Mal wieder. Später versuchten sie es mit in Methanol getränkten Austern und einem Sandwich mit verdorbenen Sardinen, versetzt mit Gift und Teppichnägeln. Doch auch daran strab Michael nicht. Als Michael sich bis zur Bewusstlosigkeit trank, brachten sie in der Nacht bei -26°C in den Crotona Park, warfen ihn in den Schnee und übergossen ihn mit 20 Litern Wasser. Jedoch erschien Michael vollkommen unbeeindruckt am nächsten Tag in der Bar. Beim nächsten Anschlag überfuhr ihn Hershey Green (Taxifahrer) mit 72km/h. Michael wurde von zwei Polizisten bewusstlos aufgefunden und er wurde mit mehreren Knochenbrüchen ins Krankenhaus gebracht. Nach drei Wochen konnte er das Krankenhaus wieder verlassen und er erschien in der Bar.

          Als Michael am 22. Februar 1933 durchs Trinken erneut ohnmächtig wurde, nahmen sie ihn mit in Murphys Zimmer in der Fulton Avenue, schlossen ihn mit einem Schlauch im Mund an den Stadtgas-Anschluss an und drehten das Gas auf. Michael starb innerhalb einer Stunde. Bis auf Green, der eine Gefängnisstrafe erhielt, wurden die anderen Männer auf dem elektrischen Stuhl hingerichtet.
        </div>
      </div>

    `
}
}
