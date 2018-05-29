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
* [targets](pageguidegui.md#targets)

### Methods

* [highlight](pageguidegui.md#highlight)
* [onEnd](pageguidegui.md#onend)
* [onStart](pageguidegui.md#onstart)
* [renderBackdrop](pageguidegui.md#renderbackdrop)
* [start](pageguidegui.md#start)
* [stop](pageguidegui.md#stop)
* [update](pageguidegui.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PageGuideGui**(buttonDefinition?: * `boolean` &#124; [IButtonDefinition](../interfaces/ibuttondefinition.md)*): [PageGuideGui](pageguidegui.md)

*Defined in [GUI/PageGuideGUI.ts:9](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L9)*

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

*Defined in [GUI/PageGuideGUI.ts:8](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L8)*

___
<a id="buttondefinition"></a>

### `<Private>` buttonDefinition

**● buttonDefinition**: * `boolean` &#124; [IButtonDefinition](../interfaces/ibuttondefinition.md)
*

*Defined in [GUI/PageGuideGUI.ts:16](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L16)*

___
<a id="canvas"></a>

### `<Private>` canvas

**● canvas**: *`HTMLCanvasElement`*

*Defined in [GUI/PageGuideGUI.ts:6](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L6)*

___
<a id="ctx"></a>

### `<Private>` ctx

**● ctx**: *`CanvasRenderingContext2D`*

*Defined in [GUI/PageGuideGUI.ts:7](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L7)*

___
<a id="targets"></a>

### `<Private>` targets

**● targets**: *`NodeListOf`<`HTMLElement`>*

*Defined in [GUI/PageGuideGUI.ts:9](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L9)*

___

## Methods

<a id="highlight"></a>

###  highlight

▸ **highlight**(elements: *`NodeListOf`<`HTMLElement`>*): `void`

*Defined in [GUI/PageGuideGUI.ts:89](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L89)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| elements | `NodeListOf`<`HTMLElement`> |

**Returns:** `void`

___
<a id="onend"></a>

###  onEnd

▸ **onEnd**(callback: *`function`*): `void`

*Defined in [GUI/PageGuideGUI.ts:47](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L47)*

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

*Defined in [GUI/PageGuideGUI.ts:38](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L38)*

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

*Defined in [GUI/PageGuideGUI.ts:94](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L94)*

**Returns:** `void`

___
<a id="start"></a>

###  start

▸ **start**(): `void`

*Defined in [GUI/PageGuideGUI.ts:57](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L57)*

start
*__description__*: Sizes the canvas and sizes it to fully cover either the window, either the contents.

*__memberof__*: PageGuideGui

**Returns:** `void`

___
<a id="stop"></a>

###  stop

▸ **stop**(): `void`

*Defined in [GUI/PageGuideGUI.ts:84](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L84)*

**Returns:** `void`

___
<a id="update"></a>

###  update

▸ **update**(): `void`

*Defined in [GUI/PageGuideGUI.ts:65](https://github.com/Diligentia-Uitgeverij/pageguide/blob/c87f57a/src/GUI/PageGuideGUI.ts#L65)*

**Returns:** `void`

___

