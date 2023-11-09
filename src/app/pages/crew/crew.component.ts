import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profile.model';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {


  ngOnInit(): void {
    console.log('crew oninit active');
  }
}
