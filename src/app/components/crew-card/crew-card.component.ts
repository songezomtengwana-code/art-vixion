import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profile.model';
import { CrewService } from 'src/app/services/crew.service';

@Component({
  selector: 'app-crew-card',
  templateUrl: './crew-card.component.html',
  styleUrls: ['./crew-card.component.scss'],
})
export class CrewCardComponent implements OnInit {
  private collectionName: string = "crew";

  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
     this.getAll()
  }

  getAll() {
    this.crewService.getCrew(this.collectionName)
  }

  get crew(): ProfileModel[] { return this.crewService.crewCollectionResponse }
}
