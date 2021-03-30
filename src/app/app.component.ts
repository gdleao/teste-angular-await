import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  name = "AngularX";
  systemPreference: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log("ngOnInit");
    //get system preference
    this.http
      .get("https://jsonplaceholder.typicode.com/photos")
      .subscribe(res => {
        //How to make it is done before go to the next life circle event?
        this.systemPreference = res;
      });
    console.log("ngOnInit2");

    for (let i = 0; i < 10; i++) {
      console.log("Block statement execution no." + i);
    }
    console.log(this.name);
    this.name = "zzzz";
    console.log(this.name);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    //the below got undefined, I expect the subscriber must be done at ngOnInit
    //before reaching this function (ngAfterViewInit)
    console.log(this.systemPreference);
  }
}
