import { View } from './view.js'

export class ToastMessageView extends View<string> {
  protected returnTemplate(message: string): string {
    return `<p class="alert alert-info"> ${message} </p>`
  }
}
