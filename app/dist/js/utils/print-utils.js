export class PrintUtils {
    static print(...args) {
        args.forEach((object) => {
            object.toString();
        });
    }
}
