import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, tipo: string): string {
    return `${base_url}/imagen/${tipo}/${value}`;
  }

}
