import {
  h,
  render
} from 'understated'

const Main = props => (
  <div class="container">{ props.text }</div>
)

render(
  <Main text="Hello, world."/>,
  document.body
)
