import React, { ElementType } from 'react'
import '@testing-library/jest-dom'

import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button, ButtonProps } from '.'
import { faker } from '@faker-js/faker'

const clickEvent = vi.fn()

function renderComponent(props?: ButtonProps<ElementType>) {
  return render(<Button {...props} />)
}

describe('<Button />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the component', () => {
    renderComponent({
      children: 'children',
    })

    expect(
      screen.getByRole('button', { name: /children/i })
    ).toBeInTheDocument()
  })

  it('should render with default variant and size', () => {
    renderComponent()

    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-brand-primary')
    expect(button).toHaveClass('w-[200px]')
  })

  it('should render the correct children', () => {
    const fakeChildren = faker.lorem.words(2)
    renderComponent({
      children: fakeChildren,
    })

    expect(screen.getByText(fakeChildren)).toBeInTheDocument()
  })

  it('should render with primary variant', () => {
    renderComponent({ variant: 'primary' })

    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-brand-primary')
  })

  it('should render with neutral variant', () => {
    renderComponent({ variant: 'neutral' })

    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-white')
  })

  it('should render with outline variant', () => {
    renderComponent({ variant: 'outline' })

    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-transparent')
  })

  it('should render with base size', () => {
    renderComponent({ size: 'base' })

    const button = screen.getByRole('button')

    expect(button).toHaveClass('w-[200px]')
  })

  it('should render with full size', () => {
    renderComponent({ size: 'full' })

    const button = screen.getByRole('button')

    expect(button).toHaveClass('w-full')
  })

  it('should render with fit size', () => {
    renderComponent({ size: 'fit' })

    const button = screen.getByRole('button')

    expect(button).toHaveClass('w-fit')
  })

  it('should perform action on click', async () => {
    renderComponent({ onClick: clickEvent })
    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(clickEvent).toBeCalledTimes(1)

    await userEvent.click(button)
    await userEvent.click(button)
    expect(clickEvent).toBeCalledTimes(3)
  })

  it('should be disabled', () => {
    renderComponent({ disabled: true })

    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })

  it('should not allow clickEvent on disabled button', async () => {
    renderComponent({
      onClick: clickEvent,
      disabled: true,
    })

    const button = screen.getByRole('button')

    await userEvent.click(button)

    expect(clickEvent).toBeCalledTimes(0)
  })

  it('should render link variant', () => {
    renderComponent({
      href: 'https://www.google.com',
      as: 'a',
      variant: 'link',
    })

    const button = screen.getByRole('link')

    expect(button).toHaveClass(
      'grid h-10 place-items-center truncate rounded-md text-base font-bold transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:pointer-events-none disabled:opacity-30 sm:min-w-[220px] text-brand-accent hover:text-brand-accent-hover hover:underline active:text-brand-accent-hover w-[200px]'
    )
  })

  it('should render link with link prop as a tag', () => {
    renderComponent({
      href: 'https://www.google.com',
      as: 'a',
    })

    const button = screen.getByRole('link')

    expect(button).toBeInTheDocument()
  })

  it('should render href when component is a anchor tag', () => {
    renderComponent({
      href: 'https://www.google.com',
      as: 'a',
    })

    const button = screen.getByRole('link')

    expect(button).toHaveAttribute('href', 'https://www.google.com')
  })

  it('should receive a custom component as a tag', () => {
    /*Using article html tag just because it has implicit role
By doing this I avoid to mock any other component
but still testing the component with a custom tag
*/
    renderComponent({
      as: 'article',
    })

    const button = screen.getByRole('article')

    expect(button).toBeInTheDocument()
  })
})
