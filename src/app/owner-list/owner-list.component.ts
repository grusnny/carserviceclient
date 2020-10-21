import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { CarService } from '../shared/car/car.service';
import { ActivatedRoute, Router } from '@angular/router';
const ownerstodelete=[];
@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;

  constructor(private ownerService: OwnerService, 
              private giphyService: GiphyService,
              private carService: CarService) { }

  ngOnInit() {
    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
      for (const owner of this.owners) {
        this.giphyService.get(owner.name).subscribe(url => owner.giphyUrl = url);
      }
    });
  }
  setAll(completed: boolean, owner: any) {
    if(completed==true){
      ownerstodelete.push(owner);
    }else{
       var index = ownerstodelete.indexOf(owner);
       if (index > -1) {
         ownerstodelete.splice(index, 1);
       }
    }
  }
  gotoList() {
    location.reload();
  }
  remove(){
    for (const owner of ownerstodelete) {
      console.log(owner.dni)
      console.log(owner)
      this.ownerService.remove(owner._links.owner.href).subscribe(result => {
        }, error => console.error(error));
      this.carService.update(owner.dni);
      }
    this.gotoList();
  }

}
