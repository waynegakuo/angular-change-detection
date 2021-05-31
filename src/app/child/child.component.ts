import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  number = 0;

  @Input() arr: number[] = [];

  constructor(private cf: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit(): void {
    let counter = 0;

    // Running a function outside Angular because maybe it doesn't need to make use of Change Detection
    // this.zone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     counter++;
    //     if (counter >= 10) {
    //       this.zone.run(() => {
    //         this.number = Math.random();
    //       });
    //     } else {
    //       this.number = Math.random()
    //     }
    //   }, 500)
    // })

    // setInterval(() => {
    //   this.number = Math.random();
    //   this.cf.markForCheck()
    // }, 1000)

  }

  child() {
    // console.log('child');
    return 'child';
  }

  sum(a: number, b: number) {
    return a + b;
  }

}
