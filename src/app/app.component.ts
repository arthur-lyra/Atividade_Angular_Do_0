import { Component, OnInit } from '@angular/core';
import { Task } from './shared/model/task'; // Importe a classe de modelo Task


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Projeto Angular';
  tasks: Task[] = []; // Array para armazenar as tarefas
  task: Task = new Task(); // Tarefa atualmente em edição ou criação

  constructor(){}

  // Função para adicionar uma nova tarefa
  addTask() {
    // Gere um ID único para a nova tarefa (pode ser implementado de forma mais robusta)
    this.task.id = this.tasks.length + 1;
    this.tasks.push(this.task);
    this.task = new Task(); // Limpa o objeto de tarefa após a adição
  }

  // Função para editar uma tarefa existente
  editTask(task: Task) {
    
  }

  // Função para remover uma tarefa existente
  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
