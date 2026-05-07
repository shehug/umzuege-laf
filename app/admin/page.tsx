import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/adminAuth";
import { readSiteContent } from "@/lib/siteContent";
import AdminContentEditor from "@/components/AdminContentEditor";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const session = verifyAdminToken(token);

  if (!session) {
    redirect("/admin/login");
  }

  const content = await readSiteContent();

  return (
    <main className="min-h-screen bg-[#f7f7f2] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <AdminContentEditor initialContent={content} />
      </div>
    </main>
  );
}
