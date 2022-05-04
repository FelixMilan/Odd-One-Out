import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-root',
  templateUrl: './drawing-canvas.component.html',
  styleUrls: ['./drawing-canvas.component.css']
})
export class DrawingCanvasComponent {
  title = 'drawing-canvas';
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  public signaturePadOptions = {
    'minWidth' : 2,
    penColor: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(255, 255, 255)',
    canvasWidth: 600,
    canvasHeight: 800,

  };

  drawClear() {
    this.signaturePad.clear();
  }

  colorRed() {
    this.signaturePadOptions.penColor = 'rgb(255,255,0)';
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
