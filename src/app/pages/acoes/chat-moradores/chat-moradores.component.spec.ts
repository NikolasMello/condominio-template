import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ChatMoradoresComponent  from './chat-moradores.component';

describe('ChatMoradoresComponent', () => {
  let component: ChatMoradoresComponent;
  let fixture: ComponentFixture<ChatMoradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChatMoradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
