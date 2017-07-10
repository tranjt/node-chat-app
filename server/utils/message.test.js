const expect = require("expect");

const { generateMessage } = require("./message");

describe("generateMessage", () => {
    it("should generate the correct message object", () => {
        const from = "test";
        const text = "test text"
        const message = generateMessage(from, text);

        expect(message.from).toBe("test");
        expect(message.text).toBe("test text");
        expect(message.createdAt).toBeA("number");
        expect(message).toInclude({from, text});
    });
});