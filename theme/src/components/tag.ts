import { ComponentStyle, mode, isDefaultColor } from '@yamada-ui/styled'
import { transparentizeColor, toneColor, getColor } from '@yamada-ui/utils'

export const Tag: ComponentStyle = {
  baseStyle: {
    container: {
      outline: 0,
      fontWeight: 'medium',
      lineHeight: 1.2,
      borderRadius: 'md',
      _focusVisible: {
        boxShadow: 'outline',
      },
    },
    label: {
      lineHeight: 1.8,
      overflow: 'visible',
    },
    closeButton: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
      borderRadius: 'full',
      opacity: 0.5,
      _disabled: {
        opacity: 0.4,
      },
      _focusVisible: {
        boxShadow: 'outline',
        bg: 'rgba(0, 0, 0, 0.14)',
      },
      _hover: {
        opacity: 0.8,
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
      },
      _active: {
        opacity: 1,
      },
    },
  },

  sizes: {
    sm: {
      container: { minH: '5', minW: '5', fontSize: 'xs', px: '2' },
    },
    md: {
      container: { minH: '6', minW: '6', fontSize: 'sm', px: '2' },
    },
    lg: {
      container: { minH: '8', minW: '8', fontSize: 'md', px: '3' },
    },
  },

  variants: {
    solid: {
      container: ({ theme: t, colorScheme: c = 'gray' }) => ({
        bg: isDefaultColor(
          [toneColor(c, 500)(t), transparentizeColor(toneColor(c, 500)(t), 0.6)(t)],
          [`${c}.500`, transparentizeColor(`${c}.500`, 0.6)(t)],
        )(c),
        color: [`white`, `whiteAlpha.800`],
      }),
    },
    subtle: {
      container: ({ theme: t, colorScheme: c = 'gray' }) => ({
        bg: isDefaultColor(
          [toneColor(c, 100)(t), transparentizeColor(toneColor(c, 200)(t), 0.16)(t)],
          [`${c}.100`, transparentizeColor(`${c}.200`, 0.16)(t)],
        )(c),
        color: isDefaultColor(
          [toneColor(c, 800)(t), toneColor(c, 200)(t)],
          [`${c}.800`, `${c}.200`],
        )(c),
      }),
    },
    outline: {
      container: ({ theme: t, colorScheme: c = 'gray', scheme: s }) => {
        const color = isDefaultColor(
          mode(toneColor(c, 500)(t), transparentizeColor(toneColor(c, 200)(t), 0.8)(t))(s),
          mode(getColor(t, `${c}.500`), transparentizeColor(`${c}.200`, 0.8)(t))(s),
        )(c)

        return {
          color,
          boxShadow: `inset 0 0 0px 1px ${color}`,
        }
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'subtle',
    colorScheme: 'gray',
  },
}
