/* empty css                           */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderSlot, j as renderComponent, k as renderHead } from '../astro_6950ee5f.mjs';
/* empty css                           */import { i as isESMImportedImage, g as getImage$1 } from '../astro-assets-services_092232ec.mjs';

const $$Astro$z = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "D:/APP/Ongoing/freelance-portfolio/node_modules/.pnpm/astro@3.3.4/node_modules/astro/components/Image.astro", void 0);

const $$Astro$y = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const additionalAttributes = {};
  if (fallbackImage.srcSet.values.length > 0) {
    additionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}>${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}>`;
  })}<img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(fallbackImage.attributes)}></picture>`;
}, "D:/APP/Ongoing/freelance-portfolio/node_modules/.pnpm/astro@3.3.4/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":["unsplash.com"],"remotePatterns":[]};
					new URL("file:///D:/APP/Ongoing/freelance-portfolio/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$x = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/APP/Ongoing/freelance-portfolio/node_modules/.pnpm/astro@3.3.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$w = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Link;
  const { text, link } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(link === pathname ? "flex items-center justify-start text-foreground gap-2 font-semibold p-2 bg-primary-300 border-b border-primary-200  shadow-b-md shadow-primary-200 cursor-not-allowed" : "flex items-center justify-start text-foreground gap-2 font-semibold p-2  border-b border-primary-700 shadow-sm shadow-rimary-700 hover:bg-primary-700 hover:text-foreground hover:shadow-md hover:shadow-primary-700 transition-all ease-in delay-300 ", "class")}>${renderSlot($$result, $$slots["default"])}${text}</a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/link/link.astro", void 0);

const $$Astro$v = createAstro();
const $$HomeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$HomeIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M10 12h4v4h-4z"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/home-icon.astro", void 0);

const $$Astro$u = createAstro();
const $$AboutIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$AboutIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-square-rounded-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" stroke-width="0" fill="currentColor"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/about-icon.astro", void 0);

const $$Astro$t = createAstro();
const $$ServicesIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$ServicesIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/services-icon.astro", void 0);

const $$Astro$s = createAstro();
const $$ProyectsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$ProyectsIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-briefcase" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/proyects-icon.astro", void 0);

const $$Astro$r = createAstro();
const $$ContactIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$ContactIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.5 19h-5.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"></path><path d="M3 7l9 6l2.983 -1.989l6.017 -4.011"></path><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/contact-icon.astro", void 0);

const $$Astro$q = createAstro();
const $$SidebarMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$SidebarMenu;
  return renderTemplate`<!-- Sidebar Menu -->${maybeRenderHead()}<div class="flex flex-col gap-2">${renderComponent($$result, "Link", $$Link, { "link": "/", "text": "Home" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HomeIcon", $$HomeIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/about", "text": "About" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AboutIcon", $$AboutIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/services", "text": "Services" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ServicesIcon", $$ServicesIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/portfolio", "text": "Portfolio" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PortfolioIcon", $$ProyectsIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/contact", "text": "Contact" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContactIcon", $$ContactIcon, {})}` })}</div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/sidebar-menu/sidebar-menu.astro", void 0);

const $$Astro$p = createAstro();
const $$LangSwitch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$LangSwitch;
  let newPath = Astro2.props.path?.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(newPath === "/es" ? "/" : "/es/", "href")} class="font-black text-foreground hover:text-primary-300">${newPath === "/es" ? "US" : "ES"}</a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/lang-switch/lang-switch.component.astro", void 0);

const $$Astro$o = createAstro();
const $$HiremeButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$HiremeButton;
  const { text, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="flex items-center justify-center gap-2 font-semibold p-2 bg-primary-700 text-white shadow-md shadow-primary-600 hover:shadow-primary-500 hover:bg-primary-600 transition-all ease-in delay-300">${renderSlot($$result, $$slots["default"])}${text}</a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/button/hireme-button.astro", void 0);

const $$Astro$n = createAstro();
const $$HireIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$HireIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-handshake" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"></path><path d="M12.5 15.5l2 2"></path><path d="M15 13l2 2"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/hire-icon.astro", void 0);

const LogoImg = {"src":"/_astro/logo.fb96385d.png","width":500,"height":500,"format":"png"};

const $$Astro$m = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": LogoImg, "alt": "Shaggy.dev logo image ", "class": "w-40 h-auto mt-8" })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/logo/logo.component.astro", void 0);

const $$Astro$l = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`<!-- Sidebar -->${maybeRenderHead()}<aside class="invisible md:visible fixed w-60 h-screen flex flex-col items-center justify-center"><!-- Logo --><div class="h-1/6 w-full flex items-center justify-center"><a href="/">${renderComponent($$result, "Logo", $$Logo, {})}</a></div><!-- Menus Container --><div class="h-4/6 flex flex-col items-center justify-center gap-2"><!-- Sidebar Menu --><div class="h-5/6 flex items-center justify-center">${renderComponent($$result, "SidebarMenu", $$SidebarMenu, {})}</div><!-- Languaje Menu --><div class="h-1/6 flex items-center justify-start">${renderComponent($$result, "LangSwitch", $$LangSwitch, {})}</div></div><!-- Hire Me button --><div class="h-1/6 flex items-center justify-center">${renderComponent($$result, "HiremeButton", $$HiremeButton, { "link": "#", "target": "_blank", "text": "Hire me" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HireIcon", $$HireIcon, {})}` })}</div></aside>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/sidebar/sidebar.astro", void 0);

const $$Astro$k = createAstro();
const $$MobileLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MobileLink;
  const { text, link } = Astro2.props;
  const { pathname } = Astro2.url;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(link === pathname ? "flex items-center justify-start text-foreground gap-2 font-bold p-4 bg-primary-700   cursor-pointer rounded-full transition-all ease-in-out delay-500 -translate-y-6" : "flex items-center justify-start text-foreground gap-2 font-semibold p-2    hover:bg-primary-400 hover:text-foreground  rounded-full transition-all ease-in-out delay-500 ", "class")}${addAttribute(text, "aria-label")}>${renderSlot($$result, $$slots["default"])}</a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/link/mobile-link.astro", void 0);

const $$Astro$j = createAstro();
const $$MobileMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  return renderTemplate`${maybeRenderHead()}<section class="visible md:invisible fixed bottom-0 h-16 w-screen flex items-center justify-around shadow-md shadow-foreground mobile-menu" data-astro-cid-ugmqxis2>${renderComponent($$result, "MobileLink", $$MobileLink, { "link": "/about", "text": "About icon link", "data-astro-cid-ugmqxis2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AboutIcon", $$AboutIcon, { "data-astro-cid-ugmqxis2": true })}` })}${renderComponent($$result, "MobileLink", $$MobileLink, { "link": "/services", "text": "Services icon link", "data-astro-cid-ugmqxis2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ServicesIcon", $$ServicesIcon, { "data-astro-cid-ugmqxis2": true })}` })}${renderComponent($$result, "MobileLink", $$MobileLink, { "link": "/", "text": "Home icon link", "data-astro-cid-ugmqxis2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HomeIcon", $$HomeIcon, { "data-astro-cid-ugmqxis2": true })}` })}${renderComponent($$result, "MobileLink", $$MobileLink, { "link": "/portfolio", "text": "Portfolio icon link", "data-astro-cid-ugmqxis2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PortfolioIcon", $$ProyectsIcon, { "data-astro-cid-ugmqxis2": true })}` })}${renderComponent($$result, "MobileLink", $$MobileLink, { "link": "/contact", "text": "Contact icon link", "data-astro-cid-ugmqxis2": true }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContactIcon", $$ContactIcon, { "data-astro-cid-ugmqxis2": true })}` })}</section>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/mobile-menu/mobile-menu.astro", void 0);

const $$Astro$i = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Layout;
  const { page } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="favicon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Shaggy.dev | ${page}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body><div class="app__container min-w-screen min-h-screen bg-background text-foreground">${renderComponent($$result, "Sidebar", $$Sidebar, {})}<div class="md:ml-60 min-h-screen ">${renderSlot($$result, $$slots["default"])}</div>${renderComponent($$result, "MobileMenu", $$MobileMenu, {})}</div></body></html>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$h = createAstro();
const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$AboutMe;
  const { title, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center"><img class="h-auto w-full max-w-md" src="/profile-about.jpeg" alt=""></div><div class="flex flex-col"><h1 class="py-2 text-4xl font-bold tracking-tight text-white">${title}</h1><p class="text-2xl text-warning-400 py-2">${name}</p><div class="text-slate-300">${renderSlot($$result, $$slots["default"])}</div>${renderSlot($$result, $$slots["button"])}</div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/about-component/about-me.astro", void 0);

const $$Astro$g = createAstro();
const $$AboutSections = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$AboutSections;
  const { title, subtitle, tag, gap = "gap-4 text-center font-semibold" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-32"><h3 class="text-center text-3xl font-semibold tracking-tight text-white">${title}</h3>${tag ? renderTemplate`<p class="text-2xl text-center text-warning-400 py-2">${subtitle}</p>` : ""}<div${addAttribute(["mt-20 grid md:flex md:justify-around", gap], "class:list")}>${renderSlot($$result, $$slots["default"])}</div></section>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/about-component/about-sections.astro", void 0);

const $$Astro$f = createAstro();
const $$AboutSectionsLastTwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$AboutSectionsLastTwo;
  const { title, subtitle, tag, style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-48"><h3 class="text-center text-3xl font-semibold tracking-tight text-white">${title}</h3>${tag ? renderTemplate`<p class="text-2xl text-center text-warning-400 py-2">${subtitle}</p>` : ""}<div${addAttribute(["mt-20", style], "class:list")}>${renderSlot($$result, $$slots["default"])}</div>${renderSlot($$result, $$slots["button"])}</section>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/about-component/about-sections-lastTwo.astro", void 0);

const $$Astro$e = createAstro();
const $$AboutCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$AboutCard;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg shadow-md bg-gray-900 hover:scale-105 hover:border-gray-500 transition ease-in-out duration-500 flex flex-col"><header class="p-4 flex-grow"><h3 class="text-center text-xl font-bold tracking-tight text-white my-2">${title}</h3><div class="grid gap-4 grid-cols-2 max-w-xs my-10 m-auto">${renderSlot($$result, $$slots["default"])}</div></header></div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/about-component/about-card.astro", void 0);

const $$Astro$d = createAstro();
const $$Skill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Skill;
  const { skill, experience } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div><h4>${skill}</h4><p class="font-light text-gray-400">${experience}</p></div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/card-skill/skill.astro", void 0);

const $$Astro$c = createAstro();
const $$CertificateButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CertificateButton;
  const { text, link, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(target, "target")} class="flex-row justify-center text-white cursor-pointer hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-70 hover:opacity-100">${renderSlot($$result, $$slots["default"])}${text}</a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/button/certificate-button.astro", void 0);

const $$Astro$b = createAstro();
const $$LogoCssIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LogoCssIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-css3" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fffafa" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/logo-css-icon.astro", void 0);

const $$Astro$a = createAstro();
const $$LogoJsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LogoJsIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-javascript" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fffafa" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg><!-- <div> stroke="#2c3e50" </div> -->`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/logo-js-icon.astro", void 0);

const $$Astro$9 = createAstro();
const $$LogoPythonIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LogoPythonIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-python" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fffafa" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"></path><path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"></path><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"></path><path d="M11 6l0 .01"></path><path d="M13 18l0 .01"></path></svg><!-- <div>stroke="#2c3e50"</div> -->`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/logo-python-icon.astro", void 0);

const $$Astro$8 = createAstro();
const $$LogoNodejsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LogoNodejsIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="icon icon-tabler icon-tabler-brand-nodejs" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fffafa" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg><!-- <div>stroke="#2c3e50"</div> -->`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/icons/logo-nodejs-icon.astro", void 0);

const $$Astro$7 = createAstro();
const $$RountedButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$RountedButton;
  const { text, link, target, align } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(target, "target")}${addAttribute(['slot="button" rounded-xl py-2 bg-violet-700 font-semibold text-center block w-44 mt-12 hover:bg-primary-600 transition hover:scale-110 ease-in-out duration-150', align], "class:list")}>${renderSlot($$result, $$slots["default"])}${text}</a>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/button/rounted-button.astro", void 0);

const $$Astro$6 = createAstro();
const $$About$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$About$2;
  return renderTemplate`<!-- Resumen about me -->${maybeRenderHead()}<section class="grid items-center gap-4 lg:grid-cols-2 px-4 pt-16 lg:px-[5%] 2xl:px-[16%]">${renderComponent($$result, "AboutMe", $$AboutMe, { "title": "About Me", "name": "I\u2019m Luis Santiago D." }, { "button": ($$result2) => renderTemplate`${renderComponent($$result2, "RountedButton", $$RountedButton, { "slot": "button", "link": "#", "target": "_self", "align": "", "text": "Download CV" })}`, "default": ($$result2) => renderTemplate`<p>A Freelance Full Stack Developer based in Kentucky ,EEUU, with more of 4 years of experience specializing in zero to hero web development, ecommerce web aplications, landing pages, custom web solutions for your businnes using the best tech aproach for your needs.</p><br><p>I not only work closely with clients, i build succeed long term contractor relations.</p>` })}</section><div class="xl:max-w-7xl mx-auto px-4 !pb-44"><!-- Educación -->${renderComponent($$result, "AboutSections", $$AboutSections, { "title": "Education", "gap": "!flex !flex-col !items-center !justify-center gap-2" }, { "default": ($$result2) => renderTemplate`<p>Informatic Science Universitary Degree</p><p>Python postgraduate course</p><p>Project management course</p>` })}<!-- Empresas donde he trabajado -->${renderComponent($$result, "AboutSections", $$AboutSections, { "title": "Over the past 4 years, I\u2019ve worked with some international studios and enterprises", "tag": "p", "subtitle": "Including:" }, { "default": ($$result2) => renderTemplate`<p>Anteism Books</p><p>Bower Studios</p><p>Deux Cranes</p><p>Dims</p><p>Google</p><p>Gossamer</p>` })}<!-- Skill -->${renderComponent($$result, "AboutSections", $$AboutSections, { "title": "Skills", "gap": "gap-8 lg:grid-cols-2 max-w-md lg:max-w-4xl m-auto" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Card", $$AboutCard, { "title": "Front-end Development" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Skill", $$Skill, { "skill": "JavaScript", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "React", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "CSS", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "HTML", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "SASS", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Tailwind", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Astro", "experience": "Experienced" })}` })}${renderComponent($$result2, "Card", $$AboutCard, { "title": "Back-end Development" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Skill", $$Skill, { "skill": "NodeJS", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Laravel", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "PHP", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "MySQL", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "MongoDB", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Python", "experience": "Experienced" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Django", "experience": "Experienced" })}` })}` })}<!-- Certificados -->${renderComponent($$result, "AboutSectionsLastTwo", $$AboutSectionsLastTwo, { "title": "Certificates", "style": "grid gap-2 sm:grid-cols-2 items-center xl:grid-cols-4" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "CSS" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "CSS", $$LogoCssIcon, {})}` })}${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "JavaScript" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "JavaScriptIcon", $$LogoJsIcon, {})}` })}${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "NodeJS" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NodeJS", $$LogoNodejsIcon, {})}` })}${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "Pythonn" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "PythonIcon", $$LogoPythonIcon, {})}` })}` })}<!-- Llamada a la acción -->${renderComponent($$result, "AboutSectionsLastTwo", $$AboutSectionsLastTwo, { "title": "Let's work together", "style": "text-center font-semibold mb-24" }, { "button": ($$result2) => renderTemplate`${renderComponent($$result2, "RountedButton", $$RountedButton, { "slot": "button", "link": "#", "target": "_self", "align": "m-auto", "text": "Send me Email" })}`, "default": ($$result2) => renderTemplate`<p>For enquiries or questions please don’t hesitate to contact me.</p><p>Let's talk about your needs and project requirements.</p>` })}</div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/about/about.astro", void 0);

const $$Astro$5 = createAstro();
const $$About$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "About" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "AboutInfo", $$About$2, {})}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/about.astro", void 0);

const $$file$1 = "D:/APP/Ongoing/freelance-portfolio/src/pages/about.astro";
const $$url$1 = "/about";

const about$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$EsSidebarMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EsSidebarMenu;
  return renderTemplate`<!-- Sidebar Menu -->${maybeRenderHead()}<div class="flex flex-col gap-2">${renderComponent($$result, "Link", $$Link, { "link": "/es/", "text": "Inicio" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HomeIcon", $$HomeIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/es/about", "text": "Acerca de" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "AboutIcon", $$AboutIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/es/services", "text": "Servicios" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ServicesIcon", $$ServicesIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/es/portfolio", "text": "Portfolio" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "PortfolioIcon", $$ProyectsIcon, {})}` })}${renderComponent($$result, "Link", $$Link, { "link": "/es/contact", "text": "Contacto" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ContactIcon", $$ContactIcon, {})}` })}</div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/sidebar-menu/es-sidebar-menu.astro", void 0);

const $$Astro$3 = createAstro();
const $$EsSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EsSidebar;
  const { pathname } = Astro2.url;
  return renderTemplate`<!-- Sidebar -->${maybeRenderHead()}<aside class="invisible md:visible fixed w-60 h-screen flex flex-col items-center justify-center"><!-- Logo --><div class="h-1/6 w-full flex items-center justify-center">${renderComponent($$result, "Logo", $$Logo, {})}</div><!-- Menus Container --><div class="h-4/6 flex flex-col items-center justify-center gap-2"><!-- Sidebar Menu --><div class="h-5/6 flex items-center justify-center">${renderComponent($$result, "SidebarMenu", $$EsSidebarMenu, {})}</div><!-- Languaje Menu --><div class="h-1/6 flex items-center justify-start">${renderComponent($$result, "LangSwitch", $$LangSwitch, { "path": pathname })}</div></div><!-- Hire Me button --><div class="h-1/6 flex items-center justify-center">${renderComponent($$result, "HiremeButton", $$HiremeButton, { "link": "#", "target": "_blank", "text": "Hire me" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HireIcon", $$HireIcon, {})}` })}</div></aside>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/sidebar/es-sidebar.astro", void 0);

const $$Astro$2 = createAstro();
const $$ESLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ESLayout;
  const { page } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Shaggy.dev | ${page}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head><body><div class="app__container min-w-screen min-h-screen bg-background text-foreground">${renderComponent($$result, "Sidebar", $$EsSidebar, {})}<div class="ml-60 min-h-screen">${renderSlot($$result, $$slots["default"])}</div></div></body></html>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/layouts/ESLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$EsAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EsAbout;
  return renderTemplate`<!-- Resumen Acerca de -->${maybeRenderHead()}<section class="grid items-center gap-8 lg:grid-cols-2 px-4 pt-16 lg:px-[5%] 2xl:px-[16%]">${renderComponent($$result, "AboutMe", $$AboutMe, { "title": "Acerca de mi", "name": "Soy Luis Santiago D." }, { "button": ($$result2) => renderTemplate`${renderComponent($$result2, "RountedButton", $$RountedButton, { "slot": "button", "link": "#", "target": "_self", "align": "", "text": "Descargar CV" })}`, "default": ($$result2) => renderTemplate`<p>Director creativo independiente con sede en Nueva York y Tokio. Con más de 4 años de experiencia, especializado en identidades de marca tipográficas, diseño editorial, ilustraciones y tipografías para clientes de los ámbitos del arte, la hostelería, el estilo de vida, la moda y la belleza.</p><br><p>Trabajo estrechamente con los clientes para definir el mejor enfoque en colaboración. Y dependiendo de las necesidades del proyecto, también colaboro con mi red de creativos de talento para ofrecer una experiencia holística.</p>` })}</section><div class="xl:max-w-7xl mx-auto px-4 pb-32"><!-- Educación -->${renderComponent($$result, "AboutSections", $$AboutSections, { "title": "Educaci\xF3n" }, { "default": ($$result2) => renderTemplate`<p>✔️Universidad de informática y tecnología USI</p><p>✔️Posgrado de Python</p><p>✔️Curso de técnico en gestión de proyectos</p>` })}<!-- Empresas donde he trabajado -->${renderComponent($$result, "AboutSections", $$AboutSections, { "title": "En los \xFAltimos 4 a\xF1os, he trabajado con una gran variedad de estudios y clientes internacionales", "tag": "p", "subtitle": "Entre los que se incluyen:" }, { "default": ($$result2) => renderTemplate`<p>Anteism Books</p><p>Bower Studios</p><p>Deux Cranes</p><p>Dims</p><p>Google</p><p>Gossamer</p>` })}<!-- Habilidades -->${renderComponent($$result, "AboutSections", $$AboutSections, { "title": "Habilidades", "gap": "gap-8 lg:grid-cols-2 max-w-md lg:max-w-4xl m-auto" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Card", $$AboutCard, { "title": "Front-end Development" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Skill", $$Skill, { "skill": "HTML", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "CSS", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "JavaScript", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Bootstrap", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Tailwind", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "React", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Astro", "experience": "Experiencia" })}` })}${renderComponent($$result2, "Card", $$AboutCard, { "title": "Back-end Development" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Skill", $$Skill, { "skill": "NodeJS", "experience": "Intermedio" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "PHP", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Laravel", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "MySQL", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "MongoDB", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "React", "experience": "Experiencia" })}${renderComponent($$result3, "Skill", $$Skill, { "skill": "Python", "experience": "Intermedio" })}` })}` })}<!-- Certificados -->${renderComponent($$result, "AboutSectionsLastTwo", $$AboutSectionsLastTwo, { "title": "Certificados", "style": "grid gap-2 sm:grid-cols-2 items-center xl:grid-cols-4" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "CSS" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "CSS", $$LogoCssIcon, {})}` })}${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "JavaScript" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "JavaScriptIcon", $$LogoJsIcon, {})}` })}${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "NodeJS" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NodeJS", $$LogoNodejsIcon, {})}` })}${renderComponent($$result2, "CertificateButton", $$CertificateButton, { "link": "#", "target": "_blank", "text": "Pythonn" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "PythonIcon", $$LogoPythonIcon, {})}` })}` })}<!-- Llamada a la acción -->${renderComponent($$result, "AboutSectionsLastTwo", $$AboutSectionsLastTwo, { "title": "Trabajemos juntos", "style": "text-center font-semibold" }, { "button": ($$result2) => renderTemplate`${renderComponent($$result2, "RountedButton", $$RountedButton, { "slot": "button", "link": "#", "target": "_self", "align": "m-auto", "text": "Env\xEDame un correo" })}`, "default": ($$result2) => renderTemplate`<p>Para cualquier consulta o pregunta, no dude en ponerse en contacto conmigo.</p><p>Hablemos de sus necesidades y de los requisitos de su proyecto.</p>` })}</div>`;
}, "D:/APP/Ongoing/freelance-portfolio/src/components/about/es-about.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$ESLayout, { "page": "Acerca de" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "AboutInfoEs", $$EsAbout, {})}</main>` })}`;
}, "D:/APP/Ongoing/freelance-portfolio/src/pages/es/about.astro", void 0);

const $$file = "D:/APP/Ongoing/freelance-portfolio/src/pages/es/about.astro";
const $$url = "/es/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, $$Layout as a, $$ESLayout as b, about$1 as c, about as d, imageConfig as i };
