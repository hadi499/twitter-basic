import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Rightbar from "@/components/Rightbar";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen mx-auto ">
        <Sidebar />
        <Feed />
        <Rightbar />
      </main>
    </div>
  );
}
