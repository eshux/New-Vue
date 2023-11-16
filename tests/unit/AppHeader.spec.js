import AppHeader from '@/components/AppHeader.vue';
import { mount } from '@vue/test-utils';

describe('AppHeader', () => {
  test('If user is not logged in, do not show the logout button', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible(true)).toBe(false);
  });

  test('If user is logged in, show the logout button', async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });

    // Await DOM updates after data obj has been changed
    await wrapper.vm.$nextTick;
    expect(wrapper.find('button').isVisible(true)).toBe(true);
  });
});
