export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/backend-dev_ec9e2ea6.mjs').then(n => n.b);

export { page };
