import { serve } from "https://deno.land/x/sift@0.4.2/mod.ts";

let hello_world = 123;

serve({
  "/": () => new Response("hello" + hello_world),
});
