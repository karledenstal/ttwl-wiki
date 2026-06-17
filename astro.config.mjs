// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'TTWL Wiki',
      social: [{ icon: 'window', label: 'Home', href: 'https://ttwl-rp.net' }],
      favicon: '/favicon.png',
      plugins: [
        lucode()
      ],
      sidebar: [
        {
          label: 'Welcome',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Premise', slug: 'welcome/premise' },
            { label: 'Guidelines', slug: 'welcome/guidelines' },
          ],
        },
        {
          label: 'Bestiary',
          items: [
            { label: 'Overview', slug: 'bestiary/overview' },
            { label: 'Damned', slug: 'bestiary/damned' },
            { label: 'Faded', slug: 'bestiary/faded' },
            { label: 'Gifted', slug: 'bestiary/gifted' },
            { label: 'Hollowborn', slug: 'bestiary/hollowborn' },
            { label: 'Human', slug: 'bestiary/human' },
            { label: 'Lycanthrope', slug: 'bestiary/lycanthrope' },
            { label: 'Skinwalker', slug: 'bestiary/skinwalker' },
          ]
        },
        {
          label: 'Field Guide',
          items: [{ autogenerate: { directory: 'field-guide' } }]
        },
        {
          label: 'Pike Creek',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Overview', slug: 'pike-creek/overview' },
            { label: 'Brief History', slug: 'pike-creek/brief-history' },
            { label: 'Infrastructure', slug: 'pike-creek/infrastructure' },
            { label: 'Surroundings', slug: 'pike-creek/surroundings' },
          ],
        },
        {
          label: 'The Weave',
          items: [{ autogenerate: { directory: 'the-weave' } }]
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
    }),
  ],
});
