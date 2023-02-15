import { sanityClient } from "../../sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
    pageInfo: PageInfo
}
const query = groq`
    *[_type == "pageInfo"][0]
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const pageInfo: PageInfo = await sanityClient.fetch(query) 

    res.status(200).json({ pageInfo })
  }