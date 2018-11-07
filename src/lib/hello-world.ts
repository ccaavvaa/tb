export class HelloWorld {
    public name: string;
    public get greeting(): string {
        const name = this.name || 'World';
        return `Hello ${name}!`;
    }
}
