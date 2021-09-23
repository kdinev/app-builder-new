import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxInputGroupModule, IgxDatePickerModule, IgxCheckboxModule, IgxDialogModule, IgxGridModule, IgxActionStripModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleHomeComponent,
    EditPersonComponent,
    AddPersonComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxListModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    FormsModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxCheckboxModule,
    IgxDialogModule,
    IgxGridModule,
    IgxActionStripModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
