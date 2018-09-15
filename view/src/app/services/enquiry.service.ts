import { Injectable } from "@angular/core";
import { Http, RequestOptions,Headers } from "@angular/http";
import { LoginService } from "./login.service";

@Injectable()

export class EnquiryService {
    constructor(public _http:Http,public login:LoginService){} 

    //method for addEnquiry API
    getAddEnquiryStatus(requestedData:any) {
        console.log(requestedData);
        let data = new FormData();
        data.append("fname",requestedData.fname);
        data.append("lname",requestedData.lname);
        data.append("dob",requestedData.dob);
        data.append("mobile_no",requestedData.mobile_no);
        data.append("gender",requestedData.gender);
        data.append("house_no",requestedData.house_no);
        data.append("street",requestedData.street);
        data.append("city",requestedData.city);
        data.append("district",requestedData.district);
        data.append("state",requestedData.state);
        data.append("pincode",requestedData.pincode);
        data.append("email",requestedData.email);
        data.append("type",requestedData.type);
        data.append("org",requestedData.org);
        data.append("dept",requestedData.dept);
        data.append("standard",requestedData.standard);
        data.append("c_id[]",requestedData.c_id);
        data.append("enquiry_date",requestedData.enquiry_date);
        data.append("token",localStorage.getItem("token"));
        console.log(data);

        let url = "http://www.elite-info.in/CRM/Controller/addEnquiry.php";
        return this._http.post(url,data);
    }
}