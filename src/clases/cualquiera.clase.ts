import { ICualquiera } from '../interfaces/cualquiera.interface';

export class ClaseCualquiera implements ICualquiera {
  public static atributoCualquiera1: string;
  public static atributoCualquiera2: number;
  private static atributoCualquiera3: boolean;
  private static instanciaCualquiera: ClaseCualquiera;

  constructor() {}

  public static metodoCualquiera(
    a: string,
    b: number,
    c: boolean
  ): ClaseCualquiera {
    if (!ClaseCualquiera.instanciaCualquiera) {
      ClaseCualquiera.instanciaCualquiera = new ClaseCualquiera();
      ClaseCualquiera.atributoCualquiera1 = a;
      ClaseCualquiera.atributoCualquiera2 = b;
      ClaseCualquiera.atributoCualquiera3 = c;
    }
    return ClaseCualquiera.instanciaCualquiera;
  }

  mostrarCualquiera(): void {
    console.log(
      `${ClaseCualquiera.atributoCualquiera1} ,${ClaseCualquiera.atributoCualquiera2} ,${ClaseCualquiera.atributoCualquiera3}. Es decir cualquiera`
    );
  }
}
