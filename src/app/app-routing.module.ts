import { GraphicComponent } from './pages/graphic/graphic.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OfferComponent } from './pages/offer/offer.component';
import { PriceListComponent } from './pages/price-list/price-list.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'o-nas', component: AboutComponent },
  { path: 'oferta', component: OfferComponent },
  { path: 'grafik', component: GraphicComponent },
  { path: 'cennik', component: PriceListComponent },
  { path: 'kontakt', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
