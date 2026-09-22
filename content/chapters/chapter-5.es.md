+++

type = "report"
title = "Capítulo 5: Protección de materiales"
layout = "single"
weight = 6
toc = true
+++

## Introducción

Los periodistas manejan una gran cantidad de materiales y datos procedentes de diversas personas, entre ellas funcionarios del gobierno, empresas privadas, fuentes confidenciales, entre otros. Aprender a recibir, almacenar y proteger esa información puede ser clave para garantizar su propia seguridad y la de sus fuentes.

Este capítulo incluye:

- Cómo evaluar el riesgo individual a la hora de proteger los materiales
- Mejores prácticas para hacer copias de seguridad y almacenar datos
- Conceptos básicos sobre el cifrado
- Cómo cifrar materiales, memorias USB, tarjetas SD y discos duros externos

## ¿Es la primera vez que capacita periodistas?

Puede ser útil tener en cuenta lo siguiente:

- Los periodistas reciben materiales y archivos por correo electrónico, redes sociales y aplicaciones de mensajería.
- Es posible que el periodista no siempre conozca la identidad de la persona que envía la información.
- Los periodistas comparten materiales con otras personas con frecuencia y tal vez no sepan cuál es la forma más segura de hacerlo. A menudo se comunican con sus fuentes a través de las plataformas que estas prefieran. Es difícil lograr que las fuentes cambien a métodos de comunicación más seguros.
- Los periodistas suelen hacer copias de seguridad de materiales importantes, pero no siempre saben si los datos de su teléfono tienen copia de seguridad ni cómo (¿existen copias de seguridad en la nube automáticas? ¿Qué aplicaciones incluyen?).
- Dado que los periodistas suelen trabajar con plazos de entrega, es posible que no vean como prioridad dedicar tiempo a aprender sobre el cifrado. Cuanto más se pueda aplicar el cifrado de forma predeterminada o con herramientas de sistema integradas y fáciles de usar, mejor.
- Los periodistas a menudo carecen de capacitación suficiente sobre cómo proteger sus materiales.
- Algunas formas de cifrado pueden ser ilegales en el país en el que trabaja o al que viaja el periodista. Las autoridades policiales o los tribunales de algunos países también podrían obligar a las personas a entregar contraseñas o claves de descifrado.

## ¿Es la primera vez que capacita sobre seguridad digital?

Esta sección incluye mejores prácticas que pueden aplicarse a la hora de impartir las actividades de este capítulo. Revise la sección de [recursos](#recursos) de este capítulo para más información.

_Guía general para proteger materiales_

- Los materiales que un periodista necesite proteger y la forma de hacerlo dependerá de su nivel de confidencialidad y de quién pueda querer acceder a ellos. Si la amenaza proviene de un actor estatal o de un adversario con gran experiencia en _hacking_, es recomendable cifrar la información. Encuentre a continuación más información sobre el cifrado.
- En la mayoría de los casos, los periodistas pueden seguir colaborando con sus equipos, recibiendo y almacenando materiales a través de los servicios en línea que utilizan habitualmente, como Google Drive u O365. Deben asegurarse de que esas cuentas tengan activada la autenticación de dos factores (2FA), idealmente mediante llaves de seguridad físicas o llaves de acceso, y de que estén utilizando contraseñas largas. Consulte el capítulo dos para obtener más detalles sobre la seguridad de las cuentas.
- Los periodistas deben tener en cuenta que los servicios en línea que utilizan pueden estar recopilando metadatos sobre los usuarios. Los metadatos son un conjunto de datos que describen otros datos. Por ejemplo, la hora y lugar en que se tomó una foto, y la marca y el modelo del dispositivo con el que se tomó. Se puede ver gran parte de los metadatos que contiene un archivo al consultar las propiedades del archivo o la información adicional. Los metadatos pueden proporcionar a los gobiernos y a otras entidades una cantidad considerable de información que podría utilizarse en contra de un periodista y su fuente. Al mismo tiempo, pueden ser de gran ayuda para los periodistas que intentan verificar o contrastar la veracidad de un contenido. Signal y WhatsApp suelen eliminar los metadatos de todas las imágenes que envían. Si necesita conservar los metadatos, envíe la imagen por otro medio, como un archivo adjunto de correo electrónico.
- Si la amenaza proviene de un gobierno, los periodistas deben evitar en gran medida el uso de servicios en línea que se hayan fundado, tengan su sede o sus servidores en el país vinculado a ese gobierno en particular. Esto se debe a que puede existir un mayor riesgo de que ese gobierno acceda a ellos. Se pueden hacer excepciones para los servicios que utilizan cifrado de extremo a extremo y no recopilan metadatos de los usuarios.
- Es recomendable tener varias copias de los mismos materiales para protegerse mejor contra la pérdida de datos. Cuando se trate de documentos confidenciales, los periodistas deben considerar hacer copias de seguridad en varios discos externos, cifrar el contenido de esos discos y luego almacenarlos en diferentes lugares.
- La tecnología de los discos está en constante evolución. Las unidades de estado sólido o SSD (de las siglas en inglés _Solid-State Drive_) suelen ser más rápidas, pero más costosas, mientras que los discos duros son más económicos, pero pueden dañarse más fácilmente si se caen o manipulan bruscamente (por ejemplo, durante un viaje). Las unidades de estado sólido también pueden [comenzar a perder datos](https://www.tomshardware.com/pc-components/storage/unpowered-ssd-endurance-investigation-finds-severe-data-loss-and-performance-issues-reminds-us-of-the-importance-of-refreshing-backups) cuando permanecen apagadas durante períodos prolongados. Por lo general, las unidades de estado sólido son más adecuadas para datos a los que se accede con regularidad, mientras que los discos duros son mejores para datos de archivo. Recomendamos que también encienda y pruebe los discos duros con regularidad.
- Invite a los periodistas a pensar en cómo protegerán sus materiales antes de realizar un reportaje mediante una evaluación de riesgos digitales. Esto les ayudará a evitar situaciones en las que reciban documentos confidenciales y no cuenten con un plan para protegerlos y almacenarlos.
- Si los periodistas viajan a lugares de alto riesgo donde sus dispositivos podrían ser inspeccionados, lo más seguro sería no guardar ningún dato confidencial en el dispositivo (o incluso viajar con un dispositivo completamente limpio, que tenga instaladas solo las aplicaciones básicas del sistema operativo). Los periodistas podrían acceder a los datos confidenciales a través de servicios en la nube abiertos en una ventana privada del navegador. De esa manera, incluso si los inspeccionan o allanan su oficina, no habría prácticamente ningún rastro de que hayan accedido a ninguno de esos datos confidenciales.

_Cifrado_

- El cifrado es una forma segura de proteger la información para que no pueda ser interceptada ni consultada por otras personas, a menos que tengan la contraseña.
- Existen varios servicios para cifrar datos. Algunos son fáciles de usar, mientras que otros requieren práctica.

- Hay diferentes formas de cifrar el disco duro de una computadora, dependiendo de si se trata de una PC con Windows o de una Mac.
  - Para habilitar el cifrado en **Windows**, se debe activar BitLocker, disponible en las ediciones Pro de Windows. Puede aprender a hacerlo [aquí](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/). Quienes utilicen las ediciones Home de Windows pueden habilitar, en su lugar, una función llamada «[Cifrado de dispositivo](https://support.microsoft.com/en-us/windows/device-encryption-in-windows-cf7e2b6f-3e70-4882-9532-18633605b7df)». Esta ofrece un nivel de cifrado similar, pero con menos opciones de configuración, aunque solo está disponible en ciertos dispositivos. Tenga en cuenta que el Cifrado de dispositivo cargará automáticamente la clave de recuperación a su cuenta de Microsoft, si la usó para iniciar sesión en su sistema de Windows. En teoría, esto significa que un atacante sofisticado que haya logrado acceder a su cuenta de Microsoft en línea y haya robado su dispositivo podría descifrarlo. BitLocker ofrece controles más detallados sobre dónde y cuándo se carga la clave de recuperación.
  - Todos los dispositivos modernos con **macOS** cifran sus discos internos de forma predeterminada. Las claves de cifrado se almacenan en un procesador especial dentro de la propia computadora, si alguien retirara el disco de su equipo, este ya no estaría vinculado a ese procesador y los atacantes no podrían descifrarlo ni leer su contenido.
    - Como una barrera de protección adicional, recomendamos que todos los usuarios activen una función llamada FileVault. En macOS 26, si está [configurando un sistema nuevo y elige iniciar sesión con una cuenta de Apple](https://arstechnica.com/gadgets/2025/09/macos-26-tahoe-the-ars-technica-review/), FileVault se activa automáticamente y sus claves de cifrado se guardan en la nube de esa cuenta de Apple. Si está configurando macOS 26 sin una cuenta antigua o está instalando una versión anterior de macOS, necesitará activar FileVault manualmente, por ejemplo, en los ajustes del sistema.
    - Con FileVault activado, el disco solo se descifra cuando ingresa su contraseña (en lugar de cuando enciende su computadora). Por lo tanto, incluso si un atacante sofisticado logra eludir las protecciones integradas de macOS en el futuro, seguiría sin poder descifrar su disco sin su contraseña. Recomendamos que todos los usuarios en riesgo activen FileVault. Lea más sobre cómo cifrar computadoras Mac [aquí](https://support.apple.com/en-gb/guide/mac-help/mh11785/mac).
- Los usuarios que deseen cifrar discos externos, memorias USB o tarjetas SD pueden utilizar [BitLocker](https://support.microsoft.com/en-us/windows/turn-on-device-encryption-0c453637-bc88-5f74-5105-741561aae838) en Windows y la Utilidad de Discos en [macOS](https://support.apple.com/en-gb/guide/disk-utility/dskutl35612/mac). [VeraCrypt](https://www.veracrypt.fr/) es un programa de terceros de gran reputación que resulta útil para cifrar tanto discos internos como externos y funciona en Windows, macOS y Linux. Los periodistas que deseen cifrar materiales individuales para almacenarlos en la nube pueden utilizar [Cryptomator](https://cryptomator.org/).
- Las leyes sobre cifrado varían en cada país, por lo que es importante asegurarse de que el periodista conozca la legislación del país en el que vive y de cualquier país al que viaje.
- Tenga en cuenta que, aunque el periodista haya cifrado los materiales, se le puede exigir legalmente que descifre la información ingresando su contraseña si así lo solicitan las autoridades.

<div class="faq">

## Preguntas frecuentes

A continuación presentamos preguntas frecuentes que hacen los periodistas sobre este tema. Puede ser útil tener preparadas las respuestas con anticipación.

**¿Cómo puedo compartir materiales de forma más segura con mi equipo?**

Esta es una muy buena pregunta y el tipo de pregunta que los periodistas deberían hacerse en relación con la seguridad de los materiales. En este contexto, puede ser útil hacer que los periodistas reflexionen sobre los riesgos digitales asociados al reportaje y repasar las mejores prácticas y herramientas que podrían utilizar. En la mayoría de los casos, es recomendable utilizar las mismas herramientas que usarían normalmente para trabajar colaborativamente, como Google Drive u O365. Es importante revisar periódicamente con quién se comparten los archivos, retirar el acceso a las personas que ya no forman parte del proyecto o de la organización, y asegurarse de que todos los participantes del proyecto utilicen contraseñas largas y únicas, autenticación de dos factores y mantengan sus dispositivos actualizados para reducir el riesgo de que sus cuentas sean _hackeadas_. Si está trabajando en una investigación particularmente sensible, podría ser necesario modificar o implementar un conjunto especial de herramientas.

**Si borro un documento de mi dispositivo, ¿se podría recuperar?**

Haga que el periodista piense en quién estaría interesado en recuperar materiales de sus dispositivos y en la capacidad tecnológica de ese adversario. Los adversarios avanzados podrían ser capaces de recuperar materiales que se hayan borrado de unidades sin cifrar. Los adversarios muy sofisticados podrían intentar recuperar partes de archivos borrados a partir de archivos cifrados, por lo general buscándolos en cachés o lugares similares. Este es un proceso complicado y no siempre es exitoso. Si restablece los ajustes de fábrica de un dispositivo con un disco cifrado, por ejemplo, al limpiar su _smartphone_ antes de un viaje de trabajo de alto riesgo, entonces es seguro asumir que un adversario típico no podrá recuperar los archivos eliminados.

**¿Es más seguro imprimir mis documentos y guardarlos en mi casa que almacenarlos en línea?**

Intente comprender qué es lo que le preocupa al periodista cuando habla de «más seguro». Por ejemplo, ¿le preocupa que otras personas obtengan los documentos o le preocupa el _spyware_? ¿Quiere mostrar los documentos físicos a otras personas y le preocupa que les tomen una foto o hagan una captura de pantalla si reciben una versión digital? Hable con él sobre su modelo de amenazas y su evaluación de riesgos: ¿le preocupa que alguien entre a su casa o a su oficina? ¿Le preocupan adversarios extranjeros o nacionales? Entre las cosas que debe considerar están: ¿corre el riesgo de ser detenido y/o arrestado?, ¿es segura su casa u oficina?, ¿cómo maneja su proveedor de servicios en línea las citaciones judiciales? Incluso si un periodista imprime documentos para guardarlos, es probable que esos documentos hayan sido procesados de otras maneras: podrían haber sido recibidos por correo electrónico o podría haber una copia de ellos en un servicio en la nube. Por esta razón, por lo general recomendamos no guardar copias impresas, salvo en casos de modelos de amenaza específicos, por ejemplo, mostrando un documento a una fuente en la que el periodista no confía y quiere asegurarse de que no haga una copia del mismo.

**¿Cómo puedo proteger material de video y otros archivos pesados?**

Los periodistas que trabajan con archivos grandes enfrentan más desafíos a la hora de proteger sus materiales. Esto se debe a que pueden estar trabajando en lugares con mala conexión a Internet, lo que dificulta la subida de archivos a la nube, o a que necesitan cruzar fronteras con material sensible. Es importante que los periodistas reflexionen sobre sus riesgos individuales y analicen las opciones para proteger sus materiales. Para quienes se encuentran en un lugar fijo, la mejor opción probablemente sea hacer copias de seguridad de los materiales en varios discos externos cifrados y almacenarlos en diferentes lugares. Consulte la [guía de seguridad digital para cineastas](https://www.digitalsecurity.film/) de la Fundación para la Libertad de Prensa y Field of Vision si va a trabajar con una gran cantidad de datos y archivos de gran tamaño.

</div>

<div class="outcomes">

## Resultados del aprendizaje

Al final de la sesión los periodistas:

- Serán capaces de tomar decisiones informadas sobre las medidas que deben adoptar para proteger sus materiales, basándose en su propio perfil de riesgo y en el de cada reportaje.
- Conocerán diferentes tipos de herramientas que pueden utilizar para proteger sus materiales, incluidos servicios para cifrar materiales, memorias USB, tarjetas SD y discos duros externos.
- Tendrán un plan para hacer copias de seguridad y almacenar sus datos.

</div>

<div class="tools">

## Plantillas y herramientas

Las siguientes herramientas pueden ser útiles para impartir esta sesión:

- [Veracrypt](https://www.veracrypt.fr/code/VeraCrypt/) para cifrar discos duros externos, memorias USB, y tarjetas SD
- [Cryptomator](https://cryptomator.org/) para cifrar materiales individuales
- [Dangerzone](https://dangerzone.rocks/) para convertir archivos sospechosos (materiales que sospeche que podrían contener _malware_) en documentos PDF seguros
- [Plantilla para hacer copias de seguridad de los datos](https://docs.google.com/spreadsheets/d/1F8ZYjnKgKa0phb368_LqjeIZMjapAWAnX6hYL5TgXaA/edit#gid=0)
- [Plantilla de evaluación de riesgos](/digital-risk-assessment-template).

</div>

<div class="resources">

## Recursos

Los siguientes recursos pueden ser útiles para impartir esta sesión:

[¿Qué debería saber sobre el cifrado?](https://ssd.eff.org/es/module/%C2%BFqu%C3%A9-es-el-cifrado) por la Fundación Electronic Frontier

[Conceptos clave del cifrado](https://ssd.eff.org/es/module/conceptos-claves-en-cifrado) por la Fundación Electronic Frontier

[Dangerzone le permite abrir archivos adjuntos de manera segura](https://www.wired.com/story/dangerzone-open-email-attachments-safely/) por Wired

Guías para proteger su dispositivo [Windows](https://securityplanner.consumerreports.org/es/tool/encrypt-your-windows-pc), [macOS](https://securityplanner.consumerreports.org/es/tool/encrypt-your-mac), [iOS](https://securityplanner.consumerreports.org/es/tool/encrypt-your-iphone), y [Android](https://securityplanner.consumerreports.org/es/tool/encrypt-your-android-phone) con cifrado por Consumer Reports

</div>

## Actividades

Las actividades presentadas a continuación están diseñadas para complementar esta sesión de capacitación sobre protección de materiales. Los instructores deben sentirse libres de usar sus propias actividades, así como de adaptar los materiales de esta guía para ajustarse mejor a las necesidades de los periodistas a los que están capacitando. El número y tipo de actividades seleccionadas dependerán del nivel de conocimiento del instructor, así como del tiempo que disponga para dedicar a los participantes. Para quienes son nuevos en formación sobre seguridad digital, no olviden consultar la sección [¿Es la primera vez que capacita sobre seguridad digital?](#es-la-primera-vez-que-capacita-sobre-seguridad-digital) para obtener orientación sobre las mejores prácticas.

### Primeros pasos

#### Protección de materiales: ¿Está de acuerdo?

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|------------------------------------------------------------------------------------------|------------------|---------------------|--------------------------------------------------------|
| Los periodistas reflexionan más a fondo sobre los materiales con los que trabajan y comienzan a considerar las medidas que deben tomar para estar más seguros. | 20 - 30 minutos | Bajo | Pizarra o rotafolio, lapiceros, _Post-its_. |

</div>

_Esta actividad es una adaptación de la versión original de la guía SaferJourno para formadores de medios de comunicación._

❶ **Paso uno**

- El instructor elabora una lista de afirmaciones y las pega en la pared del salón

  - Algunas afirmaciones de ejemplo pueden ser:
    - Cuanta menos información comparta, más seguro estaré.
    - Mi investigación para los reportajes no incluye información confidencial.
    - Es probable que alguien intente acceder a los materiales que tengo en mis dispositivos.
    - Mis datos están seguros porque mis dispositivos están protegidos con contraseña.
    - Debo proteger a mi fuente tanto como sea posible.

- A continuación, se les pide a los periodistas que lean las afirmaciones y decidan si están de acuerdo o en desacuerdo con ellas, o si no están seguros de su posición.
- Luego se los divide en pequeños grupos y a cada grupo se le entregan tres paquetes de _post-its_ de diferentes colores. Cada color debe representar una postura que el periodista tiene respecto a la afirmación. Por ejemplo, el verde representa «de acuerdo», el rojo «en desacuerdo» y el amarillo «no estoy seguro». A cada grupo se le deben entregar _post-its_ del mismo color.
- Entonces el instructor invita a los periodistas a acercarse para colocar sus _post-its_ debajo de las afirmaciones en la pared. Por ejemplo, un periodista está de acuerdo con la afirmación «Debo proteger a mi fuente tanto como sea posible» y pega un _post-it_ verde debajo.

❷ **Paso dos**

- El instructor invita a los periodistas a formar un semicírculo frente a la pared y les pide que comenten lo que ven.
- El instructor puede iniciar la discusión resaltando algunas tendencias comunes que se observan en los _post-its_. Por ejemplo, debajo de la afirmación «Necesito proteger a mi fuente tanto como sea posible», puede haber varios _post-its_ verdes que indiquen que la mayoría de los participantes está de acuerdo con esta afirmación.
- Los periodistas debaten las afirmaciones y el instructor debe animarlos a hablar sobre las medidas que toman o que deben tomar ahora para mejorar la seguridad de sus materiales. Algunas preguntas comunes pueden ser:
  - ¿Qué está haciendo actualmente para proteger a sus fuentes?
  - ¿Cómo recibe normalmente materiales? ¿Qué preocupaciones tiene respecto a la forma en que recibe los materiales?
  - ¿Piensa en cómo proteger los materiales antes de comenzar a trabajar en un reportaje? ¿Qué medidas puede tomar para garantizar una mejor protección de los materiales?

### Desarrollo del conocimiento

#### I. Hablando de copias de seguridad

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|-------------------------------------------------------------------------------------------------------------------------------|------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Los periodistas tienen un plan para hacer copias de seguridad y eliminar contenido de sus dispositivos Los periodistas analizan las opciones para hacer copias de seguridad de sus datos y pueden elegir la opción más adecuada para ellos según su perfil de riesgo | 45 minutos | Medio | Pizarra o rotafolio, marcadores para pizarra, diapositivas de PowerPoint preparadas por el instructor, hoja de cálculo con el plan para hacer copias de seguridad de los datos |

</div>

_Esta actividad se ha adaptado del capítulo sobre cómo proteger su computadora de Level Up_

❶ **Paso uno**

- Pregunte a los periodistas qué tan valiosa es la información almacenada en sus dispositivos para ellos. ¿Qué tan útil es para sus vidas? Ahora pregúnteles cuánto tiempo dedican a organizar y hacer copias de seguridad de esta información.
- Pregunte a los participantes: ¿con qué frecuencia hacen copias de seguridad de sus archivos? Comparta ejemplos de buenas prácticas relacionadas con la copia de seguridad de datos, tales como:
  - Guardar la copia de seguridad en un lugar seguro, separado de su computadora.
  - Hacer copias de seguridad de su información de manera frecuente y regular.
  - Posiblemente cifrar el disco duro o el medio de almacenamiento donde estarán los datos.

❷ **Paso dos**

- Comparta la [plantilla de copia de seguridad](https://docs.google.com/spreadsheets/d/1F8ZYjnKgKa0phb368_LqjeIZMjapAWAnX6hYL5TgXaA/edit#gid=0) con el grupo. Explique que van a trabajar de manera individual para completarla con algunos ejemplos generales de los datos que necesiten una copia de seguridad. Haga que se enfoquen también en los datos personales, especialmente en el contenido que puedan tener almacenado en sus teléfonos. Tenga en cuenta que es posible que los periodistas ya estén muy familiarizados con la copia de seguridad de los datos, sobre todo si trabajan en redacciones más consolidadas.
- Facilite una discusión sobre la hoja de cálculo y su contenido. Algunas preguntas que podría plantear son:
  - ¿Existe algún dispositivo, nuevo o antiguo, del que sea necesario hacer una copia de seguridad?
  - ¿Existe información que piensen en respaldar, pero que al final nunca llegan a hacerlo?
  - ¿Hay algo particularmente sensible o confidencial que deban respaldar?

#### II. Cifrado de un disco duro externo

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|---------------------|------------------------------------------------------------------------------------------------------------|
| Los periodistas analizan y debaten opciones para hacer copias de seguridad de los datos y son capaces de elegir la opción más adecuada para ellos según su perfil de riesgo. Los periodistas aprenden a hacer copias de seguridad y a cifrar la información a un disco duro externo. | 60 minutos | Avanzado | Pizarra o rotafolio, lapiceros, diapositivas de PowerPoint, proyector y computadora portátil |

</div>

_Nota para el instructor: se recomienda que lleve a cabo una demostración en directo usando una computadora portátil y un proyector. Las mejores prácticas para esta actividad pueden encontrarse en la sección_ [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital)_, ubicada al inicio de este capítulo. Esta es una actividad de nivel avanzado y se recomienda que sea impartida por instructores experimentados_

❶ **Paso uno**

- Explique que hay muchas maneras en que se puede cifrar un disco duro externo. Explique que los usuarios de Mac pueden usar la herramienta de cifrado integrada en sus dispositivos llamada FileVault. Los usuarios de Windows PC que tengan cuentas profesionales pueden usar el programa Bitlocker de Windows, y existe un servicio de terceros que todos pueden usar y se llama VeraCrypt.

❷ **Paso dos**

- Diga a los periodistas que, para cifrar el disco duro externo, tendrán que pensar en una contraseña y usarla. Hable de la importancia de crear una contraseña segura y aproveche este momento para repasar las mejores prácticas en materia de contraseñas. Resalte que es mejor pensar en esta contraseña con anticipación para no tener que hacerlo al momento de cifrar. Recuerde que es imposible descifrar discos duros externos sin una contraseña o (dependiendo del _software_ de cifrado que se utilice) un código de recuperación. Por lo tanto, es fundamental que recuerden la contraseña o la guarden en un lugar seguro.
- Explique que les va a mostrar cómo cifrar datos en un disco duro externo usando VeraCrypt:
  - Descargue VeraCrypt
  - Conecte el disco duro externo a la computadora a través del puerto USB
  - Realice una copia de seguridad de los datos que están en el disco duro externo
  - Cifre el disco duro externo, siguiendo, por ejemplo, [esta guía](https://freedom.press/training/encryption-toolkit-media-makers/veracrypt-guide/#encrypting-external-storage-devices-on-veracrypt)

❸ **Paso tres**

- Responda cualquier pregunta que puedan tener los periodistas.
- Hable de la importancia de contar con más de una copia de seguridad. Es posible que los periodistas quieran tener varios discos duros externos cifrados, además de una copia de seguridad en la nube. La cantidad de copias de seguridad que creen y el lugar donde las almacenen dependerá de su perfil de riesgo. Puede encontrar más información al respecto al inicio de este capítulo.
- Hable con los periodistas sobre situaciones en las que, aunque la información esté cifrada, las personas podrían acceder a ella. Ayúdelos a pensar en formas de proteger mejor la información si se enfrentan a situaciones como las que se enumeran a continuación:
  - Que las autoridades les pidan que desbloqueen dispositivos cifrados y los riesgos legales que surgen si se niegan a hacerlo.
  - Ser amenazado físicamente para que abran sus dispositivos.
- Discuta con los participantes por cuánto tiempo deben almacenarse los archivos de manera segura. ¿Es necesario mantener oculto su contenido y su existencia justo antes de la publicación, o también después de la publicación del reportaje? ¿Y cuáles deberían ser sus políticas de retención de datos y cuándo deberían eliminarse esos archivos? Podría ser útil discutir estos asuntos también con abogados especializados en medios de comunicación.

#### III. Cifrado de un documento

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Nivel de dificultad** | **Recursos** |
|-------------------------------------------------------------------------|------------|---------------------|--------------------------------------------------------------------------------------------|
| Los periodistas aprenden a cifrar un documento y almacenarlo en la nube | 60 minutos | Medio | Pizarra o rotafolio, lapiceros, _Post-its_, proyector y computadora portátil |

</div>

_Nota para el instructor: se recomienda que lleve a cabo una demostración en directo usando una computadora portátil y un proyector. Las mejores prácticas para esta actividad pueden encontrarse en la sección_ [_¿Es la primera vez que capacita sobre seguridad digital?_](#es-la-primera-vez-que-capacita-sobre-seguridad-digital)_, ubicada al inicio de este capítulo. Esta es una actividad de nivel medio y se recomienda que los instructores se sientan cómodos con la herramienta antes de enseñar a usarla._

❶ **Paso uno**

- Pida a los periodistas ejemplos generales de materiales individuales o grupales que les gustaría cifrar. Los ejemplos incluyen información de salud, documentos sensibles o confidenciales entregados por sus fuentes, fotos de sus familias.

❷ **Paso dos**

- Dígales a los periodistas que les va a mostrar cómo cifrar materiales para que puedan almacenarse de manera fácil y segura en un servicio normal de almacenamiento en la nube, como Google. Explique los tipos de amenazas de las que esto los puede proteger (nadie que pueda acceder de alguna manera a su cuenta en la nube podrá abrir esos materiales sin una contraseña, incluidos los atacantes que penetren la cuenta y el propio Google).
- Dígales a los periodistas que, para cifrar una carpeta de materiales, necesitarán pensar en una contraseña y usarla. Hable sobre la importancia de crear una contraseña segura y recomiende que usen su gestor de contraseñas para generar una adecuada.
- Explique que les va a mostrar cómo cifrar materiales usando Cryptomator:
  - Descargue la aplicación.
  - Siga los pasos para cifrar materiales usando una guía [como esta](https://www.uni-mannheim.de/en/information-security/information-material/instructions-for-cryptomator/).

❸ **Paso tres**

- Responda cualquier pregunta que puedan tener los periodistas.

## Plan de seguridad personal

### Realización de la evaluación de riesgos

<div class="table">

| **Resultados del aprendizaje** | **Tiempo** | **Recursos** |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------------------------------------------------------------------------------------------|
| Los periodistas analizan los riesgos individuales y los riesgos asociados a un reportaje en particular cuando hacen una investigación en línea. Los periodistas son capaces de pensar en medidas para mitigar esos riesgos. | 20 - 30 minutos | [Plantilla de evaluación de riesgos](/digital-risk-assessment-template) |

</div>

Esta sección debería ayudar a los periodistas a comprender mejor los riesgos a los que se enfrentan y a reflexionar sobre medidas concretas para mitigar esos riesgos.

❶ **Paso uno**

- Dígales a los periodistas que van a trabajar de forma individual para completar su sección de la evaluación de riesgos titulada «Protección de materiales».
- Los periodistas deben trabajar en responder las preguntas y proponer medidas concretas para mitigar los riesgos.
- Se les debe brindar apoyo en caso de que tengan preguntas, dudas o parezca que necesitan ayuda adicional.

❷ **Paso dos**

- Ayude a los periodistas a reflexionar sobre el proceso haciéndoles las siguientes preguntas:
  - ¿Qué información han aprendido en la sesión de hoy que les ha ayudado a tomar decisiones más informadas sobre volver los materiales más seguros?
  - ¿Qué más creen que deberían aprender?

## Caso de estudio

Este caso de estudio complementa el material del curso y ofrece a los periodistas ejemplos reales de amenazas digitales contra trabajadores de medios de comunicación. Se puede utilizar para fomentar el debate sobre los diferentes tipos de riesgos, así como para enseñar a los periodistas las medidas que deben tomar para protegerse mejor a sí mismos y a los demás.

Nuestro artículo: [Caso de estudio sobre protección de materiales](/case-studies#documentalista-siria)

Artículo de CJR: [Activistas en peligro tras la incautación de los dispositivos de un documentalista por parte de agentes de seguridad sirios](https://www.cjr.org/feature/the_spy_who_came_in_from_the_c.php)
