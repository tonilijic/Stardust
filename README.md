# Stardust

## Experiment Goal

In the limited time (roughly 3-4 hours), use the [stardust.style](https://stardust.style) to redesign the homepage of the selected site: [https://wasp.sh](https://wasp.sh). Check its output, inject corrections, loop until satisfied or time's up, and deploy it in a test environment.

"Final" version of the experiment can be previewed [here](https://stardust-gray.vercel.app)

## Why I picked this site specifically

1. I've been following Wasp's journey for a few months already and the framework they are building seemed interesting. Wasp is backed by Y Combinator, it's growing fast and it's getting popular in the AI community.

2. I'm familiar with the brand and based on a recent LinkedIn post I'm aware that they've built up quite a large design debt and now are looking for a redesign. They finally decided how they as a brand want to be perceived and shared that in a [recent blog post](https://wasp.sh/blog/2026/07/13/why-design-matters-for-a-web-framework).

3. The current site is hectic enough to see the effects of stardust.style immediately. The site offers enough room for layout changes and consists of interactive components and visuals that can be fully interactive as they can be converted into plain HTML and fully controlled by the brand. It's not image rich, meaning that there are more degrees of freedom for stardust.style

## Stardust Output

Full screenshots can be found under [screenshots](assets/screenshots/)

![Direction 1 (The corrected spec — brand-faithful, ships the declared system literally)](https://github.com/tonilijic/Stardust/blob/2849b0ecdb854471ec55296f3ba2f61e90ad3770/assets/thumbnails/Direction%20-1%402x.jpg)

![Direction 2 (The schematic — the blueprint/circuit-diagram trait pushed as the page's structure)](https://github.com/tonilijic/Stardust/blob/2320b49e02d733ab307c121a9c2308befc71d19c/assets/thumbnails/Direction%20-2%402x.jpg)

![Direction 3 (The spec document — the numbered-eyebrow trait pushed into a running RFC structure)](https://github.com/tonilijic/Stardust/blob/2320b49e02d733ab307c121a9c2308befc71d19c/assets/thumbnails/Direction%20-3%402x.jpg)

### Quick observations on all prototypes

Negative:

- replaced FAQ answers from the site with generated content.
- left out illustrations
- included a simple terminal visual, but left out interactivity as on the current page
- emphasized "batteries included" in some form, either as a section or section tag, instead of "Features" and opted out of leveraging a complex terminal visual/component for conveying the message
- used a mono font for headings, but not for paragraphs
- all three used emojis
- Y Combinator logo is missing
- CTA vertical translation on hover
- uneven thickness of lines

Neutral:

- all three followed the exact order of sections that's presented on the site
- removed profile pictures of users in testimonials

Positive:

- layouts of all three look properly executed, and cleaned up.
- all three prototypes are responsive, with direction A being the most polished.
- none of the directions deviated too much from the current site's brand. Only **direction 1** followed the brand guidelines described in the blog post, but not yet reflected on the current site, the most accurately - at least in terms of colors.

## What I kept

I opted for direction 1, primarily because of the interesting, document-like layout that felt different from the other two, and for following the brand instructions the best. I usually like to deviate from the brand a bit, but the Wasp team was quite clear about what was non-negotiable in their post.

## What I overrode

Overrides are mentioned in the [Override.md](plans/Override.md) file. (I've probably overridden much more but forgot to update Overrides.md)

## Next Step if I'd extend this experiment for another week

Aside from running stardust on other pages, I'd probably focus more on the nitty-gritty details that are primarily gut/feeling driven:

- **urgent:** just noticed that CTAs in nav header on mobile are aligned to left instead of space-between
- improving skills for generating html/svg rich visuals that would be fully interactive ([current illustrations](gen_illustrations/) are one-shotted and are not included)
- subtle transitions and transformations, just to give a hint of a "light and joyful" framework
- to ensure brand consistency, card thumbnails, when populated with external images, could benefit from a simple shader overlay, e.g. [halftone cmyk filter from paper](https://shaders.paper.design/halftone-cmyk)

</br>

> I ran out of time and tokens and will stop here
>
> Best,
> Toni

* LLM used: sonnet 5 (default in pro) 200k context window
