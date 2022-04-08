<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Principios básicos de tratamiento y distribución de agua potable
    .row.justify-content-center
      .col-xl-8.col-md-12
        p De acuerdo con Romero (2000), “la purificación del agua es uno de los problemas de las ingenierías civil y ambiental de más urgente solución”. De igual manera, este autor expresa que se debe proveer agua potable a toda la sociedad para garantizar bienestar y comodidad. Sin embargo, existen riesgos dentro del sistema de tratamiento y distribución de agua que se deben tener en cuenta, con el fin de contar con agua de calidad óptima y segura para consumo humano.
        p.mb-4 Teniendo en cuenta lo anterior, existen múltiples sistemas de captación y tratamiento de agua destinada para el consumo humano, dependiendo de la calidad del agua cruda, que se define como el “agua natural que no ha sido sometida a proceso de tratamiento para su potabilización”, de acuerdo con el Decreto 1575 de 2007 (por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua para Consumo Humano), la cual tiene variaciones de una fuente de captación a otra (ríos, quebradas, embalses, lagos naturales, manantiales, agua lluvia, pozos de agua subterránea).
      .col-xl-4.col-md-8
        img.mb-4(src='@/assets/curso/tema1/imagen1.jpg')
    .cajon.color-secundario.p-4.mb-4.fondo2
      p.ms-4 Es por esta razón que los componentes de los sistemas de tratamiento de agua potable varían también. Dichos componentes se denominan operaciones unitarias, que se definen como operaciones básicas comunes basadas en procesos físicos, químicos o biológicos (Machuca y Hervás, 2012), que pueden componer un sistema de tratamiento de agua potable.
    #operunit.titulo-segundo.color-acento-contenido
      h2 1.1 Operaciones unitarias en sistemas de tratamiento y distribución de agua potable
    p Cuando se diseña y se da en funcionamiento una planta de tratamiento de agua potable se requiere de un estudio de la calidad de agua de fuente de abastecimiento o captación y, de esta manera, la selección apropiada de los procesos y operaciones de tratamiento adecuados, con el fin de producir agua de la calidad requerida en las normas (Romero, 2000). 
    p.mb-4 Según (Gallego, Bravo, García y Paniagua, 2018), “el agua se considera apta para el consumo humano cuando no contiene ningún tipo de microorganismo, parásito o sustancia, en una cantidad o concentración que pueda suponer un riesgo para la salud humana” (p. 328), por lo que se deben emplear operaciones de tratamiento.
    .row.justify-content-center
      .col-10
        .bloque-texto-g.fondo3.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/figura1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las aguas naturales habitualmente no tienen las características microbiológicas y fisicoquímicas apropiadas para ser consideradas aptas para el consumo humano por lo que es necesario someterlas a una serie de tratamientos físicos, químicos y biológicos para transformar el agua natural, procedente de embalses u otras captaciones, en agua potable; es decir, agua apta para el consumo humano sin riesgo para la salud y que cumpla con las normas legales sanitarias vigentes” (Gallego, Bravo, García y Paniagua, 2018).   

    p.my-4 Como ya se anotó, los tipos de tratamiento de potabilización que se realicen dependen de las características del agua cruda captada, así como de los criterios de calidad que existen en las normas actuales (Gallego, Bravo, García y Paniagua, 2018).
    p.mb-4 Es importante mencionar que, según lo anterior, en el tratamiento de agua para consumo humano se deben implementar diversos procesos u operaciones para su potabilización. En la Tabla 1 se presentan los procesos de tratamiento de agua potable más empleados:

    .titulo-sexto.color-acento-contenido.ms-5
      h5 Tabla 1
      span Procesos de tratamiento de agua potable
    .row.justify-content-center
      .col-xl-8.col-md-10.col-12
        .tabla-a.color-acento-contenido.mb-5 
          table
            caption Nota. Tomada de Romero (2000). 
            thead
              tr
                th Proceso
                th Propósito
              tr
                <th colspan="2" style="background-color:#FAFAFA;">Tratamiento preliminar</th>
            tbody
              tr
                td 
                  p.ms-5 Cribado
                td
                  p.ms-5 Remoción de desechos grandes que pueden obstruir o dañar los equipos de la planta.
              tr
                td
                  p.ms-5 Pretratamiento químico
                td
                  p.ms-5 Remoción eventual de algas y otros elementos acuáticos que causan sabor, olor y color.
              tr
                td 
                  p.ms-5 Pre-sedimentación
                td 
                  p.ms-5 Remoción de grava, arena, limo y otros materiales sedimentables.
              tr
                td 
                  p.ms-5 Aforo
                td 
                  p.ms-5 Medida del agua cruda por tratar.
              tr
                <td colspan="2" style="background-color:#FAFAFA; text-align: center; font-weight: bold">Tratamiento principal</td>
              tr
                td 
                  p.ms-5 Aireación
                td 
                  p.ms-5 Remoción de olores, y gases disueltos, adición de oxígeno para mejorar sabor.
              tr
                td 
                  p.ms-5 Coagulación / Floculación
                td 
                  p.ms-5 Conversión de sólidos no sedimentables en sólidos sedimentables.
              tr
                td 
                  p.ms-5 Sedimentación
                td 
                  p.ms-5 Remoción de sólidos sedimentables.
              tr
                td 
                  p.ms-5 Ablandamiento
                td 
                  p.ms-5 Remoción de dureza.
              tr
                td 
                  p.ms-5 Filtración
                td 
                  p.ms-5 Remoción de sólidos finos, floc en suspensión y la mayoría de los microorganismos.
              tr
                td 
                  p.ms-5 Absorción
                td 
                  p.ms-5 Remoción de sustancias orgánicas y color.
              tr
                td 
                  p.ms-5 Estabilización
                td 
                  p.ms-5 Prevención de incrustaciones y corrosión.
              tr
                td 
                  p.ms-5 Fluoración
                td 
                  p.ms-5 Prevención de caries dental.
              tr
                td 
                  p.ms-5 Desinfección
                td 
                  p.ms-5 Exterminio de organismos patógenos.

    p.my-4 En la siguiente figura se presentan los diagramas de flujo de las operaciones de tratamiento más empleadas en plantas de potabilización de agua.
    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span Diagramas de flujo de operaciones de tratamiento empleadas en potabilización de agua
    .row.justify-content-center
      .col-11
        img(src='@/assets/curso/tema1/figura2.svg')
    p.my-4 A continuación, se explican los procesos u operaciones más comunes empleados en plantas de tratamiento de agua para su potabilización, de acuerdo con Romero (2000):

    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.fondo5.p-4(titulo="Mezcla rápida 1/2")
        .row.justify-content-center
          .col-4
            p.text-bold 01. Mezcla rápida 1/2
            img.mt-5(src='@/assets/curso/tema1/figura3.svg')
          .col-8
            p Se utiliza para dispersar sustancias químicas y gases. La mezcla rápida puede ser empleada mediante turbulencia, provocada por medios hidráulicos o mecánicos:
            .row
              .col-sm.mb-5.mb-sm-0

                  ol.lista-ol
                    li 
                      span.text-bold a. 
                      | Resaltos hidráulicos en canales, canaletas Parshall.
                    li 
                      span.text-bold b. 
                      | Vertederos rectangulares.
                    li 
                      span.text-bold c. 
                      | Tuberías de succión de bombas.
                    li 
                      span.text-bold d. 
                      | Mezcladores mecánicos en línea.
                    li 
                      span.text-bold e. 
                      | Rejillas difusoras.
                    li 
                      span.text-bold e. 
                      | Chorros químicos.
                    li 
                      span.text-bold e. 
                      | Tanques con equipos de mezcla rápida.

      .tarjeta.fondo5.p-4(titulo="Mezcla rápida 2/2")
        .row.justify-content-center
          .col-4
            p.text-bold 02. Mezcla rápida 2/2
            img.mt-3(src='@/assets/curso/tema1/figura3.svg')
          .col-8
            p.mt-5 Con base en lo anterior, en los mezcladores de tipo hidráulico la mezcla se realiza producto de la turbulencia del régimen de flujo, mientras que en los mezcladores mecánicos se induce a través de unos impulsores de tipo rotatorio (hélice o turbina).

      .tarjeta.fondo5.p-4(titulo="Floculación 1/2")
        .row.justify-content-center
          .col-4
            p.text-bold 03. Floculación 1/2
            img.mt-5(src='@/assets/curso/tema1/figura4.svg')
          .col-8
            p Es la aglomeración de partículas coaguladas en la fase de mezcla rápida en partículas floculentas o flocs. Mediante este proceso, se presenta una mezcla suave de las  partículas para que se den encuentros o colisiones entre ellas sin romper los agregados que se han formado previamente. En esta operación, las fuerzas químicas y físicas influencian dicho encuentro de las partículas. Las fuerzas presentes en esta fase son:
            .row
              .col-sm.mb-5.mb-sm-0
                  ol.lista-ol
                    li 
                      span.text-bold a. 
                      | La carga eléctrica de las partículas.
                    li 
                      span.text-bold b. 
                      | El tamaño y concentración del floc.
                    li 
                      span.text-bold c. 
                      |  El pH.
                    li 
                      span.text-bold d. 
                      |  La temperatura el agua.
                    li 
                      span.text-bold e. 
                      | La concentración de los electrolitos.
      
      .tarjeta.fondo5.p-4(titulo="Floculación 2/2")
        .row.justify-content-center
          .col-4
            p.text-bold 04. Floculación 2/2
            img(src='@/assets/curso/tema1/figura4.svg')
          .col-8
            p.mt-4 Debido a que no se conocen de manera exacta los factores que participan de la floculación, se deben llevar a cabo ensayos de tratabilidad, denominados también ensayos o pruebas de jarras, con el fin de conocer el comportamiento del agua. En esta fase, cuando se introduce el coagulante y se mezcla con el agua, las partículas diminutas coaguladas se ponen en contacto una con la otra a través de agitación lenta prolongada, en donde se aglomeran, aumentan de tamaño y de densidad.
      .tarjeta.fondo5.p-4(titulo="Sedimentación")
        .row.justify-content-center
          .col-4
            p.text-bold 05. Sedimentación
            img.mt-5(src='@/assets/curso/tema1/figura5.svg')
          .col-8
            p Es la operación mediante la que se remueven coloides y partículas sólidas en suspensión a través de la fuerza de la gravedad; también se le denomina clarificación o espesamiento. En esta fase la eliminación de los sólidos dispersos se da gracias a la diferencia de peso específico entre las partículas sólidas y el líquido donde están (agua en tratamiento). Se encuentran dos tipos de sedimentación: 
            span.text-bold Sedimentación simple 
            span (tratamiento primario para reducir carga de sólidos sedimentables antes de la coagulación en la mezcla rápida).
            br
            br
            span.text-bold Sedimentación después de coagulación-floculación 
            span (remover sólidos sedimentables generados en tratamiento químico).
      
      .tarjeta.fondo5.p-4(titulo="Filtración")
        .row.justify-content-center
          .col-4
            p.text-bold 06. Filtración
            img.mt-5(src='@/assets/curso/tema1/figura6.svg')
          .col-8
            p Consiste en remover material suspendido (turbiedad del agua), el cual se compone de:
            .row
              .col-sm.mb-5.mb-sm-0
                  ol.lista-ol
                    li 
                      span.text-bold a. 
                      | Floc.
                    li 
                      span.text-bold b. 
                      | Materiales oxidados.
                    li 
                      span.text-bold c. 
                      |  Suelo.
                    li 
                      span.text-bold d. 
                      |  Microorganismos.
            p En esta etapa se cumple gran parte de la remoción de microorganismos, aunque algunos son resistentes a la desinfección, pueden ser retirados mediante la operación de filtración. Es decir, durante la filtración y al remover la turbiedad se inhibe la interferencia que esta pueda ocasionar durante la desinfección, puesto que se considera que provee de protección a los microorganismos en la fase de aplicación del desinfectante. La filtración se lleva a cabo mediante el paso del agua por un medio poroso.

      .tarjeta.fondo5.p-4(titulo="Desinfección")
        .row.justify-content-center
          .col-4
            p.text-bold 07. Desinfección
            img.mb-1(src='@/assets/curso/tema1/figura7.svg')
          .col-8
            p Esta operación o proceso consiste en la eliminación de microorganismos patógenos (bacterias, protozoarios y virus). Es importante mencionar que los organismos microscópicos pueden habitar en el agua por varias semanas, teniendo en cuenta algunos factores como:
            .row
              .col-sm.mb-5.mb-sm-0
                  ol.lista-ol
                    li 
                      span.text-bold a. 
                      | Temperatura.
                    li 
                      span.text-bold b. 
                      | PH.
                    li 
                      span.text-bold c. 
                      |  Oxígeno disuelto.

    p.my-4 Para complementar el tema de procesos u operaciones más comunes empleados en las PTAR para su potabilización, se solicita al aprendiz ver los videos La potabilización - Didáctica del agua y La ruta del agua potable en el pueblo de Carlitos ubicados en el material complementario, donde se muestran dichos procesos; además se invita a profundizar el tema con la lectura del documento Operación planta de tratamiento de agua potable, también ubicado en la sección de material complementario.

    #parametros.titulo-segundo.color-acento-contenido
      h2 1.2 Parámetros físico-químicos y microbiológicos del agua
    p.mb-4 El agua se considera apta para al consumo humano cuando está libre de sustancias contaminantes o microorganismos que se encuentren en una cantidad o concentración que puedan ser peligrosas para la salud de las personas (Gallego, Bravo, García y Paniagua, 2018); otros factores a tener en cuenta son: 

    SlyderB.mb-5(:datos="datosSlyder")
    p.my-4 La siguiente figura presenta el ciclo hidrológico natural sin la influencia de las actividades humanas.
    .titulo-sexto.color-acento-contenido
      h5 Figura 2
      span Ciclo hidrológico natural
    img.my-4(src='@/assets/curso/tema1/figura8.svg')
    p.mb-4 Entrando en materia, las sustancias que alteran la calidad del agua pueden presentarse de la siguiente manera (SENA, 2012)
    .row.align-items-center
      .col-xl-7.col-sm.mb-5.mb-sm-0.mt-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Sólidos gruesos flotantes.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Sólidos fácilmente sedimentables.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Sólidos muy finos en suspensión en el agua (coloides).
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Sólidos disueltos.
      .col-xl-4
        img.ms-4(src='@/assets/curso/tema1/figura9.svg')
    p.my-5 Es importante mencionar que la presencia y concentración de los sólidos en el agua dependen de las características de la cuenca (vegetación, suelos, estado) y del estado del tiempo (temporada de lluvias, temporada seca); de esta forma, los sólidos se pueden agrupar en tres tipos de características que agrupan los parámetros de calidad del agua potable, estas son (SENA, 2012):
    h2.mb-5 Características físicas
    p.mb-5 Se denominan físicas porque pueden ser detectadas por medio de los sentidos, lo cual implica que tienen incidencia directa sobre las condiciones estéticas del agua, es decir, en su buena presentación. Las características físicas del agua son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Turbiedad")
        .col-md-3.col-sm-4
          figure
            img(src='@/assets/template/tema1/figura1.svg')
        .col-md-8.mb-4.mb-md-0.col-sm-8
          p La turbiedad es el fenómeno óptico que se puede medir por la resistencia del agua al paso de la luz. Se debe a partículas que, en estado de suspensión como los coloides, le dan al líquido la capacidad de dispersar la luz, por ejemplo: tierras finamente divididas. La turbiedad debe tenerse en cuenta para la presentación del agua, pero, además, es importante la desinfección, ya que en esas partículas en suspensión se esconden pequeños organismos que se protegen del desinfectante.

      .row.justify-content-center(titulo="Color")
        .col-md-3.col-sm-4
          figure
            img(src='@/assets/template/tema1/figura2.svg')
        .col-md-8.mb-4.mb-md-0.col-sm-8
          p Es, en importancia, la segunda característica física del agua; a pesar de estar íntimamente ligado a la turbiedad, se presenta como una característica independiente de ella. El color se debe a diferentes componentes de la materia mineral y vegetal en descomposición; cuando se encuentran disueltos, reciben el nombre de color verdadero; si además hay presencia de arcillas o arenas que enturbien el agua, se le denomina color aparente.

      .row.justify-content-center(titulo="Olor y sabor")
        .col-md-3.col-sm-4
          figure
            img(src='@/assets/template/tema1/figura3.svg')
        .col-md-8.mb-4.mb-md-0.col-sm-8
          p El olor y sabor del agua son producidos fundamentalmente por:
          .row
            .col-sm.mb-5.mb-sm-0
                ol.lista-ol
                  li 
                    span.text-bold a. 
                    | Algas.
                  li 
                    span.text-bold b. 
                    | Desechos industriales.
                  li 
                    span.text-bold c. 
                    |  Sales de diferentes orígenes.

      .row.justify-content-center(titulo="Temperatura")
        .col-md-3.col-sm-4
          figure
            img(src='@/assets/template/tema1/figura4.svg')
        .col-md-8.mb-4.mb-md-0.col-sm-8
          p Se dice que el agua es fresca cuando está a unos 5 ºC por debajo de la temperatura del lugar. Es importante tenerla en cuenta, porque de esta dependen el tipo de organismos que puedan desarrollarse en el agua que también dependen de la cantidad de gases disueltos, la desinfección con cloro y las condiciones de tratamiento.
          p.text-bold.mb-0 La temperatura
          .row
            .col-sm.mb-5.mb-sm-0
                ol.lista-ol
                  li 
                    span.text-bold a. 
                    | Afecta la velocidad de las reacciones químicas.
                  li 
                    span.text-bold b. 
                    | Amplifica olores y sabores.
                  li 
                    span.text-bold c. 
                    |  Tiene incidencia en la presentación.

    h2.my-5 Características químicas
    p.mb-5 Por ser el agua un solvente universal, existe la posibilidad de presentar disueltos cantidad de compuestos y elementos, que pueden presentar efectos sobre la salud humana, las características químicas son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="pH (potencial de Hidrogeniones)")
        .col-md-7.mb-4.mb-md-0
          p Es importante considerar el pH del agua, porque tiene efecto sobre los procesos de tratamiento y se relación con la obstrucción y deterioro de las redes de acueducto. Además, el pH determina las reacciones químicas afectando, por ejemplo, el proceso de desinfección con cloro. Las actividades biológicas se desarrollan en un intervalo de pH entre el 6 y 8.

          p El pH se define como la intensidad de acidez y /o alcalinidad de una muestra de agua y se evalúa por una escala de valores, que se presenta a continuación:
        .col-md-3
          img(src='@/assets/curso/tema1/figura10.svg')

      .row.justify-content-center(titulo="Valor del pH aceptable")
        .col-md-7.mb-4.mb-md-0
          p Si el valor del pH del agua se encuentra entre 6,5 y 9,0 se considera aceptable para los procesos de tratamiento. La mayoría de las aguas superficiales que se encuentran dentro de este rango, lo que garantiza una buena desinfección y reducción de los problemas de corrosión. Se entiende, entonces, que el valor del pH no es tan importante desde el punto de vista de salud, como lo es desde el económico.
        .col-md-3
          figure
            img(src='@/assets/template/tema1/imagen6.jpg')

      .row.justify-content-center(titulo="Acidez")
        .col-md-7.mb-4.mb-md-0
          p.mt-5 La acidez del agua es una medida de la cantidad total de sustancias ácidas presentes en ella, expresadas como carbonato de calcio equivalente.
        .col-md-3
          figure
            img(src='@/assets/template/tema1/imagen7.jpg')

      .row.justify-content-center(titulo="Alcalinidad")
        .col-md-7.mb-4.mb-md-0
          p La alcalinidad del agua se mide por su capacidad para neutralizar ácidos. En aguas naturales la alcalinidad se debe principalmente a la disolución de rocas calizas. La alcalinidad es importante en el tratamiento del agua porque reacciona con coagulantes para favorecer la floculación. Tiene incidencia sobre el carácter incrustante que pueda tener en el agua y si está presente en altas cantidades tiene efecto sobre el sabor y la turbiedad. Un alto valor de la alcalinidad hace que el agua produzca efectos destructivos en las tuberías de acueducto, como el fenómeno de incrustación, que disminuye la capacidad de transporte de las tuberías.
        .col-md-3
          figure
            img(src='@/assets/template/tema1/imagen8.jpg')

      .row.justify-content-center(titulo="Dureza")
        .col-md-7.mb-4.mb-md-0
          p.mt-5 La dureza afecta procesos industriales y en algunos casos puede dar sabor al agua. Cuando las aguas son muy suaves o blandas disuelven rápidamente el jabón.
        .col-md-3
          figure
            img(src='@/assets/template/tema1/imagen8.jpg')

      .row.justify-content-center(titulo="Oxígeno disuelto")
        .col-md-7.mb-4.mb-md-0
          p Las aguas poco contaminadas están saturadas de oxígeno disuelto; si a estas aguas se les descargan residuos orgánicos se les agota el oxígeno disuelto, debido a que es empleado por microorganismos para degradar la materia orgánica. 
          p El oxígeno en el agua permite la existencia de peces y plantas, y le da un sabor agradable al agua.
        .col-md-3
          figure
            img(src='@/assets/template/tema1/imagen9.jpg')

    h2.my-5 Características microbiológicas
    p.mb-5 Las aguas naturales tienen asociados una serie de organismos que son habitantes normales en ella como:
    .row.justify-content-center
      .col-10
        img(src='@/assets/curso/tema1/figura11.svg')

    p.mb-4 La contaminación producida por el ser humano, ocasiona que las aguas puedan contener algunos microorganismos perjudiciales para la salud humana. La determinación de la presencia de estos organismos en el agua es difícil y poco práctica para realizarla como actividad de rutina.
    .cajon.color-acento-contenido.p-4.mb-4.fondo6
      p.ms-4 A través de los análisis bacteriológicos se determina el riesgo que involucra consumir el agua; los análisis bacteriológicos en el agua buscan determinar el nivel de bacterias coliformes que, normalmente, no son nocivas para la salud, son habitantes normales del tracto intestinal del hombre y de los animales y en cada deposición se encuentran en grandes cantidades. Estas características hacen que se les considere como indicadores de la calidad bacteriológica del agua.
    .row
      .col-xl-6.col-sm-12.mb-4
        .bloque-texto-b.fondo7.ps-0.pt-4.pb-4.pe-4
          .bloque-texto-b__texto
            p.mb-0 Cuando se realiza un análisis bacteriológico en el agua y se encuentra presencia de coliformes, se deduce que existe contaminación por materia fecal y es probable que existan otras bacterias, protozoos o virus nocivos. En conclusión, el agua que tiene coliformes no es apta para el consumo humano. La calidad bacteriológica se expresa como Número Más Probable (NMP) en 100 mililitros de agua o en Unidades Formadoras de Colonias (UFC).
      .col-xl-6.col-sm-12.mb-4
        img.mb-2(src='@/assets/curso/tema1/imagen2.jpg')
        .titulo-sexto.color-acento-contenido
          span Bacterias coliformes en placas de Petri
    #insumos.titulo-segundo.color-acento-contenido
      h2 1.3 Insumos empleados en potabilización de agua
    .row.justify-content-center.align-items-center
      .col-xl-4.col-sm-12.mb-4
        img.mb-2(src='@/assets/curso/tema1/figura12.svg')
      .col-xl-7.col-sm-12.mb-4.ms-4
        p En la potabilización del agua se emplean diversos insumos químicos, que tienen la función de minimizar los efectos contaminantes en los parámetros físico-químicos y microbiológicos. De esta manera, para algunas de las operaciones unitarias o fases del proceso de tratamiento de agua potable, se encuentran los siguientes insumos:
    
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-12
            figure
              img(src='@/assets/template/tema1/imagen10.jpg')

          .col-md-12.mb-4.mb-md-0
            h5.mt-3.mb-2 Coagulación - Floculación
            p Sulfato de aluminio, aluminato sódico, policloruro de aluminio, cloruro férrico, sulfato férrico, sulfato ferroso, polielectrolitos (aniónicos, catiónicos y no iónicos).

        .row
          .col-md-12
            figure
              img(src='@/assets/template/tema1/figura5.svg')
          .col-md-12.mb-4.mb-md-0
          h5.mt-3.mb-2 Desinfección
          p Cloro y sus compuestos, ozono, agua oxigenada; en la imagen se muestra la instalación de equipo para la cloración de agua potable.


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'La Organización Mundial de la Salud (OMS), agencia perteneciente a la Organización de las Naciones Unidas (ONU), establece lineamientos relacionados con la protección de la salud pública asociada a la calidad del agua potable, bajo un enfoque integral de gestión preventiva del riesgo para garantizar la calidad del agua potable (Organización Mundial de la Salud - OMS, 2017). Así mismo, y en sintonía con lo establecido en el ámbito internacional por la OMS, en Colombia la Resolución 2115 de 2007 establece los valores máximos aceptables de los parámetros o características físicas, químicas y biológicas como criterios de calidad del agua para consumo humano.',
        imagen: require('@/assets/template/tema1/imagen1.jpg'),
      },
      {
        texto:
          'En general, el agua contiene diversas sustancias o parámetros de manera natural que pueden ser factores de riesgo en una población, si el sistema de tratamiento no está acondicionado para minimizar las cargas contaminantes que puedan existir en el agua cruda. De esta forma, se pueden encontrar criterios de calidad en el agua destinada para el consumo humano basados en parámetros físicos, químicos y biológicos.',
        imagen: require('@/assets/template/tema1/imagen2.jpg'),
      },
      {
        texto:
          'En este orden de ideas, el agua cruda de las fuentes de abastecimiento de los sistemas de tratamiento de agua potable puede estar alterada en su composición por su origen natural o de carácter antrópico (producida por actividades humanas). De manera natural, el agua cruda puede ser alterada por partículas de polvo y gases cuando se presenta la lluvia o precipitación, y cuando cae al suelo escurre por la superficie arrastrando materiales orgánicos (provenientes de organismos vivos) e inorgánicos (minerales, productos químicos, etc.), y ocurre de igual forma cuando se infiltra en el suelo.',
        imagen: require('@/assets/template/tema1/imagen3.jpg'),
      },
      {
        texto:
          'Por su origen antrópico, el agua cruda puede alterarse por las descargas sin tratamiento de aguas residuales (domésticas y no domésticas o industriales), descargas de residuos sólidos domésticos o industriales o por descargas de fertilizantes y pesticidas agrícolas.',
        imagen: require('@/assets/template/tema1/imagen4.jpg'),
      },
      {
        texto:
          'En este aspecto es importante recordar el ciclo natural hidrológico o ciclo natural del agua, definido por el Servicio Geológico de los Estados Unidos (USGS, por sus siglas en inglés) como: “la presencia y el movimiento del agua en la tierra y sobre ella. El agua de la tierra está siempre en movimiento y constantemente cambiando de estado, desde líquido, a vapor, a hielo, y viceversa. El ciclo del agua ha estado ocurriendo por billones de años, y la vida sobre la tierra depende de él; la Tierra sería un sitio inhóspito si el ciclo del agua no tuviese lugar.',
        imagen: require('@/assets/template/tema1/imagen5.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
