import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

}
