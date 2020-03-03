import { Component, OnInit } from '@angular/core';
import {ProvidedInAnyService} from '../../some/provided-in-any.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(private service: ProvidedInAnyService) { }

  ngOnInit(): void {
  }

}
