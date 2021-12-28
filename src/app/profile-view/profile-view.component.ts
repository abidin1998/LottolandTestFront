import { Component, OnInit, Input } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';
import { userData } from '../model/userData.class';
@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  @Input()
  name: string="";

  mydata:userData  = new userData();

  constructor(private dataService: ApiRequestService) {
   }

  ngOnInit(): void {
    this.dataService.getdata(this.name).subscribe((resp)=>{
      this.mydata=resp;
      console.log(resp);
    })
  }

  playgame(name:string){
    return this.dataService.play(name).subscribe((resp) => {
      console.log(resp);
      this.mydata=resp;
    });
  }

  getRoundsNumber(){
    return this.mydata.roundsPlayed.length
  }

  getMachData(){
    return this.mydata.machesData
  }
  removeData(){
    this.mydata  = new userData();
    return this.dataService.removeUserData(this.name).subscribe()
  }

}
