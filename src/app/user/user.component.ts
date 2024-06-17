import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) User!: {     // here Input is the decorator
    id: string;
    name: string;
    avatar: string;
  }; 
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter(); // here Output is the decorator
  // select = output<string>();              //here output is the function and this line behaves similar to above line

  // getter to find the image path
  get imagePath() {
    return 'assets/users/' + this.User.avatar;
  }

  onSelectUser() {
    this.select.emit(this.User.id);
  }
  
}
