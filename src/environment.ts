export class Environment {
    public static isLocal(): boolean {
        return Environment.getStage() === "local";
    }

    public static isStaging(): boolean {
        return Environment.getStage() === "staging";
    }

    public static isProd(): boolean {
        return Environment.getStage() === "prod";
    }

    public static getStage(): string {
        return process.env.STAGE || "local";
    }

    public static getPort(): number {
        return parseInt(process.env.PORT || "8000");
    }
}
