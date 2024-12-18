export class ClientEntity {
  constructor(
    private readonly id: number,
    private readonly name: string,
    private readonly email: string
  ) {}

  public get getId(): number {
    return this.id
  }
}
