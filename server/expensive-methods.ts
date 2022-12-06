export async function expensiveMethod(): Promise<string> {
    await new Promise(r => setTimeout(r, 2000));
    return "expensive method has been run";
}
