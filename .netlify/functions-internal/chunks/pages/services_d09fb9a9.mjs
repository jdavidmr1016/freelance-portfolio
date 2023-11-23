/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_6950ee5f.mjs';
import { $ as $$Image, a as $$Layout, b as $$ESLayout } from './about_bdcef317.mjs';
/* empty css                              */
const $$Astro$5 = createAstro();
const $$ServicesImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServicesImage;
  const { path, width, alt, height } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": path, "width": width, "alt": alt, "height": height, "class": "w-full h-80 hover:scale-110 transition-all ease-in delay-300 cursor-pointer object-center object-cover" })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/services-image/services-image.astro", void 0);

const $$Astro$4 = createAstro();
const $$ServiceComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceComponent;
  const { style, image, imagetext, link, service, secondLine } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(style, "class")}${addAttribute(link, "href")} data-astro-cid-gmzttopm>${renderComponent($$result, "ServiceImg", $$ServicesImage, { "path": image, "width": 480, "height": 240, "alt": imagetext, "data-astro-cid-gmzttopm": true })}<h2 class="service-text absolute top-1/2 right-12 text-lg md:text-2xl text-foreground font-bold" data-astro-cid-gmzttopm><span class="text-foreground font-semibold" data-astro-cid-gmzttopm>${secondLine && secondLine}</span>${service}<span class="text-foreground font-semibold" data-astro-cid-gmzttopm>${!secondLine && "Development"}</span></h2></a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/service-component/service-component.astro", void 0);

const $$Astro$3 = createAstro();
const $$ServicesMasonry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesMasonry;
  return renderTemplate`<!-- Service page with 3 cards -->${maybeRenderHead()}<section class="w-full !min-h-full flex flex-col items-center md:justify-center "><div class="grid grid-cols-2 w-full h-full mr-4 gap-1"><!-- Full stack development -->${renderComponent($$result, "ServiceComponent", $$ServiceComponent, { "style": "col-span-2 overflow-hidden relative ", "service": "Full-Stack ", "image": "/img/fullstack.webp", "imagetext": "Full stack development as service image with a man with a laptop developing software", "link": "/services/fullstack-dev" })}<!-- Backend  development -->${renderComponent($$result, "ServiceComponent", $$ServiceComponent, { "style": "col-span-2 md:col-span-1  overflow-hidden relative", "service": "Back-End ", "image": "/img/backend.webp", "imagetext": "Back-End as service image with display code embebed on it", "link": "/services/backend-dev" })}<!-- Frontend development -->${renderComponent($$result, "ServiceComponent", $$ServiceComponent, { "style": "col-span-2 md:col-span-1  overflow-hidden relative", "service": "Front-End ", "image": "/img/frontend.webp", "imagetext": "Backend as service image with code embebed", "link": "/services/frontend-dev" })}</div></section>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/services-masonry/services-masonry.astro", void 0);

const $$Astro$2 = createAstro();
const $$Services$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Services" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="w-full h-screen md:flex md:items-center pb-52 md:pb-0">${renderComponent($$result2, "Masonry", $$ServicesMasonry, {})}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/services.astro", void 0);

const $$file$1 = "D:/APP/Ongoing/freelance-portfolio/src/pages/services.astro";
const $$url$1 = "/services";

const services$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$EsServicesMasonry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EsServicesMasonry;
  return renderTemplate`<!-- Service page with 3 cards -->${maybeRenderHead()}<section class="w-full min-h-screen flex flex-col items-center justify-center !p-0"><div class="grid grid-cols-2 w-full h-full mr-4 gap-1"><!-- Full stack development -->${renderComponent($$result, "ServiceComponent", $$ServiceComponent, { "style": "col-span-2  overflow-hidden relative ", "service": "Full-Stack", "secondLine": "Desarrollo ", "image": "/services/fullstack.webp", "imagetext": "Full stack development as service image with a man with a laptop developing software", "link": "/services/fullstack-dev" })}<!-- Backend  development -->${renderComponent($$result, "ServiceComponent", $$ServiceComponent, { "style": "col-span-2 md:col-span-1  overflow-hidden relative", "service": "Back-End", "secondLine": "Desarrollo ", "image": "/services/backend.webp", "imagetext": "Back-End as service image with display code embebed on it", "link": "/services/backend-dev" })}<!-- Full stack development -->${renderComponent($$result, "ServiceComponent", $$ServiceComponent, { "style": "col-span-2 md:col-span-1  overflow-hidden relative", "service": "Front-End", "secondLine": "Desarrollo ", "image": "/services/frontend.webp", "imagetext": "Backend as service image with code embebed", "link": "/services/frontend-dev" })}</div></section>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/services-masonry/es-services-masonry.astro", void 0);

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$ESLayout, { "page": "Servicios" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "Masonry", $$EsServicesMasonry, {})}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/es/services.astro", void 0);

const $$file = "D:/APP/Ongoing/freelance-portfolio/src/pages/es/services.astro";
const $$url = "/es/services";

const services = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { services as a, services$1 as s };
