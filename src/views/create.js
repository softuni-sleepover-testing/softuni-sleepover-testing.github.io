import * as roomService from '../data/room.js';
import { html } from '../lib/lit-html.js';
import { submitHandler } from '../util.js';

const createTemplate = (onSubmit) => html`
<h2>Host Room</h2>
<form @submit=${onSubmit}>
    <label>Name: <input type='text' name='name'></label>
    <label>Location: <input type='text' name='location'></label>
    <label>Beds: <input type='number' name='beds'><label>
    <label>Open for Booking: <input type="checkbox" name="openForBooking"></label>
    <button>Create Room</button>
</form>`;

export function createView(ctx) {
    ctx.render(createTemplate(submitHandler(onSubmit)));

    async function onSubmit({ name, location, beds, openForBooking }) {
        beds = parseInt(beds);
        openForBooking = Boolean(openForBooking);

        if (name == '' || location == '' || Number.isNaN(beds)) {
            return alert('All fields are required');
        }

        const userId = ctx.user?.objectId;

        const result = await roomService.create({ name, location, beds,openForBooking }, userId);

        ctx.page.redirect('/rooms/' + result.objectId)

    }
}