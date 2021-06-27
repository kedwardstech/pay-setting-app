import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pay-setting-app';

  postData = {
    test: 'my content is being posted',
    bong: 'hit'
  }

  url = 'https://bmlr26sjp0.execute-api.us-west-2.amazonaws.com/Staging/paysettingappresource';
  json;

  constructor(private http: HttpClient) {
    this.http.post(this.url, this.postData).toPromise().then((data:any) => {
      console.log(data.json.test);
      this.json = JSON.stringify(data.json.test);
    })
  }
}
