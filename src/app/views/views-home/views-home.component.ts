import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  items = [
    {
      image: 'couch.jpg',
      title: 'Couch',
      description: 'A Couch',
    },
    {
      image: 'dresser.jpg',
      title: 'Dresser',
      description: 'A Dresser',
    },
  ];

  stats = [
    {
      value: 22,
      label: '# of users',
    },
    {
      value: 600,
      label: 'Revenue',
    },
    {
      value: 22,
      label: 'Reviews',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
