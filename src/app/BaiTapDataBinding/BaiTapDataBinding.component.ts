import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databinding',
    template: `
        <div class="container">
            <h1 class="title text-center">Bài tập Databinding</h1>
           <div class="row ">
           <div class="col-6">
                <h3 class="text-center registerTitle">Register Form</h3>
                <div class="form-group">
                    <label>Full name</label>
                    <input #txtName class="form-control" type="text" placeholder="Event Binding" />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input #txtEmail 
                    class="form-control mt-1" 
                    type="email" 
                    placeholder="2way Binding" 
                    [(ngModel)] = "Email" />
                </div>
                <div class="btn btn-success w-100 mt-3" (click) = "changeFullName(txtName.value)" >Submit</div>
            </div>
            <div class="col-6">
                <h3 class="text-center tableTitle">Table Info</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{{FullName}}</td>
                            <td>{{Email}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           </div>
        </div>
    `,
    styles:[`
        .title{
            color: red
        };
        .registerTitle{
            color: yellow;
        };
        .tableTitle{
            color: purple;
        }
    `]
})

export class DataBindingComponent implements OnInit {
    FullName:string = "Event Binding";
    Email:string = "2way Binding"
    constructor() { }
    changeFullName(fullName:string){
        this.FullName = fullName;
    }
    ngOnInit() { }
}