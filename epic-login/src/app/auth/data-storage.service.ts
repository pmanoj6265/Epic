import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class DataStorageService {
  constructor(private authService: AuthService) {
  }
}

