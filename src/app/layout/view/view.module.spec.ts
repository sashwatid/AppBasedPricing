import { viewModule } from './view.module';

describe('viewModule', () => {
    let viewModule: viewModule;

    beforeEach(() => {
        viewModule = new viewModule();
    });

    it('should create an instance', () => {
        expect(viewModule).toBeTruthy();
    });
});
