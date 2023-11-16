import MessageContainer from '@/components/MessageContainer.vue';
import { mount } from '@vue/test-utils';

// Using stubs - mock child components
// E.g. when child has multiple dependencies that you don't need to mock, because you are only testing parent component
// Can also use shallowMount -- to only mouunt parent without child component ( not supported in some libraries)

describe('MessageContainer', () => {
  it('Wrap MessageDisplayContainer', async () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: {
          template: `<p data-testid="message">Hello from the db!</p>`
        }
      }
    });

    const message = wrapper.find('[data-testid="message"]').element.textContent;
    expect(message).toEqual('Hello from the db!');
  });
});
