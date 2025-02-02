import { ui, forwardRef, HTMLUIProps, CSSUIProps } from '@yamada-ui/system'

type FlexOptions = {
  direction?: CSSUIProps['flexDirection']
  justify?: CSSUIProps['justifyContent']
  align?: CSSUIProps['alignItems']
  wrap?: CSSUIProps['flexWrap']
  basis?: CSSUIProps['flexBasis']
  grow?: CSSUIProps['flexGrow']
  shrink?: CSSUIProps['flexShrink']
}

export type FlexProps = HTMLUIProps<'div'> & FlexOptions

export const Flex = forwardRef<FlexProps, 'div'>(
  (
    {
      direction: flexDirection,
      justify: justifyContent,
      align: alignItems,
      wrap: flexWrap,
      basis: flexBasis,
      grow: flexGrow,
      shrink: flexShrink,
      ...rest
    },
    ref,
  ) => {
    const css = {
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      flexBasis,
      flexGrow,
      flexShrink,
    }

    return <ui.div ref={ref} __css={css} {...rest} />
  },
)

export const Wrap = forwardRef<FlexProps, 'div'>((props, ref) => (
  <Flex ref={ref} wrap='wrap' {...props} />
))
