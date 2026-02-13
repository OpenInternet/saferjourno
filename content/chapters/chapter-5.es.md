+++

type = "report"
title = "Capítulo 5: Protección de materiales"
layout = "single"
weight = 6
toc = true
translation-review-pending = true
+++

## Introducción

Los periodistas manejan una gran cantidad de documentos y datos procedentes de diversas personas, como funcionarios públicos, empresas privadas y fuentes confidenciales, entre otros. Aprender a recibir, almacenar y proteger esa información puede ser clave para mantenerse a sí mismos y a sus fuentes más seguros.

En este capítulo se tratará:

- Pensar en el riesgo individual a la hora de proteger el material
- Las mejores prácticas para hacer copias de seguridad y almacenar datos
- Nociones básicas de cifrado
- Cifrado de documentos, USB, tarjetas SD y unidades externas

## ¿Primera formación de periodistas?

Puede ser útil tener en cuenta lo siguiente:

- Los periodistas recibirán documentos y archivos por correo electrónico, redes sociales y aplicaciones de mensajería.
- Es posible que el periodista no siempre conozca la identidad de la persona que envía la información.
- Los periodistas comparten documentos con otras personas con regularidad y puede que no sepan cuál es la forma más segura de hacerlo. A menudo hablan con sus fuentes en las plataformas que prefieren. Conseguir que las fuentes cambien a métodos de comunicación más seguros es difícil.
- Los periodistas suelen tener un proceso para hacer copias de seguridad de los documentos importantes, pero puede que no siempre sepan si los datos de su teléfono tienen copia de seguridad y cómo (¿hay copias de seguridad automáticas en la nube? ¿Qué aplicaciones se incluyen?).
- Como los periodistas suelen trabajar con plazos ajustados, es posible que no dediquen tiempo a informarse sobre el cifrado. Cuanto más fácil sea el cifrado por defecto o con herramientas integradas en el sistema, mejor.
- A menudo, los periodistas carecen de formación suficiente sobre cómo proteger el material.
- Algunas formas de encriptación pueden ser ilegales en el país en el que trabaja o al que viaja el periodista. Las fuerzas del orden o los tribunales de algunos países también podrían obligar a la gente a entregar contraseñas o claves de descifrado.

## ¿Primera formación en seguridad digital?

Esta sección cubre las mejores prácticas que se pueden utilizar al enseñar las actividades de este capítulo. Para más información, consulta la sección [recursos](#recursos) de este capítulo.

Guía general para la protección de materiales

- Qué materiales protege un periodista y cómo los protege dependerá de lo sensibles que sean y de quién pueda querer acceder a ellos. Si la amenaza es un actor estatal o un adversario experto en piratería informática, es aconsejable encriptar la información. Para más información sobre el cifrado, véase más abajo.
- En la mayoría de las situaciones, los periodistas pueden seguir colaborando y recibiendo y almacenando material a través de los servicios en línea que utilizan normalmente, por ejemplo Google Drive u O365. Deben asegurarse de que esas cuentas tienen activada la autenticación de doble factor (2FA), idealmente a través de llaves de seguridad físicas o passkeys, y de que utilizan contraseñas largas. Véase el capítulo dos para más detalles sobre la seguridad de las cuentas.
- Los periodistas deben ser conscientes de que los servicios en línea que utilizan pueden estar recopilando metadatos sobre los usuarios. Los metadatos son un conjunto de datos que describen otros datos. Por ejemplo, la hora en que se tomó una foto, la marca y el modelo del dispositivo que la tomó y el lugar donde se hizo. Puedes ver muchos de los metadatos que tiene un archivo consultando las propiedades del archivo o más información. Los metadatos pueden proporcionar a los gobiernos y a otras entidades una cantidad sustancial de información que podría utilizarse contra un periodista y su fuente. Al mismo tiempo, pueden ser inmensamente útiles para los periodistas que intentan verificar o comprobar el contenido. Signal y WhatsApp suelen eliminar los metadatos de todas las imágenes que envían. Si necesitas conservar los metadatos, envía la imagen por otro medio, como un archivo adjunto de correo electrónico.
- Si la amenaza es un gobierno, los periodistas deben evitar en gran medida el uso de servicios en línea que hayan sido fundados, tengan su sede o dispongan de servidores en el país vinculado a ese gobierno en particular. Esto se debe a que los datos pueden correr un mayor riesgo de ser accedidos por ese gobierno. Se pueden hacer excepciones para los servicios que utilizan cifrado de extremo a extremo y no recopilan metadatos sobre los usuarios.
- Tener varias copias del mismo material es aconsejable para protegerse mejor contra la pérdida de datos. En el caso de los documentos sensibles, los periodistas deben pensar en hacer copias de seguridad de la información en varias unidades externas, cifrar el contenido de esas unidades y almacenarlas en distintos lugares.
- La tecnología de los discos duros evoluciona constantemente. Las unidades de estado sólido suelen ser más rápidas, pero más caras, mientras que los discos duros son más baratos, pero pueden dañarse más fácilmente si se caen o se manipulan con brusquedad (por ejemplo, durante un viaje). Las unidades de estado sólido también pueden [empezar a perder datos](https://www.tomshardware.com/pc-components/storage/unpowered-ssd-endurance-investigation-finds-severe-data-loss-and-performance-issues-reminds-us-of-the-importance-of-refreshing-backups) cuando están apagadas durante periodos prolongados. Las unidades de estado sólido suelen ser mejores para los datos a los que se accede con regularidad, mientras que los discos duros son mejores para los datos de archivo. Te recomendamos que enciendas y pruebes los discos duros con regularidad.
- Animar a los periodistas a pensar unbout cómo van a proteger sus materiales antes de un reportaje haciendo una evaluación de riesgos digitales. Esto les ayudará a evitar situaciones en las que reciban material sensible y no tengan un plan para protegerlo y almacenarlo.
- Si los periodistas viajan a lugares de alto riesgo donde sus dispositivos podrían ser registrados, lo más seguro sería no guardar ningún dato sensible en el dispositivo (o incluso viajar con un dispositivo totalmente borrado, con sólo las aplicaciones básicas del sistema operativo instaladas). Los periodistas podrían acceder a los datos sensibles a través de servicios basados en la nube abiertos en una ventana privada del navegador. De este modo, aunque les registraran o allanaran su oficina, no quedaría rastro alguno de que han accedido a esos datos sensibles.

Cifrado

- La encriptación es una forma segura de proteger la información para que no pueda ser interceptada y/o accedida por otros a menos que tengan la contraseña.
- Hay varios servicios que encriptan datos, algunos son fáciles de usar y otros requieren práctica.

- Hay diferentes formas de cifrar la unidad interna de un ordenador dependiendo de si es un PC con Windows o un Mac.
  - Activar el cifrado para **Windows** implica activar Bitlocker, disponible para las ediciones Pro de Windows. Puedes leer cómo hacerlo [aquí](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/). Quienes utilicen ediciones Home de Windows pueden activar en su lugar una función llamada [Device Encryption](https://support.microsoft.com/en-us/windows/device-encryption-in-windows-cf7e2b6f-3e70-4882-9532-18633605b7df). Ofrece un nivel similar de cifrado pero menos opciones de configuración, aunque sólo está disponible en determinados dispositivos. Ten en cuenta que el cifrado de dispositivos cargará automáticamente la clave de recuperación en tu cuenta Microsoft, si la utilizaste para iniciar sesión en tu sistema Windows. En teoría, esto significa que un atacante sofisticado que consiguiera entrar en tu cuenta Microsoft online y robara tu dispositivo podría desencriptarlo. BitLocker contiene controles más granulares sobre dónde y cuándo se carga la clave de recuperación.
  - Todos los dispositivos **macOS** modernos cifran sus unidades internas por defecto. Las claves de cifrado se almacenan en un procesador especial dentro del propio ordenador; si alguien retirara la unidad de su máquina, dejaría de estar vinculada a este procesador y los atacantes no podrían descifrar la unidad ni leer su contenido.
    - Como capa adicional de protección, recomendamos a todos los usuarios que activen una función llamada FileVault. En macOS 26, si estás [configurando un nuevo sistema y eliges iniciar sesión con una cuenta de Apple](https://arstechnica.com/gadgets/2025/09/macos-26-tahoe-the-ars-technica-review/), FileVault se activa automáticamente y se realiza una copia de seguridad de tus claves de cifrado en esa cuenta de Apple en la nube. Si estás configurando macOS 26 sin una cuenta antigua o estás configurando una versión antigua de macOS, tendrás que activar manualmente FileVault, por ejemplo en la configuración del sistema.
    - Con FileVault activado, la unidad solo se descifra cuando se introduce la contraseña (en lugar de cuando se enciende el ordenador). Por lo tanto, incluso si un atacante sofisticado consiguiera saltarse las protecciones integradas de macOS en el futuro, no podría descifrar la unidad sin la contraseña. Recomendamos a todos los usuarios de riesgo que activen FileVault. Más información sobre el cifrado de ordenadores Mac [aquí](https://support.apple.com/en-gb/guide/mac-help/mh11785/mac).
- Los usuarios que deseen cifrar unidades externas, USB o tarjetas SD pueden utilizar [Bitlocker](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) en Windows y Utilidad de Discos en [macOS](https://support.apple.com/en-gb/guide/disk-utility/dskutl35612/mac). [VeraCrypt](https://www.veracrypt.fr/) es un reputado software de terceros que sirve para cifrar unidades internas y externas y funciona en Windows, macOS y Linux. Los periodistas que deseen cifrar documentos individuales para almacenarlos en la nube pueden utilizar [Cryptomator](https://cryptomator.org/).
- Las leyes sobre encriptación son diferentes en cada país, por lo que es importante asegurarse de que el periodista conoce la legislación del país en el que vive y de los países a los que viaja.
- Ten en cuenta que, aunque el periodista tenga material encriptado, se le puede pedir legalmente que desencripte la información introduciendo su contraseña si así se lo solicitan las fuerzas de seguridad.

<div class="faq">

## Preguntas frecuentes

A continuación figuran algunas preguntas habituales que hacen los periodistas sobre este tema y preparar las respuestas de antemano puede ser útil.

**¿Cómo puedo compartir documentos de forma más segura con mi equipo?**

Esta es una pregunta muy buena y el tipo de preguntas que los periodistas deberían plantearse sobre la seguridad de los materiales. Puede ser útil hacer que los periodistas reflexionen sobre el riesgo digital asociado al reportaje y explicarles las mejores prácticas y herramientas que pueden utilizar.. En la mayoría de los casos, es una buena idea utilizar las mismas herramientas que se utilizan habitualmente para la colaboración, como Google Drive u O365. Es importante auditar periódicamente con quién se comparten los archivos, eliminar el acceso a las personas que ya no forman parte del proyecto o de la organización, y asegurarse de que todo el mundo en el proyecto utiliza contraseñas largas y únicas, autenticación de dos factores y mantiene sus dispositivos actualizados para reducir el riesgo de que entren en sus cuentas. Si estás trabajando en una investigación especialmente delicada, puede que sea necesario modificar o implementar un conjunto de herramientas especiales en su lugar.

**Si borro un documento de mi dispositivo, ¿podría recuperarse?

Haz que el periodista piense en quién estaría interesado en recuperar documentos de sus dispositivos y en la capacidad tecnológica de ese adversario. Los adversarios avanzados podrían ser capaces de recuperar documentos borrados de unidades sin cifrar, mientras que los adversarios con capacidades forenses aún más sofisticadas podrían intentar recuperar también otros tipos de contenido, aunque esto lleva tiempo, es caro y el éxito no está garantizado. Si a los periodistas les preocupa mucho que gobiernos con muchos recursos puedan acceder a los archivos borrados de sus dispositivos, pueden utilizar un programa especial que borre de forma segura el contenido de una unidad, hacer un restablecimiento de fábrica del dispositivo (que restablecerá las claves de cifrado y hará inaccesibles los contenidos antiguos de la unidad) y, posiblemente, destruir físicamente la unidad.

**¿Es más seguro imprimir mis documentos y guardarlos en casa que almacenarlos en Internet?

Intenta entender qué le preocupa al periodista cuando utiliza la palabra "más seguro". Por ejemplo, ¿le preocupa que la gente obtenga los documentos o le preocupan los programas espía? ¿Quieren mostrar los documentos físicos a otras personas y les preocupa que hagan una foto o una captura de pantalla si reciben una versión digital?
Hable con ellos sobre su modelo de amenaza y evaluación de riesgos: ¿les preocupa que alguien entre en su casa o en su oficina? ¿Les preocupan más los adversarios extranjeros o nacionales? Entre los aspectos que deben tener en cuenta se incluyen: ¿corren riesgo de ser detenidos o arrestados?
Incluso si un periodista imprime documentos para guardarlos, es probable que esos documentos se hayan procesado de otras formas: puede que se hayan recibido por correo electrónico o que una copia de los mismos resida en un servicio en la nube. Por esta razón, en general recomendamos no conservar copias impresas, con la excepción de modelos de amenaza específicos, por ejemplo mostrar un documento a una fuente en la que el periodista podría no confiar y querer asegurarse de que no haga una copia del mismo.

**¿Cómo puedo proteger las secuencias de películas y otros archivos pesados?

Los periodistas que trabajan con archivos pesados se enfrentan a más dificultades a la hora de proteger su material. Esto se debe a que pueden trabajar en lugares con mala conexión a Internet, lo que dificulta la carga en la nube, o a que tienen que cruzar fronteras con material sensible. Es importante que los periodistas piensen en los riesgos que corren y en las opciones que tienen para proteger su material. Para quienes se encuentran en un lugar fijo, la mejor opción es hacer copias de seguridad en varias unidades externas cifradas y almacenarlas en distintos lugares. Consulta la [guía de seguridad digital para cineastas] de la Freedom of the Press Foundation y Field of Vision (https://www.digitalsecurity.film/) si vas a trabajar con muchos datos y archivos de gran tamaño.

</div>

<div class="outcomes">

## Resultados del aprendizaje

Al final de la sesión los periodistas:

- Serán capaces de tomar decisiones con conocimiento de causa sobre las medidas que deben adoptar para proteger sus materiales en función de su propio perfil de riesgo y del perfil de riesgo de determinados reportajes.
- Conocerán los distintos tipos de herramientas que pueden utilizar para proteger sus materiales, incluidos los servicios de cifrado de documentos, USB, tarjetas SD y unidades externas.
- Tener un plan para hacer copias de seguridad y almacenar sus datos.

</div> <div>

<div class="herramientas">

## Plantillas y herramientas

Las siguientes herramientas pueden ser útiles para impartir esta sesión:

- Veracrypt](https://www.veracrypt.fr/code/VeraCrypt/) para cifrar unidades externas, memorias USB y tarjetas SD.
- Cryptomator](https://cryptomator.org/) para cifrar documentos individuales
- Dangerzone](https://dangerzone.rocks/) para convertir archivos sospechosos (documentos que sospechas que pueden contener malware) en PDF seguros.
- Plantilla de copia de seguridad](https://docs.google.com/spreadsheets/d/1F8ZYjnKgKa0phb368_LqjeIZMjapAWAnX6hYL5TgXaA/edit#gid=0)
- Plantilla de evaluación de riesgos](/digital-risk-assessment-template)

</div>

<div class="recursos">

## Recursos

Los siguientes recursos pueden ser útiles para la enseñanza de este capítulo:

[What should I know about encryption?](https://ssd.eff.org/module/what-should-i-know-about-encryption) de la Electronic Frontier Foundation

[Conceptos clave sobre cifrado](https://ssd.eff.org/module/key-concepts-encryption)) por la Electronic Frontier Foundation

[Dangerzone te permite abrir archivos adjuntos de forma segura](https://www.wired.com/story/dangerzone-open-email-attachments-safely/) por Wired

Guías para proteger tus dispositivos [Windows](https://securityplanner.consumerreports.org/tool/encrypt-your-windows-pc), [macOS](https://securityplanner.consumerreports.org/tool/encrypt-your-mac), [iOS](https://securityplanner.consumerreports.org/tool/encrypt-your-iphone) y [Android](https://securityplanner.consumerreports.org/tool/encrypt-your-android-phone) con cifrado, de Consumer Reports.

</div>

## Actividades

Las siguientes actividades están diseñadas para acompañar esta sesión de formación sobre la protección de materiales. Los formadores deben sentirse libres de utilizar sus propias actividades, así como de adaptar los materiales de esta guía para que se ajusten mejor a las necesidades de los periodistas a los que están formando. El número y el tipo de actividades seleccionadas dependerán del nivel de conocimientos del formador, así como del tiempo que tenga para dedicar a los participantes. Para quienes se inicien en la formación en seguridad digital, no olviden revisar la sección [¿Formación en seguridad digital por primera vez?] (#formación-seguridad-digital-por-primera-vez), para obtener orientación sobre las mejores prácticas.

### Para empezar

#### Proteger los materiales: ¿Estás de acuerdo?

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | -------------------------------------------- |
| Los periodistas reflexionan más a fondo sobre los materiales que manejan y empiezan a considerar qué medidas deben tomar para estar más seguros. | 20 - 30 minutos | Bajo | Pizarra blanca, rotafolio, bolígrafos, notas post-it. |

</div> <div>

Esta actividad se ha modificado a partir de la versión original de la guía SaferJourno para formadores de medios de comunicación.

❶ **Primer paso**

- El formador crea una lista de afirmaciones y las coloca en la pared de la sala

  - Ejemplos de afirmaciones podrían ser,
    - Cuanta menos información comparto, más seguro estoy.
    - Mi investigación para las historias no incluye información sensible
    - Es probable que alguien intente acceder a los documentos de mis dispositivos.
    - Mis datos están seguros porque mis dispositivos están protegidos con contraseña.
    - Tengo que proteger mis fuentes en la medida de lo posible.

- A continuación, se pide a los periodistas que lean las afirmaciones y decidan si están de acuerdo o en desacuerdo con la respuesta o si no están seguros.
- Se reúnen en pequeños grupos y cada uno recibe tres paquetes de post-it de colores diferentes. Cada color debe representar una posición del periodista sobre la afirmación. Por ejemplo, el verde representa "de acuerdo", el rojo "en desacuerdo" y el amarillo "no estoy seguro". Cada grupo debe recibir notas adhesivas del mismo color.
- A continuación, el formador invita a los periodistas a que se acerquen y coloquen sus notas debajo de las afirmaciones en la pared. Por ejemplo, un periodista está de acuerdo con la afirmación "Tengo que proteger mi fuente tanto como sea posible" y pega una nota verde debajo.

❷ **Segundo paso**

- El formador invita a los periodistas a formar un semicírculo frente a la pared y les invita a debatir sobre lo que ven.
- El formador puede iniciar el debate destacando algunas tendencias comunes que puedan ver en las notas post-it. Por ejemplo, bajo la afirmación "Tengo que proteger mi fuente tanto como sea posible", puede haber varias notas verdes que muestren que la mayoría de los participantes están de acuerdo con esta afirmación.
- Los periodistas discuten las afirmaciones y el formador debe animarles a empezar a hablar de las medidas que toman o necesitan tomar ahora para mejorar la seguridad de sus materiales. Algunas preguntas habituales podrían ser
  - ¿Qué hace actualmente para proteger a sus fuentes?
  - ¿Cómo recibe normalmente los documentos? ¿Qué le preocupa de la forma en que recibe los documentos?
  - ¿Piensa en la protección de los materiales antes de empezar un reportaje? ¿Qué medidas puede tomar para proteger mejor los documentos?

### Knowledge building

#### I Hablar de copias de seguridad

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| Los periodistas tienen un plan para hacer copias de seguridad y eliminar el contenido de sus dispositivos | Los periodistas discuten las opciones para hacer copias de seguridad de los datos y son capaces de elegir una opción adecuada para ellos mismos en función de su perfil de riesgo | 45 minutos | Medio | Pizarra blanca o rotafolios, bolígrafos de pizarra, diapositivas de PowerPoint preparadas por el formador, hoja de cálculo para hacer copias de seguridad de los datos | Los periodistas discuten las opciones para hacer copias de seguridad de los datos y son capaces de elegir una opción adecuada para ellos mismos en función de su perfil de riesgo.

</div> <div>

Esta actividad se ha modificado a partir del capítulo de Level Up "Cómo proteger su ordenador".

❶ **Primer paso**

- Pregunta a los periodistas cuánto valoran la información almacenada en sus dispositivos. Qué utilidad tiene para sus vidas? Ahora pregúntales cuánto tiempo dedican a organizar y hacer copias de seguridad de este contenido.
- Pregunta a los participantes con qué frecuencia hacen copias de seguridad de sus archivos. Comparte ejemplos de buenas prácticas relacionadas con las copias de seguridad de los datos, como:
  - Guardar la copia de seguridad en un lugar seguro y separado del ordenador.
  - Realizar copias de seguridad de la información con frecuencia y regularidad.
  - Posiblemente encriptar la unidad o el medio de almacenamiento donde se guardarán los datos.

❷ **Segundo paso**

- Comparte la [plantilla de copia de seguridad](https://docs.google.com/spreadsheets/d/1F8ZYjnKgKa0phb368_LqjeIZMjapAWAnX6hYL5TgXaA/edit#gid=0) con el grupo. Explícales que van a trabajar individualmente para completarla con algunos ejemplos generales de datos de los que necesitan hacer una copia de seguridad. Pídeles que se centren también en los datos personales, especialmente en los contenidos que puedan tener almacenados en sus teléfonos. Ten en cuenta que es posible que los periodistas ya estén muy familiarizados con las copias de seguridad de datos, sobre todo si trabajan para redacciones más consolidadas.
- Facilita un debate sobre la hoja de cálculo y su contenido. Algunas de las preguntas que puede plantearse son
  - ¿Hay algún dispositivo nuevo o antiguo del que haya que hacer una copia de seguridad?
  - ¿Hay algún contenido del que se piense en hacer una copia de seguridad pero no se haga?
  - ¿Hay algo especialmente delicado de lo que debas hacer una copia de seguridad?

#### II Cifrar una unidad externa

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------- | -------------------------------------------------------------------- |
| Los periodistas debaten las opciones para hacer copias de seguridad de los datos y son capaces de elegir una opción adecuada para sí mismos en función de su perfil de riesgo. Los periodistas aprenden a hacer copias de seguridad y a cifrar la información en una unidad externa. | 60 minutos Avanzado Pizarra, rotafolio, bolígrafos, diapositivas PPT, ordenador portátil y proyector.

</div> <div>

Nota para el formador: se recomienda realizar una demostración en directo utilizando un ordenador portátil y un proyector. Las mejores prácticas para esta actividad se pueden encontrar en la sección [¿Formación en seguridad digital por primera vez?](#formación-seguridad-digital-por-primera vez), situada al principio de este capítulo. Se trata de una actividad de nivel avanzado y se recomienda que la lleven a cabo formadores experimentados.

❶ **Primer paso**

- Explique que existen varias formas de cifrar una unidad externa. Explique que los usuarios de Mac pueden utilizar la herramienta de cifrado integrada llamada FileVault. Los usuarios de PC con Windows, que tienen cuentas profesionales, pueden usar Bitlocker de Windows y que hay un servicio de terceros que todos pueden usar llamado VeraCrypt.

❷ **Segundo paso**

- Diga a los periodistas que para cifrar la unidad externa tendrán que pensar en una contraseña y utilizarla. Hable sobre la importancia de crear una contraseña segura y utilice este momento como una oportunidad para revisar las buenas prácticas de contraseñas. Subraye que es mejor pensar en esta contraseña de antemano para no tener que pensar en ella cuando esté encriptando. Recuérdales que es imposible descifrar las unidades externas sin una contraseña o (dependiendo del software de cifrado que utilices) un código de recuperación. Por eso, es fundamental que recuerden la contraseña o que la guarden en un lugar seguro.
- Explica que vas a mostrar cómo encriptar datos en un disco externo usando VeraCrypt:
  - Descarga VeraCrypt
  - Conecta el disco externo al ordenador a través del puerto USB.
  - Realiza una copia de seguridad de los datos del disco externo
  - Cifrar la guía externa, siguiendo por ejemplo [esta guía](https://freedom.press/training/encryption-toolkit-media-makers/veracrypt-guide/#encrypting-external-storage-devices-on-veracrypt)

❸ **Paso tres**

- Responder a las preguntas de los periodistas
- Hable sobre la importancia de tener más de una copia de seguridad. Es posible que los periodistas deseen tener varias unidades externas cifradas, así como una copia de seguridad en la nube. Cuántas copias de seguridadque creen y dónde los almacenen dependerá de su perfil de riesgo. Encontrará más información al respecto al principio de este capítulo.
- Habla con los periodistas sobre situaciones en las que, aunque la información esté encriptada, la gente podría acceder a ella. Ayúdales a pensar en cómo proteger mejor la información si se enfrentan a situaciones como las que se enumeran a continuación:
  - Que las fuerzas de seguridad te pidan que desbloquees los dispositivos encriptados y los riesgos legales que surgen si te niegas a hacerlo.
  - Ser amenazado físicamente para que abra sus dispositivos.
- Discute con tus participantes durante cuánto tiempo deben almacenarse los archivos de forma segura. ¿Necesitas mantener ocultos su contenido y existencia sólo antes de publicarlos, o también después? ¿Y cuál debe ser tu política de conservación de datos y cuándo deben borrarse esos archivos? Puede ser útil tratar estos temas también con abogados especializados en medios de comunicación.

#### III Cifrar un documento

<div class="table">

| Resultados del aprendizaje Tiempo Nivel de dificultad Recursos
| --------------------------------------------------------------------- | ---------- | ---------------- | ----------------------------------------------------------------------- |
| Los periodistas aprenden a encriptar un documento y almacenarlo en la nube | 60 minutos | Medio | Pizarra blanca, rotafolio, bolígrafos, notas post-it, ordenador y portátil preparados |

</div> <div>

Nota para el formador: se recomienda realizar una demostración en directo utilizando un ordenador portátil y un proyector. Las mejores prácticas para esta actividad se pueden encontrar en la sección, [¿Formación en seguridad digital por primera vez?](#formación-seguridad-digital-por-primera-vez), situada al principio de este capítulo. Se trata de una actividad de nivel medio y se recomienda que los formadores se sientan cómodos utilizando la herramienta antes de enseñar a utilizarla._

❶ **Primer paso**

- Pida a los periodistas ejemplos generales de documentos individuales o grupos de documentos que les gustaría cifrar. Los ejemplos incluyen información de salud, documentos sensibles que les entregan las fuentes, fotos de su familia.

❷ **Segundo paso**

- Diles a los periodistas que vas a demostrarles cómo encriptar documentos para poder guardarlos de forma fácil y segura en un servicio normal de almacenamiento en la nube, como Google. Explícales de qué tipo de amenazas te puede proteger esto (nadie que pueda acceder de alguna manera a tu cuenta en la nube podrá abrir esos documentos sin contraseña, incluidos los atacantes que entren en la cuenta y el propio Google)
- Explica a los periodistas que para cifrar una carpeta de documentos tendrás que pensar y utilizar una contraseña. Habla de la importancia de crear una contraseña segura, y recomienda utilizar tu gestor de contraseñas para generar una buena.
- Explícales que vas a mostrarles cómo encriptar documentos utilizando Cryptomator.
  - Descarga la aplicación
  - Sigue los pasos para encriptar documentos utilizando una guía como [ésta](https://www.uni-mannheim.de/en/information-security/information-material/instructions-for-cryptomator/)

❸ **Paso tres**

- Responde a las preguntas que puedan hacerte los periodistas

## Plan de seguridad personal

### Completar la evaluación de riesgos

<div class="table">

| Resultados del aprendizaje | Tiempo | Recursos |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------- |
| Los periodistas reflexionan sobre su riesgo individual y el riesgo asociado a una historia concreta cuando llevan a cabo una investigación en línea.<br>Los periodistas son capaces de reflexionar sobre la mitigación de esos riesgos. | 20 - 30 minutos | [Plantilla de evaluación de riesgos](/digital-risk-assessment-template) |

</div> <div>

Esta sección debe ayudar a los periodistas a comprender mejor los riesgos a los que se enfrentan y a pensar en medidas concretas para mitigarlos.

❶ **Primer paso**

- Diga a los periodistas que van a trabajar solos para completar su sección de la evaluación de riesgos titulada protección de materiales.
- Los periodistas deben trabajar respondiendo a las preguntas y dando pasos concretos para mitigar el riesgo.
- Se les debe brindar apoyo en caso de que tengan preguntas, dudas o parezca que necesitan ayuda adicional.

❷ **Segundo paso**

- Ayude a los periodistas a reflexionar sobre el proceso formulando las siguientes preguntas:
  - ¿Qué información ha aprendido en la sesión de hoy que le haya ayudado a tomar decisiones más informadas en torno a la obtención de materiales?
  - Qué más crees que necesitas aprender?

## Estudios de casos

Estos casos prácticos acompañan al material del curso yofrecen a los periodistas ejemplos reales de amenazas digitales contra los trabajadores de los medios de comunicación. Los estudios de casos pueden utilizarse para fomentar el debate en torno a los distintos tipos de riesgos, así como para enseñar a los periodistas los pasos necesarios para protegerse mejor a sí mismos y a los demás.

Nuestro artículo: [Estudio de casos sobre protección de materiales](/case-studies#activists-put-at-risk-after-documentary-film-makers-devices-seized-by-syrian-security-agents)

Artículo de CJR: [Activists put at risk after documentary filmmaker's devices seized by Syrian security agents](https://www.cjr.org/feature/the_spy_who_came_in_from_the_c.php)
