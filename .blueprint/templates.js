// component.tsx
exports.component = (name, props) => `import Styled from './styles'

${
  props
    ? `
interface Props {

}
`
    : ''
}
const ${name}: React.FC${props ? `<Props>` : ''} = (${
  props ? `props` : ''
}) => {
  return (
    <Styled.${name}>${name} component</Styled.${name}>
  );
};

export default ${name}
`

// component.stories.jsx
exports.story = (name, type, props) => {
  const typeArr = type.split('')
  const folder = [typeArr.splice(0, 1), ...typeArr].join('')

  return `import React from 'react'
import ${name} from '.'

export default {
  title: '${folder}/${name}',
  component: ${name},
}

export const Default = (${props ? 'args: any' : ''}) => <${name} ${
    props ? '{...args}' : ''
  } />
`
}

// component.test.tsx
exports.test = (name) => `import React from 'react'
import { render } from '@testing-library/react'
import ${name} from './${name}'

const props = {

}

describe('${name} Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<${name} {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
`

// styles.ts
exports.styles = (name) => `import styled from '@emotion/styled/macro'

const ${name} = styled.div\`
  display: block;
\`

const Styled = { ${name} }

export default Styled
`

// index.ts
exports.barrel = (name) => `import ${name} from './${name}'

export default ${name}
`
