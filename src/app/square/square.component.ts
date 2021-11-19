import { Component, Input, Output, EventEmitter } from '@angular/core';

interface eventPayload {
  squareIndex: number,
}

interface buttonStyle {
  'background': String,
  'color': String
}

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {

  buttonStyle: (Scorer: String) => buttonStyle = (Scorer: String) => {
    const style: buttonStyle = {
      color: '',
      'background': ''
    };

    if ( Scorer === 'X' ) {
      style['background'] = 'linear-gradient(70deg, #2ec330, #79da18, #85fa10)';
      style.color = 'white';
    }
    else if ( Scorer === 'O' ) {
      style['background'] = 'linear-gradient(70deg, rgb(30, 106, 150), rgb(47, 146, 202), rgb(14, 164, 249))';
      style.color = 'white';
    } else
      style['background'] = '';

    return style;
  }

  @Input() scorer: String = '';
  @Input() winner!: String | null;
  @Input() tie!: boolean;
  @Output() eventEmitter = new EventEmitter<eventPayload>();

  onClick() {
    this.eventEmitter.emit();
  }

}
