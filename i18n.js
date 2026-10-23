(function () {
  const ES = {
    'Projects': 'Proyectos', 'About': 'Nosotros', 'Process': 'Proceso', 'Service Area': 'Área de servicio', 'Contact': 'Contacto', 'Reviews': 'Reseñas',
    'BOOK A CONSULT': 'AGENDAR CONSULTA', 'MENU': 'MENÚ', 'CLOSE': 'CERRAR',
    'CUSTOM CABINETRY · DESIGN + INSTALL': 'GABINETES A MEDIDA · DISEÑO + INSTALACIÓN',
    'Built by experience,': 'Construido con experiencia,', 'defined by details.': 'definido por los detalles.',
    "Cabinetry — designed in your home, built to your measurements, and installed by our own team. Beautiful cabinetry shouldn't be reserved for a few.": 'Gabinetes diseñados en su hogar, construidos a su medida e instalados por nuestro propio equipo. Los gabinetes hermosos no deberían ser solo para unos pocos.',
    'BOOK A DESIGN CONSULT': 'AGENDAR CONSULTA DE DISEÑO', 'VIEW OUR WORK': 'VER NUESTRO TRABAJO',
    'Free in-home design': 'Diseño gratuito en su hogar', 'Measured, planned and priced at no cost.': 'Medido, planificado y cotizado sin costo.',
    'Lifetime limited warranty': 'Garantía limitada de por vida', 'On every system, hinge and slide we install.': 'En cada sistema, bisagra y corredera que instalamos.',
    'Licensed & insured': 'Con licencia y seguro', 'Our own installers — never subcontracted.': 'Nuestros propios instaladores, nunca subcontratados.',
    'WHAT WE BUILD': 'LO QUE CONSTRUIMOS', 'Cabinetry made for the way you live.': 'Gabinetes hechos para su forma de vivir.',
    'From a closet remodel to a single built-in bookcase, each design starts with how you use the room — what needs a home, what should stay hidden, what deserves to be on display.': 'Desde la remodelación de un clóset hasta un librero empotrado, cada diseño comienza con cómo usa el espacio: qué necesita un lugar, qué debe quedar oculto y qué merece estar a la vista.',
    'Home offices': 'Oficinas en casa', 'Closets & wardrobes': 'Clósets y roperos', 'Built-ins & vanities': 'Empotrados y tocadores',
    'Built-in desks, file drawers, bookshelves and hidden storage — a workspace that keeps focus in and clutter out.': 'Escritorios empotrados, cajones de archivo, libreros y almacenamiento oculto: un espacio de trabajo que mantiene la concentración y elimina el desorden.',
    'Walk-ins, reach-ins and dressing rooms with drawers, lit shelving and hanging planned around your wardrobe.': 'Vestidores, clósets y cuartos de vestir con cajones, repisas iluminadas y colgadores planeados según su ropa.',
    'Bathroom vanities, media walls, home offices, mudrooms and bookcases — cabinetry for every room in the house.': 'Tocadores de baño, muros de entretenimiento, oficinas, recibidores y libreros: gabinetes para cada habitación de la casa.',
    'Home office photo': 'Foto de oficina en casa', 'Closet photo': 'Foto de clóset', 'Built-in or vanity photo': 'Foto de empotrado o tocador',
    'FEATURED PROJECTS': 'PROYECTOS DESTACADOS', 'Recent work': 'Trabajo reciente', 'All': 'Todos', 'Kitchens': 'Cocinas', 'Closets': 'Clósets', 'Built-ins': 'Empotrados',
    'KITCHEN': 'COCINA', 'CLOSET': 'CLÓSET', 'BUILT-IN': 'EMPOTRADO',
    'Hillcrest kitchen': 'Cocina Hillcrest', 'Linden Avenue primary walk-in': 'Vestidor principal Linden Avenue', 'Bayview library wall': 'Muro biblioteca Bayview',
    'Oak Ridge pantry': 'Despensa Oak Ridge', 'Maple Court his & hers': 'Clóset doble Maple Court', 'Stonegate double vanity': 'Tocador doble Stonegate',
    'OUR PROCESS': 'NUESTRO PROCESO', 'Three steps. One team, start to finish.': 'Tres pasos. Un solo equipo, de principio a fin.',
    'Consult': 'Consulta', 'Design': 'Diseño', 'Install': 'Instalación',
    'A designer visits your home to measure, look at what you own and talk through how you want the space to feel.': 'Un diseñador visita su hogar para medir, ver lo que tiene y conversar sobre cómo quiere que se sienta el espacio.',
    'You receive a detailed 3D design with finishes, hardware and lighting options, plus a clear, all-inclusive quote.': 'Recibe un diseño 3D detallado con opciones de acabados, herrajes e iluminación, además de una cotización clara y todo incluido.',
    'Our own licensed crew installs, levels and details every component — then leaves your home cleaner than we found it.': 'Nuestro propio equipo con licencia instala, nivela y detalla cada componente, y deja su hogar más limpio de como lo encontró.',
    'FREE': 'GRATIS', 'REVISIONS INCLUDED': 'REVISIONES INCLUIDAS', 'MOST INSTALLS IN 1–2 DAYS': 'LA MAYORÍA SE INSTALA EN 1–2 DÍAS',
    'START WITH A FREE CONSULT': 'COMIENCE CON UNA CONSULTA GRATIS', 'No obligation. Your design and quote are yours to keep.': 'Sin compromiso. Su diseño y cotización son suyos.',
    'DEFINED BY DETAILS': 'DEFINIDO POR LOS DETALLES', "The finishes you'll notice every morning.": 'Los acabados que notará cada mañana.',
    'Finishes': 'Acabados', 'Hardware': 'Herrajes', 'Lighting': 'Iluminación', 'Inserts': 'Accesorios', 'Doors': 'Puertas',
    'Select options & textured laminates': 'Opciones selectas y laminados texturizados', 'Brushed brass, matte black, polished nickel': 'Latón cepillado, negro mate, níquel pulido',
    'Under-cabinet, in-shelf & strip lights': 'Luces bajo gabinete, en repisas y en tira', 'Drawer organizers, pull-out pantries, velvet trays': 'Organizadores de cajón, despensas extraíbles, bandejas de terciopelo',
    'Shaker, slab, reeded glass & mirror fronts': 'Frentes Shaker, lisos, de vidrio acanalado y espejo',
    'Close-up detail — brass hardware, drawer inserts, LED lighting': 'Detalle de cerca: herrajes de latón, accesorios de cajón, iluminación LED',
    "WHY CHOOSE SUPERIOR HOME SOLUTIONS TX": "POR QUÉ ELEGIR SUPERIOR HOME SOLUTIONS TX",
    "The Difference Is in the Details.": "La diferencia está en los detalles.",
    "And the People Behind Them.": "Y en las personas detrás de ellos.",
    "After more than a decade each in the custom closet industry, we know what makes a project worth the investment: a design that fits your life, quality materials, and craftsmanship that holds up to everyday use.": "Después de más de una década cada uno en la industria de clósets a medida, sabemos qué hace que un proyecto valga la inversión: un diseño que se adapta a su vida, materiales de calidad y una mano de obra que resiste el uso diario.",
    "Working with different companies taught us what makes a project successful—and where the details can get lost. We founded Superior Home Solutions TX to bring the best of that experience to homeowners across Central Texas, with personal attention, careful installation, and a commitment to fair pricing.": "Trabajar con distintas empresas nos enseñó qué hace exitoso un proyecto y dónde se pueden perder los detalles. Fundamos Superior Home Solutions TX para llevar lo mejor de esa experiencia a los propietarios del centro de Texas, con atención personal, instalación cuidadosa y un compromiso con precios justos.",
    "Designed by Craftsmen Who Know How to Install It": "Diseñado por artesanos que saben instalarlo",
    "Our hands-on experience shapes every design. We consider everything from drawer access and shelf support to existing trim and uneven walls, so the finished space works as beautifully as it looks.": "Nuestra experiencia práctica guía cada diseño. Consideramos todo, desde el acceso a los cajones y el soporte de los estantes hasta las molduras existentes y las paredes irregulares, para que el espacio terminado funcione tan bien como se ve.",
    "The Details Are Part of the Job": "Los detalles son parte del trabajo",
    "Aligned doors, clean edges, and carefully fitted trim should be part of every finished project. We give those details the time and attention they deserve, because they make a difference you can see and feel every day.": "Puertas alineadas, bordes limpios y molduras bien ajustadas deben ser parte de cada proyecto terminado. Les damos a esos detalles el tiempo y la atención que merecen, porque marcan una diferencia que se ve y se siente todos los días.",
    "Exceptional Craftsmanship. Fair Pricing.": "Artesanía excepcional. Precios justos.",
    "Custom storage should feel like money well spent. We keep our pricing reasonable while giving the materials, fit, and finish the attention they deserve. Our goal is to make a beautifully crafted space more attainable, with quality you can appreciate long after installation day.": "Un espacio de almacenamiento a medida debe sentirse como dinero bien invertido. Mantenemos precios razonables sin descuidar los materiales, el ajuste y el acabado. Nuestro objetivo es hacer más accesible un espacio bellamente elaborado, con una calidad que apreciará mucho después del día de la instalación.",
    "A Personal Connection to the People Doing the Work": "Una conexión personal con quienes hacen el trabajo",
    "You work directly with the craftsmen behind Superior Home Solutions TX. We listen, answer your questions, and take pride in what we leave in your home. Our reputation depends on it.": "Usted trabaja directamente con los artesanos detrás de Superior Home Solutions TX. Escuchamos, respondemos sus preguntas y nos enorgullece lo que dejamos en su hogar. Nuestra reputación depende de ello.",
    "Why choose us": "Por qué elegirnos",
    "THE SUPERIOR REFERRAL PROGRAM": "EL PROGRAMA DE REFERIDOS SUPERIOR",
    "A Great Recommendation Deserves a": "Una gran recomendación merece un",
    "Great Thank-You.": "gran agradecimiento.",
    "Refer someone to Superior Home Solutions TX and earn $1,000 in combined rewards when they move forward with a qualifying project.": "Recomiende a alguien a Superior Home Solutions TX y gane $1,000 en recompensas combinadas cuando avance con un proyecto que califique.",
    "You Make the Introduction. We’ll Take Care of the Rest.": "Usted hace la presentación. Nosotros nos encargamos del resto.",
    "Have your referral mention your name when they first contact us. Once they sign their qualifying project agreement and their deposit clears, you earn both rewards. You don’t need to be a past customer to participate.": "Pida a su referido que mencione su nombre cuando nos contacte por primera vez. Una vez que firme el contrato de su proyecto calificado y se acredite su depósito, usted gana ambas recompensas. No necesita ser cliente anterior para participar.",
    "REFER A FRIEND": "RECOMENDAR A UN AMIGO",
    "$500 Visa Gift Card": "Tarjeta de regalo Visa de $500",
    "Enjoy $500 to spend wherever Visa gift cards are accepted. We’ll send it within 7 days after their deposit clears.*": "Disfrute $500 para gastar donde se acepten tarjetas de regalo Visa. Se la enviaremos dentro de los 7 días posteriores a la acreditación del depósito.*",
    "$500 Toward Your Next Project": "$500 para su próximo proyecto",
    "Bring another idea to life with a $500 credit toward your next custom closet, cabinetry, or storage project with us.": "Haga realidad otra idea con un crédito de $500 para su próximo proyecto de clóset, gabinetes o almacenamiento a medida con nosotros.",
    "*Both rewards apply only when the referred customer’s project exceeds $7,500 before taxes. A signed agreement and cleared deposit are required. New customers only; referrers must be identified at the initial inquiry. Existing leads and self-referrals are excluded. The Visa gift card will be sent within 7 days after the deposit clears or any applicable cancellation period ends, whichever is later. Project credit is valid for 12 months from issuance on a new project of $5,000 or more. One credit per project; no cash value and not combinable with other promotional offers. Visa gift card issuer terms apply.": "*Ambas recompensas aplican solo cuando el proyecto del cliente referido supera los $7,500 antes de impuestos. Se requiere un contrato firmado y un depósito acreditado. Solo clientes nuevos; los referidores deben identificarse en la consulta inicial. Se excluyen los prospectos existentes y las autorreferencias. La tarjeta de regalo Visa se enviará dentro de los 7 días posteriores a la acreditación del depósito o al término de cualquier período de cancelación aplicable, lo que ocurra después. El crédito para proyectos es válido por 12 meses desde su emisión en un proyecto nuevo de $5,000 o más. Un crédito por proyecto; sin valor en efectivo y no combinable con otras promociones. Aplican los términos del emisor de la tarjeta de regalo Visa.",
    "Referral program": "Programa de referidos",
    'OUR STORY': 'NUESTRA HISTORIA',
    'Built by Experience.': 'Construido con experiencia.', 'Defined by Details.': 'Definido por los detalles.',
    'Superior Home Solutions TX was founded by two craftsmen with more than a decade of custom closet experience each. We met while working in the industry, where we discovered a shared appreciation for careful installation, thoughtful design, and getting the details right.': 'Superior Home Solutions TX fue fundada por dos artesanos con más de una década de experiencia cada uno en clósets a medida. Nos conocimos trabajando en la industria, donde descubrimos un aprecio compartido por la instalación cuidadosa, el diseño bien pensado y los detalles bien hechos.',
    'Our experience also extends to kitchen installation and finish carpentry. That background taught us to look beyond the cabinetry itself—to notice how it fits against the walls, how the trim comes together, and how comfortably the space works for the person using it.': 'Nuestra experiencia también abarca la instalación de cocinas y la carpintería de acabados. Esa trayectoria nos enseñó a mirar más allá de los gabinetes: a notar cómo se ajustan a las paredes, cómo se unen las molduras y qué tan cómodo resulta el espacio para quien lo usa.',
    'Over the years, we’ve designed and installed closets, worked through difficult layouts, and made the small adjustments that make a finished project feel complete. We know that quality shows in the alignment of the doors, the fit of the trim, and a layout that makes everyday belongings easier to reach.': 'A lo largo de los años hemos diseñado e instalado clósets, resuelto distribuciones difíciles y hecho los pequeños ajustes que hacen que un proyecto terminado se sienta completo. Sabemos que la calidad se nota en la alineación de las puertas, el ajuste de las molduras y una distribución que facilita alcanzar las cosas de todos los días.',
    'We started Superior Home Solutions TX to put our experience into a company of our own, serving homeowners across Central Texas. Our name is new. The hands and experience behind the work are not.': 'Fundamos Superior Home Solutions TX para poner nuestra experiencia en una empresa propia, al servicio de los propietarios de todo el centro de Texas. Nuestro nombre es nuevo. Las manos y la experiencia detrás del trabajo, no.',
    '[Founder names], Co-founders': '[Nombres de los fundadores], Cofundadores', 'A family business, built one room at a time.': 'Un negocio familiar, construido una habitación a la vez.',
    "We started Superior Home Solutions because we believed beautifully made cabinetry shouldn't be a luxury for a few.": 'Fundamos Superior Home Solutions porque creemos que los gabinetes bien hechos no deberían ser un lujo para unos pocos.',
    'What began as [how the business started — a garage workshop, a single install for a neighbor] has grown into a local team of designers and installers. We still work the way we did on day one: we come to your home, listen to how you live, and build something that fits it exactly.': 'Lo que comenzó como [cómo empezó el negocio: un taller en la cochera, una instalación para un vecino] se ha convertido en un equipo local de diseñadores e instaladores. Seguimos trabajando como el primer día: vamos a su hogar, escuchamos cómo vive y construimos algo que se ajuste perfectamente.',
    'Every project is designed in-house and installed by our own crew — never subcontracted — so the person who measures your space and the people who build it answer to the same standard.': 'Cada proyecto se diseña internamente y lo instala nuestro propio equipo, nunca subcontratado, para que quien mide su espacio y quienes lo construyen cumplan el mismo estándar.',
    '[Founder name], Founder': '[Nombre del fundador], Fundador', 'Founder / team photo — in the workshop or on an install': 'Foto del fundador / equipo: en el taller o en una instalación',
    'Locally owned': 'De propiedad local', 'Rooted in the communities we serve.': 'Arraigados en las comunidades que servimos.',
    'Our own crew': 'Nuestro propio equipo', 'Designers and installers on staff.': 'Diseñadores e instaladores de planta.',
    'Honest pricing': 'Precios honestos', 'One clear, all-inclusive quote.': 'Una cotización clara y todo incluido.',
    'SERVICE AREA': 'ÁREA DE SERVICIO', 'Locally owned. Serving homes across the greater Austin area.': 'De propiedad local. Servimos hogares en toda el área metropolitana de Austin.',
    'Our designers come to you.': 'Nuestros diseñadores van a usted.',
    'Custom cabinetry that feels like it belongs in your home. Made to your measurements, with the style you love and the storage you need.': 'Gabinetes a medida que se sienten parte de su hogar. Hechos a sus medidas, con el estilo que le encanta y el espacio de almacenamiento que necesita.',
    'From closets and pantries to home offices and garage cabinets, we create spaces that feel organized, look beautiful, and work better every day. Each design is tailored to your home, your style, and what you need to store.': 'Desde clósets y despensas hasta oficinas en casa y gabinetes de garaje, creamos espacios organizados, hermosos y que funcionan mejor cada día. Cada diseño se adapta a su hogar, su estilo y lo que necesita guardar.',
    'Precision installation and a clean finish, followed by a walkthrough with you to review every detail.': 'Instalación precisa y un acabado limpio, seguidos de un recorrido con usted para revisar cada detalle.',
    'Let’s design the space you’ve always imagined.': 'Diseñemos el espacio que siempre ha imaginado.',
    "Let's design the space you've been picturing.": 'Diseñemos el espacio que ha estado imaginando.',
    'Tell us a little about your space. A designer will reach out within one business day to schedule your free in-home visit.': 'Cuéntenos un poco sobre su espacio. Un diseñador se comunicará en un día hábil para agendar su visita gratuita.',
    'Mon–Sat 8am–6pm · Sun by appointment': 'Lun–Sáb 8am–6pm · Dom con cita',
    'Your request is in. A designer will call you within one business day to find a time that suits you.': 'Recibimos su solicitud. Un diseñador le llamará en un día hábil para encontrar un horario que le convenga.',
    'SEND ANOTHER REQUEST': 'ENVIAR OTRA SOLICITUD', 'FULL NAME *': 'NOMBRE COMPLETO *', 'ZIP CODE *': 'CÓDIGO POSTAL *', 'EMAIL *': 'CORREO *', 'PHONE': 'TELÉFONO',
    'WHAT ARE YOU PLANNING?': '¿QUÉ ESTÁ PLANEANDO?', 'INVESTMENT RANGE': 'RANGO DE INVERSIÓN', 'Not sure yet — help me decide': 'Aún no sé, ayúdenme a decidir',
    'Under $3,000': 'Menos de $3,000', 'TELL US ABOUT YOUR SPACE': 'CUÉNTENOS SOBRE SU ESPACIO',
    'Please add your name, a valid email and ZIP code.': 'Agregue su nombre, un correo válido y su código postal.',
    'Free, no-obligation. We never share your details.': 'Gratis y sin compromiso. Nunca compartimos sus datos.',
    'Closet': 'Clóset', 'Bathroom vanity': 'Tocador de baño', 'Kitchen': 'Cocina', 'Not sure yet': 'Aún no sé',
    "Rough size, what's not working today, finishes you love…": 'Tamaño aproximado, qué no funciona hoy, acabados que le encantan…',
    'SEND REQUEST': 'ENVIAR SOLICITUD', 'Something went wrong sending your request. Please call (512) 487-0654 or email Info@superiorhomesolutionstx.com.': 'Hubo un problema al enviar su solicitud. Llame al (512) 487-0654 o escriba a Info@superiorhomesolutionstx.com.', 'SENDING…': 'ENVIANDO…', 'REQUEST MY FREE CONSULT': 'SOLICITAR MI CONSULTA GRATIS',
    'Built by experience, defined by details.': 'Construido con experiencia, definido por los detalles.',
    'SERVICES': 'SERVICIOS', 'Design + install': 'Diseño + instalación', 'COMPANY': 'EMPRESA', 'Our story': 'Nuestra historia', 'Service area': 'Área de servicio',
    'Book a consult': 'Agendar consulta', 'VISIT': 'VISÍTENOS', 'Design studio by appointment': 'Estudio de diseño con cita',
    '© 2026 Superior Home Solutions TX, LLC. All rights reserved.': '© 2026 Superior Home Solutions TX, LLC. Todos los derechos reservados.',
    'Licensed & insured · License #000000': 'Con licencia y seguro · Licencia #000000',
    'Hero project photo — finished custom cabinetry, warm light': 'Foto principal: gabinetes a medida terminados, luz cálida',
    'CONTACT': 'CONTACTO', "We'd love to hear": 'Nos encantaría', 'from you.': 'saber de usted.',
    "A question about a project, an existing install, or just an idea you're turning over — reach out however suits you. A real person replies, usually the same day.": 'Una pregunta sobre un proyecto, una instalación existente o simplemente una idea que tiene en mente: comuníquese como prefiera. Una persona real responde, normalmente el mismo día.',
    'Message received.': 'Mensaje recibido.', 'SEND ANOTHER MESSAGE': 'ENVIAR OTRO MENSAJE', 'Send us a message': 'Envíenos un mensaje',
    "I'M REACHING OUT ABOUT": 'ME COMUNICO POR', 'NAME *': 'NOMBRE *', 'MESSAGE *': 'MENSAJE *', 'BEST WAY TO REACH ME': 'MEJOR FORMA DE CONTACTARME',
    'Please add your name, a valid email and a short message.': 'Agregue su nombre, un correo válido y un mensaje breve.',
    'GOOD TO KNOW': 'BUENO SABER', 'Common questions': 'Preguntas frecuentes', 'Ready to start? Your first design visit is always free.': '¿Listo para empezar? Su primera visita de diseño siempre es gratis.',
    'Design studio / showroom photo': 'Foto del estudio de diseño / sala de exhibición', 'Your name': 'Su nombre', 'How can we help?': '¿Cómo podemos ayudarle?',
    'New project': 'Proyecto nuevo', 'Existing project': 'Proyecto existente', 'Warranty / service': 'Garantía / servicio', 'Trade & builders': 'Profesionales y constructores', 'Something else': 'Otro asunto',
    'Email': 'Correo', 'Phone': 'Teléfono', 'Text': 'Mensaje de texto', 'SEND MESSAGE': 'ENVIAR MENSAJE',
    'Is the design consultation really free?': '¿La consulta de diseño es realmente gratis?',
    'Yes. We measure, listen and prepare a 3D design with a written quote at no cost and with no obligation.': 'Sí. Medimos, escuchamos y preparamos un diseño 3D con una cotización por escrito sin costo y sin compromiso.',
    'How long does a project take?': '¿Cuánto tarda un proyecto?',
    'Most projects are installed three to five weeks after you approve your design. Installation itself typically takes one to two days.': 'La mayoría de los proyectos se instalan de tres a cinco semanas después de aprobar su diseño. La instalación en sí suele tardar uno o dos días.',
    'What does custom cabinetry cost?': '¿Cuánto cuestan los gabinetes a medida?',
    'Smaller projects like a vanity or reach-in closet often start in the low thousands; kitchens and full walk-ins vary with size and finishes. We design to your budget and show options at each level.': 'Los proyectos pequeños, como un tocador o un clóset, suelen empezar en unos pocos miles de dólares; las cocinas y los vestidores completos varían según el tamaño y los acabados. Diseñamos según su presupuesto y mostramos opciones en cada nivel.',
    'Do you remove existing shelving and patch and paint the walls before installation?': '¿Retiran los estantes existentes y resanan y pintan las paredes antes de la instalación?', 'Yes. We remove existing shelving and can patch and paint the walls so your new cabinetry goes onto a clean, finished surface. Just mention it during your consultation.': 'Sí. Retiramos los estantes existentes y podemos resanar y pintar las paredes para que sus nuevos gabinetes se instalen sobre una superficie limpia y terminada. Solo menciónelo durante su consulta.',
    'What does the warranty cover?': '¿Qué cubre la garantía?',
    'Our lifetime limited warranty covers the cabinetry, hardware and workmanship for as long as you own your home.': 'Nuestra garantía limitada de por vida cubre los gabinetes, herrajes y mano de obra mientras sea dueño de su hogar.',
    'CALL OR TEXT': 'LLAME O ENVÍE MENSAJE', 'Mon–Sat 8am–6pm · Sun by appointment': 'Lun–Sáb 8am–6pm · Dom con cita', 'EMAIL': 'CORREO',
    'We reply within one business day': 'Respondemos en un día hábil', 'DESIGN STUDIO': 'ESTUDIO DE DISEÑO', 'Visits by appointment': 'Visitas con cita'
  };
  const PAT = [
    [/^Thank you, (.+)\.$/, 'Gracias, $1.'],
    [/^Thanks, (.+)\. We'll be in touch by (.+) shortly\.$/, 'Gracias, $1. Nos pondremos en contacto pronto.']
  ];
  const lower = {}; for (const k in ES) lower[k.toLowerCase()] = ES[k];
  const tr = s => {
    const t = s.replace(/\s+/g, ' ').trim(); if (!t) return null;
    if (ES[t]) return ES[t];
    const l = lower[t.toLowerCase()]; if (l) return t === t.toUpperCase() ? l.toUpperCase() : l;
    for (const [re, rep] of PAT) if (re.test(t)) return t.replace(re, rep);
    return null;
  };
  let lang = localStorage.getItem('shs-lang') || 'en', busy = false;
  const ATTRS = ['placeholder', 'aria-label', 'title'];
  function applyNode(n) {
    if (n.nodeType === 3) {
      if (n.__es !== undefined && n.nodeValue === n.__es) { if (lang === 'en') n.nodeValue = n.__en; return; }
      if (lang === 'en') return;
      const r = tr(n.nodeValue); if (r) { n.__en = n.nodeValue; n.__es = n.nodeValue.replace(/\S[\s\S]*\S|\S/, r); n.nodeValue = n.__es; }
      return;
    }
    if (n.nodeType !== 1 || n.tagName === 'SCRIPT' || n.tagName === 'STYLE') return;
    for (const a of ATTRS) if (n.hasAttribute(a)) {
      const k = '__' + a; n[k] = n[k] || {};
      const v = n.getAttribute(a);
      if (lang === 'en') { if (n[k].es === v) n.setAttribute(a, n[k].en); }
      else if (n[k].es !== v) { const r = tr(v); if (r) { n[k] = { en: v, es: r }; n.setAttribute(a, r); } }
    }
    const root = n.shadowRoot; if (root) root.childNodes.forEach(applyNode);
    n.childNodes.forEach(applyNode);
  }
  function run() { busy = true; applyNode(document.body); document.documentElement.lang = lang; busy = false; }
  const mo = new MutationObserver(ms => { if (busy) return; busy = true; ms.forEach(m => { if (m.type === 'characterData') applyNode(m.target); else if (m.type === 'attributes') applyNode(m.target); else m.addedNodes.forEach(applyNode); }); busy = false; });
  function start() { run(); mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS }); }
  window.SHSi18n = {
    get: () => lang,
    set(l) { lang = l; localStorage.setItem('shs-lang', l); run(); window.dispatchEvent(new CustomEvent('shs-lang', { detail: l })); }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  setTimeout(run, 800); setTimeout(run, 2500);
})();
