import { shallowMount } from '@vue/test-utils';
import CowElement from '@/components/CowElement.vue';

describe('CowElement.vue', () => {
    const imageLink = 'link';
    const imageTitle = 'title';
    const votes = 0;
    const id = 'image1';
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(CowElement, {
            propsData: {
                imageLink,
                imageTitle,
                votes,
                id,
            },
        });
    });

    it('renders props.imageLink correctly when passed', () => {
        expect(wrapper.find('.c-card__img').attributes().src)
            .toBe('link');
    });

    it('renders props.imageTitle correctly when passed', () => {
        expect(wrapper.find('.c-card__img').attributes().alt)
            .toBe('title');

        expect(wrapper.find('.c-card__title').text())
            .toBe('title');
    });

    it('renders props.votes correctly when passed', () => {
        expect(wrapper.find('.c-card__votes').text())
            .toContain('0');
    });
});
