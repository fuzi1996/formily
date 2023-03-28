import { composeExport, transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import type { Input as ElInputProps } from 'element-ui'
import { Input as ElInput } from 'element-ui'

export type InputProps = ElInputProps

const TransformElInput = transformComponent<InputProps>(ElInput, {
  change: 'input',
})

const InnerInput = connect(
  TransformElInput,
  // readOnly 是 Field的属性
  // readonly 是 element-ui Input组件 的属性
  mapProps({ readOnly: 'readonly' }),
  mapReadPretty(PreviewText.Input)
)

const TextArea = connect(
  InnerInput,
  mapProps((props) => {
    return {
      ...props,
      type: 'textarea',
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export const Input = composeExport(InnerInput, {
  TextArea,
})

console.log('Input', Input)

export default Input
