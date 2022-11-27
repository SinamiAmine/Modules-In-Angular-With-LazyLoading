import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-home',
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.css'],
})
export class ModalHomeComponent implements OnInit {
  showModal = false;
  data = [
    {
      title: 'Why is the sky blue ?',
      content: 'Because of air',
    },
    {
      title: 'Why does an orange taste like ?',
      content: 'Like an orange',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.showModal = !this.showModal;
  }
}
