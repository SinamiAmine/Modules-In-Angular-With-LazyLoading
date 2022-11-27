import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectons-home',
  templateUrl: './collectons-home.component.html',
  styleUrls: ['./collectons-home.component.css'],
})
export class CollectonsHomeComponent implements OnInit {
  data: any[] = [
    { name: 'James', age: 19, job: 'Designer', employed: true },
    { name: 'Amine', age: 21, job: 'Software Enginner', employed: true },
    { name: 'Salah', age: 28, job: 'Rh', employed: false },
    { name: 'Javier', age: 24, job: 'Concepteur', employed: true },
    { name: 'Issam', age: 55, job: 'Directeur', employed: true },
  ];
  headers: any[] = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a Job?' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
