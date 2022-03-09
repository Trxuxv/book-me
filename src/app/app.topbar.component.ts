import { AppMainComponent } from './app.main.component';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="layout-topbar">
            <div class="layout-topbar-wrapper">
                <div class="layout-topbar-left">
                    <div style="cursor: pointer; outline: none; margin-top: 10%;" routerLink="/">
                      <h5>Débora Ferreira</h5>
                    </div>
                </div>

                <div class="layout-topbar-right">
                    <a class="menu-button" href="#" (click)="appMain.onMenuButtonClick($event)">
                        <i class="pi pi-bars"></i>
                    </a>

                    <ul class="layout-topbar-actions">
                        <li #searchItem class="search-item topbar-item" [ngClass]="{'active-topmenuitem': appMain.search}">
                            <a href="#" (click)="appMain.onTopbarItemClick($event,searchItem)">
                                <span class="topbar-icon">
                                    <i class="pi pi-search"></i>
                                </span>
                            </a>

                            <div class="search-input-wrapper">
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search"></i>
                                    <input type="text" pInputText placeholder="Search..."/>
                                </span>
                            </div>

                            <ul class="fadeInDown">
                                <div class="search-input-wrapper p-fluid">
                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search"></i>
                                        <input type="text" pInputText placeholder="Search..." (click)="appMain.searchClick = true;"/>
                                    </span>
                                </div>
                            </ul>
                        </li>
                        <li #settings class="topbar-item settings" [ngClass]="{'active-topmenuitem':appMain.activeTopbarItem === settings}">
                            <a href="#" (click)="appMain.onTopbarItemClick($event,settings)">
                                <span class="topbar-icon">
                                    <i class="pi pi-cog"></i>
                                </span>
                            </a>
                            <ul class="fadeInDown">
                                <li class="layout-submenu-header">
                                    <h6 class="header-text">Settings</h6>
                                </li>
                            </ul>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    `
})
export class AppTopBarComponent {

    constructor(public appMain: AppMainComponent, public app: AppComponent) {
    }

}
