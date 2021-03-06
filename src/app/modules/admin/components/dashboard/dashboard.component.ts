import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public toastter: ToastrService) { }

  ngOnInit() {
    this.toastter.success("Başarılı işlem","Başarılı");
  }

}
