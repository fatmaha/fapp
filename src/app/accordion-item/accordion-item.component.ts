import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-accordion-item',
    templateUrl: './accordion-item.component.html',
    styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

    @Input() active: boolean;
    @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.active = false;
    }

    ngOnInit() {
    }

    onClick() {
        this.toggleAccordion.emit(this.active);
    }

}
