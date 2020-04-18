import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ElectronIpcService } from 'angular/app/services/electron-ipc.service';
import { WindowApiConst } from 'shared';

@Component({
  selector: 'app-mutiples',
  templateUrl: './mutiples.component.html',
  styleUrls: ['./mutiples.component.scss'],
})
export class MutiplesComponent implements OnInit {
  timesTableForm = new FormGroup({
    input: new FormControl(Math.round(Math.random() * 100) % 10),
  });

  multiples = [];

  constructor(private electronIpc: ElectronIpcService) {}

  ngOnInit(): void {
    // Specifying what to do with received data from main process
    this.electronIpc.receive(WindowApiConst.MULTIPLES_OUTPUT, (...data) => {
      // Update current data
      this.multiples = data;
    });

    // Reset multiples on form changes
    this.timesTableForm.valueChanges.subscribe((value) => {
      this.multiples = [];
    });

    // Init time tables with given random value
    this.onSubmit();
  }

  onSubmit() {
    const intput = this.timesTableForm.value.input;
    this.electronIpc.send(WindowApiConst.MULTIPLES_INPUT, intput);
  }
}
