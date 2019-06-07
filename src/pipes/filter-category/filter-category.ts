import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterCategoryPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterCategory',
})
export class FilterCategoryPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args: string[]) {
    let menu = [];
    value.forEach(s => {
      if (s.parent_id == args) {
        menu.push(s);
      }
    });

    return menu;

  }
}

