import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer">
         <p>thats me and just me@<b>2021</b></p> 
        </div>
    `
})
export class AppFooterComponent {

    constructor(public app: AppComponent) { }
}