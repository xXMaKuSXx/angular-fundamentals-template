import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${
      value >= 120 ? " hours" : " hour"
    }`;
  }
}
