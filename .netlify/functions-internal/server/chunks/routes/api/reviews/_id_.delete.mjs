import { d as defineEventHandler, a as getRouterParam, c as createError } from '../../../_/nitro.mjs';
import { s as serverSupabaseClient } from '../../../_/serverSupabaseClient.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import '@supabase/ssr';

const _id__delete = defineEventHandler(async (event) => {
  try {
    const client = await serverSupabaseClient(event);
    const id = getRouterParam(event, "id");
    const { error } = await client.from("reviews").delete().eq("id", id);
    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: error.message
      });
    }
    return { success: true, message: "Review deleted successfully" };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to delete review"
    });
  }
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
