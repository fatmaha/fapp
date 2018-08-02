import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {AccordionItemComponent} from '../accordion-item/accordion-item.component';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterContentInit {

    acc: AccordionItemComponent[];
    @ContentChildren(AccordionItemComponent) accordions: QueryList<AccordionItemComponent>;
    private subscriptions = [];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit() {

        this.acc = this.accordions.toArray();
        this.addSubscriptions();
    }

    addSubscriptions() {
        this.acc.forEach(a => {
            const subscription = a.toggleAccordion.subscribe(e => {
                this.toggleAccordion(a);
            });
            this.subscriptions.push(subscription);
        });
    }

    toggleAccordion(accordion) {
        if (!accordion.active) {
            this.acc.forEach(a => a.active = false);
        }
        accordion.active = !accordion.active;
    }


}
