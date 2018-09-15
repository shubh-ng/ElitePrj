import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class GetAllCoursesService
{
    constructor(public http:Http)
    { }

    getAllCourses()
    {
        let data = new FormData();
        data.append("token",localStorage.getItem("token"));
        let url="http://www.elite-info.in/CRM/Controller/getAllCourses.php";
        return this.http.post(url,data).pipe();
    }
}