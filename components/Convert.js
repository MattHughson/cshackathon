import Home from "./index"; 
import { render } from '@react-email/render';

const html = render(<Home />, {
  pretty: true,
});

console.log(html);