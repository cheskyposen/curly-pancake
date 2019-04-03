import {Component, OnInit} from '@angular/core';
import {DadJokeService} from '../../models/dad-joke.service';
import {Joke} from '../../models/Joke';

@Component({
  selector: 'app-dad-joke',
  templateUrl: './dad-joke.component.html',
  styleUrls: ['./dad-joke.component.scss']
})
export class DadJokeComponent implements OnInit {
  dadJokes: Joke[] = [];
  constructor(private dadJokeService: DadJokeService) { }

  ngOnInit() {
    this.getJoke();
  }

  private getJoke(): void {
    this.dadJokeService.getRandJoke().subscribe((res) => {
      const dadJoke = new Joke(res);
      this.dadJokes.push(dadJoke);
      console.log(dadJoke);
      console.log(this.dadJokes);
    });
  }
}
