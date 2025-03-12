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
