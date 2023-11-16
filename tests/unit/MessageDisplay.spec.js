import MessageDisplay from '@/components/MessageDisplay.vue';
import { mount } from '@vue/test-utils';
import { getMessage } from '@/services/axios';
import flushPromises from 'flush-promises';

// Mocking getMessage
jest.mock('@/services/axios');
// Clears all mock calls after each test
beforeEach(() => {
  jest.clearAllMocks();
});

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    const mockMessage = 'Hello from the db!';
    // Mock API call
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);
    // Wait for promise to resolve
    await flushPromises();
    // Check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    // Check that component displays message
    const message = wrapper.find('[data-testid="message"]').element.textContent;
    expect(message).toEqual(mockMessage);
  });

  it('Displays error when getMessage call fails', async () => {
    const mockErrorMessage = 'Oops! Something went wrong.';
    // Mock failed API call
    getMessage.mockRejectedValueOnce(mockErrorMessage);
    const wrapper = mount(MessageDisplay);
    // Wait for promise to resolve
    await flushPromises();
    // Check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    // Check that component displays error message
    const message = wrapper.find('[data-testid="message-error"]').element
      .textContent;
    expect(message).toEqual(mockErrorMessage);
  });
});
