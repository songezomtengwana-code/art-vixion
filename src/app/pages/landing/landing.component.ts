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
  
  constructor(private packages_services: PackagesService) {}
  
  ngOnInit(): void {
    this.packages_services.get_packages()
  }

  get packages_data(): PackageModel {
    return this.packages_services.packages
  }

}
