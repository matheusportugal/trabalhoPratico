import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  public returnUsers;
  constructor(private http: HTTP) {}

  get() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.returnUsers = json;
      });
  }
}
