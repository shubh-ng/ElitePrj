import { Injectable } from "@angular/core";
import { Http ,Headers} from "@angular/http";
import { Observable } from "rxjs";

@Injectable()

export class LoginService {

    private loginBaseUrl = "http://www.elite-info.in/CRM/Controller/login.php";

    private accessToken:string; //Token recieved after login (used for authorization)

    constructor(public _http:Http){
    } 

    //setter
    public setAccessToken(token:string) {
        this.accessToken = token;
        localStorage.setItem("token",this.accessToken);
    }

    //remove
    public removeAccessToken() {
        localStorage.removeItem("token");
        this.accessToken = null;
    }

    //getter
    public getAccessToken():string {
        return this.accessToken;
    }

    //method for login API
    loadLoginStatus(requestedData:any) {
        let data = new FormData();
        data.append("mob",requestedData.mob);
        data.append("password",requestedData.password);
        data.append("role",requestedData.role);
        return this._http.post(this.loginBaseUrl,data);
    }
}    