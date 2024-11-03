import { INTERNAL_PREFIX } from "../runtime/utils.ts";
import { BUILD_ID } from "./build_id.ts";

export const DEV_CLIENT_URL = `${INTERNAL_PREFIX}/fresh_dev_client.js`;
export const DEV_ERROR_OVERLAY_URL = `${INTERNAL_PREFIX}/error_overlay`;
export const ALIVE_URL = `${INTERNAL_PREFIX}/alive`;
export const JS_PREFIX = `/js`;
export const DEBUG = !Deno.env.get("DENO_DEPLOYMENT_ID");

export function bundleAssetUrl(path: string) {
  return `${INTERNAL_PREFIX}${JS_PREFIX}/${BUILD_ID}${path}`;
}
