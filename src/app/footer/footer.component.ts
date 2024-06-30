import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports:[NgIf],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
