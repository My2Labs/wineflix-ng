import { Component, OnInit } from '@angular/core';
import { wines } from '../../wine-listings';

@Component({
  selector: 'app-wine-drinking',
  templateUrl: './wine-drinking.component.html',
  styleUrls: ['./wine-drinking.component.css'],
})
export class WineDrinkingComponent implements OnInit {
  wines = wines;

  constructor() {}

  ngOnInit(): void {}
}
