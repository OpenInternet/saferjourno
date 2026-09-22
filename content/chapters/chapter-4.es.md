+++

type = "report"
title = "Capítulo 4: Investigación en línea más segura"
layout = "single"
weight = 5
toc = true
+++

## Introducción

Usualmente, los periodistas no tienen tan claro quién monitorea su actividad en línea ni cómo los datos que se recopilan pueden utilizarse en contra de ellos y de sus fuentes. Este capítulo está diseñado para ayudarlos a comprender quién puede acceder a su información y ofrecerles medidas concretas que pueden tomar para reducir este riesgo.

Este capítulo incluye:

- Reflexiones sobre el riesgo individual cuando se hace una investigación en línea
- Cómo circula la información por Internet
- Quién recopila datos en línea y cómo pueden utilizarse en contra de los medios de comunicación
- Las diferentes formas en que las personas pueden obtener los datos en línea de un periodista
- Mejores prácticas para realizar búsquedas en línea más seguras

## ¿Es la primera vez que capacita periodistas?

Puede ser útil tener en cuenta lo siguiente:

- Una vez que a los periodistas se les ocurre una idea para un reportaje, comienzan a investigar en línea y, con frecuencia, no han implementado prácticas de seguridad digital. Los periodistas no siempre realizan una evaluación de riesgos antes de comenzar la investigación de un reportaje.
- Por lo general, los periodistas no tienen claro quién puede rastrear su actividad en línea ni qué datos se recopilan sobre ellos. Los instructores pueden recurrir a estudios de casos locales para mostrar cómo las empresas y los gobiernos obtienen datos sobre las personas.
- Algunas historias pueden volverse más riesgosas a medida que se desarrollan, lo que deja a los periodistas y a sus fuentes vulnerables a intrusiones o ataques digitales. Por eso, es importante que el periodista revise la evaluación de riesgos a lo largo de todo el proceso.
- Los periodistas suelen tener poco tiempo y no podrán dedicarlo a probar nuevas herramientas, especialmente aquellas que son demasiado técnicas.
- Es común que los periodistas utilicen herramientas en línea porque les han dicho que son más seguras sin entender por qué lo son. Esto puede generar una falsa sensación de seguridad.

## ¿Es la primera vez que capacita sobre seguridad digital?

Esta sección incluye mejores prácticas que pueden aplicarse a la hora de impartir las actividades de este capítulo. Revise la sección de [recursos](#recursos) de este capítulo para más información.

_Buenas prácticas generales_

- Realice una evaluación de riesgos antes de comenzar cualquier investigación en línea. Pida a los periodistas que identifiquen si podrían estar visitando páginas web que representen un riesgo de seguridad para ellos, como páginas administradas por organizaciones criminales, o en las que deseen mantener oculta su identidad por otras razones, por ejemplo, al visitar las páginas de empresas que podrían estar investigando. Pregúnteles qué es lo que les preocupa específicamente (¿que el sitio se infiltre en su dispositivo? ¿Que el sitio obtenga demasiada información sobre ellos?). Los diferentes riesgos requieren medidas de mitigación distintas, pero siempre recuerde a los participantes que mantengan actualizado su navegador web (por lo general, esto se puede verificar en la sección «_Acerca de_» del navegador). Algunas páginas web pueden contener contenido malicioso que intentará aprovechar brechas de seguridad en los navegadores. Esas brechas de seguridad suelen corregirse durante las actualizaciones de _software_, por lo que mantener su navegador actualizado es una de las mejores medidas que puede tomar para su seguridad.
- Cuando visite una página web debería asegurarse de que el sitio está cifrado, o que usa HTTPS.
  - En el pasado, solo una minoría de las conexiones a páginas web estaban cifradas. Hoy en día, prácticamente todas las conexiones con páginas de confianza están cifradas. La mayoría de los navegadores web ahora muestran una advertencia si intenta conectarse a un sitio que no utiliza HTTPS. Esta advertencia puede aparecer junto a la barra de direcciones.
  - Cuando su conexión con un sitio está cifrada, los proveedores de servicios de Internet y otros pueden **saber que usted está en esa página, pero no lo que está haciendo allí**. Por ejemplo, pueden ver que está conectado a su proveedor de correo electrónico, pero no podrán leer sus correos. Pueden saber que está en Wikipedia, pero no qué artículo o artículo está leyendo. Es posible que incluso puedan calcular aproximadamente cuánto tiempo ha pasado en la página y cuántos datos ha transferido desde ella.
- HTTPS evita que su proveedor de servicios de Internet, el hotel o la cafetería donde se conecta al Wi-Fi, o su proveedor de telefonía celular, puedan averiguar el contenido de las páginas que está visitando, qué contraseñas está ingresando y a qué correos electrónicos o documentos de Drive está accediendo. No evita que la página en sí misma lo rastree; para eso, necesitamos otras medidas de protección, que se describen a continuación.
- Los propietarios de páginas web pueden ver qué direcciones IP visitan su sitio. A cada dispositivo conectado a Internet se le asigna un número único conocido como dirección de Protocolo de Internet (IP). Este número lo asigna su proveedor de servicios de Internet, la empresa que le brinda el servicio de Internet.
  - Hay varias cosas que alguien podría averiguar con base en su dirección IP. Su dirección IP podría revelar su ubicación aproximada, como su ciudad. En el caso de organizaciones más grandes, como una sala de prensa corporativa, la dirección IP incluso podría utilizarse para identificar a la organización específica, ya que los edificios de oficinas o las grandes organizaciones pueden utilizar rangos de direcciones IP conocidos o fijos.
  - Su proveedor de servicios de Internet y, por extensión, el gobierno, podrían averiguar a qué «suscriptor» pertenece una dirección IP. Un suscriptor puede ser una persona o una entidad, como una pequeña oficina o una cafetería.
  - El rastreo de direcciones IP podría ser un problema para los periodistas que no quieren que el propietario de un sitio web sepa que han estado buscando información en su sitio. Si un periodista desea ocultar su dirección IP a un sitio web, debe utilizar una red privada virtual (VPN). Para obtener más información sobre este modelo de riesgo específico y sobre las VPN, consulte la sección a continuación.
- Además de las direcciones IP, los dueños de páginas web también pueden ver datos básicos sobre un sistema, como su resolución de pantalla, la versión del software o qué fuentes tiene cargadas. Esta práctica, conocida como «huella digital del navegador», podría utilizarse para identificar equipos que pertenecen a organizaciones particulares o incluso a usuarios individuales. Actualmente, varios navegadores web están implementando protecciones contra las huellas digitales, y los navegadores Mullvad y Tor (este último se describe con más detalle a continuación) ofrecen algunas de las más avanzadas.
- Los dueños de páginas web también pueden usar _cookies_ para rastrear a los usuarios, ver con qué frecuencia visitaron una página y, potencialmente, obtener información sobre sus otras actividades en la web. Al enseñar sobre seguridad digital, puede usar el ejemplo del _remarketing_ (cuando vio un producto en un sitio web y luego le aparecen anuncios de ese producto) para explicar cómo las _cookies_ de rastreo podrían usarse para crear un perfil suyo y obtener información sobre usted. La forma más sencilla de mitigar el uso de las _cookies_ de rastreo es navegar en modo privado o de incógnito, lo cual elimina dichas _cookies_ cuando el usuario cierra la ventana.
- Anime a los periodistas a instalar un bloqueador de anuncios acreditado y de confianza, como [uBlock Origin](https://ublockorigin.com/), para protegerse contra el _malware_ que se distribuye a través de los anuncios en línea. Es posible que esta no sea una opción para ellos si trabajan en una sala de redacción que no permite el uso de bloqueadores de anuncios ni extensiones de navegador.
- Con la excepción de una extensión para bloquear anuncios y la extensión de autocompletar de su gestor de contraseñas, es mejor instalar la menor cantidad posible de extensiones en el mismo navegador que utiliza para su trabajo sensible. Las extensiones de navegador a menudo pueden ver el contenido de todas las páginas web que está visitando; si la extensión se viera comprometida o fuera vendida, sus autores podrían robar su información. Si necesita instalar extensiones para el trabajo, es mejor hacerlo en un navegador aparte que no utilice para tareas confidenciales o inicios de sesión: una extensión comprometida o maliciosa por lo general solo podrá extraer datos del navegador en el que esté instalada y habilitada.
- Evite usar computadoras públicas, incluso en eventos de prensa. Pueden estar infectadas con _malware_ o _spyware_, o realizar un seguimiento exhaustivo de los usuarios de otras maneras, y por lo tanto podrían obtener acceso a su cuenta incluso si adopta buenas prácticas de seguridad. Si es absolutamente necesario que use una computadora pública y se siente cómodo con los riesgos que ello implica, inicie sesión a través de una nueva ventana privada del navegador (que lo desconecta automáticamente y borra el historial y las _cookies_ al cerrarla). Una vez que vuelva a usar una computadora en la que confíe, como su computadora de trabajo o personal, cambie la contraseña y haga clic en «cerrar sesión en todos los dispositivos» para todas las cuentas en las que inició sesión en la computadora pública. (Si inició sesión mediante un código QR y una llave de acceso almacenada en su _smartphone_, no es necesario cambiar ni eliminar esa llave de acceso después. Esto se debe a que la computadora nunca «ve» la parte privada de su llave de acceso, la cual solo se almacena en su _smartphone_. De todos modos, debe usar la función «cerrar sesión en todos los dispositivos» en su _smartphone_ o en una computadora de confianza una vez que haya terminado, por si acaso).
- Considere usar una computadora separada para investigaciones confidenciales. Esto ayudará a compartimentar los datos de manera que, si el dispositivo se infecta, el atacante tenga acceso limitado a la información.
- Los periodistas que realicen investigaciones sobre grupos en línea y necesiten registrarse en foros o salas de chat deben crear una nueva cuenta de correo específica para ese fin. La dirección de correo electrónico no debe contener datos personales que puedan identificar a los periodistas al registrar la cuenta. Se recomienda que el periodista busque el apoyo de un profesional en seguridad digital para recibir asistencia.
- Los periodistas que realicen investigaciones altamente sensibles tal vez deseen utilizar el [navegador Tor](https://www.torproject.org/download/). Se recomienda que busquen la orientación de un profesional en seguridad digital antes de hacerlo. También deben estar al tanto de la legislación de su país con respecto al uso de Tor.

_Datos y empresas_

- Los Proveedores de Servicios de Internet (ISP, por las siglas en inglés de _Internet Service Provider_), es decir, la empresa que le brinda conexión a Internet en su hogar u oficina, recopilan una cantidad significativa de datos en línea, incluido el historial de navegación y la información de ubicación. Las empresas de telecomunicaciones ofrecen a los usuarios servicios de datos móviles e Internet. Asimismo, recopilan una gran cantidad de datos sobre los usuarios, entre ellos registros de llamadas, mensajes de texto, datos de ubicación e historial de navegación. El tiempo que conservan estos datos y con quién los comparten depende de las leyes de cada país. Para saber más sobre esto, realice una búsqueda con términos clave utilizando el nombre del país y términos como «retención de datos», «leyes de telecomunicaciones» y «datos de clientes».
- Las empresas de tecnología también almacenan una cantidad significativa de datos en línea sobre los usuarios, incluidos nombres de usuario, mensajes directos, documentos, fotos y más. Estos datos se conservan de acuerdo con los términos y condiciones de la empresa, que pueden consultarse en su página web. Las empresas de tecnología reciben solicitudes de los gobiernos para acceder a los datos de los usuarios, a las que pueden o no dar cumplimiento. Para verificar esto, los periodistas deben revisar los informes anuales de transparencia publicados por las principales empresas de tecnología. Estos se pueden encontrar en sus páginas web o realizando una búsqueda en línea con el nombre de la empresa y el término clave «informe de transparencia».
- Las páginas web recopilan datos sobre las personas que las visitan, incluida la dirección IP, que revela la ubicación aproximada, y detalles sobre el modelo del dispositivo desde el que se visita, como el sistema operativo y la zona horaria. Para protegerse mejor contra esto, use una VPN y un navegador como Mullvad, que protege contra el _fingerprinting_ (huella digital del dispositivo).

_Red privada virtual (RPV) (en inglés, Virtual Private Network, VPN)_

- Una VPN es un túnel cifrado que conecta su dispositivo a un servicio en línea. Cuando la usa, los servicios en línea a los que accede verán la dirección IP de su VPN en lugar de la suya. Su proveedor de servicios de Internet (ISP) verá que está usando una VPN, pero no sabrá a qué está accediendo. Los servicios de VPN suelen ofrecer servidores en todo el mundo, por lo que podría estar navegando desde un país mientras aparenta estar en otro.
- Esto es útil para periodistas que desean evitar que su proveedor de servicios de Internet rastree su historial de navegación, para ocultar una dirección IP al visitar sitios web o para acceder a páginas bloqueadas o restringidas. Una VPN no funcionará en situaciones en las que el gobierno bloquee el acceso a Internet.
- Una VPN es como cualquier otro servicio en línea y puede recopilar una cantidad significativa de datos sobre sus usuarios. Revise los términos y condiciones de cada VPN para ver qué datos se recopilan, dónde se almacenan, en qué formato se guardan y si esos datos se comparten con los gobiernos.
- En algunos países, las VPN son ilegales y usarlas o tener una instalada en un dispositivo puede poner en riesgo al periodista. En esos países, es posible que puedan usarse VPN aprobadas y lanzadas por los gobiernos. Estas no son seguras y recopilarán datos personales de los usuarios, incluido su historial de navegación.
- Existe una amplia variedad de VPN disponibles. Recomendamos este [excelente artículo de Wirecutter](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/) sobre cómo elegir la VPN que mejor se adapte a sus necesidades. Al elegir una VPN, es importante tener en cuenta lo siguiente:
  - Escoja una VPN que no registre el historial de navegación del usuario. Tenga en cuenta, sin embargo, que algunas VPN han mentido sobre sus capacidades o sus promesas de privacidad.
  - Investigue quién es el propietario de la empresa de VPN, dónde tiene su sede y dónde se encuentran sus servidores. Esta información se puede encontrar en el sitio web de la VPN que desee utilizar. Para los periodistas que enfrentan amenazas por parte de un gobierno, lo mejor es elegir una VPN que no esté ubicada en su país ni en ningún país que tenga relaciones cercanas con ese gobierno.
  - Las VPN gratuitas a menudo pueden contener _malware_, guardar registros exhaustivos o revender sus datos de navegación o ancho de banda. Hable con otras personas en su contexto local o con profesionales de seguridad digital para saber qué VPN están utilizando.
  - ¿Funciona la VPN en el país donde uno quiere usarla, o ya ha sido bloqueada por el gobierno? Debe asegurarse de tener varias opciones de VPN disponibles en caso de que una deje de funcionar.
- Hay casos en los que uno no quiere que el propietario de una página web sepa que la está visitando, por ejemplo, cuando está investigando y descargando informes de empresas multinacionales o gobiernos. Aunque es poco común, los registros de direcciones IP [han alertado a las empresas](https://web.archive.org/web/20211021091609/https://twitter.com/runasand/status/831266832678010880) del hecho de que son objeto de una investigación periodística. Las VPN serían útiles en este caso. Como se mencionó anteriormente, es una buena idea combinarlas con un navegador resistente al _fingerprinting_ (como el navegador Mullvad) o usar el navegador Tor al realizar investigaciones delicadas.

## Realización de la evaluación de riesgos

Al hablar sobre la evaluación de riesgos y el plan de seguridad personal, puede ser útil mencionar lo siguiente:

- Los periodistas tienen muchas preguntas sobre el servicio en línea que es más seguro y, con frecuencia, buscan recomendaciones sobre la herramienta más segura. No siempre es fácil responder esta pregunta, ya que cada periodista enfrenta riesgos específicos.
- Es posible que los periodistas utilicen ciertas herramientas en línea porque les han dicho que son más seguras, pero tal vez no entiendan el porqué. Esto puede llevar a que los servicios en línea se utilicen de manera incorrecta o en contextos que expongan a los periodistas a un mayor nivel de riesgo.
- El instructor debe ayudar al periodista a reflexionar sobre quién podría estar interesado en obtener sus datos de navegación y cuáles son las capacidades tecnológicas, legales y financieras de esas personas. Los periodistas deben comprender que enfrentan riesgos según el país en el que vivan, las amenazas que hayan recibido anteriormente, así como el tema que cubren.

<div class="faq">

## Preguntas frecuentes

A continuación presentamos preguntas frecuentes que hacen los periodistas sobre la seguridad de las cuentas. Puede ser útil tener preparadas las respuestas con anticipación.

**¿Quién puede ver mi actividad en línea?**

Explique que, a medida que los datos circulan por Internet, son recopilados en diversos puntos, entre ellos por los proveedores de servicios de Internet y las empresas de tecnología. Se puede acceder a esta información en empresa y también puede ser pedida por un gobierno mediante una orden judicial. Contar con un buen conocimiento del contexto local ayudará al instructor a responder esta pregunta. Por ejemplo, ¿cuál es la legislación sobre la retención de datos en las empresas? ¿La policía necesita una orden judicial para acceder a los datos? ¿Qué tan probable es que las empresas de tecnología respondan a una solicitud de funcionarios del gobierno para entregar datos? Todas estas preguntas pueden ser muy importantes para los periodistas, especialmente para aquellos que recién están comenzando a desenvolverse en este ámbito. Explique que el hecho de quién recopila sus datos puede o no ser un problema para el periodista, dependiendo de sus propios riesgos y del riesgo asociado a la historia en la que está trabajando.

**¿Qué datos recopilan mi compañía de telefonía y mi proveedor de servicios de Internet?**

El periodista debe ser consciente de que las empresas pueden recopilar una cantidad significativa de información sobre los usuarios, incluidos registros de llamadas, historial de navegación y datos de ubicación. Esto puede ponerlos a ellos y a otras personas en riesgo. En este punto podría ser útil enumerar algunos de los datos que podrían recopilarse, pero esta lista debería ir acompañada de algunas medidas prácticas —como realizar llamadas y enviar mensajes de texto a través de aplicaciones con cifrado de extremo a extremo, como Signal y WhatsApp, en lugar de llamar a través de la red celular—, que el periodista pueda utilizar para protegerse mejor.

**¿Es seguro usar Google?**

La mayoría de las empresas grandes de tecnología tienen sistemas de seguridad sólidos que protegen a los usuarios de actores estatales y otras personas que puedan intentar acceder a sus datos. Para la mayoría de personas, las grandes empresas de tecnología son una buena opción. Es importante que el periodista utilice la evaluación de riesgos para analizar quién podría querer acceder a sus datos, qué cantidad de datos (incluidos los metadatos) almacena esa empresa y si la empresa de tecnología entregará esos datos. Pueden verificar esto revisando los informes anuales de transparencia publicados por las empresas, así como realizando una búsqueda en Internet con el nombre de la empresa y palabras clave, como el nombre de su país, «citación judicial» y «datos de usuario». Como regla general, es mejor evitar el uso de servicios en línea que estén estrechamente vinculados a un país que pudiera ser una amenaza para un periodista. Por ejemplo, los periodistas que cubren temas delicados relacionados con un gobierno deben evitar utilizar empresas con sede en ese país para su trabajo, especialmente si se sabe que esas empresas recopilan una gran cantidad de datos. (Las excepciones podrían incluir servicios como Signal, que están diseñados específicamente para recopilar la menor cantidad de datos posible). Ningún servicio es completamente seguro, solo hay opciones más seguras según el tema sobre el que esté informando el periodista.

**¿Qué VPN debo usar?**

El instructor debe consultar la sección [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital) del inicio del capítulo, para obtener detalles sobre las VPN y los aspectos que se deben considerar al elegir una. Es importante que los periodistas comprendan por qué necesitan una VPN y de qué los protege antes de tomar una decisión.

**Cuando borro mi información en línea, ¿realmente desaparece?**

Para obtener información detallada sobre cómo borrar contenido en línea, consulte el capítulo siete de esta guía. Una vez que los datos están en línea, es casi imposible garantizar que se eliminen por completo. Esto se debe a que los datos:

- A veces se almacenan en cuentas de familiares, amigos, colegas y fuentes.
- Se mantienen en los servidores de las empresas y pueden ser consultados por ellas, por _hackers_ y gobiernos, si se solicita legalmente. Cada empresa tiene sus propias políticas sobre el tiempo durante el que conservan los datos. Estas pueden consultarse en los términos y condiciones que se encuentran en el sitio web de la empresa.
- Se almacenan en servicios de archivo, como la Wayback Machine de archive.org. Puede solicitar que se eliminen sus datos visitando la página y siguiendo los pasos para la eliminación de datos. Es posible que atiendan o no su solicitud.
- Son captados mediante capturas de pantalla o grabaciones realizadas por terceros.

</div>

<div class="outcomes">

## Resultados del aprendizaje

Al final de la sesión los periodistas:

- Entenderán cómo circula la información en Internet.
- Serán capaces de tomar decisiones informadas sobre qué servicios en línea utilizar según su propio perfil de riesgo. Esto podría incluir saber qué hacen las empresas con sus datos y cómo los almacenan, comprender las jurisdicciones en las que se encuentran los servicios y qué datos pueden solicitar las autoridades.
- Tendrán una comprensión más profunda sobre quién tiene acceso a sus datos en línea y cómo se obtienen.
- Conocerán diferentes tipos de herramientas que pueden utilizar para estar más seguros al realizar búsquedas en línea, incluidos informes de transparencia y VPN

</div>

<div class="tools">

## Plantillas y herramientas

Las siguientes plantillas y herramientas pueden ser útiles para impartir esta sesión:

- Reportes anuales de transparencia publicados por empresas de tecnología como Facebook, Google, y X.
- [Privacy Badger](https://privacybadger.org/)
- [El navegador Tor](https://www.torproject.org/download/) por Tor
- Guía para saber qué tipo de VPN escoger y cómo seleccionar una o más. Revise la sección [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital) para más información.
- [Plantilla de evaluación de riesgos](/digital-risk-assessment-template/).

</div>

<div class="resources">

## Recursos

Los siguientes recursos pueden ser útiles para impartir esta sesión:

[El mejor servicio de VPN](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/) por NYT Wirecutter

[Cómo elegir la VPN adecuada para usted](https://ssd.eff.org/es/module/escogiendo-el-vpn-apropiado-para-usted) por la Fundación Electronic Frontier

[¿Debería usar una VPN?](https://www.consumerreports.org/electronics-computers/vpn-services/should-you-use-a-vpn-a5562069524/) por Consumer Reports

[Una prueba de VPN revela prácticas deficientes en materia de privacidad y seguridad, así como afirmaciones exageradas](https://www.consumerreports.org/vpn-services/vpn-testing-poor-privacy-security-hyperbolic-claims-a1103787639/) por Consumer Reports

[Amenazas a las comunicaciones por satélite](https://satellitesafety.openinternetproject.org/), por Jon Camfield y el proyecto Open Internet, un recurso de gran valor para los periodistas y otras personas que puedan necesitar utilizar Internet por satélite como parte de su trabajo
</div>

## Actividades

Las actividades presentadas a continuación están diseñadas para complementar esta sesión de capacitación sobre investigaciones en Internet más seguras. Los instructores deben sentirse libres de usar sus propias actividades, así como de adaptar los materiales de esta guía para ajustarse mejor a las necesidades de los periodistas a los que están capacitando. El número y tipo de actividades seleccionadas dependerán del nivel de conocimiento del instructor, así como del tiempo que disponga para dedicar a los participantes. Para quienes son nuevos en formación sobre seguridad digital, no olviden consultar la sección [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital) para obtener orientación sobre las mejores prácticas.

### Primeros pasos

#### Hablemos de cómo investigamos

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|------------------------------------------------------------------------------------------|------------------|--------------------|--------------------------------------------|
| Compartir experiencias sobre el desarrollo de investigaciones en línea. Los periodistas empiezan a reflexionar sobre el riesgo y las medidas para reducirlo. | 30 - 40 minutos | Bajo | Pizarra blanca o rotafolio, marcadores para pizarra |

</div>

Tenga en cuenta que no todos los periodistas se sentirán cómodos hablando sobre cómo realizan sus investigaciones en línea.

Es posible que los periodistas no estén familiarizados con lo que incluyen los datos en línea, por lo que puede ser útil darles una definición antes de realizar el ejercicio.

❶ **Paso uno**

- Escriba las siguientes afirmaciones en la pizarra y pida a los periodistas que las lean:
  - Realizo investigaciones para mi trabajo en mis dispositivos personales
  - Siempre realizo una evaluación de riesgos antes de comenzar a investigar una historia
  - Tengo dudas sobre quién recopila mis datos en línea
  - Confío en los servicios en línea que utilizo y sé qué hacen con mis datos
  - Me he dado cuenta de que mis datos en línea podrían estar en riesgo luego de un tiempo de haber comenzado a investigar en línea
- Pida a los periodistas que comenten las afirmaciones con la persona que tienen al lado.
- Facilite un debate sobre las preguntas, anotando en la pizarra las experiencias comunes.

❷ **Paso dos**

- Haga que los periodistas empiecen a reflexionar sobre las cosas que podrían hacer para estar más seguros en línea, planteándoles las siguientes preguntas:
  - ¿Qué necesita saber para realizar investigaciones en Internet de manera más segura?
  - ¿Hay algún reportaje que considere más riesgoso que otros? De ser así, ¿qué puede hacer para protegerse?
  - ¿Qué tan cómodo se siente hablando con su editor sobre los riesgos en línea?
  - ¿Sería útil realizar una evaluación de riesgos? De ser así, ¿cómo?

### Desarrollo del conocimiento

#### I. Cómo funciona Internet

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|------------------------------------------------------------------------------------------|------------------|--------------------|------------------------------------------------------------|
| Los periodistas aprenden cómo se transmite la información en Internet y cómo esto hace que sus datos sean vulnerables | 30 - 40 minutos | Medio | Pizarra o rotafolio, lapiceros, hoja de papel tamaño A3 |

</div>

_Nota para el instructor: las mejores prácticas para esta actividad pueden encontrarse en la sección_ [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital)_, ubicada al inicio de este capítulo._

_El objetivo de esta actividad es ofrecer a los periodistas una breve descripción general sobre cómo circula la información por Internet, para que puedan comprender mejor quién puede acceder a sus datos. Esta información les servirá para los ejercicios posteriores que realizarán durante la sesión de hoy._

_Sería útil explicar a los periodistas algunos términos clave, como «proveedor de servicios de Internet» (ISP) y «dirección de Protocolo de Internet» (IP). Estas definiciones se pueden encontrar en la sección_ [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital)_, ubicada al inicio de este capítulo._

❶ **Paso uno**

- Pida a los periodistas que presenten algunas ideas sobre cómo circula la información por Internet. Anímelos a pensar sobre cómo se conectan a Internet desde su celular o desde casa.
- Usando sus respuestas como punto de partida, ilustre cómo se envía la información a través de Internet. Puede hacerlo dibujando en la pizarra, utilizando una ilustración ya lista o mostrando un video.

❷ **Paso dos**

- Haga las siguientes preguntas a los periodistas:
  - ¿Qué aprendió que le haya sorprendido?
  - ¿Cuáles son los puntos de vulnerabilidad a medida que su información circula por Internet?
  - ¿Qué le preocupa?

#### II. ¿Quién puede acceder a mis datos en línea?

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|--------------------|-----------------------------------------------|
| Los trabajadores de medios de comunicación comprenden mejor qué datos recopilan sobre ellos los servicios en línea. Los periodistas pueden tomar decisiones más informadas sobre qué servicios en línea utilizar, según su propio perfil de riesgo. | 60 minutos | Medio | Pizarra o rotafolio, lapiceros, hoja de papel tamaño A3 |

</div>

_Nota para el instructor: las mejores prácticas para esta actividad pueden encontrarse en la sección_ [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital)_, ubicada al inicio de este capítulo. Los instructores deben investigar con anticipación qué datos recopilan las empresas sobre los usuarios según su contexto local y utilizar algunos estudios de casos sobre datos._

❶ **Paso uno**

- Los periodistas trabajan en pequeños grupos para anotar en la hoja de papel A3 qué datos creen que las empresas recopilan sobre ellos. Deben enfocarse en los proveedores de servicios telefónicos, los proveedores de servicios de Internet y las empresas de tecnología reconocidas.
- A continuación, los periodistas se reúnen para discutir qué datos creen que se están recolectando. El instructor puede anotar sus sugerencias en la pizarra.

❷ **Paso dos**

- Guíe a los periodistas sobre cuáles son los datos generales que recopilan estas empresas. Estos pueden incluir datos de registro, datos de ubicación, direcciones IP y, posiblemente, contenido de los mensajes. Presente los datos en la pizarra y compárelos con los que el periodista sugirió al inicio de la actividad. ¿Hay alguna coincidencia?
- Recalque que esta es solo una visión general del tipo de datos que se recopilan. Destaque que es importante revisar los términos y condiciones de las empresas, así como las leyes locales, para averiguar exactamente qué datos se recopilan.
- El instructor puede utilizar un caso de estudio local para mostrar a los periodistas cómo las empresas y/o los gobiernos recopilan datos. El caso de estudio debe resaltar qué datos se recopilaron, quién tuvo acceso a ellos y qué leyes permitieron su obtención. Se puede facilitar un debate sobre cómo esto forma parte de la evaluación de riesgos del periodista.

❸ **Paso tres**

- Describa las mejores prácticas que los periodistas pueden seguir al decidir qué servicios utilizar. Esto puede incluir:
  - Investigar las empresas antes de registrarse por primera vez a uno de sus servicios, averiguar quiénes son sus propietarios, dónde tienen su sede y dónde se encuentran sus servidores, y analizar si esto representa un riesgo para el periodista en particular.
  - Leer los informes de transparencia de las empresas.
  - Saber si el servicio que están utilizando almacena sus datos de forma cifrada.
  - Comprender las leyes de su país sobre por cuánto tiempo una empresa puede almacenar sus datos y si el gobierno está obteniendo esa información de manera legal o ilegal.
  - Ayudar a los periodistas a entender quién podría tenerlos como objetivos de ataques por su información y tomar una decisión sobre qué servicios en línea utilizar con base en eso.
  - Destacar que esta es solo una de las formas en que las personas obtienen datos y que existen otras, como el _hackeo_ de cuentas por fuerza bruta, el _malware_ (incluido el _spyware_) y el acceso físico a los dispositivos.

❹ **Paso cuatro**

- Concluya la sesión con las siguientes preguntas:
  - ¿Qué aprendió que le haya sorprendido?
  - ¿Qué tan informado se siente ahora al momento de elegir servicios en línea?
  - ¿Qué más le gustaría saber?

#### III. Buenas prácticas para realizar búsquedas seguras en Internet

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|------------------------------------------------------------------------------------------|------------|--------------------|--------------------------------------------------------------------------|
| Los periodistas aprenden qué medidas concretas pueden tomar para proteger su investigación en Internet | 60 minutos | Medio a avanzado | Pizarra o rotafolio, marcadores para pizarra, proyector y computadora portátil |

</div>

_Nota para el instructor: las mejores prácticas para esta actividad pueden encontrarse en la sección_ [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital)_, ubicada al inicio de este capítulo._

❶ **Paso uno**

- Pregunte a los periodistas sobre situaciones en las que les haya preocupado que otros pudieran rastrear su actividad en línea. Algunas situaciones comunes pueden ser:

  - Visitar sitios web con contenido ilegal para realizar investigaciones
  - Descargar documentos de páginas web de gobiernos y empresas
  - Visitar salas de chat, foros o sitios similares

- Explique a los periodistas las mejores prácticas para realizar investigaciones seguras en Internet. Encontrará orientación al respecto al principio de este capítulo. El instructor puede considerar lo siguiente:
  - Asegurarse de que las páginas que visitan estén cifradas
  - Usar un bloqueador de anuncios
  - Trabajar desde una computadora separada
  - Usar una VPN
    - Qué es una VPN
    - Contra qué protege y no protege una VPN
    - Elegir una VPN que no rastree el historial de navegación
    - Que funcione en el país en el que se utilizará
    - Que el periodista pueda decidir si tener una VPN con sede en su país representa un riesgo para él
    - Que el periodista comprenda la legislación local sobre el uso de VPN.

❷ **Paso dos**

- Realice una encuesta rápida entre los participantes para ver quién ha usado una VPN y quién no.
- Dígales a los periodistas que les va a mostrar cómo configurar y usar una VPN.
- Con una computadora portátil y un proyector, descargue la VPN que quiera usar. Una buena opción sería TunnelBear o Mullvad, ambas con un excelente historial en materia de privacidad y seguridad.
- Guíe a los periodistas paso a paso en el uso de la VPN y responda cualquier pregunta que puedan tener.

## Plan de seguridad personal

### Realización de la evaluación de riesgos

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Recursos** |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|--------------------------------------------------------------------------|
| Los periodistas analizan los riesgos individuales y los riesgos asociados a un reportaje en particular cuando hacen una investigación en línea. Los periodistas son capaces de pensar en medidas para mitigar esos riesgos. | 20 - 30 minutos | [Plantilla de evaluación de riesgos](/digital-risk-assessment-template) |

</div>

Esta sección debería ayudar a los periodistas a comprender mejor los riesgos a los que se enfrentan y a reflexionar sobre medidas concretas para mitigar esos riesgos.

❶ **Paso uno**

- Dígales a los periodistas que van a trabajar de forma individual para completar su sección de la evaluación de riesgos titulada «Investigaciones en Internet más seguras».
- Los periodistas deben trabajar en responder las preguntas y proponer medidas concretas para mitigar los riesgos.
- Se les debe brindar apoyo en caso de que tengan preguntas, dudas o parezca que necesitan ayuda adicional.

❷ **Paso dos**

- Ayude a los periodistas a reflexionar sobre el proceso haciéndoles las siguientes preguntas:
  - ¿Qué información han aprendido en la sesión de hoy que les ha ayudado a tomar decisiones más informadas sobre realizar investigaciones en Internet más seguras?
  - ¿Qué más creen que deberían aprender para estar más seguros en línea?

