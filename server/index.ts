import { expensiveMethod } from "./expensive-methods.js";

export async function callFunc(): Promise<string> {
    let s = await expensiveMethod();
    return `method called and returned '${s}'`;
}
