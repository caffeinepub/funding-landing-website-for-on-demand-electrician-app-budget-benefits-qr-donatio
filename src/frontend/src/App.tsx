import LandingPage from './components/landing/LandingPage';
import { REDEPLOY_MARKER } from './redeployMarker';

// Reference marker to ensure it's included in bundle
// Expanded log for deployment verification
console.info(
  `[ElectroBeez Build] ID: ${REDEPLOY_MARKER.buildId} | Timestamp: ${REDEPLOY_MARKER.timestamp}`
);

function App() {
  return <LandingPage />;
}

export default App;
