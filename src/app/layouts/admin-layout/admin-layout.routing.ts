import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { SiteComponent } from 'app/mes-pages/site/site.component';
import { ProgrammeComponent } from 'app/mes-pages/programme/programme.component';
import { PaiementComponent } from 'app/mes-pages/paiement/paiement.component';
import { QuittanceComponent } from 'app/mes-pages/quittance/quittance.component';
import { ProgrammeJourComponent } from 'app/mes-pages/programme-jour/programme-jour.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, data: {animation: 'DashboardPage'} },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'site',           component: SiteComponent, data: {animation: 'SitePage'} },
    { 
        path: 'programme',    component: ProgrammeComponent, data: {animation: 'ProgrammePage'},
        children: [
          { path: 'jour/:id', component: ProgrammeJourComponent }
        ]
    },
    { path: 'paiement',       component: PaiementComponent, data: {animation: 'PaiementPage'} },
    { path: 'quittance',      component: QuittanceComponent }
];
