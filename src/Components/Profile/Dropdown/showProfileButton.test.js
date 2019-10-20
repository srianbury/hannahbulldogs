import showProfileButton from './showProfileButton';

describe('Testing show profile button', () => {
    it('should be false', () => {
        const show = showProfileButton('production', null);
        expect(show).toEqual(false);
    });

    it('should be false', () => {
        const show = showProfileButton('production', { user: 'name' });
        expect(show).toEqual(true);
    });

    it('should be false', () => {
        const show = showProfileButton('dev', null);
        expect(show).toEqual(true);
    });

    it('should be false', () => {
        const show = showProfileButton('dev', { user: 'name' });
        expect(show).toEqual(true);
    });
});