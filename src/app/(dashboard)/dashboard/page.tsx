import { getUserSession } from "@/helpers/getUserSession";
import Image from "next/image";

const DashboardHomePage = async () => {


  const session = await getUserSession()
  // console.log(session);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">

      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome  {session?.user?.name}</h1>
      <p className="text-lg text-gray-600">This is your dashboard home page email : {session?.user?.email}.</p>
      <Image
        src={session?.user?.image || '/default-profile.png'}
        alt={`${session?.user?.name ?? 'User'} profile`}
        width={120}
        height={120}
        className="rounded-full mt-6 shadow-md"
        priority
      />
    </div>
  );
};

export default DashboardHomePage;
