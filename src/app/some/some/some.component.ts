import { Component, OnInit } from '@angular/core';
import {ProvidedInAnyService} from '../provided-in-any.service';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  constructor(private service: ProvidedInAnyService) { }

  ngOnInit(): void {
  }

}
