import { createClient } from "@/utils/supabase/server";

export default async function DataPage() {
  const supabase = createClient();

  const { data: todos } = await (await supabase).from("bpxlinks").select();

  console.log("todos", todos);
  return <ul></ul>;
}
