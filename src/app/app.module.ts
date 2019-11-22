import { GithubfollowersService } from './services/githubfollowers.service';
import { RouterModule } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';
import { StudentService } from './student/students.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { StudentComponent } from './student/student.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { SixDirectivesComponent } from './six-directives/six-directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { format } from 'url';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { HomeComponent } from './home/home.component';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    CoursesComponent,
    StudentComponent,
    FavoriteComponent,
    PanelComponent,
    SixDirectivesComponent,
    InputFormatDirective,
    ContactFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    HomeComponent,
    GitHubFollowersComponent,
    GitHubProfileComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'followers', 
        component: GitHubFollowersComponent 
      },
      { 
        path: 'followers/:id/:username', 
        component: GitHubProfileComponent 
      },
      { 
        path: 'posts', component: 
        PostsComponent 
      },
      { 
        path: '**', 
        component: NotFoundComponent 
      }
    ])
  ],
  providers: [
    CourseService,
    StudentService,
    PostService,
    GithubfollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
