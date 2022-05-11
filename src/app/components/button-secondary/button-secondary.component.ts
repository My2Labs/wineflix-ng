import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.css']
})
export class ButtonSecondaryComponent implements OnInit {
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
