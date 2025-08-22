import { d as defineEventHandler, b as getQuery } from '../../_/nitro.mjs';
import { s as serverSupabaseClient } from '../../_/serverSupabaseClient.mjs';
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

const index = defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const from = getQuery(event).from;
  const to = getQuery(event).to;
  const { data, count } = await client.from("reviews").select("*", { count: "exact" }).range(parseInt(from), parseInt(to)).order("created_at", { ascending: false });
  return {
    reviews: {
      data,
      count
    }
  };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
