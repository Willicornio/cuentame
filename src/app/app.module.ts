import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicRatingModule } from 'ionic4-rating';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


// import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicRatingModule, IonicModule.forRoot(), AppRoutingModule,HttpModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    // ImageResizer,
    Camera,
    NativeAudio, // New provider, don't forget to add comma

   
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
