import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css'
})
export class SingleFaceSnapComponent implements OnInit {
  
  constructor(private faceSnapsService: FaceSnapService, private route: ActivatedRoute){}
  faceSnap!: FaceSnap;
  
  button!: string;
  
  onAddSnap() {
    if (this.button === 'Oh Snap !') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.button = 'Oops, unSnap';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.button = 'Oh Snap !';
    }
  }

  ngOnInit(): void {
    //ajouter + au déut de lk'expression permet de cast(changer le type) une 
    //string de nombres en number par exemple 
    this.button = 'Oh Snap !'
    const snapId = +this.route.snapshot.params['id']
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId)
  }
}

