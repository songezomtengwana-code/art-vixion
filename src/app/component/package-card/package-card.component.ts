import { Component, Input } from '@angular/core';
import { PackageModel } from 'src/app/models/package.model';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent {
  @Input() data?: any
}
