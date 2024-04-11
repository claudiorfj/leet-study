import {Component} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule, MatNavList} from "@angular/material/list";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatNavList,
        NgOptimizedImage,
        RouterLink,
        RouterLinkActive,
        RouterOutlet
    ],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

    constructor() {
    }

    menuList = [
        {label: 'Easy', link: 'questions/easy'},
        {label: 'Medium', link: 'questions/medium'},
        {label: 'Hard', link: 'questions/hard'},
    ];
}
