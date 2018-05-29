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
* [position](pageguideitem.md#position)
* [targets](pageguideitem.md#targets)
* [title](pageguideitem.md#title)
* [CSS_PREFIX](pageguideitem.md#css_prefix)

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

⊕ **new PageGuideItem**(content: *`string`*, index: *`number`*, collectionLength: *`number`*, element?: *`string`*, title?: *`string`*, position?: *`string`*): [PageGuideItem](pageguideitem.md)

*Defined in [PageGuideItem.ts:32](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L32)*

*__description__*: Creates a new PageGuideItem

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| content | `string` | - |  Contents of the popup, can be plaintext or HTML |
| index | `number` | - |  Index of the item in the collection |
| collectionLength | `number` | - |  Length of the collection |
| `Optional` element | `string` | - |  element query selector |
| `Default value` title | `string` | &quot;&quot; |  title of the popup |
| `Default value` position | `string` | &quot;bottom&quot; |  position, defaults to right |

**Returns:** [PageGuideItem](pageguideitem.md)

___

## Properties

<a id="collectionlength"></a>

###  collectionLength

**● collectionLength**: *`number`*

*Defined in [PageGuideItem.ts:46](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L46)*

Length of the collection

___
<a id="content"></a>

###  content

**● content**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[content](../interfaces/ipageguideitem.md#content)*

*Defined in [PageGuideItem.ts:44](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L44)*

Contents of the popup, can be plaintext or HTML

___
<a id="element"></a>

### `<Optional>` element

**● element**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[element](../interfaces/ipageguideitem.md#element)*

*Defined in [PageGuideItem.ts:47](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L47)*

element query selector

___
<a id="gui"></a>

### `<Private>` gui

**● gui**: *[PageGuideItemGUI](pageguideitemgui.md)*

*Defined in [PageGuideItem.ts:26](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L26)*

*__description__*: Graphical User Interface of the PageGuideItem

*__type__*: {PageGuideItemGUI}

*__memberof__*: PageGuideItem

___
<a id="index"></a>

###  index

**● index**: *`number`*

*Defined in [PageGuideItem.ts:45](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L45)*

Index of the item in the collection

___
<a id="position"></a>

###  position

**● position**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[position](../interfaces/ipageguideitem.md#position)*

*Defined in [PageGuideItem.ts:49](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L49)*

position, defaults to right

___
<a id="targets"></a>

###  targets

**● targets**: *`NodeListOf`<`HTMLElement`>*

*Defined in [PageGuideItem.ts:32](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L32)*

*__description__*: NodeList of all found targets, can be undefined or empty.

*__type__*: {NodeListOf}

*__memberof__*: PageGuideItem

___
<a id="title"></a>

###  title

**● title**: *`string`*

*Implementation of [IPageGuideItem](../interfaces/ipageguideitem.md).[title](../interfaces/ipageguideitem.md#title)*

*Defined in [PageGuideItem.ts:48](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L48)*

title of the popup

___
<a id="css_prefix"></a>

### `<Static>` CSS_PREFIX

**● CSS_PREFIX**: *`string`* = "item"

*Defined in [PageGuideItem.ts:18](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L18)*

*__description__*: prefix used for the creation of CSS-classes

*__static__*: 

*__type__*: {string}

*__memberof__*: PageGuideItem

___

## Methods

<a id="cleanup"></a>

###  cleanup

▸ **cleanup**(): `void`

*Defined in [PageGuideItem.ts:85](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L85)*

*__description__*: removes the PageGuideItem from the document.body

*__memberof__*: PageGuideItem

**Returns:** `void`

___
<a id="draw"></a>

###  draw

▸ **draw**(cb: *`Function`*): `void`

*Defined in [PageGuideItem.ts:64](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L64)*

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

*Defined in [PageGuideItem.ts:101](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L101)*

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

*Defined in [PageGuideItem.ts:118](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L118)*

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

*Defined in [PageGuideItem.ts:110](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L110)*

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

*Defined in [PageGuideItem.ts:92](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/PageGuideItem.ts#L92)*

*__description__*: updates the GUI, repositions when needed

*__memberof__*: PageGuideItem

**Returns:** `void`

___

