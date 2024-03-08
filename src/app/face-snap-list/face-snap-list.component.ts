//parent des FaceSnapComponent
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.css'
})
export class FaceSnapListComponent implements OnInit{

  faceSnaps!: FaceSnap[]

constructor(private faceSnapsService: FaceSnapService){}

ngOnInit(): void {
  this.faceSnaps = this.faceSnapsService.faceSnaps
}
}
