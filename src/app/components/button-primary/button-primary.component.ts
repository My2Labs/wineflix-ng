import { Component, OnInit } from '@angular/core';
import { faPlay } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent implements OnInit {
  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }


}
