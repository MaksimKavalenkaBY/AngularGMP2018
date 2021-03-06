import { Pipe, PipeTransform } from '@angular/core';
import { ValidationUtils } from '../../../../utils/validation-utils';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {

  public transform(duration: number): string {
    if (ValidationUtils.isNumber(duration)) {
      const modifiedDuration: number[] = [];
      modifiedDuration[0] = Math.floor(duration / 60);
      modifiedDuration[1] = duration % 60;

      if (!modifiedDuration[0]) {
        return `${modifiedDuration[1]}min`;
      }
      if (!modifiedDuration[1]) {
        return `${modifiedDuration[0]}h`;
      }
      return `${modifiedDuration[0]}h ${modifiedDuration[1]}min`;
    }

    return null;
  }

}
