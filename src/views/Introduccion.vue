<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción
    p(data-aos="zoom-in") Los sistemas de tratamiento y distribución del agua potable se componen de diversos elementos que, dependiendo de la calidad del agua de la fuente de captación, en secuencia buscan entregar un agua de calidad segura para su consumo a una población y evitando la presencia de riesgos que puedan alterarla en su composición.
    p.mb-4(data-aos="zoom-right") A continuación, conocerá los temas que se tratarán en este componente formativo. ¡Muchos éxitos en su proceso de aprendizaje!    
    figure.mb-4
      .video(data-aos="flip-right")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-4 En la siguiente infografía se presenta la información relacionada con los parámetros que pueden alterar la calidad del agua potable, factor de riesgo en los sistemas de tratamiento y distribución:
    h3.mb-4 Parámetros que contaminan el agua potable 
    p.mb-4 Existen amenazas que ponen en riesgo el suministro de agua potable en una población, las cuales deben ser identificadas:

    .row.mb-2
      .col-md-6.col-lg.mb-2.mb-lg-0.altura
        .tarjeta-avatar.efecto-tarjeta(data-aos="flip-left")
          .tarjeta.fondo1
            img.m-0.p-0(src='@/assets/curso/intro/sobrefondo.png')
            img.reducir.subirImg(src='@/assets/componentes/intro/organico.svg' alt='AvatarCenter')
            .text-white.pe-3.ps-3.pb-2
              p.text-bold.textoPeq.margen-titulo Residuos biodegradables
              p.textoPeq Cumplir con las funciones y responsabilidades de gestión de riesgo de Materia fecal, restos de alimentos, grasas y aceites (aumento  nutrientes, aumento demanda  bioquímica de oxígeno, disminución de oxígeno disuelto).

      .col-md-6.col-lg.mb-2.mb-lg-0
        .tarjeta-avatar.efecto-tarjeta(data-aos="flip-right")
          .tarjeta.fondo1
            img.m-0.p-0(src='@/assets/curso/intro/sobrefondo.png')
            img.reducir.subirImg(src='@/assets/componentes/intro/plastico.svg' alt='AvatarTop')
            .text-white.pe-3.ps-3.pb-2
              p.text-bold.textoPeq.margen-titulo Residuos no biodegradables
              p.textoPeq Plaguicidas y fertilizantes (presencia de larga permanencia de elementos químicos nocivos, alteraciones químicas y físicas, disminución del oxígeno disuelto).

      .col-md-6.col-lg.mb-2.mb-lg-0
        .tarjeta-avatar.efecto-tarjeta(data-aos="flip-up")
          .tarjeta.fondo1
            img.m-0.p-0(src='@/assets/curso/intro/sobrefondo.png')
            img.reducir.subirImg(src='@/assets/componentes/intro/microorganismos.svg' alt='AvatarTop')
            .text-white.pe-3.ps-3.pb-2
              .row
                .col-12
                  p.text-bold.textoPeq.margen-titulo Microorganismos patógenos
                  p.textoPeq Bacterias, virus, protozoarios, parásitos (aumento demanda bioquímica de oxígeno, disminución de oxígeno disuelto).

      .col-md-6.col-lg.mb-2.mb-lg-0.altura
        .tarjeta-avatar.efecto-tarjeta(data-aos="flip-up")
          .tarjeta.fondo1
            img.m-0.p-0(src='@/assets/curso/intro/sobrefondo.png')
            img.reducir.subirImg(src='@/assets/componentes/intro/sustancias.svg' alt='AvatarTop')
            .text-white.pe-3.ps-3.pb-2
              .row
                .col-12
                  p.text-bold.textoPeq.margen-titulo Sustancias generadas por fenómenos  naturales y sociales
                  p.textoPeq Aporte de contaminantes directos e indirectos (en la cuenca abastecedora, entre la captación y la salida de la planta de tratamiento, entre la salida de la planta de tratamiento y acometidas domiciliarias).

</template>
<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
