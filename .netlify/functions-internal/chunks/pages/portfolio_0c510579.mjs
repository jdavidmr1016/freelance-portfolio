/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead } from '../astro_6950ee5f.mjs';
import { a as $$Layout, b as $$ESLayout } from './about_bdcef317.mjs';

const $$Astro$1 = createAstro();
const $$Portfolio$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Portfolio$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Portfolio" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main><h1>Hello from astro</h1></main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/portfolio.astro", void 0);

const $$file$1 = "D:/APP/Ongoing/freelance-portfolio/src/pages/portfolio.astro";
const $$url$1 = "/portfolio";

const portfolio$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${renderComponent($$result, "Layout", $$ESLayout, { "page": "Portfolio" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main><h1>Hello from astro</h1></main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/es/portfolio.astro", void 0);

const $$file = "D:/APP/Ongoing/freelance-portfolio/src/pages/es/portfolio.astro";
const $$url = "/es/portfolio";

const portfolio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { portfolio as a, portfolio$1 as p };
