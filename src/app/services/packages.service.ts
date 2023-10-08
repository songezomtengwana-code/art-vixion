import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/env/environments';
import { PackageModel } from '../models/package.model';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  private packages_container?: any;
  constructor(private http: HttpClient) {}

  async get_packages() {
    this.http.get(environments.package_uri).subscribe((response) => {
      if ((this.packages_container = response)) {
        console.log('services servers are ready');
      }
    });
  }
  get packages() {
    return this.packages_container;
  }
}
