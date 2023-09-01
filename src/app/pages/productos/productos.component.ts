import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  ngOnInit() {
    this.loadScript('../../../assets/JS/main.js');
  }

  private loadScript(scriptUrl: string) {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptUrl;
    script.async = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}




  

  

 

