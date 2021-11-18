import { serve } from "https://deno.land/x/sift@0.4.2/mod.ts";

const helloWorld = 321;

serve({
  "/": () => new Response("hello" + helloWorld),
});
