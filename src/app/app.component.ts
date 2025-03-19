import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ac1';
}


// Um componente é iniciado a partir de uma classe anotada com @Component
// propriedades selector e template(Url) são obrigatórias.
//O atributo selector: indica como este componente será chamado dentro do template.
// app-root é o seletor padrão para o componente raiz, este componente raiz é renderizado no arquivo .html usando <app-root></app-root>
// imports: [RouterOutlet, HeaderComponent]: declara e usa RouterOutlet e HeaderComponent, isso é necessário para que possamos usar essas diretivas no template HTML