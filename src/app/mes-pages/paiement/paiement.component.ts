import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  public personnes = null

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPersonnes()
  }

  getPersonnes() {
    console.log("getPersonnes")
    this.http.get("https://yikishop.com/test_covid/api/personnes").subscribe(res => {
      let personnes: any = res
      this.personnes = personnes.filter(p => p.numero_paiement!=null).reverse()
    })
  }

  getDate(date: string) {
    let d = new Date(date)
    return d.toLocaleString()
  }

}
