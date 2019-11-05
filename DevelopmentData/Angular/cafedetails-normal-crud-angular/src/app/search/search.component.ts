import { Component, OnInit } from '@angular/core';
import { CafeDetails } from '../model/cafedetails.model';
import { CafedetailsService } from '../cafedetails/cafedetails.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cafedetail:CafeDetails;
  id:number;
  found:boolean=false;
  error:any;

  constructor(private service:CafedetailsService) { }

  ngOnInit() {
  }

  searchCafe() {
    this.service.searchCafe(this.id).subscribe(data => this.cafedetail=data, data => this.error=data);
    if(this.cafedetail != null)
      this.found=true;
  }

}
