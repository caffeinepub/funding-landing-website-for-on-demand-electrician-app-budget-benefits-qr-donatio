# ElectroBeez Deployment Troubleshooting Guide

## Quick Deployment Verification

After each deployment, verify the build was updated:

1. **Open browser console** on the deployed site
2. **Look for the build marker log**: `[ElectroBeez Build] ID: ${REDEPLOY_MARKER.buildId} | Timestamp: ${REDEPLOY_MARKER.timestamp}`
3. **Verify the logged values exactly match** the values in `frontend/src/redeployMarker.ts`:
   - The `buildId` in the console log should match `REDEPLOY_MARKER.buildId`
   - The `timestamp` in the console log should match `REDEPLOY_MARKER.timestamp`
4. If the values match, the new bundle is successfully deployed live

## Force Fresh Deployment

If you suspect cached builds, the deployment system uses a marker file to force fresh builds:

### How It Works
- `frontend/src/redeployMarker.ts` exports a `REDEPLOY_MARKER` object with `timestamp` and `buildId`
- `frontend/src/App.tsx` imports and logs this marker using `console.info` for production visibility
- Changing these values changes the bundle hash, forcing a fresh deployment

### Manual Force-Redeploy Steps
1. Edit `frontend/src/redeployMarker.ts`
2. Update `timestamp` to current ISO timestamp
3. Increment `buildId` version number (e.g., `v10` → `v11`)
4. Commit and trigger deployment
5. After deployment completes, open the deployed site and check the browser console for the exact line: `[ElectroBeez Build] ID: ... | Timestamp: ...`
6. Verify the console log's `buildId` and `timestamp` exactly match the updated values in `frontend/src/redeployMarker.ts`

## Common Deployment Issues

### Issue: "Deployment ran into an issue" (Generic Error)

**Capture Full Logs:**
