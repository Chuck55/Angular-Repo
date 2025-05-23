import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, args?: any) {
        if (!value) {
            return null;
        } else {
            return value.substring(0, args[0])
        }
    }
}