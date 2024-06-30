import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ResourceService } from '../resourceService/resource.service';
import { StorageServiceService } from '../storageService/storage-service.service';
import { ResourceCardComponent } from '../resource-card/resource-card.component';
import { AddNewResourceButtonComponent } from '../add-new-resource-button/add-new-resource-button.component';

@Component({
  selector: 'app-resource-section',
  templateUrl: './resource-section.component.html',
  imports:[ResourceCardComponent,AddNewResourceButtonComponent],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./resource-section.component.css']
})
export class ResourceSectionComponent {
  
}
