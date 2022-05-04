<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 2
      h1 Caracterización de comunidades

    .row
      .col-xl-8.col-sm-12(data-aos="flip-right")
        h4 En el proceso de tratamiento de agua potable es importante establecer las características socioeconómicas de la comunidad a ser atendida por el sistema.
        p(data-aos="fade-right") Dentro de las variables para tener en cuenta se encuentran:
        ul.lista-ul--color
          li.color-primario
            i.fas.fa-thumbtack
            | Las proyecciones de habitantes de la población en un horizonte de tiempo.
          li
            i.fas.fa-thumbtack
            | El ingreso per cápita.
          li 
            i.fas.fa-thumbtack
            | El tipo de administración del servicio (público, privado, mixto).

      .col-xl-4.col-sm-12(data-aos="flip-left")
        img.mb-4(src='@/assets/curso/tema2/imagen1.jpg')
    separador
    #observacion.titulo-segundo.color-acento-contenido.mt-5(data-aos="fade")
      h2 2.1 Observación de comunidades atendidas por el sistema de tratamiento y distribución de agua potable
    .row.justify-content-center
      .col-xl-4.col-sm-8(data-aos="zoom-right")
        img.mb-4(src='@/assets/curso/tema2/figura1.svg')
      .col-xl-8.col-sm-12(data-aos="flip-up")
        p Con el fin de establecer el grado de riesgo de la población atendida por el sistema, es necesario tener en cuenta 
          span.text-bold variables 
          span relacionadas con la 
          span.text-bold administración del servicio 
          span (tipo de empresa, conocimiento o experticia de los empleados, procesos de adquisición de insumos, etc.). De igual forma, es indispensable conocer el 
          span.text-bold número de suscriptores del servicio 
          span a atender por el sistema, así como el porcentaje de cobertura del sistema.
        p Es fundamental conocer si dentro del sistema de distribución de agua potable existe la 
          span.text-bold medición del agua consumida
          span , tanto de la salida de la planta de potabilización 
          span.text-bold (macromedición) 
          span como de cada suscriptor 
          span.text-bold (micromedición)
          span , para determinar el agua no contabilizada y por consiguiente no facturada en el sistema y las tarifas aplicadas a los suscriptores; también el presupuesto con el que cuenta la organización encargada de la administración del sistema. 
    p.my-5(data-aos="flip-down") Otro aspecto para considerar es el de la 
      span.text-bold estructura organizacional de la entidad o empresa 
      span encargada de la administración y operación del sistema de tratamiento y distribución del agua potable, así como la asesoría técnica y financiera con las que cuenta la empresa encargada del sistema.

    .row.mb-5.my-5.justify-content-center
      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fondo8.efecto-tarjeta.quitarRedondeo(data-aos="flip-right")
            .p-3
              p.text-center.text-dark.text-bold Macromedidor para agua potable
            img(src='@/assets/curso/tema2/imagen4.jpg')

      .col-md-4.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.fondo9.efecto-tarjeta.quitarRedondeo(data-aos="flip-left")
            .p-3
              p.text-center.text-dark.text-bold Micromedidor para agua potable
            img(src='@/assets/curso/tema2/imagen5.jpg')        

    .cajon.color-secundario.p-4.mb-4.fondo2(data-aos="flip-up")
      .row.justify-content-center.align-items-center.mb-4
        .col-xl-2.col-md-3.col-sm-8.col-8
          img.reducir2(src='@/assets/curso/tema2/figura2.svg')
        .col-xl-9.col-md-9.col-sm-10-col-11
          p.my-3 La 
            span.text-bold Resolución 330 de 2017 
            span (Reglamento Técnico para Sector de Agua Potable y Saneamiento Básico-RAS), expedida por el Ministerio de Vivienda, Ciudad y Territorio, establece en el 
            span.text-bold artículo 8° 
            span que, en relación con las actividades preliminares para llevar a cabo un proyecto relacionado con el sistema de potabilización en una población, se debe tener:

    .row.align-items-center.justify-content-center
      .col-xl-3.col-sm-6(data-aos="flip-right")
        img.ms-2(src='@/assets/curso/tema2/figura3.svg')
      .col-xl-8.col-sm-12.mb-5.mb-sm-0.mt-5.ms-5(data-aos="flip-up")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Diagnóstico detallado de la situación del municipio.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Determinación de la población afectada.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Características socioculturales de la población y participación comunitaria.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Cuantificación de la demanda y/o necesidades.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Diagnóstico y evaluación del sistema existente.      
    separador    
    #recopilacion.titulo-segundo.color-acento-contenido.my-3(data-aos="fade")
      h2 2.2 Recopilación de datos etnográficos

    .cajon.color-acento-contenido.p-4.mb-4.fondo2.my-5(data-aos="flip-down")
      .row.justify-content-center.align-items-center.mb-4
        .col-xl-2.col-md-3.col-sm-8.col-8
          img.reducir2(src='@/assets/curso/tema2/figura2.svg')
        .col-xl-9.col-lg-9.col-md-9.col-sm-10-col-11
          p.ms-4.mt-3 Colombia cuenta con la reglamentación técnica de los sistemas de acueducto y alcantarillado, compilada dentro del 
            span.text-bold Reglamento Técnico para Sector de Agua Potable y Saneamiento Básico (RAS)
            span , expedido por el Ministerio de Vivienda, Ciudad y Territorio en la 
            span.text-bold Resolución 330 de 2017
            span , donde se 
            span establece que: 


    ImagenInfografica.color-secundario.mb-5(data-aos="flip-up")
      template(v-slot:imagen)
        .row.justify-content-center
          .col-xl-6.col-sm-12
            figure
              img(src='@/assets/curso/tema2/figura4.svg')

      .tarjeta.fondo10.p-3.ampliar-tarjeta(x="40.8%" y="8%" numero="+" )
        .h5.mb-2(data-aos="flip-right") Artículo 249
        p Establece que “todo proyecto que se desarrolle en zonas de resguardo o reserva indígena o en zonas adjudicadas a comunidades negras deberá adelantar procesos de consulta previa, ante el Ministerio del Interior”.

      .tarjeta.fondo10.p-3.ampliar-tarjeta(x="58.6%" y="8%" numero="+" )
        .h5.mb-2 Artículo 3 (criterios orientadores):
        span.text-bold Numeral 7: 
        span “durante las etapas del proyecto, la interacción con la comunidad deberá ser proactiva y preventiva”, al referirse a los principios orientadores de la planeación, diseño y ejecución de las obras y de las actividades de operación y mantenimiento de sistemas de agua y saneamiento.

      .tarjeta.fondo10.p-3.ampliar-tarjeta(x="32.2%" y="41%" numero="+")
        .h5.mb-2 Artículo 245 (autorizaciones relacionadas con la gestión socioeconómica), numerales:
        span.text-bold Numeral 1: 
        span debe existir una “certificación sobre la existencia de comunidades étnicas en el área de influencia del proyecto expedida por el Ministerio de Interior. En caso de contar con la presencia de este tipo de comunidades, deberá adelantarse trámite de consulta previa, de acuerdo con los términos previstos por la ley”.
        br
        span.text-bold Numeral 2: 
        span debe existir un “certificado sobre la existencia o no de territorios legalmente titulados a resguardos indígenas o títulos colectivos pertenecientes a comunidades afrocolombianas en el área de influencia del proyecto, expedido por el Incoder”.

      .tarjeta.fondo10.p-3.ampliar-tarjeta(x="67.5%" y="41%" numero="+")
        .h5.mb-2 Artículo 26 (construcción de las obras requeridas para proyectos del sector de agua y saneamiento):
        span.text-bold Numeral 3: 
        span (medidas de gestión social, seguridad industrial y salud ocupacional): “los canales de comunicación deben ser apropiados entre los representantes de la comunidad y el constructor”.
        br
        span.text-bold Numeral 4: 
        span “los espacios de encuentro con las comunidades deben contar con una programación estructurada de los temas”, respectivamente.

      .tarjeta.fondo10.p-3.ampliar-tarjeta(x="40.8%" y="74%" numero="+")
        .h5.mb-2 Artículo 245 (autorizaciones relacionadas con la gestión socioeconómica), definición:
        p Establece que “se debe verificar el requerimiento de obtener las certificaciones que propenden por la protección de las comunidades especiales y del patrimonio histórico y cultural, de conformidad con la normatividad vigente”. 

      .tarjeta.fondo10.p-3.ampliar-tarjeta(x="58.6%" y="74%" numero="+")
        .h5.mb-2 Artículo 106 (definición del nivel de riesgo sanitario):
        p Establece que se debe efectuar una visita de inspección sanitaria a la microcuenca abastecedora por parte del responsable del proyecto de tratamiento de agua potable (el cual generalmente es la empresa prestadora del servicio de acueducto), con el fin de “estar enfocados a recopilar información de la comunidad e identificar prácticas inadecuadas que generen algún tipo de contaminación en la fuente de agua”.

    p.mb-4(data-aos="zoom-in") Finalmente y con el fin de sintetizar el contenido de este componente formativo se presenta el siguiente mapa conceptual:
    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade")
      h5 Figura 3
      span Análisis de riesgos en sistemas de agua y saneamiento - Información base para el diagnóstico del riesgo 
    img.ms-2(src='@/assets/curso/tema2/figura5.svg')
  
</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
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
