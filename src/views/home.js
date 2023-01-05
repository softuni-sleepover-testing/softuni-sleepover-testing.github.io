import { html } from '../lib/lit-html.js';

const catalogTemplate = () => html`
<h1>Welcome to SoftUni SleepOver!</h1>
<p>Find accommodation in many locations across the country. <a href="/rooms">Browse catalog</a></p>
<p>Have a room to offer? <a href="/host">Place an add right now!</a></p>
`;



export function homeView(ctx) {
    ctx.render(catalogTemplate());

}