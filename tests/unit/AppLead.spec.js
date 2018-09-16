import { shallowMount } from '@vue/test-utils';
import AppLead from '@/components/AppLead.vue';

describe('AppLead.vue', () => {
    const title = 'Title';
    const lead = 'Lead';
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(AppLead, {
            propsData: {
                title,
                lead,
            },
        });
    });

    it('renders props.title correctly when passed', () => {
        expect(wrapper.find('.c-intro__title').text())
            .toBe('Title');
    });

    it('renders props.votes correctly when passed', () => {
        expect(wrapper.find('.c-intro__text').text())
            .toBe('Lead');
    });
});
