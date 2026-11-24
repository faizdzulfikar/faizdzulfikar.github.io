import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    years: z.string(),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    code: z.enum(['Public', 'Private']).default('Private'),
    link: z.string().optional(),
    repo: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const creative = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/creative' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['Design', 'Video', 'Editorial', 'Campaign']),
    client: z.string(),
    years: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    order: z.number().default(100),
  }),
});

const cv = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cv' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    period: z.string(),
    sort: z.coerce.date(),
    section: z.enum([
      'Research',
      'Clinical',
      'Education',
      'Creative and communication',
      'Organisations',
      'Certificates and presentations',
    ]),
  }),
});

// About page: one Markdown file per section. Hero, quick facts and SEO live in src/data/about.json.
const focus = z
  .enum(['center', 'top', 'bottom', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'])
  .default('center');

const aboutImage = z.object({
  src: z.string().optional().default(''),
  alt: z.string().default(''),
  caption: z.string().optional(),
  focus: focus.optional().default('center'),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    navLabel: z.string().optional(),
    eyebrow: z.string().optional(),
    subtitle: z.string().optional(),
    order: z.number().default(100),
    visible: z.boolean().default(true),
    layout: z
      .enum(['text', 'image-left', 'image-right', 'full-image', 'gallery', 'quote', 'projects', 'closing'])
      .default('text'),
    images: z.array(aboutImage).nullish().transform((v) => v ?? []),
    pullQuote: z
      .object({ text: z.string().optional().default(''), cite: z.string().optional() })
      .nullish(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .nullish()
      .transform((v) => v ?? []),
    // Project ids or Pages CMS reference paths, e.g. "cohard-ph-platform" or "src/content/projects/cohard-ph-platform.md".
    projects: z
      .array(z.string())
      .nullish()
      .transform((v) => (v ?? []).map((p) => p.split('/').pop()!.replace(/\.mdx?$/, ''))),
  }),
});

export const collections = { writing, projects, creative, cv, about };
