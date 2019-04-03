export class Joke {
  id: string;
  joke: string;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.joke = args.joke;
    }
  }
}
