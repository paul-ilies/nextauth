import { signOut } from "@/auth";

const Settings = async () => {
  return (
    <div className="bg-white p-10 rounded-xl">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default Settings;
