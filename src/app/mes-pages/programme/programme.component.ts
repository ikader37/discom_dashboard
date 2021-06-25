import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  public programmes = null

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.programmes = ""
    }, 3000)
  }

  latence() {
    this.programmes = null
    setTimeout(() => {
      this.programmes = ""
    }, 900)
  }

}
