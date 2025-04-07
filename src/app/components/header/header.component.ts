import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-header',
  imports: [NgIcon],
  viewProviders: [provideIcons({bootstrapGithub, bootstrapLinkedin})],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}