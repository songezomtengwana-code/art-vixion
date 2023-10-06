import { Component, OnInit } from '@angular/core';
import { environments } from 'src/env/environments';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  env: string = environments.logo_clear
  ngOnInit(): void {
  }
}
