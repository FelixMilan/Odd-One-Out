import { Component, ViewChild, OnInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-drawing-canvas',
  templateUrl: './drawing-canvas.component.html',
  styleUrls: ['./drawing-canvas.component.css']
})
export class DrawingCanvasComponent {
  title = 'drawing-canvas';
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  public signaturePadOptions = {
    'minWidth' : 2,
    penColor: 'rgba(0,0,0)',
    backgroundColor: 'rgb(255, 255, 255)',
    canvasWidth: 300,
    canvasHeight: 300,

  };

  drawClear() {
    this.signaturePad.clear();
  }


  drawComplete() {
    const base64 = this.signaturePad.toDataURL('image/png', 0.5);
    const blob = this.base64toBlob(base64);
    console.log(base64);
    console.log(blob);
  }

  base64toBlob(base64: string) {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(':')[0];
    const byteNumbers = new Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      byteNumbers[i] = byteString.charAt(i);
    }
    const ia = new Uint8Array(byteNumbers);
    return new Blob([ia], {type: mimeString});

  }

}
