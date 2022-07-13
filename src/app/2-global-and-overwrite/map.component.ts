import { Component } from '@angular/core';
import { IConfigMap, tileLayers } from '@mugan86/ng-leaflet';

@Component({
  selector: 'app-external-layer-default',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class GlobalOverWriteComponent {
  config: IConfigMap = {
    defaultLayer: {
      map: tileLayers.baseLayers.openTopoMap.map,
      atribution: tileLayers.baseLayers.openTopoMap.atribution,
    },
    zoom: {
      default: 5,
      zoomInTitle: 'AAAA',
    },
    watermark: {
      size: '100px',
    },
    ourLocation: {
      active: false,
    },
  };
}
