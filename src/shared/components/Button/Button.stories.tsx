import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './'
import { Icon } from '@iconify/react'

const ButtonMeta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description:
        'The display content of the Button. Preferably text but can also be an icon or any other element.',
      control: 'text',
    },
    variant: {
      description:
        'The variant color of the Button. Variants are: `primary`, `neutral`, `link`,  and `outline`. Default value is `primary`.',
      control: 'radio',
      options: ['primary', 'neutral', 'outline', 'link'],
      defaultValue: 'primary',
    },
    size: {
      description:
        'The size of the Button. Sizes are: `base`, `full` and `fit`. Default value is `base`. Recommended to use `full` for buttons that are used as block elements. Use fit for buttons that are used in a flex container. Base is the default size of 200px.',
      control: 'radio',
      options: ['base', 'full', 'fit'],
      defaultValue: 'base',
    },
    disabled: {
      description: 'The disabled state of the Button component.',
      control: 'boolean',
      defaultValue: false,
    },
    isLoading: {
      description: 'The loading state of the Button component.',
      control: 'boolean',
      defaultValue: false,
    },
    onClick: {
      action: 'clicked',
      description: 'The function to call when the button is clicked.',
    },
    className: {
      control: 'inactive',
      description:
        'The CSS class name to apply to the component and extend styles. Recommended for advanced use cases. Tailwind classes are supported.',
    },
  },
  args: {
    children: 'Button',
    isLoading: false,
    disabled: false,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
      description: {
        component: `The Button component is a reusable component that renders a button element.
        The Button component offers three style variants: "primary", "neutral", and "outline".
        The default variant is "primary". The size of the button can be set to "base", "full", or "fit", with "base" being the default size.
        This component is suitable for creating various interactive elements such as navigation menus, action buttons, or any other scenario where a button is required.
        It provides flexibility and extensibility by allowing you to customize its appearance and behavior according to your specific needs.
        `,
      },
    },
  },
}

export default ButtonMeta

type ButtonStory = StoryObj<typeof Button>

/**
 * A Regular use case of the Button component.
 */

export const Default: ButtonStory = {
  args: {},
}

/**
 * Primary use case of the Button component.
 */

export const Primary: ButtonStory = {
  args: {
    variant: 'primary',
  },
}

/**
 * Primary loading use case of the Button component.
 */

export const PrimaryLoading: ButtonStory = {
  args: {
    variant: 'primary',
    isLoading: true,
  },
}

/**
 * Primary disabled use case of the Button component.
 */

export const PrimaryDisabled: ButtonStory = {
  args: {
    variant: 'primary',
    disabled: true,
  },
}

/**
 * Neutral use case of the Button component.
 */

export const Neutral: ButtonStory = {
  args: {
    variant: 'neutral',
  },
}

/**
 *  Neutral loading use case of the Button component.
 */

export const NeutralLoading: ButtonStory = {
  args: {
    variant: 'neutral',
    isLoading: true,
  },
}

/**
 * Neutral disabled use case of the Button component.
 */

export const NeutralDisabled: ButtonStory = {
  args: {
    variant: 'neutral',
    disabled: true,
  },
}

/**
 * Outline use case of the Button component.
 */

export const Outline: ButtonStory = {
  args: {
    variant: 'outline',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

/**
 * Outline loading use case of the Button component.
 */

export const OutlineLoading: ButtonStory = {
  args: {
    variant: 'outline',
    isLoading: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

/**
 * Outline disabled use case of the Button component.
 */

export const OutlineDisabled: ButtonStory = {
  args: {
    variant: 'outline',
    disabled: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

/**
 * Full size use case of the Button component.
 */

export const FullSize: ButtonStory = {
  args: {
    size: 'full',
  },
}

/**
 * Fit size use case of the Button component when content is short.
 */

export const FitSizeSmall: ButtonStory = {
  args: {
    size: 'fit',
  },
}

/**
 * Fit size use case of the Button component when content is long.
 */

export const FitSizeLarge: ButtonStory = {
  args: {
    size: 'fit',
    children: 'Button with a very long text content to be displayed',
  },
}

/**
 * Display a Icon as label in the Button component.
 */

export const WithIcon: ButtonStory = {
  args: {
    children: <Icon icon="brandico:twitter-bird" className="text-2xl" />,
    size: 'fit',
    variant: 'outline',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

/**
 * Link Variant use case of the Button component.
 */

export const Link: ButtonStory = {
  args: {
    variant: 'link',
  },
}
