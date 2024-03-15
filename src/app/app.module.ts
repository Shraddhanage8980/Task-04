import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { InputComponent } from "./input/input.component";
import { ChartService } from "./shared/service/chart.service";
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        InputComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        ChartModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [ChartService],
    bootstrap: [AppComponent]

})
export class AppModule{};