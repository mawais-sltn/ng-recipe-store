import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() selectedFeature = new EventEmitter<string>();

  onSelect(feature?: any) {
    this.selectedFeature.emit(feature);
  }
}
