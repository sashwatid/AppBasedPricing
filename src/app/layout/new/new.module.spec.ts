import { newModule } from './new.module';

describe('newModule', () => {
    let newModule: newModule;

    beforeEach(() => {
        newModule = new newModule();
    });

    it('should create an instance', () => {
        expect(newModule).toBeTruthy();
    });
});
