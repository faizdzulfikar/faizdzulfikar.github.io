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

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ title: z.string() }),
});

export const collections = { writing, projects, creative, cv, pages };
