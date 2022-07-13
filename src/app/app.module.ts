import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgLeafletModule } from '@mugan86/ng-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { GlobalConfigAllComponent } from './1-use-global-config/map.component';
import { GlobalOverWriteComponent } from './2-global-and-overwrite/map.component';
import { IConfigMap } from '@mugan86/ng-leaflet/lib/models';
import { tileLayers } from '@mugan86/ng-leaflet';

// Use fake location
// Developer Chrome tools / Settings / More tools / Sensors
const config: IConfigMap = {
  center: [40.41956, -3.69196],
  defaultLayer: {
    map: tileLayers.baseLayers.cycloOsm.map,
    atribution: tileLayers.baseLayers.osmHot.atribution,
  },
  watermark: {
    size: '40px',
    position: 'topright',
  },
  zoom: {
    zoomInTitle: 'Aumentar',
    zoomOutTitle: 'Disminuir',
  },
  ourLocation: {
    active: true,
  },
};

@NgModule({
  imports: [BrowserModule, NgLeafletModule.forRoot(config), AppRoutingModule],
  declarations: [
    AppComponent,
    GlobalConfigAllComponent,
    GlobalOverWriteComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
