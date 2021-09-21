import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() favColor : string;
  @HostBinding('style.backgroundColor') bgColor : any;

  @HostListener('mouseenter')
  onmouseenter(){
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onmouseleave(){
    this.bgColor = "transparent";
  }


  // Constructor Injection
  // constructor(private elementRef : ElementRef){
    // console.log(this.elementRef.nativeElement)
  //   this.elementRef.nativeElement.style.backgroundColor = "aqua"
  // }
}

// [] => CSS Selector => attribute
// <div appHighlight></div> => Host Element
// <div class="appHighlight"></div>
