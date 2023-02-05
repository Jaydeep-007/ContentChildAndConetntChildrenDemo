import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-studentsdetail',
  templateUrl: './studentsdetail.component.html',
  styleUrls: ['./studentsdetail.component.css']
})
export class StudentsdetailComponent implements AfterContentInit {

  @Input() students! : any

  //Content Child
  //@ContentChild("color") contentColor!  : ElementRef

  //ContentChildren
  @ContentChildren("color") contentColor!  : QueryList<any>

  ngAfterContentInit(): void {

    //Content Child
    // console.log(this.contentColor);
    // this.contentColor.nativeElement.setAttribute('style','color: blue')

     //Content Children
     console.log(this.contentColor);
     this.contentColor.first.nativeElement.setAttribute('style','color: blue')
     this.contentColor.last.nativeElement.setAttribute('style','color: red')
  }

}
