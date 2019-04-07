import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ellevo';
  
  autenticado() {  
    return localStorage.getItem('autenticado') == 'ok';    
  }

}
