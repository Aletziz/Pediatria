// EXTENDED DATA - Additional questions to add to data.js
// Copy these arrays and add them to the existing data.js file

// ADD THESE TO multipleChoiceQuestions array (after question 30):

const additionalMCQuestions = [
  {
    id: 31,
    question: "¿Qué es la taquipnea transitoria del recién nacido?",
    options: [
      "Una infección pulmonar grave",
      "Retraso en la reabsorción del líquido pulmonar fetal",
      "Déficit de surfactante",
      "Malformación congénita pulmonar",
    ],
    correct: 1,
    explanation:
      "La taquipnea transitoria del RN es causada por retraso en la reabsorción del líquido pulmonar fetal, más común en cesáreas sin trabajo de parto, prematuros tardíos y sedación materna. Es autolimitada (24-72h).",
  },
  {
    id: 32,
    question: "¿Cuál es el momento óptimo para pinzar el cordón umbilical?",
    options: [
      "Inmediatamente al nacer",
      "30-60 segundos después del nacimiento (pinzamiento tardío)",
      "5 minutos después",
      "No importa el momento",
    ],
    correct: 1,
    explanation:
      "El pinzamiento tardío (30-60 seg) permite transfusión placentaria, aumenta hemoglobina, reservas de hierro y reduce anemia. Beneficia especialmente a prematuros y países en desarrollo.",
  },
  {
    id: 33,
    question:
      "¿Cuál es la escala utilizada para evaluar la vitalidad del recién nacido al minuto y a los 5 minutos?",
    options: [
      "Escala de Glasgow",
      "Escala de Apgar",
      "Escala de Silverman-Anderson",
      "Escala de Denver",
    ],
    correct: 1,
    explanation:
      "La escala de Apgar evalúa 5 parámetros (frecuencia cardíaca, esfuerzo respiratorio, tono muscular, irritabilidad refleja, color) con puntuación 0-2 cada uno. Se aplica al minuto, 5 y 10 minutos de vida.",
  },
  {
    id: 34,
    question: "¿Qué parámetros evalúa la escala de Apgar?",
    options: [
      "Peso, talla y perímetro cefálico",
      "Frecuencia cardíaca, respiración, tono, reflejos y color",
      "Solo frecuencia cardíaca y respiración",
      "Temperatura y glucosa",
    ],
    correct: 1,
    explanation:
      "Los 5 parámetros del Apgar son: Apariencia (color), Pulso (FC), Gesticulación (irritabilidad refleja), Actividad (tono muscular) y Respiración. Un Apgar de 7-10 es normal, 4-6 moderadamente deprimido, 0-3 severamente deprimido.",
  },
  {
    id: 35,
    question: "¿Qué indica un Apgar de 3 al minuto de vida?",
    options: [
      "Recién nacido completamente sano",
      "Depresión severa que requiere reanimación activa",
      "Leve dificultad respiratoria",
      "Solo necesita observación",
    ],
    correct: 1,
    explanation:
      "Apgar 0-3 indica depresión severa con necesidad de reanimación inmediata: ventilación con presión positiva, oxígeno, posible intubación y soporte avanzado. El Apgar a los 5 min predice mejor el pronóstico neurológico.",
  },
  {
    id: 36,
    question:
      "¿Cuál es la causa más común del síndrome de aspiración meconial?",
    options: [
      "Prematuridad extrema",
      "Sufrimiento fetal con paso de meconio al líquido amniótico y aspiración perinatal",
      "Infección bacteriana",
      "Déficit de surfactante",
    ],
    correct: 1,
    explanation:
      "El síndrome de aspiración meconial ocurre cuando hay sufrimiento fetal (hipoxia) que causa paso de meconio al LA, relajación de esfínter anal y gasping fetal que aspira líquido meconial. Más común en postérmino y RCIU.",
  },
  {
    id: 37,
    question: "¿Qué complicaciones puede causar la aspiración de meconio?",
    options: [
      "Solo ictericia leve",
      "Obstrucción de vías aéreas, neumonitis química, hipertensión pulmonar",
      "Únicamente tos transitoria",
      "No causa complicaciones",
    ],
    correct: 1,
    explanation:
      "El meconio causa: 1) obstrucción de vía aérea (atelectasias/enfisema), 2) neumonitis química, 3) inactivación de surfactante, 4) hipertensión pulmonar persistente (la más grave), 5) neumotórax. Requiere soporte ventilatorio y eventual ECMO.",
  },
  {
    id: 38,
    question: "¿Qué es la retinopatía del prematuro (ROP)?",
    options: [
      "Una infección ocular",
      "Vasculopatía proliferativa de la retina inmadura por oxigenoterapia",
      "Malformación congénita del ojo",
      "Cataratas neonatales",
    ],
    correct: 1,
    explanation:
      "La ROP es una vasculopatía que afecta prematuros <32 sem o <1500g expuestos a oxígeno. La hiperoxia causa vasoconstricción y detención de vascularización retiniana normal, seguida de neovascularización anormal. Puede causar ceguera.",
  },
  {
    id: 39,
    question:
      "¿Cuáles son los principales factores de riesgo para retinopatía del prematuro?",
    options: [
      "Solo la lactancia materna",
      "Prematuridad extrema, bajo peso, oxigenoterapia prolongada",
      "Ictericia fisiológica",
      "Tipo de parto",
    ],
    correct: 1,
    explanation:
      "Factores de riesgo: prematuridad <32 sem (principal), peso <1250g, oxigenoterapia (especialmente si fluctuaciones), ventilación mecánica, sepsis, transfusiones, hemorragia intraventricular. Requiere screening oftalmológico 4-6 semanas de vida.",
  },
  {
    id: 40,
    question: "¿Qué es la displasia broncopulmonar?",
    options: [
      "Una infección pulmonar aguda",
      "Enfermedad pulmonar crónica del prematuro por daño pulmonar (oxígeno, ventilación, inflamación)",
      "Alergia respiratoria",
      "Asma neonatal",
    ],
    correct: 1,
    explanation:
      "La DBP es enfermedad pulmonar crónica en prematuros que requieren O₂ >28 días. Causada por: inmadurez pulmonar, barotrauma/volutrauma ventilatorio, toxicidad por O₂, inflamación, infección. Definición: necesidad de O₂ a las 36 sem de edad postmenstrual.",
  },
  {
    id: 41,
    question: "¿Qué es el ductus arterioso persistente (DAP)?",
    options: [
      "Cierre prematuro del ductus",
      "Falla en el cierre del conducto arterioso después del nacimiento",
      "Comunicación entre aurículas",
      "Malformación venosa",
    ],
    correct: 1,
    explanation:
      "El DAP es la persistencia de la comunicación entre aorta y arteria pulmonar que normalmente se cierra en 24-72h. Más común en prematuros por inmadurez. Causa cortocircuito izquierda-derecha con sobrecarga pulmonar y falla cardíaca.",
  },
  {
    id: 42,
    question:
      "¿Cuál es el tratamiento farmacológico del ductus arterioso persistente?",
    options: [
      "Antibióticos",
      "Indometacina o Ibuprofeno IV (inhiben prostaglandinas)",
      "Corticosteroides",
      "Diuréticos solamente",
    ],
    correct: 1,
    explanation:
      "Indometacina o ibuprofeno IV inhiben ciclooxigenasa, reduciendo prostaglandinas (mantienen DAP abierto), promoviendo cierre. Contraindicados si: insuficiencia renal, sangrado activo, trombocitopenia. Si falla: ligadura quirúrgica.",
  },
  {
    id: 43,
    question: "¿Qué es la hemorragia intraventricular (HIV)?",
    options: [
      "Sangrado en el abdomen",
      "Sangrado en la matriz germinal periventricular del cerebro prematuro",
      "Hemorragia pulmonar",
      "Sangrado intestinal",
    ],
    correct: 1,
    explanation:
      "La HIV es sangrado en la matriz germinal periventricular (zona vascular frágil en prematuros <32 sem). Factores: inmadurez vascular, fluctuaciones de presión arterial, hipoxia, trauma. Clasificación Papile I-IV según extensión.",
  },
  {
    id: 44,
    question:
      "¿Cuál es la clasificación de la hemorragia intraventricular según gravedad?",
    options: [
      "No existe clasificación",
      "Grado I (subependimaria), II (intraventricular sin dilatación), III (con dilatación), IV (hemorragia parenquimatosa)",
      "Solo leve o grave",
      "A, B, C, D",
    ],
    correct: 1,
    explanation:
      "Clasificación de Papile: Grado I (matriz germinal, 5%), II (intraventricular sin dilatación, 10-15%), III (con dilatación, 15-20%), IV (extensión parenquimatosa, peor pronóstico). Diagnóstico por ultrasonido transfontanelar.",
  },
  {
    id: 45,
    question: "¿Qué es la leucomalacia periventricular?",
    options: [
      "Infección cerebral",
      "Necrosis de sustancia blanca periventricular por isquemia/hipoxia",
      "Tumor cerebral",
      "Hidrocefalia",
    ],
    correct: 1,
    explanation:
      "La LPV es necrosis de sustancia blanca periventricular (áreas frontera de irrigación) por isquemia/hipoxia en prematuros. Secuela frecuente: parálisis cerebral espástica (especialmente diplejía). Factores: prematuridad, hipotensión, sepsis, HIV.",
  },
  {
    id: 46,
    question:
      "¿Qué es la persistencia de circulación fetal (hipertensión pulmonar persistente)?",
    options: [
      "Presión arterial sistémica alta",
      "Falla en la disminución de resistencia vascular pulmonar al nacer con cortocircuito derecha-izquierda",
      "Hipertensión portal",
      "Problema renal",
    ],
    correct: 1,
    explanation:
      "La PPHN es falla en transición circulatoria normal al nacer: persiste resistencia vascular pulmonar alta con cortocircuito D→I (foramen ovale/DAP), causando hipoxemia severa. Causas: aspiración meconial, sepsis, hipoplasia pulmonar, SDR severo.",
  },
  {
    id: 47,
    question:
      "¿Cuál es el tratamiento de la hipertensión pulmonar persistente del recién nacido?",
    options: [
      "Solo oxígeno ambiental",
      "Óxido nítrico inhalado, ventilación mecánica, sedación, inotrópicos",
      "Antibióticos únicamente",
      "Fototerapia",
    ],
    correct: 1,
    explanation:
      "Tratamiento: 1) Óxido nítrico inhalado (vasodilatador pulmonar selectivo), 2) Ventilación mecánica (alta FiO₂, alcalosis respiratoria), 3) Sedación/analgesia, 4) Inotrópicos, 5) Sildenafil, 6) ECMO si refractario. Mortalidad 10-20%.",
  },
  {
    id: 48,
    question: "¿Qué es la asfixia perinatal?",
    options: [
      "Llanto excesivo del bebé",
      "Compromiso del intercambio gaseoso con hipoxia, hipercapnia y acidosis",
      "Ictericia severa",
      "Hipoglucemia",
    ],
    correct: 1,
    explanation:
      "La asfixia perinatal es compromiso de intercambio gaseoso (O₂/CO₂) antes, durante o inmediatamente después del parto, causando hipoxemia, hipercapnia y acidosis metabólica. Puede progresar a encefalopatía hipóxico-isquémica.",
  },
  {
    id: 49,
    question: "¿Qué es la encefalopatía hipóxico-isquémica (EHI)?",
    options: [
      "Infección del sistema nervioso",
      "Disfunción neurológica por asfixia perinatal con hipoxia cerebral",
      "Malformación congénita",
      "Traumatismo craneal",
    ],
    correct: 1,
    explanation:
      "La EHI es síndrome neurológico por asfixia con lesión cerebral: convulsiones, alteración de conciencia, hipotonía, disfunción respiratoria. Clasificación Sarnat I-III. Principal causa de parálisis cerebral en término. Tratamiento: hipotermia terapéutica.",
  },
  {
    id: 50,
    question:
      "¿Cuál es el tratamiento neuroprotector para la encefalopatía hipóxico-isquémica moderada-severa?",
    options: [
      "Hipertermia (calentar al bebé)",
      "Hipotermia terapéutica (enfriamiento a 33-34°C por 72 horas)",
      "Solo antibióticos",
      "Fototerapia",
    ],
    correct: 1,
    explanation:
      "La hipotermia terapéutica (33-34°C por 72h) iniciada <6h de vida reduce muerte y discapacidad en EHI moderada-severa. Mecanismo: reduce metabolismo cerebral, apoptosis, inflamación y convulsiones. Mejora outcomes neurológicos a largo plazo.",
  },
  {
    id: 51,
    question: "¿Qué son los reflejos primitivos del recién nacido?",
    options: [
      "Reflejos que aparecen en la adolescencia",
      "Reflejos innatos presentes al nacer que desaparecen gradualmente en los primeros meses",
      "Reflejos patológicos",
      "Reflejos que nunca desaparecen",
    ],
    correct: 1,
    explanation:
      "Los reflejos primitivos (succión, búsqueda, prensión palmar/plantar, Moro, marcha automática, tónico-cervical asimétrico) son respuestas innatas que evalúan integridad del SNC. Su ausencia o persistencia >6-12 meses es anormal.",
  },
  {
    id: 52,
    question: "¿Qué es el reflejo de Moro?",
    options: [
      "Reflejo de succión",
      "Reflejo de sobresalto: extensión y abducción de brazos seguido de flexión ante estímulo súbito",
      "Reflejo de marcha",
      "Reflejo de prensión",
    ],
    correct: 1,
    explanation:
      "El reflejo de Moro se obtiene con cambio súbito de posición/sonido fuerte: el RN extiende y abduce brazos (fase I), luego flexiona y aduce como abrazo (fase II). Presente hasta 3-6 meses. Asimetría sugiere lesión (parálisis braquial, fractura clavícula).",
  },
  {
    id: 53,
    question: "¿Qué es la ictericia por lactancia materna temprana?",
    options: [
      "Ictericia patológica que requiere suspender lactancia",
      "Ictericia en primera semana por ingesta inadecuada/deshidratación",
      "Alergia a la leche materna",
      "Infección transmitida por leche",
    ],
    correct: 1,
    explanation:
      "La ictericia por lactancia temprana (primera semana) ocurre por ingesta calórica insuficiente, deshidratación y aumento de circulación enterohepática. Manejo: aumentar frecuencia de amamantamiento (8-12 veces/día), evaluar técnica. NO suspender lactancia.",
  },
  {
    id: 54,
    question: "¿Qué es la ictericia por leche materna tardía?",
    options: [
      "Ictericia que aparece en las primeras 24 horas",
      "Ictericia después de la primera semana por factores en leche materna que inhiben conjugación",
      "Siempre es patológica",
      "Requiere exanguinotransfusión",
    ],
    correct: 1,
    explanation:
      "La ictericia por leche materna tardía (>1 semana) se debe a β-glucuronidasa y ácidos grasos en leche materna que aumentan reabsorción intestinal de bilirrubina. Es benigna, bilirrubina indirecta <20 mg/dL. Continuar lactancia; resolución en semanas.",
  },
  {
    id: 55,
    question: "¿Cuál es la diferencia entre bilirrubina directa e indirecta?",
    options: [
      "No hay diferencia",
      "Indirecta (no conjugada) es liposoluble y tóxica; directa (conjugada) es hidrosoluble y no tóxica",
      "Directa es más peligrosa",
      "Solo varía el color",
    ],
    correct: 1,
    explanation:
      "Bilirrubina indirecta (no conjugada): liposoluble, no excretable, atraviesa BHE (causa kernicterus). Bilirrubina directa (conjugada): hidrosoluble, excretable por bilis, no atraviesa BHE. Hiperbilirrubinemia directa (>20% de total) siempre es patológica (colestasis).",
  },
  {
    id: 56,
    question: "¿Qué es la atresia de vías biliares?",
    options: [
      "Infección biliar",
      "Obstrucción o ausencia de vías biliares extrahepáticas que causa colestasis",
      "Ictericia fisiológica",
      "Hemólisis neonatal",
    ],
    correct: 1,
    explanation:
      "La atresia biliar es obliteración progresiva de vías biliares extrahepáticas que causa colestasis con hiperbilirrubinemia directa, acolia (heces pálidas) y coluria (orina oscura). Emergencia quirúrgica: Kasai <60 días de vida. Sin tratamiento: cirrosis y muerte.",
  },
  {
    id: 57,
    question: "¿Qué son las pruebas de tamizaje neonatal (screening)?",
    options: [
      "Pruebas de inteligencia",
      "Detección temprana de enfermedades metabólicas/endocrinas congénitas tratables",
      "Pruebas genéticas opcionales",
      "Solo para bebés enfermos",
    ],
    correct: 1,
    explanation:
      "El tamizaje neonatal (prueba del talón) detecta enfermedades congénitas tratables antes de síntomas: hipotiroidismo congénito, fenilcetonuria, galactosemia, hiperplasia suprarrenal congénita, fibrosis quística, etc. Se realiza 48h-7 días de vida.",
  },
  {
    id: 58,
    question: "¿Qué es el hipotiroidismo congénito?",
    options: [
      "Exceso de hormona tiroidea",
      "Deficiencia de hormonas tiroideas desde el nacimiento que causa retraso mental si no se trata",
      "Bocio gigante",
      "Hipertiroidismo",
    ],
    correct: 1,
    explanation:
      "El hipotiroidismo congénito (1:2000-4000 RN) es deficiencia de T3/T4 por disgenesia tiroidea (80%), dishormogénesis o hipotiroidismo central. Sin tratamiento: cretinismo (retraso mental irreversible). Tratamiento: levotiroxina desde diagnóstico (primeras semanas).",
  },
  {
    id: 59,
    question: "¿Cuáles son los signos clínicos del hipotiroidismo congénito?",
    options: [
      "Hiperactividad y diarrea",
      "Ictericia prolongada, letargia, hipotonía, macroglosia, fontanela amplia, hernia umbilical",
      "Solo bocio visible",
      "Siempre es asintomático",
    ],
    correct: 1,
    explanation:
      "Signos clínicos: ictericia prolongada (>2 sem), letargia, hipotonía, dificultad alimentaria, estreñimiento, macroglosia, fontanela posterior amplia (>0.5cm), fontanela anterior grande, hernia umbilical, piel seca, hipotermia. Frecuentemente sutiles al nacer.",
  },
  {
    id: 60,
    question: "¿Qué es la fenilcetonuria?",
    options: [
      "Deficiencia de insulina",
      "Deficiencia de fenilalanina hidroxilasa que causa acumulación de fenilalanina y daño cerebral",
      "Exceso de cetonas",
      "Diabetes neonatal",
    ],
    correct: 1,
    explanation:
      "La fenilcetonuria (PKU) es deficiencia de fenilalanina hidroxilasa: acumula fenilalanina (tóxica para cerebro) y déficit de tirosina. Sin tratamiento: discapacidad intelectual severa, convulsiones, eczema, olor a ratón. Tratamiento: dieta baja en fenilalanina de por vida.",
  },
];

// ADD THESE TO trueFalseQuestions array (after question 20):

const additionalTFQuestions = [
  {
    id: 21,
    statement:
      "La taquipnea transitoria del recién nacido es más común después de cesárea sin trabajo de parto",
    answer: true,
    explanation:
      "VERDADERO. El trabajo de parto y el paso por canal del parto ayudan a exprimir líquido pulmonar fetal. En cesárea electiva sin trabajo de parto, este mecanismo no ocurre, aumentando riesgo de taquipnea transitoria.",
  },
  {
    id: 22,
    statement:
      "El pinzamiento inmediato del cordón umbilical es superior al pinzamiento tardío",
    answer: false,
    explanation:
      "FALSO. El pinzamiento tardío (30-60 seg) es superior: aumenta volumen sanguíneo, hemoglobina, reservas de hierro y reduce anemia. El pinzamiento inmediato solo se indica si necesidad de reanimación urgente.",
  },
  {
    id: 23,
    statement:
      "Un Apgar de 10 garantiza que el bebé no tendrá problemas a largo plazo",
    answer: false,
    explanation:
      "FALSO. El Apgar evalúa vitalidad inmediata y necesidad de reanimación, NO predice outcomes a largo plazo. Un Apgar 10 al minuto es tranquilizador, pero no excluye problemas metabólicos, infecciosos o congénitos.",
  },
  {
    id: 24,
    statement: "El síndrome de aspiración meconial solo ocurre en prematuros",
    answer: false,
    explanation:
      "FALSO. El síndrome de aspiración meconial es MÁS común en neonatos a término o postérmino (>37 semanas). Los prematuros rara vez pasan meconio in útero porque el mecanismo de defecación fetal requiere madurez.",
  },
  {
    id: 25,
    statement:
      "Todos los prematuros menores de 32 semanas deben ser tamizados para retinopatía del prematuro",
    answer: true,
    explanation:
      "VERDADERO. Criterios de screening ROP: <32 semanas o <1500g, o entre 32-35 sem con factores de riesgo (oxigenoterapia, sepsis). Primer examen a las 4-6 semanas de vida por oftalmólogo.",
  },
  {
    id: 26,
    statement:
      "La displasia broncopulmonar solo afecta a prematuros durante el período neonatal sin consecuencias a largo plazo",
    answer: false,
    explanation:
      "FALSO. La DBP tiene secuelas a largo plazo: mayor riesgo de hospitalizaciones por virus respiratorios, asma, hipertensión pulmonar, problemas de crecimiento y neurodesarrollo. Requieren seguimiento prolongado.",
  },
  {
    id: 27,
    statement:
      "El ductus arterioso se cierra espontáneamente en las primeras 72 horas en recién nacidos a término sanos",
    answer: true,
    explanation:
      "VERDADERO. En RN a término, el ductus arterioso se cierra funcionalmente en 12-24h (por contracción muscular con aumento de PO₂) y anatómicamente en 2-3 semanas. La persistencia >72h es anormal.",
  },
  {
    id: 28,
    statement:
      "La hemorragia intraventricular grado IV tiene mejor pronóstico que el grado I",
    answer: false,
    explanation:
      "FALSO. El grado IV (hemorragia parenquimatosa) tiene el PEOR pronóstico con alta mortalidad y secuelas neurológicas severas (parálisis cerebral, hidrocefalia). El grado I (subependimaria) generalmente tiene buen pronóstico.",
  },
  {
    id: 29,
    statement:
      "La leucomalacia periventricular es la principal causa de parálisis cerebral espástica en prematuros",
    answer: true,
    explanation:
      "VERDADERO. La LPV causa necrosis de sustancia blanca periventricular (vías motoras), resultando en parálisis cerebral espástica, especialmente diplejía (afecta principalmente piernas). Es la secuela neurológica más común en prematuros.",
  },
  {
    id: 30,
    statement:
      "El óxido nítrico inhalado es vasodilatador pulmonar selectivo útil en hipertensión pulmonar persistente",
    answer: true,
    explanation:
      "VERDADERO. El óxido nítrico (NO) inhalado es vasodilatador pulmonar selectivo: se administra por vía respiratoria, dilata vasos pulmonares sin afectar presión sistémica. Es tratamiento de elección en PPHN. Dosis: 5-20 ppm.",
  },
  {
    id: 31,
    statement:
      "La hipotermia terapéutica se usa para tratar la ictericia neonatal",
    answer: false,
    explanation:
      "FALSO. La hipotermia terapéutica (enfriamiento corporal a 33-34°C) se usa para encefalopatía hipóxico-isquémica, NO para ictericia. Para ictericia se usa fototerapia. La hipotermia reduce el metabolismo cerebral y previene daño neurológico.",
  },
  {
    id: 32,
    statement:
      "La ausencia del reflejo de Moro es siempre normal en recién nacidos",
    answer: false,
    explanation:
      "FALSO. La ausencia del reflejo de Moro es ANORMAL y sugiere: depresión del SNC, lesión cerebral, lesión medular cervical alta o medicación materna (ej. magnesio). Debe estar presente desde el nacimiento hasta 3-6 meses.",
  },
  {
    id: 33,
    statement:
      "La ictericia por leche materna es una contraindicación absoluta para continuar la lactancia",
    answer: false,
    explanation:
      "FALSO. La ictericia por leche materna es BENIGNA. Se recomienda CONTINUAR lactancia. Solo en casos muy severos (>25 mg/dL) se puede suspender 12-24h para confirmar diagnóstico, luego reiniciar sin problemas.",
  },
  {
    id: 34,
    statement:
      "Una bilirrubina directa elevada (>20% del total) siempre es patológica y requiere investigación",
    answer: true,
    explanation:
      "VERDADERO. Hiperbilirrubinemia directa (colestasis) siempre es PATOLÓGICA: indica obstrucción biliar (atresia biliar), hepatitis neonatal, errores innatos del metabolismo, sepsis. Requiere evaluación urgente.",
  },
  {
    id: 35,
    statement:
      "La atresia de vías biliares puede esperar meses para ser operada",
    answer: false,
    explanation:
      "FALSO. La atresia biliar es EMERGENCIA QUIRÚRGICA. La portoenterostomía de Kasai debe realizarse ANTES de 60 días de vida (idealmente <45 días). Después de 90 días, la efectividad disminuye drásticamente. Sin cirugía: cirrosis y muerte en 2 años.",
  },
  {
    id: 36,
    statement:
      "El tamizaje neonatal debe realizarse en las primeras 2 horas de vida",
    answer: false,
    explanation:
      "FALSO. El tamizaje neonatal (prueba del talón) debe realizarse entre 48 horas y 7 días de vida. Si se hace muy temprano (<24h), puede haber falsos positivos (ej. TSH elevado transitorio) o negativos.",
  },
  {
    id: 37,
    statement:
      "El hipotiroidismo congénito no tratado causa retraso mental irreversible",
    answer: true,
    explanation:
      "VERDADERO. Las hormonas tiroideas son CRÍTICAS para desarrollo cerebral. Sin tratamiento en primeras semanas: cretinismo (discapacidad intelectual severa e irreversible). El tratamiento temprano (primeras 2 semanas) previene completamente el daño.",
  },
  {
    id: 38,
    statement:
      "Los bebés con fenilcetonuria tienen síntomas evidentes al nacimiento",
    answer: false,
    explanation:
      "FALSO. Los bebés con PKU son NORMALES al nacer (protegidos por metabolismo materno). Los síntomas aparecen a los 3-6 meses sin tratamiento: retraso del desarrollo, convulsiones, eczema, olor característico. El tamizaje permite diagnóstico presintomático.",
  },
  {
    id: 39,
    statement:
      "La reanimación neonatal debe seguir el algoritmo CAB (compresiones-vía aérea-respiración)",
    answer: false,
    explanation:
      "FALSO. En reanimación NEONATAL se usa ABC (vía aérea-respiración-circulación) porque la causa principal es RESPIRATORIA (no cardíaca). La ventilación con presión positiva es la intervención más importante. Compresiones solo si FC <60 después de ventilación adecuada.",
  },
  {
    id: 40,
    statement:
      "El surfactante exógeno debe administrarse a TODOS los prematuros al nacer",
    answer: false,
    explanation:
      "FALSO. El surfactante se administra según indicaciones: 1) SDR establecido que requiere intubación, 2) Profiláctico en <26 semanas o <1000g. No todos los prematuros lo necesitan. El uso indiscriminado puede causar complicaciones.",
  },
];

// ADD THESE TO justificationQuestions array (after question 8):

const additionalJustQuestions = [
  {
    id: 9,
    question:
      "Un recién nacido a término de cesárea electiva (sin trabajo de parto) presenta a las 2 horas de vida taquipnea (FR 80 rpm), pero sin quejido, retracciones mínimas y saturación de O₂ 95% en aire ambiente. La radiografía muestra líquido en cisuras y leve cardiomegalia. ¿Cuál es el diagnóstico más probable y por qué esta condición es más común en cesáreas?",
    keyPoints: [
      "Taquipnea transitoria del recién nacido",
      "Reabsorción retardada de líquido pulmonar fetal",
      "Ausencia del trabajo de parto",
      "Autolimitada (24-72 horas)",
      "Diferencia con SDR",
    ],
    modelAnswer:
      "El diagnóstico es taquipnea transitoria del recién nacido (TTRN). Durante la vida fetal, los pulmones están llenos de líquido secretado por epitelio pulmonar. Al nacer, debe absorberse rápidamente por: 1) compresión torácica durante paso por canal del parto, 2) aumento de catecolaminas que activan canales de sodio (ENaC) para reabsorción activa del líquido, 3) disminución de producción de líquido pulmonar. En cesárea electiva SIN trabajo de parto, estos mecanismos no ocurren completamente, resultando en retraso en reabsorción del líquido pulmonar. Esto causa taquipnea compensatoria para mantener oxigenación adecuada. Se diferencia del SDR porque: no hay quejido significativo, las retracciones son leves, mejora rápidamente (24-72h) y la radiografía muestra líquido en cisuras (no patrón de vidrio esmerilado). El manejo es de soporte: oxígeno suplementario mínimo si necesario, restricción hídrica leve y observación. El pronóstico es excelente con resolución completa sin secuelas.",
  },
  {
    id: 10,
    question:
      "Un prematuro de 26 semanas ha estado en ventilación mecánica por 30 días y aún requiere oxígeno suplementario. Desarrolla taquipnea crónica con retracciones y sibilancias. La radiografía muestra áreas de atelectasia alternando con hiperinsuflación. ¿Qué complicación ha desarrollado y cuál es su fisiopatología?",
    keyPoints: [
      "Displasia broncopulmonar (DBP)",
      "Prematuridad extrema con pulmón inmaduro",
      "Daño por ventilación mecánica (barotrauma/volutrauma)",
      "Toxicidad por oxígeno",
      "Inflamación crónica",
    ],
    modelAnswer:
      "Este prematuro ha desarrollado displasia broncopulmonar (DBP), la enfermedad pulmonar crónica más común en neonatos. La fisiopatología es multifactorial: 1) INMADUREZ PULMONAR: a las 26 semanas, los pulmones están en fase sacular temprana con desarrollo alveolar incompleto, deficiencia de surfactante y antioxidantes, 2) DAÑO POR VENTILACIÓN: el barotrauma (presión alta) y volutrauma (volúmenes excesivos) causan distensión alveolar, ruptura de membranas y liberación de mediadores inflamatorios, 3) TOXICIDAD POR OXÍGENO: el O₂ genera radicales libres que dañan epitelio alveolar, inactivan surfactante y causan fibrosis, 4) INFLAMACIÓN: neutrófilos y citoquinas proinflamatorias perpetúan el daño, 5) INFECCIÓN: la ventilación mecánica aumenta riesgo de neumonía que empeora el daño. El resultado es: desarrollo alveolar anormal, fibrosis intersticial, hiperreactividad bronquial y remodelación vascular pulmonar. Clínicamente: dependencia prolongada de O₂, taquipnea, retracciones, sibilancias. Definición: necesidad de O₂ a las 36 semanas de edad postmenstrual en prematuros <32 semanas. El manejo incluye: estrategias ventilatorias protectoras (bajos volúmenes, PEEP adecuado), destete gradual de O₂, nutrición óptima, diuréticos, broncodilatadores, tratamiento agresivo de infecciones. Pronóstico: mejora gradual en meses-años, pero mayor riesgo de hospitalizaciones por infecciones respiratorias y problemas pulmonares crónicos.",
  },
  {
    id: 11,
    question:
      "Un prematuro de 24 semanas desarrolla apnea, bradicardia y desaturación repetidas durante la primera semana de vida. El ultrasonido transfontanelar muestra sangrado en la matriz germinal que se extiende a los ventrículos laterales con dilatación ventricular. ¿Qué complicación presenta y por qué los prematuros extremos son tan susceptibles a esta condición?",
    keyPoints: [
      "Hemorragia intraventricular grado III",
      "Matriz germinal periventricular frágil",
      "Fluctuaciones de presión arterial cerebral",
      "Inmadurez de autorregulación cerebrovascular",
      "Riesgo de hidrocefalia posthemorrágica",
    ],
    modelAnswer:
      "Este prematuro presenta hemorragia intraventricular (HIV) grado III según clasificación de Papile. Los prematuros extremos (<28 semanas) son especialmente susceptibles por: 1) MATRIZ GERMINAL: es una zona periventricular altamente vascularizada con capilares frágiles de pared delgada sin soporte conectivo, presente solo en prematuros (involuciona a las 34 semanas), 2) AUTORREGULACIÓN CEREBROVASCULAR INMADURA: los prematuros no pueden mantener flujo sanguíneo cerebral constante ante cambios de presión arterial, por lo que cualquier fluctuación (hipotensión, hipertensión, hipercarbia) causa flujo sanguíneo cerebral fluctuante que rompe capilares frágiles, 3) HIPOXIA-ISQUEMIA: el SDR y las apneas causan hipoxemia que daña el endotelio vascular, 4) AUMENTO DE PRESIÓN VENOSA: la ventilación mecánica, neumotórax o manipulación excesiva aumentan presión venosa cerebral, 5) TRASTORNOS DE COAGULACIÓN: trombocitopenia, déficit de vitamina K. La sangre de la matriz germinal se extiende al ventrículo (HIV grado II-III) y puede progresar a parénquima (grado IV). El grado III presenta dilatación ventricular que puede evolucionar a hidrocefalia posthemorrágica por: obstrucción del flujo de LCR por coágulos o fibrosis de vellosidades aracnoideas que impide reabsorción. Las consecuencias incluyen: parálisis cerebral (especialmente diplejía espástica), retraso cognitivo, convulsiones. La prevención incluye: corticosteroides prenatales, manejo gentil del prematuro, evitar fluctuaciones hemodinámicas, corrección de trastornos de coagulación. El diagnóstico se realiza con ultrasonido transfontanelar seriado (primero a las 3-7 días de vida).",
  },
  {
    id: 12,
    question:
      "Un recién nacido a término presenta cianosis que no mejora con oxígeno al 100%, frecuencia cardíaca de 180 lpm y antecedente de líquido amniótico con meconio espeso. La gasometría muestra hipoxemia severa con gradiente alveolo-arterial muy aumentado. El ecocardiograma muestra cortocircuito derecha-izquierda a nivel de ductus y foramen ovale sin cardiopatía estructural. ¿Qué condición presenta y cuál es su fisiopatología?",
    keyPoints: [
      "Hipertensión pulmonar persistente del recién nacido",
      "Falla en transición circulatoria normal",
      "Resistencia vascular pulmonar elevada",
      "Cortocircuito de derecha a izquierda",
      "Causas: aspiración meconial, hipoxia, sepsis",
    ],
    modelAnswer:
      "Este neonato presenta hipertensión pulmonar persistente del recién nacido (PPHN). Normalmente al nacer, con las primeras respiraciones y el aumento de PO₂, la resistencia vascular pulmonar (RVP) disminuye dramáticamente permitiendo el flujo pulmonar adecuado. En PPHN, esta transición FALLA y la RVP permanece elevada (>resistencia sistémica), causando cortocircuito de derecha a izquierda (D→I) a través del foramen ovale y/o ductus arterioso permeable, resultando en hipoxemia severa. La fisiopatología incluye: 1) VASOCONSTRICCIÓN PULMONAR: hipoxia, acidosis, hipotermia causan constricción de arteriolas pulmonares, 2) REMODELACIÓN VASCULAR: hipertrofia de músculo liso en arteriolas pulmonares (en casos crónicos in útero), 3) HIPOPLASIA VASCULAR: disminución del número de vasos pulmonares, 4) DISFUNCIÓN ENDOTELIAL: menor producción de óxido nítrico (vasodilatador endógeno). Las causas principales son: aspiración meconial (causa vasoconstricción e inflamación), SDR severo, sepsis/neumonía (liberan endotoxinas vasoconstrictoras), hipoplasia pulmonar (hernia diafragmática, oligohidramnios), policitemia, hipoglucemia, hipotermia. La clave diagnóstica es: hipoxemia DESPROPORCIONADA a la patología pulmonar, que NO responde a oxígeno 100% (test de hiperoxia), diferencia de saturación pre-post ductal >10% (indica cortocircuito ductal D→I), ecocardiografía confirma cortocircuito y excluye cardiopatía estructural. El tratamiento incluye: 1) ÓXIDO NÍTRICO inhalado (20 ppm): vasodilatador pulmonar selectivo, 2) VENTILACIÓN MECÁNICA: alta FiO₂, alcalosis respiratoria leve (pH 7.45-7.50 dilata vasos pulmonares), 3) SEDACIÓN: fentanilo/morfina reduce stress y consumo de O₂, 4) INOTRÓPICOS: dopamina/dobutamina mantienen gasto cardíaco y presión sistémica >pulmonar, 5) SILDENAFIL: inhibidor de fosfodiesterasa-5, vasodilatador pulmonar, 6) ECMO: oxigenación por membrana extracorpórea si refractario. El pronóstico depende de la causa subyacente y la respuesta al tratamiento.",
  },
];
