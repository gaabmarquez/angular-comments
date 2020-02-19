import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "trim"
})
export class TrimPipe implements PipeTransform {
  transform(value: any, limit = 60): any {
    if (value.length > limit)
      return value.toString().substring(0, limit) + "...";

    return value;
  }
}
