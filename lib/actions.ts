"use server";
import { authOptions } from "./authoptions";
import { getServerSession } from "next-auth";
import { Organization, Repo } from "./definitions";

export const fetchOrgsOfUser =
  async (): Promise<Array<Organization> | null> => {
    try {
      const session = await getServerSession(authOptions);
      if (session?.accessToken) {
        const response = await fetch("https://api.github.com/user/orgs", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
            Accept: "application/vnd.github.v3+json",
          },
        });
        const orgs = await response.json();
        return orgs;
      }
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

export const fetchReposOfOrg = async (
  orgName: string
): Promise<Array<Repo> | null> => {
  try {
    const session = await getServerSession(authOptions);
    const response = await fetch(
      `https://api.github.com/orgs/${orgName}/repos`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${session?.accessToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const repos = await response.json();
    return repos;
  } catch (e) {
    console.error(e);
    return null;
  }
};
