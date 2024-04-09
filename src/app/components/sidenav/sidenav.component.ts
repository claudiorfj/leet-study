import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
    options = this.formBuilder.group({
        bottom: 0,
        fixed: false,
        top: 0,
    });

    constructor(private formBuilder: FormBuilder) {
    }
}
