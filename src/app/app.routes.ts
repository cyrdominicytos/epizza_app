import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';

export const routes: Routes = [
    {
        path: '',
        children: [
                    {path: "home", component: HomeComponent},
                    {path: "basket", component: ShoppingBasketComponent},
                  ],
      }
];



// {
//     path: '',
//     component:AppComponent, 
//     children: [
//         {path: "home", component: HomeComponent},
//        // {path: "tests", component: AppComponent},
//     ],
//    // loadChildren: () => import('./home/home.component').then(m => m.HomeComponent),
//   }