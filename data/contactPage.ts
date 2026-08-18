import type { PrivacyLocale } from "@/data/privacyPolicy";

export const contactPageCopy: Record<PrivacyLocale, {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  detailsTitle: string;
  address: string;
  formTitle: string;
  formIntro: string;
  fields: [string, string, string, string, string, string];
  placeholders: [string, string, string, string, string, string];
  consent: string;
  submit: string;
  success: string;
  required: string;
  back: string;
}> = {
  en: {
    title: "Contact Agrupa Marca",
    description: "Contact Agrupa Marca for fresh produce, packing, quality and commercial enquiries.",
    eyebrow: "Start a conversation",
    heading: "Let’s discuss your fresh produce requirements.",
    intro: "Tell us about your company, market and requirements. Our team will review your enquiry and respond through the contact details you provide.",
    detailsTitle: "Company contact",
    address: "Bd Abdelkrim, El Khattabi, Cite Des Chalets, Biougra 80200, Agadir, Morocco",
    formTitle: "Send an enquiry",
    formIntro: "Fields marked with an asterisk are required.",
    fields: ["Full name", "Company", "Email", "Phone", "Subject", "Message"],
    placeholders: ["Your full name", "Company name", "name@company.com", "+212 …", "How can we help?", "Tell us about your requirements…"],
    consent: "I agree that Agrupa Marca may use these details to respond to my enquiry.",
    submit: "Prepare email",
    success: "Your email application will open with the completed enquiry. Please send it to finish contacting us.",
    required: "Please complete the required fields and accept the privacy notice.",
    back: "Back to website",
  },
  es: {
    title: "Contactar con Agrupa Marca",
    description: "Contacte con Agrupa Marca para consultas sobre productos frescos, envasado, calidad y relaciones comerciales.",
    eyebrow: "Inicie una conversación",
    heading: "Hablemos de sus necesidades de productos frescos.",
    intro: "Cuéntenos sobre su empresa, mercado y necesidades. Nuestro equipo estudiará su consulta y responderá a través de los datos de contacto proporcionados.",
    detailsTitle: "Contacto de la empresa",
    address: "Bd Abdelkrim, El Khattabi, Cite Des Chalets, Biougra 80200, Agadir, Marruecos",
    formTitle: "Enviar una consulta",
    formIntro: "Los campos marcados con un asterisco son obligatorios.",
    fields: ["Nombre completo", "Empresa", "Email", "Teléfono", "Asunto", "Mensaje"],
    placeholders: ["Su nombre completo", "Nombre de la empresa", "nombre@empresa.com", "+212 …", "¿Cómo podemos ayudarle?", "Cuéntenos sus necesidades…"],
    consent: "Acepto que Agrupa Marca utilice estos datos para responder a mi consulta.",
    submit: "Preparar email",
    success: "Se abrirá su aplicación de correo con la consulta completada. Envíela para terminar de ponerse en contacto con nosotros.",
    required: "Complete los campos obligatorios y acepte el aviso de privacidad.",
    back: "Volver al sitio web",
  },
  ar: {
    title: "اتصل بأغروبا ماركا",
    description: "تواصل مع أغروبا ماركا للاستفسار عن المنتجات الطازجة والتعبئة والجودة والعلاقات التجارية.",
    eyebrow: "ابدأ محادثة",
    heading: "لنتحدث عن احتياجاتكم من المنتجات الطازجة.",
    intro: "أخبرونا عن شركتكم والسوق الذي تعملون فيه ومتطلباتكم. سيراجع فريقنا استفساركم ويتواصل معكم عبر البيانات التي تقدمونها.",
    detailsTitle: "بيانات الشركة",
    address: "شارع عبد الكريم الخطابي، حي الشاليهات، بيوكرى 80200، أكادير، المغرب",
    formTitle: "إرسال استفسار",
    formIntro: "الحقول المشار إليها بعلامة النجمة إلزامية.",
    fields: ["الاسم الكامل", "الشركة", "البريد الإلكتروني", "الهاتف", "الموضوع", "الرسالة"],
    placeholders: ["اسمكم الكامل", "اسم الشركة", "name@company.com", "+212 …", "كيف يمكننا مساعدتكم؟", "أخبرونا عن متطلباتكم…"],
    consent: "أوافق على استخدام أغروبا ماركا لهذه البيانات للرد على استفساري.",
    submit: "إعداد البريد الإلكتروني",
    success: "سيفتح تطبيق البريد الإلكتروني مع الاستفسار المكتمل. يرجى إرساله لإتمام التواصل معنا.",
    required: "يرجى إكمال الحقول الإلزامية والموافقة على إشعار الخصوصية.",
    back: "العودة إلى الموقع",
  },
};
