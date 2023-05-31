export class App {
  public test(): string {
    return "Test"
  }

  public static main(): App {
    return new App()
  }
}

App.main()