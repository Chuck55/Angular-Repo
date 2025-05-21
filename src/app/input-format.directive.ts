import { Input } from '@angular/core';
import { Directive, ElementRef, HostListener,  } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;
  constructor(private el: ElementRef) {
    
   }

  @HostListener('focus') onFocus() {
      console.log("On Focus")
  }
  @HostListener('blur') onBlur() {
          let value: string = this.el.nativeElement.value;
    if (this.format == "lowercase") {
      this.el.nativeElement.value = value.toLowerCase()
    } else if (this.format == 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase()
    }

  }

}
