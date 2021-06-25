import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Tableau de bord',         icon:'nc-chart-bar-32',       class: '' },
    { path: '/site',     title: 'Site',         icon:'nc-bank',       class: '' },
    { path: '/paiement',     title: 'Ordinaire',         icon:'nc-money-coins',       class: '' },
    //{ path: '/quittance',     title: 'Quittance',         icon:'nc-album-2',       class: '' },
    { path: '/programme/jour/1',     title: 'Sur rendez-vous',         icon:'nc-calendar-60',       class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
