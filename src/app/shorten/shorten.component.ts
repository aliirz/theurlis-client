import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.css']
})
export class ShortenComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
      this.dataService.shortenUrl(f.value.url).subscribe(r => console.log(r));
    }

}
