import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicFeedComponent } from './feed/public-feed/public-feed.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CommandWidgetComponent } from './command-widget/command-widget.component';
import { CorsInterceptor } from './interceptor/cors.interceptor';
import { PostSubmissionComponent } from './feed/submission/post-submission/post-submission.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AudioRecordingService } from './feed/services/recording.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicFeedComponent,
    NavigationBarComponent,
    CommandWidgetComponent,
    PostSubmissionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    },
    AudioRecordingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
