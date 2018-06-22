[pageguide](../README.md) > [PageGuideGui](../classes/pageguidegui.md)

# Class: PageGuideGui

## Hierarchy

**PageGuideGui**

## Index

### Constructors

* [constructor](pageguidegui.md#constructor)

### Properties

* [btnStart](pageguidegui.md#btnstart)
* [buttonDefinition](pageguidegui.md#buttondefinition)
* [canvas](pageguidegui.md#canvas)
* [ctx](pageguidegui.md#ctx)
* [target](pageguidegui.md#target)

### Methods

* [highlight](pageguidegui.md#highlight)
* [onEnd](pageguidegui.md#onend)
* [onStart](pageguidegui.md#onstart)
* [renderBackdrop](pageguidegui.md#renderbackdrop)
* [roundRect](pageguidegui.md#roundrect)
* [start](pageguidegui.md#start)
* [stop](pageguidegui.md#stop)
* [update](pageguidegui.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PageGuideGui**(buttonDefinition?: * `boolean` &#124; [IButtonDefinition](../interfaces/ibuttondefinition.md)*): [PageGuideGui](pageguidegui.md)

*Defined in [GUI/PageGuideGUI.ts:11](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L11)*

PageGuideGui
*__description__*: adds a canvas as backdrop, from which the gui will clear shapes to show the underlying highlighted element.

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` buttonDefinition |  `boolean` &#124; [IButtonDefinition](../interfaces/ibuttondefinition.md)| true |

**Returns:** [PageGuideGui](pageguidegui.md)

___

## Properties

<a id="btnstart"></a>

### `<Private>` btnStart

**● btnStart**: *[ButtonGUI](buttongui.md)*

*Defined in [GUI/PageGuideGUI.ts:10](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L10)*

___
<a id="buttondefinition"></a>

### `<Private>` buttonDefinition

**● buttonDefinition**: * `boolean` &#124; [IButtonDefinition](../interfaces/ibuttondefinition.md)
*

*Defined in [GUI/PageGuideGUI.ts:18](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L18)*

___
<a id="canvas"></a>

### `<Private>` canvas

**● canvas**: *`HTMLCanvasElement`*

*Defined in [GUI/PageGuideGUI.ts:8](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L8)*

___
<a id="ctx"></a>

### `<Private>` ctx

**● ctx**: *`CanvasRenderingContext2D`*

*Defined in [GUI/PageGuideGUI.ts:9](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L9)*

___
<a id="target"></a>

### `<Private>` target

**● target**: *[PageGuideItem](pageguideitem.md)*

*Defined in [GUI/PageGuideGUI.ts:11](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L11)*

___

## Methods

<a id="highlight"></a>

###  highlight

▸ **highlight**(target: *[PageGuideItem](pageguideitem.md)*): `void`

*Defined in [GUI/PageGuideGUI.ts:191](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L191)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| target | [PageGuideItem](pageguideitem.md) |

**Returns:** `void`

___
<a id="onend"></a>

###  onEnd

▸ **onEnd**(callback: *`function`*): `void`

*Defined in [GUI/PageGuideGUI.ts:49](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L49)*

onEnd
*__description__*: function that is called upon when clicking the canvas.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |   |

**Returns:** `void`

___
<a id="onstart"></a>

###  onStart

▸ **onStart**(callback: *`function`*): `void`

*Defined in [GUI/PageGuideGUI.ts:40](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L40)*

onStart
*__description__*: function that is called upon when clicking the start button.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | `function` |   |

**Returns:** `void`

___
<a id="renderbackdrop"></a>

### `<Private>` renderBackdrop

▸ **renderBackdrop**(): `void`

*Defined in [GUI/PageGuideGUI.ts:196](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L196)*

**Returns:** `void`

___
<a id="roundrect"></a>

### `<Private>` roundRect

▸ **roundRect**(ctx: *`any`*, x: *`any`*, y: *`any`*, width: *`any`*, height: *`any`*, radius: *`any`*, fill: *`any`*, stroke: *`any`*): `void`

*Defined in [GUI/PageGuideGUI.ts:151](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L151)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| ctx | `any` |
| x | `any` |
| y | `any` |
| width | `any` |
| height | `any` |
| radius | `any` |
| fill | `any` |
| stroke | `any` |

**Returns:** `void`

___
<a id="start"></a>

###  start

▸ **start**(): `void`

*Defined in [GUI/PageGuideGUI.ts:59](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L59)*

start
*__description__*: Sizes the canvas and sizes it to fully cover either the window, either the contents.

*__memberof__*: PageGuideGui

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [GUI/PageGuideGUI.ts:186](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L186)*

**Returns:** `void`

___
<a id="update"></a>

###  update

▸ **update**(): `void`

*Defined in [GUI/PageGuideGUI.ts:67](https://github.com/Diligentia-Uitgeverij/pageguide/blob/5197645/src/GUI/PageGuideGUI.ts#L67)*

**Returns:** `void`

___

