import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.Submit();
  }

}
