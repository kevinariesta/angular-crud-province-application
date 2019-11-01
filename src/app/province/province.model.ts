export class Province {
  public code: number;
  public name: string;
  public countryName: string;
  public description: string;

  constructor(code: number, name: string, countryName: string, description: string) {
    this.code = code;
    this.name = name;
    this.countryName = countryName;
    this.description = description;
  }
}
