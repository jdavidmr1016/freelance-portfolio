/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_6950ee5f.mjs';
import { a as $$Layout, b as $$ESLayout } from './about_bdcef317.mjs';

const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const { greeting, name, tagline = "center", secondLine } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="flex flex-col xl:flex-row items-center h-screen overflow-hidden bg-[url('/backgrounds/bg-top-1440w.jpg')] bg-right-top bg-no-repeat bg-contain"><div class="mx-auto max-w-xl"><div class="mx-auto text-center mt-16 md:min-w-[29rem] xl:mt-0 mb-8"><h4 class="text-pink-700 text-3xl md:text-left">${greeting}</h4><h1 class="mb-4 text-5xl md:text-6xl md:text-left tracking-tight">${secondLine}<span class="font-bold">${name}</span></h1><p class="font-light text-2xl md:text-4xl md:text-left dark:text-gray-400">${tagline}</p></div></div><div class="mx-auto"><img class="max-h-[38rem] xl:max-h-full" alt="Luis Santiago's profile picture" src="/portrait.png"></div></header>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/hero/hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Home" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "Hero", $$Hero, { "greeting": "Hello", "secondLine": "I'm ", "name": "Luis Santiago", "tagline": "Full-Stack Developer" })}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/index.astro", void 0);

const $$file$1 = "D:/APP/Ongoing/freelance-portfolio/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$ESLayout, { "page": "Inicio" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "Hero", $$Hero, { "greeting": "Hola", "secondLine": "Soy ", "name": "Luis Santiago", "tagline": "Full-Stack Developer", ",": true })}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/es/index.astro", void 0);

const $$file = "D:/APP/Ongoing/freelance-portfolio/src/pages/es/index.astro";
const $$url = "/es";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
