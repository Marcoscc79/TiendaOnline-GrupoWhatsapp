import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef, private location: Location) {}
  ngOnInit() {
    this.loadScript('../../../assets/JS/carrito.js');
  }
  private loadScript(scriptUrl: string) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptUrl;
    script.async = true;
    this.renderer.appendChild(this.el.nativeElement, script)
  }
  goBack():void {
    this.location.back();
  }

}
