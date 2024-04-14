import { renderHook } from '@testing-library/react'
import { useRedirectTimeout } from './useRedirectTimeout'

describe('useRedirectTimeout', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  it('should redirect after the specified timeout', async () => {
    const redirectPath = '/redirect'
    const timeout = 1000
    const redirectFn = vi.fn()

    renderHook(() => useRedirectTimeout(timeout, redirectPath, redirectFn))

    vi.advanceTimersByTime(1000)

    expect(redirectFn).toBeCalled()
  })
})
