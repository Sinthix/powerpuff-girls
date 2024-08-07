import { shallowMount } from '@vue/test-utils';
import ShowDetail from '../src/components/ShowDetail.vue';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    show: {
      id: 1,
      name: 'Test Show',
      image: { original: 'https://via.placeholder.com/210x295' },
      description: '<p>Test description</p>',
    },
  },
  actions: {
    fetchShow: jest.fn(),
  },
});

describe('ShowDetail.vue', () => {
  it('matches the snapshot', async () => {
    const wrapper = shallowMount(ShowDetail, {
      global: {
        plugins: [store],
      },
    });

    await wrapper.vm.$nextTick(); // Wait for the component to update

    expect(wrapper.html()).toMatchSnapshot();
  });
});
