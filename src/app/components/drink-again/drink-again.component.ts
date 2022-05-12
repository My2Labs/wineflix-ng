import { Component, OnInit } from '@angular/core';
import { wines } from '../../wine-listings';

@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css'],
})
export class DrinkAgainComponent implements OnInit {
  wines = wines;

  constructor() {}

  ngOnInit(): void {}
}
