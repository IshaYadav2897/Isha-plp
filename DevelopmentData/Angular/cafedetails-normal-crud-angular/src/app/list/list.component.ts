import { Component, OnInit } from '@angular/core';
import { CafeDetails } from '../model/cafedetails.model';
import { CafedetailsService } from '../cafedetails/cafedetails.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cafedetails:CafeDetails[];

  constructor(private service:CafedetailsService) { }

  ngOnInit() {
    this.service.listCafe().subscribe(data => this.cafedetails=data);
  }

  delete(cafe: CafeDetails) {
    var ans = confirm("Are you sure you want to delete?")
    if(ans) {
      this.service.deleteCafe(cafe.cafeId).subscribe(data =>this.cafedetails = this.cafedetails.filter(u => u !==cafe)) //Delete from service
    }
  }

}
