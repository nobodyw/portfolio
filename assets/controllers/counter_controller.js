import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['count','test'];
    count = 0;

    increment(){
        this.count++;
        this.countTarget.innerText = this.count;
    }
}
