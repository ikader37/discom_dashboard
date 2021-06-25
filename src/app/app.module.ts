import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { QuittanceComponent } from './mes-pages/quittance/quittance.component';
import { SiteComponent } from './mes-pages/site/site.component';
import { ProgrammeComponent } from './mes-pages/programme/programme.component';
import { PaiementComponent } from './mes-pages/paiement/paiement.component';
import { ProgrammeJourComponent } from './mes-pages/programme-jour/programme-jour.component';
import { SkeletonElementsModule } from "skeleton-elements/angular";


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    QuittanceComponent,
    SiteComponent,
    ProgrammeComponent,
    PaiementComponent,
    ProgrammeJourComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    SkeletonElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
