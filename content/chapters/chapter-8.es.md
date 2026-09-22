+++

type = "report"
title = "Capítulo 8: Uso seguro de la IA"
layout = "single"
weight = 9
toc = false
+++

**¡Este es nuestro capítulo más reciente y nos gustaría recibir sus comentarios! Si ve algo que podríamos mejorar, por favor háganoslo saber o envíenos sus sugerencias de cambios o ediciones.**

## Introducción

Los periodistas están empezando a utilizar la IA en su trabajo, incluso para tareas como la investigación, la transcripción de audio y la traducción. Las herramientas de IA son nuevas, y muchas aún no están preparadas para manejar información altamente sensible, como los nombres de las fuentes o temas de investigación confidenciales.

_Existen varias tecnologías de IA diferentes, entre las que destacan los Modelos Extensos de Lenguaje (LLM, por sus siglas en inglés para Large Language Model), que impulsan herramientas como los chatbots. Para simplificar, aquí utilizaremos simplemente el término «IA» y solo distinguiremos entre las diferentes tecnologías cuando sea necesario para mayor claridad._

Este capítulo incluye:

* Diferencias entre la IA integrada en el dispositivo y la IA en la nube
* Registros de IA, IA empresarial e historiales
* Alucinaciones de la IA y envenenamiento de datos por la IA

## ¿Es la primera vez que capacita periodistas?

Puede ser útil tener en cuenta lo siguiente:

* Los periodistas suelen utilizar planes individuales o gratuitos de servicios en línea, incluidas las IA para su trabajo. Es poco común que adquieran versiones empresariales de dichos servicios.
* Las actitudes hacia la IA difieren radicalmente entre las redacciones y los periodistas. Algunos la integran de buena gana en sus flujos de trabajo, mientras que otros pueden mostrarse reacios a utilizar la IA generativa debido a preocupaciones relacionadas con los derechos de autor, el medio ambiente y otros aspectos.
* Muchas herramientas de IA, como los _chatbots_, siguen desarrollándose rápidamente y cambian su funcionalidad y ajustes con regularidad. Los periodistas rara vez tendrán tiempo para mantenerse al día con estos avances y podrían recurrir a profesionales de seguridad y de TI, esperando que estos dediquen más tiempo a investigar dichos cambios.

## ¿Es la primera vez que capacita sobre la IA?

### Diferencia entre la IA integrada en el dispositivo y la basada en la nube

* Cuando un sistema de IA procesa sus datos, por ejemplo, para responder una consulta o transcribir audio, puede hacerlo bien en su dispositivo o en la nube. Esto es similar al procesamiento de textos: puede usar una aplicación que simplemente guarde en su escritorio o una basada en la nube.
* Las IA integradas en el dispositivo realizan todo el procesamiento en su celular o computadora de escritorio y, por lo general, no envían consultas al proveedor. Una forma sencilla de saber si una IA está integrada en el dispositivo es verificar si funciona por completo cuando el dispositivo en el que se encuentra está desconectado de Internet. Aun así, debe revisar la política de privacidad de la IA integrada en el dispositivo para asegurarse de que nunca comparta muestras de sus consultas o datos con terceros.
* Las IA integradas en el dispositivo ofrecen las mejores garantías de privacidad, aunque aún así podrían revelar registros u otros detalles si alguien, como una pareja abusiva o un agente de seguridad que realice un registro, revisa el dispositivo.
* Podría utilizar la IA integrada en el dispositivo para procesar datos sensibles, por ejemplo, para resumir documentos confidenciales o transcribir automáticamente conversaciones con fuentes clave. Esto requerirá cierta configuración y medidas de seguridad para asegurarse de que los datos nunca salgan de su dispositivo. **Si esto es de su interés, póngase en contacto con un instructor de seguridad digital o un especialista en TI que pueda ayudarle a configurar dicho sistema.**

* Las IA basadas en la nube procesan datos en los servidores de una empresa. Estos datos se utilizarán, almacenarán y compartirán de acuerdo con la política de privacidad de dicha empresa; por eso es importante leer y revisar periódicamente esas políticas. Las IA basadas en la nube suelen ser más potentes que las integradas en los dispositivos, ya que pueden contar con más datos y potencia de cómputo.
* Algunos fabricantes están desarrollando sistemas híbridos de IA. Estos pueden recurrir a las capacidades integradas en el dispositivo para algunas tareas y a las de la nube para otras. Una IA híbrida bien diseñada debe advertir al usuario y pedirle permiso antes de subir cualquiera de sus datos a la nube.
* El panorama de la IA sigue siendo nuevo. Las herramientas, las capacidades y las garantías de privacidad cambian constantemente. Es importante revisar periódicamente qué procesamiento se realiza en el dispositivo, qué ocurre en la nube y cuáles son las promesas de privacidad del proveedor de la nube.

### Las IA en la nube, registros y algunas recomendaciones

* Algunas herramientas de IA y _chatbots_ en la nube guardan registros de las conversaciones y los datos que uno comparte con ellas. Dichos registros podrían ser almacenados por el proveedor de IA, utilizados como datos de entrenamiento para futuros sistemas de IA y, en ocasiones, leídos por revisores humanos.
* Si la organización almacena, procesa o utiliza de cualquier otra forma estos registros, existe la posibilidad de que cualquier dato confidencial que ingrese en las herramientas de IA o los _chatbots_ pueda filtrarse algún día, especialmente si esos registros se han utilizado como datos de entrenamiento. Por lo tanto, es importante leer la política de privacidad de su proveedor de IA para comprender cómo administra sus datos.
    * Las IA son bastante nuevas y la investigación sobre posibles fugas de datos aún está en curso. Si sus _prompts_ se están utilizando para entrenar futuros modelos de IA, nos preocupa que un atacante pueda intentar recuperar esos _prompts_ mediante consultas ingeniosamente diseñadas, por ejemplo, preguntando qué tipo de preguntas o temas debería considerar un periodista que investiga la corrupción en un país específico. Del mismo modo, los atacantes podrían crear _scripts_ o consultas que recuperen números de teléfono específicos, direcciones de correo, números de pasaporte, nombres y otra información valiosa almacenada en los datos de entrenamiento.

* Para revisar ejemplos de políticas de privacidad y acceso a datos relacionadas con la IA, revise las de [Gemini de Google Workspace](https://support.google.com/a/answer/15706919?) o las de [Copilot de Microsoft 365](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy). Verifique qué nivel o versión del _software_ está utilizando. Muchos proveedores cuentan con un nivel empresarial o comercial independiente que ofrece protección adicional, como no utilizar sus datos para el entrenamiento de la IA. (Aunque pueda resultar confuso, los niveles «_Pro_» y «_Work/Enterprise_» pueden tener políticas de registro y protecciones diferentes: asegúrese de leer la letra pequeña).
* Es posible que los niveles gratuitos o de pago básicos no cuenten con todas esas protecciones, lo que podría permitir que otras personas accedan a sus registros o historiales de chat. Todo depende del proveedor que esté utilizando.
* Desafortunadamente, las políticas de registro y privacidad a veces pueden cambiar para peor. A finales de agosto de 2025, [Anthropic modificó sus políticas](https://www.macrumors.com/2025/08/28/anthropic-claude-chat-training/) para que los usuarios tuvieran que renunciar explícitamente a que sus datos de consultas fueran usados para entrenar modelos extensos de lenguaje (LLM). Se informó a los usuarios de este cambio mediante una notificación.
* Si utiliza una versión empresarial o comercial del _software_ de IA, a menudo puede adoptar la misma mentalidad de seguridad que con los documentos almacenados en una plataforma basada en la nube, como O365 o Google Docs. Puede utilizarlo para trabajos e investigaciones de cierta sensibilidad, pero nunca para información confidencial, como los nombres de fuentes, ni para casos en los que el proveedor de IA (o el país en el que tiene su sede) forme parte explícitamente de su modelo de amenazas.

* Recomendamos encarecidamente que las redacciones utilicen un solo proveedor de IA (o, si eso no es posible, el menor número posible de proveedores), que se suscriban al nivel empresarial en lugar del gratuito, y que exijan a todos los periodistas que utilicen ese proveedor para asuntos relacionados con el trabajo.
* Requiere esfuerzo dar seguimiento a los ajustes y configuraciones de seguridad de los distintos proveedores, pagar por paquetes profesionales y revisar las políticas para asegurarse de que no guarden, compartan ni publiquen registros. Cuantos menos haya, más fácil será la tarea. El administrador de sistemas de una sala de redacción también podría configurar los sistemas de IA proporcionados por la empresa para que se ajusten a sus necesidades de privacidad, seguridad y jurisdicción.

### Memoria e historial de chat

* Muchos sistemas de IA ofrecen la posibilidad de guardar los historiales de chat, incluidos los _prompts_ y las respuestas. Esto podría ser útil, pero también podría exponer información adicional si alguien llegara a tener acceso a la cuenta o si esta se compartiera entre varias personas. Revise las funciones del _chatbot_ o los _chatbots_ que esté utilizando y aprenda cómo habilitar, deshabilitar y borrar el historial.
* Si su modelo de amenazas incluye la posibilidad de incautación, robo o cualquier otra adquisición no autorizada de cualquier dispositivo que pueda acceder al historial de chat de IA, considere también eliminar el historial del _chatbot_ con frecuencia, o al menos cada vez que el dispositivo pueda verse comprometido, como en cruces fronterizos riesgosos o durante la cobertura de campo en contextos sensibles.

### Compartir accidentalmente los resultados de la IA con otras personas

* Es relativamente fácil compartir accidentalmente los resultados de la IA con personas que no deberían tener acceso a ellos. En un momento dado, la configuración de uso compartido de OpenAI [permitía que los motores de búsqueda indexaran](https://techcrunch.com/2025/07/31/your-public-chatgpt-queries-are-getting-indexed-by-google-and-other-search-engines/) las consultas y los resultados de los _chatbots_.
* También ha habido mucha evidencia anecdótica sobre [cómo las herramientas de IA para tomar notas](https://newsletter.threatprompt.com/p/the-meeting-never-ended-ai-transcript) grababan conversaciones confidenciales que tenían lugar después de la parte principal de una reunión y enviaban las transcripciones a todos los asistentes, incluso a quienes se habían ido antes. Algunas herramientas de IA para tomar notas no son totalmente transparentes sobre con quién comparten los datos o dónde los almacenan.
* Las herramientas de IA para tomar notas también pueden tener alucinaciones o cometer errores en sus resultados. Podrían [resumir de manera inexacta](https://www.huffpost.com/entry/ai-notetaker-meetings-privacy_l_683dda81e4b0cceca4075fc6) la reunión o las intervenciones de las personas. Del mismo modo, no todos los asistentes de notas informan a las personas que la reunión está siendo grabada y resumida, lo que podría generar problemas relacionados con el consentimiento e incluso posibles problemas legales. Por ello, es importante ser muy explícito cuando se utiliza una herramienta de IA para tomar notas y, posteriormente, leer y revisar sus resultados.

* Algunas buenas prácticas que podría adoptar en su sala de redacción:
    * No utilice herramientas de IA para tomar notas para conversaciones confidenciales (a menos que exista una razón clara de accesibilidad para hacerlo).
    * Si necesita tener una conversación confidencial, primero cuelgue y luego realice una llamada más pequeña solo con las personas que deban participar en la conversación. Asegúrese de que no haya herramientas de IA para tomar notas en la segunda llamada.
    * Utilice herramientas de IA para tomar notas que vienen con su plataforma de reuniones en línea, en lugar de una de terceros. Esto reduce la cantidad de lugares donde se almacenan los datos de su reunión y facilita su auditoría y gestión.
Si utiliza la función para compartir de un _chatbot_ para enviar sus respuestas a otras personas, asegúrese de estudiar cuidadosamente los ajustes de compartir y determinar exactamente con quién está compartiendo la información.

### Alucinaciones y «envenenamiento» de la IA

* Las IA basadas en modelos extensos de lenguaje (LLM), como los _chatbots_, suelen tener alucinaciones: pueden inventar datos, resumir incorrectamente páginas web y hacer referencia a recursos que no existen. Siempre revise sus resultados para asegurarse de que sean precisos.
* No existen reglas sencillas para verificar los resultados de la IA o para determinar cuándo exactamente tienen alucinaciones. Recomendamos leer detenidamente sus respuestas y verificar los datos de manera independiente. Pedirle a una IA que verifique o confirme su propia afirmación anterior _no_ es un método confiable para validar su resultado.
* Recuerde que las IA no razonan: utilizan modelos estadísticos para generar información que consideran la mejor respuesta a una consulta. Cada modelo funciona de manera diferente. Tómese un tiempo para descubrir cómo ajustar mejor sus _prompts_ y sacarle el máximo provecho.
* Las IA que clasifican contenidos, como correos electrónicos o mensajes, también pueden tergiversarlos. Una versión beta de Apple Intelligence [clasificaba erróneamente los correos electrónicos de _phishing_](https://lifehacker.com/tech/apple-intelligence-thinks-phishing-emails-are-priority-messages) como acciones de alta prioridad.
* Los actores que difunden desinformación también pueden [generar grandes cantidades de contenido falso](https://www.atlanticcouncil.org/blogs/new-atlanticist/exposing-pravda-how-pro-kremlin-forces-are-poisoning-ai-models-and-rewriting-wikipedia/) con la esperanza de que los _chatbots_ y otros sistemas de IA lo recojan y lo citen (esta práctica se conoce a menudo como «envenenamiento de IA»). Es probable que estos ataques aumenten en frecuencia, lo que hace aún más importante que tomemos medidas para leer y verificar de manera crítica cualquier resultado generado por la IA.

### Navegadores web y extensiones con IA

Algunos navegadores web o extensiones de navegador nuevos tienen como objetivo utilizar la IA para mejorar su experiencia de navegación o automatizar tareas dentro del navegador. Al momento de redactar este documento (finales de 2025), recomendamos encarecidamente no utilizarlos para ningún trabajo sensible. (Si realmente quiere probarlos, use un navegador aparte que no utilice para inicios de sesión confidenciales ni para investigaciones). Estos navegadores y extensiones son muy nuevos, y los atacantes siguen probando nuevas técnicas para encontrar fallas en ellos. La inyección de _prompts_, en la que los atacantes intentan insertar instrucciones maliciosas (como «elimine todos mis correos electrónicos») en una página web o un correo electrónico de _phishing_, [sigue siendo una gran preocupación](https://arstechnica.com/information-technology/2025/08/new-ai-browser-agents-create-risks-if-sites-hijack-them-with-hidden-instructions/). En los próximos meses, esperamos que tanto estas técnicas de ataque como las posibles medidas de mitigación y defensa evolucionen. Hasta entonces, lo mejor es no utilizar nunca navegadores web ni extensiones con IA para ningún trabajo confidencial.

## Realización de la evaluación de riesgos y decidir para qué se utilizará la IA

Su evaluación de riesgos de IA debe incluir una lista de todas las herramientas de IA que utiliza y sus proveedores. El término «IA» puede ser difícil de definir, ya que a menudo se trata más de un término de mercadotecnia que de uno técnico. Definitivamente debe considerar las herramientas que utiliza para traducción, transcripción, subtitulado de audio en videollamadas, revisión de textos y corrección gramatical, así como cualquier _chatbot_ que utilice.

Para cada una de esas herramientas, tómese un momento para investigar lo siguiente:

* ¿Quién es el fabricante o proveedor de esa herramienta? ¿Cuál es su historial en materia de privacidad y seguridad?
* ¿La herramienta se ejecuta en el dispositivo o en la nube?
* ¿Qué versión o nivel de la herramienta está utilizando? ¿Está usando un nivel gratuito, un nivel comercial o un nivel empresarial?
* ¿Para qué tarea está utilizando la herramienta? ¿Está transcribiendo una mesa redonda abierta al público o resumiendo una entrada de blog que escribió? ¿O la está utilizando para datos privados o sensibles?
* ¿Cómo desactiva una herramienta de IA para tomar notas si necesita discutir un tema delicado? ¿Cómo se asegura de que haya sido desactivada?
* ¿Cuáles son las políticas de privacidad de la herramienta y del nivel que está utilizando? ¿La herramienta, en el nivel en que la esté utilizando, comparte registros de conversaciones u otros datos con el proveedor? ¿Dichos datos son revisados por personas o se utilizan para entrenamiento?

Si la herramienta que está utilizando comparte registros de conversaciones u otros datos con el proveedor, úsela únicamente para investigaciones o tareas muy básicas. Úsela partiendo de la premisa de que, si sus consultas se filtraran u otras personas tuvieran acceso a ellas, no revelarían ninguna información significativa sobre su investigación o sus fuentes.

Si la herramienta que está utilizando está basada en la nube pero no comparte registros u otros datos con el proveedor, por lo general es seguro usarla para trabajos privados de sensibilidad media. Los datos podrían filtrarse si alguien lograra infiltrarse en los sistemas del proveedor de IA —lo cual ocurre muy raramente— o si un tribunal u otra autoridad obligara a este proveedor a compartir sus datos.

Si quiere usar la IA para datos muy sensibles, por ejemplo, para transcribir una conversación con una fuente o resumir documentos confidenciales, evite las soluciones basadas en la nube. Use únicamente herramientas integradas en el dispositivo, sin conexión. Vale la pena consultar con profesionales de seguridad digital o de TI que puedan ayudarle a configurar dichas herramientas.


<div class="resources">

## Recursos

Los siguientes recursos pueden ser útiles para enseñar este capítulo:

[¿Qué tan seguras son las herramientas de transcripción favoritas de los periodistas?](https://freedom.press/digisec/blog/how-secure-are-journalists-favorite-transcription-tools/) Por el Dr. Martin Shelton y Yael Grauer, Fundación para la Libertad de Prensa

[Meta corrige un _bug_ que filtraba chats de IA](https://freedom.press/digisec/blog/meta-fixes-bug-that-leaked-ai-chats/) por el Dr. Martin Shelton, Fundación para la Libertad de Prensa

[Las mujeres periodistas aprenden a usar los _chatbots_ de IA de manera segura, a pesar de los riesgos de seguridad](https://smex.org/women-journalists-learn-to-use-ai-chatbots-safely-despite-security-risks/) por Afnan Abu Yahya, SMEX

</div>


_Este capítulo se inspiró en el increíble trabajo realizado por Harlo Holmes y la Fundación para la Libertad de Prensa, y les agradecemos sus consejos y contribuciones a la materia._
