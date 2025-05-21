import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform{
    transform(value: string, args?: any) {
        if (value != null) {
            let words = value.split(" ")
            let preps = ["The", "Of"]
            for(let x = 0; x < words.length; x ++) {
                if (x > 0 && preps.includes(words[x])) {
                    words[x] = words[x].toLowerCase()
                } else {
                    words[x] = words[x].substring(0,1).toUpperCase() + words[x].substring(1, words[x].length).toLowerCase()
                }
            }
            return words.join(" ")
        }
        return null;
    }
}