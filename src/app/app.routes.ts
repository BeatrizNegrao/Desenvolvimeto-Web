import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { PostDetail2Component } from './post-detail2/post-detail2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //rota para redirecionar para home
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {path: 'post-list', component: PostListComponent,
    children: [
            { path: 'post-datail', component: PostDetailComponent },
            { path: 'post-detail2', component: PostDetail2Component }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

// Cada objeto de rota deve conter duas propriedade principais:
//1. path: A URL correspondente a essa rota.
//2. component: O componente que deve ser carregado quando essa rota é ativada

//Rotas coringas:  correspondem a qualquer URL que não seja correspondida por umavrota específica.
// Ex: { path: '**', component: PageNotFoundComponent }, // error 404

// Rotas de redirecionamentos: ão úteis para atualizar URLs antigas ou para redirecionar o usuário para uma página diferente
// Ex: { path: '', redirectTo: '/calculadora', pathMatch: 'full' }
// O valor 'full' indica que o Angular só deve corresponder a rota quando a URL solicitada for
// exatamente igual ao valor definido na propriedade path. 