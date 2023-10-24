import { Component, EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent {
    @Input() data:any[]=[];
    @Input() title:string ='';
    @Output() selectedValue=new EventEmitter();
  constructor(){

  }

  DetectChanges(event:any){
     this.selectedValue.emit(event);
  }
}
