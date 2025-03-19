import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}


// Um componente é iniciado a partir de uma classe anotada com @Component
// propriedades selector e template(Url) são obrigatórias.
//O atributo selector: indica como este componente será chamado dentro do template.
