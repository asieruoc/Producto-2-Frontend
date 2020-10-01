import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.css']
})
export class TestdbComponent implements OnInit {
  pages: Observable<any[]>;


  constructor(firestore: AngularFirestore) {
    this.pages = firestore.collection('reproductor').valueChanges();
    console.log(this.pages);


  }

  ngOnInit(): void {
  }

}
