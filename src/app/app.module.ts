import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { TestTemplateInlineComponent } from './test-template-inline/test-template-inline.component';
import { TestStyleInlineComponent } from './test-style-inline/test-style-inline.component';
import { TestTemplateStyleInlineComponent } from './test-template-style-inline/test-template-style-inline.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule}  from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { ReusableComponent } from './reusable/reusable.component';
import { Child1Component } from './child1/child1.component';
import { UsdtoinrPipe } from './pipes/usdtoinr.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    TestTemplateInlineComponent,
    TestStyleInlineComponent,
    TestTemplateStyleInlineComponent,
    BasicFormComponent,
    ChildComponent,
    ReusableComponent,
    Child1Component,
    UsdtoinrPipe,
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
