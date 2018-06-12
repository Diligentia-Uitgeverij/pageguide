import { IPageGuideItem } from "../interfaces/IPageGuideItem";

export const exampleData: IPageGuideItem[] = [
	{
		title: `Diligentia Uitgeverij &mdash; PageGuide`,
		content: `<p>This is an example of our PageGuide, and why we created another introduction library.</p>`,
	},
	{
		title: `Diligentia Uitgeverij &mdash; PageGuide`,
		content: `
		<p>Our applications usualy consist of nested containers, some are positioned absolute others fixed or relative.</p>
		<p>Most of the introduction libraries I've found were based on Z-index. This works great, if you're not writing an 
		app where you already use z-indexes on containers and their children.<br>
		In other words, none of them worked for our specific case.</p>`,
	},
	{
		title: `Diligentia Uitgeverij &mdash; PageGuide`,
		content: `<p>So, how does our guide work? Well, we don't rely on z-indexes, but our overlay is a canvas. We simply 
		cut out a shape to show the highlighted element.<br>
		Our pop-over with all the content is then placed on top of all this.</p>`,
	},
	{
		title: `Diligentia Uitgeverij &mdash; PageGuide`,
		content: `<p>This has some great caveats. For instance we can easily hightlight multiple elements at the same time.
		Another caveat is that we can define shapes to highlight quite easily.</p>`,
	},
	{
		title: `Single Element`,
		content: `<p>This is how we highlight a single element by default. No shape or position has been defined.</p>`,
		element: `header`,
	},
	{
		title: `Single Element, rounded rectangle`,
		content: `<p>This is how we highlight the same element. Only this time we specified the hightlight shape to be a rounded rectangle.</p>`,
		element: `header`,
		shape: 'rounded_rect',
	},
	{
		title: `Single Element, positioned <code>right</code>`,
		content: `<p>This is how we highlight a single element with our popup positioned to the right hand side.</p>`,
		element: `ul`,
		position: `right`,
	},
	{
		title: `Multiple Elements, positioned <code>right</code> as rounded rectangles.`,
		content: `<p>This is how we highlight multiple elements, our popup will anchor to the first element the querySelector returns.</p>`,
		element: `li`,
		position: `right`,
		shape: 'rounded_rect',
	},
	{
		title: `This one won't show up.`,
		content: `<p>If the query selector can't find any elements, the step gets ommited completely.</p>`,
		element: `ol`,
		position: `right`,
		shape: 'rounded_rect',
	},
	{
		title: `You would not have noticed it...`,
		content: `<p>... but there was a step defined before this one.</p><p>If the query selector can't find any elements, the step gets ommited completely.<br>This is the step that you can't see:</p><pre>{
	title: \`This one won't show up.\`,
	content: \`&lt;p&gt;If the query selector can't find any elements, the step gets ommited completely.&lt;/p&gt;\`,
	element: \`ol\`,
	position: \`right\`,
	shape: \'rounded_rect\',
}</pre><p>Since there is no <code>ol</code> tag present in this page, this step was omitted.</p><p>This behaviour allows you to load a single file with all elements defined. When a user can't see a specific item, he won't get the explanation behind the item.</p>`
	},
	{
		title: `Configuration Options`,
		content: `<h4>postion</h4><p>You can choose to position your popups on one of these spots: <code>top</code>, <code>right</code>, <code>bottom</code><span style="color: red; font-weight: 700;">*</span> or <code>left</code></p><h4>shape</h4><p>There are some basic shapes you can pick from: <code>rect</code><span style="color: red; font-weight: 700;">*</span>, <code>rounded_rect</code>, <code>circle</code> or <code>ellipse</code></p><h4>target interactivity</h4><p>By default, since we're overlaying a canvas on top of the entire body, there is no interaction possible with the highlighted target. You could however choose to add this in your CSS: <code>canvas.page-guide-backdrop { pointer-events: none; }</code>. By doing this the canvas won't interact with your mouseclicks anymore, so the highlighted target is now interactive again. But you do lose the closing of the pageguide by clicking on the backdrop.</p>`,
	}
];