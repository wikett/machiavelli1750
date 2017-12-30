<template>
  <div>
    <top-navbar ></top-navbar>
    <div class="columns">
    <div class="column is-2">
      <aside class="menu section">
        <ul class="menu-list">
          <li>
            <a href="#esquema"> Esquema general </a>
          </li>
          <li>
            <a href="#objetivo"> Objetivo del juego </a>
          </li>
          <li>
            <a href="#mapa"> El Mapa y sus elementos </a>
          </li>
          <li>
            <a href="#economia"> Economía y Población </a>
          </li>
          <li>
            <a href="#ajustes"> Fase de ajustes militares </a>
          </li>
          <li>
            <a href="#form"> Form </a>
          </li>
          <li>
            <a href="#icon"> Icon </a>
          </li>
          <li>
            <a href="#images"> Images </a>
          </li>
          <li>
            <a href="#notifications"> Notifications </a>
          </li>
          <li>
            <a href="#progress"> Progress bars </a>
          </li>
          <li>
            <a href="#table"> Table </a>
          </li>
          <li>
            <a href="#tag"> Tag </a>
          </li>
        </ul>
      </aside>
    </div>
    <div class="column">
      <section class="section" id="esquema">
        <h1 class="title"> ESQUEMA GENERAL DEL JUEGO </h1>
        <hr>
        <div class="columns">
          <div class="column">
            <p>Cada jugador domina una potencia dentro de la lucha por la dominación en la Europa del s. XVIII. En el primer turno, el DJ manda información de trasfondo sobre la partida que estáis jugando y un mapa con la situación general, a partir del cual los jugadores hacen su primer movimiento.</p><br/>
            <p>Los turnos son llamados campañas. El juego empieza en la campaña de Primavera. La siguiente campaña es la de Verano y la siguiente la de Otoño. Después del Otoño, el año en curso acaba y se vuelve a empezar con la campaña de Primavera del siguiente año. No hay campaña de Invierno, pues en esa época el frío invernal hacia que se paralizaran las operaciones militares. Los años, sin embargo, no tienen ninguna función específica.</p><br/>
            <p>La diferencia entre los distintos tipos de Campaña es importante porque en cada una se realizaran unas fases u otras. Estas fases son comunes y simultaneas para todos los jugadores: </p><br />
<table class="tg">
  <tr>
    <th class="tg-f078" rowspan="5">PRIMAVERA</th>
    <th class="tg-qtfc">Fase de hambre</th>
    <th class="tg-93t1">En esta fase, se determina (mediante el azar) en qué regiones golpea el hambre*, lo cual influye en el transcurso del juego.</th>
  </tr>
  <tr>
    <td class="tg-qtfc">Fase de ingresos</td>
    <td class="tg-93t1">El DJ calcula el ingreso de cada jugador basándose en los criterios de la sección “Calculando en ingreso”.</td>
  </tr>
  <tr>
    <td class="tg-qtfc">Fase de ajustes militares</td>
    <td class="tg-93t1">El jugador indica qué tropas son mantenidas y cuáles no y si quiere crear nuevas tropas y dónde.,Ver “Fase de Ajustes Militares”.</td>
  </tr>
  <tr>
    <td class="tg-qtfc">Fase de escribir las órdenes</td>
    <td class="tg-93t1">El jugador escribe lo que quiere que cada una de sus unidades militares haga exactamente en esa Campaña. También puede realizar “gastos extra”, que se resuelven antes que las órdenes, tales como apaciguar una rebelión que está asolando una de sus regiones o el intento de asesinar a alguien. Las acciones de las unidades militares no cuestan dinero mientras que los gastos extra sí.</td>
  </tr>
  <tr>
    <td class="tg-qtfc">Fase de ejecución de órdenes y resolución de conflictos</td>
    <td class="tg-93t1">El DJ ejecuta lo especificado por los jugadores en la fase anterior. En primer lugar se resolverán los asesinatos, después los gastos extras y en último lugar el resto de órdenes que tienen las unidades.Allá donde surjan conflictos, estos se resuelven usando las reglas específicas de la “Fase de ejecución y resolución de conflictos”.</td>
  </tr>
  <tr>
    <td class="tg-uxr4" rowspan="4">VERANO</td>
    <td class="tg-4hfa">Fase de retirada de marcadores de hambre</td>
    <td class="tg-v7c1">Se retiran todos los marcadores de hambre del tablero.</td>
  </tr>
  <tr>
    <td class="tg-4hfa">Fase de plaga</td>
    <td class="tg-v7c1">Similar al hambre, aunque mucho más fulminante, se determina (mediante el azar) qué lugares son golpeados por la plaga. Ver “Desastres naturales”.</td>
  </tr>
  <tr>
    <td class="tg-4hfa" colspan="2">Fase de escribir las órdenes</td>
  </tr>
  <tr>
    <td class="tg-4hfa" colspan="2">Fase de ejecución de órdenes y resolución de conflictos</td>
  </tr>
  <tr>
    <td class="tg-xbnm" rowspan="2">OTOÑO</td>
    <td class="tg-3smg" colspan="2">Fase de escribir las órdenes</td>
  </tr>
  <tr>
    <td class="tg-3smg" colspan="2">Fase de ejecución de órdenes y resolución de conflictos</td>
  </tr>
</table>
<br />
<p>
Los jugadores tendrán que hacer un envío de e-mail siempre que surjan decisiones que a ellos corresponda tomar. Pueden ser necesarios hasta dos envíos por Campaña: </p>
<ul style="list-style-type: square;">
  <li style="margin-left: 70px;">Para la Fase de Ajustes Militares (solo campaña de primavera).</li>
  <li style="margin-left: 70px;">Para indicar las órdenes a realizar y os gastos extras</li>
  </ul>
          </div>
        </div>
      </section>  
    </div>
  </div>
</div>
</template>


<script>
import TopNavbar from "@/components/UIComponents/TopNavbar.vue";

    export default {
      components: {
            TopNavbar
          }
  }
</script>
<style scoped>
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-uxr4{background-color:#f8a102;color:#ffffff;vertical-align:top}
.tg .tg-xbnm{background-color:#643403;color:#ffffff;vertical-align:top}
.tg .tg-3smg{background-color:#ce6301;vertical-align:top}
.tg .tg-f078{background-color:#013300;color:#ffffff}
.tg .tg-qtfc{background-color:#49a749;vertical-align:top}
.tg .tg-93t1{background-color:#68cbd0;vertical-align:top}
.tg .tg-4hfa{background-color:#fffe65;vertical-align:top}
.tg .tg-v7c1{background-color:#fffc9e;vertical-align:top}
</style>