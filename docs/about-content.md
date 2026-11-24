# About page: content guide and schema

The About page (`/about/`) is built from two places. Both are editable in Pages CMS, and both are plain files you can also edit by hand or hand to an AI assistant to fill in.

| What | File | Pages CMS menu |
| --- | --- | --- |
| Hero (section 01), quick facts, SEO, "last updated" date, placeholder switch | `src/data/about.json` | About page (hero, quick facts, SEO) |
| Sections 02 onwards, one Markdown file each | `src/content/about/*.md` | About page sections |

Your name comes from `src/data/profile.json` (Profile), so it stays the same everywhere on the site.

## Rules for writing the content

- Language: English, first person.
- Section bodies are Markdown: paragraphs, *italic*, **bold**, [links](/projects/), lists, `###` sub-headings. Do not use `#` or `##` inside a body; the section title is already the `##`.
- Notes to yourself go in HTML comments: `<!-- TODO: ... -->`. They never appear on the site.
- To force a line break inside one paragraph, end the line with a backslash `\`.
- Internal links start with `/` and end with `/`: `/projects/`, `/projects/cohard-ph-platform/`, `/experience/`, `/creative/`, `/writing/`.

## `src/data/about.json`

```jsonc
{
  "seoTitle": "About",                 // required. Browser tab shows "About | Faiz Dzulfikar"
  "seoDescription": "…",               // search result and link preview text, about 150 characters
  "updated": "2026-11-24",             // YYYY-MM-DD, shown at the bottom as "Last updated …"
  "showPlaceholders": false,           // true = show "Photo to come" frames on the live site for empty image slots
  "hero": {
    "eyebrow": "About",                // small label after "01"
    "headline": "…",                   // required. The large sentence
    "intro": "…",                      // one paragraph
    "location": "Yogyakarta, Indonesia",
    "portrait": "",                    // "/images/your-file.jpg", or "" for no photo (hero becomes text only)
    "portraitAlt": "Portrait of Faiz Dzulfikar",
    "portraitCaption": "",             // optional
    "portraitFocus": "center"          // center | top | bottom | left | right | top left | top right | bottom left | bottom right
  },
  "quickFacts": {
    "visible": true,
    "title": "At a glance",
    "items": [ { "label": "Based in", "value": "Yogyakarta, Indonesia" } ]   // any number of items
  }
}
```

## Section files: `src/content/about/<slug>.md`

The file name (without `.md`) becomes the section's anchor, e.g. `road-to-medicine.md` → `/about/#road-to-medicine`. Use lowercase words joined by hyphens, and keep a file name once people may have linked to it.

```yaml
---
title: The road to medicine          # required. Section heading
navLabel: Road to medicine           # optional. Short name for the section menus (defaults to title)
eyebrow: Origins                     # optional. Small label next to the section number
subtitle: One or two sentences.      # optional. Standfirst under the heading
order: 2                             # required. Lower comes first; decimals are fine (2.5 sits between 2 and 3)
visible: true                        # false hides the section without deleting it
layout: image-right                  # see the table below
images:                              # optional, any layout that shows images
  - src: /images/about/oath.jpg      # "" keeps an empty slot (hidden on the live site unless showPlaceholders is true)
    alt: Describe the photo for someone who cannot see it
    caption: Taking the physician's oath, 2025
    focus: center                    # same values as portraitFocus
pullQuote:                           # optional. Shown large after the section
  text: "Everyone has their own pace."
  cite: ""                           # optional attribution
links:                               # optional. "See also" links under the section
  - label: Projects
    href: /projects/
projects:                            # only for layout: projects. Project file names from src/content/projects
  - cohard-ph-platform
  - prima-prolanis
---

Body in Markdown.
```

Sections are numbered automatically: the hero is 01 and visible sections follow in `order`. Quote interludes are not numbered.

### Layouts

| `layout` | What it looks like | Images used |
| --- | --- | --- |
| `text` | Heading, then text in a comfortable reading column | none |
| `image-left` | Photo column on the left, text on the right | first image tall (4:5); extra images smaller below |
| `image-right` | Text on the left, photo column on the right | same as above |
| `full-image` | One wide photo (16:9), then text | first image |
| `gallery` | Text, then an editorial collage | up to 4 |
| `projects` | Text, then a showcase of the listed projects, linking to each project page; uses each project's Screenshot | from the projects |
| `quote` | Just the pull quote, very large, between two sections. Needs `pullQuote.text`; body and title are not shown | none |
| `closing` | Text set quietly, with the final paragraph set large in the editorial serif | none |

If an image layout has no images yet, the section falls back to `text` on the live site, so nothing looks broken.

## Adding or replacing photos

1. In Pages CMS, open the section (or the About settings for the portrait) and use the image field to upload. Files go to `public/images/` and the field stores a path like `/images/oath.jpg`.
2. Always fill in the description (alt text). Add a caption if it helps the story.
3. If the face or subject is near an edge, set the focal point so cropping keeps it in frame.
4. Before uploading, export photos at most 2000 px on the long side, JPEG or WebP, ideally under 400 KB. Portraits work best at 4:5.

By hand: put the file in `public/images/` (e.g. `public/images/about/oath.jpg`) and write `src: /images/about/oath.jpg`.

## Complete example section file

```markdown
---
title: Learning to move
navLabel: Learning to move
eyebrow: Running and lifting
subtitle: Not a transformation story. Just a slow change of mind.
order: 7
visible: true
layout: image-left
images:
  - src: /images/about/half-marathon.jpg
    alt: Faiz crossing the finish line of a half marathon
    caption: Half marathon finish
    focus: top
pullQuote:
  text: "Everyone has their own pace."
links: []
projects: []
---

As a kid I didn't like sport, and football least of all.

Now strength training and running are a personal space outside work.
```
