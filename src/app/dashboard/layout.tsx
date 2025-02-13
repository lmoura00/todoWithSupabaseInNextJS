import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({children}:{children:ReactNode}) => {
  const supabase = createClient()
  const {data:user} = await supabase.auth.getUser()
  if(!user){
    redirect('/login')
  }
  return ( 
    <>
    {children}
    </>
   );
}
 
export default DashboardLayout;