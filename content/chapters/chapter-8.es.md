+++

type = "report"
title = "Capítulo 8: Uso seguro de la IA"
layout = "single"
weight = 9
toc = false
translation-review-pending = true
+++

**Este es nuestro capítulo más reciente y estamos buscando comentarios. Si usted ve algo que podríamos mejorar, por favor háganoslo saber o enviar una solicitud de pull**.

## Introducción

Los periodistas están empezando a utilizar la IA en su trabajo, incluso para tareas como la investigación, la transcripción de audio y la traducción. Las herramientas de IA son nuevas y muchas aún no están preparadas para tratar información muy sensible, como nombres de fuentes o temas de investigación confidenciales.

Existen varias tecnologías de IA, la más destacada de las cuales son los grandes modelos lingüísticos (LLM), que impulsan herramientas como los chatbots. Para simplificar, utilizaremos aquí el término "IA" y sólo distinguiremos entre las distintas tecnologías si es necesario para mayor claridad.

En este capítulo se tratarán:

* Diferencias entre la IA en el dispositivo y en la nube.
* Registros de IA, IA empresarial e historiales.
* Alucinaciones y envenenamiento de la IA

## ¿Formar periodistas por primera vez?

Puede ser útil tener en cuenta lo siguiente:

* Los periodistas suelen utilizar para su trabajo servicios en línea individuales o gratuitos, incluidas las IA. Es raro que adquieran versiones empresariales de esos servicios.
* Las actitudes hacia la IA difieren radicalmente entre redacciones y periodistas. Algunos la integran de buen grado en sus flujos de trabajo, mientras que otros se muestran reacios a utilizar IA generativa por cuestiones de derechos de autor, medioambientales y de otro tipo.
* Muchas herramientas de IA, como los chatbots, siguen desarrollándose rápidamente y cambian su funcionalidad y configuración con regularidad. Los periodistas rara vez tendrán tiempo de mantenerse al día de estos avances y podrían confiar en los profesionales de la seguridad y la informática, esperando que dediquen más tiempo a investigar estos cambios.

## ¿Es la primera vez que se entrena la seguridad de la IA?

### Distinguir entre IA en el dispositivo y en la nube

## Cuando un sistema de IA procesa tus datos, por ejemplo para responder a una consulta o transcribir audio hablado, podría hacerlo en tu dispositivo o en una nube. Esto es similar al procesamiento de textos: podrías utilizar una aplicación que simplemente se guarda en tu escritorio, o una basada en la nube.
* Las IA en el dispositivo realizan todo el procesamiento en el dispositivo móvil o de sobremesa, y normalmente no envían las consultas al proveedor. Una forma fácil de saber si una IA está en el dispositivo es comprobar si funciona completamente cuando el dispositivo en el que está está desconectado de Internet. No obstante, debes comprobar la política de privacidad de la IA en el dispositivo para asegurarte de que nunca comparte muestras de tus consultas o datos con terceros.
* Las IAs en el dispositivo ofrecen las mejores garantías de privacidad, aunque podrían revelar registros u otros detalles si alguien, como una pareja abusiva o un agente de seguridad realizando un registro, mira a través del dispositivo.
* Se podría utilizar la IA en el dispositivo para procesar datos sensibles, por ejemplo para resumir documentos confidenciales o autotranscribir conversaciones con fuentes clave. Esto requerirá cierta configuración y barreras de seguridad para garantizar que los datos nunca salgan del dispositivo. **Si esto te interesa, ponte en contacto con un formador en seguridad digital o un informático que pueda ayudarte a configurar un sistema de este tipo.

* Las IA basadas en la nube procesan datos en los servidores de una empresa. Estos datos se utilizarán, almacenarán y compartirán de acuerdo con la política de privacidad de esa empresa, por eso es importante leer y revisar periódicamente esas políticas. Las IA basadas en la nube son a menudo más capaces que las IA en el dispositivo, ya que pueden basarse en más datos y potencia de cálculo.
* Algunos fabricantes están creando sistemas de IA híbridos. Estos pueden basarse en las capacidades del dispositivo para algunas tareas y en las capacidades de la nube para otras. Una IA híbrida bien diseñada debe advertir al usuario y pedirle permiso antes de subir sus datos a la nube.
* El panorama de la IA sigue siendo nuevo. Las herramientas, las capacidades y las garantías de privacidad cambian constantemente. Es importante comprobar periódicamente qué procesamiento se realiza en el dispositivo, qué ocurre en la nube y cuáles son las promesas de privacidad del proveedor de la nube.

### IAs basadas en la nube, registros y algunas recomendaciones

### Algunas herramientas de IA y chatbots basados en la nube guardarán registros de las conversaciones y los datos que compartas con ellos. Estos registros podrían ser almacenados por el proveedor de IA, utilizados como datos de entrenamiento para futuros sistemas de IA y, en ocasiones, ser leídos por revisores humanos.
* Si la organización almacena, procesa o utiliza registros, existe la posibilidad de que algún día se filtre cualquier dato confidencial que escriba en las herramientas de IA o en los chatbots, especialmente si esos registros se han utilizado como datos de entrenamiento. Por lo tanto, es importante leer la política de privacidad de su proveedor de IA para comprender cómo gestiona sus datos.
    * Las IA son bastante nuevas, y la investigación sobre posibles filtraciones de datos aún está en curso. Si sus preguntas se están utilizando para entrenar futuros modelos de IA, nos preocupa que un atacante pueda intentar recuperar esas preguntas con consultas hábilmente elaboradas, por ejemplo, preguntando qué tipo de preguntas o temas debería tener en cuenta un periodista que investigue la corrupción en un país específico. Del mismo modo, los atacantes podrían elaborar secuencias de comandos o consultas que recuperen números de teléfono, direcciones de correo electrónico, números de pasaporte, etc. específicos.bres, nombres y otra información valiosa almacenada en los datos de formación.

* Para ver ejemplos de políticas de privacidad y acceso a datos de IA, consulta las de [Google Workspace Gemini](https://support.google.com/a/answer/15706919?) o las de [Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy). Compruebe qué nivel o versión del software está utilizando. Muchos proveedores tienen un nivel para empresas o negocios que ofrece protección adicional, como no utilizar tus datos para el entrenamiento de IA. (Confusamente, los niveles profesional y de trabajo/empresa pueden tener políticas de registro y protecciones diferentes; asegúrate de leer la letra pequeña).
* Los niveles gratuitos o básicos de pago pueden no tener todas esas protecciones, lo que podría permitir a otros acceder a tus registros o historiales de chat. Todo depende del proveedor que utilices.
* Desgraciadamente, las políticas de registro y privacidad a veces cambian a peor. A finales de agosto de 2025, [Anthropic cambió sus políticas](https://www.macrumors.com/2025/08/28/anthropic-claude-chat-training/) para que los usuarios tengan que optar explícitamente por que sus datos de consulta no se utilicen para entrenar LLMs. Los usuarios fueron informados de este cambio mediante una notificación.
* Si utilizas un nivel empresarial o de negocios del software de IA, a menudo puedes adoptar la misma mentalidad de seguridad que con los documentos almacenados en una plataforma basada en la nube como Google Docs u O365. Puede utilizarlo para trabajos e investigaciones algo delicados, pero nunca para información confidencial como nombres de fuentes, o para casos en los que el proveedor de IA (o el país en el que tiene su sede) forme parte explícitamente de su modelo de amenazas.

* Recomendamos encarecidamente que las redacciones utilicen un único proveedor de IA (o, si no es posible, el menor número posible de proveedores), que se suscriban al nivel empresarial en lugar de al gratuito, y que exijan a todos los periodistas que utilicen ese proveedor para asuntos relacionados con el trabajo.
* Requiere esfuerzo hacer un seguimiento de los ajustes y configuraciones de seguridad de los distintos proveedores, pagar por paquetes profesionales y comprobar las políticas para asegurarse de que esos no guardan, comparten o publican registros. Cuantos menos sean, más fácil será la tarea. El administrador de sistemas de una redacción también podría ser capaz de configurar los sistemas de IA de su trabajo para que se ajusten a sus necesidades de privacidad, seguridad y jurisdicción.

### Memoria e historial del chat

### Muchos sistemas de IA ofrecen la posibilidad de guardar historiales de chat, incluidas las indicaciones y las respuestas. Esto podría ser útil, pero también podría exponer información adicional si alguien ha recibido acceso a la cuenta o si se ha compartido entre varias personas. Examine las funciones de los chatbot que esté utilizando y aprenda a activar, desactivar y eliminar el historial.
* Si su modelo de amenaza incluye la posible incautación, robo o cualquier otra adquisición no autorizada de cualquier dispositivo que pueda acceder al historial de chat de AI, considere también la posibilidad de eliminar cualquier historial de chatbot con frecuencia, o al menos cada vez que el dispositivo pueda verse comprometido, como en cruces fronterizos de riesgo o durante la cobertura sobre el terreno en contextos sensibles.

### Compartir accidentalmente los resultados de la IA con otros

### Es relativamente fácil compartir accidentalmente los resultados de la IA con quienes no deberían tener acceso a ellos. En un momento dado, los ajustes de compartición de OpenAI [permitieron a los motores de búsqueda indexar](https://techcrunch.com/2025/07/31/your-public-chatgpt-queries-are-getting-indexed-by-google-and-other-search-engines/) las consultas y resultados del chatbot.
* También ha habido muchas pruebas anecdóticas de [cómo los anotadores de IA](https://newsletter.threatprompt.com/p/the-meeting-never-ended-ai-transcript) grababan conversaciones delicadas que tenían lugar después de la parte principal de una reunión y enviaban las transcripciones a todos los asistentes, incluidos los que se habían marchado antes. Algunos AI notetakers no son totalmente transparentes sobre con quién comparten los datos o dónde los almacenan.
* Los anotadores de IA también pueden alucinar o cometer errores en sus resultados. Podrían [resumir de forma inexacta](https://www.huffpost.com/entry/ai-notetaker-meetings-privacy_l_683dda81e4b0cceca4075fc6) la reunión o las declaraciones de las personas. Del mismo modo, no todos los programas de toma de notas informan a las personas de que la reunión está siendo grabada y resumida, lo que podría dar lugar a problemas relacionados con el consentimiento e incluso a posibles problemas legales. Por lo tanto, es importante ser muy explícito cuando se utiliza un programa de toma de notas automatizado y, a continuación, leer y comprobar sus resultados.

* Algunas buenas prácticas que podría adoptar en su redacción:
    * No utilizar anotadores automáticos para conversaciones delicadas (a menos que haya una clara razón de accesibilidad para hacerlo).
    * Si necesitas mantener una conversación delicada, primero cuelga y luego haz una llamada más pequeña sólo con las personas que necesitan participar en la conversación. Asegúrate de que en esa segunda llamada no haya anotadores de IA.
    * Utiliza la IA que viene con tu plataforma de reuniones online, en lugar de una de terceros. Esto reduce la cantidad de lugares en los que se almacenan los datos de la reunión y facilita la auditoría y la gestión.
    *Si utilizas la función de compartir de un chatbot para enviar sus resultados a otras personas, asegúrate de estudiar detenidamente la configuración de uso compartido y averigua exactamente con quién lo compartes.

### Alucinaciones y envenenamiento por IA

* Las IAs basadas en LLM, como los chatbots, a menudo *alucinan*: pueden inventarse hechos, resumir incorrectamente sitios web y hacer referencia a recursos inexistentes. Comprueba siempre sus resultados para asegurarte de que son correctos.
* No hay reglas sencillas para verificar los resultados de la IA o averiguar cuándo alucinan exactamente. Te recomendamos que leas detenidamente sus respuestas y las compruebes por ti mismo. Pedir a una IA que compruebe o confirme su declaración anterior no es un método fiable para verificar sus resultados.
* Recuerda que las IAs no razonan, sino que utilizan modelos estadísticos para generar información que consideran la mejor respuesta a una consulta. Cada modelo funciona de forma diferente. Tómate tu tiempo para averiguar cuál es la mejor manera de ajustar tus indicaciones y ser productivo con ella.
* Las IA que clasifican contenidos, como correos electrónicos o mensajes, también pueden tergiversarlos. Una versión beta de Apple Intelligence [clasificaría erróneamente los correos electrónicos de phishing](https://lifehacker.com/tech/apple-intelligence-thinks-phishing-emails-are-priority-messages) como elementos de acción de alta prioridad.
* Los actores de la desinformación también pueden [generar grandes cantidades de contenido falso](https://www.atlanticcouncil.org/blogs/new-atlanticist/exposing-pravda-how-pro-kremlin-forces-are-poisoning-ai-models-and-rewriting-wikipedia/) con la esperanza de que sea recogido y citado por chatbots y otros sistemas de IA (esta práctica suele denominarse envenenamiento de IA). Es probable que la frecuencia de este tipo de ataques aumente, lo que hace aún más importante que tomemos medidas para leer y verificar de forma crítica cualquier salida de IA.

### Navegadores web y extensiones de IA

Algunos nuevos navegadores o extensiones de navegadores pretenden utilizar la IA para mejorar la experiencia de navegación o automatizar tareas dentro del navegador. En el momento de escribir estas líneas (finales de 2025), recomendamos encarecidamente no utilizarlos para ningún trabajo delicado. (Si realmente quieres probarlos, utiliza un navegador distinto que no utilices para ningún inicio de sesión o investigación delicados). Estos navegadores y extensiones son muy nuevos, y los atacantes siguen probando nuevas técnicas para encontrar fallos en ellos. La inyección de prompts, en la que los atacantes intentan incrustar instrucciones maliciosas (como "borrar todos mis correos electrónicos") dentro de un sitio web o correo electrónico de phishing, [sigue siendo una de las principales preocupaciones](https://arstechnica.com/information-technology/2025/08/new-ai-browser-agents-create-risks-if-sites-hijack-them-with-hidden-instructions/). En los próximos meses, esperamos que evolucionen tanto estas técnicas de ataque como las posibles mitigaciones y defensas. Hasta entonces, lo mejor es no utilizar nunca navegadores ni extensiones de IA para trabajos delicados.

## Completar la evaluación de riesgos y decidir para qué utilizar la IA

Tu evaluación de riesgos de IA debe incluir una lista de todas las herramientas de IA que utilizas y sus proveedores. La "IA" puede ser difícil de definir, ya que a menudo es más un término de marketing que técnico. Sin duda, debe tener en cuenta las herramientas utilizadas para la traducción, transcripción, subtitulación de audio de las videollamadas, revisión y corrección gramatical, así como cualquier chatbot que utilice.

Para cada una de esas herramientas, dedique un momento a investigar lo siguiente:

* ¿Quién es el fabricante o proveedor de esa herramienta? ¿Cuál es su historial en términos de privacidad y seguridad?
* ¿La herramienta funciona en el dispositivo o en la nube?
* ¿Qué versión o nivel de la herramienta estás utilizando? ¿Está utilizando una versión gratuita, una versión para empresas o una versión para empresas?
* ¿Para qué tarea utiliza la herramienta? ¿Está transcribiendo una mesa redonda abierta al público o resumiendo una entrada de blog que ha escrito? ¿O la utilizas para datos no públicos o sensibles?
* ¿Cómo se desactiva una herramienta como el anotador de reuniones si tienes que hablar de un tema delicado? ¿Cómo compruebas que se ha desactivado?
* ¿Cuáles son las políticas de privacidad de la herramienta y del nivel que utilizas? ¿Comparte la herramienta, en el nivel en que la utilizas, registros de conversaciones u otros datos con el proveedor? ¿Estos datos son revisados por personas o se utilizan para la formación?

Si la herramienta que utilizas comparte registros de conversaciones u otros datos con el proveedor, utilízala sólo para tareas o investigaciones muy básicas. Utilízala asumiendo que, si tus consultas se filtraran o otros accedieran a ellas, no revelarían ninguna información significativa sobre tu investigación o tus fuentes.

Si la herramienta que utilizas está basada en la nube pero no comparte registros u otros datos con el proveedor, entonces suele ser segura para trabajos no públicos de sensibilidad media. Los datos podrían filtrarse si alguien entrara en los sistemas del proveedor de IA, lo que ocurre con muy poca frecuencia, o si un tribunal u otra autoridad obligara a este proveedor a compartir tus datos.

Si desea utilizar la IA para datos muy sensibles, por ejemplo transcribir una conversación con una fuente o resumir documentos confidenciales confidenciales, evite las soluciones basadas en la nube. Utiliza únicamente herramientas en el dispositivo y fuera de línea. EnMerece la pena consultar con profesionales de la seguridad digital o la informática que puedan ayudarle a configurar estas herramientas.


<div class="recursos">

## Recursos

Los siguientes recursos pueden ser útiles para la enseñanza de este capítulo:

[¿Hasta qué punto son seguras las herramientas de transcripción favoritas de los periodistas?](https://freedom.press/digisec/blog/how-secure-are-journalists-favorite-transcription-tools/), por Martin Shelton y Yael Grauer, Fundación para la Libertad de Prensa.

[Meta corrige un error que filtraba chats de inteligencia artificial](https://freedom.press/digisec/blog/meta-fixes-bug-that-leaked-ai-chats/), por Martin Shelton, Fundación para la Libertad de Prensa.

[Women journalists learn to use AI chatbots safely despite security risks](https://smex.org/women-journalists-learn-to-use-ai-chatbots-safely-despite-security-risks/) por Afnan Abu Yahya, SMEX

</div> <div>


_Este capítulo se ha inspirado en el increíble trabajo realizado por Harlo Holmes y la Fundación para la Libertad de Prensa, y agradecemos sus consejos y aportaciones al campo_.
