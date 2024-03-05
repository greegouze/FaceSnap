import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  button: string = 'Oh Snap !';

  ngOnInit(): void {}

  onAddSnap() {
    if (this.button === 'Oh Snap !') {
      this.faceSnap.snaps++;
      this.button = 'Oops, unSnap';
    } else {
      this.faceSnap.snaps--;
      this.button = 'Oh Snap !';
    }
  }
}
