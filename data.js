// Data based on Pediatrics PDF content - EXPANDED VERSION

const multipleChoiceQuestions = [
  {
    id: 1,
    question: "¿Cuál es la definición correcta de recién nacido prematuro?",
    options: [
      "Nacido antes de las 42 semanas de gestación",
      "Nacido antes de las 37 semanas de gestación",
      "Nacido con peso menor a 2500g",
      "Nacido entre las 38-40 semanas de gestación",
    ],
    correct: 1,
    explanation:
      "Un recién nacido prematuro o pretérmino es aquel que nace antes de completar las 37 semanas de gestación, independientemente de su peso al nacer.",
  },
  {
    id: 2,
    question: "¿Cuál es el principal componente del surfactante pulmonar?",
    options: [
      "Proteínas plasmáticas",
      "Fosfatidilcolina (lecitina)",
      "Hemoglobina fetal",
      "Inmunoglobulinas",
    ],
    correct: 1,
    explanation:
      "El surfactante pulmonar está compuesto principalmente por fosfatidilcolina (lecitina), que es esencial para reducir la tensión superficial alveolar y prevenir el colapso pulmonar.",
  },
  {
    id: 3,
    question:
      "¿A qué edad gestacional se considera que los pulmones fetales comienzan a producir surfactante en cantidades suficientes?",
    options: ["20-24 semanas", "26-28 semanas", "34-36 semanas", "40 semanas"],
    correct: 2,
    explanation:
      "La producción adecuada de surfactante pulmonar generalmente ocurre alrededor de las 34-36 semanas de gestación, lo que reduce significativamente el riesgo de síndrome de dificultad respiratoria.",
  },
  {
    id: 4,
    question:
      "¿Cuál es la causa más común de dificultad respiratoria en recién nacidos prematuros?",
    options: [
      "Neumonía neonatal",
      "Síndrome de aspiración meconial",
      "Enfermedad de membrana hialina (déficit de surfactante)",
      "Cardiopatía congénita",
    ],
    correct: 2,
    explanation:
      "La enfermedad de membrana hialina, causada por déficit de surfactante pulmonar, es la causa más común de dificultad respiratoria en prematuros, especialmente en aquellos menores de 34 semanas.",
  },
  {
    id: 5,
    question:
      "¿Cuál es el signo clínico característico del síndrome de dificultad respiratoria del recién nacido?",
    options: [
      "Hipertermia y convulsiones",
      "Taquipnea, quejido espiratorio y retracciones",
      "Cianosis periférica aislada",
      "Bradicardia e hipotensión",
    ],
    correct: 1,
    explanation:
      "Los signos clásicos del SDR incluyen taquipnea (>60 rpm), quejido espiratorio (mecanismo compensatorio para mantener presión positiva), retracciones intercostales y subcostales, y aleteo nasal.",
  },
  {
    id: 6,
    question:
      "¿Cuál es el tratamiento principal para el síndrome de dificultad respiratoria por déficit de surfactante?",
    options: [
      "Antibióticos intravenosos",
      "Administración de surfactante exógeno y soporte ventilatorio",
      "Transfusión sanguínea",
      "Fototerapia intensiva",
    ],
    correct: 1,
    explanation:
      "El tratamiento principal incluye la administración de surfactante exógeno directamente en la tráquea y soporte ventilatorio adecuado (CPAP o ventilación mecánica según necesidad).",
  },
  {
    id: 7,
    question:
      "¿Qué medicamento se administra a la madre para acelerar la maduración pulmonar fetal en caso de amenaza de parto prematuro?",
    options: [
      "Oxitocina",
      "Corticosteroides (betametasona o dexametasona)",
      "Sulfato de magnesio",
      "Antibióticos profilácticos",
    ],
    correct: 1,
    explanation:
      "Los corticosteroides prenatales (betametasona o dexametasona) aceleran la maduración pulmonar fetal y la producción de surfactante cuando hay riesgo de parto prematuro entre las 24-34 semanas.",
  },
  {
    id: 8,
    question: "¿Cuál es la definición de ictericia neonatal patológica?",
    options: [
      "Ictericia que aparece después del tercer día de vida",
      "Ictericia que aparece en las primeras 24 horas de vida o con bilirrubina >5mg/dL por día",
      "Cualquier ictericia que dura más de una semana",
      "Ictericia que solo afecta la cara",
    ],
    correct: 1,
    explanation:
      "La ictericia patológica se caracteriza por: aparición en las primeras 24 horas de vida, aumento de bilirrubina >5mg/dL por día, niveles de bilirrubina total >12mg/dL en término o persistencia >2 semanas.",
  },
  {
    id: 9,
    question:
      "¿Cuál es la causa más común de ictericia fisiológica en recién nacidos?",
    options: [
      "Incompatibilidad ABO",
      "Inmadurez hepática y aumento de bilirrubina indirecta",
      "Atresia de vías biliares",
      "Sepsis neonatal",
    ],
    correct: 1,
    explanation:
      "La ictericia fisiológica se debe a la inmadurez del sistema enzimático hepático (glucuronil transferasa) y al aumento de producción de bilirrubina por mayor destrucción de glóbulos rojos fetales.",
  },
  {
    id: 10,
    question:
      "¿Cuál es el tratamiento principal para la hiperbilirrubinemia neonatal significativa?",
    options: [
      "Antibióticos de amplio espectro",
      "Fototerapia y/o exanguinotransfusión",
      "Restricción de la lactancia materna",
      "Suplementos de vitamina K",
    ],
    correct: 1,
    explanation:
      "La fototerapia es el tratamiento de primera línea, convirtiendo la bilirrubina en isómeros hidrosolubles. La exanguinotransfusión se reserva para casos severos con riesgo de kernicterus.",
  },
  {
    id: 11,
    question: "¿Qué es el kernicterus?",
    options: [
      "Una infección del sistema nervioso central",
      "Encefalopatía por depósito de bilirrubina en núcleos basales del cerebro",
      "Una malformación congénita del cerebro",
      "Un tipo de hemorragia intraventricular",
    ],
    correct: 1,
    explanation:
      "El kernicterus es una encefalopatía bilirrubínica crónica causada por el depósito de bilirrubina no conjugada en los ganglios basales y núcleos del tronco cerebral, causando daño neurológico permanente.",
  },
  {
    id: 12,
    question:
      "¿Cuál es la principal complicación de la hiperbilirrubinemia severa no tratada?",
    options: [
      "Anemia crónica",
      "Daño neurológico permanente (kernicterus)",
      "Insuficiencia renal",
      "Problemas cardíacos",
    ],
    correct: 1,
    explanation:
      "La hiperbilirrubinemia severa puede causar kernicterus, resultando en parálisis cerebral, sordera neurosensorial, retraso del desarrollo y trastornos del movimiento.",
  },
  {
    id: 13,
    question:
      "En la incompatibilidad Rh, ¿qué prueba es fundamental para detectar anticuerpos maternos contra eritrocitos fetales?",
    options: [
      "Prueba de Apgar",
      "Test de Coombs directo e indirecto",
      "Hemocultivo",
      "Prueba del talón",
    ],
    correct: 1,
    explanation:
      "El test de Coombs indirecto detecta anticuerpos anti-Rh en el suero materno, mientras que el Coombs directo identifica anticuerpos adheridos a los eritrocitos del neonato.",
  },
  {
    id: 14,
    question:
      "¿Cuál es el mecanismo de acción de la fototerapia en la hiperbilirrubinemia?",
    options: [
      "Aumenta la producción de enzimas hepáticas",
      "Convierte la bilirrubina en isómeros hidrosolubles que pueden excretarse",
      "Destruye los glóbulos rojos excedentes",
      "Estimula la médula ósea",
    ],
    correct: 1,
    explanation:
      "La fototerapia usa luz azul (425-475nm) que fotoisomeriza la bilirrubina no conjugada en isómeros estructurales (lumirrubina) más hidrosolubles que pueden excretarse sin conjugación.",
  },
  {
    id: 15,
    question:
      "¿Cuál es la diferencia principal entre la ictericia por leche materna temprana y tardía?",
    options: [
      "Una es patológica y la otra fisiológica",
      "La temprana aparece en la primera semana por deshidratación, la tardía después de la primera semana por factores en la leche",
      "Una afecta solo prematuros y la otra a término",
      "No hay diferencia, son lo mismo",
    ],
    correct: 1,
    explanation:
      "La ictericia temprana (primera semana) se relaciona con ingesta inadecuada y deshidratación. La tardía (>1 semana) se debe a factores en la leche materna que inhiben la conjugación de bilirrubina.",
  },
  {
    id: 16,
    question: "¿Qué es la enfermedad hemorrágica del recién nacido?",
    options: [
      "Un trastorno de la coagulación por deficiencia de vitamina K",
      "Una infección que causa sangrado",
      "Un trauma obstétrico",
      "Una malformación vascular",
    ],
    correct: 0,
    explanation:
      "Es un trastorno hemorrágico causado por deficiencia de vitamina K, que es necesaria para la síntesis de factores de coagulación II, VII, IX y X en el hígado.",
  },
  {
    id: 17,
    question:
      "¿Cuándo se clasifica la enfermedad hemorrágica del recién nacido como 'temprana'?",
    options: [
      "Primeras 24 horas de vida",
      "2-7 días de vida",
      "2-12 semanas de vida",
      "Después de los 3 meses",
    ],
    correct: 0,
    explanation:
      "Se clasifica en: temprana (<24h, relacionada con medicamentos maternos), clásica (2-7 días, por lactancia exclusiva sin profilaxis) y tardía (2-12 semanas, malabsorción o hepatopatía).",
  },
  {
    id: 18,
    question:
      "¿Cuál es la medida preventiva más efectiva contra la enfermedad hemorrágica del recién nacido?",
    options: [
      "Transfusión de plaquetas",
      "Administración de vitamina K intramuscular al nacer",
      "Antibióticos profilácticos",
      "Inicio temprano de fórmula artificial",
    ],
    correct: 1,
    explanation:
      "La administración de vitamina K IM (1mg) al nacimiento es la medida preventiva estándar y altamente efectiva, recomendada por la AAP para todos los recién nacidos.",
  },
  {
    id: 19,
    question:
      "¿Cuál es el agente etiológico más común de la sepsis neonatal temprana?",
    options: [
      "Escherichia coli",
      "Streptococcus agalactiae (Grupo B)",
      "Staphylococcus aureus",
      "Listeria monocytogenes",
    ],
    correct: 1,
    explanation:
      "El Streptococcus agalactiae (Estreptococo del Grupo B o EGB) es la causa más común de sepsis neonatal temprana, transmitido por colonización materna vaginal/rectal.",
  },
  {
    id: 20,
    question: "¿Cuál es la definición de sepsis neonatal temprana?",
    options: [
      "Infección que ocurre en las primeras 72 horas de vida",
      "Infección que ocurre después de los 7 días de vida",
      "Cualquier infección durante el primer mes",
      "Infección que solo ocurre en prematuros",
    ],
    correct: 0,
    explanation:
      "La sepsis neonatal temprana ocurre en las primeras 72 horas de vida, generalmente por transmisión vertical (madre-hijo) durante el parto o por infección intrauterina ascendente.",
  },
  {
    id: 21,
    question: "¿Cuáles son los signos clínicos más comunes de sepsis neonatal?",
    options: [
      "Solo fiebre y vómitos",
      "Inestabilidad térmica, dificultad respiratoria, letargia, rechazo al alimento",
      "Únicamente convulsiones",
      "Siempre presenta fiebre alta",
    ],
    correct: 1,
    explanation:
      "Los signos de sepsis neonatal son inespecíficos: inestabilidad térmica (hipo/hipertermia), dificultad respiratoria, letargia, rechazo alimentario, distensión abdominal, ictericia, petequias.",
  },
  {
    id: 22,
    question:
      "¿Cuál es el esquema antibiótico empírico inicial más utilizado para sepsis neonatal temprana?",
    options: [
      "Vancomicina + Gentamicina",
      "Ampicilina + Gentamicina (o Cefotaxima)",
      "Ceftriaxona + Metronidazol",
      "Penicilina + Amikacina",
    ],
    correct: 1,
    explanation:
      "El esquema empírico estándar es Ampicilina (cubre EGB y Listeria) + Gentamicina o Cefotaxima (cubre Gram negativos como E. coli), ajustado según cultivos y antibiograma.",
  },
  {
    id: 23,
    question:
      "¿Qué prueba de laboratorio es más útil para detectar infección neonatal temprana?",
    options: [
      "Glucosa en sangre",
      "Hemocultivo y proteína C reactiva",
      "Electrocardiograma",
      "Ecografía abdominal",
    ],
    correct: 1,
    explanation:
      "El hemocultivo es el gold standard para diagnóstico definitivo. La PCR (Proteína C Reactiva) y procalcitonina son marcadores inflamatorios útiles. También se evalúa hemograma completo y punción lumbar si es posible.",
  },
  {
    id: 24,
    question: "¿Qué es la hipoglucemia neonatal?",
    options: [
      "Glucosa en sangre >150 mg/dL",
      "Glucosa en sangre <40-45 mg/dL en neonatos sintomáticos o <25-30 mg/dL asintomáticos",
      "Cualquier nivel de glucosa en un recién nacido",
      "Solo afecta a bebés con diabetes materna",
    ],
    correct: 1,
    explanation:
      "Se define como glucosa <40-45 mg/dL en neonatos sintomáticos o <25-30 mg/dL en asintomáticos durante las primeras 24-48h. Los hijos de madres diabéticas tienen mayor riesgo.",
  },
  {
    id: 25,
    question: "¿Cuáles son los síntomas de hipoglucemia neonatal?",
    options: [
      "Hipertermia y diarrea",
      "Temblores, irritabilidad, letargia, apnea, convulsiones",
      "Solo llanto excesivo",
      "Siempre es asintomática",
    ],
    correct: 1,
    explanation:
      "Los síntomas incluyen temblores, irritabilidad, letargia, hipotonía, apnea, cianosis, rechazo al alimento y convulsiones. Puede ser asintomática, requiriendo tamizaje en grupos de riesgo.",
  },
  {
    id: 26,
    question:
      "¿Cuál es el tratamiento inmediato para hipoglucemia neonatal sintomática?",
    options: [
      "Esperar y observar",
      "Administración de glucosa endovenosa (bolo seguido de infusión continua)",
      "Solo aumentar la frecuencia de alimentación",
      "Administrar insulina",
    ],
    correct: 1,
    explanation:
      "Hipoglucemia sintomática requiere bolo IV de glucosa al 10% (2mL/kg) seguido de infusión continua (6-8 mg/kg/min). Asintomática: intentar alimentación oral y reevaluar.",
  },
  {
    id: 27,
    question: "¿Qué es la enterocolitis necrotizante (ECN)?",
    options: [
      "Una infección viral intestinal",
      "Necrosis inflamatoria del intestino, más común en prematuros",
      "Un defecto congénito del intestino",
      "Una alergia alimentaria severa",
    ],
    correct: 1,
    explanation:
      "La ECN es una emergencia gastrointestinal con necrosis de la mucosa intestinal, principalmente en prematuros <32 semanas. Es multifactorial: inmadurez intestinal, isquemia, colonización bacteriana anormal.",
  },
  {
    id: 28,
    question: "¿Cuáles son los signos clínicos de enterocolitis necrotizante?",
    options: [
      "Solo vómitos ocasionales",
      "Distensión abdominal, residuos gástricos, heces sanguinolentas, inestabilidad clínica",
      "Únicamente diarrea acuosa",
      "Siempre presenta fiebre alta",
    ],
    correct: 1,
    explanation:
      "Los signos incluyen distensión abdominal, residuos gástricos biliosos/sanguinolentos, heces con sangre oculta/visible, letargia, apnea, inestabilidad térmica y shock séptico.",
  },
  {
    id: 29,
    question:
      "¿Cuál es el hallazgo radiológico patognomónico de enterocolitis necrotizante?",
    options: [
      "Calcificaciones hepáticas",
      "Neumatosis intestinal (gas en la pared intestinal)",
      "Cardiomegalia",
      "Fractura de costillas",
    ],
    correct: 1,
    explanation:
      "La neumatosis intestinal (gas intramural) es el hallazgo radiológico característico. También puede verse gas en vena porta y neumoperitoneo (indica perforación).",
  },
  {
    id: 30,
    question:
      "¿Cuál es el tratamiento inicial de la enterocolitis necrotizante?",
    options: [
      "Continuar alimentación y agregar probióticos",
      "Suspender alimentación oral, descompresión gástrica, antibióticos IV, soporte hemodinámico",
      "Solo antibióticos orales",
      "Cirugía inmediata en todos los casos",
    ],
    correct: 1,
    explanation:
      "Manejo médico: NPO absoluto, sonda nasogástrica, antibióticos IV (ampicilina + gentamicina + metronidazol), nutrición parenteral, monitoreo. Cirugía si hay perforación o necrosis masiva.",
  },
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

const trueFalseQuestions = [
  {
    id: 1,
    statement:
      "La ictericia que aparece en las primeras 24 horas de vida siempre es fisiológica",
    answer: false,
    explanation:
      "FALSO. La ictericia que aparece en las primeras 24 horas de vida se considera patológica y requiere evaluación inmediata, ya que puede indicar hemólisis (incompatibilidad ABO/Rh), sepsis u otras condiciones graves.",
  },
  {
    id: 2,
    statement:
      "Los recién nacidos prematuros tienen mayor riesgo de desarrollar síndrome de dificultad respiratoria por déficit de surfactante",
    answer: true,
    explanation:
      "VERDADERO. Los prematuros, especialmente <34 semanas, tienen pulmones inmaduros con producción insuficiente de surfactante, lo que lleva al colapso alveolar y dificultad respiratoria.",
  },
  {
    id: 3,
    statement:
      "La administración de vitamina K al nacimiento es opcional y no previene problemas graves",
    answer: false,
    explanation:
      "FALSO. La vitamina K IM al nacer es esencial y previene la enfermedad hemorrágica del recién nacido, que puede causar sangrados graves incluyendo hemorragia intracraneal.",
  },
  {
    id: 4,
    statement:
      "El Streptococcus agalactiae (Grupo B) es el patógeno más común en sepsis neonatal temprana",
    answer: true,
    explanation:
      "VERDADERO. El EGB es la causa más frecuente de sepsis neonatal temprana, transmitido por colonización materna vaginal durante el parto. Por esto se realiza cribado materno y profilaxis antibiótica intraparto.",
  },
  {
    id: 5,
    statement:
      "La fototerapia cura permanentemente la hiperbilirrubinemia eliminando la bilirrubina del cuerpo",
    answer: false,
    explanation:
      "FALSO. La fototerapia no elimina la bilirrubina, sino que la fotoisomeriza en formas más hidrosolubles (lumirrubina) que pueden excretarse más fácilmente por orina y bilis sin necesidad de conjugación hepática.",
  },
  {
    id: 6,
    statement:
      "Todos los recién nacidos deben recibir screening de hipoglucemia en las primeras horas de vida",
    answer: false,
    explanation:
      "FALSO. El screening de glucosa se reserva para grupos de riesgo: hijos de madres diabéticas, prematuros, RCIU, grandes para edad gestacional, asfixia perinatal, sepsis o síntomas de hipoglucemia.",
  },
  {
    id: 7,
    statement:
      "La enterocolitis necrotizante afecta principalmente a recién nacidos a término sanos",
    answer: false,
    explanation:
      "FALSO. La ECN afecta principalmente a prematuros <32 semanas (90% de casos) debido a inmadurez intestinal, aunque puede ocurrir en término con factores de riesgo como cardiopatía congénita o asfixia.",
  },
  {
    id: 8,
    statement:
      "El kernicterus es una complicación reversible de la hiperbilirrubinemia",
    answer: false,
    explanation:
      "FALSO. El kernicterus causa daño neurológico permanente e irreversible por depósito de bilirrubina en ganglios basales, resultando en parálisis cerebral, sordera y discapacidad intelectual.",
  },
  {
    id: 9,
    statement:
      "Los corticosteroides prenatales administrados a la madre entre 24-34 semanas de gestación ayudan a madurar los pulmones fetales",
    answer: true,
    explanation:
      "VERDADERO. Betametasona o dexametasona aceleran la maduración pulmonar fetal y la producción de surfactante, reduciendo significativamente el riesgo de SDR y otras complicaciones en prematuros.",
  },
  {
    id: 10,
    statement:
      "La ictericia por leche materna siempre es patológica y requiere suspender la lactancia",
    answer: false,
    explanation:
      "FALSO. La ictericia por leche materna (temprana o tardía) es benigna. No se recomienda suspender lactancia excepto brevemente (12-24h) en casos muy severos para confirmar diagnóstico.",
  },
  {
    id: 11,
    statement:
      "El test de Coombs directo positivo indica presencia de anticuerpos adheridos a los glóbulos rojos del bebé",
    answer: true,
    explanation:
      "VERDADERO. El Coombs directo detecta anticuerpos (IgG materno) unidos a eritrocitos fetales, indicando hemólisis inmune (incompatibilidad Rh, ABO u otros sistemas).",
  },
  {
    id: 12,
    statement: "La sepsis neonatal siempre se presenta con fiebre alta",
    answer: false,
    explanation:
      "FALSO. Los neonatos con sepsis frecuentemente presentan hipotermia en lugar de fiebre. Los signos son inespecíficos: inestabilidad térmica, letargia, rechazo alimentario, dificultad respiratoria.",
  },
  {
    id: 13,
    statement:
      "El surfactante exógeno se administra por vía intravenosa para tratar el síndrome de dificultad respiratoria",
    answer: false,
    explanation:
      "FALSO. El surfactante exógeno se administra directamente en la tráquea mediante intubación endotraqueal, permitiendo su distribución directa en los alvéolos pulmonares.",
  },
  {
    id: 14,
    statement:
      "La neumatosis intestinal en la radiografía es un hallazgo patognomónico de enterocolitis necrotizante",
    answer: true,
    explanation:
      "VERDADERO. La presencia de gas en la pared intestinal (neumatosis) es el signo radiológico característico de ECN, aunque no siempre está presente en etapas tempranas.",
  },
  {
    id: 15,
    statement: "La hipoglucemia neonatal asintomática no requiere tratamiento",
    answer: false,
    explanation:
      "FALSO. Aunque asintomática, la hipoglucemia puede causar daño neurológico. Se debe intentar corrección con alimentación oral y si persiste <40-45 mg/dL, requiere intervención con glucosa IV.",
  },
  {
    id: 16,
    statement:
      "El hemocultivo es la prueba diagnóstica definitiva para confirmar sepsis neonatal",
    answer: true,
    explanation:
      "VERDADERO. El hemocultivo es el gold standard para diagnóstico de sepsis, identificando el patógeno y permitiendo antibiograma. Sin embargo, puede ser negativo en 40-50% de casos con sepsis clínica.",
  },
  {
    id: 17,
    statement:
      "La alimentación enteral temprana en prematuros aumenta el riesgo de enterocolitis necrotizante",
    answer: false,
    explanation:
      "FALSO. La alimentación enteral mínima temprana (trófica) con leche materna es protectora. El riesgo aumenta con avance rápido de volúmenes (>20-30 mL/kg/día) y uso de fórmula.",
  },
  {
    id: 18,
    statement:
      "Los hijos de madres diabéticas tienen mayor riesgo de hipoglucemia neonatal",
    answer: true,
    explanation:
      "VERDADERO. La hiperglucemia materna causa hiperinsulinismo fetal. Al nacer, el neonato pierde el aporte materno de glucosa pero mantiene insulina elevada, causando hipoglucemia en las primeras horas.",
  },
  {
    id: 19,
    statement:
      "La sepsis neonatal tardía generalmente se adquiere por transmisión vertical durante el parto",
    answer: false,
    explanation:
      "FALSO. La sepsis tardía (>72 horas) suele ser nosocomial (hospitalaria) o comunitaria. La temprana (<72h) es por transmisión vertical. Los patógenos también difieren (Gram+ en tardía vs mixto en temprana).",
  },
  {
    id: 20,
    statement:
      "El quejido espiratorio en un recién nacido es un mecanismo compensatorio para mantener presión pulmonar positiva",
    answer: true,
    explanation:
      "VERDADERO. El quejido (gruñido) es causado por cierre glótico durante espiración, generando PEEP fisiológico para prevenir colapso alveolar en patología pulmonar (SDR, neumonía, etc).",
  },
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

const justificationQuestions = [
  {
    id: 1,
    question:
      "Un recién nacido de 30 semanas desarrolla dificultad respiratoria progresiva a las 2 horas de vida con taquipnea, quejido y cianosis. La radiografía muestra patrón de 'vidrio esmerilado'. ¿Por qué este bebé desarrolló este cuadro y cuál es la fisiopatología?",
    keyPoints: [
      "Prematuridad (30 semanas) con pulmones inmaduros",
      "Déficit de surfactante pulmonar",
      "Colapso alveolar y atelectasias",
      "Aumento del trabajo respiratorio",
      "Alteración ventilación/perfusión",
    ],
    modelAnswer:
      "Este prematuro de 30 semanas desarrolló síndrome de dificultad respiratoria (SDR) por déficit de surfactante. A esta edad gestacional, los pneumocitos tipo II no producen suficiente surfactante, el cual es esencial para reducir la tensión superficial alveolar y prevenir el colapso al final de la espiración. Sin surfactante adecuado, los alvéolos colapsan (atelectasias), disminuye la compliance pulmonar y se genera hipoxemia por alteración de la relación ventilación/perfusión. Esto explica el patrón radiológico de 'vidrio esmerilado' con broncograma aéreo. El quejido espiratorio es un mecanismo compensatorio para generar PEEP fisiológico y mantener los alvéolos abiertos.",
  },
  {
    id: 2,
    question:
      "Un neonato a término presenta ictericia desde el nacimiento (12 horas de vida) con bilirrubina total de 15 mg/dL y Coombs directo positivo. La madre es O+ y el bebé A+. Explique la causa de esta ictericia y por qué es considerada patológica.",
    keyPoints: [
      "Aparición temprana (<24 horas)",
      "Incompatibilidad ABO maternofetal",
      "Hemólisis de eritrocitos fetales",
      "Coombs directo positivo confirma anticuerpos",
      "Riesgo de kernicterus",
    ],
    modelAnswer:
      "Esta ictericia es patológica por su aparición precoz (<24h) y se debe a incompatibilidad ABO. La madre tipo O tiene anticuerpos anti-A y anti-B naturales (IgG) que atraviesan la placenta. Al ser el bebé tipo A+, estos anticuerpos atacan sus eritrocitos causando hemólisis. El Coombs directo positivo confirma la presencia de anticuerpos IgG adheridos a los glóbulos rojos del bebé. La hemólisis excesiva libera grandes cantidades de bilirrubina que supera la capacidad hepática de conjugación del neonato. Es patológica porque: 1) aparece <24h, 2) niveles elevados (>12-13 mg/dL en término), 3) riesgo de aumento rápido (>5 mg/dL/día) y 4) potencial de kernicterus si no se trata. Requiere monitoreo estrecho, fototerapia y posiblemente exanguinotransfusión.",
  },
  {
    id: 3,
    question:
      "Un prematuro de 28 semanas desarrolla distensión abdominal, residuos gástricos biliosos y heces con sangre al séptimo día de vida. La radiografía muestra neumatosis intestinal. Justifique por qué los prematuros son más susceptibles a esta condición.",
    keyPoints: [
      "Inmadurez intestinal anatómica y funcional",
      "Barrera mucosa inmadura",
      "Motilidad intestinal disminuida",
      "Regulación vascular inmadura",
      "Sistema inmune inmaduro",
    ],
    modelAnswer:
      "Este cuadro corresponde a enterocolitis necrotizante (ECN), y los prematuros <32 semanas son especialmente vulnerables por múltiples factores fisiopatológicos. Primero, la inmadurez intestinal incluye una barrera mucosa deficiente con uniones intercelulares laxas, permitiendo translocación bacteriana. Segundo, la motilidad intestinal disminuida causa estasis, favoreciendo colonización bacteriana patológica. Tercero, la autorregulación vascular intestinal está alterada, predisponiendo a isquemia intestinal con episodios de hipoxia o hipoperfusión. Cuarto, el sistema inmune es inmaduro con menor producción de IgA secretora y menor capacidad de respuesta inflamatoria balanceada. La alimentación enteral (especialmente fórmula) introduce antígenos que en un intestino inmaduro desencadenan inflamación excesiva. Todos estos factores convergen causando daño mucoso, invasión bacteriana, liberación de mediadores inflamatorios y finalmente necrosis intestinal con neumatosis (gas intramural producido por bacterias).",
  },
  {
    id: 4,
    question:
      "Se administra vitamina K intramuscular a todos los recién nacidos al nacer. Explique por qué los neonatos son deficientes en vitamina K y las consecuencias de no administrarla.",
    keyPoints: [
      "Deficiencia de vitamina K al nacer",
      "Flora intestinal inmadura",
      "Vitamina K en leche materna insuficiente",
      "Factores de coagulación dependientes de vitamina K",
      "Riesgo de hemorragias graves",
    ],
    modelAnswer:
      "Los recién nacidos presentan deficiencia fisiológica de vitamina K por varios motivos: 1) transferencia placentaria limitada de vitamina K materna, 2) ausencia de flora intestinal (que normalmente sintetiza vitamina K2), 3) contenido bajo de vitamina K en calostro y leche materna, y 4) reservas hepáticas mínimas. La vitamina K es esencial como cofactor para la γ-carboxilación de factores de coagulación II (protrombina), VII, IX y X, así como proteínas C y S. Sin ella, estos factores permanecen inactivos (PIVKAs). Las consecuencias de no administrar vitamina K incluyen enfermedad hemorrágica del recién nacido con sangrados en piel, mucosas, gastrointestinales y lo más grave: hemorragia intracraneal (especialmente en forma tardía 2-12 semanas), que puede causar discapacidad permanente o muerte. La administración de 1 mg IM al nacer previene esta complicación potencialmente devastadora y es una intervención de alta evidencia recomendada universalmente.",
  },
  {
    id: 5,
    question:
      "Un neonato hijo de madre diabética presenta glucosa de 25 mg/dL con temblores y letargia a las 2 horas de vida. Explique la fisiopatología de la hipoglucemia en estos neonatos y por qué requiere tratamiento urgente.",
    keyPoints: [
      "Hiperglucemia materna durante embarazo",
      "Hiperinsulinismo fetal compensatorio",
      "Pérdida súbita de aporte de glucosa al nacer",
      "Insulina elevada persiste posnatalmente",
      "Cerebro neonatal dependiente de glucosa",
    ],
    modelAnswer:
      "Los hijos de madres diabéticas desarrollan hipoglucemia por un mecanismo fisiopatológico específico: durante el embarazo, la hiperglucemia materna atraviesa la placenta causando hiperglucemia fetal. El páncreas fetal responde con hiperplasia de células β e hiperinsulinismo compensatorio. Al nacer, se pierde súbitamente el aporte materno de glucosa, pero el neonato mantiene niveles elevados de insulina que continúan promoviendo captación celular de glucosa y suprimiendo gluconeogénesis y glucogenólisis. Esto resulta en hipoglucemia severa en las primeras horas. El tratamiento urgente es imperativo porque: 1) el cerebro neonatal depende exclusivamente de glucosa para metabolismo energético, 2) la hipoglucemia causa menor aporte de ATP cerebral, afectando bomba Na+/K+ y generando despolarización neuronal, 3) puede causar convulsiones y 4) la hipoglucemia neonatal recurrente o prolongada se asocia con daño neurológico permanente, deterioro cognitivo y problemas del neurodesarrollo. Se requiere bolo IV de glucosa seguido de infusión continua.",
  },
  {
    id: 6,
    question:
      "La fototerapia se usa ampliamente para tratar la hiperbilirrubinemia neonatal. Explique detalladamente cómo funciona este tratamiento y por qué la bilirrubina elevada es peligrosa para el cerebro neonatal.",
    keyPoints: [
      "Fotoisomerización de bilirrubina",
      "Conversión a isómeros hidrosolubles",
      "Excreción sin conjugación hepática",
      "Bilirrubina no conjugada liposoluble",
      "Atraviesa barrera hematoencefálica inmadura",
    ],
    modelAnswer:
      "La fototerapia utiliza luz azul (longitud de onda 425-475 nm) que es absorbida por la bilirrubina no conjugada en piel y capilares subcutáneos. Esta energía lumínica causa dos reacciones fotoquímicas: 1) fotoisomerización estructural, convirtiendo la bilirrubina IXα-ZZ (forma nativa) en isómeros geométricos y 2) fotooxidación a fotobilirrubina (lumirrubina), más hidrosoluble. Estos fotoproductos pueden excretarse directamente por bilis y orina sin necesitar conjugación hepática. El peligro de la hiperbilirrubinemia radica en que la bilirrubina no conjugada es liposoluble y puede atravesar la barrera hematoencefálica, especialmente inmadura en neonatos. Factores que aumentan el riesgo incluyen: prematuridad, hipoalbuminemia, acidosis y drogas que desplazan bilirrubina de albúmina. Una vez en el cerebro, la bilirrubina se deposita en ganglios basales (globo pálido, núcleos subtalámicos) y núcleos del tronco, causando disfunción mitocondrial, estrés oxidativo y muerte neuronal (kernicterus). Esto resulta en parálisis cerebral atetósica, sordera neurosensorial y retraso del desarrollo.",
  },
  {
    id: 7,
    question:
      "Un prematuro extremo de 26 semanas recibe corticosteroides prenatales (betametasona) a su madre 48 horas antes del parto. Justifique cómo este tratamiento reduce las complicaciones respiratorias y otras complicaciones neonatales.",
    keyPoints: [
      "Aceleración de maduración pulmonar",
      "Estimulación de producción de surfactante",
      "Inducción de enzimas antioxidantes",
      "Mejora de estructura alveolar",
      "Efectos en otros órganos",
    ],
    modelAnswer:
      "Los corticosteroides prenatales (betametasona o dexametasona) son fundamentales para mejorar el pronóstico de prematuros. Su mecanismo incluye múltiples efectos: 1) Estimulan la diferenciación de pneumocitos tipo II y la síntesis de surfactante (fosfatidilcolina y proteínas surfactantes), 2) Adelgazan el tabique alveolar y aumentan el área de superficie para intercambio gaseoso, 3) Inducen enzimas antioxidantes pulmonares protegiendo contra daño por radicales libres, 4) Aumentan la compliance pulmonar y disminuyen la permeabilidad vascular. Los beneficios demostrados incluyen: reducción de 40-50% en SDR, 50-70% en hemorragia intraventricular, 40-50% en enterocolitis necrotizante, y disminución de mortalidad neonatal en 30-40%. Los corticosteroides también aceleran la maduración cerebral, cardiovascular e intestinal. El efecto máximo se logra entre 24 horas y 7 días post-administración. Se administran entre 24-34 semanas de gestación cuando existe riesgo de parto prematuro. Es una de las intervenciones con mayor impacto costo-efectividad en medicina perinatal.",
  },
  {
    id: 8,
    question:
      "Un neonato presenta signos de sepsis (letargia, inestabilidad térmica, dificultad respiratoria) pero los hemocultivos son negativos. ¿Por qué se debe continuar el tratamiento antibiótico a pesar de cultivos negativos? Justifique considerando la sensibilidad de las pruebas y consecuencias de la sepsis no tratada.",
    keyPoints: [
      "Sensibilidad limitada de hemocultivos (50-60%)",
      "Volumen de muestra limitado en neonatos",
      "Sepsis clínica con marcadores inflamatorios",
      "Consecuencias devastadoras de sepsis no tratada",
      "Enfoque: mejor sobretratamiento que subtratamiento",
    ],
    modelAnswer:
      "La decisión de continuar antibióticos a pesar de cultivos negativos se basa en varios principios: 1) Los hemocultivos tienen sensibilidad limitada (50-60%), especialmente en neonatos donde el volumen de sangre obtenible es pequeño (<1 mL vs óptimo 1-2 mL), reduciendo la capacidad de detectar bacteremia de bajo grado, 2) Algunos patógenos son difíciles de cultivar o pueden estar presentes solo en tejidos sin bacteremia continua, 3) La sepsis neonatal puede ser 'clínica' con signos claros pero cultivos negativos si la bacteria fue contenida localmente o por inicio de antibióticos tempranos, 4) Los biomarcadores (PCR elevado, procalcitonina alta, índice I/T >0.2) apoyan infección activa, 5) Las consecuencias de sepsis no tratada son catastróficas: shock séptico, disfunción multiorgánica, meningitis con secuelas neurológicas permanentes y muerte (mortalidad 10-50% según germen). En neonatología, el principio es 'más vale pecar por exceso que por defecto'. Se completa típicamente 7-10 días de antibióticos si sospecha alta persiste con evolución clínica compatible, reevaluando diariamente. Si evolución favorable y marcadores normalizan, puede suspenderse a 48-72h con cultivos negativos.",
  },
  {
    id: 9,
    question:
      "¿Por qué la Taquipnea Transitoria del Recién Nacido (TTRN) es más frecuente en cesáreas electivas sin trabajo de parto? Explique el mecanismo fisiopatológico de reabsorción del líquido pulmonar fetal y cómo el trabajo de parto facilita este proceso.",
    keyPoints: [
      "Líquido pulmonar fetal secretado durante gestación",
      "Reabsorción por canales de sodio ENaC",
      "Catecolaminas del parto activan reabsorción",
      "Cesárea sin trabajo de parto: falta estímulo hormonal",
      "Compresión torácica durante parto vaginal expulsa líquido",
    ],
    modelAnswer:
      "La TTRN resulta del retraso en la reabsorción del líquido pulmonar fetal. Durante la gestación, los pulmones fetales secretan activamente líquido (25-30 mL/kg) esencial para el desarrollo alveolar. Al nacimiento, debe cambiar de secreción a reabsorción rápida: 1) Los canales epiteliales de sodio (ENaC) en neumocitos tipo I y II absorben sodio y agua sigue por ósmosis hacia el intersticio y sistema linfático, 2) Las catecolaminas (adrenalina, noradrenalina) liberadas durante el trabajo de parto activan estos canales ENaC y aumentan la expresión de acuaporinas, 3) La compresión torácica durante el parto vaginal expulsa mecánicamente ~1/3 del líquido por nariz/boca, 4) Las primeras respiraciones generan presiones negativas que favorecen la expansión alveolar y el drenaje linfático. En cesáreas electivas SIN trabajo de parto: falta el 'switch' hormonal (catecolaminas bajas), los canales ENaC están menos activos, no hay compresión torácica, resultando en líquido residual que causa taquipnea. Por eso TTRN es 5-6 veces más frecuente en cesáreas electivas <39 semanas. El líquido residual en el intersticio perivascular causa imagen radiológica de 'líneas perihiliares' y líquido en cisuras. Se resuelve típicamente en 24-72h a medida que los mecanismos de reabsorción se activan postnatalmente.",
  },
  {
    id: 10,
    question:
      "Un prematuro de 28 semanas desarrolla Displasia Broncopulmonar (DBP). ¿Cuáles son los mecanismos patogénicos principales y por qué estos bebés tienen mayor riesgo de hospitalizaciones recurrentes por infecciones respiratorias durante los primeros 2 años de vida?",
    keyPoints: [
      "DBP: daño pulmonar crónico por ventilación + oxígeno + inmadurez",
      "Arrestó del desarrollo alveolar (menos alvéolos, más grandes)",
      "Hiperreactividad bronquial y remodelación vascular",
      "Menor inmunidad local respiratoria",
      "Mayor susceptibilidad a VSR, rinovirus, influenza",
    ],
    modelAnswer:
      "La DBP es una enfermedad pulmonar crónica multifactorial en prematuros: 1) PATOGENIA: La combinación de inmadurez pulmonar extrema (<32 sem), ventilación mecánica (volutrauma/barotrauma), exposición a oxígeno suplementario (estrés oxidativo), infecciones e inflamación causan un daño que interrumpe el desarrollo alveolar normal. En lugar de desarrollar ~300 millones de alvéolos pequeños, estos bebés forman menos alvéolos (~50-100 millones) pero de mayor tamaño (enfisema), con paredes más gruesas (fibrosis) y menor superficie para intercambio gaseoso, 2) CONSECUENCIAS ESTRUCTURALES: Vías aéreas con hiperreactividad (broncoespasmo fácil), remodelación vascular pulmonar con hipertensión pulmonar residual, cilios disfuncionales y menor producción de surfactante continuo, 3) INMUNIDAD COMPROMETIDA: Menor IgA secretora, macrófagos alveolares disfuncionales, respuesta inflamatoria exagerada pero inefectiva, 4) IMPACTO CLÍNICO: Durante los primeros 2 años tienen hospitalizaciones frecuentes por VSR (virus sincicial respiratorio), rinovirus, metapneumovirus e influenza porque: vías aéreas pequeñas se obstruyen fácilmente con edema/moco, reserva respiratoria limitada, respuesta inflamatoria exagerada causa broncoespasmo severo. El VSR puede causar bronquiolitis grave con necesidad de UCIP. Por esto, estos niños requieren profilaxis con palivizumab (anticuerpo monoclonal anti-VSR), evitar exposición a infecciones, vacunación contra influenza y seguimiento neumológico estrecho.",
  },
  {
    id: 11,
    question:
      "Explique por qué la Retinopatía del Prematuro (ROP) es una enfermedad bifásica y cómo el oxígeno juega roles opuestos en sus dos fases. ¿Por qué es crucial el timing de los exámenes oftalmológicos?",
    keyPoints: [
      "Fase 1 (hiperoxia relativa): detiene VEGF, cesa vascularización",
      "Fase 2 (hipoxia relativa): VEGF excesivo, neovascularización patológica",
      "Zona I más grave, más cercana a mácula",
      "Screening 4-6 semanas vida o 31 semanas EPC",
      "Ventana terapéutica crítica: pre-desprendimiento",
    ],
    modelAnswer:
      "La ROP es un trastorno de vascularización retiniana con dos fases patogénicas: FASE 1 (HIPEROXIA RELATIVA, semanas 0-4 posnatal): Normalmente, la retina fetal se vasculariza desde la semana 16 hasta las 40 semanas gestación, proceso guiado por hipoxia fisiológica que estimula VEGF (factor de crecimiento endotelial vascular). Cuando un prematuro extremo nace, la PaO2 ambiente (~60-80 mmHg) es 'hiperoxia' relativa vs útero (~20-30 mmHg). Esta hiperoxia suprime VEGF, DETENIENDO la vascularización retiniana normal. Queda retina avascular periférica. FASE 2 (HIPOXIA-ISQUEMIA, semanas 4-12+): La retina avascular periférica se vuelve metabólicamente activa (fotoreceptores madurando) pero SIN vasos que aporten oxígeno = HIPOXIA SEVERA. Esto desencadena EXPLOSIÓN de VEGF (niveles 10-100x normal), causando: 1) Neovascularización PATOLÓGICA (vasos frágiles, desorganizados, permeables), 2) Proliferación fibrovascular en vítreo, 3) Tracción sobre retina → desprendimiento → ceguera irreversible. El OXÍGENO es paradójico: demasiado en fase 1 detiene desarrollo normal; muy poco resulta en VEGF excesivo en fase 2. La ZONA afectada importa: Zona I (5mm central, alrededor nervio óptico/mácula) es MÁS grave (ROP posterior, rápida progresión), Zona II (media), Zona III (periférica). El TIMING de screening es CRÍTICO: Se inicia a las 4-6 semanas de vida cronológica O a las 31 semanas edad postconcepcional (lo que ocurra después) en <32 semanas o <1500g. Los exámenes seriados (cada 1-2 semanas según hallazgos) permiten detectar ROP umbral/pre-umbral ANTES de desprendimiento, cuando el tratamiento (láser fotocoagulación o anti-VEGF intravítreo como bevacizumab) puede detener progresión y salvar visión. La ventana terapéutica es estrecha (días-semanas), por eso los exámenes oportunos son ESENCIALES.",
  },
  {
    id: 12,
    question:
      "¿Por qué la Encefalopatía Hipóxico-Isquémica (EHI) moderada-severa se trata con hipotermia terapéutica dentro de las primeras 6 horas de vida? Explique la cascada de daño neuronal secundario y el mecanismo neuroprotector del enfriamiento.",
    keyPoints: [
      "Daño primario: hipoxia-isquemia aguda (no reversible)",
      "Daño secundario: reperfusión, inflamación, apoptosis (6-72h)",
      "Hipotermia (33.5°C) enlentece metabolismo cerebral",
      "Reduce liberación glutamato, radicales libres, apoptosis",
      "Ventana terapéutica: <6 horas, ideal <3 horas",
    ],
    modelAnswer:
      "La EHI sigue un patrón de daño bifásico: DAÑO PRIMARIO (minutos-horas durante evento hipóxico): Asfixia perinatal causa hipoxemia e isquemia cerebral. Las neuronas cambian a metabolismo anaeróbico (ineficiente), se agotan ATP y glucosa, las bombas Na+/K+ ATPasa fallan, hay despolarización membranal, edema citotóxico, y muerte neuronal por necrosis. Este daño primario ya está ESTABLECIDO al nacer y NO es reversible. DAÑO SECUNDARIO (6-72 horas post-evento, la 'ventana terapéutica'): Durante la reperfusión post-reanimación, paradójicamente se AMPLIFICA el daño por: 1) EXCITOTOXICIDAD: La despolarización causa liberación masiva de glutamato (neurotransmisor excitatorio) que sobreactiva receptores NMDA, entrando calcio excesivo que activa enzimas destructivas (caspasas, calpaínas, endonucleasas), 2) ESTRÉS OXIDATIVO: El oxígeno que regresa genera radicales libres (ROS) que dañan membranas, proteínas y ADN, 3) INFLAMACIÓN: Activación microglial y liberación de citoquinas (IL-6, TNF-α) amplifica lesión, 4) APOPTOSIS: Muerte celular programada en 'penumbra isquémica' (zona alrededor del núcleo necrótico) por activación de vías pro-apoptóticas. MECANISMO DE LA HIPOTERMIA TERAPÉUTICA (enfriar a 33-34°C por 72h): La reducción de 3-4°C de temperatura corporal: 1) ENLENTECE el metabolismo cerebral (~5% por cada grado), reduciendo demanda energética y producción de lactato, 2) DISMINUYE la liberación de glutamato y la excitotoxicidad, 3) REDUCE la producción de radicales libres y el estrés oxidativo, 4) ATENÚA la respuesta inflamatoria (menos citoquinas, menos activación microglial), 5) INHIBE las vías apoptóticas, salvando neuronas en la penumbra. La VENTANA es <6 horas (idealmente <3h) porque después de 6h el daño secundario ya se estableció. Los estudios muestran que la hipotermia reduce muerte o discapacidad severa de 60% a 45% (NNT=7), es MÁS efectiva en EHI moderada que severa. CRITERIOS: pH <7.0 o BE ≤-16, más signos clínicos/EEG de EHI moderada-severa, edad gestacional ≥36 semanas, inicio <6h vida. Tras 72h de enfriamiento, se recalienta lentamente (0.5°C/hora) para evitar rebote.",
  },
  {
    id: 13,
    question:
      "Un neonato hijo de madre diabética (HMD) nace macrosómico con hipoglucemia severa recurrente a pesar de alimentación frecuente. Explique la fisiopatología del hiperinsulinismo neonatal transitorio en HMD y por qué estos bebés tienen riesgo de policitemia, hipocalcemia e hiperbilirrubinemia además de hipoglucemia.",
    keyPoints: [
      "Hiperglucemia materna → hiperglucemia fetal → hiperplasia células beta",
      "Hiperinsulinismo persiste post-parto (fuente glucosa cortada)",
      "Policitemia: hiperinsulinismo + hipoxia crónica leve estimula EPO",
      "Hipocalcemia: hipoparatiroidismo funcional",
      "Hiperbilirrubinemia: policitemia + inmadurez hepática",
    ],
    modelAnswer:
      "El hijo de madre diabética (HMD) desarrolla múltiples complicaciones por exposición intrauterina a hiperglucemia materna y la respuesta fetal compensatoria: HIPOGLUCEMIA: 1) Durante la gestación, la hiperglucemia materna (glucosa cruza placenta libremente) causa hiperglucemia fetal persistente, 2) El páncreas fetal responde con HIPERPLASIA de células beta e HIPERINSULINISMO compensatorio (la insulina NO cruza placenta), 3) El exceso de insulina actúa como hormona anabólica: promueve síntesis de glucógeno, lipogénesis y crecimiento → MACROSOMÍA (>4 kg), 4) Al NACER, se corta súbitamente el suministro de glucosa (se pinza cordón) pero el hiperinsulinismo PERSISTE (las células beta hiperplásicas siguen secretando insulina excesiva por días-semanas), 5) Esta insulina excesiva: suprime gluconeogénesis hepática, suprime glucogenólisis, aumenta captación periférica de glucosa, suprime lipólisis y cetogénesis (no puede usar grasa como combustible alternativo), resultando en HIPOGLUCEMIA SEVERA RECURRENTE con incapacidad de generar cuerpos cetónicos ('hipoglucemia hipocetósica'). Requiere infusiones de glucosa IV a altas tasas (10-15 mg/kg/min vs normal 4-6), a veces necesitando glucagón o diazóxido para suprimir secreción de insulina. POLICITEMIA: El ambiente intrauterino con hiperglucemia causa hipoxia tisular crónica leve (↑consumo O2, ↓transporte) que estimula ERITROPOYETINA (EPO) fetal → ↑producción eritrocitos → Hto >65%. El hiperinsulinismo también estimula directamente eritropoyesis. La policitemia causa hiperviscosidad sanguínea (↑riesgo trombosis, enterocolitis) y síntomas neurológicos (letargia, convulsiones). HIPOCALCEMIA: El hiperinsulinismo inhibe las glándulas paratiroides fetales → hipoparatiroidismo funcional → ↓absorción calcio intestinal y ↓reabsorción renal → hipocalcemia (Ca <7 mg/dL) a 24-72h vida, causando temblores, hipertonía, convulsiones. HIPERBILIRRUBINEMIA: La policitemia causa ↑hemólisis (más eritrocitos envejeciendo) → ↑producción bilirrubina no conjugada. La inmadurez hepática relativa (↓glucuronil-transferasa) dificulta conjugación → ↑riesgo ictericia severa y kernicterus. OTROS RIESGOS: Síndrome de dificultad respiratoria (hiperinsulinismo retrasa maduración pulmonar/producción surfactante), miocardiopatía hipertrófica (septo interventricular engrosado por efecto insulina en miocardio), malformaciones congénitas si mal control diabético temprano (cardíacas, SNC, regresión caudal). MANEJO: Monitoreo glucemia estrecho primeras 24-48h, alimentación temprana, IV glucosa si <40-45 mg/dL, corregir calcio/magnesio, fototerapia preventiva si policitemia.",
  },
  {
    id: 14,
    question:
      "Explique los principios y el timing adecuado del Tamizaje Neonatal (screening metabólico). ¿Por qué es crítico realizar la muestra después de 48 horas de vida pero antes del alta hospitalaria, y qué condiciones metabólicas detecta que son tratables para prevenir discapacidad?",
    keyPoints: [
      "Detección presintomática de enfermedades tratables",
      "Timing: >48h vida (alimentación establecida), antes del alta",
      "Hipotiroidismo congénito: tiroxina previene retraso mental",
      "Fenilcetonuria (PKU): dieta baja fenilalanina previene daño neurológico",
      "Otras: galactosemia, hiperplasia suprarrenal congénita, fibrosis quística",
    ],
    modelAnswer:
      "El Tamizaje Neonatal es un programa de salud pública que identifica PRESINTOMÁTICAMENTE enfermedades metabólicas, endocrinas y genéticas TRATABLES, permitiendo intervención temprana ANTES de daño irreversible. PRINCIPIOS: 1) Detecta enfermedades SERIAS (causan muerte/discapacidad severa), 2) Hay TRATAMIENTO efectivo disponible, 3) Son ASINTOMÁTICAS al nacer pero se manifestarán días-semanas después, 4) La intervención PRECOZ previene complicaciones, 5) Son relativamente FRECUENTES para justificar screening universal. TIMING CRÍTICO: La muestra (sangre del talón en papel filtro) debe tomarse: DESPUÉS de 48 HORAS de vida porque: Muchos metabolitos anormales solo se acumulan tras inicio de alimentación enteral. Ej: en PKU, la fenilalanina se acumula solo después de ingerir proteínas; en galactosemia, tras ingerir lactosa. TSH puede estar falsamente elevada en primeras 24-48h (surge fisiológico posnatal). La alimentación establece el metabolismo basal necesario para detectar anomalías. ANTES del ALTA hospitalaria porque: ~1% de familias no regresa para la prueba si se pospone, perdiendo el diagnóstico. La mayoría de RN salen <48-72h, por lo que la ventana es estrecha. Si alta <24-48h (común hoy), se debe citar para repetir muestra a 1-2 semanas. CONDICIONES DETECTADAS (varía por país, >50 posibles): 1) HIPOTIROIDISMO CONGÉNITO (1:2000-4000): ↑TSH, ↓T4. Sin tratamiento: retraso mental severo irreversible, talla baja. Con levotiroxina desde primeras semanas: desarrollo normal. 2) FENILCETONURIA/PKU (1:10,000-15,000): Déficit enzima fenilalanina hidroxilasa → acumulación fenilalanina → daño cerebral (↓mielinización, ↓neurotransmisores). Sin dieta: CI <50, convulsiones, autismo. Con dieta baja fenilalanina desde primera semana-mes: desarrollo intelectual normal. 3) GALACTOSEMIA (1:50,000): Déficit galactosa-1-fosfato uridiltransferasa → acumulación galactosa-1-P tóxica. Sin dieta: falla hepática, cataratas, sepsis E.coli, discapacidad intelectual. Con dieta sin lactosa: previene complicaciones agudas (mejora hepática/sepsis) pero pueden persistir problemas de aprendizaje/ovario. 4) HIPERPLASIA SUPRARRENAL CONGÉNITA (1:15,000): Déficit 21-hidroxilasa → crisis suprarrenal con pérdida sal (shock, muerte súbita a 1-3 sem vida). Tamizaje detecta ↑17-OH-progesterona. Con hidrocortisona+fludrocortisona: evita crisis letales. 5) FIBROSIS QUÍSTICA (1:3000 caucásicos): ↑tripsinógeno inmunorreactivo. Diagnóstico temprano permite inicio precoz de terapia respiratoria, enzimas pancreáticas, nutrición → mejor pronóstico pulmonar y crecimiento. 6) OTROS: Defectos oxidación ácidos grasos (MCAD), aminoacidopatías (jarabe arce), acidemias orgánicas, anemia falciforme (en poblaciones riesgo). PROCESO: Si screening positivo → llamada urgente a familia → CONFIRMACIÓN con pruebas específicas (no todos los positivos son verdaderos) → si confirma: inicio inmediato tratamiento y consejería genética. Los resultados falsos positivos causan ansiedad parental pero son necesarios (↑sensibilidad para no perder casos). IMPACTO: Antes del tamizaje universal, hipotiroidismo congénito era causa principal de retraso mental prevenible. Hoy, con screening, estos niños tienen CI normal. Es uno de los avances en salud pública más costo-efectivos: por cada dólar invertido, ahorra >10 dólares en costos de discapacidad/institucionalización.",
  },
];

const clinicalCases = [
  {
    id: 1,
    title: "Caso 1: Recién Nacido con Dificultad Respiratoria",
    scenario: {
      presentation:
        "Recién nacido de 32 semanas de edad gestacional, obtenido por cesárea por preeclampsia materna severa. Peso al nacer: 1800g. Al nacer presenta llanto débil, pero se recupera con estimulación. A las 2 horas de vida comienza con quejido espiratorio, aleteo nasal y retracciones intercostales progresivas.",
      vitals: {
        "Frecuencia respiratoria": "75 rpm",
        "Frecuencia cardíaca": "155 lpm",
        "Saturación de O₂": "88% en aire ambiente",
        Temperatura: "36.8°C",
      },
      physicalExam:
        "Prematuro en dificultad respiratoria con quejido audible, tiraje intercostal y subcostal, aleteo nasal. Cianosis peribucal. Tórax con hipoventilación bilateral. Abdomen blando. Neurológico: hipotonía leve acorde a edad gestacional.",
      labs: "Gasometría arterial: pH 7.28, pCO₂ 52 mmHg, pO₂ 55 mmHg, HCO₃ 22 mEq/L, EB -3. Radiografía de tórax: patrón reticulogranular difuso bilateral con broncograma aéreo ('vidrio esmerilado').",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico más probable?",
        options: [
          "Neumonía neonatal por Streptococcus Grupo B",
          "Síndrome de dificultad respiratoria (enfermedad de membrana hialina)",
          "Taquipnea transitoria del recién nacido",
          "Síndrome de aspiración meconial",
        ],
        correct: 1,
        explanation:
          "El diagnóstico es síndrome de dificultad respiratoria (SDR) por déficit de surfactante. Los datos clave son: prematuridad (32 semanas), inicio temprano (2 horas), signos de dificultad respiratoria progresiva, gasometría con hipoxemia y acidosis respiratoria, y patrón radiológico clásico de 'vidrio esmerilado' con broncograma aéreo.",
      },
      {
        question: "¿Cuál es la fisiopatología de esta condición?",
        options: [
          "Infección bacteriana pulmonar",
          "Retardo en reabsorción de líquido pulmonar fetal",
          "Déficit de surfactante con colapso alveolar y atelectasias",
          "Aspiración de contenido gástrico",
        ],
        correct: 2,
        explanation:
          "La fisiopatología es el déficit de surfactante pulmonar (fosfatidilcolina) producido por pneumocitos tipo II inmaduros. Sin surfactante, aumenta la tensión superficial alveolar causando colapso al final de la espiración, atelectasias, disminución de compliance pulmonar y alteración de la ventilación/perfusión.",
      },
      {
        question: "¿Cuál es el manejo inmediato más apropiado?",
        options: [
          "Antibióticos IV y observación",
          "Administración de surfactante exógeno endotraqueal y soporte ventilatorio",
          "Solo oxígeno suplementario",
          "Diuréticos IV",
        ],
        correct: 1,
        explanation:
          "El manejo estándar incluye: 1) Soporte respiratorio (iniciar CPAP nasal, intubar si FiO₂ >0.4 o pCO₂ >60), 2) Administración de surfactante exógeno endotraqueal lo antes posible, 3) Monitoreo continuo, 4) Antibióticos empíricos (ampicilina + gentamicina) hasta descartar sepsis. El surfactante mejora dramáticamente la oxigenación y reduce mortalidad.",
      },
      {
        question:
          "¿Qué intervención prenatal podría haber reducido la severidad de esta condición?",
        options: [
          "Antibióticos a la madre",
          "Corticosteroides prenatales (betametasona) 24-48h antes del parto",
          "Sulfato de magnesio",
          "Tocolíticos",
        ],
        correct: 1,
        explanation:
          "Los corticosteroides prenatales (betametasona o dexametasona) administrados entre 24-34 semanas cuando hay riesgo de parto prematuro aceleran la maduración pulmonar y la producción de surfactante, reduciendo significativamente la incidencia y severidad del SDR.",
      },
    ],
  },
  {
    id: 2,
    title: "Caso 2: Ictericia Neonatal Temprana",
    scenario: {
      presentation:
        "Recién nacido de término (39 semanas), parto vaginal sin complicaciones. Peso: 3200g. A las 18 horas de vida, la enfermera nota coloración amarillenta de la piel. La madre es tipo O Rh positivo, el padre tipo A positivo. Primera gesta, sin antecedentes patológicos. Lactancia materna exclusiva, adecuada succión.",
      vitals: {
        "Frecuencia respiratoria": "45 rpm",
        "Frecuencia cardíaca": "140 lpm",
        Temperatura: "36.9°C",
        "Estado general": "Activo, llanto vigoroso",
      },
      physicalExam:
        "Recién nacido activo, ictérico hasta tórax (zona 3 de Kramer). Succión vigorosa, buen tono muscular. No hepatoesplenomegalia. No petequias ni equimosis. Resto del examen físico normal.",
      labs: "Bilirrubina total: 14 mg/dL (directa 0.5 mg/dL, indirecta 13.5 mg/dL). Grupo sanguíneo del bebé: A+. Coombs directo: POSITIVO. Hemoglobina: 15 g/dL. Hematocrito: 45%. Reticulocitos: 6%.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico más probable?",
        options: [
          "Ictericia fisiológica del recién nacido",
          "Ictericia por leche materna",
          "Incompatibilidad ABO con hemólisis",
          "Atresia de vías biliares",
        ],
        correct: 2,
        explanation:
          "El diagnóstico es incompatibilidad ABO con hemólisis. Los datos clave son: aparición temprana (<24h), madre O+ con bebé A+, Coombs directo positivo (indica anticuerpos IgG anti-A materno en eritrocitos fetales), bilirrubina elevada (14 mg/dL) predominantemente indirecta, y reticulocitos elevados (hemólisis activa).",
      },
      {
        question: "¿Por qué esta ictericia se considera patológica?",
        options: [
          "Porque afecta la cara del bebé",
          "Porque aparece antes de las 24 horas de vida",
          "Porque el bebé está siendo alimentado con leche materna",
          "Porque todos los bebés A+ tienen ictericia patológica",
        ],
        correct: 1,
        explanation:
          "Esta ictericia es patológica porque: 1) Aparece en las primeras 24 horas (<24h), 2) Niveles elevados para la edad (14 mg/dL a las 18h), 3) Coombs directo positivo indica causa inmunológica, 4) Riesgo de aumento rápido. La ictericia fisiológica aparece después de las 24 horas (típicamente día 2-3).",
      },
      {
        question: "¿Cuál es el mecanismo fisiopatológico de esta condición?",
        options: [
          "Obstrucción de vías biliares",
          "Anticuerpos maternos IgG anti-A que atraviesan placenta y hemolisan eritrocitos fetales",
          "Inmadurez hepática simple",
          "Infección viral",
        ],
        correct: 1,
        explanation:
          "La madre tipo O tiene anticuerpos anti-A y anti-B naturales. El IgG anti-A atraviesa la placenta y se une a antígenos A en la superficie de los eritrocitos del bebé tipo A. Esto causa hemólisis extravascular (principalmente en bazo), liberando hemoglobina que se convierte en bilirrubina no conjugada, superando la capacidad hepática neonatal de conjugación.",
      },
      {
        question: "¿Cuál es el manejo inicial más apropiado?",
        options: [
          "Solo observación y seguimiento ambulatorio",
          "Fototerapia intensiva, hidratación adecuada, monitoreo de bilirrubina cada 4-6h",
          "Cirugía inmediata",
          "Suspender inmediatamente la lactancia materna",
        ],
        correct: 1,
        explanation:
          "El manejo incluye: 1) Fototerapia intensiva inmediata (bilirrubina 14 mg/dL a las 18h está en zona de alto riesgo), 2) Mantener hidratación y lactancia (aumentar frecuencia), 3) Monitoreo seriado de bilirrubina cada 4-6h, 4) Considerar inmunoglobulina IV si aumento rápido, 5) Prepararse para exanguinotransfusión si supera niveles críticos o presenta signos de kernicterus.",
      },
      {
        question:
          "¿Qué complicación grave se debe prevenir con el tratamiento oportuno?",
        options: [
          "Anemia crónica",
          "Kernicterus (encefalopatía bilirrubínica)",
          "Neumonía",
          "Diabetes neonatal",
        ],
        correct: 1,
        explanation:
          "El kernicterus es la complicación más temida: la bilirrubina no conjugada (liposoluble) atraviesa la barrera hematoencefálica y se deposita en ganglios basales causando daño neurológico permanente (parálisis cerebral atetósica, sordera neurosensorial, retraso del desarrollo). La fototerapia reduce bilirrubina y previene esta complicación devastadora.",
      },
    ],
  },
  {
    id: 3,
    title: "Caso 3: Sepsis Neonatal Temprana",
    scenario: {
      presentation:
        "Recién nacido de 37 semanas, parto vaginal. Madre con fiebre intraparto (38.5°C) y ruptura prolongada de membranas (24 horas). No recibió antibióticos intraparto. Líquido amniótico turbio. Al nacer, el bebé presenta tono disminuido, llanto débil. Apgar 6/8. Peso: 2900g. A las 6 horas de vida presenta rechazo al alimento, letargia progresiva e inestabilidad térmica (35.8°C).",
      vitals: {
        "Frecuencia respiratoria": "70 rpm con quejido ocasional",
        "Frecuencia cardíaca": "180 lpm",
        Temperatura: "35.8°C (hipotermia)",
        "Saturación de O₂": "92% en aire ambiente",
        "Presión arterial": "45/25 mmHg (baja)",
      },
      physicalExam:
        "Neonato letárgico, hipoactivo, mala perfusión periférica (llene capilar 4 segundos), palidez, hipotermia. Dificultad respiratoria leve. Abdomen distendido. Tono muscular disminuido.",
      labs: "Hemograma: Leucocitos 4,000/mm³ (leucopenia), neutrófilos totales 1,500, Índice I/T: 0.25 (elevado), plaquetas 80,000. PCR: 15 mg/L (elevado). Procalcitonina: 8 ng/mL (muy elevado). Gasometría: acidosis metabólica. Hemocultivo: pendiente. Radiografía de tórax: infiltrados difusos bilaterales.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico más probable?",
        options: [
          "Hipoglucemia neonatal simple",
          "Sepsis neonatal temprana con probable neumonía",
          "Cardiopatía congénita",
          "Ictericia fisiológica",
        ],
        correct: 1,
        explanation:
          "El diagnóstico es sepsis neonatal temprana. Factores de riesgo: fiebre materna intraparto, RPM >18h, líquido amniótico turbio, sin antibióticos intraparto. Signos clínicos: letargia, inestabilidad térmica, rechazo alimentario, dificultad respiratoria, hipotensión. Laboratorio: leucopenia, I/T elevado, trombocitopenia, PCR y procalcitonina muy elevados.",
      },
      {
        question: "¿Cuál es el patógeno más probable en este caso?",
        options: [
          "Virus del herpes simple",
          "Streptococcus agalactiae (Grupo B)",
          "Candida albicans",
          "Mycobacterium tuberculosis",
        ],
        correct: 1,
        explanation:
          "El Streptococcus agalactiae (Estreptococo del Grupo B o EGB) es el patógeno más común en sepsis neonatal temprana, seguido de E. coli. Los factores de riesgo (fiebre materna, RPM prolongada) sugieren transmisión vertical durante el trabajo de parto. El EGB coloniza tracto genitourinario materno (15-40% de embarazadas).",
      },
      {
        question: "¿Cuál es el manejo inicial urgente de este paciente?",
        options: [
          "Solo observación y alimentación",
          "Hemocultivo + antibióticos empíricos IV INMEDIATOS (ampicilina + gentamicina), soporte hemodinámico, oxigenación",
          "Esperar resultados de hemocultivo antes de antibióticos",
          "Solo antipiréticos",
        ],
        correct: 1,
        explanation:
          "La sepsis neonatal es una EMERGENCIA. Manejo: 1) Hemocultivo, PCL, hemograma (NO esperar resultados), 2) Antibióticos empíricos IV inmediatos: Ampicilina (cubre EGB, Listeria) + Gentamicina o Cefotaxima (cubre E. coli y Gram negativos), 3) Soporte: líquidos IV, oxígeno, eventual ventilación, 4) Considerar inotrópicos si shock, 5) Monitoreo intensivo. Cada hora de retraso aumenta mortalidad.",
      },
      {
        question: "¿Qué otros estudios son importantes realizar?",
        options: [
          "Solo electrocardiograma",
          "Punción lumbar (si estable) para descartar meningitis, cultivos de sangre y orina",
          "Biopsia hepática",
          "Resonancia magnética cerebral urgente",
        ],
        correct: 1,
        explanation:
          "Se debe realizar evaluación completa: 1) Hemocultivo (obligatorio), 2) Punción lumbar si el bebé está estabilizado (30% de sepsis temprana por EGB tiene meningitis), 3) Urocultivo (por sonda o punción suprapúbica, más relevante en sepsis tardía), 4) Radiografía de tórax, 5) Marcadores inflamatorios seriados (PCR, procalcitonina). La PL puede diferirse si inestabilidad severa, pero debe hacerse en 24-48h.",
      },
      {
        question:
          "¿Cuánto tiempo debe mantenerse el tratamiento antibiótico si los cultivos son negativos pero la evolución clínica es compatible con sepsis?",
        options: [
          "Suspender inmediatamente si cultivos negativos",
          "5-7 días si sospecha clínica alta persiste, con reevaluación diaria",
          "Siempre 21 días sin importar cultivos",
          "Solo 24 horas",
        ],
        correct: 1,
        explanation:
          "Si hemocultivos negativos pero presentación clínica y laboratorio fuertemente sugestivos de sepsis, completar 5-7 días de antibióticos. Reevaluar diariamente: si mejoría clínica rápida y marcadores normalizan, puede suspenderse a 48-72h. Si persiste compromiso o meningitis confirmada: 10-14 días (meningitis por EGB: 14 días; meningitis por Gram negativos: 21 días).",
      },
    ],
  },
  {
    id: 4,
    title: "Caso 4: Hipoglucemia en Hijo de Madre Diabética",
    scenario: {
      presentation:
        "Recién nacido de término (38 semanas), hijo de madre con diabetes gestacional mal controlada durante el tercer trimestre. Parto por cesárea. Peso al nacer: 4200g (macrosómico). Al nacimiento, Apgar 8/9, llanto vigoroso. A las 2 horas de vida comienza con temblores finos en extremidades, diaforesis, irritabilidad y luego letargia.",
      vitals: {
        "Frecuencia respiratoria": "55 rpm",
        "Frecuencia cardíaca": "165 lpm",
        Temperatura: "36.7°C",
        Estado: "Letárgico con episodios de temblores",
      },
      physicalExam:
        "Recién nacido macrosómico (percentil >90 para edad gestacional), con facies rubicunda, temblores finos de extremidades, irritabilidad alternando con letargia. Succión débil. Tono disminuido. Diaforesis. No signos de dificultad respiratoria. No malformaciones evidentes.",
      labs: "Glucosa capilar inicial: 25 mg/dL. Glucosa plasmática confirmada: 28 mg/dL. Calcio: 7.5 mg/dL (límite bajo). Hematocrito: 68% (policitemia). Bilirrubina: 6 mg/dL.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico principal?",
        options: [
          "Sepsis neonatal",
          "Hipoglucemia neonatal sintomática en hijo de madre diabética",
          "Síndrome de abstinencia neonatal",
          "Encefalopatía hipóxico-isquémica",
        ],
        correct: 1,
        explanation:
          "El diagnóstico es hipoglucemia neonatal sintomática. Factores de riesgo: hijo de madre diabética, macrosomía. Clínica característica: temblores, diaforesis, letargia, irritabilidad. Glucosa <40-45 mg/dL con síntomas confirma hipoglucemia sintomática que requiere tratamiento urgente.",
      },
      {
        question:
          "¿Cuál es el mecanismo fisiopatológico de la hipoglucemia en este contexto?",
        options: [
          "Insuficiencia suprarrenal congénita",
          "Hiperinsulinismo persistente por hiperglucemia materna crónica que causó hiperplasia de células β pancreáticas fetales",
          "Deficiencia de glucagón",
          "Sepsis bacteriana",
        ],
        correct: 1,
        explanation:
          "Durante el embarazo, la hiperglucemia materna atraviesa la placenta causando hiperglucemia fetal crónica. El páncreas fetal responde con hiperplasia de células β e hiperinsulinismo compensatorio. Al nacer, se pierde el aporte materno de glucosa, pero el neonato mantiene niveles altos de insulina que promueven captación celular de glucosa y suprimen glucogenólisis y gluconeogénesis, resultando en hipoglucemia severa.",
      },
      {
        question: "¿Cuál es el manejo inmediato más apropiado?",
        options: [
          "Solo observación y alimentación oral",
          "Bolo IV de glucosa al 10% (2 mL/kg) seguido de infusión continua de glucosa",
          "Administrar insulina",
          "Suspender toda alimentación",
        ],
        correct: 1,
        explanation:
          "Hipoglucemia sintomática es una EMERGENCIA: 1) Bolo IV de glucosa al 10% (2 mL/kg = 200 mg/kg) en 5-10 min, 2) Seguir con infusión continua de glucosa 6-8 mg/kg/min, 3) Monitoreo de glucosa cada 30-60 min hasta estabilización, 4) Intentar alimentación oral adicional cuando posible, 5) Aumentar infusión si persiste hipoglucemia (hasta 12-15 mg/kg/min, considerar hidrocortisona o glucagón si refractario).",
      },
      {
        question: "¿Por qué es urgente tratar esta hipoglucemia?",
        options: [
          "No es urgente, puede esperar horas",
          "El cerebro neonatal depende exclusivamente de glucosa y la hipoglucemia causa daño neurológico permanente",
          "Solo causa molestias temporales",
          "Es un hallazgo normal en todos los recién nacidos",
        ],
        correct: 1,
        explanation:
          "El cerebro neonatal utiliza el 50% del gasto energético total y depende casi exclusivamente de glucosa (cuerpos cetónicos son insuficientes en neonatos). La hipoglucemia causa: 1) Menor producción de ATP cerebral, 2) Falla de bomba Na+/K+ con despolarización neuronal, 3) Convulsiones, 4) Daño neuronal irreversible con secuelas: retraso del desarrollo, discapacidad intelectual, epilepsia, parálisis cerebral.",
      },
      {
        question:
          "¿Qué otras complicaciones presenta frecuentemente el hijo de madre diabética?",
        options: [
          "Solo hipoglucemia, sin otras complicaciones",
          "Hipocalcemia, policitemia, hiperbilirrubinemia, malformaciones cardíacas, SDR",
          "Solo ictericia leve",
          "Siempre son completamente sanos",
        ],
        correct: 1,
        explanation:
          "Los hijos de madre diabética tienen múltiples riesgos: 1) Hipoglucemia (más común), 2) Hipocalcemia e hipomagnesemia, 3) Policitemia (hematocrito >65%), 4) Hiperbilirrubinemia, 5) SDR (retraso maduración pulmonar), 6) Miocardiopatía hipertrófica transitoria, 7) Malformaciones congénitas (cardiovasculares, SNC, renales) si diabetes pregestacional mal controlada. Se debe realizar ecocardiograma y monitoreo estrecho.",
      },
    ],
  },
  {
    id: 5,
    title: "Caso 5: Enterocolitis Necrotizante",
    scenario: {
      presentation:
        "Prematuro de 28 semanas, actualmente con 10 días de vida. Peso al nacer: 1100g. Ha estado recibiendo nutrición enteral con fórmula prematura, avanzando 20 mL/kg/día. En las últimas 12 horas presenta distensión abdominal progresiva, residuos gástricos biliosos (100 mL), rechazo de la alimentación. Presenta 2 deposiciones con sangre oculta positiva. Estado general deteriorado con letargia y episodios de apnea.",
      vitals: {
        "Frecuencia respiratoria": "65 rpm con apneas",
        "Frecuencia cardíaca": "180 lpm",
        Temperatura: "36.2°C",
        "Presión arterial": "35/20 mmHg (hipotensión)",
        Saturación: "88% con O₂ suplementario",
      },
      physicalExam:
        "Prematuro en mal estado general, letárgico. Abdomen marcadamente distendido, eritematoso, doloroso a la palpación con defensa. Ausencia de ruidos intestinales. Extremidades frías, llene capilar >5 segundos. Oliguria.",
      labs: "Hemograma: Leucocitos 3,500/mm³, plaquetas 60,000/mm³, bandas 35%. PCR: 25 mg/L. Gasometría: acidosis metabólica severa (pH 7.15, BE -12). Lactato: 6 mmol/L. Radiografía abdominal: dilatación de asas intestinales, neumatosis intestinal (gas en pared intestinal), gas en vena porta.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico más probable?",
        options: [
          "Íleo meconial",
          "Enterocolitis necrotizante (ECN) estadio II-III",
          "Reflujo gastroesofágico simple",
          "Intolerancia alimentaria leve",
        ],
        correct: 1,
        explanation:
          "El diagnóstico es enterocolitis necrotizante (ECN). Criterios: 1) Prematuro de muy bajo peso, 2) Signos sistémicos (letargia, apneas, shock), 3) Signos gastrointestinales (distensión, residuos biliosos, sangre en heces), 4) Neumatosis intestinal y gas en vena porta (hallazgos patognomónicos). Estadio II-III (ECN establecida/avanzada) por signos sistémicos y hallazgos radiológicos.",
      },
      {
        question:
          "¿Cuáles son los factores de riesgo principales que este paciente presentaba?",
        options: [
          "Solo la prematuridad",
          "Prematuridad extrema (<32 sem), muy bajo peso, alimentación con fórmula, avance rápido de volumen enteral",
          "Ningún factor de riesgo específico",
          "Solo el uso de fórmula",
        ],
        correct: 1,
        explanation:
          "Factores de riesgo principales: 1) Prematuridad <32 semanas (inmadurez intestinal), 2) Muy bajo peso (<1500g), 3) Alimentación con fórmula (vs leche materna protectora), 4) Avance rápido de alimentación (>20-30 mL/kg/día aumenta riesgo), 5) Otros: asfixia perinatal, ductus arterioso permeable, transfusiones.",
      },
      {
        question: "¿Cuál es el manejo inicial urgente?",
        options: [
          "Continuar alimentación y dar probióticos",
          "NPO absoluto, descompresión gástrica, antibióticos IV triple esquema, reanimación con líquidos, soporte ventilatorio",
          "Solo cambiar a leche materna",
          "Cirugía inmediata en todos los casos",
        ],
        correct: 1,
        explanation:
          "Manejo médico urgente: 1) NPO absoluto (7-14 días), 2) Sonda nasogástrica para descompresión, 3) Antibióticos IV triple (ampicilina + gentamicina + metronidazol para cubrir anaerobios), 4) Reanimación con líquidos y eventual soporte inotrópico, 5) Nutrición parenteral total, 6) Soporte ventilatorio si apneas/shock, 7) Monitoreo radiológico y clínico estrecho. Cirugía si: neumoperitoneo (perforación), deterioro clínico a pesar de manejo médico, o paracentesis positiva.",
      },
      {
        question: "¿Qué indica la neumatosis intestinal en la radiografía?",
        options: [
          "Presencia normal de gas intestinal",
          "Invasión bacteriana de la pared intestinal con producción de gas intramural, signo patognomónico de ECN",
          "Aire tragado durante alimentación",
          "Obstrucción intestinal simple",
        ],
        correct: 1,
        explanation:
          "La neumatosis intestinal (gas en la pared intestinal) es el hallazgo radiológico patognomónico de ECN. Indica que bacterias han invadido la pared intestinal dañada, produciendo gas (hidrógeno) que se acumula en la submucosa y subserosa. El gas en vena porta indica enfermedad avanzada con paso de gas al sistema venoso portal.",
      },
      {
        question: "¿Cuándo está indicada la cirugía en este paciente?",
        options: [
          "Nunca, siempre es manejo médico",
          "Inmediatamente en todos los casos de ECN",
          "Si presenta neumoperitoneo (perforación), deterioro clínico progresivo a pesar de tratamiento, o paracentesis con bacterias",
          "Solo si tiene fiebre alta",
        ],
        correct: 2,
        explanation:
          "Indicaciones quirúrgicas: 1) Neumoperitoneo (perforación intestinal, 20-40% de casos), 2) Deterioro clínico progresivo a pesar de manejo médico óptimo (acidosis refractaria, trombocitopenia severa, shock), 3) Paracentesis positiva (bacterias o pus), 4) Asa fija en radiografías seriadas (necrosis transmural), 5) Masa palpable. La cirugía puede ser drenaje peritoneal o laparotomía con resección del intestino necrótico. Mortalidad: 20-50% dependiendo de extensión.",
      },
    ],
  },
  {
    id: 6,
    title: "Caso 6: Hipertensión Pulmonar Persistente del Recién Nacido (PPHN)",
    scenario: {
      presentation:
        "Recién nacido de término (40 semanas) post-parto vaginal con líquido amniótico teñido de meconio espeso. Apgar 3/5, requirió reanimación con presión positiva y aspiración de tráquea. Se extrajo meconio espeso de tráquea. A las 2 horas de vida desarrolla dificultad respiratoria severa progresiva, cianosis refractaria a oxígeno al 100%.",
      vitals: {
        "Frecuencia respiratoria":
          "85 rpm con aleteo nasal y retracciones severas",
        "Frecuencia cardíaca": "165 lpm",
        "Saturación de O₂":
          "75% con FiO₂ 100% (cianosis diferencial: mano derecha 85%, pie izquierdo 65%)",
        "Presión arterial": "55/30 mmHg",
        Temperatura: "37°C",
      },
      physicalExam:
        "Neonato en distress respiratorio severo, cianosis central marcada a pesar de oxígeno al 100%. Cianosis DIFERENCIAL (extremidades inferiores más cianóticas que superiores). Segundo ruido cardíaco único e intenso. Hepatomegalia leve. Tórax con tirajes marcados.",
      labs: "Gasometría arterial: pH 7.25, PaCO₂ 55 mmHg, PaO₂ 35 mmHg con FiO₂ 100% (hipoxemia severa refractaria). Índice de oxigenación (IO): 28 (severo, >25). Gradiente alvéolo-arterial >600 mmHg. Radiografía de tórax: infiltrados difusos bilaterales (patrón aspiración meconial). Ecocardiograma: Anatomía cardíaca normal, shunt derecha-izquierda a nivel de ductus y foramen oval, hipertensión pulmonar severa (presión pulmonar suprasistémica), insuficiencia tricuspídea.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico principal?",
        options: [
          "Cardiopatía congénita cianótica (Tetralogía de Fallot)",
          "Hipertensión pulmonar persistente del recién nacido (PPHN) secundaria a síndrome de aspiración meconial",
          "Sepsis con neumonía simple",
          "Taquipnea transitoria del recién nacido",
        ],
        correct: 1,
        explanation:
          "El diagnóstico es PPHN secundaria a síndrome de aspiración meconial (SAM). Características clave: 1) Hipoxemia SEVERA REFRACTARIA a O₂ 100% (PaO₂ <40 mmHg con FiO₂ 100%), 2) CIANOSIS DIFERENCIAL (shunt D→I a través de ductus, sangre desoxigenada llega a aorta descendente), 3) Ecocardiograma: anatomía cardíaca NORMAL pero shunts extracardíacos (foramen oval y ductus con flujo D→I), presión pulmonar ≥presión sistémica, 4) Índice de oxigenación >25 (severo). El SAM causa PPHN por: meconio obstruye vías aéreas → atelectasias + neumonitis química → vasoconstricción pulmonar reactiva → hipertensión pulmonar.",
      },
      {
        question: "¿Qué significa la 'cianosis diferencial' en este contexto?",
        options: [
          "Cianosis que aparece y desaparece intermitentemente",
          "Saturación de O₂ más BAJA en extremidades inferiores que en mano derecha, indicando shunt derecha-izquierda a nivel del ductus arterioso",
          "Cianosis solo en dedos de manos",
          "Cianosis que mejora con llanto",
        ],
        correct: 1,
        explanation:
          "La cianosis diferencial es PATOGNOMÓNICA de shunt derecha→izquierda a nivel del ductus arterioso persistente: 1) La sangre desoxigenada del ventrículo derecho (afectado por hipertensión pulmonar) se desvía a través del ductus hacia la aorta DESCENDENTE (post-ductal), 2) La mano DERECHA (preductal, sale de aorta ascendente antes del ductus) recibe sangre más oxigenada del ventrículo izquierdo → saturación MAYOR, 3) Las extremidades inferiores (post-ductales) reciben sangre mezclada con shunt → saturación MENOR (diferencia >10-15%). Este hallazgo CONFIRMA PPHN con ductus permeable y shunt D→I. No ocurre en cardiopatías congénitas cianóticas centrales donde toda la sangre sistémica tiene igual grado de desaturación.",
      },
      {
        question:
          "¿Cuál es el tratamiento de primera línea para PPHN severa en este paciente?",
        options: [
          "Diuréticos y betabloqueadores",
          "Ventilación mecánica con estrategia de 'pulmón suave', sedación, óxido nítrico inhalado (iNO), soporte hemodinámico",
          "Solo antibióticos",
          "Cirugía cardíaca inmediata",
        ],
        correct: 1,
        explanation:
          "Manejo de PPHN severa: 1) VENTILACIÓN MECÁNICA con estrategia de 'gentle ventilation' (volúmenes tidales pequeños 4-6 mL/kg, presiones limitadas, tolerar hipercapnia permisiva leve pH >7.25) para minimizar barotrauma pero mantener reclutamiento alveolar, 2) ÓXIDO NÍTRICO INHALADO (iNO) 20 ppm: es vasodilatador pulmonar SELECTIVO (no causa hipotensión sistémica), mejora oxigenación en 50-60% de casos, reduce necesidad de ECMO, 3) SEDACIÓN/ANALGESIA para minimizar agitación y picos de hipertensión pulmonar, 4) ALCALINIZACIÓN para mantener pH 7.40-7.50 (alcalosis causa vasodilatación pulmonar), 5) INOTRÓPICOS (dopamina/dobutamina) para mantener gasto cardíaco y presión sistémica > presión pulmonar, 6) SURFACTANTE exógeno en SAM para mejorar función pulmonar, 7) ECMO (oxigenación por membrana extracorpórea) si falla iNO y criterios severos (IO >40, PaO₂ <40 a pesar de manejo). NO usar hiperventilación agresiva (daña pulmones) ni alcalinización excesiva (arritmias). Evitar hipotermia, hipoglucemia, hipocalcemia (empeoran vasoconstricción pulmonar).",
      },
      {
        question:
          "¿Qué es el óxido nítrico inhalado (iNO) y por qué es selectivo para el pulmón?",
        options: [
          "Es un broncodilatador oral que actúa en todo el cuerpo",
          "Es un vasodilatador pulmonar SELECTIVO inhalado que se inactiva rápidamente en sangre al unirse a hemoglobina, causando vasodilatación pulmonar sin hipotensión sistémica",
          "Es un antibiótico inhalado",
          "Es un esteroide inhalado",
        ],
        correct: 1,
        explanation:
          "El óxido nítrico inhalado (iNO) es un vasodilatador SELECTIVO pulmonar: 1) Se administra INHALADO (mezclado con gases ventilatorios a 5-20 ppm), 2) Llega a alvéolos y difunde al músculo liso vascular pulmonar, donde activa guanilato ciclasa → ↑GMPc → relajación muscular → VASODILATACIÓN pulmonar, 3) Mejora la ventilación/perfusión al dilatar vasos en zonas bien ventiladas (efecto 'microselection'), 4) Al pasar a la sangre, se une INMEDIATAMENTE a hemoglobina formando metahemoglobina (inactiva) → se INACTIVA antes de llegar a circulación sistémica, 5) Por tanto: vasodilatación SOLO pulmonar, SIN hipotensión sistémica (vs vasodilatadores IV). Efectos secundarios: metahemoglobinemia (monitorizar <5%), dependencia (retirar gradualmente para evitar rebote de hipertensión pulmonar), toxicidad por NO₂ (monitorizar). Si IO mejora >20%, continuar; si no responde en 4-6h, considerar no-respondedor y ECMO. Reduce mortalidad y necesidad de ECMO en ~40%.",
      },
      {
        question:
          "¿Cuándo estaría indicada la oxigenación por membrana extracorpórea (ECMO)?",
        options: [
          "En todos los casos de PPHN como primera línea",
          "Si falla manejo convencional + iNO con índice de oxigenación >40, ductus con shunt >50%, acidosis refractaria, o riesgo de muerte inminente",
          "Solo si el paciente tiene cardiopatía congénita",
          "Nunca está indicada en PPHN",
        ],
        correct: 1,
        explanation:
          "ECMO (oxigenación por membrana extracorpórea) es un soporte vital EXTERNO (bypass cardiopulmonar temporal) indicado en falla respiratoria refractaria: CRITERIOS: 1) Índice de oxigenación (IO) >40 (severo, mortalidad predicha >80%), 2) PaO₂ <40 mmHg a pesar de ventilación óptima + iNO, 3) Acidosis metabólica refractaria, 4) Shock con falla multiorgánica. CONTRAINDICACIONES: <34 semanas o <2 kg (riesgo hemorragia intraventricular), hemorragia intraventricular severa preexistente, malformaciones graves incompatibles con vida. MECANISMO: Sangre se extrae de aurícula derecha (veno) o aorta (arterio), pasa por membrana oxigenadora (oxigena y remueve CO₂), se retorna a aorta (VA) o vena cava (VV). Permite 'descanso pulmonar' mientras se trata causa subyacente. COMPLICACIONES: Hemorragia (anticoagulación necesaria), trombosis, infección, hemólisis. Sobrevida 75-85% en PPHN. Duración típica 5-7 días, máximo 2-3 semanas. Es el 'último recurso' tras falla de manejo convencional.",
      },
    ],
  },
  {
    id: 7,
    title: "Caso 7: Ictericia Patológica por Atresia Biliar",
    scenario: {
      presentation:
        "Lactante de 6 semanas de vida, anteriormente sano, alimentándose bien. Los padres notan que la 'ictericia del recién nacido' que apareció en la primera semana 'nunca se fue completamente' y ahora está empeorando. Notan orina muy oscura (color té o coca-cola) y heces progresivamente más PÁLIDAS (ahora blanquecinas tipo 'masilla'). La madre refiere que la ictericia tiene tinte 'verdoso'.",
      vitals: {
        Peso: "4.2 kg (ganancia de peso adecuada)",
        Temperatura: "36.8°C",
        "Frecuencia cardíaca": "125 lpm",
        "Frecuencia respiratoria": "35 rpm",
      },
      physicalExam:
        "Lactante ictérico con tinte VERDOSO (ictericia colestásica). Activo, alerta, buen estado general (sin signos de sepsis). Hepatomegalia firme (hígado 4 cm bajo reborde costal). NO esplenomegalia aún. Heces traídas por padres: ACÓLICAS (blanquecinas, sin pigmento biliar). Orina en pañal: oscura (coluria).",
      labs: "Bilirrubina total: 14 mg/dL, Bilirrubina DIRECTA (conjugada): 9 mg/dL (>2 mg/dL o >20% del total = COLESTASIS). Transaminasas elevadas: AST 180 UI/L, ALT 150 UI/L. Fosfatasa alcalina: 650 UI/L (muy elevada). GGT (gamma-glutamil-transferasa): 400 UI/L (elevada). Albúmina: 3.2 g/dL. INR: 1.6 (prolongado). Ecografía abdominal: Vesícula biliar pequeña/contraída o no visualizada. Hígado de tamaño aumentado, sin dilatación de vía biliar intrahepática. NO se visualiza quiste de colédoco.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico más probable?",
        options: [
          "Ictericia fisiológica del recién nacido prolongada",
          "Atresia de vías biliares (atresia biliar extrahepática)",
          "Ictericia por leche materna",
          "Síndrome de Gilbert",
        ],
        correct: 1,
        explanation:
          "El diagnóstico más probable es ATRESIA DE VÍAS BILIARES. Características clave: 1) ICTERICIA PROLONGADA/PROGRESIVA >2 semanas con BILIRRUBINA DIRECTA ELEVADA (colestasis), 2) HECES ACÓLICAS (blancas, sin estercobilina porque la bilis no llega al intestino), 3) COLURIA (orina oscura por bilirrubina directa soluble excretada por riñón), 4) Hepatomegalia firme, 5) Vesícula biliar no visualizada o muy pequeña en ecografía, 6) GGT muy elevada. La atresia biliar es obstrucción/ausencia de vías biliares extrahepáticas (colédoco, hepáticos) por proceso fibro-obliterante. Es la causa más frecuente de colestasis neonatal (30% de casos) y la indicación #1 de trasplante hepático pediátrico.",
      },
      {
        question:
          "¿Por qué es crítico el diagnóstico TEMPRANO (antes de 60 días de vida) en atresia biliar?",
        options: [
          "No hay diferencia en el pronóstico según el momento del diagnóstico",
          "Porque la cirugía (portoenterostomía de Kasai) tiene mayor éxito si se realiza <60 días de vida; después de 90 días la probabilidad de éxito es <25%",
          "Solo por estética",
          "Porque después de 60 días ya no se puede hacer nada",
        ],
        correct: 1,
        explanation:
          "El TIMING es CRÍTICO en atresia biliar: 1) La obstrucción biliar causa acumulación de ácidos biliares tóxicos que dañan progresivamente el hígado → CIRROSIS irreversible, 2) La PORTOENTEROSTOMÍA de KASAI (cirugía que conecta intestino a porta hepática para drenar bilis microscópica residual) tiene éxito variable según edad: <60 días vida: 60-80% logran flujo biliar, restauran bilirrubina normal; 60-90 días: 40-50% éxito; >90 días: <25% éxito (fibrosis/cirrosis avanzadas), 3) Incluso con Kasai exitoso, 50-60% eventualmente necesitan trasplante hepático (a 10-20 años), pero la cirugía temprana permite 'vivir con hígado propio' años-décadas, evitando trasplante en infancia, 4) Diagnóstico tardío (>90 días) → Kasai inefectivo → trasplante directo o muerte por falla hepática. Por eso TODO lactante con ictericia >2 semanas o con heces pálidas debe medirse BILIRRUBINA DIRECTA urgente. Regla nemotécnica: 'Too Yellow Too Long' (muy amarillo por mucho tiempo) = medir fraccionada.",
      },
      {
        question:
          "¿Qué prueba diagnóstica es el estándar de oro para confirmar atresia biliar?",
        options: [
          "Sólo la ecografía abdominal es suficiente",
          "Gammagrafía hepatobiliar (HIDA scan) que muestra excreción de marcador a hígado pero NO a intestino, y colangiografía intraoperatoria que confirma ausencia de vía biliar permeable",
          "Solo niveles de bilirrubina",
          "Radiografía simple de abdomen",
        ],
        correct: 1,
        explanation:
          "El diagnóstico se confirma con: 1) GAMMAGRAFÍA HEPATOBILIAR (HIDA scan, DISIDA): Se inyecta radiomarcador (tecnecio) que el hígado capta y excreta en bilis. En atresia biliar: captación hepática NORMAL pero NO excreción a intestino incluso tras 24 horas (la bilis no puede salir). Sensibilidad ~95% pero no es 100% específico (hepatitis neonatal severa puede dar igual), 2) COLANGIOGRAFÍA INTRAOPERATORIA (estándar oro): Durante laparotomía exploratoria, se inyecta contraste en vesícula (si existe) o directamente en hilio hepático. En atresia: NO se visualiza árbol biliar extrahepático permeable, confirmando obliteración, 3) BIOPSIA HEPÁTICA: Muestra proliferación ductal, tapones biliares, fibrosis portal (pero no distingue 100% de otras colestasis). La EXPLORACIÓN QUIRÚRGICA con colangiografía es diagnóstica Y terapéutica (se procede a Kasai si confirma atresia). Ecografía (vesícula pequeña/ausente, signo del 'cordón triangular' en hilio) y GGT muy alta apoyan diagnóstico pero no son definitivos.",
      },
      {
        question:
          "¿Cuál es el manejo médico de soporte en colestasis neonatal?",
        options: [
          "No requiere tratamiento médico hasta la cirugía",
          "Vitaminas liposolubles (A, D, E, K) en dosis altas, fórmula con triglicéridos de cadena media (MCT), ácido ursodesoxicólico, monitoreo de complicaciones",
          "Solo antibióticos",
          "Restricción de grasas completa",
        ],
        correct: 1,
        explanation:
          "El manejo médico de soporte en colestasis incluye: 1) VITAMINAS LIPOSOLUBLES (A, D, E, K) en dosis 2-10x normales por vía oral: la falta de bilis intestinal impide absorción de grasas y vitaminas liposolubles → riesgo de deficiencia: Vitamina K (hemorragia), D (raquitismo), E (neuropatía, hemólisis), A (ceguera nocturna). Monitorizar niveles séricos y ajustar dosis, 2) FÓRMULA con TRIGLICÉRIDOS DE CADENA MEDIA (MCT): Los MCT se absorben directamente sin necesidad de bilis, mejorando nutrición y crecimiento, 3) ÁCIDO URSODESOXICÓLICO (10-20 mg/kg/día): Ácido biliar hidrofílico que mejora flujo biliar, reduce prurito, protege hepatocitos de ácidos biliares tóxicos, 4) MANEJO DE PRURITO: Rifampicina, colestiramina, antihistamínicos si prurito severo, 5) MONITOREO: Nutricional (curvas crecimiento), hepático (INR, albúmina, transaminasas), desarrollo (la colestasis afecta neurodesarrollo), 6) PROFILAXIS INFECCIONES: Vacunación completa, considerar profilaxis antibiótica post-Kasai para prevenir colangitis. Si desarrolla cirrosis descompensada (ascitis, várices, encefalopatía), se evalúa para TRASPLANTE HEPÁTICO. Pronóstico: sobrevida a 10 años con hígado propio post-Kasai ~40-50%; con trasplante hepático sobrevida >90%.",
      },
      {
        question:
          "¿Cuál es el principal diagnóstico diferencial de atresia biliar en un lactante con colestasis?",
        options: [
          "Reflujo gastroesofágico",
          "Hepatitis neonatal idiopática (colestasis intrahepática)",
          "Bronquiolitis",
          "Otitis media",
        ],
        correct: 1,
        explanation:
          "El principal diferencial de atresia biliar (colestasis OBSTRUCTiva EXTRAhepática) es la HEPATITIS NEONATAL IDIOPÁTICA (colestasis INTRAhepática, 30-40% de colestasis neonatal): Comparten: ictericia con bilirrubina directa alta, hepatomegalia, heces pálidas intermitentes. Diferencias: ATRESIA BILIAR: Heces PERSISTENTEMENTE acólicas, vesícula pequeña/ausente en eco, GGT MUY alta (>300), HIDA sin excreción a intestino, progresión rápida a cirrosis, requiere cirugía. HEPATITIS NEONATAL: Heces pálidas INTERMITENTES (pueden variar de amarillas a pálidas), vesícula NORMAL en eco, GGT menos elevada, HIDA puede mostrar excreción tardía, mejora espontánea en 50%, tratamiento médico. Otros diferenciales: Quiste de colédoco (masa quística en eco), síndrome de Alagille (facies característica, soplo cardíaco por estenosis pulmonar periférica, vértebras en mariposa), déficit de alfa-1-antitripsina, errores innatos metabolismo (tirosinemia, galactosemia), infecciones TORCH. REGLA PRÁCTICA: Todo lactante con heces acólicas persistentes >14 días = atresia biliar hasta que se demuestre lo contrario → referir URGENTE a centro con cirugía hepática pediátrica.",
      },
    ],
  },
  {
    id: 8,
    title:
      "Caso 8: Retinopatía del Prematuro con Necesidad de Tratamiento Urgente",
    scenario: {
      presentation:
        "Prematuro extremo de 25 semanas, 680 gramos al nacer, ahora con 34 semanas de edad postmenstrual (9 semanas de edad cronológica). Requirió ventilación mecánica por 4 semanas, oxígeno suplementario por 7 semanas. Ha tenido múltiples complicaciones: SDR severo, ductus arterioso persistente tratado con indometacina, sepsis tardía. En examen oftalmológico de rutina (iniciado a 31 semanas EPM), se detectó inicialmente ROP estadio 1 zona II. Examen de seguimiento 1 semana después muestra PROGRESIÓN RÁPIDA.",
      vitals: {
        Peso: "1580 gramos (crecimiento adecuado en percentiles prematuros)",
        "Edad postmenstrual": "34 semanas",
        "Saturación de O₂": "95% en aire ambiente (ya sin soporte)",
      },
      physicalExam:
        "Examen oftalmológico por oftalmólogo pediatra con oftalmoscopio indirecto tras dilatación pupilar: Ojo derecho: ROP estadio 3+ (PLUS) zona I: Neovascularización extraretiniana (estadio 3) con proliferación fibrovascular en cresta. Enfermedad PLUS: vasos retinianos tortuosos y dilatados (>2 cuadrantes). Zona I (área posterior, alto riesgo). Ojo izquierdo: ROP estadio 3+ zona II: Hallazgos similares pero en zona más periférica.",
    },
    questions: [
      {
        question:
          "¿Cuál es la clasificación de severidad de la ROP de este paciente?",
        options: [
          "ROP leve que solo requiere observación",
          "ROP UMBRAL/PRE-UMBRAL con enfermedad PLUS en zona I = ROP TIPO 1, ALTA PROBABILIDAD DE CEGUERA sin tratamiento, requiere tratamiento URGENTE",
          "ROP que se resolverá espontáneamente",
          "ROP estadio 5 (ya ciego, no tratable)",
        ],
        correct: 1,
        explanation:
          "Este paciente tiene ROP TIPO 1 (criterios para tratamiento URGENTE según estudio ET-ROP): DEFINICIÓN ROP TIPO 1: Cualquiera de: 1) Zona I con ROP estadio 3, 2) Zona I con enfermedad PLUS (independiente del estadio), 3) Zona II estadio 2-3 CON enfermedad PLUS. Este paciente cumple múltiples criterios (zona I estadio 3 PLUS). SIGNIFICADO: Riesgo de progresión a desprendimiento retiniano (estadio 4-5) y ceguera >90% sin tratamiento. REQUERIMIENTO: Tratamiento dentro de 48 horas del diagnóstico. ESTADIOS ROP: 1 (línea demarcación entre retina vascularizada/avascular), 2 (cresta elevada), 3 (neovascularización extraretiniana fibrovascular), 4 (desprendimiento retiniano parcial), 5 (desprendimiento total, ceguera). ENFERMEDAD PLUS: Tortuosidad y dilatación vascular retiniana posterior (indica enfermedad agresiva). ZONAS: I (posterior, 5mm desde nervio óptico, incluye mácula, MÁS grave), II (media), III (periférica).",
      },
      {
        question:
          "¿Cuál es el tratamiento de elección para ROP tipo 1 en zona I?",
        options: [
          "Solo observación y oxígeno",
          "Láser fotocoagulación de retina avascular o anti-VEGF intravítreo (bevacizumab/ranibizumab), dentro de 48-72 horas del diagnóstico",
          "Cirugía de cataratas",
          "Antibióticos",
        ],
        correct: 1,
        explanation:
          "Tratamiento de ROP TIPO 1: DOS opciones principales: 1) LÁSER FOTOCOAGULACIÓN (tratamiento clásico, estándar oro): Bajo anestesia general, se aplica láser (diodo, argón) a TODA la retina AVASCULAR periférica (~1500-3000 quemaduras), destruyendo tejido hipóxico que produce VEGF excesivo. Ventajas: Eficacia 90% en prevenir desprendimiento, efectos sistémicos mínimos. Desventajas: Destrucción permanente de retina periférica (pérdida campo visual periférico, visión nocturna), riesgo miopía. 2) ANTI-VEGF INTRAVÍTREO (bevacizumab/ranibizumab): Inyección intravítrea de anticuerpo monoclonal que bloquea VEGF. Ventajas: Preserva retina periférica avascular permitiendo vascularización POSTERIOR más completa (especialmente útil en zona I posterior donde láser difícil), menor riesgo miopía alta, procedimiento más rápido. Desventajas: Efectos sistémicos potenciales (VEGF se absorbe sistémicamente y puede afectar desarrollo pulmonar, cerebral), menor evidencia a largo plazo, mayor necesidad de retratamiento (recurrencias 5-15%), VIGILANCIA PROLONGADA necesaria (meses más vs láser). EVIDENCIA: Estudio BEAT-ROP: anti-VEGF SUPERIOR a láser en zona I (menos recurrencias), similar en zona II. TIMING: Debe realizarse <48-72h de diagnóstico ROP tipo 1 (ventana crítica). Post-tratamiento: Seguimiento oftalmológico semanal inicialmente, luego mensual, hasta vascularización completa (puede tomar meses). PRONÓSTICO: Con tratamiento oportuno, 80-90% mantienen visión útil. Sin tratamiento, >90% progresan a ceguera.",
      },
      {
        question:
          "¿Por qué es crítico el seguimiento oftalmológico PROLONGADO incluso después del tratamiento?",
        options: [
          "No es necesario seguimiento después del tratamiento",
          "Porque hay riesgo de RECURRENCIA de ROP, progresión tardía, complicaciones como desprendimiento tardío, miopía alta, estrabismo, ambliopía; vigilancia hasta vascularización retiniana completa (~45-50 semanas EPM)",
          "Solo para vender más consultas",
          "Porque la vista ya no mejorará",
        ],
        correct: 1,
        explanation:
          "El seguimiento post-tratamiento ROP es ESENCIAL: CORTO PLAZO (semanas-meses post-tratamiento): 1) RECURRENCIA/PERSISTENCIA de ROP activa (5-15% con anti-VEGF, <5% con láser): Puede ocurrir semanas-meses después, especialmente con anti-VEGF donde la vascularización debe completarse aún. Requiere retratamiento urgente. 2) DESPRENDIMIENTO RETINIANO TARDÍO: Puede ocurrir incluso tras tratamiento aparentemente exitoso si hay tracción vitreorretiniana. 3) Monitoreo hasta vascularización retiniana COMPLETA (típicamente 45-50 semanas edad postmenstrual o más): En anti-VEGF la vascularización continúa meses, por eso seguimiento MÁS prolongado que con láser. LARGO PLAZO (años): 1) MIOPÍA ALTA (50-80% de prematuros con ROP tratada): Ojo prematuro crece anormalmente. Necesitan lentes desde infancia. 2) ESTRABISMO (20-40%): Desalineación ocular por afectación muscular/neural. Requiere tratamiento ortóptico/quirúrgico. 3) AMBLIOPÍA ('ojo perezoso', 10-20%): Supresión cortical de un ojo, requiere parche terapéutico. 4) GLAUCOMA (5-10%): Complicación tardía, puede causar ceguera. 5) DESPRENDIMIENTO RETINIANO TARDÍO (años-décadas después): Retina con cicatrices ROP es frágil. ESQUEMA DE SEGUIMIENTO: Post-tratamiento: semanal x4, luego quincenal hasta vascularización completa. Primera infancia: cada 6-12 meses (refracción, estrabismo, ambliopía). Toda la vida: evaluación retina periódica (riesgo desprendimiento). El prematuro extremo con ROP tratada requiere seguimiento oftalmológico DE POR VIDA.",
      },
      {
        question:
          "¿Cuáles son las estrategias de PREVENCIÓN de ROP en la UCIN?",
        options: [
          "No hay estrategias preventivas efectivas",
          "Uso juicioso de oxígeno con rangos objetivo SpO₂ 90-95% (evitar hiperoxia e hipoxia), nutrición óptima, detección y tratamiento de comorbilidades (sepsis, anemia), screening oftalmológico oportuno",
          "Dar oxígeno al 100% siempre para prevenir ROP",
          "Evitar completamente el oxígeno",
        ],
        correct: 1,
        explanation:
          "PREVENCIÓN de ROP (estrategias basadas en fisiopatología): 1) CONTROL ESTRICTO DE OXÍGENO: MANTENER SpO₂ en rango 90-95% (evitar HIPEROXIA que detiene vascularización en fase 1, Y evitar HIPOXIA que dispara VEGF excesivo en fase 2). Estudios (BOOST-II, SUPPORT): Rangos SpO₂ 91-95% vs 85-89%, rango más alto ↓ROP pero ↑mortalidad; balance óptimo ~90-95%. Ajustar FiO₂ frecuentemente según saturación. Destete GRADUAL de oxígeno (no cambios bruscos). 2) NUTRICIÓN ÓPTIMA: Prematuros con mejor crecimiento postnatal tienen MENOR ROP (IGF-1 baja asociada a ROP severa). Inicio precoz de nutrición parenteral, fortificación leche materna, suplementos proteicos. 3) MINIMIZAR COMORBILIDADES: Tratar sepsis, anemia (transfundir si Hb <12-13 en ventilación), evitar hipotermia, hipoglucemia (estrés aumenta VEGF). 4) LUZ AMBIENTAL: Evitar luz directa intensa a ojos (controvertido, estudios mixtos). 5) SCREENING OPORTUNO: Iniciar exámenes a 31 semanas EPM o 4 semanas vida (lo posterior) en <32 sem/<1500g. Repetir cada 1-2 semanas según hallazgos. NO previene ROP pero permite detección y tratamiento oportuno ANTES de ceguera. 6) EN INVESTIGACIÓN: Suplementos IGF-1, antioxidantes (vitamina E), propranolol (↓VEGF), anti-VEGF profiláctico (riesgo efectos sistémicos). AÚN NO recomendado rutinariamente. IMPACTO: Las mejoras en cuidado neonatal (oxígeno controlado, nutrición) han ↓ROP severa pero ↑sobrevida de prematuros extremos (25-26 sem) mantiene incidencia global. MENSAJE CLAVE: 'Oxígeno es droga': titular cuidadosamente según saturación objetivo.",
      },
    ],
  },
];

// Data storage using localStorage
const STORAGE_KEY = "pediatria_study_app_progress";

function saveProgress() {
  const progress = {
    mcAnswers: mcAnswers,
    tfAnswers: tfAnswers,
    justAnswers: justAnswers,
    caseAnswers: caseAnswers,
    scores: {
      mc: mcScore,
      tf: tfScore,
      just: justScore,
      case: caseScore,
    },
    currentIndices: {
      mc: currentMCQuestion,
      tf: currentTFQuestion,
      just: currentJustQuestion,
      case: currentCase,
    },
    lastUpdated: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const progress = JSON.parse(saved);
      mcAnswers = progress.mcAnswers || {};
      tfAnswers = progress.tfAnswers || {};
      justAnswers = progress.justAnswers || {};
      caseAnswers = progress.caseAnswers || {};
      mcScore = progress.scores?.mc || 0;
      tfScore = progress.scores?.tf || 0;
      justScore = progress.scores?.just || 0;
      caseScore = progress.scores?.case || 0;
      currentMCQuestion = progress.currentIndices?.mc || 0;
      currentTFQuestion = progress.currentIndices?.tf || 0;
      currentJustQuestion = progress.currentIndices?.just || 0;
      currentCase = progress.currentIndices?.case || 0;
    } catch (e) {
      console.error("Error loading progress:", e);
    }
  }
}

// Initialize answers storage
let mcAnswers = {};
let tfAnswers = {};
let justAnswers = {};
let caseAnswers = {};

// Initialize scores
let mcScore = 0;
let tfScore = 0;
let justScore = 0;
let caseScore = 0;

// Current question indices
let currentMCQuestion = 0;
let currentTFQuestion = 0;
let currentJustQuestion = 0;
let currentCase = 0;
