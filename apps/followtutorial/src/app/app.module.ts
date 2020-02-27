import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewComponent } from './add-new/add-new.component';

registerLocaleData(en);

const appRoutes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    data: {title: 'Dashboard'}
  }, {
    path: 'list',
    component: ProductListComponent,
    data: {title: 'Product List'}
  }, {
    path: 'products/:id',
    component: ProductDetailsComponent,
    data: {title: 'Product Information'}
  }, {
    path: 'add-new',
    component: AddNewComponent,
    data: {title: 'Add New Information'}
  }, { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component:  PagenotfoundComponent }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    AppComponent,
    TopComponent,
    PagenotfoundComponent,
    DashboardComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
