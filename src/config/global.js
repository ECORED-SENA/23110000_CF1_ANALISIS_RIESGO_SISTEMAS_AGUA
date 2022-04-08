export default {
  global: {
    componenteFormativo: 'Información base para el diagnóstico del riesgo',
    descripcionCurso:
      'Para establecer el riesgo en un sistema de tratamiento y distribución de agua potable es necesario conocer los principios básicos de la operación de dichos sistemas y los parámetros de medición necesarios en la potabilización del agua. De la misma manera, es importante caracterizar la población beneficiaria del sistema con el fin de conocer sus necesidades.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/fondo-banner-interno.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Principios básicos de tratamiento y distribución de agua potable',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Operaciones unitarias en sistemas de tratamiento y distribución de agua potables',
            hash: 'operunit',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Parámetros físico-químicos y microbiológicos del agua',
            hash: 'parametros',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Insumos empleados en potabilización de aguas',
            hash: 'insumos',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Caracterización de comunidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Observación de comunidades atendidas por el sistema de tratamiento y distribución de agua potable',
            hash: 'observacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Recopilación de datos etnográficos',
            hash: 'recopilacion',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 1575 de 2007. (s.f.). Decreto 1575 de 2007. Por el cual se establece el Sistema para la Protección y Control de la Calidad del Agua. Colombia.',
      link:
        'https://www.minambiente.gov.co/images/GestionIntegraldelRecursoHidrico/pdf/Disponibilidad-del-recurso-hidrico/Decreto-1575-de-2007.pdf',
    },
    {
      referencia:
        'Gallego, P., A., Bravo, Y., J., García, M., M., y Paniagua, G., G. (2018). Criterios de calidad y gestión del agua potable. ENAD',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/111749',
    },
    {
      referencia:
        'Machuca, S., D. I., y Hervás, T., M. (2012). Operaciones unitarias y proceso químico. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/42673',
    },
    {
      referencia:
        'Organización Mundial de la Salud - OMS. (2017). Guías para la calidad del agua de consumo humano.',
      link: 'https://www.who.int/es/publications/i/item/9789241549950',
    },
    {
      referencia:
        'Romero, R., J. A. (2000). Purificación del agua. Escuela Colombiana de Ingeniería.',
    },
    {
      referencia:
        'SENA. (2012). Operación de sistemas de potabilización de agua. [Curso virtual]. SENA.',
    },
    {
      referencia:
        'Universidad Cooperativa de Colombia. (s.f.). Operación PTAP. Universidad Cooperativa de Colombia.',
      link:
        'https://www.ibal.gov.co/sites/default/files/ibal/sites/default/files/images/stories/OPERACION%20PTAP.pdf',
    },
    {
      referencia: 'USGS. (s.f.). El ciclo del agua. The Water Cycle, Spanish.',
      link:
        'https://www.usgs.gov/special-topic/water-science-school/science/el-ciclo-del-agua-water-cycle-spanish?qt-science_center_objects=0#qt-science_center_objects',
    },
    {
      referencia:
        'Rodríguez, M. (s.f.). Propuesta de plan director de agua potable para las localidades de Unquillo y Mendiolaza.',
      link:
        'https://rdu.unc.edu.ar/bitstream/handle/11086/792/000-GLOSARIO.pdf?sequence=3&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'dar o proveer suficientemente de agua potable a una población (Rodríguez, s.f.).',
    },
    {
      termino: 'Ablandamiento',
      significado:
        'eliminación del calcio y el magnesio de un agua para reducir su dureza (Rodríguez, s.f.).',
    },
    {
      termino: 'Afluente',
      significado:
        'curso de agua de ingreso a la planta de potabilización (Rodríguez, s.f.).',
    },
    {
      termino: 'Agua potable',
      significado:
        'aquella que puede beberse sin peligro, no provoca ningún daño para la salud (Rodríguez, s.f.).',
    },
    {
      termino: 'Agua subterránea',
      significado:
        'agua que puede ser encontrada en la zona satura del suelo; zona que consiste principalmente en agua. Se mueve lentamente desde lugares con alta elevación y presión hacia lugares de baja elevación y presión, como los ríos y lagos (Rodríguez, s.f.).',
    },
    {
      termino: 'Agua superficial',
      significado:
        'toda agua natural abierta a la atmósfera, concerniente a ríos, lagos, reservorios, charcas, corrientes, océanos, mares, estuarios y humedales (Rodríguez, s.f.).',
    },
    {
      termino: 'Almacenamiento',
      significado:
        'depósito donde se guarda cierta cantidad de agua para su posterior utilización (Rodríguez, s.f.).',
    },
    {
      termino: 'Caudal',
      significado:
        'flujo de agua superficial en un río o en un canal (Rodríguez, s.f.).',
    },
    {
      termino: 'Coagulantes',
      significado:
        'partículas líquidas en suspensión que se unen para crear partículas con un volumen mayor (Rodríguez, s.f.).',
    },
    {
      termino: 'Concentración',
      significado:
        'cantidad de material disuelto en una unidad de solución, expresado en miligramos por litro (mg/L) (Rodríguez, s.f.).',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'análisis que se realiza para determinar cualquier situación y cuáles son las tendencias. Esta determinación se realiza sobre la base de datos y hechos recogidos y ordenados sistemáticamente, que permiten juzgar mejor qué es lo que está pasando (Rodríguez, s.f.).',
    },
    {
      termino: 'Infraestructura',
      significado:
        'conjunto de elementos o servicios que se consideran necesarios para la creación y funcionamiento de una organización (Rodríguez, s.f.).',
    },
    {
      termino: 'Mantenimiento',
      significado:
        'conjunto de operaciones y cuidados necesarios para que las instalaciones hidráulicas y sanitarias puedan seguir funcionando adecuadamente (Rodríguez, s.f.).',
    },
    {
      termino: 'Microorganismos',
      significado:
        'organismos muy pequeños que solo pueden ser observados a través del microscopio (Rodríguez, s.f.).',
    },
    {
      termino: 'OMS',
      significado: 'Organización Mundial de la Salud.',
    },
    {
      termino: 'ONU',
      significado: 'Organización de las Naciones Unidas.',
    },
    {
      termino: 'Parámetro',
      significado:
        'variable, propiedad medible cuyo valor está determinado por las características del sistema en el caso del agua, por ejemplo, estas pueden ser la temperatura, la presión, la densidad, etc. (Rodríguez, s.f.).',
    },
    {
      termino: 'PTAP',
      significado: 'Planta de Tratamiento de Agua Potable.',
    },
    {
      termino: 'PTAR',
      significado: 'Planta de Tratamiento de Aguas Residuales.',
    },
    {
      termino: 'RAS',
      significado:
        'Reglamento Técnico para Sector de Agua Potable y Saneamiento Básico.',
    },
    {
      termino: 'USGS',
      significado: 'Servicio Geológico de los Estados Unidos. ',
    },
  ],
  complementario: [
    {
      texto:
        'Universidad Cooperativa de Colombia. (s.f.). Operación PTAP. Universidad Cooperativa de Colombia.”',
      tipo: 'Documento PDF',
      link:
        'https://www.ibal.gov.co/sites/default/files/ibal/sites/default/files/images/stories/OPERACION%20PTAP.pdf',
    },
    {
      texto:
        'Ómnium, G. (2015). La potabilización - Didáctica del agua. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nq70X1TPRRA',
    },
    {
      texto:
        'PNSR. (2016). La ruta del agua potable en el pueblo de Carlitos. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AQvuKNcuv1s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Alexander Gómez Reyes',
        cargo: 'Instructor',
        centro: 'Regional Valle - Centro de la Construcción',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología Regional distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín ',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
