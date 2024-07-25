import { aboutType } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import AboutTemplate from "./AboutTemplate";
export const revalidate = 0; // revalidate at most 0 seconds

async function getData() {
  const query = `
  *[_type == "about"]{
  title,
    description
}[0]
  `;
  const data = await client.fetch(query);
  return data;
}

const About = async () => {
  const data: aboutType = await getData();
  return (
    <div className=" w-full overflow-x-hidden py-10">
      {data && (
        <AboutTemplate title={data.title} description={data.description} />
      )}
    </div>
  );
};

export default About;
