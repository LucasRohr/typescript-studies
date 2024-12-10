import { View } from './view.js';
export class ToastMessageView extends View {
    returnTemplate(message) {
        return `<p class="alert alert-info"> ${message} </p>`;
    }
}
//# sourceMappingURL=toast-message-view.js.map