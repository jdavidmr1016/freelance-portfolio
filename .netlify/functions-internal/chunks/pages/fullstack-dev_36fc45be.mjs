/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_6950ee5f.mjs';
import { a as $$Layout } from './about_bdcef317.mjs';
import { $ as $$ServicesHeader } from './backend-dev_ec9e2ea6.mjs';
/* empty css                           */import '../astro-assets-services_092232ec.mjs';
/* empty css                                 */
const $$Astro = createAstro();
const $$FullstackDev = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FullstackDev;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Full-Stack Development" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="w-full h-full overflow-hidden">${renderComponent($$result2, "ServiceComponent", $$ServicesHeader, { "style": "overflow-hidden relative ", "service": "Full-Stack", "image": "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "imagetext": "Full stack development as service image with a man with a laptop developing software", "link": "/services/fullstack-dev" })}<section class="flex items-start w-full p-4"><p> Your ideas my development skills the pefect patway to an awesome product. You my client are the principal </p></section></main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/services/fullstack-dev.astro", void 0);

const $$file = "D:/APP/Ongoing/freelance-portfolio/src/pages/services/fullstack-dev.astro";
const $$url = "/services/fullstack-dev";

export { $$FullstackDev as default, $$file as file, $$url as url };
