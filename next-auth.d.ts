import { UserRole } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";
import build from "next/dist/build";

declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}
