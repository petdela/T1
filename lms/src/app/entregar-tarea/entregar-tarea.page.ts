import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-entregar-tarea',
  templateUrl: './entregar-tarea.page.html',
  styleUrls: ['./entregar-tarea.page.scss'],
})
export class EntregarTareaPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  loadFileFromDevice(event:any) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      // get the blob of the file:
      const blob: Blob =
      new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

      // create blobURL, such that we could use it in an element:
      const blobURL: string = URL.createObjectURL(blob);
      console.log(blobURL);
    };

    // reader.onerror = (error) => {};
  };
}
