# PageGuide <small>by Diligentia Uitgeverij</small>

| [Installation](#installation) | [Usage in Javascript](#javascript) | [Usage in Typescript](#typescript) | [Documentation](doc/index.html) |

## Why another library
The way our applications are built make it near impossible to simply add a backdrop div, and expect you can elevate the target above it using the z-index. 
This means all libraries I've tried were no good.

Our PageGuide is different, because it uses a canvas to mask the target. A simple canvas is placed over all content, the backdrop is drawn, and we clear a rectangle around the target. 
That way we effectively hightlight the target.

As a caveat, it is easy to hightlight multiple elements.

## Installation
```
npm install --save pageguide
```

## Usage
### Javascript
```javascript
const PageGuide = require('pageguide');

/**
 * By default the PageGuide will add a button to start the pageGuide, if you want to use your own button, simply pass false.
 * @type { boolean }
 */
const addButton = false;
/**
 * pageGuideData
 * @type {{ content: string, title?: string, element?: string, position?: string }}
 */
const pageGuideData = [{
    title: 'PageGuide 2.0',
    content: '<p>When you specify no element, the popup will simply be centered on your page.</p><p>You can use HTML to add multiple paragraphs and markup.</p',
}, {
    title: 'Single Element',
    content: 'When you specify an element, the popup will be positioned using <a href="https://popper.js.org/">popper.js</a>.<br>Default placement is at the bottom',
    element: '#first-target',
}, {
    title: 'Specified Position',
    content: 'You can specify the position of the popup, relative to the target.',
    element: '#second-target',
		position: 'right',
}, {
    title: 'Multiple Elements',
    content: 'When you specify multiple elements, they all get highlighted. The popup will be positioned around the first target, which is also the one that will be scrolled into view.',
    element: '.multiple-targets',
}];

/**
 * pageGuide
 * @type { PageGuide }
 */
const pageGuide = new PageGuide(pageGuideData, addButton);
pageGuide.start();
```

### Typescript
```typescript

import { PageGuide, IPageGuideItem } from 'pageguide';

/**
 * By default the PageGuide will add a button to start the pageGuide, if you want to use your own button, simply pass false.
 * @type { boolean }
 */
const addButton: boolean = false;
/**
 * pageGuideData
 * @type { IPageGuideItem[] }
 */ 
const pageGuideData: IPageGuideItem[] = [{
    title: 'PageGuide 2.0',
    content: '<p>When you specify no element, the popup will simply be centered on your page.</p><p>You can use HTML to add multiple paragraphs and markup.</p',
}, {
    title: 'Single Element',
    content: 'When you specify an element, the popup will be positioned using <a href="https://popper.js.org/">popper.js</a>.<br>Default placement is at the bottom',
    element: '#first-target',
}, {
    title: 'Specified Position',
    content: 'You can specify the position of the popup, relative to the target.',
    element: '#second-target',
		position: 'right',
}, {
    title: 'Multiple Elements',
    content: 'When you specify multiple elements, they all get highlighted. The popup will be positioned around the first target, which is also the one that will be scrolled into view.',
    element: '.multiple-targets',
}];

/**
 * pageGuide
 * @type { PageGuide }
 */
const pageGuide: PageGuide = new PageGuide(pageGuideData, addButton);

pageGuide.start();

```