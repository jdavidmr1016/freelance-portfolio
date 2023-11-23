/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderSlot, h as addAttribute, j as renderComponent } from '../astro_6950ee5f.mjs';
import { a as $$Layout, b as $$ESLayout } from './about_bdcef317.mjs';

const $$Astro$a = createAstro();
const $$ContactContactme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ContactContactme;
  const { title, text1, text2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="xl:w-1/2 py-5 xl:p-8 order-2 md:order-1"><h1 class="text-4xl font-bold mb-4">${title}</h1><p class="text-slate-300 mb-4">${text1}</p><p class="text-slate-300 mb-4">${text2}</p><div class="flex flex-col space-y-4">${renderSlot($$result, $$slots["default"])}</div></div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/contact-contactme/contact-contactme.astro", void 0);

const $$Astro$9 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full xl:w-1/2 py-5 xl:p-8 order-1 md:order-2"><form action="#" method="POST"><h2 class="text-3xl font-semibold tracking-tight mb-8">${title}</h2>${renderSlot($$result, $$slots["default"])}</form></div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/contact-form/contact-form.astro", void 0);

const $$Astro$8 = createAstro();
const $$LinkPlatforms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LinkPlatforms;
  const { link, target, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(target, "target")} class="flex items-center text-blue-500 hover:underline">${renderSlot($$result, $$slots["default"])}${text}</a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/link/link-platforms.astro", void 0);

const $$Astro$7 = createAstro();
const $$LogoGithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LogoGithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-github mr-1" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/logo-github-icon.astro", void 0);

const $$Astro$6 = createAstro();
const $$LogoUpworkIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LogoUpworkIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-upwork mr-1" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/logo-upwork-icon.astro", void 0);

const $$Astro$5 = createAstro();
const $$LogoMailIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LogoMailIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-mail mr-1" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/logo-mail-icon.astro", void 0);

const $$Astro$4 = createAstro();
const $$SubmitBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SubmitBtn;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="submit" class="bg-violet-700 font-semibold text-white py-2 w-44 rounded-md hover:bg-primary-600 focus:outline-none focus:ring focus:border-blue-300 transition hover:scale-110 ease-in-out duration-150">${text}</button>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/contact-component/submit-btn.astro", void 0);

const $$Astro$3 = createAstro();
const $$Contact$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contact$2;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl xl:max-w-6xl mx-auto px-4 antialiased flex xl:h-screen flex-col xl:flex-row items-center md:justify-evenly"><!-- Section Platforms -->${renderComponent($$result, "ContactMe", $$ContactContactme, { "title": "Contact me", "text1": "Hi! Look's like you are interested in my web development services. Great! Don't doubt to get in touch with me. I'm here to help you, my client to make your projects a fact", "text2": "You can write me direct by the next form or reach me by this links:" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LinkPlatforms", $$LinkPlatforms, { "link": "#", "target": "_blank", "text": "GitHub" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "GithubIcon", $$LogoGithubIcon, {})}` })}${renderComponent($$result2, "LinkPlatforms", $$LinkPlatforms, { "link": "#", "target": "_blank", "text": "Upwork" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Upwokcon", $$LogoUpworkIcon, {})}` })}${renderComponent($$result2, "LinkPlatforms", $$LinkPlatforms, { "link": "#", "target": "_blank", "text": "Email" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "EmailIcon", $$LogoMailIcon, {})}` })}` })}<!-- Section Form -->${renderComponent($$result, "Form", $$ContactForm, { "title": "Send me a message" }, { "default": ($$result2) => renderTemplate`<div class="mb-4"><!-- <label for="name" class="block text-sm font-medium">Nombre:</label> --><input type="text" id="name" name="name" placeholder="Name" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></div><div class="mb-4"><!-- <label for="email" class="block text-sm font-medium">Correo Electrónico:</label> --><input type="email" id="email" name="email" placeholder="Email" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></div><div class="mb-4"><!-- <label for="subject" class="block text-sm font-medium">Asunto:</label> --><input type="text" id="subject" name="subject" placeholder="Subject" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></div><div class="mb-4"><!-- <label for="message" class="block text-sm font-medium">Mensaje:</label> --><textarea id="message" name="message" rows="4" placeholder="Message" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></textarea></div>${renderComponent($$result2, "SubmitBtn", $$SubmitBtn, { "text": "Send Message" })}` })}</div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/contact/contact.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Contact" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "ContactPage", $$Contact$2, {})}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/contact.astro", void 0);

const $$file$1 = "D:/APP/Ongoing/freelance-portfolio/src/pages/contact.astro";
const $$url$1 = "/contact";

const contact$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$EsContact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EsContact;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl xl:max-w-6xl mx-auto px-4 antialiased flex xl:h-screen flex-col xl:flex-row items-center md:justify-evenly"><!-- Sección Plataformas -->${renderComponent($$result, "ContactMe", $$ContactContactme, { "title": "Cont\xE1ctame", "text1": "\xA1Hola! Si est\xE1s interesado en mis servicios de desarrollo web full-stack, no dudes en ponerte en contacto conmigo. Estoy aqu\xED para ayudarte a llevar a cabo tus proyectos.", "text2": "Puedes encontrarme en las siguientes plataformas:" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "LinkPlatforms", $$LinkPlatforms, { "link": "#", "target": "_blank", "text": "GitHub" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "GithubIcon", $$LogoGithubIcon, {})}` })}${renderComponent($$result2, "LinkPlatforms", $$LinkPlatforms, { "link": "#", "target": "_blank", "text": "Upwork" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Upwokcon", $$LogoUpworkIcon, {})}` })}${renderComponent($$result2, "LinkPlatforms", $$LinkPlatforms, { "link": "#", "target": "_blank", "text": "Correo Electr\xF3nico" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "EmailIcon", $$LogoMailIcon, {})}` })}` })}<!-- Sección Formulario -->${renderComponent($$result, "Form", $$ContactForm, { "title": "Env\xEDame un mensaje" }, { "default": ($$result2) => renderTemplate`<div class="mb-4"><!-- <label for="name" class="block text-sm font-medium">Nombre:</label> --><input type="text" id="name" name="name" placeholder="Nombre" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></div><div class="mb-4"><!-- <label for="email" class="block text-sm font-medium">Correo Electrónico:</label> --><input type="email" id="email" name="email" placeholder="Correo" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></div><div class="mb-4"><!-- <label for="subject" class="block text-sm font-medium">Asunto:</label> --><input type="text" id="subject" name="subject" placeholder="Asunto" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></div><div class="mb-4"><!-- <label for="message" class="block text-sm font-medium">Mensaje:</label> --><textarea id="message" name="message" rows="4" placeholder="Mensaje" class="mt-1 p-2 w-full border border-stone-700 rounded-md bg-gray-800 text-white"></textarea></div>${renderComponent($$result2, "SubmitBtn", $$SubmitBtn, { "text": "Enviar Mensage" })}` })}</div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/contact/es-contact.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$ESLayout, { "page": "Contacto" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "EsContact", $$EsContact, {})}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/es/contact.astro", void 0);

const $$file = "D:/APP/Ongoing/freelance-portfolio/src/pages/es/contact.astro";
const $$url = "/es/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { contact as a, contact$1 as c };
