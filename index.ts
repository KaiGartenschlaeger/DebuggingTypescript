class Counter {
    counter: number = 0;
    readonly max: number;

    constructor(max: number = 10) {
        this.max = max;
    }

    increment() {
        this.counter += 1;

        if (this.counter >= this.max) {
            console.log("done!");
        }
    }

    maxReached(): boolean {
        return this.counter >= this.max;
    }
}

var counter = new Counter(3);
do {
    counter.increment();
} while (!counter.maxReached());
