# PageGuide <small>by Diligentia Uitgeverij</small>

| [Installation](#installation) | [Usage in Javascript](#javascript) | [Usage in Typescript](#typescript) | [Documentation](doc/) |

## Why another library
The way our applications are built make it near impossible to simply add a backdrop div, and expect you can elevate the target above it using the z-index. 
This means all libraries I've tried were no good.

Our PageGuide is different, because it uses a canvas to mask the target. A simple canvas is placed over all content, the backdrop is drawn, and we clear a shape around the target. 
That way we effectively highlight the target.

As a caveat, it is easy to hightlight multiple elements, and to specify shapes.

## Installation
```
npm install --save pageguide
```

## Usage
For each target you need to specify only the content. All other values are strictly optional. These are your options:
* **content**: The _required_ html-string you wish to show in the popup. `<p>` tags are optional.
* **title**: The title of your popup
* **element**: The css-selector to your target(s). for instance: `ul.menu > li.menu-items` will highlight all listItems that fit the bill. The popup will position itself around the first target. When you don't specify an element, the popup will simply postion itself in the center of the window, and the backdrop won't highlight a thing. 
* **position**: The position you want the popup to be relative to your target. You can pick one of the 4 directions: `top`, `right`, `bottom` or `left`. By default the popup will position itself on the bottom of the target.
* **shape**: The shape of the highlight. You can pick one of these: `rect`, `rounded_rect`, `circle` or `ellipse`. Default shape is a simple `rect`.
* **padding**: You can specify a padding for your highlighting mask. Defaults to `0`.
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
    title: 'Specified shape',
    content: 'You can specify the shape of the highlight of a target. You can pick from "rect" (which is the default value), "rounded_rect", "circle" or "ellipse"',
    element: '#second-target',
    shape: 'circle',
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
    title: 'Specified shape',
    content: 'You can specify the shape of the highlight of a target. You can pick from "rect" (which is the default value), "rounded_rect", "circle" or "ellipse"',
    element: '#second-target',
    shape: 'circle',
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