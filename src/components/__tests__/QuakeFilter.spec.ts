import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import QuakeFilter from '../QuakeFilter.vue';

describe('QuakeFilter', () => {
  it('renders properly', () => {
    const wrapper = mount(QuakeFilter);
    const minMagInput = wrapper.find('input[data-test="min-magnitude"]');
    const maxMagInput = wrapper.find('input[data-test="max-magnitude"]');

    expect(minMagInput.exists()).toBe(true);
    expect(maxMagInput.exists()).toBe(true);
  });

  it('emits an event when the min magnitude input changes', async () => {
    const wrapper = mount(QuakeFilter);
    const minMagInput = wrapper.find('input[data-test="min-magnitude"]');

    await minMagInput.setValue(2.5);

    expect(wrapper.emitted('update:min-magnitude')).toBeTruthy();
    expect(wrapper.emitted('update:min-magnitude')![0]).toEqual([2.5]);
  });

  it('emits an event when the max magnitude input changes', async () => {
    const wrapper = mount(QuakeFilter);
    const maxMagInput = wrapper.find('input[data-test="max-magnitude"]');

    await maxMagInput.setValue(7.8);

    expect(wrapper.emitted('update:max-magnitude')).toBeTruthy();
    expect(wrapper.emitted('update:max-magnitude')![0]).toEqual([7.8]);
  });
});
