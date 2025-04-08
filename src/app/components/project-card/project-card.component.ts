import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-card',
  imports: [NgIcon, CommonModule],
  viewProviders: [provideIcons({ bootstrapGithub })],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: Project = {
    id: 0,
    title: 'Estrutura de Dados',
    description: 'Sistema de gerenciamento de biblioteca, com cadastro de livros, busca por título/autor, remoção e listagem, utilizando estruturas como listas encadeadas e árvores binárias para otimizar desempenho.',
    image: "https://hermes.dio.me/articles/cover/5b900809-4057-4edf-ace1-92a4464c6075.png",
    technologies: ["Java", "Python"],
    demo: 'https://www.youtube.com/@PedroVSX2004',
    repository: 'https://github.com/PedroVSX'
  }; // Initializing with default values

  redirectTo(url: string) {
    window.open(url, '_blank');
  }
}
