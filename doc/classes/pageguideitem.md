[pageguide](../README.md) > [PageGuideItem](../classes/pageguideitem.md)

# Class: PageGuideItem

*__class__*: PageGuideItem

*__description__*: A single item to display information.

*__author__*: Peter Delvaux [peter.delvaux@diligentia-uitgeverij.be](mailto:peter.delvaux@diligentia-uitgeverij.be)

*__since__*: 28/05/2018

*__export__*: PageGuideItem

## Hierarchy

**PageGuideItem**

## Implements

* [IPageGuideItem](../interfaces/ipageguideitem.md)

## Index

### Constructors

* [constructor](pageguideitem.md#constructor)

### Properties

* [collectionLength](pageguideitem.md#collectionlength)
* [content](pageguideitem.md#content)
* [element](pageguideitem.md#element)
* [gui](pageguideitem.md#gui)
* [index](pageguideitem.md#index)
* [padding](pageguideitem.md#padding)
* [position](pageguideitem.md#position)
* [shape](pageguideitem.md#shape)
* [targets](pageguideitem.md#targets)
* [title](pageguideitem.md#title)
* [BOTTOM](pageguideitem.md#bottom)
* [CIRCLE](pageguideitem.md#circle)
* [CSS_PREFIX](pageguideitem.md#css_prefix)
* [ELLIPSE](pageguideitem.md#ellipse)
* [LEFT](pageguideitem.md#left)
* [RECT](pageguideitem.md#rect)
* [RIGHT](pageguideitem.md#right)
* [ROUNDED_RECT](pageguideitem.md#rounded_rect)
* [TOP](pageguideitem.md#top)

### Methods

* [cleanup](pageguideitem.md#cleanup)
* [draw](pageguideitem.md#draw)
* [onExit](pageguideitem.md#onexit)
* [onNext](pageguideitem.md#onnext)
* [onPrevious](pageguideitem.md#onprevious)
* [update](pageguideitem.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PageGuideItem**(content: *`string`*, index: *`number`*, collectionLength: *`number`*, element?: *`string`*, title?: *`string`*, position?: *`string`*, shape?: *`string`*, padding?: *`number`*): [PageGuideItem](pageguideitem.md)

*Defined in [PageGuideItem.ts:42](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L42)*

*__description__*: Creates a new PageGuideItem

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| content | `string` | - |  Contents of the popup, can be plaintext or HTML |
| index | `number` | - |  Index of the item in the collection |
| collectionLength | `number` | - |  Length of the collection |
| `Optional` element | `string` | - |  element query selector |
| `Default value` title | `string` | &quot;&quot; |  title of the popup |
| `Default value` position | `string` |  PageGuideItem.BOTTOM |  position, defaults to bottom |
| `Default value` shape | `string` |  PageGuideItem.RECT |  shape of the highlight, defaults to rect |
| `Default value` padding | `number` | 0 |  A padding around the element and the mask. |

**Returns:** [PageGuideItem](pageguideitem.md)

___

## Properties

<a id="collectionlength"></a>

###  collectionLength

**● collectionLength**: *`number`*

*Defined in [PageGuideItem.ts:58](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L58)*

Length of the collection

___
<a id="content"></a>

###  content

**● content**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[content](../interfaces/ipageguideitem.md#content)*

*Defined in [PageGuideItem.ts:56](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L56)*

Contents of the popup, can be plaintext or HTML

___
<a id="element"></a>

### `<Optional>` element

**● element**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[element](../interfaces/ipageguideitem.md#element)*

*Defined in [PageGuideItem.ts:59](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L59)*

element query selector

___
<a id="gui"></a>

### `<Private>` gui

**● gui**: *[PageGuideItemGUI](pageguideitemgui.md)*

*Defined in [PageGuideItem.ts:36](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L36)*

*__description__*: Graphical User Interface of the PageGuideItem

*__type__*: {PageGuideItemGUI}

*__memberof__*: PageGuideItem

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [PageGuideItem.ts:57](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L57)*

Index of the item in the collection

___
<a id="padding"></a>

###  padding

**● padding**: *`number`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[padding](../interfaces/ipageguideitem.md#padding)*

*Defined in [PageGuideItem.ts:63](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L63)*

A padding around the element and the mask.

___
<a id="position"></a>

###  position

**● position**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[position](../interfaces/ipageguideitem.md#position)*

*Defined in [PageGuideItem.ts:61](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L61)*

position, defaults to bottom

___
<a id="shape"></a>

###  shape

**● shape**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[shape](../interfaces/ipageguideitem.md#shape)*

*Defined in [PageGuideItem.ts:62](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L62)*

shape of the highlight, defaults to rect

___
<a id="targets"></a>

###  targets

**● targets**: *`NodeListOf`<`HTMLElement`>*

*Defined in [PageGuideItem.ts:42](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L42)*

*__description__*: NodeList of all found targets, can be undefined or empty.

*__type__*: {NodeListOf}

*__memberof__*: PageGuideItem

___
<a id="title"></a>

###  title

**● title**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[title](../interfaces/ipageguideitem.md#title)*

*Defined in [PageGuideItem.ts:60](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L60)*

title of the popup

___
<a id="bottom"></a>

### `<Static>` BOTTOM

**● BOTTOM**: *`string`* = "bottom"

*Defined in [PageGuideItem.ts:27](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L27)*

___
<a id="circle"></a>

### `<Static>` CIRCLE

**● CIRCLE**: *`string`* = "circle"

*Defined in [PageGuideItem.ts:22](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L22)*

___
<a id="css_prefix"></a>

### `<Static>` CSS_PREFIX

**● CSS_PREFIX**: *`string`* = "item"

*Defined in [PageGuideItem.ts:18](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L18)*

*__description__*: prefix used for the creation of CSS-classes

*__static__*: 

*__type__*: {string}

*__memberof__*: PageGuideItem

___
<a id="ellipse"></a>

### `<Static>` ELLIPSE

**● ELLIPSE**: *`string`* = "ellipse"

*Defined in [PageGuideItem.ts:23](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L23)*

___
<a id="left"></a>

### `<Static>` LEFT

**● LEFT**: *`string`* = "left"

*Defined in [PageGuideItem.ts:28](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L28)*

___
<a id="rect"></a>

### `<Static>` RECT

**● RECT**: *`string`* = "rect"

*Defined in [PageGuideItem.ts:20](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L20)*

___
<a id="right"></a>

### `<Static>` RIGHT

**● RIGHT**: *`string`* = "right"

*Defined in [PageGuideItem.ts:26](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L26)*

___
<a id="rounded_rect"></a>

### `<Static>` ROUNDED_RECT

**● ROUNDED_RECT**: *`string`* = "rounded_rect"

*Defined in [PageGuideItem.ts:21](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L21)*

___
<a id="top"></a>

### `<Static>` TOP

**● TOP**: *`string`* = "top"

*Defined in [PageGuideItem.ts:25](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L25)*

___

## Methods

<a id="cleanup"></a>

###  cleanup

▸ **cleanup**(): `void`

*Defined in [PageGuideItem.ts:99](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L99)*

*__description__*: removes the PageGuideItem from the document.body

*__memberof__*: PageGuideItem

**Returns:** `void`

___
<a id="draw"></a>

###  draw

▸ **draw**(cb: *`Function`*): `void`

*Defined in [PageGuideItem.ts:78](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L78)*

*__description__*: Draws the PageGuideItem on the document.body

*__memberof__*: PageGuideItem

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cb | `Function` |  a callback function, so it will work on IE11 as well |

**Returns:** `void`

___
<a id="onexit"></a>

###  onExit

▸ **onExit**(callback: * `function` &#124; `null`*): `void`

*Defined in [PageGuideItem.ts:115](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L115)*

*__description__*: fires a callback when the user closes the PageGuideItem

*__memberof__*: PageGuideItem

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback |  `function` &#124; `null`|  - |

**Returns:** `void`

___
<a id="onnext"></a>

###  onNext

▸ **onNext**(callback: * `function` &#124; `null`*): `void`

*Defined in [PageGuideItem.ts:132](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L132)*

*__description__*: fires a callback when the user clicks the next button

*__memberof__*: PageGuideItem

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback |  `function` &#124; `null`|  - |

**Returns:** `void`

___
<a id="onprevious"></a>

###  onPrevious

▸ **onPrevious**(callback: * `function` &#124; `null`*): `void`

*Defined in [PageGuideItem.ts:124](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L124)*

*__description__*: fires a callback when the user clicks the previous button

*__memberof__*: PageGuideItem

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback |  `function` &#124; `null`|  - |

**Returns:** `void`

___
<a id="update"></a>

###  update

▸ **update**(): `void`

*Defined in [PageGuideItem.ts:106](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuideItem.ts#L106)*

*__description__*: updates the GUI, repositions when needed

*__memberof__*: PageGuideItem

**Returns:** `void`

___

