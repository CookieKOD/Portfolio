import { Component,OnInit,Input } from '@angular/core';
import { SnapFace } from '../models/snap-face.model';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {
  @Input() snapFace !: SnapFace;

  title!:string;

snapped!:boolean;
buttonText!:string;
ngOnInit(){
 
 this.snapped=false;
 this.buttonText='Oh Snap';

}



onSnap(){
  if (this.snapped)
  {
    this.snapFace.snaps--;
     this.buttonText='Oups retire un Snap';
     this.snapped=false;
     
  }
  else{
    
    this.snapFace.snaps++;
    this.buttonText='Oh Snap';
    this.snapped=true;
    
  }
}



}
