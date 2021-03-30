import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterViewInit {
  name = "TesteX";
  listaOrgao: any;
  pic: any;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    console.log("(ngOnInit) ngOnInit - start");

    console.log("(ngOnInit) call montaTela");
    await this.montaTela();

    console.log("(ngOnInit) -- print listaOrgao --");
    if (this.listaOrgao != undefined) {
      console.log("(ngOnInit) print listaOrgao: " + this.listaOrgao[1].albumId + " -- " + this.listaOrgao[1].title);
    }     
    else {
          console.log("(ngOnInit)" + this.pic);
    }
    console.log("(ngOnInit) ++ print listaOrgao ++");


    console.log("(ngOnInit) call preencheGetPIC");
    await this.preencheGetPIC();

    console.log("(ngOnInit) -- print pic --");
    if (this.pic != undefined) {
      console.log("(ngOnInit) print pic: " + this.pic[1].id + " -- " + this.pic[1].url);
    }     
    else {
          console.log("(ngOnInit) " + this.pic);
    }
    console.log("(ngOnInit) ++ print pic ++");


    console.log("(ngOnInit) ngOnInit - done");
  }

  ngAfterViewInit() {
    console.log("(ngAfterViewInit) ngAfterViewInit - start");

    console.log("(ngAfterViewInit) print listaOrgao/pic: " + this.pic + " / " + this.listaOrgao);

    console.log("(ngAfterViewInit) ngAfterViewInit - done");
  }

  montaTela = async () => {
    console.log("(montaTela) montaTela - start");

    for (let i = 0; i < 40; i++) {
      //console.log("(montaTela) montaTela." + i);
    }

    await this.getOrgaos().then(data => {
      this.listaOrgao = data;
    })

    console.log("(montaTela) montaTela - done");
  }

  preencheGetPIC = async () => {
    
    console.log("(preencheGetPIC) preencheGetPIC - start");
    for (let i = 0; i < 4; i++) {
      //console.log("(preencheGetPIC) preencheGetPIC." + i);
    }
    
    await this.getPIC().then(data => {
      this.pic = data;
    })

    console.log("(preencheGetPIC) preencheGetPIC - done");
   
  }

  async getOrgaos(): Promise<string> {
    return await this.http.get<string>("https://jsonplaceholder.typicode.com/photos").toPromise().then();  
  }

  async getPIC(): Promise<string> {
    return await this.http.get<string>("https://jsonplaceholder.typicode.com/photos").toPromise().then();  
  }
}
