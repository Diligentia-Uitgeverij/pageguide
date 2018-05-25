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
		title: `Single Element, positioned <code>right</code>`,
		content: `<p>This is how we highlight a single element by default. No shape has been defined, but we've now positioned it on the right hand side</p>`,
		element: `ul`,
		position: `right`,
	},
	{
		title: `Multiple Elements, positioned <code>right</code>`,
		content: `<p>This is how we highlight a single element by default. No shape has been defined, but we've now positioned it on the right hand side</p>`,
		element: `li`,
		position: `right`,
	},
	{
		title: `Single Element, positioned <code>right</code>`,
		content: `<p>This is how we highlight a single element by default. No shape has been defined, but we've now positioned it on the right hand side</p>`,
		element: `#article-2`,
		position: `top`,
	},
	{
		title: `Single Element, positioned <code>right</code>`,
		content: `<p>This is how we highlight a single element by default. No shape has been defined, but we've now positioned it on the right hand side</p>`,
		element: `#article-4`,
		position: `top`,
	},
];