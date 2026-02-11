import LandingPage from './components/landing/LandingPage';
import { REDEPLOY_MARKER } from './redeployMarker';

// Reference marker to ensure it's included in bundle
console.debug('Build:', REDEPLOY_MARKER.buildId);

function App() {
  return <LandingPage />;
}

export default App;
