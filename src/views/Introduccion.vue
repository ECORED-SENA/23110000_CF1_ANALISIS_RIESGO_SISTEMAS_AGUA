<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5 
      .col-lg-6
        figure.mb-4
          img.mb-4(src="@/assets/curso/introduccion/img01.png")
      .col-lg-5
        p.pt-5 Los sistemas de tratamiento y distribución del agua potable se componen de diversos elementos que, dependiendo de la calidad del agua de la fuente de captación, en secuencia buscan entregar un agua de calidad segura para su consumo a una población y evitando la presencia de riesgos que puedan alterarla en su composición.
      .col-lg-1
        figure
          img(src="@/assets/curso/tema1/img05.svg")
      p.mb-3 A continuación, conocerá los temas que se tratarán en este componente formativo. ¡Muchos éxitos en su proceso de aprendizaje! 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.color-acento-contenido
      h2 Parámetros que contaminan el agua potable
    p.mb-4 En la siguiente infografía se presenta la información relacionada con los parámetros que pueden alterar la calidad del agua potable, factor de riesgo en los sistemas de tratamiento y distribución:
    figure.mb-4
      img.mb-4(src="@/assets/curso/introduccion/img02.svg")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
