// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { getSession } from "next-auth/react";

export default async function hello(req, res) {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
      data: session,
    });
  } else {
    res.send({
      error: "You must be sign in to view the protected content on this page.",
    });
  }
}
