import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { ChartService } from "../shared/service/chart.service";
import { ChartDataset, ChartOptions } from 'chart.js';
import { FormGroup } from "@angular/forms";

@Component({
    selector : 'app-input',
    templateUrl : './input.component.html',
    styleUrls : ['./input.component.scss']
})

export class InputComponent implements OnInit {

    basicData: any;
    box1! : number
    box2! : number
    errorMessage: boolean = false;


    ngOnInit(): void {

    }

    @ViewChild('myForm') myFormObj : any;

    blurEve1(params: any){
       let targetName = params.target.name;
       let targetValue = parseFloat(params.target.value);
        if(targetName === 'box1'){
            if(targetValue < 0 || targetValue > 100 ) return ;
            this.myFormObj.form.patchValue({box2 : 100 - targetValue})
        }else if(targetName === 'box2'){
            if(targetValue < 0 || targetValue > 100 ) return ;
            this.myFormObj.form.patchValue({box1 : 100 - targetValue})
        }
    
    }
    createChart(){
        this.basicData = {
            label : ['A','B'],
            datasets : [{
                data : [this.box1, this.box2],
                backgroundColor : ['red','green']
            }]
        }
        this.myFormObj.reset()
    }
    validation(){
        if(this.box1 + this.box2 > 100){
            this.errorMessage  = true;
        }else{
            this.errorMessage  = false;
        }
    }

}