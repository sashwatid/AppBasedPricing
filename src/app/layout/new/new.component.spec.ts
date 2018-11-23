import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { newComponent } from './new.component';

describe('newComponent', () => {
    let component: newComponent;
    let fixture: ComponentFixture<newComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [newComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(newComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
