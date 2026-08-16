# Stardust

## Experiment Goal

In the limited time, (roughly 3-4 hours) use the [stardust.style](https://stardust.style) to redesign the homepage of selected site: [https://wasp.sh](https://wasp.sh).Check its output, inject corrections, loop until satisfied or time's up, and deploy it in test environment.

"Final" version of the experiment can be previewed [here](https://stardust-gray.vercel.app)

## Why I picked this site specifically

1. I've been following Wasp's journey for a few months already and the framework they are building seemed interesting. Wasp is backed by Y-combinator, it's growing fast and it's getting popular in the AI community.

2. I'm familiar with the brand and based on recent LinkedIn post I'm aware that they built up quite large design debt and now are looking for a redesign. They finally decided how they as a brand want to be perceived and shared that in a [recent blog post](https://wasp.sh/blog/2026/07/13/why-design-matters-for-a-web-framework).

3. Current site is hectic enough to see effects of stardust.style immediately. Site offers enough room for layout changes and consists of interactive components and visuals that can be fully interactive as they can be converted into plain HTML and fully controlled by brand. It's not image rich, meaning that there are more degrees of freedom for stardust.style

## Stardust Output

Full screenshots can be found under [screenshots](assets/screenshots/)

![Direction 1 (The corrected spec — brand-faithful, ships the declared system literally)](https://github.com/tonilijic/Stardust/blob/2849b0ecdb854471ec55296f3ba2f61e90ad3770/assets/thumbnails/Direction%20-1%402x.jpg)

![Direction 2 (The schematic — the blueprint/circuit-diagram trait pushed as the page's structure)](https://github.com/tonilijic/Stardust/blob/2320b49e02d733ab307c121a9c2308befc71d19c/assets/thumbnails/Direction%20-2%402x.jpg)

![Direction 3 (The spec document — the numbered-eyebrow trait pushed into a running RFC structure)](https://github.com/tonilijic/Stardust/blob/2320b49e02d733ab307c121a9c2308befc71d19c/assets/thumbnails/Direction%20-3%402x.jpg)

### Quick observations on all prototypes

Negative:

- replaced FAQ answers from the site with generated content.
- left out illustrations
- included simple terminal visual, but left out interactivity as on current page
- emphasized "batteries included" in some form, either as a section or section tag, instead of "Features" and opted out of leveraging complex terminal visual/component for conveying message
- used mono font for headings, but not for paragraphs
- all three used emojis
- Y combinator logo is missing
- CTA vertical translation on hover
- uneven thickness of lines

Neutral:

- all three followed the exact orders of sections that's presented on the site
- removed profile pictures of users in testimonials

Positive:

- layouts of all three looks properly executed, and cleaned up.
- all three prototypes are responsive, with direction A being the most polished.
- none of direction deviated too much from the current site brand. Only **direction 1** followed brand guidelines described in blog post, but not reflected yet on the current site, the most accurate - at least in terms of colors.

## What I kept

I opted for direction 1, primarily because of interesting, document-like layout that felt different than other two, and following brand instructions the best. I usually like to deviate from brand a bit, but wasp team was quite clear about non-negotiable in their post.

## What I overrode

Overrides are mentioned in [Override.md](plans/Override.md) file. (I've probably overridden much more but forgot to call update Overrides.md)

## Next Step if I'd extend this experiment for another week

Aside from running stardust on other pages I'd probably focus more on nitty-gritty details that are primarily gut/feeling driven:

- improving skills for generating html/svg rich visuals that would be fully interactive ([current illustrations](gen_illustrations/) are on-shotted and are not included)
- subtle transitions and transformations, just to give hint of "light and joyful" framework
- to ensure brand consistency cards thumbnails, when populated with external images could benefit from a simple shader overlay, e.g. [halftone cmyk filter from paper] (https://shaders.paper.design/halftone-cmyk)


> I ran out of time and tokens and will stop here
>
> Best,
> Toni

> LLM used: sonnet 5 (default in pro) 200k context window

