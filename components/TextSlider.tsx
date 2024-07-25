import { client } from "@/lib/sanity";
import EmptySlider from "./EmptySlider";
import { landingBlock } from "@/lib/interface";
export const revalidate = 0; // revalidate at most 0 seconds
async function getData() {
  const query = `
    *[_type == 'landing']{
  welcomeText1,
    welcomeText2,
    welcomeText3,
    headLine1,
    headLine2,
    headLine3,
    subHeadLine1,
    subHeadLine2,
    subHeadLine3,
    infoText1,
    infoText2,
    infoText3
}[0]
    `;
  const data = await client.fetch(query);
  return data;
}

const TextSlider = async () => {
  const data: landingBlock = await getData();
  return (
    <div className=" relative z-20">
      {data && (
        <EmptySlider
          welcomeText1={data.welcomeText1}
          welcomeText2={data.welcomeText2}
          welcomeText3={data.welcomeText3}
          headLine1={data.headLine1}
          headLine2={data.headLine2}
          headLine3={data.headLine3}
          subHeadLine1={data.subHeadLine1}
          subHeadLine2={data.subHeadLine2}
          subHeadLine3={data.subHeadLine3}
          infoText1={data.infoText1}
          infoText2={data.infoText2}
          infoText3={data.infoText3}
        />
      )}
    </div>
  );
};

export default TextSlider;
