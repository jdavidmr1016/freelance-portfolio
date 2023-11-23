/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_6950ee5f.mjs';
import { $ as $$Image, a as $$Layout } from './about_bdcef317.mjs';
/* empty css                                 */
const $$Astro$2 = createAstro();
const $$ServicesHeaderImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServicesHeaderImage;
  const { path, width, alt, height } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": path, "width": width, "alt": alt, "height": height, "class": "w-full h-80 object-medium object-cover" })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/services-image/services-header-image.astro", void 0);

const $$Astro$1 = createAstro();
const $$ServicesHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServicesHeader;
  const { style, image, imagetext, link, service } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(style, "class")}${addAttribute(link, "href")} data-astro-cid-gw3q4drf>${renderComponent($$result, "ServiceImg", $$ServicesHeaderImage, { "path": image, "width": 480, "height": 240, "alt": imagetext, "data-astro-cid-gw3q4drf": true })}<h2 class="service-text absolute bottom-1/2 md:bottom-12 right-12 text-3xl text-primary-700 font-black" data-astro-cid-gw3q4drf>${service}<span class="text-foreground font-semibold" data-astro-cid-gw3q4drf> Development</span></h2></a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/services-header/services-header.astro", void 0);

const $$Astro = createAstro();
const $$BackendDev = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackendDev;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Back-End Development" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="w-full h-full overflow-hidden">${renderComponent($$result2, "ServiceComponent", $$ServicesHeader, { "style": "col-span-1 overflow-hidden relative", "service": "Back-End", "image": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "imagetext": "Back-End as service image with display code embebed on it", "link": "/services/backend-dev" })}<section class="flex items-start w-full p-4"><p> Your ideas my development skills the pefect patway to an awesome product. You my client are the principal </p></section></main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/services/backend-dev.astro", void 0);

const $$file = "D:/APP/Ongoing/freelance-portfolio/src/pages/services/backend-dev.astro";
const $$url = "/services/backend-dev";

const backendDev = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BackendDev,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ServicesHeader as $, backendDev as b };
