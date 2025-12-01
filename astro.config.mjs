// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import mdx from '@astrojs/mdx';

import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc';


const macros = {
  "\\cover": "\\mathfrak{#1}",
  "\\ideal": "\\mathfrak{#1}",
  "\\cat": "\\text{\\textbf{#1}}",
  "\\sheaf": "\\mathcal{#1}",
  "\\id": "\\mathrm{id}",
  "\\eff": "\\mathrm{eff}",
  "\\uncommon": "\\textsuperscript{\\textdagger}",
  "\\opp": "\\mathrm{op}",
  "\\epsilon": "\\varepsilon",
  "\\xrightrightarrow": "\\overset{#1}{\\rightrightarrows}",
  "\\isom": "\\underset{#1}{\\cong}",
  "\\projsp": "\\mathbb{P}",
  "\\Z": "\\mathbb{Z}",
  "\\Q": "\\mathbb{Q}",
  "\\R": "\\mathbb{R}",
  "\\C": "\\mathbb{C}",
  "\\obj": "\\mathop{\\mathrm{Obj}}\\nolimits",
  "\\mor": "\\mathop{\\mathrm{Mor}}\\nolimits",
  "\\coeq": "\\mathop{\\mathrm{Coeq}}\\nolimits",
  "\\coeqmor": "\\mathop{\\mathrm{coeq}}\\nolimits",
  "\\spec": "\\mathop{\\mathrm{Spec}}\\nolimits",
  "\\sq": "\\mathop{\\mathrm{Sq}}",
  "\\homo": "\\mathop{\\mathrm{H}}",
  "\\gal": "\\mathop{\\mathrm{Gal}}\\nolimits",
  "\\aut": "\\mathop{\\mathrm{Aut}}\\nolimits",
  "\\conn": "\\mathop{\\mathrm{Conn}}\\nolimits",
  "\\supp": "\\mathop{\\mathrm{supp}}\\nolimits",
  "\\hom": "\\mathop{\\mathrm{Hom}}\\nolimits",
  "\\tor": "\\mathop{\\mathrm{Tor}}\\nolimits",
  "\\ext": "\\mathop{\\mathrm{Ext}}\\nolimits",
  "\\im": "\\mathop{\\mathrm{Im}}\\nolimits",
  "\\length": "\\mathop{\\mathrm{length}}\\nolimits",
  "\\projd": "\\mathop{\\mathrm{proj.dim}}\\nolimits",
  "\\injd": "\\mathop{\\mathrm{inj.dim}}\\nolimits",
  "\\gld": "\\mathop{\\mathrm{gl.dim}}\\nolimits",
  "\\sup": "\\mathop{\\mathrm{sup}}\\limits",
  "\\colim": "\\mathop{\\mathrm{colim}}\\limits",
  "\\coker": "\\mathop{\\mathrm{Coker}}\\nolimits",
  "\\ker": "\\mathop{\\mathrm{Ker}}\\nolimits",
  "\\lie": "\\mathop{\\mathrm{Lie}}\\nolimits",
  "\\colie": "\\mathop{\\mathrm{coLie}}\\nolimits",
};


// https://astro.build/config
export default defineConfig({
  site: "https://algebraic-ghost.github.io",
  integrations: [preact(), mdx({
    smartypants: false,
    remarkPlugins: [remarkMath, remarkGfm],
      rehypePlugins: [
        [rehypeKatex, { macros }],
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: "append",
          content: {
            type: "element",
            tagName: "i",
            properties: {
              className: ["heading-anchor", "fa", "fa-link"],
            },
          },
        }],
        [rehypeToc, { headings: ["h2", "h3"], ordered: false }],
      ],
  })], 
  markdown: {
    smartypants: false,
    remarkPlugins: [remarkMath],
    rehypePlugins: [[
      rehypeKatex, { macros }],
      "rehype-slug",
      [
        "rehype-autolink-headings",
        {
          behavior: "append",
          content: {
            type: "element",
            tagName: "i",
            properties: {
              className: ["heading-anchor", "fa", "fa-link"],
            },
            children: [],
          },
        },
      ],
      ["rehype-toc", { headings: ["h2", "h3"] }],
      ["rehype-toc", { headings: ["h2", "h3"],
        ordered: false,
       }],
    ],
  },
});