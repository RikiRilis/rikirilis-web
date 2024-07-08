/* empty css                        */
import { q as createComponent, s as renderTemplate, w as renderComponent } from './astro/server_C3N7-rJF.mjs';
import { $ as $$Layout } from './Layout_bpcArr7h.mjs';
import { c as $$Contact } from './Contact_Cwgp5a5Z.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Web | RikiRilis", "description": "The RikiRilis' Website. Read stories and comments about all you want to know. I build easy-to-use websites and Android apps, with fast technologies and UX/UI standards to improve user experience." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/RikiRilis/Desktop/Dev/Astro/Projects/rikirilis-web-oficial/src/pages/index.astro", void 0);

const $$file = "C:/Users/RikiRilis/Desktop/Dev/Astro/Projects/rikirilis-web-oficial/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
