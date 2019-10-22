import trimText from './trimText';

describe('Testing text trim', () => {
    it('Should return as is', () => {
        const text = 'short text';
        const trimmedText = trimText(text, text.length);
        expect(trimmedText).toEqual(text);
    });

    it('Should return with ...', () => {
        const text = 'mississippi';
        const trimmedText = trimText(text, 5);
        expect(trimmedText).toEqual('missi...');
    });

    it('Should be shorter than length and return as is', () => {
        const text = 'mississippi';
        const trimmedText = trimText(text, 100);
        expect(trimmedText).toEqual('mississippi');
    });

    it('Should return with ... and last char missing', () => {
        const text = 'mississippi';
        const trimmedText = trimText(text, 10);
        expect(trimmedText).toEqual('mississipp...');
    });

    it('Should return with ... and last 2 chars missing', () => {
        const text = 'mississippi';
        const trimmedText = trimText(text, 9);
        expect(trimmedText).toEqual('mississip...');
    });
});