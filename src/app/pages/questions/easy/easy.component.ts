import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";

@Component({
    selector: 'app-easy',
    standalone: true,
    imports: [
        MatExpansionModule,
        HttpClientModule,
        MatIconModule
    ],
    templateUrl: './easy.component.html',
    styleUrl: './easy.component.scss'
})
export class EasyComponent implements OnInit {
    easyQuestionsList: any[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.getQuestions();
    }

    getQuestions(): void {
        this.http.get<any[]>('/assets/data/easy-questions.json').subscribe(data => {
            this.easyQuestionsList = data;
        });
    }

    protected getExamples(questionId: number): any[] {
        const question = this.easyQuestionsList.find(q => q.id === questionId);
        return question ? question.examples : [];
    }

}
