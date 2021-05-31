import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  arr: number[] = [];
  constructor() { }

  ngOnInit(): void {

    // setInterval(() => {
    //   this.arr = [Math.random()];
    // })
  }

  parent() {
    // console.log('Parent');
    return 'parent';
  }

}
