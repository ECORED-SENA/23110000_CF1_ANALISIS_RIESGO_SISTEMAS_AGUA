<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0(data-aos="flip-right")
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/curso/actividad/seleccion-multiple.svg", alt="Actividad didáctica")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo(data-aos="fade")
          h2 Comprensión de contenidos CF001
        p.mb-4(data-aos="flip-down") Comprender conceptos básicos para la elaboración del diagnóstico del riesgo del sistema de agua potable.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0(data-aos="flip-up")
              p.fw-bold.mb-0 Preguntas de opción múltiple con única respuesta.
            .col-auto(data-aos="flip-right")
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1/Actividad didáctica - Storyline output/Actividad didáctica - Storyline output/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
