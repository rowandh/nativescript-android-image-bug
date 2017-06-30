import { Component, ViewChild, ElementRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Image } from "ui/image";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { getImage } from "http";

@Component({
  moduleId: module.id,
  selector: "dashboard",
  templateUrl: "./dashboard.html"
})
export class DashboardComponent {

  @ViewChild("userImage")
  userImage: ElementRef;

  ngAfterViewInit() {    
    getImage("http://placehold.it/150x150")
      .then(imageSource => {
          console.log("image downloaded");
          this.userImage.nativeElement.src = imageSource;
      });
  }
}
