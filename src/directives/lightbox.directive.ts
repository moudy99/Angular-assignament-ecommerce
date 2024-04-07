import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Lightbox]',
  standalone: true
})
export class LightboxDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.opacity='.7'
    
  }
  
  @HostListener('mouseover')
  onMouseOver() {
    this.ele.nativeElement.style.transition = 'all 0.3s ease'; 
    this.ele.nativeElement.style.opacity = '1'; 
    // this.ele.nativeElement.style.transform='scale(1.05)'
    this.ele.nativeElement.style.boxShadow = "-5px 10px 10px gray";
  }

  @HostListener('mouseleave')
  onMouseLeaves() {
    this.ele.nativeElement.style.transition = 'all 0.3s ease'; 
    this.ele.nativeElement.style.opacity = '.7';
    // this.ele.nativeElement.style.transform='scale(1)'
    this.ele.nativeElement.style.boxShadow = "none";
  }



}
