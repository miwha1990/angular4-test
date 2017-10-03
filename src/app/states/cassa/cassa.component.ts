import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-cassa',
  templateUrl: './cassa.component.html',
  styleUrls: ['./cassa.component.css']
})
export class CassaComponent implements OnInit {
  panoramica: string[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://demo3972307.mockable.io/panoramica').subscribe(data => {
      this.panoramica = data['panoramica'];
      console.log(this.panoramica)
    });
  }

}
