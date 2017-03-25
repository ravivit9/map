/// <reference types="googlemaps" />
import { EventEmitter, OnInit } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { Ng2MapComponent } from '../components/ng2-map.component';
export declare class Marker extends BaseMapDirective implements OnInit {
    private ng2MapComp;
    anchorPoint: any;
    animation: any;
    clickable: any;
    cursor: any;
    draggable: any;
    icon: any;
    label: any;
    opacity: any;
    optimized: any;
    place: any;
    position: any;
    shape: any;
    title: any;
    visible: any;
    zIndex: any;
    options: any;
    geoFallbackPosition: any;
    initialized$: EventEmitter<any>;
    mapObject: google.maps.Marker;
    objectOptions: google.maps.MarkerOptions;
    constructor(ng2MapComp: Ng2MapComponent);
    ngOnInit(): void;
    initialize(): void;
    setPosition(): void;
}
