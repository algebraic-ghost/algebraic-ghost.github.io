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
import remarkToc from 'remark-toc';

const macros = {
  "\\cover": "\\mathfrak{#1}",
  "\\ideal": "\\mathfrak{#1}",
  "\\cat": "\\text{\\textbf{#1}}",
  "\\sheaf": "\\mathcal{#1}",
  "\\id": "\\mathrm{id}",
  "\\eff": "\\mathrm{eff}",
  "\\lra": "\\longrightarrow",
  "\\lmapsto": "\\\longmapsto",
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
  "\\bti": "\\mathop{\\mathrm{Bti}}\\nolimits",
  "\\tgb": "\\mathop{\\mathrm{TgB}}\\nolimits",
  "\\obj": "\\mathop{\\mathrm{Obj}}\\nolimits",
  "\\mor": "\\mathop{\\mathrm{Mor}}\\nolimits",
  "\\coeq": "\\mathop{\\mathrm{Coeq}}\\nolimits",
  "\\endo": "\\mathop{\\mathrm{End}}\\nolimits",
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
  "\\hocolim": "\\mathop{\\mathrm{hocolim}}\\limits",
  "\\holim": "\\mathop{\\mathrm{holim}}\\limits",
  "\\coker": "\\mathop{\\mathrm{Coker}}\\nolimits",
  "\\ker": "\\mathop{\\mathrm{Ker}}\\nolimits",
  "\\lie": "\\mathop{\\mathrm{Lie}}\\nolimits",
  "\\colie": "\\mathop{\\mathrm{coLie}}\\nolimits",
  "\\tensor": "\\mathop{\\otimes}\\limits",
  "\\vect": "\\overrightarrow",
};


// https://astro.build/config
export default defineConfig({
  site: "https://algebraic-ghost.github.io",
  integrations: [preact(), mdx({
    smartypants: true,
    remarkPlugins: [remarkMath, remarkGfm],
      rehypePlugins: [
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
        [rehypeKatex, { macros }],
      ],
  })], 
  markdown: {
    shikiConfig: {
      // 好きな組み込みテーマを指定します（例: 'dracula', 'github-dark', 'nord' など）
      theme: 'tokyo-night',
      
      // 背景色を透過させたい場合は true にします
      wrap: true, 
    },
    smartypants: true,
    remarkPlugins: [remarkMath],
    rehypePlugins: [
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
      ["rehype-toc", { headings: ["h2", "h3"],
        ordered: false,
       }],
       [rehypeKatex, { macros }]
    ],
  },
});