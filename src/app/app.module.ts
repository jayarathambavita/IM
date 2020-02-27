import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule, MatIconModule, MatTabsModule, MatExpansionModule, MatGridListModule, MatRadioModule, MatSelectModule, MatDatepickerModule, MatDialogModule, MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatMenuModule, MatDividerModule, MatSlideToggleModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { FlashPageComponent } from './flash-page/flash-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlashPageComponent,
    RegisterComponent,
    AddPostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule, MatInputModule,
    MatTableModule, MatToolbarModule, MatIconModule, MatTabsModule, MatExpansionModule, MatGridListModule, MatCardModule, MatRadioModule
    // tslint:disable-next-line: max-line-length
    , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatMenuModule,
    MatDividerModule, MatSlideToggleModule, MatListModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
