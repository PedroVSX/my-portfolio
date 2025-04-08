import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { Project } from '../../models/project';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, HeaderComponent, ProjectCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  projects : Project[] = [
    {
      id: 0,
      title: 'Portfólio',
      description: 'Portfólio para apresentar os meus projetos.',
      image: 'https://placehold.jp/500x300.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      demo: 'https://github.com/PedroVSX',
      repository: 'https://github.com/PedroVSX'
    },
    {
      id: 1,
      title: 'Portfólio',
      description: 'Portfólio para apresentar os meus projetos.',
      image: 'https://placehold.jp/500x300.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      demo: 'https://github.com/PedroVSX',
      repository: 'https://github.com/PedroVSX'
    },
    {
      id: 2,
      title: 'Portfólio',
      description: 'Portfólio para apresentar os meus projetos.',
      image: 'https://placehold.jp/500x300.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      demo: 'https://github.com/PedroVSX',
      repository: 'https://github.com/PedroVSX'
    },
    {
      id: 3,
      title: 'Portfólio',
      description: 'Portfólio para apresentar os meus projetos.',
      image: 'https://placehold.jp/500x300.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      demo: 'https://github.com/PedroVSX',
      repository: 'https://github.com/PedroVSX'
    },
  ];
}
