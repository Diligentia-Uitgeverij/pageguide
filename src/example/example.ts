import './example-page.scss';
import { PageGuide } from "../PageGuide";
import { examplePage } from './example-page';
import { exampleData } from './example-data';

(function() {
	console.clear();
	const example = document.createElement('article');
	example.innerHTML = examplePage;
	document.body.appendChild(example.lastChild);

	const guide = new PageGuide(exampleData, false);
	const btn = document.getElementById('btn-start-tour');

	btn.onclick = ()=>{ guide.start(); };

})();