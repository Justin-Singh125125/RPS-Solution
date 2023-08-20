const game = {
  stats: {
    wins: 0,
    losses: 0,
    ties: 0,
  },
  choices: ['R', 'P', 'S'],
  getUserChoice: function () {
    return window.prompt('Enter R, P, or S:');
  },
  getComputerChoice: function () {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  },
  calculateResult: function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'tied';
    }

    if (
      (userChoice === 'R' && computerChoice === 'S') ||
      (userChoice === 'P' && computerChoice === 'R') ||
      (userChoice === 'S' && computerChoice === 'P')
    ) {
      return 'win';
    }

    return 'lost';
  },
  printComputerChoice: function (computerChoice) {
    window.alert(`Computer chose: ${computerChoice}`);
  },
  printResults: function (result) {
    window.alert(`You ${result}!`);
  },
  calculateStats: function (result) {
    switch (result) {
      case 'tied': {
        this.stats.ties++;
        break;
      }
      case 'win': {
        this.stats.wins++;
        break;
      }
      default: {
        this.stats.losses++;
      }
    }
  },
  printStats: function () {
    const stats = [];

    stats.push('Status:');
    stats.push(`Wins: ${this.stats.wins}`);
    stats.push(`Losses: ${this.stats.losses}`);
    stats.push(`Ties: ${this.stats.ties}`);

    window.alert(stats.join('\n'));
  },
  getIsPlayingAgain: function () {
    return window.confirm('Play Again ?');
  },
  play: function () {
    const userChoice = this.getUserChoice();
    const computerChoice = this.getComputerChoice();

    this.printComputerChoice(computerChoice);

    const result = this.calculateResult(userChoice, computerChoice);

    this.printResults(result);
    this.calculateStats(result);
    this.printStats();

    const isPlayingAgain = this.getIsPlayingAgain();

    if (isPlayingAgain) {
      this.play();
    }
  },
};

game.play();
