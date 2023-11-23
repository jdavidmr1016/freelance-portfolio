import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_e964b33f.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_6950ee5f.mjs';
import './chunks/pages/generic_561c109c.mjs';
import './chunks/astro-assets-services_092232ec.mjs';
import './chunks/pages/about_bdcef317.mjs';
/* empty css                                 *//* empty css                                 */
const _page0  = () => import('./chunks/generic_217e90e7.mjs');
const _page1  = () => import('./chunks/index_407795a2.mjs');
const _page2  = () => import('./chunks/portfolio_829240d2.mjs');
const _page3  = () => import('./chunks/fullstack-dev_575d0ace.mjs');
const _page4  = () => import('./chunks/frontend-dev_becf07a0.mjs');
const _page5  = () => import('./chunks/backend-dev_f61546b0.mjs');
const _page6  = () => import('./chunks/services_190382b2.mjs');
const _page7  = () => import('./chunks/contact_f5b4e836.mjs');
const _page8  = () => import('./chunks/about_6cf8e8d7.mjs');
const _page9  = () => import('./chunks/index_0aae9277.mjs');
const _page10  = () => import('./chunks/portfolio_7950d30f.mjs');
const _page11  = () => import('./chunks/services_f9e55d66.mjs');
const _page12  = () => import('./chunks/contact_c3055f8e.mjs');
const _page13  = () => import('./chunks/about_eb53393f.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.3.4/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio.astro", _page2],["src/pages/services/fullstack-dev.astro", _page3],["src/pages/services/frontend-dev.astro", _page4],["src/pages/services/backend-dev.astro", _page5],["src/pages/services.astro", _page6],["src/pages/contact.astro", _page7],["src/pages/about.astro", _page8],["src/pages/es/index.astro", _page9],["src/pages/es/portfolio.astro", _page10],["src/pages/es/services.astro", _page11],["src/pages/es/contact.astro", _page12],["src/pages/es/about.astro", _page13]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
