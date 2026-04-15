import './gamefield.css';

export default class GameField {
    constructor(element){
        if(typeof element === 'string') {
            element = document.querySelector(element);
        }
        this._element = element;
        this._cells = [];

        
        const fieldRows = element.querySelectorAll('.gamerow');
        for (let row of fieldRows){
            this._cells.push([]);
            const cells = row.querySelectorAll('.gamecell');

            for (let cell of cells) {
                this._cells[this._cells.length - 1].push(cell);
            }
        }

        this._goblin = element.querySelector('.goblin');
        console.log(this._goblin);

        this.moveGoblin = this.moveGoblin.bind(this);
    }

    getRandom4() {
        const min = 0;
        const max = 3;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    moveGoblin() {
        const x = this.getRandom4();
        const y = this.getRandom4();
        const cell = this._cells[x][y];
        this._goblin.parentElement.removeChild(this._goblin);
        cell.appendChild(this._goblin);
    }

}
