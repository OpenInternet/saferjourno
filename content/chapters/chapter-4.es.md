+++

type = "report"
title = "Chapter 4: Safer online research"
layout = "single"
weight = 5
toc = true
translation-review-pending = true
+++

## Introducción

A menudo, los periodistas no tienen claro quién vigila su actividad en Internet y cómo los datos que se recogen pueden utilizarse contra ellos y sus fuentes. Este capítulo está diseñado para ayudarles a entender quién puede acceder a su información y proporcionarles medidas concretas que pueden tomar para reducir este riesgo.

Este capítulo tratará sobre:

- El riesgo individual en la investigación en línea
- Cómo se mueve la información en Internet
- Quién recopila datos en línea y cómo pueden utilizarse contra los medios de comunicación.
- Diferentes formas de obtener los datos en línea de un periodista.
- Buenas prácticas para llevar a cabo una investigación en línea más segura

## ¿Primera formación de periodistas?

Puede ser útil tener en cuenta lo siguiente:

- Una vez que los periodistas tienen una idea para un reportaje, empiezan a investigar en Internet y, a menudo, no han establecido prácticas de seguridad digital. Los periodistas no siempre realizarán una evaluación de riesgos antes de comenzar la investigación de una historia.
- A menudo, los periodistas no tienen claro quién puede rastrear su actividad en línea y qué datos se recopilan sobre ellos.Los formadores pueden utilizar estudios de casos locales para mostrar cómo las empresas y los gobiernos obtienen datos sobre las personas.
- Algunas historias pueden volverse más arriesgadas a medida que evolucionan, dejando a los periodistas y a sus fuentes vulnerables a intrusiones o ataques digitales. Por este motivo, es importante que el periodista revise la evaluación de riesgos en todo momento.
- Los periodistas suelen tener poco tiempo y no podrán dedicarlo a probar nuevas herramientas, sobre todo si son demasiado técnicas.
- Es habitual que los periodistas utilicen herramientas en línea porque les han dicho que son más seguras sin entender por qué lo son; esto puede crear una falsa sensación de seguridad.

## ¿Primera formación en seguridad digital?

Esta sección cubre las mejores prácticas que se pueden utilizar al enseñar las actividades de este capítulo. Para más información, consulta la sección [recursos](#recursos) de este capítulo.

Buenas prácticas generales

- Realiza una evaluación de riesgos antes de iniciar cualquier investigación en línea. Pida a los periodistas que identifiquen si van a visitar sitios web que puedan suponer un riesgo para su seguridad, como sitios web gestionados por organizaciones criminales, o en los que quieran mantener su identidad oculta por otras razones, por ejemplo cuando visitan los sitios de empresas que podrían estar investigando. Pregúnteles qué es lo que les preocupa en concreto (que el sitio acceda a su dispositivo, que sepa demasiado sobre ellos, etc.). Cada riesgo requiere una mitigación diferente, pero recuerda siempre a los participantes que mantengan actualizado su navegador web (normalmente puedes comprobarlo en la casilla "Acerca de" del navegador). Algunos sitios web pueden contener contenido malicioso que intente aprovecharse de los agujeros de seguridad de los navegadores. Esos agujeros de seguridad suelen parchearse con las actualizaciones de software, por lo que mantener actualizado el navegador es una de las mejores cosas que puede hacer por su seguridad.
- Cuando visite un sitio web, asegúrese de que está cifrado o de que utiliza HTTPS.
  - En el pasado, una minoría de las conexiones a sitios web estaban cifradas. Hoy en día, casi todas las conexiones con un sitio de confianza están cifradas. La mayoría de los navegadores muestran una advertencia si intenta conectarse a un sitio que no utiliza HTTPS. Puede aparecer en forma de advertencia junto a la barra de direcciones.
  - Cuando tu conexión con un sitio está cifrada, los proveedores de servicios de Internet y otros pueden **saber que estás en la página pero no lo que estás haciendo allí**. Por ejemplo, pueden ver que estás conectado a tu proveedor de correo electrónico, pero no podrán leer tus mensajes. Podrían saber que estás en Wikipedia, pero no qué artículos estás leyendo, pero sí podrían averiguar aproximadamente cuánto tiempo has pasado en el sitio y cuántos datos has transferido desde él.
- HTTPS impide que tu proveedor de servicios de Internet, el hotel o la cafetería donde te conectas al WiFi o tu proveedor de telefonía móvil descubran el contenido de las páginas por las que navegas, las contraseñas que tecleas y los correos electrónicos o documentos de Drive a los que accedes. No impide que el propio sitio web te rastree; para eso necesitamos otras protecciones, que se describen a continuación.
- Los propietarios de sitios web pueden ver qué direcciones IP visitan su sitio web. A cada dispositivo conectado a internet se le asigna un número único conocido como dirección IP (Internet Protocol). Este número lo asigna su proveedor de servicios de internet, la empresa que le proporciona internet.
  - Hay varias cosas que alguien podría averiguar basándose en su dirección IP. Tu dirección IP podría revelar tu ubicación aproximada, como tu ciudad. En el caso de organizaciones más grandes, como una redacción corporativa, la dirección IP podría utilizarse incluso para identificar a la organización concreta, ya que los bloques de oficinas o las grandes organizaciones podrían utilizar rangos de IP fijos o bien conocidos.
  - Su proveedor de servicios de Internet, y por extensión el gobiernont, podría averiguar a qué _suscriptor_ pertenece cada dirección IP. Un suscriptor puede ser un individuo, o una entidad como una pequeña oficina o cafetería.
  - El rastreo de la dirección IP podría ser un problema para los periodistas que no quieren que el propietario del sitio web sepa que han estado mirando información en su sitio. Si un periodista quiere ocultar su dirección IP de un sitio web, debe utilizar una Red Privada Virtual (VPN). Para más información sobre este modelo de riesgo específico y sobre las VPN, consulte la sección siguiente.
- Además de las direcciones IP, los propietarios de sitios web también pueden ver datos básicos sobre un sistema, como la resolución de su pantalla, la versión del software o las fuentes que tiene cargadas. Esta práctica, denominada huella digital del navegador, podría utilizarse para identificar máquinas pertenecientes a organizaciones concretas o incluso a usuarios individuales. Varios navegadores web están implementando ahora protecciones anti-huella digital, con el Navegador Mullvad y el Navegador Tor (este último descrito con más detalle más adelante) ofreciendo algunas de las más avanzadas.
- Los propietarios de sitios web también pueden utilizar cookies para rastrear a los usuarios, ver con qué frecuencia visitan un sitio web y, potencialmente, obtener información sobre su actividad en la web. Cuando enseñes seguridad digital, puedes utilizar el ejemplo del remarketing (cuando ves un producto en un sitio web y después ves anuncios sobre él) para explicar cómo las cookies de rastreo pueden utilizarse para crear un perfil tuyo y averiguar información sobre ti. La forma más fácil de mitigar las cookies de seguimiento es navegar en modo privado/de incógnito, que elimina dichas cookies cuando el usuario cierra la ventana.
- Anime a los periodistas a instalar un bloqueador de anuncios de buena reputación como [uBlock Origin](https://ublockorigin.com/) para protegerse contra el malware que se distribuye a través de los anuncios en línea. Esto puede no ser una opción para ellos si están trabajando en una sala de redacción que no permite bloqueadores de anuncios o extensiones del navegador.
- Con la excepción de una extensión de bloqueo de anuncios y la extensión de autocompletar de tu gestor de contraseñas, lo mejor es instalar el menor número posible de extensiones en el mismo navegador que utilizas para trabajos delicados o confidenciales. Esto se debe a que, a menudo, las extensiones del navegador pueden ver el contenido de todas las páginas web por las que navegas; si la extensión se viera comprometida o se vendiera, sus autores podrían robar tu información. Si necesitas instalar extensiones para trabajar, es mejor que lo hagas en un navegador distinto que no utilices para trabajos o inicios de sesión confidenciales: una extensión comprometida o maliciosa normalmente sólo podrá extraer datos del navegador en el que esté instalada y habilitada.
- Evite utilizar ordenadores públicos, incluso en actos de prensa. Estos ordenadores pueden estar infectados con malware o spyware, o rastrear ampliamente a los usuarios de otras formas, y podrían acceder a tu cuenta incluso si sigues las mejores prácticas de seguridad. Si es absolutamente necesario que utilices un ordenador público y te sientes cómodo con los riesgos que conlleva, inicia sesión a través de una nueva ventana privada del navegador (que te desconecta automáticamente y borra el historial al cerrarla), cambia tu contraseña y haz clic en "cerrar todas las sesiones" cuando vuelvas a una máquina en la que confíes. (Si has iniciado sesión mediante un código QR y una clave almacenada en tu smartphone, no hace falta que cambies o borres esa clave después. Esto se debe a que el ordenador nunca "ve" la parte privada de tu clave, que sólo está almacenada en tu smartphone. Aun así, deberías utilizar la función "cerrar sesión" en tu smartphone o en un equipo de confianza una vez que hayas terminado, por si acaso).
- Considera la posibilidad de utilizar un ordenador distinto para las investigaciones confidenciales. Esto ayudará a compartimentar los datos de modo que, si el dispositivo se infecta, el atacante tendrá un acceso limitado al contenido.
- Los periodistas que investiguen sobre grupos en línea y necesiten registrarse en foros o salas de chat deben crear una nueva dirección de correo electrónico específica para ello. La dirección de correo electrónico no debe contener datos personales que puedan identificar a los periodistas y, al registrar la cuenta, el periodista no debe vincularla a ninguno de sus datos personales, por ejemplo, su número de teléfono. Se recomienda que el periodista pida ayuda a un profesional de la seguridad digital.
- Los periodistas que lleven a cabo investigaciones muy delicadas pueden utilizar el [Navegador Tor](https://www.torproject.org/download/). Se recomienda que busquen la orientación de un experto en seguridad digital antes de hacerlo. También deben conocer la legislación de su país sobre el uso de Tor.

Datos y empresas

- Los proveedores de servicios de Internet (ISP), la empresa que proporciona cobertura de Internet para su hogar u oficina, recopila una cantidad significativa de datos en línea, incluyendo el historial de navegación y la información de localización. Las empresas de telecomunicaciones proporcionan a los usuarios datos de telefonía móvil y servicio de Internet. También recopilan gran cantidad de datos sobre los usuarios, como registros telefónicos, mensajes SMS, datos de localización e historial de navegación por internet. El tiempo que conservan estos datos y con quién los comparten depende de la legislación de cada país. Para research this, carry out a keyword search using the name of the country and terms, such as data retention, telecommunications laws, and customer data.
- Las empresas tecnológicas también conservan una cantidad significativa de datos en línea sobre los usuarios, incluidos nombres de usuario, mensajes directos, documentos, fotos y mucho más. Estos datos se conservan de acuerdo con los términos y condiciones de la empresa, que pueden consultarse en su sitio web. Las empresas tecnológicas reciben peticiones de los gobiernos para acceder a los datos de los usuarios que pueden cumplir o no. Para comprobarlo, los periodistas deben consultar los informes anuales de transparencia publicados por las principales empresas tecnológicas. Se pueden encontrar en sus sitios web o realizando una búsqueda en línea utilizando el nombre de la empresa más la palabra clave, informe de transparencia.
- Los sitios web recopilan datos sobre las personas que los visitan, incluida la dirección IP, que revela la ubicación aproximada, detalles sobre la marca del dispositivo que visita el sitio, incluido el sistema operativo y la zona horaria. Para protegerse mejor contra esto, utilice una VPN y un navegador como Mullvad Browser, que protege contra el fingerprinting.

Redes Privadas Virtuales (VPN)

- Una VPN es un túnel cifrado que conecta su dispositivo a un servicio en línea. Cuando la utilice, los servicios en línea a los que acceda verán la dirección IP de su VPN en lugar de la suya propia. Su ISP verá que está utilizando una VPN, pero no sabrá a qué está accediendo. Los servicios de VPN suelen ofrecer servidores en todo el mundo; usted podría navegar desde un país mientras finge estar basado en otro.
- Esto es útil para los periodistas que quieren evitar que su ISP rastree su historial de navegación, para ocultar una dirección IP al visitar sitios web o para acceder a páginas bloqueadas y restringidas. Una VPN no funcionará en situaciones en las que el gobierno cierre internet.
- Una VPN es como cualquier otro servicio en línea y puede recopilar una cantidad significativa de datos sobre sus usuarios. Revise los términos y condiciones de cada VPN para ver qué datos se recopilan, dónde se almacenan, de qué forma se almacenan y si esos datos se comparten con los gobiernos.
- En algunos países, las VPN son ilegales y utilizar una o tenerla instalada en un dispositivo puede poner en peligro al periodista. En esos países, los gobiernos pueden haber emitido VPNs aprobadas por el gobierno que pueden ser utilizadas. Éstas no son seguras y recopilarán datos personales de los usuarios, incluido su historial de navegación.
- Hay una amplia gama de VPN disponibles. Recomendamos [este excelente artículo de Wirecutter](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/) sobre cómo elegir la VPN que mejor se adapte a ti. A la hora de elegir una VPN es importante tener en cuenta lo siguiente:
  - Elegir una VPN que no registre el historial de navegación del usuario. Esta información podría compartirse con los gobiernos. Sin embargo, ten en cuenta que algunas VPN han mentido sobre sus capacidades o promesas de privacidad.
  - Averigüe quién es el propietario de la empresa VPN, dónde tiene su sede y dónde se encuentran sus servidores. Esta información se puede encontrar en el sitio web de la VPN que desea utilizar. Para los periodistas que se enfrentan a amenazas de un gobierno, lo mejor es elegir una VPN que no esté ubicada en su país ni en ningún país que tenga relaciones estrechas con ese gobierno. Esto se debe a que un proveedor de VPN podría compartir datos con un gobierno.
  - Las VPN gratuitas a menudo pueden contener malware, mantener registros extensos o revender tus datos de navegación o ancho de banda. Habla con otras personas sobre el terreno o con organizaciones de derechos digitales como Access Now para ver qué VPN utilizan.
  - ¿Funciona la VPN en el país en el que quieres utilizarla o ya ha sido bloqueada por el gobierno? Asegúrate de que tienes varias opciones de VPN disponibles en caso de que una deje de funcionar.
- Hay casos en los que no quieres que el propietario de un sitio web sepa que lo estás visitando, por ejemplo, cuando estás investigando y descargando informes de empresas multinacionales o gobiernos. Aunque es relativamente raro, los registros de direcciones IP han [alertado a empresas](https://web.archive.org/web/20211021091609/https://twitter.com/runasand/status/831266832678010880) del hecho de que son objeto de una investigación periodística. Las VPN serían de gran ayuda en este sentido. Como se ha indicado anteriormente, es una buena idea combinarlas con un navegador resistente a las huellas dactilares (como el Navegador Mullvad) o utilizar el Navegador Tor cuando se lleven a cabo investigaciones delicadas.

## Completar la evaluación de riesgos

Al hablar de la evaluación de riesgos y el plan de seguridad personal puede ser útil tocar lo siguiente:

- Los periodistas tienen muchas preguntas sobre qué servicio online es más seguro utilizar y a menudo buscan una recomendación de la herramienta más segura. No siempre es fácil dar esta respuesta porque cada periodista se enfrenta a riesgos únicos.
- También es posible que los periodistas utilicen herramientas en línea porque les han dicho que son más seguras, pero no entienden por qué. Esto puede llevar a que los servicios en línea se utilicen de forma incorrecta o en contextos que exponen a los periodistas a un mayor nivel de riesgo.
- Los El formador debe ayudar al periodista a pensar en quién estaría interesado en obtener sus datos de navegación y cuál es la capacidad tecnológica, legal y financiera de esas personas. Los periodistas deben comprender que se enfrentan a riesgos en función del país en el que vivan, de las amenazas que hayan recibido anteriormente y del tema de los reportajes que cubran.

<div class="faq">

## Preguntas frecuentes

A continuación figuran algunas preguntas habituales que hacen los periodistas sobre la seguridad de las cuentas. Puede ser útil tener las respuestas preparadas de antemano.

**¿Quién puede ver mi actividad en Internet?

Explícales que, cuando los datos circulan por Internet, se recogen en varios puntos, como los proveedores de servicios de Internet y las empresas tecnológicas. Se puede acceder a esta información a nivel de la empresa y también puede ser citada por un gobierno. Conocer bien el contexto local ayudará al formador a responder a esta pregunta. Por ejemplo, ¿cuál es la legislación sobre retención de datos en las empresas? ¿Necesita la policía una orden judicial para acceder a los datos? ¿Qué probabilidades hay de que las empresas tecnológicas respondan a una petición de los funcionarios del gobierno para que entreguen datos? Todas estas preguntas pueden ser muy importantes para los periodistas, sobre todo para los que están empezando a navegar por este espacio. Explique que quién recopila sus datos puede o no ser un problema para el periodista en función de sus propios riesgos y del riesgo asociado a la historia en la que está trabajando.

**¿Qué datos recopilan mi compañía telefónica y mi proveedor de Internet?

El periodista debe ser consciente de que las empresas pueden recopilar una cantidad significativa de información sobre los usuarios, incluyendo registros de llamadas, historial de navegación y datos de localización. Esto puede ponerles a ellos y a otros en peligro. En este punto puede ser útil describir algunos de los datos que podrían recopilarse, pero esta lista debe ir seguida de algunas medidas prácticas, como llamar y enviar mensajes de texto a través de aplicaciones cifradas de extremo a extremo, como Signal y WhatsApp, en lugar de llamar a través de su red de telefonía móvil, que el periodista puede utilizar para protegerse mejor.

**¿Es seguro utilizar Google?

La mayoría de las grandes empresas tecnológicas cuentan con un sistema de seguridad sólido que protege a los usuarios de agentes estatales y otros que puedan intentar acceder a sus datos. Para la mayoría de la gente, las grandes empresas tecnológicas son una buena opción. Es importante que el periodista utilice la evaluación de riesgos para pensar en quién puede querer acceder a sus datos, cuántos datos, incluidos los metadatos, almacena esa empresa, y si la empresa tecnológica entregará esos datos. Pueden comprobarlo revisando los informes anuales de transparencia publicados por las empresas, así como realizando una búsqueda en línea utilizando el nombre de la empresa y palabras clave, como el nombre de su país, citación judicial y datos de usuario. Como norma general, es mejor evitar el uso de servicios en línea que estén estrechamente vinculados a un país que pueda suponer una amenaza para un periodista. Por ejemplo, los periodistas que cubren historias delicadas vinculadas a un gobierno deben evitar el uso de empresas con sede en ese país para su trabajo, especialmente si esas empresas son conocidas por recopilar muchos datos. (Las excepciones podrían incluir servicios como Signal, que están específicamente diseñados para recopilar la menor cantidad de datos posible). Ningún servicio es completamente seguro; sólo hay opciones más seguras en función del tema sobre el que informe el periodista.

**¿Qué VPN debo usar?

El formador debe consultar la sección, [¿Formación en seguridad digital por primera vez?](#formación-seguridad-digital-por-primera-vez), al principio del capítulo para más detalles sobre VPNs y cosas a tener en cuenta a la hora de elegir una. Es importante que los periodistas entiendan por qué necesitan una VPN y de qué les protege antes de hacer su elección.

**Cuando borro mi información de Internet, ¿realmente desaparece?

Para más información sobre cómo borrar contenidos online, consulta el capítulo siete de esta guía. Una vez que los datos están en línea, es casi imposible asegurarse de que se han eliminado por completo. Esto se debe a que los datos están:

- A veces se almacenan en las cuentas de familiares, amigos, colegas y fuentes.
- Se almacenan en los servidores de las empresas y la empresa, los piratas informáticos y los gobiernos pueden acceder a ellos si así lo exige la ley. Cada empresa tiene su propia política de conservación de datos. Estas políticas pueden consultarse en los términos y condiciones del sitio web de la empresa.
- Archivados en sitios de archivos de Internet, como Wayback Machine. Son servicios que archivan contenidos de internet. Puede solicitar que se eliminen sus datos visitando el sitio y siguiendo los pasos para la eliminación de datos. Puede que accedan o no a su petición.
- Capturas de pantalla o grabaciones realizadas por terceros.

</div>

<div class="resultados">

## Resultados del aprendizaje

Al final de la sesión los periodistas:

- Comprenderán cómo se mueve la información en Internet
- Serán capaces de tomar decisiones informadas sobre qué servicios en línea utilizar en función de su propio perfil de riesgo. Esto puede incluir saber qué hacen las empresas con sus datos y cómo los utilizan.Cómo los almacenan, conocer las jurisdicciones en las que se basan los servicios y qué datos pueden solicitar las fuerzas de seguridad.
- Saber quién tiene acceso a sus datos en línea y cómo se obtienen.
- Conozcan los distintos tipos de herramientas que pueden utilizar para estar más seguros cuando investigan en línea, incluidos los informes de transparencia, las redes privadas virtuales (VPN), etc.

</div> <div>

<div class="herramientas">

## Plantillas y herramientas

Las siguientes plantillas y herramientas pueden ser útiles para impartir esta sesión:

- Informes anuales de transparencia publicados por empresas tecnológicas, como Facebook, Google y X.
- Privacy Badger](https://privacybadger.org/)
- El navegador Tor](https://www.torproject.org/download/) de Tor
- Orientación sobre qué tipo de VPN elegir y cómo seleccionar una o varias. Ver la sección [¿Formación en seguridad digital por primera vez?](#formación-seguridad-digital-por-primera-vez), para más información.
- Plantilla de evaluación de riesgos](/plantilla-evaluación-de-riesgos-digitales)

</div>

<div class="recursos">

## Recursos

Los siguientes recursos pueden ser útiles para la enseñanza de este capítulo:

[El mejor servicio VPN](https://www.nytimes.com/wirecutter/reviews/best-vpn-service/) por NYT Wirecutter

[Elegir la VPN más adecuada para ti](https://ssd.eff.org/module/choosing-vpn-thats-right-you) de Electronic Frontier Foundation

[¿Deberías usar una VPN?](https://www.consumerreports.org/electronics-computers/vpn-services/should-you-use-a-vpn-a5562069524/) de Consumer Reports

[VPN Testing Reveals Poor Privacy and Security Practices, Hyperbolic Claims](https://www.consumerreports.org/vpn-services/vpn-testing-poor-privacy-security-hyperbolic-claims-a1103787639/) de Consumer Reports
</div>

## Actividades

Las siguientes actividades están diseñadas para acompañar esta sesión de formación sobre investigación en línea más segura. Los formadores deben sentirse libres de utilizar sus propias actividades, así como de adaptar los materiales de esta guía para que se ajusten mejor a las necesidades de los periodistas que están formando. El número y el tipo de actividades seleccionadas dependerán del nivel de conocimientos del formador, así como del tiempo que tenga para dedicar a los participantes. Para quienes se inicien en la formación en seguridad digital, no olviden consultar la sección [¿Formación en seguridad digital por primera vez?](#formación-seguridad-digital-por-primera-vez) para obtener orientación sobre las mejores prácticas.

### Cómo empezar

#### Hablemos de cómo investigamos

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| --------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | ----------------------------------- |
| Compartir experiencias sobre la investigación en línea. Los periodistas empiezan a pensar en el riesgo y en formas de reducirlo. | 30 - 40 minutos | Bajo | Pizarra blanca o rotafolio, Rotuladores de pizarra |

</div> <div>

Tenga en cuenta que no todos los periodistas se sentirán cómodos hablando de cómo llevan a cabo la investigación en línea.

Los periodistas pueden no estar familiarizados con lo que incluyen los datos en línea, puede ser útil proporcionarles una definición antes de llevar a cabo el ejercicio.

❶ **Primer paso**

- Escribe las afirmaciones siguientes en la pizarra y pide a los periodistas que las lean
  - Llevo a cabo investigaciones de trabajo en mis dispositivos personales
  - Siempre hago una evaluación de riesgos antes de empezar a investigar sobre un reportaje
  - Tengo dudas sobre quién recopila mis datos en línea.
  - Confío en los servicios en línea que utilizo y sé lo que hacen con mis datos.
  - Me he dado cuenta de que mis datos en línea pueden estar en peligro un tiempo después de empezar a investigar en línea.
- Pide a los periodistas que comenten las afirmaciones con la persona que tienen al lado.
- Facilita un debate sobre las preguntas, anotando las experiencias comunes en la pizarra.

❷ **Segundo paso**

- Haz que los periodistas empiecen a pensar en lo que podrían hacer para estar más seguros en línea haciéndoles las siguientes preguntas:
  - ¿Qué necesitas saber para llevar a cabo una investigación en Internet más segura?
  - ¿Hay noticias que consideres más arriesgadas que otras? En caso afirmativo, ¿qué puedes hacer para protegerte?
  - ¿Te sientes cómodo hablando con tu editor sobre los riesgos de Internet?
  - ¿Sería útil realizar una evaluación de riesgos? En caso afirmativo, ¿cómo?

### Desarrollo de conocimientos

#### I Cómo funciona Internet

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| -------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | ----------------------------------------------- |
| El periodista aprende cómo se transmite la información en Internet y cómo esto hace que sus datos sean vulnerables | 30 - 40 minutos | Medio | Whipizarra, rotafolio, bolígrafos, hoja de papel A3 |

</div> <div>

Nota para el formador: las mejores prácticas para esta actividad se encuentran en la sección [¿Formación en seguridad digital por primera vez?

El objetivo de esta actividad es dar a los periodistas una breve visión general de cómo se mueve la información en Internet para que puedan entender mejor quién puede acceder a sus datos. Esta información les ayudará en los ejercicios posteriores de la sesión del día._

Los periodistas se beneficiarán de una explicación de vocabulario clave, como proveedor de servicios de Internet (ISP) y dirección de protocolo de Internet (IP). Estas definiciones se pueden encontrar en la sección [¿Formación en seguridad digital por primera vez?

❶ **Primer paso**

- Pide a los periodistas que expongan algunas ideas sobre cómo se mueve la información en Internet. Anímales a pensar en cómo se conectan a internet desde su teléfono o su casa.
- Utilizando sus respuestas como punto de partida ilustra cómo se envía la información utilizando internet. Puedes hacerlo dibujándolo en una pizarra, utilizando una ilustración ya hecha o mostrando un vídeo.

❷ **Segundo paso**

- Haz las siguientes preguntas a los periodistas:
  - ¿Qué has aprendido que te haya sorprendido?
  - Cuáles son los puntos de vulnerabilidad a medida que su información se mueve por internet?
  - ¿Qué les preocupa?

#### II ¿Quién puede acceder a mis datos en línea?

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | ----------------------------------------------- |
| Los trabajadores de los medios de comunicación comprenden mejor qué datos recogen sobre ellos los servicios en línea.<br>Los periodistas son capaces de tomar decisiones mejor informadas sobre qué servicios en línea utilizar en función de su propio perfil de riesgo. | 60 minutos Medio Pizarra, rotafolio, bolígrafos, papel A3

</div> <div>

Nota para el formador: las mejores prácticas para esta actividad se pueden encontrar en la sección, [¿Formación en seguridad digital por primera vez?](#formación-seguridad-digital-por-primera-vez), situada al principio de este capítulo. Antes de esta actividad de formación, los formadores deberían investigar sobre los datos que las empresas recopilan sobre los usuarios en función de su contexto local y utilizar algunos estudios de casos de datos_.

❶ **Primer paso**

- Los periodistas trabajan juntos en pequeños grupos para escribir en la hoja de papel A3 qué datos creen que las empresas recopilan sobre ellos. Deben centrarse en los proveedores de servicios telefónicos y de internet, así como en empresas tecnológicas conocidas.
- A continuación, los periodistas se reúnen para debatir qué datos creen que se recopilan. El formador puede anotar sus sugerencias en la pizarra.

❷ **Segundo paso**

- Guíe a los periodistas a través de los datos generales que recopilan estas empresas. Esto puede incluir datos de registro, datos de localización, dirección IP y posible contenido de los mensajes. Haz un mapa de los datos en la pizarra y compáralos con los datos que el periodista sugirió al principio de la actividad. ¿Se solapan?
- Subraya que esto es sólo una visión general del tipo de datos que se recopilan. Subraye que es importante comprobar los términos y condiciones de las empresas, así como las leyes locales, para averiguar los datos exactos que se recopilan.
- El formador puede utilizar un estudio de caso local para mostrar a los periodistas cómo recopilan datos las empresas y/o los gobiernos. El estudio de caso debe destacar qué datos se recogen, quién accede a ellos y qué leyes permiten obtenerlos. Se puede facilitar un debate sobre cómo esto forma parte del análisis de riesgos del periodista.

❸ **Paso tres**

- Esbozar las mejores prácticas que los periodistas pueden utilizar a la hora de decidir qué servicios utilizar. Esto puede incluir:
  - Antes de suscribirse a un servicio, investigar a las empresas para saber quién es su propietario, dónde tienen su sede y dónde están sus servidores, y analizar si esto supone un riesgo para el periodista individual.
  - Leer los informes de transparencia de las empresas
  - Saber si el servicio que utilizan almacena sus datos de forma encriptada.
  - Conocer la legislación de su país sobre el tiempo que una empresa puede almacenar sus datos y si el gobierno obtiene esa información legal o ilegalmente.
  - Conseguir que los periodistas comprendan quién puede dirigirse a ellos para obtener su información y tomar una decisión sobre qué servicios en línea utilizar basándose en ello.
  - Destacar laque ésta es sólo una de las formas de obtener datos y que hay otras, como el pirateo de cuentas por fuerza bruta, los programas maliciosos, incluidos los programas espía, y el acceso físico a los dispositivos.

❹ **Paso cuatro**

- Concluye la sesión con las siguientes preguntas:
  - ¿Qué has aprendido que te haya sorprendido?
  - Cuánto más informado te sientes ahora para elegir servicios en línea?
  - ¿Qué más le gustaría saber?

#### III Buenas prácticas para realizar investigaciones seguras en línea

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| --------------------------------------------------------------------------------- | ---------- | ------------------ | ---------------------------------------------------------------- |
| Los periodistas aprenden las medidas específicas que pueden tomar para proteger su navegación en línea | 60 minutos | Medio a Avanzado | Pizarra blanca o rotafolio, bolígrafos de pizarra, ordenador portátil y proyector | Instalación

</div> <div>

Nota para el formador: las mejores prácticas para esta actividad se pueden encontrar en la sección, [¿Formación en seguridad digital por primera vez?](#formación-seguridad-digital-por-primera vez), situada al principio de este capítulo.

❶ **Primer paso**

- Pregunta a los periodistas sobre situaciones en las que les haya preocupado que su actividad en línea pueda ser rastreada por otros. Algunas situaciones comunes podrían ser:

  - Visitar sitios web para investigar que tengan contenido ilegal
  - Descargar documentos de sitios web gubernamentales o de empresas.
  - Visitar salas de chat, foros o sitios similares.

- Explica a los periodistas las mejores prácticas para llevar a cabo una investigación en línea segura. Al principio de este capítulo encontrarás orientaciones al respecto. El formador puede pensar en lo siguiente:
  - Asegurarse de que los sitios que visitan están encriptados.
  - Utilizar un bloqueador de anuncios
  - Trabajar desde otro ordenador
  - Utilizar una VPN
    - Qué es una VPN
    - Contra qué protege y contra qué no protege una VPN
    - Elegir una VPN que no rastree el historial de navegación
    - Que funcione en el país en el que se va a utilizar
    - El periodista es capaz de decidir si tener una VPN en su país es un riesgo para él.
    - El periodista conoce la legislación local sobre el uso de VPN.

❷ **Segundo paso**

- Realiza una encuesta rápida entre las personas de la sala para ver quién ha utilizado una VPN y quién no.
- Diles a los periodistas que vas a mostrarles cómo configurar y utilizar una VPN
- Utilizando un ordenador portátil y un proyector, descarga la VPN que quieras utilizar. Una buena opción sería TunnelBear o Mullvad, ambas con un muy buen historial de privacidad y seguridad.
- Guíe a los periodistas en el uso de la VPN y responda a cualquier pregunta que puedan tener.

## Plan de seguridad personal

### Completar la evaluación de riesgos

<div class="table">

| Resultados del aprendizaje | Tiempo | Recursos |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------- |
| Los periodistas reflexionan sobre su riesgo individual y el riesgo asociado a una historia en particular cuando llevan a cabo una investigación en línea.<br>Los periodistas son capaces de pensar en la mitigación de esos riesgos. | 20 - 30 minutos | [Plantilla de evaluación de riesgos](/digital-risk-assessment-template) |

</div> <div>

Esta sección debe ayudar a los periodistas a comprender mejor los riesgos a los que se enfrentan y a pensar en medidas concretas para mitigarlos.

❶ **Primer paso**

- Diga a los periodistas que van a trabajar solos para completar su sección de la evaluación de riesgos titulada investigación en línea más segura.
- Los periodistas deben trabajar en responder las preguntas y proporcionar pasos concretos para mitigar el riesgo.
- Se les debe brindar apoyo en caso de que tengan preguntas, dudas o parezca que necesitan ayuda adicional.

❷ **Segundo paso**

- Ayude a los periodistas a reflexionar sobre el proceso formulando las siguientes preguntas:
  - ¿Qué información has aprendido en la sesión de hoy que te ha ayudado a tomar decisiones más informadas en torno a la realización de una investigación en línea más segura?
  - ¿Qué más crees que necesitas aprender para estar más seguro en línea?

