import { Component, OnInit } from '@angular/core';
import { PackageModel } from 'src/app/models/package.model';
import { PackagesService } from 'src/app/services/packages.service';
import { environments } from 'src/env/environments';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  env: string = environments.logo_clear
  crew: any = [
    {
      name: 'MakhandaZonke',
      imageuri: 'https://firebasestorage.googleapis.com/v0/b/art-vixion.appspot.com/o/assests%2Fimage2.jpg?alt=media&token=72e44c27-87d5-48f4-97dd-9ce2501eb97e&_gl=1*17xftwh*_ga*MjU5NTY4Nzg2LjE2ODE1MTY0ODI.*_ga_CW55HF8NVT*MTY5NjczNTE3Mi42NS4xLjE2OTY3MzYzOTIuMjQuMC4w'
    },
    {
      name: 'De Richo',
      imageuri: 'https://firebasestorage.googleapis.com/v0/b/art-vixion.appspot.com/o/assests%2Fdericho.jpg?alt=media&token=11c7e325-b766-4373-b405-3ca8390ea90c&_gl=1*m7g8pa*_ga*MjU5NTY4Nzg2LjE2ODE1MTY0ODI.*_ga_CW55HF8NVT*MTY5NjczNTE3Mi42NS4xLjE2OTY3MzYzNzcuMzkuMC4w'
    },
    {
      name: 'Limiie LK',
      imageuri: 'https://firebasestorage.googleapis.com/v0/b/art-vixion.appspot.com/o/assests%2Flimi.jpg?alt=media&token=b6621ead-70a0-4af4-a4c9-250d66360cdb&_gl=1*1knupkv*_ga*MjU5NTY4Nzg2LjE2ODE1MTY0ODI.*_ga_CW55HF8NVT*MTY5NjczNTE3Mi42NS4xLjE2OTY3MzY0MTIuNC4wLjA.'
    },
    {
      name: 'IDK DIs Nigg',
      imageuri: 'https://firebasestorage.googleapis.com/v0/b/art-vixion.appspot.com/o/assests%2Fartist_one.png?alt=media&token=26756a27-ba94-43b3-82d8-16f162499a33&_gl=1*1izrwgz*_ga*MjU5NTY4Nzg2LjE2ODE1MTY0ODI.*_ga_CW55HF8NVT*MTY5NjczNTE3Mi42NS4xLjE2OTY3MzY0MzEuNDYuMC4w'
    },
  ]
  
  constructor(private packages_services: PackagesService) {}
  
  ngOnInit(): void {
    this.packages_services.get_packages()
  }

  get packages_data(): PackageModel[] {
    return this.packages_services.packages
  }

}
