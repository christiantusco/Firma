import { Component, OnInit , ViewChild} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-siremu',
  templateUrl: './siremu.page.html',
  styleUrls: ['./siremu.page.scss'],
})
export class SiremuPage {

  // constructor() { }
  //
  // ngOnInit() {
  // }

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = {
    'maxWidth':1,
    'minWidth': 1,
    'canvasWidth': window.screen.width ,
    'canvasHeight': window.screen.height ,
  };

  drawStart() {
    console.log('drawStart');
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  clear() {
    this.signaturePad.clear();
  }

}
