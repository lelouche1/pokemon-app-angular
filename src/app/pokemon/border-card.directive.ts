import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {

   private defaulColor : string = '#f5f5f5';
   private defaulHeigt : number = 180;
   private newColor : string = '#009688';

  constructor(private elt : ElementRef) { 
      this.setHeigt(this.defaulHeigt);
      this.setBorder(this.defaulColor);  
    }

    @Input('pkmBorderCard') borderColer : string;

    @HostListener('mouseenter') onMouseEnter(){
      this.setBorder(this.borderColer || this.newColor);
    }
  
    @HostListener('mouseleave') onMouseleave(){
      this.setBorder(this.defaulColor);
    }

    private setHeigt(height : Number){

      this.elt.nativeElement.style.height = `${height}px`;

    }

    private setBorder(color : string){
      let bordure = 'solid 4px ' + color;
      this.elt.nativeElement.style.border = bordure;
    }
}
