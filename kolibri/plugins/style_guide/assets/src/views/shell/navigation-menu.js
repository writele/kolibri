const _ = require('lodash');

const sortSectionLink = (links) => _.sortBy(links, [(link) => link.linkLabel]);
const base = '/style_guide';

// This data structure contains the navigational links pointing to all the
// content pages in the style guide.
// Notes: This is view-agnostic; it doesn't make assumption on how it will be
// rendered (whether it's a side-nav or a horizontal menu).
const navigationMenu = [
  {
    sectionHeading: 'Styles',
    sectionLinks: sortSectionLink([
      {
        linkLabel: 'Typography',
        linkRoute: {
          path: `${base}/typography`,
          component: require('../content/style/typography')
        }
      },
    ])
  },
  {
    sectionHeading: 'Components',
    sectionLinks: sortSectionLink([
      {
        linkLabel: 'Checkboxes',
        linkRoute: {
          path: `${base}/components/checkboxes`,
          component: require('../content/components/checkboxes')
        }
      },
      {
        linkLabel: 'Radio buttons',
        linkRoute: {
          path: `${base}/components/radio_buttons`,
          component: require('../content/components/radio_buttons')
        }
      },
      {
        linkLabel: 'Buttons',
        linkRoute: {
          path: `${base}/components/buttons`,
          component: require('../content/components/buttons')
        }
      },
      {
        linkLabel: 'Text fields',
        linkRoute: {
          path: `${base}/components/text_fields`,
          component: require('../content/components/text_fields')
        }
      }
    ])
  }
];

// Extract the routes from the sideNavMenu so they can be added to VueRouter.
const navigationMenuRoutes = _.flatten(
    navigationMenu.map(menuSection =>
        menuSection.sectionLinks.map(link => link.linkRoute)));

module.exports = { navigationMenu, navigationMenuRoutes };