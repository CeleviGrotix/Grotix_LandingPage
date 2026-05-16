/**
 * Traducciones del Libro de Reclamaciones (se combinan con i18n.js vía window.i18n).
 */
;(function () {
  const pack = window.i18n
  if (!pack || !pack.en || !pack.es) return

  Object.assign(pack.en, {
    'legal.back': 'Back to site',
    'legal.toc': 'On this page',
    'legal.updated': 'Last updated: January 1, 2026',
    'complaints.documentTitle': 'Grotix – Complaints Book',
    'complaints.title': 'Complaints Book',
    'complaints.intro':
      'In accordance with Peruvian consumer protection regulations, Grotix — operated by Celevi S.A.C. — provides this Complaints Book so that users may formally register any complaint or claim regarding our products and services. We are committed to addressing every submission within the legally mandated timeframe.',
    'complaints.s1.title': 'What Is This',
    'complaints.s1.p1':
      'The Complaints Book (Libro de Reclamaciones) is a mechanism required by Peruvian law (D.S. 011-2011-PCM and the Consumer Protection Code, Law No. 29571) through which any consumer may formally register a complaint or claim against a supplier of goods or services.',
    'complaints.s1.p2':
      'A <strong>complaint</strong> refers to dissatisfaction with the service or product that is not related to a legal infringement. A <strong>claim</strong> refers to dissatisfaction directly associated with a product or service defect, non-compliance, or consumer rights violation.',
    'complaints.s1.note':
      'Submitting a complaint or claim through this book does not limit your right to seek other legal remedies available under Peruvian consumer law, including filing a complaint with INDECOPI.',
    'complaints.s2.title': 'Your Rights',
    'complaints.s2.p1': 'As a consumer of Grotix products and services, you are entitled to:',
    'complaints.s2.l1': 'Receive a timely response to your submission within 30 calendar days.',
    'complaints.s2.l2': 'Be notified of the outcome and any corrective actions taken.',
    'complaints.s2.l3':
      'Escalate unresolved complaints to INDECOPI (National Institute for the Defense of Competition and Intellectual Property) at any time.',
    'complaints.s2.l4': 'Request a copy of your submission and any correspondence at no cost.',
    'complaints.s3.title': 'Resolution Process',
    'complaints.s3.p1': 'Once your submission is received, Celevi will follow this process:',
    'complaints.s3.l1':
      '<strong>Acknowledgment</strong> — You will receive an email confirmation with a unique reference number within 2 business days.',
    'complaints.s3.l2':
      '<strong>Review</strong> — Our team will investigate the complaint or claim and may contact you for additional information.',
    'complaints.s3.l3':
      '<strong>Resolution</strong> — A formal response with our findings and proposed resolution will be sent within 30 calendar days of submission.',
    'complaints.s3.l4':
      '<strong>Follow-up</strong> — If you are unsatisfied with the resolution, you may escalate the matter to INDECOPI.',
    'complaints.s3.note':
      'INDECOPI contact: <strong>www.indecopi.gob.pe</strong> — Phone: 224-7777 (Lima) / 0-800-4-4040 (free from landlines nationwide).',
    'complaints.s4.title': 'Submit a Complaint or Claim',
    'complaints.s4.intro':
      'Complete the form below to register your submission. All fields marked with <span style="color:var(--color-ceruleanblue)">*</span> are required.',
    'complaints.form.section1': 'Personal Information',
    'complaints.form.name': 'Full Name',
    'complaints.form.email': 'Email Address',
    'complaints.form.phone': 'Phone Number',
    'complaints.form.docnum': 'ID / DNI / Document No.',
    'complaints.form.section2': 'Submission Details',
    'complaints.form.type': 'Type',
    'complaints.form.type.placeholder': 'Select type...',
    'complaints.form.type.complaint': 'Complaint',
    'complaints.form.type.claim': 'Claim',
    'complaints.form.product': 'Product / Service',
    'complaints.form.product.placeholder': 'Select product...',
    'complaints.form.product.hw': 'Grotix Sensor Hardware',
    'complaints.form.product.app': 'Mobile Application',
    'complaints.form.product.dash': 'Web Dashboard',
    'complaints.form.product.sub': 'Subscription / Billing',
    'complaints.form.product.other': 'Other',
    'complaints.form.subject': 'Subject',
    'complaints.form.description': 'Detailed Description',
    'complaints.form.resolution': 'Requested Resolution',
    'complaints.form.note':
      'By submitting you agree to our Privacy Policy. You will receive a confirmation email within 2 business days.',
    'complaints.form.submit': 'SUBMIT',
    'complaints.form.sending': 'SENDING...',
    'complaints.form.success': 'Your submission has been registered successfully. You will receive a confirmation email shortly.',
    'complaints.form.error': 'There was an error sending your submission. Please try again or contact us directly.',
    'complaints.form.validation.required': 'Please fill in all required fields.',
    'complaints.form.validation.email': 'Please enter a valid email address.',
    'complaints.form.validation.phone': 'Phone number must contain exactly 9 digits.',
    'complaints.form.validation.dni': 'Document number must contain exactly 8 digits.',
    'complaints.form.placeholder.name': 'John Doe',
    'complaints.form.placeholder.email': 'john@example.com',
    'complaints.form.placeholder.phone': '999999999',
    'complaints.form.placeholder.docnum': '12345678',
    'complaints.form.placeholder.subject': 'Brief description of the issue',
    'complaints.form.placeholder.description':
      'Please provide as much detail as possible: dates, order numbers, error messages, expected vs actual behavior, etc.',
    'complaints.form.placeholder.resolution': 'What outcome are you seeking?',
    'complaints.contact.title': 'Need to speak with us directly?',
    'complaints.contact.desc':
      'Our support team is available to assist you before or after submitting a formal complaint.',
  })

  Object.assign(pack.es, {
    'legal.back': 'Volver al sitio',
    'legal.toc': 'En esta página',
    'legal.updated': 'Última actualización: 1 de enero de 2026',
    'complaints.documentTitle': 'Grotix – Libro de Reclamaciones',
    'complaints.title': 'Libro de Reclamaciones',
    'complaints.intro':
      'De conformidad con la normativa peruana de protección al consumidor, Grotix — operado por Celevi S.A.C. — pone a disposición este Libro de Reclamaciones para que los usuarios puedan registrar formalmente cualquier queja o reclamo sobre nuestros productos y servicios. Nos comprometemos a atender cada envío dentro del plazo legalmente establecido.',
    'complaints.s1.title': '¿Qué es esto?',
    'complaints.s1.p1':
      'El Libro de Reclamaciones es un mecanismo exigido por la ley peruana (D.S. 011-2011-PCM y el Código de Protección al Consumidor, Ley N.° 29571) mediante el cual cualquier consumidor puede registrar formalmente una queja o reclamo contra un proveedor de bienes o servicios.',
    'complaints.s1.p2':
      'Una <strong>queja</strong> hace referencia a la insatisfacción con el servicio o producto que no está relacionada con una infracción legal. Un <strong>reclamo</strong> hace referencia a la insatisfacción directamente asociada a un defecto del producto o servicio, incumplimiento o vulneración de derechos del consumidor.',
    'complaints.s1.note':
      'La presentación de una queja o reclamo a través de este libro no limita tu derecho a ejercer otras acciones legales disponibles bajo la ley peruana de protección al consumidor, incluyendo la presentación de una denuncia ante INDECOPI.',
    'complaints.s2.title': 'Tus Derechos',
    'complaints.s2.p1': 'Como consumidor de los productos y servicios de Grotix, tienes derecho a:',
    'complaints.s2.l1': 'Recibir una respuesta oportuna a tu envío en un plazo de 30 días calendario.',
    'complaints.s2.l2': 'Ser notificado del resultado y de las medidas correctivas adoptadas.',
    'complaints.s2.l3':
      'Elevar quejas no resueltas ante INDECOPI (Instituto Nacional de Defensa de la Competencia y de la Protección de la Propiedad Intelectual) en cualquier momento.',
    'complaints.s2.l4': 'Solicitar una copia de tu envío y de cualquier correspondencia sin costo alguno.',
    'complaints.s3.title': 'Proceso de Resolución',
    'complaints.s3.p1': 'Una vez recibido tu envío, Celevi seguirá este proceso:',
    'complaints.s3.l1':
      '<strong>Acuse de recibo</strong> — Recibirás una confirmación por correo electrónico con un número de referencia único dentro de 2 días hábiles.',
    'complaints.s3.l2':
      '<strong>Revisión</strong> — Nuestro equipo investigará la queja o reclamo y podrá contactarte para solicitar información adicional.',
    'complaints.s3.l3':
      '<strong>Resolución</strong> — Se enviará una respuesta formal con nuestros hallazgos y la resolución propuesta dentro de los 30 días calendario posteriores al envío.',
    'complaints.s3.l4':
      '<strong>Seguimiento</strong> — Si no estás satisfecho con la resolución, puedes elevar el asunto a INDECOPI.',
    'complaints.s3.note':
      'Contacto INDECOPI: <strong>www.indecopi.gob.pe</strong> — Teléfono: 224-7777 (Lima) / 0-800-4-4040 (gratuito desde teléfonos fijos a nivel nacional).',
    'complaints.s4.title': 'Presenta una Queja o Reclamo',
    'complaints.s4.intro':
      'Completa el formulario a continuación para registrar tu envío. Todos los campos marcados con <span style="color:var(--color-ceruleanblue)">*</span> son obligatorios.',
    'complaints.form.section1': 'Información Personal',
    'complaints.form.name': 'Nombre Completo',
    'complaints.form.email': 'Correo Electrónico',
    'complaints.form.phone': 'Teléfono',
    'complaints.form.docnum': 'N.° de DNI / Documento',
    'complaints.form.section2': 'Detalles del Envío',
    'complaints.form.type': 'Tipo',
    'complaints.form.type.placeholder': 'Selecciona el tipo...',
    'complaints.form.type.complaint': 'Queja',
    'complaints.form.type.claim': 'Reclamo',
    'complaints.form.product': 'Producto / Servicio',
    'complaints.form.product.placeholder': 'Selecciona el producto...',
    'complaints.form.product.hw': 'Hardware de Sensores Grotix',
    'complaints.form.product.app': 'Aplicación Móvil',
    'complaints.form.product.dash': 'Panel Web',
    'complaints.form.product.sub': 'Suscripción / Facturación',
    'complaints.form.product.other': 'Otro',
    'complaints.form.subject': 'Asunto',
    'complaints.form.description': 'Descripción Detallada',
    'complaints.form.resolution': 'Resolución Solicitada',
    'complaints.form.note':
      'Al enviar aceptas nuestra Política de Privacidad. Recibirás un correo de confirmación en un plazo de 2 días hábiles.',
    'complaints.form.submit': 'ENVIAR',
    'complaints.form.sending': 'ENVIANDO...',
    'complaints.form.success': 'Tu envío ha sido registrado con éxito. Recibirás un correo de confirmación en breve.',
    'complaints.form.error': 'Hubo un error al enviar tu envío. Por favor inténtalo de nuevo o contáctanos directamente.',
    'complaints.form.validation.required': 'Por favor completa todos los campos obligatorios.',
    'complaints.form.validation.email': 'Por favor ingresa una dirección de correo válida.',
    'complaints.form.validation.phone': 'El número de celular debe tener exactamente 9 dígitos.',
    'complaints.form.validation.dni': 'El DNI debe tener exactamente 8 dígitos.',
    'complaints.form.placeholder.name': 'Juan Pérez',
    'complaints.form.placeholder.email': 'juan@ejemplo.com',
    'complaints.form.placeholder.phone': '999999999',
    'complaints.form.placeholder.docnum': '12345678',
    'complaints.form.placeholder.subject': 'Breve descripción del problema',
    'complaints.form.placeholder.description':
      'Indica el mayor detalle posible: fechas, números de pedido, mensajes de error, comportamiento esperado vs real, etc.',
    'complaints.form.placeholder.resolution': '¿Qué solución esperas?',
    'complaints.contact.title': '¿Necesitas hablar con nosotros directamente?',
    'complaints.contact.desc':
      'Nuestro equipo de soporte está disponible para asistirte antes o después de presentar una queja formal.',
  })
})()
