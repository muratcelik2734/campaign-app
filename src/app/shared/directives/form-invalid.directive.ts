import {
    Directive,
    ElementRef,
    Input,
    NgModule,
    Optional,
    Renderer2,
} from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '([formInvalid])',
})
export class FormInvalidDirective {
    @Input() formInvalid: any;

    // belli bir html elementiindeki değişimi yakalar
    observer = new MutationObserver((mutations) => {
        mutations?.forEach((elm) => {
            console.log('Bu Değişim Nedir',elm);
            this.onInputChange();
        });
    });
    isInvalid: boolean = false;
    isTouched: boolean = false;
    constructor(
        private el: ElementRef,
        @Optional() private control: NgControl
    ) {
        if (el) {
            this.observer.observe(this.el.nativeElement, {
                attributes: true,
                childList: true,
                characterData: true,
            });
        }
    }
    addBorder: boolean = false;
    removeBorder: boolean = false;

    onInputChange() {
            this.el.nativeElement.classList.forEach((element: any) => {
                console.log('inputta bulunan classslar', element);
                if (element === 'ng-invalid') {
                    this.isInvalid = true;
                }
                if (element === 'ng-touched') {
                    this.isTouched = true;
                }
            });
            if (this.isInvalid && this.isTouched) {
                console.log('Buraya birşeyler yapmaya geliyor');
    
                if (this.control) {
                    if (this.control.hasError('required')) {
                       this.el.nativeElement.classList.add('ng-dirts',{emitEvent:false});
                    }
                }
            } else {
                this.el.nativeElement.classList.remove('ng-dirts');
            }
        
   
    }
}
