# Specification

## Summary
**Goal:** Publish the latest frontend build live by forcing a fresh production redeploy and verifying the deployed build matches the new marker values.

**Planned changes:**
- Update `frontend/src/redeployMarker.ts` to set `REDEPLOY_MARKER.timestamp` to the current ISO-8601 timestamp.
- Increment the `REDEPLOY_MARKER.buildId` version suffix (e.g., v10 → v11) while keeping the existing `production-publish-v{N}-YYYYMMDD` style.
- Publish/redeploy the frontend and verify in the deployed site’s browser console that the `[ElectroBeez Build]` log line reflects the updated `buildId` and `timestamp`.

**User-visible outcome:** The production site is redeployed with a new build hash, and the browser console confirms the live build ID and timestamp match the updated redeploy marker.
