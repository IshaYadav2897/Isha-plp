import { Component, OnInit } from '@angular/core';
import { CafeDetails } from '../model/cafedetails.model';
import { CafedetailsService } from '../cafedetails/cafedetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cafe:CafeDetails;
  cafeId:number;

  constructor(private service:CafedetailsService, private route:Router) {
    this.cafe = new CafeDetails()
   }

  ngOnInit() {
  }

  add() {
    this.service.saveCafe(this.cafe).subscribe(data => this.cafe=data);
    this.cafe=new CafeDetails();
    this.route.navigate(['search']);
  }

}
