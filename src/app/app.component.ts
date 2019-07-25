import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

things = {
  car: 'Honda',
  shoes: 'Nike',
  shirt: 'Tom Ford',
  watch: 'Timex'
};
 things$ = Observable.of({
    car: 'Honda',
    shoes: 'Nike',
    shirt: 'Tom Ford',
    watch: 'Timex'
  }).delay(1000);

}
