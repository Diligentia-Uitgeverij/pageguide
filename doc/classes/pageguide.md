[pageguide](../README.md) > [PageGuide](../classes/pageguide.md)

# Class: PageGuide

*__class__*: PageGuide

*__description__*: Diligentia Uitgeverij's PageGuide uses a Canvas to draw a backdrop, and hightlight targeted elements.

*__author__*: Peter Delvaux [peter.delvaux@diligentia-uitgeverij.be](mailto:peter.delvaux@diligentia-uitgeverij.be)

*__since__*: 28/05/2018

*__export__*: PageGuide

## Hierarchy

**PageGuide**

## Index

### Constructors

* [constructor](pageguide.md#constructor)

### Properties

* [activeIndex](pageguide.md#activeindex)
* [activeItem](pageguide.md#activeitem)
* [allItems](pageguide.md#allitems)
* [gui](pageguide.md#gui)
* [isActive](pageguide.md#isactive)
* [items](pageguide.md#items)
* [onEndCallback](pageguide.md#onendcallback)
* [onStartCallback](pageguide.md#onstartcallback)
* [CSS_PREFIX](pageguide.md#css_prefix)

### Methods

* [cleanActiveItem](pageguide.md#cleanactiveitem)
* [onEnd](pageguide.md#onend)
* [onStart](pageguide.md#onstart)
* [start](pageguide.md#start)
* [step](pageguide.md#step)
* [stop](pageguide.md#stop)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PageGuide**(dtoItems: *[IPageGuideItem](../interfaces/ipageguideitem.md)[]*, buttonDefinition?: * `boolean` &#124; [IButtonDefinition](../interfaces/ibuttondefinition.md)*): [PageGuide](pageguide.md)

*Defined in [PageGuide.ts:80](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L80)*

*__description__*: creates a new PageGuide

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| dtoItems | [IPageGuideItem](../interfaces/ipageguideitem.md)[] | - |  a list of dtoItems to be converted into PageGuideItems |
| `Default value` buttonDefinition |  `boolean` &#124; [IButtonDefinition](../interfaces/ibuttondefinition.md)| true |  an optional ButtonDefinition, or true for the default button, or false for no button. |

**Returns:** [PageGuide](pageguide.md)

___

## Properties

<a id="activeindex"></a>

### `<Private>` activeIndex

**● activeIndex**: *`number`* = 0

*Defined in [PageGuide.ts:58](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L58)*

*__description__*: Index of the item which is currently displayed

*__type__*: {number}

*__memberof__*: PageGuide

___
<a id="activeitem"></a>

### `<Private>` activeItem

**● activeItem**: *[PageGuideItem](pageguideitem.md)*

*Defined in [PageGuide.ts:65](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L65)*

*__description__*: The currently active item

*__type__*: {PageGuideItem}

*__memberof__*: PageGuide

___
<a id="allitems"></a>

### `<Private>` allItems

**● allItems**: *[PageGuideItem](pageguideitem.md)[]*

*Defined in [PageGuide.ts:44](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L44)*

*__description__*: list of items to be displayed

*__type__*: {PageGuideItem\[\]}

*__memberof__*: PageGuide

___
<a id="gui"></a>

### `<Private>` gui

**● gui**: *[PageGuideGui](pageguidegui.md)*

*Defined in [PageGuide.ts:30](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L30)*

*__description__*: Graphical User Interface of the PageGuide

*__type__*: {PageGuideGui}

*__memberof__*: PageGuide

___
<a id="isactive"></a>

### `<Private>` isActive

**● isActive**: *`boolean`* = false

*Defined in [PageGuide.ts:51](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L51)*

*__description__*: if the PageGuide is active

*__type__*: {boolean}

*__memberof__*: PageGuide

___
<a id="items"></a>

### `<Private>` items

**● items**: *[PageGuideItem](pageguideitem.md)[]*

*Defined in [PageGuide.ts:37](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L37)*

*__description__*: list of items to be displayed

*__type__*: {PageGuideItem\[\]}

*__memberof__*: PageGuide

___
<a id="onendcallback"></a>

### `<Private>` onEndCallback

**● onEndCallback**: *`Function`*

*Defined in [PageGuide.ts:80](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L80)*

*__description__*: callBack functien to be called on stop

*__type__*: {Function}

*__memberof__*: PageGuide

___
<a id="onstartcallback"></a>

### `<Private>` onStartCallback

**● onStartCallback**: *`Function`*

*Defined in [PageGuide.ts:73](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L73)*

*__description__*: callBack functien to be called on start

*__type__*: {Function}

*__memberof__*: PageGuide

___
<a id="css_prefix"></a>

### `<Static>` CSS_PREFIX

**● CSS_PREFIX**: *`string`* = "page-guide"

*Defined in [PageGuide.ts:22](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L22)*

*__description__*: prefix used for the creation of CSS-classes

*__static__*: 

*__type__*: {string}

*__memberof__*: PageGuide

___

## Methods

<a id="cleanactiveitem"></a>

###  cleanActiveItem

▸ **cleanActiveItem**(): `void`

*Defined in [PageGuide.ts:207](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L207)*

cleanActiveItem
*__description__*: If the active item is defiend, clean it up, and set it to undefined.

*__memberof__*: PageGuide

**Returns:** `void`

___
<a id="onend"></a>

###  onEnd

▸ **onEnd**(cb: *`Function`*): `void`

*Defined in [PageGuide.ts:247](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L247)*

onEnd
*__description__*: adds a callback function to fire when the pageGuide reaches the end, or is stopped by the user.

*__memberof__*: PageGuide

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cb | `Function` |  - |

**Returns:** `void`

___
<a id="onstart"></a>

###  onStart

▸ **onStart**(cb: *`Function`*): `void`

*Defined in [PageGuide.ts:238](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L238)*

onStart
*__description__*: adds a callback function to fire when the pageGuide is started by the user.

*__memberof__*: PageGuide

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cb | `Function` |  - |

**Returns:** `void`

___
<a id="start"></a>

###  start

▸ **start**(): `void`

*Defined in [PageGuide.ts:154](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L154)*

start
*__description__*: starts the PageGuide

*__memberof__*: PageGuide

**Returns:** `void`

___
<a id="step"></a>

###  step

▸ **step**(index?: *`number`*): `void`

*Defined in [PageGuide.ts:184](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L184)*

step
*__description__*: Renders the active step.

*__memberof__*: PageGuide

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` index | `number` |  the step you want to activate |

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [PageGuide.ts:221](https://github.com/Diligentia-Uitgeverij/pageguide/blob/7a12dd3/src/PageGuide.ts#L221)*

stop
*__description__*: stops the PageGuide

*__memberof__*: PageGuide

**Returns:** `void`

___

