import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import profile from '../data/profile.json';

export async function GET(context) {
  const posts = (await getCollection('writing', (p) => !p.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  return rss({
    title: `${profile.name}: writing`,
    description: 'Notes on medicine, public health, and building tools as a clinician.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: `/writing/${p.id}/`,
    })),
  });
}
