import {Directive, HostBinding} from "@angular/core";

@Directive(
{
    selector: '[appDropdown]'
})
export class DropdownDirective {
  // HostBinding allows us to bind to a property of the element that this directive is placed on
  //class.open is class="open" in html
  @HostBinding('class.open') isOpen = false;
  @HostBinding('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
