/**
 * [ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
    Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
    Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
 */

export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 200;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor;
      console.log("Voce depositou:", valor);
      console.log("Saldo atualizado:", this.balance);
    }
  };

  withdraw = (valor: number): void => {
    this.balance -= valor;
    console.log("Valor anterior:", this.balance + valor);
    console.log("Valor sacado:", valor);
    console.log("Saldo atualizado:", this.balance);
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta inválida");
  };
}
