/**
 *  Implementar o método de empréstimo (getLoan) na classe CompanyAccount
    Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
    Apenas contas com o status true podem fazer empréstimo
 * 
 */

import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (valor: number): void => {
    console.log("Saldo anterior:", this.balance);
    if (this.validateStatus()) {
      this.balance += valor;
      console.log("Voce pegou um empréstimo de:", valor);
      console.log("Saldo atualizado:", this.balance);
    } else {
      console.log("Conta inválida");
    }
  };
}

export class DioAccountWorks extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
}
