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
  // NUEVAS PREGUNTAS AGREGADAS - MEZCLADAS POR ESPECIALIDADES
  // CARDIOLOGÍA
  {
    id: 61,
    question:
      "¿Cuál es la manifestación clínica principal de la coartación de aorta?",
    options: [
      "Cianosis generalizada",
      "Pulsos femorales débiles o ausentes",
      "Soplo sistólico en borde esternal izquierdo",
      "Insuficiencia respiratoria aguda",
    ],
    correct: 1,
    explanation:
      "La coartación de aorta se caracteriza por pulsos femorales débiles o ausentes, con diferencia de presión arterial entre extremidades superiores e inferiores. Puede presentarse con insuficiencia cardíaca en neonatos cuando cierra el conducto arterioso.",
  },
  // GASTROENTEROLOGÍA
  {
    id: 62,
    question:
      "¿Cuál es el tratamiento definitivo de la atresia de vías biliares?",
    options: [
      "Tratamiento médico con ácido ursodesoxicólico",
      "Procedimiento de Kasai (portoenterostomía)",
      "Colocación de stent biliar",
      "Trasplante hepático inmediato",
    ],
    correct: 1,
    explanation:
      "El procedimiento de Kasai debe realizarse antes de los 60 días de vida, idealmente antes de los 45 días. Si falla, el trasplante hepático es la opción definitiva. El éxito del Kasai disminuye significativamente después de los 60 días.",
  },
  // NEUROLOGÍA
  {
    id: 63,
    question:
      "¿Cuál es el tratamiento neuroprotector para la encefalopatía hipóxico-isquémica moderada-severa?",
    options: [
      "Corticoides en altas dosis",
      "Hipotermia terapéutica",
      "Oxigenoterapia hiperbárica",
      "Manitol",
    ],
    correct: 1,
    explanation:
      "La hipotermia terapéutica (33.5-34.5°C durante 72 horas) iniciada en las primeras 6 horas de vida mejora significativamente el pronóstico neurológico en encefalopatía hipóxico-isquémica moderada-severa, reduciendo mortalidad y discapacidad.",
  },
  // HEMATOLOGÍA
  {
    id: 64,
    question:
      "¿Cuál es la dosis de vitamina K profiláctica que se administra al nacimiento?",
    options: [
      "0.5 mg intramuscular",
      "1 mg intramuscular",
      "2 mg intramuscular",
      "5 mg oral",
    ],
    correct: 1,
    explanation:
      "Se administra 1 mg de vitamina K intramuscular al nacimiento para prevenir la enfermedad hemorrágica del recién nacido. La vía intramuscular es superior a la oral porque proporciona protección más prolongada y efectiva.",
  },
  // RENAL
  {
    id: 65,
    question: "¿Cuándo se considera que un recién nacido tiene oliguria?",
    options: [
      "Diuresis < 0.5 mL/kg/hora",
      "Diuresis < 1 mL/kg/hora",
      "Diuresis < 2 mL/kg/hora",
      "Diuresis < 3 mL/kg/hora",
    ],
    correct: 1,
    explanation:
      "Se define oliguria neonatal como una diuresis menor a 1 mL/kg/hora después de las primeras 24 horas de vida. La diuresis normal es de 1-3 mL/kg/hora.",
  },
  // CIRUGÍA
  {
    id: 66,
    question:
      "¿Cuál es el signo radiológico característico de la atresia duodenal?",
    options: [
      "Signo de la doble burbuja",
      "Neumatosis intestinal",
      "Calcificaciones hepáticas",
      "Patrón de vidrio esmerilado",
    ],
    correct: 0,
    explanation:
      "El signo de la doble burbuja en la radiografía abdominal es patognomónico de atresia duodenal, mostrando dilatación gástrica y del duodeno proximal con ausencia de gas distal.",
  },
  // RESPIRATORIO
  {
    id: 67,
    question:
      "¿Cuál es la saturación de oxígeno objetivo en un recién nacido prematuro para prevenir retinopatía?",
    options: ["85-89%", "90-95%", "96-100%", "80-85%"],
    correct: 1,
    explanation:
      "En prematuros, se debe mantener la saturación de oxígeno entre 90-95% para prevenir tanto la hipoxia como la retinopatía del prematuro por hiperoxia. La hiperoxia puede causar vasoconstricción retiniana y posterior neovascularización.",
  },
  // ENDOCRINOLOGÍA
  {
    id: 68,
    question: "¿Cuál es el valor de glucosa que define hipoglucemia neonatal?",
    options: ["< 70 mg/dL", "< 60 mg/dL", "< 45 mg/dL", "< 30 mg/dL"],
    correct: 2,
    explanation:
      "Se define hipoglucemia neonatal como glucosa plasmática < 45 mg/dL en las primeras 24 horas o < 50 mg/dL después de las 24 horas de vida. Debe tratarse incluso si es asintomática para prevenir daño neurológico.",
  },
  // ATENCIÓN PRIMARIA
  {
    id: 69,
    question:
      "¿Cuál es el aumento de peso esperado en un lactante durante el primer mes de vida?",
    options: [
      "10-15 gramos/día",
      "20-30 gramos/día",
      "40-50 gramos/día",
      "60-80 gramos/día",
    ],
    correct: 1,
    explanation:
      "El lactante normal gana aproximadamente 20-30 gramos por día durante el primer mes, recuperando el peso del nacimiento hacia los 10-14 días. Duplica su peso al nacer alrededor de los 4-5 meses.",
  },
  // CARDIOLOGÍA
  {
    id: 70,
    question:
      "¿Cuál es el tratamiento farmacológico inicial para mantener abierto el conducto arterioso en cardiopatías ductus-dependientes?",
    options: ["Indometacina", "Ibuprofeno", "Prostaglandina E1", "Furosemida"],
    correct: 2,
    explanation:
      "La prostaglandina E1 (PGE1) mantiene abierto el conducto arterioso en cardiopatías ductus-dependientes hasta la corrección quirúrgica. Se usa en cardiopatías que dependen del conducto para flujo pulmonar o sistémico.",
  },
  // GASTROENTEROLOGÍA
  {
    id: 71,
    question:
      "¿Cuál es la característica del vómito en la estenosis pilórica hipertrófica?",
    options: [
      "Vómito bilioso y explosivo",
      "Vómito no bilioso en proyectil",
      "Regurgitaciones leves",
      "Hematemesis",
    ],
    correct: 1,
    explanation:
      "La estenosis pilórica hipertrófica se caracteriza por vómitos no biliosos en proyectil que aparecen entre las 3-6 semanas de vida. El lactante queda hambriento después de vomitar y puede palparse masa en forma de oliva en epigastrio.",
  },
  // NEUROLOGÍA
  {
    id: 72,
    question:
      "¿Cuál es el tratamiento de primera línea para las convulsiones neonatales?",
    options: [
      "Diazepam intravenoso",
      "Fenobarbital",
      "Levetiracetam",
      "Fenitoína",
    ],
    correct: 1,
    explanation:
      "El fenobarbital es el anticonvulsivante de primera línea en convulsiones neonatales, con dosis de carga de 20 mg/kg IV. Si no controla, se puede usar fenitoína o levetiracetam como segunda línea.",
  },
  // HEMATOLOGÍA
  {
    id: 73,
    question:
      "¿A qué edad aparece típicamente la anemia fisiológica del lactante?",
    options: ["1-2 semanas", "2-3 meses", "4-6 meses", "9-12 meses"],
    correct: 1,
    explanation:
      "La anemia fisiológica del lactante aparece entre los 2-3 meses en niños a término y a las 6-12 semanas en prematuros. Es autolimitada y se debe a la transición de hemoglobina fetal a hemoglobina adulta.",
  },
  // RENAL
  {
    id: 74,
    question:
      "¿Cuál es la causa más común de masa abdominal palpable en un recién nacido?",
    options: [
      "Neuroblastoma",
      "Tumor de Wilms",
      "Hidronefrosis o displasia renal multiquística",
      "Teratoma",
    ],
    correct: 2,
    explanation:
      "Las patologías renales (hidronefrosis, displasia multiquística) son las causas más frecuentes de masa abdominal palpable en el período neonatal, representando el 50-60% de todas las masas abdominales neonatales.",
  },
  // CIRUGÍA
  {
    id: 75,
    question:
      "¿Cuál es la complicación más grave de la enterocolitis necrotizante?",
    options: [
      "Deshidratación",
      "Perforación intestinal",
      "Intolerancia alimentaria",
      "Anemia",
    ],
    correct: 1,
    explanation:
      "La perforación intestinal es la complicación más grave de la enterocolitis necrotizante y requiere cirugía de urgencia. Se manifiesta con neumoperitoneo en radiografía y deterioro clínico súbito.",
  },
  // RESPIRATORIO
  {
    id: 76,
    question:
      "¿Cuál es la indicación principal para administrar corticoides prenatales?",
    options: [
      "Prevención de infección neonatal",
      "Maduración pulmonar fetal entre 24-34 semanas",
      "Prevención de hemorragia intraventricular",
      "Tratamiento de restricción del crecimiento",
    ],
    correct: 1,
    explanation:
      "Los corticoides prenatales (betametasona o dexametasona) entre las 24-34 semanas aceleran la maduración pulmonar fetal, aumentan la producción de surfactante y reducen significativamente el síndrome de dificultad respiratoria y la mortalidad neonatal.",
  },
  // ENDOCRINOLOGÍA
  {
    id: 77,
    question:
      "¿Cuál es el hallazgo bioquímico característico de la hiperplasia suprarrenal congénita por déficit de 21-hidroxilasa?",
    options: [
      "Hipoglucemia e hiperpotasemia",
      "Hiponatremia e hiperpotasemia",
      "Hipernatremia e hipopotasemia",
      "Hipercalcemia",
    ],
    correct: 1,
    explanation:
      "El déficit de 21-hidroxilasa causa pérdida de sal con hiponatremia, hiperpotasemia y deshidratación (crisis suprarrenal), además de virilización en niñas por exceso de andrógenos. Requiere tratamiento urgente con hidrocortisona y fludrocortisona.",
  },
  // ATENCIÓN PRIMARIA
  {
    id: 78,
    question:
      "¿Cuál es la duración mínima recomendada de lactancia materna exclusiva según la OMS?",
    options: ["3 meses", "4 meses", "6 meses", "12 meses"],
    correct: 2,
    explanation:
      "La OMS recomienda lactancia materna exclusiva durante los primeros 6 meses de vida del lactante, continuando con alimentación complementaria hasta los 2 años o más. La lactancia materna proporciona nutrición óptima y protección inmunológica.",
  },
  // CARDIOLOGÍA
  {
    id: 79,
    question:
      "¿Cuál es la manifestación clínica característica de la comunicación interventricular (CIV) grande?",
    options: [
      "Cianosis desde el nacimiento",
      "Insuficiencia cardíaca y dificultad para alimentarse",
      "Asintomático toda la vida",
      "Crisis de hipoxia",
    ],
    correct: 1,
    explanation:
      "Las CIV grandes causan sobrecarga de volumen e insuficiencia cardíaca, manifestándose con taquipnea, sudoración durante la alimentación, dificultad para ganar peso (falla de medro) y hepatomegalia. Los síntomas aparecen cuando baja la resistencia vascular pulmonar.",
  },
  // GASTROENTEROLOGÍA
  {
    id: 80,
    question:
      "¿Cuál es el volumen gástrico residual que indica intolerancia alimentaria en un prematuro?",
    options: [
      "Mayor al 10% del volumen administrado",
      "Mayor al 25% del volumen administrado",
      "Mayor al 50% del volumen administrado",
      "Cualquier residuo gástrico",
    ],
    correct: 2,
    explanation:
      "Un residuo gástrico mayor al 50% del volumen de la toma anterior o mayor a 2-3 mL/kg sugiere intolerancia alimentaria en prematuros. Requiere pausar o reducir la alimentación enteral y evaluar otras causas como enterocolitis necrotizante.",
  },
  // MÁS PREGUNTAS DE OPCIÓN MÚLTIPLE - CUBRIENDO TODO EL PDF
  // CIRUGÍA - HERNIAS
  {
    id: 81,
    question:
      "¿Cuál es la complicación más grave de la hernia inguinal en lactantes?",
    options: [
      "Dolor leve",
      "Incarceración con riesgo de estrangulación intestinal",
      "Infección local",
      "Hematoma inguinal",
    ],
    correct: 1,
    explanation:
      "La incarceración (hernia irreducible) puede progresar a estrangulación con compromiso vascular del asa intestinal, causando isquemia, necrosis y perforación. Es más común en menores de 6 meses y requiere cirugía urgente.",
  },
  // ATENCIÓN PRIMARIA - CRECIMIENTO
  {
    id: 82,
    question:
      "¿Cuál es el crecimiento esperado en talla durante el primer año de vida?",
    options: ["10-15 cm", "20-25 cm", "25-30 cm", "35-40 cm"],
    correct: 2,
    explanation:
      "Durante el primer año, el lactante crece aproximadamente 25-30 cm (50% de su talla al nacer). El crecimiento es más rápido en los primeros 6 meses (15 cm) que en los segundos 6 meses (10 cm).",
  },
  // RESPIRATORIO - APNEA
  {
    id: 83,
    question: "¿Cuál es la definición de apnea en un recién nacido prematuro?",
    options: [
      "Pausa respiratoria > 10 segundos",
      "Pausa respiratoria > 20 segundos o < 20 seg con bradicardia/cianosis",
      "Cualquier pausa respiratoria",
      "Pausa respiratoria > 60 segundos",
    ],
    correct: 1,
    explanation:
      "La apnea del prematuro se define como cese de la respiración > 20 segundos, o < 20 segundos si se acompaña de bradicardia (<100 lpm), cianosis o desaturación (<85%). Es común en prematuros < 34 semanas por inmadurez del centro respiratorio.",
  },
  // GASTROENTEROLOGÍA - REFLUJO
  {
    id: 84,
    question:
      "¿Cuál es la diferencia entre regurgitación y reflujo gastroesofágico patológico?",
    options: [
      "No hay diferencia",
      "Regurgitación es fisiológica sin complicaciones; RGE patológico causa síntomas (falla de medro, esofagitis, apneas)",
      "Regurgitación solo ocurre en prematuros",
      "RGE siempre requiere cirugía",
    ],
    correct: 1,
    explanation:
      "La regurgitación (RGE fisiológico) es el retorno pasivo de contenido gástrico sin esfuerzo, común en lactantes (pico 4 meses), autolimitado. El RGE patológico (ERGE) causa síntomas: falla de medro, esofagitis, vómitos persistentes, apneas, sibilancias. Requiere tratamiento.",
  },
  // HEMATOLOGÍA - GRUPO SANGUÍNEO
  {
    id: 85,
    question:
      "¿Cuál es la incompatibilidad de grupo sanguíneo más común que causa enfermedad hemolítica?",
    options: [
      "Incompatibilidad Rh",
      "Incompatibilidad ABO (madre O, hijo A o B)",
      "Incompatibilidad AB",
      "Todas son igual de comunes",
    ],
    correct: 1,
    explanation:
      "La incompatibilidad ABO es más frecuente que Rh (1:150 vs 1:1000 embarazos). Ocurre cuando madre O tiene anticuerpos anti-A y anti-B que atacan al feto A o B. Generalmente es más leve que incompatibilidad Rh y puede ocurrir en primer embarazo.",
  },
  // CARDIOLOGÍA - PERSISTENCIA CONDUCTO
  {
    id: 86,
    question:
      "¿Cuál es el tratamiento farmacológico para cerrar el conducto arterioso persistente?",
    options: [
      "Prostaglandina E1",
      "Indometacina o Ibuprofeno",
      "Digoxina",
      "Furosemida",
    ],
    correct: 1,
    explanation:
      "La indometacina (primera opción) o ibuprofeno son inhibidores de prostaglandinas que favorecen el cierre del conducto arterioso persistente. Dosis: indometacina 0.1-0.2 mg/kg IV cada 12-24h por 3 dosis. Si falla tratamiento médico, se requiere ligadura quirúrgica.",
  },
  // ENDOCRINOLOGÍA - DIABETES NEONATAL
  {
    id: 87,
    question:
      "¿Cuál es la principal diferencia entre diabetes neonatal transitoria y permanente?",
    options: [
      "No hay diferencia",
      "Transitoria se resuelve antes de 18 meses; permanente requiere insulina de por vida",
      "Transitoria solo afecta prematuros",
      "Permanente siempre es autoinmune",
    ],
    correct: 1,
    explanation:
      "Diabetes neonatal transitoria (más común) aparece en primeras 6 semanas, se resuelve antes de 18 meses, puede recaer en adolescencia. Diabetes neonatal permanente requiere insulina de por vida, causada por mutaciones genéticas (KCNJ11, ABCC8, INS).",
  },
  // NEUROLOGÍA - DESARROLLO
  {
    id: 88,
    question:
      "¿A qué edad un lactante normal sostiene la cabeza estando en prono?",
    options: ["Al nacer", "1-2 meses", "3-4 meses", "6 meses"],
    correct: 2,
    explanation:
      "El control cefálico en prono se logra a los 3-4 meses. Hitos motores: 2 meses (sigue objetos 180°), 3-4 meses (control cefálico), 6 meses (sedestación con apoyo), 9 meses (sedestación sin apoyo, gateo), 12 meses (bipedestación, marcha con apoyo).",
  },
  // RENAL - INFECCIÓN URINARIA
  {
    id: 89,
    question: "¿Cuál es la bacteria más común en infección urinaria neonatal?",
    options: [
      "Staphylococcus aureus",
      "Escherichia coli",
      "Klebsiella",
      "Pseudomonas",
    ],
    correct: 1,
    explanation:
      "E. coli causa 80-90% de ITU en neonatos. Otros: Klebsiella, Proteus, Enterococcus. En neonatos, la ITU suele ser parte de sepsis con bacteriemia. Manifestaciones inespecíficas: fiebre, irritabilidad, vómitos, ictericia. Siempre requiere cultivo de orina por punción suprapúbica o cateterismo.",
  },
  // CIRUGÍA - INVAGINACIÓN
  {
    id: 90,
    question: "¿Cuál es la tríada clásica de la invaginación intestinal?",
    options: [
      "Fiebre, vómito, diarrea",
      "Dolor cólico intermitente, vómitos, heces en jalea de grosella",
      "Ictericia, hepatomegalia, ascitis",
      "Tos, disnea, cianosis",
    ],
    correct: 1,
    explanation:
      "La tríada clásica de invaginación intestinal (ileocólica) es: 1) Dolor abdominal cólico intenso e intermitente (episodios cada 15-20 min con llanto inconsolable), 2) Vómitos, 3) Heces en jalea de grosella (sangre y moco). Puede palparse masa en forma de salchicha. Edad típica: 3 meses-3 años.",
  },
  // ATENCIÓN PRIMARIA - VACUNAS
  {
    id: 91,
    question: "¿Cuál es la edad de administración de la vacuna rotavirus?",
    options: [
      "Al nacer",
      "Primera dosis a los 2 meses, completar serie antes de 8 meses",
      "12 meses",
      "4 años",
    ],
    correct: 1,
    explanation:
      "Vacuna rotavirus (oral): Primera dosis a los 2 meses, segunda a los 4 meses (algunas formulaciones requieren tercera dosis a 6 meses). IMPORTANTE: debe completarse ANTES de las 32 semanas (8 meses) por riesgo aumentado de invaginación intestinal después de esta edad.",
  },
  // RESPIRATORIO - DISPLASIA BRONCOPULMONAR
  {
    id: 92,
    question: "¿Cuál es la definición de displasia broncopulmonar?",
    options: [
      "Cualquier problema respiratorio en prematuros",
      "Dependencia de oxígeno suplementario a las 36 semanas de edad posmenstrual o a los 28 días de vida",
      "Neumonía recurrente",
      "Asma neonatal",
    ],
    correct: 1,
    explanation:
      "Displasia broncopulmonar (DBP) se define como: necesidad de oxígeno suplementario a las 36 semanas de edad posmenstrual (prematuros <32 sem) o a los 28 días de vida (prematuros >32 sem). Es la enfermedad pulmonar crónica más común en prematuros, causada por ventilación mecánica, oxígeno e inmadurez pulmonar.",
  },
  // GASTROENTEROLOGÍA - ALERGIA PROTEÍNA LECHE
  {
    id: 93,
    question:
      "¿Cuál es la manifestación más común de la alergia a la proteína de leche de vaca?",
    options: [
      "Anafilaxia severa",
      "Síntomas gastrointestinales (vómitos, diarrea, sangre en heces)",
      "Neumonía",
      "Convulsiones",
    ],
    correct: 1,
    explanation:
      "APLV afecta 2-7% de lactantes. Manifestaciones: Gastrointestinales (más común): vómitos, diarrea, sangre en heces, cólicos, proctocolitis. Cutáneas: eccema, urticaria. Respiratorias: sibilancias (raro). Diagnóstico: mejoría con dieta de eliminación (fórmula extensamente hidrolizada), recaída con reintroducción.",
  },
  // HEMATOLOGÍA - ENFERMEDAD HEMORRÁGICA
  {
    id: 94,
    question:
      "¿Cuáles son los factores de coagulación dependientes de vitamina K?",
    options: [
      "Factores I, V, VIII",
      "Factores II, VII, IX, X",
      "Factores XI, XII, XIII",
      "Solo el factor VIII",
    ],
    correct: 1,
    explanation:
      "Los factores de coagulación dependientes de vitamina K son: Factor II (protrombina), VII, IX y X, además de proteínas C y S (anticoagulantes). La deficiencia de vitamina K prolonga TP y TTPa pero mantiene normal el tiempo de sangrado (plaquetas normales).",
  },
  // CARDIOLOGÍA - SHOCK CARDIOGÉNICO
  {
    id: 95,
    question:
      "¿Cuál es el signo más temprano de insuficiencia cardíaca en un lactante?",
    options: [
      "Cianosis severa",
      "Taquipnea y sudoración durante la alimentación",
      "Convulsiones",
      "Ictericia",
    ],
    correct: 1,
    explanation:
      "Los signos tempranos de IC en lactantes son: taquipnea (>60 rpm), sudoración durante alimentación (signo de esfuerzo), dificultad para alimentarse, falla de medro. Signos posteriores: hepatomegalia, taquicardia, galope, edema, crepitantes pulmonares. La falla de medro es frecuente (gasto calórico aumentado).",
  },
  // ENDOCRINOLOGÍA - TALLA BAJA
  {
    id: 96,
    question: "¿Cuál es la causa más común de talla baja patológica en niños?",
    options: [
      "Déficit de hormona de crecimiento",
      "Hipotiroidismo",
      "Enfermedad celíaca",
      "Desnutrición crónica",
    ],
    correct: 1,
    explanation:
      "El hipotiroidismo es la causa endocrina tratable más común de talla baja patológica. Causa retraso del crecimiento con maduración ósea retrasada, proporciones corporales infantiles. Otras causas: desnutrición, enfermedad celíaca (frecuente), síndrome de Turner, déficit GH (raro), síndromes genéticos.",
  },
  // NEUROLOGÍA - HIPOTONÍA
  {
    id: 97,
    question: "¿Cuál es la causa más común de hipotonía neonatal central?",
    options: [
      "Atrofia muscular espinal",
      "Encefalopatía hipóxico-isquémica",
      "Síndrome de Down",
      "Distrofia muscular",
    ],
    correct: 1,
    explanation:
      "La encefalopatía hipóxico-isquémica es la causa más común de hipotonía CENTRAL (origen cerebral) en neonatos. Hipotonía central: hipotonía con reflejos normales o aumentados, retraso global. Hipotonía periférica: hipotonía con reflejos disminuidos/ausentes, debilidad muscular (ej: atrofia muscular espinal tipo 1).",
  },
  // RENAL - SÍNDROME NEFRÓTICO
  {
    id: 98,
    question: "¿Cuál es el tipo más común de síndrome nefrótico en niños?",
    options: [
      "Síndrome nefrótico congénito",
      "Síndrome nefrótico por cambios mínimos",
      "Glomerulonefritis membranoproliferativa",
      "Nefropatía por IgA",
    ],
    correct: 1,
    explanation:
      "El síndrome nefrótico por cambios mínimos (lesión mínima) representa el 80-90% de los casos en niños de 2-6 años. Se caracteriza por: proteinuria masiva, hipoalbuminemia, edema, hiperlipidemia. Excelente respuesta a corticoides (90% remite). Biopsia: glomérulos normales en microscopía óptica.",
  },
  // CIRUGÍA - CRIPTORQUIDIA
  {
    id: 99,
    question:
      "¿Cuál es la edad óptima para corrección quirúrgica de criptorquidia?",
    options: ["Al nacer", "6-18 meses", "5 años", "En la adolescencia"],
    correct: 1,
    explanation:
      "La orquidopexia debe realizarse entre 6-18 meses de edad (idealmente antes del año) para prevenir complicaciones: infertilidad (daño por temperatura elevada), mayor riesgo de cáncer testicular (40x), torsión testicular, hernia inguinal. Testículos no descendidos no descenderán espontáneamente después de 6 meses.",
  },
  // ATENCIÓN PRIMARIA - SUEÑO
  {
    id: 100,
    question: "¿Cuántas horas de sueño necesita un lactante de 6 meses?",
    options: [
      "8-10 horas totales",
      "12-15 horas totales (10-12h nocturnas + 2-3 siestas)",
      "18-20 horas",
      "6-8 horas",
    ],
    correct: 1,
    explanation:
      "Necesidades de sueño por edad: RN: 16-20h, 3 meses: 14-16h, 6 meses: 12-15h (10-12h nocturnas + 2-3 siestas), 12 meses: 12-14h (11-12h nocturnas + 1-2 siestas), 2 años: 11-14h (10-12h nocturnas + 1 siesta). Patrones de sueño maduran progresivamente.",
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
  // NUEVAS PREGUNTAS V/F AGREGADAS - MEZCLADAS POR ESPECIALIDADES
  // CARDIOLOGÍA
  {
    id: 41,
    statement:
      "La coartación de aorta se manifiesta con pulsos femorales disminuidos o ausentes.",
    correct: true,
    explanation:
      "VERDADERO. El hallazgo clínico clave es la disminución o ausencia de pulsos femorales con pulsos braquiales normales o aumentados, además de diferencia de presión arterial entre extremidades superiores e inferiores.",
  },
  // ENDOCRINOLOGÍA
  {
    id: 42,
    statement:
      "Los hijos de madre diabética tienen mayor riesgo de hipoglucemia neonatal.",
    correct: true,
    explanation:
      "VERDADERO. El hiperinsulinismo fetal secundario a hiperglucemia materna causa hipoglucemia de rebote al nacer cuando se corta el aporte materno de glucosa. Requieren monitorización estrecha de glucemia.",
  },
  // GASTROENTEROLOGÍA
  {
    id: 43,
    statement:
      "La atresia de vías biliares debe ser tratada antes de los 60 días de vida para mejor pronóstico.",
    correct: true,
    explanation:
      "VERDADERO. El procedimiento de Kasai tiene mejor tasa de éxito si se realiza antes de los 60 días de vida, idealmente antes de los 45 días. Después de este tiempo, la fibrosis hepática progresa rápidamente.",
  },
  // NEUROLOGÍA
  {
    id: 44,
    statement:
      "La hipotermia terapéutica debe iniciarse dentro de las primeras 6 horas en encefalopatía hipóxico-isquémica.",
    correct: true,
    explanation:
      "VERDADERO. La ventana terapéutica para hipotermia es crítica: debe iniciarse antes de las 6 horas de vida para obtener beneficio neuroprotector y mejorar el pronóstico neurológico a largo plazo.",
  },
  // HEMATOLOGÍA
  {
    id: 45,
    statement:
      "Los recién nacidos tienen niveles de hemoglobina más altos que los adultos.",
    correct: true,
    explanation:
      "VERDADERO. Los RN tienen Hb de 16-20 g/dL (vs 12-16 en adultos) debido a la hipoxia relativa intrauterina que estimula la eritropoyesis fetal y compensación por la menor capacidad de transporte de oxígeno de la HbF.",
  },
  // RENAL
  {
    id: 46,
    statement:
      "Es normal que un recién nacido no orine en las primeras 48 horas de vida.",
    correct: false,
    explanation:
      "FALSO. El 95% de los recién nacidos orinan en las primeras 24 horas de vida. La ausencia de micción después de 24 horas requiere evaluación para descartar anomalías renales u obstrucción urinaria.",
  },
  // CIRUGÍA
  {
    id: 47,
    statement:
      "El signo de la doble burbuja en radiografía es patognomónico de atresia duodenal.",
    correct: true,
    explanation:
      "VERDADERO. La doble burbuja representa la dilatación del estómago y duodeno proximal con ausencia de gas distal, característico de atresia duodenal. Frecuentemente asociado a síndrome de Down.",
  },
  // RESPIRATORIO
  {
    id: 48,
    statement:
      "La taquipnea transitoria del recién nacido requiere administración de surfactante.",
    correct: false,
    explanation:
      "FALSO. La taquipnea transitoria es autolimitada, causada por retraso en la reabsorción del líquido pulmonar fetal, y solo requiere oxígeno suplementario si es necesario. El surfactante se usa en enfermedad de membrana hialina.",
  },
  // ATENCIÓN PRIMARIA
  {
    id: 49,
    statement:
      "Se debe iniciar alimentación complementaria a los 4 meses para prevenir alergias.",
    correct: false,
    explanation:
      "FALSO. La OMS recomienda lactancia materna exclusiva hasta los 6 meses. Iniciar antes no previene alergias y puede aumentar el riesgo de infecciones gastrointestinales y obesidad.",
  },
  // CARDIOLOGÍA
  {
    id: 50,
    statement:
      "La prostaglandina E1 se utiliza para cerrar el conducto arterioso persistente.",
    correct: false,
    explanation:
      "FALSO. La PGE1 mantiene ABIERTO el conducto en cardiopatías ductus-dependientes. Para cerrar el conducto arterioso persistente se usa indometacina o ibuprofeno.",
  },
  // MÁS PREGUNTAS V/F - CUBRIENDO TODO EL PDF
  // RESPIRATORIO
  {
    id: 51,
    statement:
      "La frecuencia respiratoria normal en un recién nacido es de 30-40 respiraciones por minuto.",
    correct: false,
    explanation:
      "FALSO. La frecuencia respiratoria normal en RN es de 40-60 rpm. Más de 60 rpm se considera taquipnea y menos de 30 rpm bradipnea.",
  },
  // GASTROENTEROLOGÍA
  {
    id: 52,
    statement:
      "El meconio normalmente debe ser evacuado en las primeras 48 horas de vida.",
    correct: true,
    explanation:
      "VERDADERO. El 95% de los RN a término evacuan meconio en las primeras 24 horas y casi todos en las primeras 48 horas. El retraso sugiere obstrucción intestinal, íleo meconial o enfermedad de Hirschsprung.",
  },
  // NEUROLOGÍA
  {
    id: 53,
    statement:
      "La fontanela anterior normalmente se cierra entre los 9-18 meses de edad.",
    correct: true,
    explanation:
      "VERDADERO. La fontanela anterior (bregmática) se cierra entre los 9-18 meses, mientras que la fontanela posterior se cierra a los 2-3 meses. El cierre prematuro puede indicar craneosinostosis.",
  },
  // HEMATOLOGÍA
  {
    id: 54,
    statement:
      "La policitemia neonatal se define como hematocrito venoso mayor al 65%.",
    correct: true,
    explanation:
      "VERDADERO. Policitemia se define como Hto venoso > 65% o Hb > 22 g/dL. Causa hiperviscosidad sanguínea que puede comprometer perfusión cerebral, renal e intestinal.",
  },
  // ENDOCRINOLOGÍA
  {
    id: 55,
    statement: "La hiperplasia suprarrenal congénita afecta solo a niñas.",
    correct: false,
    explanation:
      "FALSO. Afecta a ambos sexos por igual, pero es más evidente en niñas por la virilización genital. Los niños pueden presentarse con crisis de pérdida de sal sin signos externos evidentes.",
  },
  // RENAL
  {
    id: 56,
    statement: "El riñón en herradura es la fusión renal más común.",
    correct: true,
    explanation:
      "VERDADERO. El riñón en herradura (fusión de los polos inferiores) es la anomalía de fusión renal más frecuente, ocurriendo en 1:400 nacimientos. Generalmente es asintomático pero puede asociarse a otras anomalías.",
  },
  // CIRUGÍA
  {
    id: 57,
    statement:
      "La gastrosquisis tiene peor pronóstico que el onfalocele debido a malformaciones asociadas.",
    correct: false,
    explanation:
      "FALSO. El onfalocele tiene peor pronóstico porque frecuentemente se asocia a otras malformaciones y síndromes genéticos (trisomías). La gastrosquisis es generalmente un defecto aislado con mejor pronóstico.",
  },
  // ATENCIÓN PRIMARIA
  {
    id: 58,
    statement:
      "Un lactante debe duplicar su peso al nacer alrededor de los 4-5 meses de edad.",
    correct: true,
    explanation:
      "VERDADERO. El lactante duplica su peso al nacer alrededor de los 4-5 meses, lo triplica al año de vida, y lo cuadruplica a los 2 años.",
  },
  // RESPIRATORIO
  {
    id: 59,
    statement:
      "El síndrome de aspiración de meconio ocurre principalmente en prematuros.",
    correct: false,
    explanation:
      "FALSO. El SAM afecta principalmente a RN postérmino (>42 semanas) o a término con sufrimiento fetal. Los prematuros rara vez tienen tono esfinteriano suficiente para evacuar meconio intraútero.",
  },
  // CARDIOLOGÍA
  {
    id: 60,
    statement:
      "El canal auriculoventricular es la cardiopatía más común en síndrome de Down.",
    correct: true,
    explanation:
      "VERDADERO. El 40-50% de niños con síndrome de Down tienen cardiopatía, siendo el canal AV (defecto de cojines endocárdicos) la más frecuente (45% de las cardiopatías en Down).",
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
  // NUEVAS PREGUNTAS DE JUSTIFICACIÓN AGREGADAS
  // CARDIOLOGÍA
  {
    id: 15,
    question:
      "Justifica el uso de prostaglandina E1 en cardiopatías congénitas ductus-dependientes y explica en qué situaciones está indicada.",
    keyPoints: [
      "Mantenimiento del conducto arterioso",
      "Cardiopatías dependientes de flujo pulmonar o sistémico",
      "Mecanismo de acción vasodilatador",
      "Tratamiento puente hasta cirugía",
    ],
    modelAnswer:
      "Las prostaglandinas E1 (PGE1) mantienen la permeabilidad del conducto arterioso en cardiopatías ductus-dependientes donde el flujo pulmonar o sistémico depende del conducto. INDICACIONES: Para flujo pulmonar (estenosis pulmonar crítica, atresia pulmonar, Tetralogía de Fallot severa), donde el conducto proporciona la única vía de flujo sanguíneo a los pulmones. Para flujo sistémico (coartación aórtica crítica, interrupción del arco aórtico, síndrome de hipoplasia de corazón izquierdo), donde el conducto perfunde el cuerpo. MECANISMO: la PGE1 relaja el músculo liso ductal al aumentar AMPc, previniendo su cierre natural. DOSIS: 0.01-0.1 mcg/kg/min IV continua. EFECTOS ADVERSOS: apnea (requiere intubación), hipotensión, fiebre. Es un tratamiento puente vital hasta la corrección quirúrgica definitiva.",
  },
  // GASTROENTEROLOGÍA
  {
    id: 16,
    question:
      "Explica por qué los vómitos biliosos en un recién nacido constituyen una emergencia quirúrgica y qué complicaciones pueden ocurrir si no se tratan a tiempo.",
    keyPoints: [
      "Indican obstrucción intestinal",
      "Riesgo de vólvulo intestinal",
      "Compromiso vascular mesentérico",
      "Necrosis intestinal si hay retraso",
    ],
    modelAnswer:
      "Los vómitos biliosos en un recién nacido indican obstrucción intestinal distal al ámpula de Vater (segunda porción duodenal) y deben considerarse una emergencia quirúrgica hasta demostrar lo contrario. Las causas incluyen atresia intestinal, vólvulo intestinal medio, malrotación intestinal y bandas de Ladd. El vólvulo es particularmente peligroso porque la torsión del mesenterio compromete el riego vascular intestinal, pudiendo causar isquemia, necrosis y perforación intestinal en pocas horas. La demora en el diagnóstico y tratamiento puede resultar en síndrome de intestino corto (requiere nutrición parenteral prolongada), sepsis abdominal, o muerte. Por ello, ante vómitos biliosos se debe realizar evaluación clínica urgente, estudios de imagen (radiografía simple, serie gastroduodenal con contraste) y preparación para cirugía exploradora inmediata.",
  },
  // NEUROLOGÍA
  {
    id: 17,
    question:
      "Describe el mecanismo de acción de la hipotermia terapéutica en la encefalopatía hipóxico-isquémica y explica por qué debe iniciarse en las primeras 6 horas de vida.",
    keyPoints: [
      "Reducción del metabolismo cerebral",
      "Disminución de excitotoxicidad",
      "Prevención de apoptosis neuronal",
      "Ventana terapéutica crítica de 6 horas",
    ],
    modelAnswer:
      "La hipotermia terapéutica (enfriamiento a 33.5-34.5°C durante 72 horas) es un tratamiento neuroprotector para encefalopatía hipóxico-isquémica moderada-severa. Su mecanismo de acción incluye: 1) Reducción del metabolismo cerebral y el consumo de oxígeno (disminuye 5% por cada grado de temperatura), 2) Disminución de la liberación de glutamato y excitotoxicidad, 3) Inhibición de la cascada de apoptosis neuronal, 4) Reducción de la inflamación y edema cerebral, y 5) Preservación de la autorregulación cerebrovascular. Debe iniciarse dentro de las primeras 6 horas de vida (ventana terapéutica crítica) porque el daño cerebral ocurre en dos fases: primaria (durante la hipoxia-isquemia) y secundaria (horas después, con reperfusión). La hipotermia interrumpe la fase secundaria. Estudios demuestran que reduce la mortalidad en 25% y mejora significativamente el pronóstico neurológico a largo plazo, disminuyendo parálisis cerebral y discapacidad severa.",
  },
  // RENAL
  {
    id: 18,
    question:
      "Explica por qué la hidronefrosis es la anomalía renal más frecuentemente detectada en ecografías prenatales y describe los criterios para decidir entre manejo conservador y quirúrgico.",
    keyPoints: [
      "Obstrucción unión ureteropélvica más común",
      "Detección prenatal por ecografía",
      "Clasificación por grados de severidad",
      "Criterios quirúrgicos vs observación",
    ],
    modelAnswer:
      "La hidronefrosis es la anomalía renal más común en ecografías prenatales (1-5% de embarazos) debido a la alta frecuencia de obstrucción de la unión ureteropélvica (UPJ) y reflujo vesicoureteral. La obstrucción puede ser anatómica (estenosis, inserción anómala) o funcional (aperistalsis). Se clasifica por grados (I-IV) según la dilatación pélvica y afectación del parénquima. MANEJO CONSERVADOR: hidronefrosis leve-moderada (grado I-II) suele resolverse espontáneamente (50-70% de casos) y solo requiere seguimiento ecográfico postnatal (1 semana, 1 mes, 3-6 meses), gammagrafía renal MAG-3 para función diferencial, y profilaxis antibiótica para prevenir infecciones. MANEJO QUIRÚRGICO (pieloplastia): indicado en hidronefrosis severa (grado III-IV) con: función renal diferencial <40% o en deterioro, hidronefrosis progresiva en seguimiento, infecciones urinarias recurrentes a pesar de profilaxis, síntomas (dolor, hematuria). El objetivo es preservar la función renal antes de daño irreversible.",
  },
  // MÁS PREGUNTAS DE JUSTIFICACIÓN - COBERTURA TOTAL DEL PDF
  // SEPSIS NEONATAL
  {
    id: 19,
    question:
      "Un recién nacido prematuro de 30 semanas desarrolla apneas, inestabilidad térmica, intolerancia alimentaria y leucopenia a las 72 horas de vida. Los cultivos crecen E. coli. Justifica por qué los prematuros tienen mayor riesgo de sepsis de inicio tardío y explica las diferencias entre sepsis temprana y tardía.",
    keyPoints: [
      "Inmadurez del sistema inmune en prematuros",
      "Sepsis temprana vs tardía: tiempo y etiología",
      "Factores de riesgo específicos",
      "Microorganismos causales diferentes",
      "Presentación clínica inespecífica",
    ],
    modelAnswer:
      "Los prematuros tienen riesgo 3-10 veces mayor de sepsis por inmadurez inmunológica: deficiencia de IgG (cruza placenta en tercer trimestre), neutropenia relativa, disminución de función fagocítica, y barrera cutáneo-mucosa inmadura. SEPSIS TEMPRANA (<72h): transmisión vertical/perinatal, agentes: Estreptococo grupo B (40-50%), E. coli (15-20%, más común en prematuros), Listeria. Factores de riesgo: RPM >18h, fiebre materna, corioamnionitis, colonización materna. SEPSIS TARDÍA (>72h): transmisión horizontal/nosocomial (este caso), agentes: Estafilococos coagulasa-negativos (más común), E. coli, Klebsiella, Candida. Factores de riesgo: catéteres centrales, ventilación mecánica, nutrición parenteral, estancia hospitalaria prolongada. La presentación es inespecífica: apneas, inestabilidad térmica, intolerancia alimentaria, letargia. Requiere alto índice de sospecha, hemocultivos antes de antibióticos empíricos (ampicilina + gentamicina/cefotaxima para temprana; vancomicina + gentamicina para tardía), ajuste según cultivos.",
  },
  // RETINOPATÍA DEL PREMATURO
  {
    id: 20,
    question:
      "Explica la fisiopatología de la retinopatía del prematuro, los factores de riesgo principales y por qué el screening oftalmológico es crucial en prematuros extremos.",
    keyPoints: [
      "Vascularización retiniana incompleta en prematuros",
      "Dos fases: hiperoxia y neovascularización",
      "Factores de riesgo: prematuridad y oxígeno",
      "Screening sistemático previene ceguera",
      "Tratamiento oportuno (láser/anti-VEGF)",
    ],
    modelAnswer:
      "La ROP ocurre por interrupción de la vascularización retiniana normal (completa a las 40 semanas). FASE 1 (hiperoxia): La exposición a oxígeno suprafisiológico causa vasoconstricción y cese de la vascularización retiniana, con pérdida de vasos existentes (zona avascular). FASE 2 (neovascularización): Al retirar O₂ suplementario, la retina avascular se vuelve hipóxica, liberando VEGF que induce proliferación vascular desordenada (neovascularización patológica) que puede causar hemorragia vítrea, tracción y desprendimiento de retina. FACTORES DE RIESGO: prematuridad <32 semanas o <1500g (principal), oxigenoterapia prolongada, sepsis, transfusiones, ventilación mecánica. SCREENING: Esencial en <32 semanas o <1500g, iniciar a las 4-6 semanas de vida o 31 semanas posmenstruales. Clasificación: zonas (I-III), estadios (1-5), enfermedad plus (dilatación vascular). TRATAMIENTO: Estadios 1-2 se resuelven espontáneamente; estadios 3+ con enfermedad plus requieren tratamiento urgente con láser (ablación zona avascular) o anti-VEGF (bevacizumab). El screening sistemático ha reducido drásticamente la ceguera por ROP.",
  },
  // HIPERTENSIÓN PULMONAR PERSISTENTE
  {
    id: 21,
    question:
      "Un neonato a término con antecedente de líquido amniótico meconial presenta cianosis central severa, taquipnea y saturación de 75% con O₂ al 100%. La ecocardiografía muestra cortocircuito derecha-izquierda a nivel de conducto arterioso. Justifica la fisiopatología de la hipertensión pulmonar persistente y su manejo.",
    keyPoints: [
      "Falla de transición circulatoria fetal-neonatal",
      "Vasoconstricción pulmonar persistente",
      "Cortocircuitos de derecha a izquierda",
      "Causas: hipoxia, aspiración meconial, sepsis",
      "Tratamiento: ventilación óptima, óxido nítrico, ECMO",
    ],
    modelAnswer:
      "La HPPRN es la falla de la transición circulatoria normal al nacer. FISIOPATOLOGÍA: Normalmente, al nacer, la expansión pulmonar y el aumento de PO₂ causan vasodilatación pulmonar, disminuyendo la resistencia vascular pulmonar (RVP) y cerrando cortocircuitos fetales (foramen oval, conducto arterioso). En HPPRN, estímulos como hipoxia, acidosis, hipotermia, inflamación (síndrome aspiración meconial) mantienen vasoconstricción pulmonar elevada. La RVP persiste alta (>resistencia sistémica), manteniendo cortocircuitos D→I a través de foramen oval y conducto arterioso, causando hipoxemia severa refractaria. Causas: SAM (más común), neumonía/sepsis, SDR, hernia diafragmática, asfixia perinatal. DIAGNÓSTICO: gradiente de saturación preductal (mano derecha) vs postductal (pies) >5-10%, ecocardiografía confirma cortocircuitos y excluye cardiopatía. MANEJO: 1) Ventilación óptima (evitar hipoxia, hipercapnia, acidosis que aumentan RVP), 2) Óxido nítrico inhalado (vasodilatador selectivo pulmonar, 20 ppm), 3) Sedación/analgesia, 4) Inotrópicos si shock, 5) Alcalinización (pH 7.45-7.55 disminuye RVP), 6) ECMO si falla médica.",
  },
  // CONVULSIONES NEONATALES
  {
    id: 22,
    question:
      "Las convulsiones neonatales tienen características clínicas diferentes a las convulsiones en niños mayores. Describe las manifestaciones clínicas sutiles, las causas más comunes y por qué es importante el estudio etiológico completo.",
    keyPoints: [
      "Manifestaciones sutiles vs generalizadas",
      "Causas: EHI, hemorragia, infección, metabólicas",
      "Importancia del estudio etiológico",
      "EEG para confirmar crisis eléctricas",
      "Tratamiento: fenobarbital, causa subyacente",
    ],
    modelAnswer:
      "Las convulsiones neonatales son frecuentemente SUTILES (50%): chupeteo, movimientos oculares anormales (desviación, nistagmo), pedaleo, apneas, cambios autonómicos. Convulsiones TÓNICAS (extensión de extremidades) y CLÓNICAS (sacudidas rítmicas focales o multifocales) son menos comunes. El cerebro inmaduro no sustenta convulsiones tónico-clónicas generalizadas como en niños mayores. CAUSAS MÁS COMUNES: 1) Encefalopatía hipóxico-isquémica (40-50%, inicio 12-24h), 2) Hemorragia intracraneal (hemorragia intraventricular, subdural), 3) Infección SNC (meningitis, encefalitis, sepsis), 4) Alteraciones metabólicas (hipoglucemia, hipocalcemia, hipomagnesemia, hiponatremia), 5) Errores innatos del metabolismo (deficiencia piridoxina), 6) Malformaciones cerebrales, 7) Síndrome de abstinencia. ESTUDIO COMPLETO ESENCIAL: historia obstétrica/perinatal, glucemia, calcio, magnesio, electrolitos, gasometría, hemocultivo, PL (descartar meningitis), EEG (confirma crisis eléctricas, muchas son subclínicas), neuroimagen (eco/RM). TRATAMIENTO: fenobarbital (20 mg/kg IV dosis carga), tratar causa subyacente (glucosa si hipoglucemia, antibióticos si infección, hipotermia si EHI). El pronóstico depende de la etiología: EHI y malformaciones tienen peor pronóstico; metabólicas corregibles tienen buen pronóstico.",
  },
  // LACTANCIA MATERNA
  {
    id: 23,
    question:
      "Justifica por qué la lactancia materna es especialmente importante en prematuros y describe las diferencias entre leche materna de término vs prematuros, y cuándo está indicada la fortificación.",
    keyPoints: [
      "Beneficios específicos para prematuros",
      "Composición diferente en leche de madre de prematuro",
      "Protección contra enterocolitis necrotizante",
      "Fortificación para prematuros <1500g",
      "Apoyo para extracción y lactancia",
    ],
    modelAnswer:
      "La lactancia materna en prematuros es CRÍTICA por beneficios superiores: 1) PROTECCIÓN contra ECN (reduce riesgo 77%), 2) Menor incidencia de sepsis tardía, 3) Mejor tolerancia alimentaria y vaciamiento gástrico, 4) Mejor desarrollo neurocognitivo a largo plazo, 5) Factores de crecimiento y hormonas que promueven maduración intestinal. COMPOSICIÓN: La leche de madre de prematuro tiene MAYOR contenido de proteínas (1.8-2 g/dL vs 1.2-1.5 en término), mayor energía (70-75 kcal/dL), más lactoferrina (antimicrobiana), más IgA secretora, más oligosacáridos (prebióticos). Estas diferencias persisten 4-6 semanas. FORTIFICACIÓN: Indicada en prematuros <1500g o <32 semanas porque incluso la leche de madre de prematuro no cubre todos los requerimientos elevados (especialmente calcio, fósforo, proteínas). Los fortificadores añaden: proteínas (0.7-1 g), calcio, fósforo, vitaminas, minerales, alcanzando 24 kcal/oz. Se inicia cuando tolerancia enteral >100 mL/kg/día. APOYO: Extracción 8-12 veces/día, banco de leche si madre no puede, contacto piel-piel (método canguro) aumenta producción láctea. Contraindicaciones ABSOLUTAS: galactosemia, madre VIH+ (en países con acceso a fórmula segura), tuberculosis activa no tratada, drogas incompatibles.",
  },
  // ICTERICIA - FOTOTERAPIA
  {
    id: 24,
    question:
      "Explica los mecanismos por los cuales la fototerapia reduce la bilirrubina sérica y describe los factores que determinan su efectividad. ¿Por qué algunos neonatos requieren fototerapia intensiva o exanguinotransfusión?",
    keyPoints: [
      "Fotoisomerización de bilirrubina",
      "Longitud de onda óptima (azul 460-490 nm)",
      "Factores de efectividad: irradiancia y área expuesta",
      "Indicaciones según nomogramas",
      "Exanguinotransfusión en falla de fototerapia",
    ],
    modelAnswer:
      "MECANISMOS DE FOTOTERAPIA: La luz azul (460-490 nm) penetra la piel y produce dos reacciones: 1) FOTOISOMERIZACIÓN (principal): convierte bilirrubina no conjugada (4Z,15Z) liposoluble en isómeros (4Z,15E y 4E,15Z) hidrosolubles que se excretan en bilis/orina SIN conjugación hepática, y 2) FOTO-OXIDACIÓN: convierte bilirrubina en productos pequeños hidrosolubles (menor importancia). FACTORES DE EFECTIVIDAD: 1) Irradiancia (intensidad luz): fototerapia intensiva >30 μW/cm²/nm vs estándar 8-10 μW/cm²/nm, 2) Área corporal expuesta: mayor área (desnudo con solo pañal) = mayor efectividad, 3) Distancia fuente-paciente (más cerca = mayor irradiancia), 4) Tipo de bilirrubina: directa no responde. INDICACIONES: Usar nomogramas de Bhutani según edad posnatal y factores de riesgo (prematuridad, hemólisis, acidosis). EXANGUINOTRANSFUSIÓN: Indicada cuando falla fototerapia intensiva, bilirrubina alcanza zona de exanguineo (>25 mg/dL en término sano), o signos de neurotoxicidad aguda (kernicterus). Remueve bilirrubina, anticuerpos (en hemólisis) y eritrocitos sensibilizados. Complicaciones: alteraciones electrolíticas, coagulopatía, enterocolitis. PREVENCIÓN: identificar factores de riesgo, seguimiento posnatal estrecho, iniciar fototerapia oportuna.",
  },
  // CUIDADO TÉRMICO
  {
    id: 25,
    question:
      "Un prematuro de 26 semanas, 800g nace con temperatura de 34.5°C a pesar de reanimación bajo calor radiante. Explica por qué los prematuros extremos pierden calor rápidamente y describe las estrategias de termorregulación en sala de partos y UCIN.",
    keyPoints: [
      "Pérdida de calor por 4 mecanismos",
      "Factores anatómicos: piel fina, poca grasa",
      "Producción de calor limitada sin grasa parda",
      "Estrategias: bolsas plásticas, incubadoras húmedas",
      "Importancia del ambiente térmico neutro",
    ],
    modelAnswer:
      "Los prematuros extremos pierden calor rápidamente por múltiples factores: 1) ANATÓMICOS: piel muy fina (mayor permeabilidad y pérdida insensible), escaso tejido subcutáneo (aislante), área superficie/masa corporal elevada (mayor pérdida relativa), 2) FISIOLÓGICOS: grasa parda escasa (no producen calor por termogénesis química), tono muscular bajo (sin escalofríos), reservas glucógeno limitadas, 3) PÉRDIDA DE CALOR por 4 mecanismos: EVAPORACIÓN (principal en prematuros: piel permeable, pulmones), radiación (a superficies frías), convección (corrientes aire), conducción (superficies frías). HIPOTERMIA aumenta morbimortalidad: aumenta consumo O₂, acidosis metabólica, hipoglucemia, distrés respiratorio, hemorragia intraventricular. ESTRATEGIAS: SALA DE PARTOS: cuna de calor radiante precalentada (36-37°C), bolsa de polietileno transparente hasta cuello (reduce pérdida evaporativa 30%), gorro, temperatura ambiental 25-26°C, secar solo cara. UCIN: incubadora en modo húmedo (80-90% humedad primeras 2 semanas reduce pérdida insensible), temperatura aire según peso/edad (28-34°C), servocontrol cutáneo (objetivo 36.5-37.5°C), método canguro cuando estable. AMBIENTE TÉRMICO NEUTRO: rango de temperatura ambiental donde consumo de O₂ es mínimo, varía según peso y edad postnatal (ej: 800g día 1: 34-35°C).",
  },
  // DESARROLLO NEUROLÓGICO
  {
    id: 26,
    question:
      "Describe los hitos del desarrollo neurológico en los primeros 2 años de vida y explica por qué es importante la corrección por edad gestacional en prematuros. ¿Cuáles son las banderas rojas que indican derivación inmediata?",
    keyPoints: [
      "Hitos motores, lenguaje, social por edad",
      "Corrección de edad en prematuros hasta 2 años",
      "Banderas rojas por área de desarrollo",
      "Importancia de detección temprana",
      "Intervención temprana mejora pronóstico",
    ],
    modelAnswer:
      "HITOS CLAVE: MOTORES: 2m (cabeza en prono), 4m (control cefálico), 6m (sentado con apoyo, volteos), 9m (sentado sin apoyo, gateo, pinza), 12m (bipedestación, marcha con apoyo, pinza fina), 18m (marcha independiente, sube escaleras con apoyo), 24m (corre, sube/baja escaleras). LENGUAJE: 2m (sonrisa social, arrullos), 6m (balbuceo), 9m (silabeo, señala), 12m (1-2 palabras, comprende órdenes simples), 18m (10-25 palabras, identifica partes del cuerpo), 24m (50+ palabras, frases 2 palabras). SOCIAL: 2m (sonrisa social), 6m (reconoce extraños), 9m (ansiedad separación), 12m (juego imitativo), 18m (juego simbólico). CORRECCIÓN EN PREMATUROS: restar semanas de prematuridad hasta edad 2 años porque el desarrollo sigue edad posmenstrual, no cronológica. Ej: prematuro 28 sem (12 sem adelantado) a los 6 meses cronológicos = 3 meses corregidos. BANDERAS ROJAS (derivar inmediatamente): 2m: no sonrisa social, no fija mirada, hipotonía/hipertonía severa. 4m: no control cefálico, no alcanza objetos. 6m: no voltea, no bisílabos. 9m: no sentado sin apoyo, asimetría motora, sin transferencia objetos. 12m: no bipedestación con apoyo, sin pinza, sin gesticulación, no dice 'mamá/papá'. 18m: no camina independiente, <6 palabras. 24m: no corre, <50 palabras, sin frases 2 palabras. Cualquier PÉRDIDA de habilidades (regresión) requiere evaluación urgente. Intervención temprana (estimulación, terapias) antes de 2 años aprovecha plasticidad cerebral y mejora significativamente pronóstico.",
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
  // NUEVOS CASOS CLÍNICOS AGREGADOS
  // CASO CLÍNICO: TETRALOGÍA DE FALLOT
  {
    id: 9,
    title: "Caso Clínico: Neonato con Cianosis Central",
    scenario: {
      presentation:
        "Recién nacido de 38 semanas presenta cianosis generalizada progresiva a las 6 horas de vida. Madre con control prenatal irregular, sin ecocardiografía fetal. Parto eutócico sin complicaciones, Apgar 8/9.",
      vitals: {
        "Frecuencia respiratoria": "55 rpm",
        "Frecuencia cardíaca": "145 lpm",
        "Saturación de O₂": "75% (no mejora con oxígeno al 100%)",
        Temperatura: "37.0°C",
        "Presión arterial": "65/40 mmHg",
      },
      physicalExam:
        "Recién nacido con cianosis generalizada marcada, más evidente en labios y lecho ungueal. Pulsos periféricos normales. Soplo sistólico eyectivo grado III/VI en borde esternal izquierdo. No hepatomegalia. Resto del examen sin alteraciones.",
      labs: "Gasometría arterial en aire ambiente: pH 7.36, pO₂ 45 mmHg, pCO₂ 38 mmHg, HCO₃ 21 mEq/L, SatO₂ 75%. Test de hiperoxia: pO₂ permanece <100 mmHg con FiO₂ 100%. Radiografía de tórax: corazón en forma de 'bota' (coeur en sabot), trama vascular pulmonar disminuida. Ecocardiografía: estenosis pulmonar severa, CIV grande, aorta cabalgante, hipertrofia ventricular derecha.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico?",
        options: [
          "Síndrome de dificultad respiratoria",
          "Tetralogía de Fallot",
          "Transposición de grandes arterias",
          "Persistencia del conducto arterioso",
        ],
        correct: 1,
        explanation:
          "El diagnóstico es Tetralogía de Fallot, la cardiopatía congénita cianótica más frecuente. Se caracteriza por cuatro defectos: 1) estenosis pulmonar, 2) CIV grande, 3) aorta cabalgante, y 4) hipertrofia ventricular derecha. La cianosis que no mejora con oxígeno (test de hiperoxia negativo) indica cortocircuito derecha-izquierda a nivel cardíaco. La radiografía con corazón en 'bota' es característica.",
      },
      {
        question: "¿Por qué la cianosis no mejora con oxígeno al 100%?",
        options: [
          "Porque tiene neumonía",
          "Porque hay cortocircuito derecha-izquierda a nivel cardíaco (sangre desaturada pasa del ventrículo derecho al izquierdo sin pasar por los pulmones)",
          "Porque los pulmones no funcionan",
          "Porque tiene anemia severa",
        ],
        correct: 1,
        explanation:
          "La cianosis persiste con oxígeno porque es de origen cardíaco por cortocircuito derecha-izquierda. La estenosis pulmonar severa aumenta la resistencia al flujo pulmonar, lo que hace que la sangre desaturada del ventrículo derecho pase a través de la CIV hacia el ventrículo izquierdo y la aorta, sin oxigenarse en los pulmones. El oxígeno no puede corregir esta mezcla de sangre.",
      },
      {
        question: "¿Qué tratamiento inicial requiere este paciente?",
        options: [
          "Surfactante pulmonar",
          "Prostaglandina E1 si ductus-dependiente, posición genupectoral en crisis, betabloqueantes",
          "Antibióticos de amplio espectro",
          "Solo observación",
        ],
        correct: 1,
        explanation:
          "El tratamiento inicial incluye: 1) Prostaglandina E1 si la lesión es ductus-dependiente (para mantener flujo pulmonar), 2) Posición genupectoral si presenta crisis hipóxicas (aumenta resistencia vascular sistémica y disminuye cortocircuito D-I), 3) Betabloqueantes (propranolol) para prevenir crisis de hipoxia, 4) Corrección de anemia y deshidratación, 5) Oxígeno (aunque ayuda poco). La corrección quirúrgica total se realiza típicamente entre 3-6 meses.",
      },
    ],
  },
  // CASO CLÍNICO: GASTROSQUISIS
  {
    id: 10,
    title: "Caso Clínico: Defecto de Pared Abdominal",
    scenario: {
      presentation:
        "Recién nacido producto de embarazo de 37 semanas. Madre de 19 años, primigesta, con control prenatal completo. Ecografía prenatal del tercer trimestre reportó defecto de pared abdominal con evisceración intestinal. Parto por cesárea programada.",
      vitals: {
        "Frecuencia respiratoria": "50 rpm",
        "Frecuencia cardíaca": "155 lpm",
        "Saturación de O₂": "96%",
        Temperatura: "36.2°C (tendencia a hipotermia)",
      },
      physicalExam:
        "Recién nacido con defecto paraumbilical derecho de aproximadamente 3 cm. Evisceración de asas intestinales sin saco peritoneal que las cubra. Asas intestinales edematosas, engrosadas, cubiertas de fibrina. Cordón umbilical insertado a la izquierda del defecto, intacto. No se observan otras malformaciones evidentes. Resto del examen físico normal.",
      labs: "Hemoglobina: 16 g/dL. Leucocitos: 12,000/mm³. Plaquetas: 250,000/mm³. Glucosa: 65 mg/dL. Electrolitos normales. Radiografía de abdomen: asas intestinales fuera de la cavidad abdominal, sin evidencia de perforación o neumoperitoneo.",
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico?",
        options: [
          "Onfalocele",
          "Gastrosquisis",
          "Hernia umbilical",
          "Extrofia vesical",
        ],
        correct: 1,
        explanation:
          "El diagnóstico es gastrosquisis. Se caracteriza por: defecto paraumbilical (generalmente derecho), sin saco peritoneal cubriendo las vísceras, vísceras expuestas y edematosas por contacto prolongado con líquido amniótico, cordón umbilical con inserción normal (a la izquierda del defecto), generalmente es un defecto aislado sin otras malformaciones. Se diferencia del onfalocele que es central, tiene saco, y el cordón se inserta en el saco.",
      },
      {
        question: "¿Cuál es el manejo inmediato en sala de partos?",
        options: [
          "Cubrir con compresas secas y proceder a cirugía inmediata",
          "Envolver vísceras con gasas estériles húmedas tibias + plástico estéril, posición lateral derecha, sonda orogástrica, líquidos IV aumentados, antibióticos",
          "No hacer nada, esperar evolución espontánea",
          "Intentar reducir manualmente las vísceras",
        ],
        correct: 1,
        explanation:
          "El manejo inmediato incluye: 1) Envolver vísceras con gasas estériles húmedas y tibias + plástico estéril para prevenir pérdida de calor y líquidos, 2) Posicionar al RN en decúbito lateral derecho para evitar torsión vascular del mesenterio, 3) Colocar sonda orogástrica para descompresión gástrica, 4) Acceso venoso y líquidos IV aumentados (150-200 mL/kg/día) por grandes pérdidas insensibles, 5) Antibióticos profilácticos, 6) Mantener temperatura corporal, 7) NPO, 8) Traslado urgente a cirugía pediátrica.",
      },
      {
        question: "¿Cuál es el tratamiento definitivo?",
        options: [
          "Cierre primario inmediato siempre",
          "Reducción gradual con silo de silastic y cierre primario diferido en 5-7 días",
          "Tratamiento médico conservador",
          "Resección intestinal completa",
        ],
        correct: 1,
        explanation:
          "El tratamiento definitivo es la reducción gradual de las vísceras usando un silo de silastic (bolsa temporal) con cierre progresivo durante 5-7 días, hasta lograr que todas las vísceras entren en la cavidad abdominal y realizar cierre primario diferido de la pared. Esto previene el síndrome compartimental abdominal que ocurriría con cierre primario forzado. En casos seleccionados con defecto pequeño y cavidad abdominal adecuada, se puede intentar cierre primario inmediato. El pronóstico generalmente es bueno si no hay atresia intestinal asociada.",
      },
    ],
  },
  // NUEVOS CASOS CLÍNICOS - COBERTURA COMPLETA DEL PDF
  // CASO CLÍNICO: SEPSIS NEONATAL TARDÍA
  {
    id: 11,
    title: "Caso Clínico: Sepsis Neonatal Tardía",
    scenario: {
      presentation:
        "Prematuro de 28 semanas, actualmente de 10 días de vida, 1100g peso actual. Tiene catéter central PICC y ha recibido nutrición parenteral. En las últimas 24 horas presenta: apneas frecuentes que requieren estimulación, inestabilidad térmica (36.0°C), intolerancia alimentaria con residuos gástricos biliosos, letargia y piel moteada.",
      vitals: {
        "Frecuencia cardíaca": "180 lpm (taquicardia)",
        "Frecuencia respiratoria": "70 rpm con apneas",
        "Saturación de O₂": "92% con O₂ suplementario",
        Temperatura: "36.0°C",
        "Presión arterial": "35/18 mmHg (hipotensión)",
      },
      physicalExam:
        "Letárgico, piel moteada, llenado capilar 4 segundos, abdomen distendido con peristalsis disminuida, sitio de inserción PICC sin signos inflamatorios evidentes. Hipotonía generalizada.",
      labResults: {
        Hemograma:
          "Leucocitos 3,000/μL (leucopenia), Neutrófilos 20% con 30% bandas (desviación izquierda marcada), Plaquetas 60,000/μL (trombocitopenia)",
        "Proteína C reactiva": "12 mg/dL (marcadamente elevada)",
        Glucosa: "45 mg/dL (hipoglucemia)",
        Lactato: "4.5 mmol/L (acidosis láctica)",
        Gasometría: "pH 7.28, HCO₃ 16 mEq/L (acidosis metabólica)",
      },
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico más probable en este prematuro?",
        options: [
          "Síndrome de dificultad respiratoria",
          "Sepsis neonatal tardía con probable origen en catéter central",
          "Enterocolitis necrotizante",
          "Crisis de apnea primaria del prematuro",
        ],
        correct: 1,
        explanation:
          "La presentación clínica es altamente sugestiva de sepsis neonatal tardía (>72h vida): deterioro agudo con apneas, inestabilidad térmica, intolerancia alimentaria, letargia, mala perfusión periférica, leucopenia con desviación izquierda marcada, trombocitopenia, PCR muy elevada, acidosis metabólica. El catéter central (PICC) es el factor de riesgo más importante para sepsis nosocomial. Aunque ECN es diferencial importante (distensión abdominal), la leucopenia y signos sistémicos severos apuntan más a sepsis.",
      },
      {
        question:
          "¿Cuáles son los agentes causales más probables en este escenario?",
        options: [
          "Estreptococo grupo B y E. coli",
          "Estafilococos coagulasa-negativos, Staphylococcus aureus, bacilos gram negativos (Klebsiella, E. coli), Candida",
          "Virus respiratorio sincitial",
          "Listeria monocytogenes",
        ],
        correct: 1,
        explanation:
          "En sepsis neonatal TARDÍA (>72h) en prematuros hospitalizados con catéteres centrales, los agentes son: 1) Estafilococos coagulasa-negativos (40-50%, más común, bajo grado pero significativo en prematuros), 2) Staphylococcus aureus (10-15%, más virulento), 3) Bacilos gram negativos: Klebsiella, E. coli, Enterobacter (15-20%), 4) Candida (5-10%, especialmente con antibióticos prolongados, NP). EGB y E. coli son típicos de sepsis TEMPRANA vertical. El PICC es puerta de entrada ideal para estafilococos (colonización cutánea).",
      },
      {
        question: "¿Cuál es el manejo INMEDIATO más apropiado?",
        options: [
          "Observación y reevaluación en 24 horas",
          "Hemocultivos (central y periférico), PL, urocultivo, iniciar antibióticos empíricos (vancomicina + gentamicina o cefotaxima), soporte hemodinámico, considerar retirar catéter",
          "Solo administrar oxígeno y líquidos",
          "Transfusión de plaquetas únicamente",
        ],
        correct: 1,
        explanation:
          "MANEJO URGENTE: 1) CULTIVOS pre-antibióticos: Hemocultivos (2: uno del catéter central, otro periférico para diferenciar bacteriemia asociada a catéter), Urocultivo (cateterismo/punción suprapúbica), Punción lumbar (descartar meningitis, 25% de sepsis neonatales), 2) ANTIBIÓTICOS EMPÍRICOS inmediatos: Vancomicina (cubre estafilococos meticilino-resistentes) + Gentamicina o Cefotaxima (gram negativos). Si factores riesgo Candida (antibióticos >7 días, NP, cirugía abdominal): añadir anfotericina B, 3) SOPORTE HEMODINÁMICO: bolos SSN 10-20 mL/kg, dopamina/dobutamina si persiste hipotensión, corrección metabólica (glucosa, acidosis), 4) CATÉTER: Considerar retiro si: S. aureus, Candida, bacteriemia persistente >72h con tratamiento, inestabilidad hemodinámica. Ajustar antibióticos según cultivos. PRONÓSTICO: Mortalidad sepsis tardía 10-20% (mejor que temprana). Secuelas neurológicas en 20-30% de sobrevivientes (meningitis, leucomalacia).",
      },
    ],
  },
  // CASO CLÍNICO: ENCEFALOPATÍA HIPÓXICO-ISQUÉMICA
  {
    id: 12,
    title: "Caso Clínico: Encefalopatía Hipóxico-Isquémica",
    scenario: {
      presentation:
        "Recién nacido a término (39 semanas), 3200g. Parto vaginal complicado con DPPNI (desprendimiento prematuro de placenta), bradicardia fetal sostenida. Cesárea urgente. Al nacer: no respira, flácido, FC <60 lpm. Reanimación: ventilación con presión positiva (VPP) 2 minutos, compresiones cardíacas 3 minutos, intubación, adrenalina x1. Recupera FC y coloración a los 7 minutos. Apgar 1 (1min), 3 (5min), 5 (10min).",
      vitals: {
        "Frecuencia cardíaca": "145 lpm",
        "Frecuencia respiratoria": "Ventilación mecánica",
        "Saturación de O₂": "98% con ventilación",
        Temperatura: "37.0°C (enfriamiento terapéutico iniciado)",
        "Presión arterial": "45/28 mmHg",
      },
      physicalExam:
        "A las 2 horas de vida: Nivel de conciencia disminuido (estupor), hipotonía marcada generalizada, reflejos primitivos ausentes (Moro, succión), pupilas mióticas con respuesta lenta a la luz. Movimientos espontáneos escasos. Convulsiones tónicas sutiles (extensión de extremidades, desviación ocular) a las 4 horas.",
      labResults: {
        "Gasometría cordón":
          "pH 6.95, BE -18 mEq/L, lactato 12 mmol/L (acidosis metabólica severa)",
        "Enzimas cardíacas": "Troponina I elevada (disfunción miocárdica)",
        "Función renal":
          "Creatinina 1.8 mg/dL, oliguria (insuficiencia renal aguda)",
        EEG: "Patrón de voltaje bajo con actividad paroxística (compatible con convulsiones)",
        "Ecografía cerebral":
          "Normal inicialmente, edema cerebral aparece día 2-3",
      },
    },
    questions: [
      {
        question:
          "¿Cuál es la clasificación de severidad de esta encefalopatía?",
        options: [
          "Encefalopatía hipóxico-isquémica LEVE (Sarnat I)",
          "Encefalopatía hipóxico-isquémica MODERADA (Sarnat II)",
          "Encefalopatía hipóxico-isquémica SEVERA (Sarnat III)",
          "No tiene encefalopatía",
        ],
        correct: 2,
        explanation:
          "CLASIFICACIÓN DE SARNAT: EHI LEVE (I): Hiperexcitabilidad, hipertonía leve, reflejos normales/aumentados, duración <24h, pronóstico excelente. EHI MODERADA (II): Letargia, hipotonía moderada, reflejos disminuidos pero presentes, convulsiones frecuentes, duración días-semanas, pronóstico variable (20-30% secuelas). EHI SEVERA (III): Estupor/coma, hipotonía severa/flacidez, reflejos ausentes (como este caso), convulsiones tempranas, falla multiorgánica, pronóstico malo (50% mortalidad, 75% secuelas severas en sobrevivientes). Este neonato tiene: estupor, hipotonía severa, reflejos ausentes, convulsiones, acidosis severa, falla multiorgánica → EHI SEVERA (Sarnat III). Criterios EHI: Evento perinatal hipóxico, Apgar <5 a 10min, acidosis severa (pH <7.0, BE <-12), manifestaciones neurológicas, falla multiorgánica.",
      },
      {
        question:
          "¿Cuál es el tratamiento NEUROPROTECTOR más importante dentro de las primeras 6 horas?",
        options: [
          "Antibióticos de amplio espectro",
          "Hipotermia terapéutica (enfriamiento a 33.5-34.5°C durante 72 horas)",
          "Surfactante pulmonar",
          "Fototerapia intensiva",
        ],
        correct: 1,
        explanation:
          "La HIPOTERMIA TERAPÉUTICA es el único tratamiento neuroprotector con evidencia sólida para EHI moderada-severa. CRITERIOS: ≥36 semanas, <6 horas vida (ventana terapéutica crítica), EHI moderada o severa, evento perinatal hipóxico, pH <7.0 o BE <-16 o Apgar <5 a 10min. PROTOCOLO: Enfriar TODO el cuerpo (enfriamiento corporal total) a 33.5-34.5°C durante 72 horas, luego recalentar lentamente (0.5°C cada hora). MECANISMOS: Reduce metabolismo cerebral, disminuye excitotoxicidad por glutamato, inhibe apoptosis, reduce inflamación y edema, preserva autorregulación cerebral. BENEFICIOS: Reduce mortalidad 25%, reduce discapacidad severa/parálisis cerebral 30-40%. EFECTOS ADVERSOS: Bradicardia sinusal (normal, no tratar), coagulopatía, hipotensión leve, arritmias (raras). MONITOREO: EEG continuo (aEEG), temperatura central continua, soporte multiorgánico. Si >6 horas vida o EHI leve → NO enfriar.",
      },
      {
        question:
          "¿Qué complicaciones multiorgánicas son esperables en EHI severa?",
        options: [
          "Solo afecta el cerebro",
          "Insuficiencia renal aguda, disfunción miocárdica/hipotensión, coagulopatía, hipoglucemia/SIHAD, enterocolitis",
          "Solo afecta el hígado",
          "Únicamente problemas respiratorios",
        ],
        correct: 1,
        explanation:
          "La asfixia perinatal causa daño MULTIORGÁNICO por hipoxia-isquemia global. ÓRGANOS AFECTADOS: 1) CEREBRO (100%): EHI, convulsiones, edema cerebral, secuelas neurológicas. 2) RIÑÓN (50%): Insuficiencia renal aguda (necrosis tubular aguda), oliguria, retención nitrogenados, hiperkalemia. Manejo: restricción líquidos, furosemida, diálisis si severa. 3) CORAZÓN (30-40%): Disfunción miocárdica (isquemia subendocárdica), hipotensión, shock cardiogénico, troponina elevada. Manejo: inotrópicos (dopamina, dobutamina). 4) HÍGADO (30%): Elevación transaminasas, coagulopatía (prolongación TP/TTPa), hipoglucemia. Manejo: vitamina K, plasma fresco si sangrado, monitoreo glucemia. 5) PULMÓN: Hipertensión pulmonar persistente (HPPRN) en 10-15%, requiere óxido nítrico. 6) INTESTINO (raro): Enterocolitis isquémica. 7) METABÓLICO: SIHAD (secreción inapropiada ADH) causa hiponatremia dilucional → restricción hídrica. 8) HEMATOLÓGICO: Coagulopatía, anemia. PRONÓSTICO: EHI severa: 50% mortalidad, 75% de sobrevivientes con secuelas graves (parálisis cerebral, epilepsia, discapacidad intelectual). RM cerebral días 3-7 es mejor predictor pronóstico.",
      },
    ],
  },
  // CASO CLÍNICO: ENTEROCOLITIS NECROTIZANTE
  {
    id: 13,
    title: "Caso Clínico: Enterocolitis Necrotizante",
    scenario: {
      presentation:
        "Prematuro de 27 semanas, 950g, actualmente 15 días de vida. Alimentación enteral mínima iniciada día 3 de vida (leche materna), progresión gradual, actualmente recibiendo 120 mL/kg/día (60% enteral, 40% parenteral). En las últimas 12 horas presenta: distensión abdominal progresiva, intolerancia alimentaria con residuos gástricos biliosos (30 mL), heces con sangre oculta positiva, apneas, letargia.",
      vitals: {
        "Frecuencia cardíaca": "175 lpm",
        "Frecuencia respiratoria": "65 rpm con apneas",
        "Saturación de O₂": "91%",
        Temperatura: "36.5°C",
        "Presión arterial": "38/20 mmHg (hipotensión leve)",
      },
      physicalExam:
        "Abdomen marcadamente distendido, tenso, eritema de pared abdominal en cuadrante inferior derecho, ruidos intestinales ausentes, dolor a la palpación (llanto con estímulo mínimo). Piel moteada, llenado capilar 3-4 segundos.",
      labResults: {
        Hemograma: "Leucocitos 4,000/μL con 40% bandas, plaquetas 85,000/μL",
        "Proteína C reactiva": "8 mg/dL",
        Gasometría: "pH 7.30, BE -6 mEq/L (acidosis metabólica leve)",
        "Radiografía abdomen":
          "Marcada distensión de asas intestinales, neumatosis intestinal (gas intramural) en íleon, gas en vena porta",
        Lactato: "3.8 mmol/L",
      },
    },
    questions: [
      {
        question:
          "¿Cuál es el estadio de enterocolitis necrotizante según clasificación de Bell?",
        options: [
          "Estadio IA (sospecha)",
          "Estadio IIA (NEC definida, neumatosis sin perforación)",
          "Estadio IIIB (NEC avanzada con perforación y peritonitis)",
          "No tiene enterocolitis necrotizante",
        ],
        correct: 1,
        explanation:
          "CLASIFICACIÓN DE BELL MODIFICADA: ESTADIO I (SOSPECHA): IA: Distensión abdominal, residuos, sangre oculta heces, Rx normal. IB: Igual + sangrado rectal. ESTADIO II (NEC DEFINITIVA): IIA: Igual + neumatosis intestinal en Rx, ascitis leve. IIB: Igual + gas en vena porta, ascitis moderada. ESTADIO III (NEC AVANZADA): IIIA: IIA/B + peritonitis sin perforación, hipotensión, coagulopatía. IIIB: IIA/B + neumoperitoneo (perforación intestinal) → CIRUGÍA URGENTE. Este paciente tiene: distensión, residuos biliosos, sangre en heces, neumatosis intestinal, gas vena porta → ESTADIO IIB (NEC definitiva avanzada). NO hay neumoperitoneo (perforación) todavía. La neumatosis es gas producido por bacterias dentro de la pared intestinal (patognomónico de NEC). Gas en vena porta indica translocación bacteriana sistémica (peor pronóstico).",
      },
      {
        question: "¿Cuál es el manejo MÉDICO inicial más apropiado?",
        options: [
          "Continuar alimentación enteral normalmente",
          "NPO absoluto, descompresión nasogástrica, antibióticos triple (ampicilina + gentamicina + metronidazol), soporte hemodinámico, nutrición parenteral total, Rx seriadas cada 6-8h",
          "Solo antibióticos sin cambiar alimentación",
          "Cirugía inmediata en todos los casos",
        ],
        correct: 1,
        explanation:
          "MANEJO MÉDICO (estadios I-II sin perforación): 1) NPO ABSOLUTO: Suspender toda alimentación enteral (intestino necesita reposo), duración 7-14 días según evolución. 2) DESCOMPRESIÓN NASOGÁSTRICA: Sonda abierta drenaje continuo para evitar mayor distensión. 3) ANTIBIÓTICOS TRIPLE (10-14 días): Ampicilina (gram +) + Gentamicina (gram -) + Metronidazol o Clindamicina (anaerobios, especialmente Clostridium). Si sospecha resistencia: vancomicina + cefotaxima + metronidazol. 4) NUTRICIÓN PARENTERAL TOTAL: Para mantener crecimiento durante NPO. 5) SOPORTE HEMODINÁMICO: Bolos SSN, inotrópicos si shock, corrección acidosis, ventilación mecánica si deterioro respiratorio. 6) MONITOREO ESTRECHO: Rx abdomen cada 6-8h (detectar perforación=neumoperitoneo), examen abdominal frecuente (eritema de pared, defensa=cirugía), hemogramas, gases. 7) TRANSFUSIÓN: Plaquetas si <50,000, plasma si coagulopatía con sangrado. RESPUESTA: 70-80% mejoran con tratamiento médico en 48-72h (distensión disminuye, toleran alimentación gradual). 20-30% progresan a perforación (cirugía). CRITERIOS CIRUGÍA: Neumoperitoneo (perforación), paracentesis (+) bacterias/bilis, deterioro clínico progresivo a pesar de manejo óptimo, masa palpable fija (gangrena intestinal).",
      },
      {
        question:
          "¿Qué factores de riesgo tiene este paciente para desarrollar NEC?",
        options: [
          "Ningún factor de riesgo",
          "Prematuridad extrema (<28 semanas), bajo peso (<1000g), alimentación enteral con progresión rápida, inmadurez intestinal",
          "Solo la prematuridad",
          "Únicamente el uso de fórmula",
        ],
        correct: 1,
        explanation:
          "FACTORES DE RIESGO PRINCIPALES: 1) PREMATURIDAD (más importante): 90% de NEC en prematuros, incidencia inversamente proporcional a EG: <28 sem=7-10%, 28-32 sem=3-5%, >32 sem=1-2%. 2) MUY BAJO PESO: <1500g (especialmente <1000g como este caso). 3) INMADUREZ INTESTINAL: Barrera mucosa deficiente, motilidad disminuida, autorregulación vascular pobre, sistema inmune inmaduro, microbiota anormal. 4) ALIMENTACIÓN ENTERAL: Riesgo aumenta con: fórmula (4x más que leche materna), progresión RÁPIDA (>20-30 mL/kg/día), hiperosmolaridad. Leche materna es PROTECTORA (reduce NEC 50-70%). 5) ISQUEMIA INTESTINAL: Asfixia perinatal, PDA, cardiopatías, policitemia, catéteres umbilicales. 6) COLONIZACIÓN PATOLÓGICA: Uso previo de antibióticos (altera microbiota), ambiente UCIN. 7) OTROS: Transfusiones sanguíneas (24-48h pre-NEC), corticoides postnatales (controversial), enterocolitis eosinofílica. PREVENCIÓN: Leche materna exclusiva, progresión enteral lenta y cautelosa (10-20 mL/kg/día), probióticos (reducen NEC 50% en algunos estudios: Lactobacillus, Bifidobacterium), nutrición trófica temprana (alimentación mínima días 1-5). PRONÓSTICO: Mortalidad global 20-30% (hasta 50% en estadio III). Sobrevivientes: 25% desarrollan estenosis intestinal a largo plazo (requiere cirugía), 30% síndrome intestino corto si resección extensa.",
      },
    ],
  },
  // CASO CLÍNICO: ICTERICIA CON COLESTASIS
  {
    id: 14,
    title: "Caso Clínico: Ictericia Prolongada con Colestasis",
    scenario: {
      presentation:
        "Lactante de 6 semanas de vida, nacido a término sin complicaciones perinatales. Los padres consultan porque 'sigue amarillo desde que nació' y han notado que las deposiciones son cada vez más pálidas (color masilla/blanquecinas) y la orina muy oscura (coluria). El pediatra había indicado fototerapia al alta (bilirrubina total 15 mg/dL día 3) con 'control ambulatorio', pero la ictericia persiste.",
      vitals: {
        "Frecuencia cardíaca": "135 lpm",
        "Frecuencia respiratoria": "42 rpm",
        Temperatura: "36.8°C",
        Peso: "4.2 kg (percentil 25, sin falla de medro)",
      },
      physicalExam:
        "Ictericia generalizada marcada (piel y escleras), abdomen: hepatomegalia 3 cm bajo reborde costal derecho, borde firme, esplenomegalia leve. Heces pálidas (acólicas) visualizadas en pañal. Orina oscura (coluria). No dismorfias, fontanela normotensa, desarrollo neurológico aparentemente normal.",
      labResults: {
        "Bilirrubina total": "18 mg/dL",
        "Bilirrubina directa (conjugada)":
          "12 mg/dL (>2 mg/dL o >20% de total = COLESTASIS)",
        "Bilirrubina indirecta": "6 mg/dL",
        Transaminasas: "AST 280 U/L, ALT 310 U/L (elevadas)",
        "GGT (gamma-glutamil transferasa)": "550 U/L (muy elevada)",
        "Fosfatasa alcalina": "750 U/L (elevada)",
        Albúmina: "3.2 g/dL (baja-normal)",
        "TP/INR": "TP 18 seg (prolongado), INR 1.8",
        "Ecografía abdominal":
          "Vesícula biliar pequeña, no se visualiza vía biliar extrahepática, hígado ecogénico",
      },
    },
    questions: [
      {
        question: "¿Cuál es el diagnóstico más probable?",
        options: [
          "Ictericia fisiológica prolongada",
          "Atresia de vías biliares",
          "Hipotiroidismo congénito",
          "Galactosemia",
        ],
        correct: 1,
        explanation:
          "La TRÍADA CLÁSICA de atresia biliar es: 1) ICTERICIA PROLONGADA con hiperbilirrubinemia DIRECTA (colestasis: BD >2 mg/dL o >20% de total), 2) HECES ACÓLICAS (pálidas/blancas, sin pigmento biliar), 3) COLURIA (orina oscura, bilirrubina conjugada se excreta por riñón). Además: hepatomegalia firme, GGT muy elevada (>5x normal, sugiere obstrucción biliar), vesícula pequeña/ausente en ecografía. ATRESIA BILIAR es la obliteración progresiva de vías biliares extrahepáticas (causa desconocida, probablemente viral/inflamatoria perinatal), llevando a colestasis, cirrosis y falla hepática si no se opera. Incidencia 1:10,000-15,000, más común en asiáticos y mujeres. TODO lactante con ictericia >2 semanas o con heces pálidas DEBE tener bilirrubina fraccionada (directa/indirecta) para detectar colestasis. DIFERENCIALES: Hepatitis neonatal idiopática (bilirrubina directa también alta pero vesícula NORMAL, GGT menos elevada, evolución más favorable). Otros: quiste de colédoco (vesícula grande, dilatación vía biliar), deficiencia alfa-1 antitripsina, síndrome Alagille, errores metabolismo.",
      },
      {
        question:
          "¿Cuál es la prueba diagnóstica confirmatoria y por qué es crítico el diagnóstico TEMPRANO?",
        options: [
          "Repetir bilirrubina en 1 mes, no hay urgencia",
          "Gammagrafía hepatobiliar (HIDA) + colangiografía intraoperatoria. Cirugía (Kasai) debe realizarse ANTES de 60 días de vida para mejor pronóstico",
          "Solo observación",
          "Fototerapia intensiva",
        ],
        correct: 1,
        explanation:
          "El TIMING es CRÍTICO en atresia biliar: 1) La obstrucción biliar causa acumulación de ácidos biliares tóxicos que dañan progresivamente el hígado → CIRROSIS irreversible, 2) La PORTOENTEROSTOMÍA de KASAI (cirugía que conecta intestino a porta hepática para drenar bilis microscópica residual) tiene éxito variable según edad: <60 días vida: 60-80% logran flujo biliar, restauran bilirrubina normal; 60-90 días: 40-50% éxito; >90 días: <25% éxito (fibrosis/cirrosis avanzadas), 3) Incluso con Kasai exitoso, 50-60% eventualmente necesitan trasplante hepático (a 10-20 años), pero la cirugía temprana permite 'vivir con hígado propio' años-décadas, evitando trasplante en infancia, 4) Diagnóstico tardío (>90 días) → Kasai inefectivo → trasplante directo o muerte por falla hepática. Por eso TODO lactante con ictericia >2 semanas o con heces pálidas debe medirse BILIRRUBINA DIRECTA urgente. Regla nemotécnica: 'Too Yellow Too Long' (muy amarillo por mucho tiempo) = medir fraccionada. PRUEBAS DIAGNÓSTICAS: Gammagrafía HIDA (no excreción intestinal), colangiografía intraoperatoria (no vía biliar permeable, confirmatorio), biopsia hepática (proliferación ductal, fibrosis).",
      },
      {
        question:
          "¿Cuál es el manejo médico de soporte en colestasis neonatal?",
        options: [
          "No requiere tratamiento médico hasta la cirugía",
          "Vitaminas liposolubles (A, D, E, K) dosis altas, fórmula con triglicéridos de cadena media (MCT), ácido ursodesoxicólico, monitoreo complicaciones",
          "Solo antibióticos",
          "Restricción de grasas completa",
        ],
        correct: 1,
        explanation:
          "El manejo médico de soporte en colestasis incluye: 1) VITAMINAS LIPOSOLUBLES (A, D, E, K) en dosis 2-10x normales: la falta de bilis intestinal impide absorción de grasas y vitaminas → deficiencia: K (hemorragia), D (raquitismo), E (neuropatía, hemólisis), A (ceguera nocturna). Monitorizar niveles séricos. 2) FÓRMULA CON TRIGLICÉRIDOS DE CADENA MEDIA (MCT): Los MCT se absorben sin necesidad de bilis, mejorando nutrición. 3) ÁCIDO URSODESOXICÓLICO (10-20 mg/kg/día): Ácido biliar hidrofílico que mejora flujo biliar, reduce prurito, protege hepatocitos. 4) MANEJO PRURITO: Rifampicina, colestiramina si prurito severo. 5) MONITOREO: Nutricional (curvas crecimiento), hepático (INR, albúmina, transaminasas), desarrollo. 6) PROFILAXIS INFECCIONES post-Kasai: Antibióticos para prevenir colangitis. Si cirrosis descompensada (ascitis, várices) → evaluar TRASPLANTE HEPÁTICO. PRONÓSTICO: sobrevida 10 años con hígado propio post-Kasai ~40-50%; con trasplante sobrevida >90%.",
      },
    ],
  },
  // CASO CLÍNICO: CRISIS HIPÓXICA EN TETRALOGÍA DE FALLOT
  {
    id: 15,
    title: "Caso Clínico: Crisis Hipóxica ('Tet Spell')",
    scenario: {
      presentation:
        "Lactante de 4 meses con diagnóstico prenatal de Tetralogía de Fallot (pendiente corrección quirúrgica programada para 6 meses). Los padres traen al bebé a urgencias porque durante episodio de llanto intenso (al cambiar pañal) desarrolló súbitamente: cianosis perioral y de extremidades que progresó rápidamente a cianosis generalizada severa, taquipnea marcada con respiración 'jadeante', el bebé se puso 'flácido' y 'como inconsciente' por 30 segundos. Recuperación parcial en ambulancia (los paramédicos colocaron al bebé con rodillas al pecho).",
      vitals: {
        "Frecuencia cardíaca": "180 lpm",
        "Frecuencia respiratoria": "70 rpm (hiperpnea)",
        "Saturación de O₂":
          "65% en aire ambiente, 70% con O₂ 100% por mascarilla",
        Temperatura: "37.2°C",
        "Presión arterial": "65/35 mmHg",
      },
      physicalExam:
        "Cianosis central severa persistente (labios, lengua, lecho ungueal), taquipnea con respiración profunda (hiperpnea), ansiedad extrema, diaforesis. Soplo sistólico eyectivo en borde esternal izquierdo bajo. Pulsos periféricos palpables. Posición genupectoral (rodillas al pecho) mejora ligeramente la cianosis.",
      labResults: {
        "Gasometría arterial":
          "pH 7.32, PO₂ 38 mmHg, PCO₂ 28 mmHg (hipoxemia severa con hiperventilación compensatoria)",
        "Saturación arterial": "65%",
        Hematocrito: "52% (policitemia secundaria a hipoxemia crónica)",
        "Ecocardiograma (previo)":
          "Tetralogía de Fallot: CIV subaórtica grande, cabalgamiento aorta 50%, estenosis infundibular pulmonar severa, hipertrofia VD",
      },
    },
    questions: [
      {
        question:
          "¿Cuál es el diagnóstico de la crisis aguda y su fisiopatología?",
        options: [
          "Crisis asmática",
          "Crisis hipóxica ('Tet spell'): Espasmo infundibular pulmonar aumenta obstrucción RVOT → mayor cortocircuito D→I por CIV → hipoxemia severa súbita",
          "Neumonía",
          "Convulsión",
        ],
        correct: 1,
        explanation:
          "CRISIS HIPÓXICA ('TET SPELL') en Tetralogía de Fallot: FISIOPATOLOGÍA: 1) FACTOR DESENCADENANTE (llanto, defecación, alimentación, fiebre, deshidratación) → 2) ESPASMO/CONTRACCIÓN INFUNDIBULAR: El tracto de salida VD (RVOT) ya estenótico se contrae aún más (músculo hipertrófico hipersensible), 3) OBSTRUCCIÓN SEVERA → flujo pulmonar cae drásticamente, 4) CORTOCIRCUITO D→I AUMENTA: Sangre desaturada del VD pasa masivamente por CIV hacia aorta (evitando pulmones), 5) HIPOXEMIA SEVERA SÚBITA (SatO₂ 50-70%), 6) HIPERPNEA (hiperventilación) intenta compensar pero empeora espasmo (disminuye retorno venoso), 7) CÍRCULO VICIOSO: hipoxemia → acidosis → más espasmo → más cortocircuito → más hipoxemia, 8) Puede llevar a SÍNCOPE, CONVULSIÓN HIPÓXICA, MUERTE si no se trata. EDAD TÍPICA: 2-6 meses (coincide con máxima hipertrofia VD). CLÍNICA: Cianosis súbita severa, taquipnea luego hiperpnea, irritabilidad/letargia, puede perder conciencia. MUY GRAVE: mortalidad 20-30% sin tratamiento.",
      },
      {
        question: "¿Cuál es el manejo AGUDO de emergencia de esta crisis?",
        options: [
          "Fototerapia",
          "Posición genupectoral, morfina, oxígeno, líquidos IV, bicarbonato, fenilefrina/propranolol IV, intubación si falla",
          "Surfactante",
          "Solo observación",
        ],
        correct: 1,
        explanation:
          "MANEJO SECUENCIAL DE CRISIS HIPÓXICA: 1) POSICIÓN GENUPECTORAL (rodillas al pecho) o CUCLILLAS: Aumenta resistencia vascular sistémica (comprime aorta/femorales) → disminuye cortocircuito D→I → más flujo pulmonar → mejora oxigenación. 2) CALMAR AL NIÑO: Reducir llanto/agitación (aumenta consumo O₂ y espasmo). Madre/padre lo carga. 3) OXÍGENO 100%: Aunque ayuda poco (problema es de flujo, no ventilación), puede mejorar algo. 4) MORFINA 0.1-0.2 mg/kg IV/IM/SC: Sedación suave, disminuye taquipnea y espasmo infundibular. 5) LÍQUIDOS IV (bolo 10-20 mL/kg SSN): Aumenta precarga → aumenta volumen VD → distiende infundíbulo (menos obstrucción), aumenta resistencia sistémica. 6) BICARBONATO DE SODIO: Corrige acidosis metabólica (rompe círculo vicioso). 7) FENILEFRINA IV (alfa-agonista): Aumenta resistencia vascular sistémica (vasoconstricción) → reduce cortocircuito D→I. Alternativa: PROPRANOLOL IV 0.05-0.1 mg/kg (beta-bloqueador, relaja infundíbulo). 8) INTUBACIÓN + VENTILACIÓN si falla tratamiento médico. 9) CIRUGÍA URGENTE: Si crisis refractaria → shunt paliativo urgente (Blalock-Taussig) o corrección total. PREVENCIÓN: Propranolol oral crónico 2-4 mg/kg/día (previene crisis), cirugía electiva temprana (3-6 meses), mantener hidratación.",
      },
      {
        question:
          "¿Por qué la cirugía correctiva debe realizarse tempranamente?",
        options: [
          "No es urgente, puede esperar hasta adolescencia",
          "Para prevenir crisis hipóxicas (mortalidad 20-30%), hipoxemia crónica causa policitemia/hiperviscosidad (ACV), abscesos cerebrales, deterioro neurocognitivo, endocarditis",
          "Solo por razones estéticas",
          "La Tetralogía se cura espontáneamente",
        ],
        correct: 1,
        explanation:
          "INDICACIONES CIRUGÍA TEMPRANA (3-6 meses típicamente): 1) PREVENIR CRISIS HIPÓXICAS: Mortalidad 20-30% por crisis, riesgo de muerte súbita. Frecuencia aumenta 2-6 meses. 2) PREVENIR COMPLICACIONES HIPOXEMIA CRÓNICA: a) POLICITEMIA/HIPERVISCOSIDAD: Hematocrito >65% → sangre 'espesa' → trombosis, ACV (5% de pacientes no operados). b) ABSCESOS CEREBRALES: Bacteriemia evita filtro pulmonar (cortocircuito D→I) → siembra cerebral. Mortalidad 30-40%. c) DETERIORO NEUROCOGNITIVO: Hipoxemia crónica daña desarrollo cerebral → CI bajo, problemas aprendizaje. d) ENDOCARDITIS BACTERIANA: Flujo turbulento. e) FALLA CARDÍACA: Hipertrofia VD progresiva → disfunción ventricular. 3) MEJORAR CALIDAD DE VIDA: Intolerancia ejercicio, cianosis, fatigabilidad. CIRUGÍA CORRECTIVA: Cierre CIV (parche) + resección/ampliación RVOT (elimina obstrucción). RESULTADOS: Mortalidad quirúrgica <3%, sobrevida largo plazo >90%, la mayoría vive vida normal. Sin cirugía: 50% mueren antes 3 años, 90% antes 20 años. SEGUIMIENTO POST-OP: Arritmias (bloqueo rama derecha, TV), insuficiencia pulmonar residual (puede requerir reemplazo válvula pulmonar en adolescencia/adulto).",
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
