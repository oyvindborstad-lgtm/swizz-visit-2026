/* ============================================================
   Metode-demo — ESPAÑOL.  window.MD_TX.es
   ============================================================ */
window.MD_TX = window.MD_TX || {};
window.MD_TX.es = {

  circle: {
    hub: {
      short: "El proyecto", csub: "Liderazgo colaborativo", title: "Liderazgo colaborativo — el núcleo",
      role: "El proyecto en el centro · el eje de la rueda",
      ansvar: ["Fija metas, dirección y takt comunes para toda la rueda",
        "Lidera la colaboración e impulsa los procesos Lean desde el primer día",
        "Es dueño de la estructura de reuniones y del ritmo de decisión",
        "Asegura que todos los grupos tiren en la misma dirección, hacia la misma meta",
        "Elimina los obstáculos que los grupos no pueden resolver solos",
        "Construye una cultura de confianza, transparencia y mejora continua"],
      samspill: "El proyecto está en el centro, y en el núcleo está el liderazgo colaborativo. Todo lo demás se organiza alrededor de esto — no como una jerarquía, sino como una rueda donde la cercanía al núcleo refleja cuán estrechamente se trabaja hacia la meta.",
      tips: "El núcleo no es un jefe — es la meta común hacia la que todos optimizan. Es el rol que Lean Communications asume con más frecuencia."
    },
    nodes: {
      PL: { short: "Dirección de proyecto", title: "Dirección de proyecto", role: "El conjunto — avance, coste y calidad",
        ansvar: ["Responsabilidad global de avance, coste y calidad", "Enlace con el cliente, los usuarios y el comité de dirección", "Es dueño de la estructura de reuniones y de los procesos de decisión", "Gestiona el contrato, las metas y el modelo de incentivos", "Asegura que los recursos y el personal correspondan al takt", "Punto de escalado cuando los grupos se bloquean"],
        samspill: "Fija el marco dentro del cual los grupos resuelven — lidera la dirección, pero no decide solo. Escucha hacia abajo en la rueda y obtiene la base de decisión donde se hace el trabajo.",
        tips: "La dirección escucha hacia abajo en la rueda antes de decidir." },
      PRL: { short: "Dirección de diseño", title: "Dirección de diseño", role: "Del modelo a la documentación construible",
        ansvar: ["Lidera el diseño multidisciplinar hacia la producción", "Gestiona la madurez y el orden correcto de decisiones", "Es dueño de las reuniones ICE/VDC y del proceso basado en modelo", "Asegura la aclaración multidisciplinar y el control de colisiones", "Entrega documentación de trabajo al ritmo de la producción", "Gestiona el plan de entregas de diseño (PED)"],
        samspill: "Conecta los grupos de disciplina con el takt de la producción y se asegura de que la documentación esté lista antes de que empiece el área de control — no después.",
        tips: "El diseño está terminado cuando la producción puede construir — no cuando el plano queda «bonito»." },
      PRODL: { short: "Dirección de producción", title: "Dirección de producción", role: "La obra — takt y flujo en el campo",
        ansvar: ["Es dueño de la producción y del plan de takt en la obra", "Dirige los trenes a través de las áreas de control", "Elimina obstáculos y asegura el flujo entre los oficios", "Hace seguimiento de SST, calidad y finalización en el campo", "Dirige la reunión de takt diaria/semanal con las cuadrillas", "Da retroalimentación al diseño sobre la constructibilidad"],
        samspill: "Es la voz de «el terreno» dentro de la dirección — y asegura que quienes realmente construyen participen en planificar cómo.",
        tips: "Quien construye debe participar en la planificación." },
      IL: { short: "Dirección de compras", title: "Dirección de compras", role: "La entrega correcta al takt correcto",
        ansvar: ["Compras estratégicas vinculadas al takt y al avance", "Involucración temprana de proveedores y subcontratistas", "Gestión de contratos e interfaces entre las partes", "Es dueño del plan de compras frente al plan de producción", "Asegura la calidad y los plazos correctos en los acuerdos", "Sigue el mercado y gestiona el riesgo de precio y entrega"],
        samspill: "Asegura que la entrega correcta esté en su sitio al takt correcto, y que los proveedores formen parte del equipo — no una contraparte.",
        tips: "Las compras son parte del plan — no un efecto posterior." },
      RL: { short: "Gestión de riesgos", title: "Gestión de riesgos", role: "La incertidumbre — visible y gestionada",
        ansvar: ["Es dueño del panorama global de riesgo del proyecto", "Opera el registro de riesgos, las medidas y el seguimiento", "Vincula el riesgo al cálculo, al takt y a las decisiones", "Cuantifica la incertidumbre (coste y tiempo)", "Asegura que el riesgo se reduzca antes de llegar a la obra", "Sigue las oportunidades, no solo las amenazas"],
        samspill: "Es una premisa para todos los grupos de la rueda — la incertidumbre se posee donde surge, pero se gestiona en conjunto.",
        tips: "El riesgo que no cuesta en el cálculo es riesgo que no estás gestionando." },
      GLM: { short: "Reunión de líderes", title: "La reunión de líderes de grupo", role: "«Scrum de scrums» — el pegamento de la rueda",
        ansvar: ["Reúne a todos los líderes de grupo — como un «scrum de scrums»", "Asegura metas comunes, interfaces y el conjunto", "Aclara las dependencias entre los grupos", "Da a la dirección visión del avance y los obstáculos", "Toma las decisiones que mantienen el flujo", "Ancla el takt y las prioridades de forma transversal"],
        samspill: "Quizá la reunión más importante de toda la rueda: aquí vemos que todos los grupos trabajan hacia la misma meta, y tomamos las decisiones necesarias para que nada se detenga.",
        tips: "Sin una reunión de líderes que funcione bien, la multidisciplinariedad se desmorona." },
      FGA: { short: "Cimientos & estructura", title: "Grupo de disciplina: Terreno, cimientos y estructura", role: "Equipo multifuncional — marca el ritmo",
        ansvar: ["Equipo multifuncional para terreno, cimientos y estructura", "Trabaja en sprints de 1–2 semanas", "Es dueño de toda la cadena, de la solución al montaje", "Coordina geotecnia, estructura y ejecución", "Marca el takt que siguen los demás trenes", "Aclara tolerancias e interfaces hacia la fachada"],
        samspill: "Marca el ritmo que siguen los demás trenes — y atrae geotecnia y estructura en pull cuando hay que aclarar premisas.",
        tips: "Multifuncional significa que la disciplina posee toda la cadena — no solo el plano o la obra." },
      FGB: { short: "Cubierta & fachada", title: "Grupo de disciplina: Cubierta y fachadas", role: "La envolvente — hacia un edificio estanco",
        ansvar: ["Envolvente: cubierta, fachada, ventanas y sellado", "Desarrollo por sprints hacia un edificio estanco", "Coordina tolerancias, fijaciones y montaje", "Asegura estanqueidad al agua, calor y aire con la física del edificio", "Planifica andamios, grúa y logística en altura", "Cuelga las entregas del takt de la estructura"],
        samspill: "Se mantiene cerca de la estructura y los sistemas técnicos — el edificio estanco es el hito que desbloquea todo el trabajo interior.",
        tips: "Un edificio estanco temprano desbloquea todos los trenes interiores." },
      FGC: { short: "Sistemas técnicos", title: "Grupo de disciplina: Sistemas técnicos", role: "Clima, electricidad y automatización como uno",
        ansvar: ["Climatización, electricidad y automatización como un equipo único", "Recorridos, patinillos e integración técnica (ITB)", "Control de colisiones en el modelo antes de la producción", "Puesta en marcha, pruebas y ajuste", "Coordina salas técnicas y capacidades", "Planifica las entregas frente al takt"],
        samspill: "Resuelve las interfaces entre las disciplinas técnicas por sprints — y atrae las premisas de clima/electricidad en pull cuando se necesitan.",
        tips: "Las disciplinas técnicas deben planificarse juntas, no por separado." },
      FGD: { short: "Interior", title: "Grupo de disciplina: Trabajos interiores", role: "Hacia la finalización y la entrega",
        ansvar: ["Tabiques, techos, suelos, acabados y mobiliario", "Trabajo por sprints hacia la finalización", "Estandarización y repetición de espacios", "Coordina la secuencia frente a las disciplinas técnicas", "Asegura calidad y acabado en la entrega", "Planifica las entregas de mobiliario al takt"],
        samspill: "Sigue a los sistemas técnicos en el takt — y estandariza espacios temprano para que la repetición dé flujo y calidad uniforme.",
        tips: "La repetición es la amiga del oficio interior — estandariza temprano." },
      PGK: { short: "Cálculo dinámico", title: "Grupo de proceso: Cálculo dinámico", role: "Coste vivo en libro abierto",
        ansvar: ["Cálculo vivo en libro abierto, actualizado de forma continua", "Vincula cada decisión al coste y a la madurez", "Sigue la evolución hacia el precio objetivo", "Hace visible a las disciplinas la consecuencia de las opciones", "Es dueño de la incertidumbre del estimado y de las reservas", "Reporta con transparencia a todas las partes"],
        samspill: "Da a todos los grupos el coste real en tiempo real, para que las decisiones se tomen sobre cifras que de verdad se sostienen.",
        tips: "El cálculo está vivo — no es un documento final." },
      PGI: { short: "Compras & riesgo", title: "Grupo de proceso: Compras y riesgo", role: "Entregas e incertidumbre, a nivel operativo",
        ansvar: ["Compras operativas vinculadas al takt", "Registro de riesgos y seguimiento activo de medidas", "Proveedores en el proceso de forma temprana", "Aclara las interfaces entre entregas", "Sigue los plazos de entrega y los pedidos críticos", "Cuantifica y cierra el riesgo de forma continua"],
        samspill: "Se asegura de que la incertidumbre y las entregas se gestionen antes de llegar a la obra — muy ligado al cálculo y a la planificación.",
        tips: "Las compras tempranas sacan el riesgo del proyecto." },
      PGP: { short: "Planificación", title: "Grupo de proceso: Planificación (takt)", role: "Un takt común para todo el proyecto",
        ansvar: ["Plan de producción basado en takt", "Plan de diseño de detalle y compras al takt", "Plan de decisiones del cliente vinculado al takt", "Define áreas de control y secuencia de trenes", "Mantiene los planes sincronizados y actualizados", "Mide la fiabilidad del plan (PPC) y mejora"],
        samspill: "Une todos los planes a un único takt — cuando los planes comparten takt, todo el proyecto habla el mismo idioma.",
        tips: "Cuando los planes comparten takt, todo el proyecto habla el mismo idioma." },
      PGR: { short: "Implantación & logística", title: "Grupo de proceso: Implantación y logística", role: "El flujo en la obra",
        ansvar: ["Implantación, logística y funciones comunes", "Transporte vertical, grúas, montacargas y almacén", "Marco de SST y operación segura en la obra", "Asegura accesos, almacenaje y flujo just-in-time", "Coordina los recursos comunes entre los oficios", "Mantiene la implantación adaptada al takt en cada fase"],
        samspill: "Mantiene el flujo de todos los trenes — invisible cuando funciona, pero un freno para todos cuando falla.",
        tips: "Una buena implantación es invisible — una mala lo detiene todo." },
      RIA: { short: "Acústica", title: "Acústica", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Acústica de sala, aislamiento acústico y reverberación", "Requisitos y documentación frente a la norma", "Asiste a los grupos interior y técnico cuando hace falta", "Verifica soluciones mediante medición y control"],
        samspill: "Se trae cuando un grupo lo pide — pull, no push. Aclara las premisas temprano, pero contribuye de forma concreta cuando las soluciones se desarrollan de verdad.",
        tips: "Los asesores de premisas no tienen sitio fijo en la rueda; contribuyen cuando surge la necesidad." },
      RIM: { short: "Medio ambiente", title: "Medio ambiente / BREEAM", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Premisas de medio ambiente, clima y sostenibilidad", "Seguimiento BREEAM y captura de puntos de forma transversal", "Balance de gases de efecto invernadero y elección de materiales", "Asiste a todos los grupos cuando hay que cumplir requisitos ambientales"],
        samspill: "Asiste a todos los grupos en pull — la sostenibilidad es una premisa en cada grupo, no un silo aparte.",
        tips: "Las premisas se aclaran temprano, pero la asistencia se trae cuando se necesita." },
      RIByfy: { short: "Física del edificio", title: "Física del edificio", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Humedad, calor, condensación y estanqueidad al aire", "Cálculo energético y valores U en la envolvente", "Asiste a los grupos de cubierta/fachada y estructura cuando hace falta", "Soluciones de detalle para puentes térmicos y sellado"],
        samspill: "Entra en pull cuando se desarrolla la envolvente — muy de la mano de cubierta/fachada y los sistemas técnicos.",
        tips: "La competencia correcta en el momento correcto — ni antes ni después." },
      RIBr: { short: "Incendios", title: "Protección contra incendios", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Premisas, concepto y estrategia de protección contra incendios", "Evacuación, sectorización y resistencia al fuego", "Verificación frente a la normativa y el código de edificación", "Asiste a los grupos de disciplina y proceso en las aclaraciones"],
        samspill: "Se trae cuando los grupos necesitan aclaración — la premisa se fija temprano, pero la ayuda de detalle se da en pull.",
        tips: "Los especialistas son más valiosos cuando se traen con precisión." },
      STOY: { short: "Ruido & vibración", title: "Ruido, vibración y sonido", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Ruido exterior, vibración y valores límite", "Ruido en las fases de obra y operación", "Asiste a los grupos de terreno, fachada y técnico", "Medición, cálculo y medidas de mitigación"],
        samspill: "Se trae cuando hace falta, sin sitio fijo en la rueda — normalmente cuando se desarrollan el movimiento de tierras, la fachada o los sistemas técnicos.",
        tips: "El ruido y la vibración se aclaran como premisa — la asistencia se da en pull." },
      RIG: { short: "Geotecnia", title: "Geotecnia", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Condiciones del terreno, asientos y premisas de cimentación", "Estudios geotécnicos y diseño geotécnico", "Asiste al grupo de terreno/estructura en la fase temprana", "Evalúa estabilidad, tablestacas y arriostramiento"],
        samspill: "Pull desde el grupo de terreno justo al inicio — donde se decide gran parte del riesgo del proyecto antes de que pueda empezar nada más.",
        tips: "La geotecnia decide gran parte del riesgo justo al principio." },
      UU: { short: "Diseño universal", title: "Diseño universal", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Accesibilidad y premisas de diseño universal", "Requisitos de líneas guía, pendientes, contrastes y sonido", "Asiste al trabajo interior y de arquitectura cuando hace falta", "Verifica soluciones frente al código y las normas"],
        samspill: "Contribuye en pull donde se desarrollan las soluciones — la accesibilidad se incorpora, no se inspecciona al final.",
        tips: "Los asesores de premisas deben estar disponibles — no siempre presentes." },
      LYS: { short: "Luz & luz natural", title: "Luz y luz natural", role: "Asesor de premisas · se trae en pull",
        ansvar: ["Luz natural, iluminación y deslumbramiento", "Cálculo lumínico y energía junto con los sistemas técnicos", "Asiste a los grupos de fachada, interior y técnico", "Equilibra los requisitos de luz natural frente a energía y protección solar"],
        samspill: "Se trae cuando los grupos lo piden — a menudo en la interfaz entre fachada, automatización y espacios interiores.",
        tips: "El principio de pull evita que los asesores produzcan trabajo que nadie ha pedido." }
    }
  },

  org: {
    styre: { short: "Comité IPD", title: "Comité IPD", ansvar: ["Máximo órgano de decisión en la ejecución", "Es dueño del precio objetivo y del riesgo global", "Decide sobre cuestiones de principio"], note: "Nivel de gobierno — representación equitativa de las partes." },
    ledelse: { short: "Dirección IPD", title: "Dirección integrada de proyecto", ansvar: ["Dirección diaria entre las partes", "Es dueña del avance, el coste y la calidad", "Reporta al comité IPD"], note: "De la colaboración a la línea — pero las decisiones se siguen tomando de forma integrada." },
    PL2: { short: "DP", title: "Director de proyecto", ansvar: ["Ejecución global de avance, coste y calidad", "Es dueño de la estructura de reuniones, el reporte y el registro de decisiones", "Enlace con la dirección IPD y el cliente", "Asegura personal y recursos frente al takt"], note: "Lidera la línea, pero sigue decidiendo de forma integrada con las partes." },
    PRL2: { short: "DD", title: "Director de diseño", ansvar: ["Diseño restante y documentación de trabajo hacia la producción", "Gestión de cambios y evaluación de consecuencias", "Es dueño del plan de entregas de diseño al takt", "Control de colisiones y aclaración multidisciplinar"], note: "Entrega la documentación antes de que empiece el área de control — no después." },
    AL2: { short: "JO", title: "Jefe de obra", ansvar: ["Producción y takt en el campo", "Eliminación de obstáculos y dirección diaria de las cuadrillas", "SST y calidad en la obra", "Retroalimentación de constructibilidad al diseño"], note: "La voz de «el terreno» dentro de la dirección." },
    ITB2: { short: "Coord. ITB", title: "Coordinador ITB", ansvar: ["Interfaces técnicas entre las disciplinas", "Puesta en marcha, pruebas y ajuste", "Es dueño de la matriz de interfaces (ITB)", "Asegura instalaciones técnicas integradas del edificio"], note: "Une las disciplinas técnicas desde el diseño hasta la operación." },
    FG1b: { short: "GD1", title: "GD1 Diseño", ansvar: ["Documentación de trabajo lista al takt", "Modelo multidisciplinar y control de colisiones", "Aclaraciones en pull desde la producción"], note: "" },
    FG2b: { short: "GD2", title: "GD2 Obra", ansvar: ["Estructura, terreno y trabajos de edificación", "Marca el ritmo para los demás trenes", "Coordina tolerancias hacia fachada y técnica"], note: "" },
    FG3b: { short: "GD3", title: "GD3 Clima", ansvar: ["Producción de climatización al takt", "Recorridos y salas técnicas", "Puesta en marcha junto con ITB"], note: "" },
    FG4b: { short: "GD4", title: "GD4 Electricidad", ansvar: ["Producción eléctrica y de telecomunicaciones al takt", "Recorridos y capacidades", "Pruebas y ajuste con automatización"], note: "" },
    FG5b: { short: "GD5", title: "GD5 ITB", ansvar: ["Integración técnica entre disciplinas", "Prueba funcional de sistemas que interactúan", "Entrega de la documentación técnica"], note: "" },
    PG1b: { short: "GP1", title: "GP1 SST", ansvar: ["Seguridad y salud en la producción", "Evaluación de riesgos de las actividades del takt", "Rondas de seguridad y cierre de no conformidades"], note: "" },
    PG2b: { short: "GP2", title: "GP2 Cálculo", ansvar: ["Coste final frente al precio objetivo en libro abierto", "Vincula los cambios al coste y a la madurez", "Previsión y reporte de desviaciones"], note: "" },
    PG3b: { short: "GP3", title: "GP3 Usuario", ansvar: ["Seguimiento del usuario y aclaración de funciones", "Gestiona los cambios en el programa de usuario", "Prepara la operación y la recepción"], note: "" },
    vdc: { short: "VDC / ICE", title: "Proceso VDC e ICE (soporte)", ansvar: ["Reuniones ICE estructuradas entre disciplinas", "Soporte a la decisión basado en modelo", "Medición y mejora continua"], note: "Va al lado de la línea y une los niveles — el núcleo del método de Lean Communications." }
  },

  bindings: {
    b1: { k: "Lean Communications", t: "Un ritmo semanal: reuniones de colaboración, planes semanales (WWP) y una lista de obstáculos viva que mantiene a todas las disciplinas en takt." },
    b2: { k: "Plan de takt", t: "La secuencia de producción de todas las disciplinas por cada área de control — la visualización propia de este módulo." },
    b3: { k: "BIM / VDC", t: "BIM abierto (IFC) como verdad compartida, con control de colisiones y madurez del modelo antes de la producción." },
    b4: { k: "Cálculo (libro abierto)", t: "Transparencia mensual del coste — todos los grupos ven las mismas cifras, ligadas a la madurez y al precio objetivo." },
    b5: { k: "Coordinación ITB", t: "Una matriz de interfaces que une las disciplinas técnicas desde el diseño hasta la puesta en marcha." }
  },

  roles: {
    PL: { role: "Director de proyecto", f1: "Fija el marco, la estructura de reuniones y las metas comunes de la colaboración. Lidera el proceso — no las decisiones.", f2: "Responsabilidad global de avance, coste y calidad en la ejecución." },
    LK: { role: "Responsable de cálculo", f1: "Construye el cálculo dinámico en libro abierto y vincula cada decisión al coste y a la madurez.", f2: "Dirige el coste final hacia el precio objetivo y reporta las desviaciones temprano." },
    SL: { role: "Líder de colaboración", f1: "Facilita los procesos Lean, asegura la involucración de todas las disciplinas y es dueño del ritmo semanal.", f2: "Lleva la colaboración a la línea y mantiene en marcha el trabajo de mejora." },
    PT: { role: "Desarrollador técnico de proyecto", f1: "Desarrolla soluciones y opciones técnicas junto con las disciplinas en la fase de desarrollo.", f2: "Asegura que las soluciones elegidas se puedan construir y operar." },
    PV: { role: "Líder de desarrollo virtual", f1: "Lidera el desarrollo virtual del proyecto — ICE, modelo y soporte a la decisión.", f2: "Impulsa la medición, el aprendizaje y la mejora continua durante toda la ejecución." }
  },

  trades: { bygg: { navn: "Obra" }, vvs: { navn: "Clima" }, el: { navn: "Electricidad" }, auto: { navn: "Automatización" }, flate: { navn: "Acabados" }, rigg: { navn: "Demolición/Implant." } },

  taktAreas: ["ZC-01 · Terreno, cimientos y sótano", "ZC-02 · Planta 1 — áreas públicas", "ZC-03 · Planta 2 — salas de usuario", "ZC-04 · Planta 3 — salas de usuario", "ZC-05 · Planta 4 — oficinas y salas de reunión", "ZC-06 · Cubierta y técnica", "ZC-07 · Fachada y envolvente", "ZC-08 · Exteriores y conexiones"],

  calc: {
    months: ["Ene 27", "Abr 27", "Jul 27", "Oct 27", "Ene 28", "Abr 28", "Jul 28", "Sep 28"],
    groups: {
      FG1: { navn: "GD1 Estructura", sub: ["Hormigón y cimientos", "Acero y estructura portante", "Forjados prefabricados"] },
      FG2: { navn: "GD2 Fachada y cubierta", sub: ["Elementos de fachada", "Cubierta e impermeabilización", "Ventanas y vidrio"] },
      FG3: { navn: "GD3 Técnica (Clima/EL)", sub: ["Climatización", "Electricidad", "Automatización"] },
      FG4: { navn: "GD4 Acabados interiores", sub: ["Tabiques y techos", "Suelos y revestimientos", "Mobiliario"] },
      FG5: { navn: "GD5 Diseño", sub: ["Arquitecto y estructura", "Consultores técnicos", "VDC/BIM"] },
      FG8: { navn: "GD8 Implantación y logística", sub: ["Implantación y operación de obra", "Grúas y montacargas", "Obras provisionales"] }
    },
    spg: [
      ["Coste neto", "Costes reales del trabajo ejecutado — documentados en libro abierto."],
      ["Overhead (recargo)", "Recargo acordado por administración y costes indirectos."],
      ["Riesgo y oportunidades", "Una bolsa común gestionada activamente a través del registro de riesgos."],
      ["Beneficio", "Beneficio acordado, fijo y predecible para las partes."],
      ["Bono KPI", "Incentivo ligado al logro de metas comunes (tiempo, calidad, SST)."]
    ]
  },

  alt: {
    FG1: { navn: "GD1 Estructura", items: [
      { navn: "Forjados de hormigón prefabricado", kons: "Menor tiempo de obra y menos encofrado, pero exige fijar la geometría temprano." },
      { navn: "Cimentación con pilotes vs. losa sobre el terreno", kons: "Reduce el riesgo de asientos en terreno malo; mayor cálculo pero menor bolsa de riesgo." },
      { navn: "Hormigón de alta resistencia en pilares", kons: "Pilares más esbeltos dan más superficie, pero exigen un control de calidad más estricto." }
    ]},
    FG2: { navn: "GD2 Fachada", items: [
      { navn: "Elementos de fachada prefabricados", kons: "Edificio estanco más rápido y mejor SST en altura; requisitos de transporte y tolerancia." },
      { navn: "Cubierta vegetal", kons: "Mayor coste, pero aporta gestión de aguas pluviales y puntos BREEAM." },
      { navn: "Protección solar dinámica", kons: "Reduce la demanda de refrigeración; interacción entre fachada, automatización y energía." }
    ]},
    FG3: { navn: "GD3 Técnica", items: [
      { navn: "Conductos rectangulares vs. circulares", kons: "Los conductos circulares dan menor pérdida de carga y espacio en patinillo, pero exigen rediseño." },
      { navn: "Refrigeración centralizada vs. descentralizada", kons: "La centralizada da ventajas de operación; la descentralizada da recorridos más cortos." },
      { navn: "Refrigeración gratuita con agua de mar/río", kons: "Gran potencial de energía y coste, pero depende de concesión y tuberías." }
    ]},
    FG4: { navn: "GD4 Interiores", items: [
      { navn: "Salas de usuario modulares", kons: "Producción industrializada y calidad uniforme; exige una estandarización estricta." },
      { navn: "Ajuste de los requisitos de robustez", kons: "Adapta los acabados al uso real sin bajar de los requisitos funcionales." },
      { navn: "Tabiques de sistema vs. tabiques de obra", kons: "Los tabiques de sistema dan flexibilidad para una reforma posterior." }
    ]},
    FG5: { navn: "GD5 Diseño", items: [
      { navn: "Nivel de ambición BREEAM", kons: "Un nivel más alto da sobrecoste ahora, pero menor coste de operación y mayor valor de mercado." },
      { navn: "Nivel de detalle BIM (LOD)", kons: "El LOD correcto en el momento correcto ahorra horas de diseño sin aumentar el riesgo." },
      { navn: "Proceso de usuario estructurado", kons: "Fijar temprano reduce los cambios caros al final de la producción." }
    ]},
    PG1: { navn: "GP1 Cálculo", items: [
      { navn: "Compra temprana de acero", kons: "Asegura el precio frente a la inflación, pero inmoviliza capital y exige madurez temprana." }
    ]},
    PG2: { navn: "GP2 Avance", items: [
      { navn: "Logística off-site y just-in-time", kons: "Menos almacenamiento intermedio en un solar estrecho; exige un control de takt preciso." }
    ]},
    PG3: { navn: "GP3 Implantación", items: [
      { navn: "Transporte vertical — montacargas de obra adicional", kons: "Mayor coste de implantación, pero elimina un cuello de botella que retrasaría varios trenes." }
    ]}
  },

  risks: [
    { b: "Acceso a una sala técnica en un edificio contiguo durante la operación", tiltak: "Ventana de operación aclarada temprano y desvío temporal" },
    { b: "Cambios en el programa de usuario tras el cierre", tiltak: "Registro de cambios estricto y decisión A3 en cada desviación" },
    { b: "Aumento del coste de materiales (inflación)", tiltak: "Compra temprana y contratos con regulación por índice" },
    { b: "Coordinación con la operación en un edificio vecino", tiltak: "Plan de operación común y reuniones de coordinación fijas" },
    { b: "Condiciones del terreno peores de lo previsto", tiltak: "Estudios de terreno complementarios antes de la producción" },
    { b: "Requisitos de tolerancia en la fachada prefabricada", tiltak: "Montaje de prueba y medición 3D" },
    { b: "Colisión de recorridos de clima/electricidad en el patinillo", tiltak: "Control de colisiones en BIM antes de la producción" },
    { b: "Documentación de trabajo retrasada frente al takt", tiltak: "Documentación lista seis semanas antes de cada área de control" },
    { b: "Plazo de entrega del mobiliario", tiltak: "Pedido temprano y un colchón en el takt" },
    { b: "El clima afecta al edificio estanco", tiltak: "Protección climática y secuencia de trenes flexible" },
    { b: "La puesta en marcha retrasa la entrega", tiltak: "Prueba ITB como hito propio en el takt" },
    { b: "Desviación entre el cálculo y la cantidad final", tiltak: "Aclaración de cantidades guiada por la madurez" },
    { b: "Requisito de estanqueidad en la envolvente", tiltak: "Prueba de presión durante la obra, no solo al final" },
    { b: "El solar estrecho limita la logística", tiltak: "Almacenamiento off-site y entrega just-in-time" },
    { b: "Asientos en una construcción contigua", tiltak: "Monitoreo de asientos y dimensionado con margen" },
    { b: "Documentación de pruebas insuficiente en la entrega", tiltak: "Protocolo de pruebas continuo en el takt" }
  ],

  ui: {
    mtag: "El modelo de ejecución",
    modA: "El modelo de ejecución", modB: "Plan de takt", modC: "Cálculo y riesgo",
    footerAbout: "El mayor proveedor de formación en Lean y VDC para el sector de la construcción de Noruega. Colabora con NTNU. Oficinas en Oslo y Bergen.",
    footerNote: "Demo interactiva del método. El modelo, el control de takt y el cálculo dinámico son métodos que Lean Communications ha desarrollado y usa en sus propios proyectos — y en los que forma a otros. Las cifras aquí son ilustrativas.",

    aEyebrow: "Módulo 1 · Nuestro modelo de organización", aTitlePre: "La rueda de ", aTitleHi: "colaboración",
    aLead: "El proyecto está en el centro, y en el núcleo está el <b>liderazgo colaborativo</b>. Alrededor está la dirección, luego los grupos de disciplina y de proceso multifuncionales que trabajan por sprints — y, en el exterior, los asesores de premisas que se traen en <b>pull, no push</b>. Haz clic en cualquier parte de la rueda para explorarla.",
    phaseSamspill: "Fase de colaboración", phaseGjennom: "Fase de ejecución",
    emptyTitle: "Haz clic en un rol", emptyBody: "Toca un nodo del modelo para ver las responsabilidades, con quién colabora el rol y un consejo concreto de nuestro método.",
    lblAnsvar: "Responsabilidades", lblSamspill: "Colaboración", lblRolleFase: "Rol en la fase", tipsLabel: "Consejo: ", closeLabel: "Cerrar",
    legend: ["Núcleo — liderazgo colaborativo", "Dirección", "Grupos de disciplina", "Grupos de proceso", "Reunión de líderes", "Asesores de premisas · pull"],
    infoPullT: "Pull, no push",
    infoPullB: "Las tres capas internas tienen un sitio fijo en la rueda y trabajan muy unidas. Los asesores de premisas del exterior no tienen sitio fijo — se traen cuando un grupo pide ayuda. Es el principio Lean del pull: la competencia se trae cuando hay necesidad, en vez de empujarla dentro (push).",
    infoLineT: "De la colaboración a la línea",
    infoLineB: "En la ejecución el trabajo se organiza de forma jerárquica para dar ritmo y responsabilidad clara, pero las decisiones se siguen tomando de forma integrada. El proceso VDC/ICE une los niveles.",
    bindShow: "Mostrar elementos de unión", bindHide: "Ocultar elementos de unión",
    ownNoteA: "El modelo lo puede copiar cualquiera de forma esquemática — pero es <b>exigente de lograr en la práctica</b>. Ahí es exactamente donde entramos: Lean Communications desarrolla el modelo junto con el proyecto, lidera el proceso y forma a las personas para usarlo. Es uno de nuestros productos más avanzados.",
    rolesTitle: "Roles clave del modelo", rolesLead: "El modelo se basa en roles, no en personas. Toca una tarjeta para ver la responsabilidad en cada fase.",
    roleF1: "Fase de colaboración", roleF2: "Fase de ejecución",

    bEyebrow: "Módulo 2 · Nuestro método", bTitlePre: "Plan de ", bTitleHi: "takt",
    bLead: "La producción se construye como un <b>sistema de producción</b>: el trabajo se divide en áreas de control (ZC) de igual tamaño, y «trenes» de oficios se mueven a través de ellas con un ritmo fijo. Cada oficio sigue al anterior — desplazado un takt. Activa y desactiva oficios para ver cómo se forma la diagonal.",
    bKO: "Área de control", weekPrefix: "Semana ",
    bExplain: [
      { k: "Filas = ZC", p: "Cada área de control es una parte del edificio de igual tamaño — una zona en la que el trabajo se puede terminar." },
      { k: "Columnas = Semanas", p: "El tiempo avanza hacia la derecha. El takt es fijo: un oficio se mueve un área de control por semana." },
      { k: "La diagonal = Flujo", p: "Los oficios se siguen desplazados. La diagonal es el avance — y revela de inmediato cuando un tren falla." }
    ],
    bQuote: "«Todos los oficios se mueven por las áreas de control en una <span class=\"g\">secuencia fija a un takt fijo</span>.»",
    ownNoteB: "Dibujar el plan de takt es fácil. <b>Mantener el takt en la práctica</b> — con la madurez correcta en la documentación, los obstáculos eliminados y oficios que de verdad entregan en ritmo — es lo exigente. Ahí es donde lideramos el trabajo y formamos al equipo.",

    cEyebrow: "Módulo 3 · Nuestro método", cTitlePre: "Cálculo, madurez ", cTitleHi: "y riesgo",
    cLead: "Dirección dinámica hacia el precio objetivo. El coste <b>no se adivina — se desarrolla</b>, decisión a decisión, reduciendo el riesgo y aumentando la madurez. Estas son las tres herramientas que lo dirigen.",
    subKalk: "Cálculo dinámico", subAlt: "Opciones", subRisk: "Gestión de riesgos",
    timeline: "Línea de tiempo", nowSuffix: " · ahora",
    kpiCur: "Cálculo actual", unit: "MNOK", ksHist: "Histórico / real", ksPlan: "Cifras de plan (futuro)",
    kpiTarget: "Frente al objetivo", malPrefix: "Objetivo: ",
    kpiMove: "Último cambio", moveDown: "El cálculo baja — buena señal", moveUp: "El cálculo sube — hacer seguimiento",
    gaugeLabel: "Madurez · objetivo 8,5", outOf: "de 10",
    chartTitle: "Evolución del cálculo vs. objetivo",
    legKalkHist: "Cálculo (histórico)", legKalkPlan: "Cálculo (plan)", legMal: "Objetivo", legMod: "Madurez (eje dcho.)",
    barsTitle: "Distribución por grupo de disciplina", barsMeta: "Haz clic en un grupo para desglosarlo. La línea muestra el objetivo.", malTitle: "Objetivo ",
    vederlag: "Estructura de retribución (libro abierto)", posterSuffix: " partidas",
    altLead1: "Cada idea que crea valor sigue el mismo recorrido — del aporte a la decisión de principio. ", altLead2: " opciones registradas. Haz clic en un grupo para ver las valoraciones.",
    flow: ["Aporte (GD/GP)", "Identificar", "Valorar (reunión GD)", "Presentado para decisión", "Pertinente → estudio (máx. 3 días) → L1 (A3)", "No pertinente → archivado con justificación"],
    underlagLabel: "Documentación: ", fristLabel: "Plazo L1: ", altSing: " opción", altPlur: " opciones",
    rsteps: [["1", "Identificar", "Captar el riesgo de todas las disciplinas y grupos."], ["2", "Analizar", "Valorar consecuencia y probabilidad."], ["3", "Evaluar", "Priorizar por puntuación de riesgo y propiedad."], ["4", "Tratar", "Medidas, seguimiento y vínculo con el cálculo."]],
    rRed: "Riesgos rojos (≥ 5 MNOK)", rExpo: "Consecuencia total (MNOK)", rCount: "Riesgos registrados",
    filterGroup: "Grupo", filterStatus: "Estado", allLabel: "Todos",
    rtableHead: ["", "N.º", "Gr.", "Descripción", "Dueño", "Cons.", "Prob.", "Puntuación", "Medida", "Estado"],
    status: { ok: "Resuelto", pending: "En curso", decide: "Para decisión" },
    ownNoteC: "Las herramientas son esquemáticamente simples. Lo exigente es <b>la disciplina detrás</b>: mantener el cálculo vivo en libro abierto, llevar las opciones hasta la decisión, y gestionar el riesgo antes de que llegue al coste. Esto es lo que lideramos y enseñamos."
  }
};
