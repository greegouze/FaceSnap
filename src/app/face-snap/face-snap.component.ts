import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
})
export class FaceSnapComponent implements OnInit {
  constructor(private faceSnapService: FaceSnapService){}
  @Input() faceSnap!: FaceSnap;
  
  button: string = 'Oh Snap !';
  
  ngOnInit(): void {}
  
  onAddSnap() {
    if (this.button === 'Oh Snap !') {
     this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.button = 'Oops, unSnap';
    } else {
     this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.button = 'Oh Snap !';
    }
  }
}
