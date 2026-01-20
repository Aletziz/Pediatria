# Plataforma de Estudio - Pediatría Interactiva 🏥

## Descripción

Aplicación web interactiva diseñada para ayudar a estudiantes de medicina a estudiar y dominar conceptos de pediatría a través de ejercicios prácticos, casos clínicos y evaluaciones continuas basadas en el contenido del PDF de estudio.

## Características Principales

### 🎯 Tipos de Ejercicios

1. **Opción Múltiple (30 preguntas)**
   - Preguntas con 4 opciones de respuesta
   - Retroalimentación inmediata
   - Explicaciones detalladas
   - Puntuación: 10 puntos por respuesta correcta

2. **Verdadero o Falso (20 preguntas)**
   - Afirmaciones para evaluar
   - Justificaciones completas
   - Puntuación: 5 puntos por respuesta correcta

3. **Ejercicios de Justificación (8 ejercicios)**
   - Preguntas de desarrollo
   - Puntos clave a incluir
   - Respuestas modelo para comparar
   - Puntuación: 15 puntos por respuesta enviada

4. **Casos Clínicos (5 casos completos)**
   - Escenarios realistas con pacientes pediátricos
   - Signos vitales y exámenes físicos
   - Resultados de laboratorio
   - Múltiples preguntas por caso
   - Puntuación: 20 puntos por respuesta correcta

### 📊 Sistema de Seguimiento

- **Progreso automático**: Guarda tu progreso automáticamente
- **Estadísticas detalladas**: Visualiza tu rendimiento por sección
- **Puntuación global**: Acumula puntos por cada respuesta correcta
- **Navegación intuitiva**: Avanza y retrocede entre preguntas

### 💡 Características Adicionales

- ✅ Diseño responsivo (funciona en móviles, tablets y escritorio)
- ✅ Interfaz moderna y atractiva con Tailwind CSS
- ✅ Retroalimentación inmediata con explicaciones
- ✅ Almacenamiento local (no se pierde el progreso)
- ✅ Navegación con teclado (flechas izquierda/derecha)

## Temas Cubiertos

Basado en el PDF de Pediatría, la aplicación cubre:

- ✅ Recién nacido prematuro y síndrome de dificultad respiratoria
- ✅ Surfactante pulmonar y maduración pulmonar
- ✅ Ictericia neonatal (fisiológica y patológica)
- ✅ Hiperbilirrubinemia y kernicterus
- ✅ Incompatibilidad ABO y Rh
- ✅ Enfermedad hemorrágica del recién nacido
- ✅ Sepsis neonatal temprana y tardía
- ✅ Hipoglucemia neonatal
- ✅ Enterocolitis necrotizante
- ✅ Manejo y tratamiento de condiciones neonatales

## Cómo Usar

### Instalación

1. No requiere instalación - es una aplicación web estática
2. Simplemente abre el archivo `index.html` en tu navegador web

### Navegación

1. **Inicio**: Presenta las secciones disponibles
2. **Opción Múltiple**: Selecciona la respuesta correcta
3. **Verdadero/Falso**: Determina si la afirmación es correcta
4. **Justificación**: Escribe respuestas desarrolladas
5. **Casos Clínicos**: Resuelve situaciones clínicas reales
6. **Estadísticas**: Visualiza tu progreso y rendimiento

### Controles de Teclado

- **Flecha Izquierda**: Pregunta anterior
- **Flecha Derecha**: Siguiente pregunta

### Sistema de Puntuación

- **Opción Múltiple**: 10 puntos/pregunta (máximo 300 puntos)
- **Verdadero/Falso**: 5 puntos/pregunta (máximo 100 puntos)
- **Justificación**: 15 puntos/ejercicio (máximo 120 puntos)
- **Casos Clínicos**: 20 puntos/pregunta (variable según caso)
- **Total posible**: ~800+ puntos

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos personalizados
- **JavaScript (ES6+)**: Lógica de la aplicación
- **Tailwind CSS**: Framework CSS para diseño moderno
- **Font Awesome**: Iconos
- **LocalStorage API**: Almacenamiento local del progreso

## Estructura de Archivos

```
📁 Pediatria/
├── 📄 index.html          # Página principal
├── 📄 styles.css          # Estilos personalizados
├── 📄 data.js             # Base de datos de preguntas y casos
├── 📄 app.js              # Lógica de la aplicación
├── 📄 README.md           # Este archivo
└── 📄 Resumen_de_Pediatría-1 (1).pdf  # Material de estudio
```

## Características de los Casos Clínicos

Cada caso clínico incluye:

1. **Presentación del caso**: Historia clínica detallada
2. **Signos vitales**: FC, FR, temperatura, saturación, etc.
3. **Examen físico**: Hallazgos relevantes
4. **Laboratorios**: Resultados de análisis
5. **Imágenes**: Descripción de hallazgos radiológicos
6. **Preguntas múltiples**: 4-5 preguntas por caso

### Casos Disponibles:

1. **Caso 1**: Recién nacido prematuro con dificultad respiratoria (SDR)
2. **Caso 2**: Ictericia neonatal temprana por incompatibilidad ABO
3. **Caso 3**: Sepsis neonatal temprana por Streptococcus Grupo B
4. **Caso 4**: Hipoglucemia en hijo de madre diabética
5. **Caso 5**: Enterocolitis necrotizante en prematuro

## Consejos de Estudio

1. **Lee el PDF primero**: Familiarízate con el contenido antes de hacer ejercicios
2. **Toma notas**: Anota las explicaciones de las respuestas incorrectas
3. **Repite ejercicios**: Puedes reiniciar tu progreso y volver a practicar
4. **Usa los casos clínicos**: Son excelentes para preparar exámenes prácticos
5. **Compara tus justificaciones**: Lee las respuestas modelo para mejorar

## Reiniciar Progreso

Si deseas comenzar de nuevo:

1. Ve a la sección "Estadísticas"
2. Haz clic en "Reiniciar Todo el Progreso"
3. Confirma la acción

⚠️ **Advertencia**: Esta acción no se puede deshacer.

## Compatibilidad

- ✅ Google Chrome (recomendado)
- ✅ Mozilla Firefox
- ✅ Microsoft Edge
- ✅ Safari
- ✅ Navegadores móviles

## Notas Importantes

- El progreso se guarda automáticamente en tu navegador
- Si cambias de navegador o dispositivo, tu progreso no se transferirá
- Limpiar el caché del navegador eliminará tu progreso
- No requiere conexión a internet después de la carga inicial

## Soporte

Para problemas técnicos o sugerencias:

- Revisa que JavaScript esté habilitado en tu navegador
- Verifica que todos los archivos estén en la misma carpeta
- Asegúrate de tener permisos de almacenamiento local

## Licencia

Material educativo para uso académico personal.

---

**¡Éxito en tu estudio! 📚🩺**

Desarrollado para estudiantes de medicina con dedicación y cariño.
