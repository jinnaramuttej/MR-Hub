import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie } from "vinxi/http";

export const getUpvotes = createServerFn({ method: "GET" })
  .handler(async () => {
    // In a real app, this would come from a DB. 
    // For now, we'll use a mocked map or eventually KV/D1.
    return {
      "PulseGrid": 348,
      "ClinicOS": 271,
      "FleetMint": 219,
      "CampusLoop": 188,
      "AgriLens": 164,
      "HavenDesk": 141,
    };
  });

export const toggleUpvote = createServerFn({ method: "POST" })
  .validator((d: string) => d)
  .handler(async ({ data: startupName }) => {
    // Simple mock: we use cookies to track if a user has upvoted
    // This is purely for local "feeling" without a database setup yet.
    const upvotedStr = getCookie("upvoted_startups") || "";
    const upvoted = upvotedStr.split(",").filter(Boolean);
    
    let isUpvoted = false;
    let newUpvoted = [];
    
    if (upvoted.includes(startupName)) {
        newUpvoted = upvoted.filter(id => id !== startupName);
        isUpvoted = false;
    } else {
        newUpvoted = [...upvoted, startupName];
        isUpvoted = true;
    }
    
    setCookie("upvoted_startups", newUpvoted.join(","), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/"
    });

    return { success: true, isUpvoted };
  });
