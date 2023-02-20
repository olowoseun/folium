import { sanityClient } from "../../sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

type Data = {
    experiences: Experience[]
}
const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    } | order(startDate desc)
`

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experiences: Experience[] = await sanityClient.fetch(query) 

    res.status(200).json({ experiences })
  }