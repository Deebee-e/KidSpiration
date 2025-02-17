'use client';
import { Card } from "@/components/card";
import Image from "next/image";

const ourServices = [
  {
    title: "Data Collection & Reporting",
    description:
      "Seamlessly log investigative data on project costs, involved parties, ethical concerns, and project locations, ensuring every critical detail is captured and searchable.",
    icon: "/img/icons/service/s1.svg",
  },
  {
    title: "Impact Tracking",
    description:
      "Directly link impact stories to original investigative reports, with a simple rating system to assess how much change each story has driven.",
    icon: "/img/icons/service/s2.svg",
  },
  {
    title: "User-Friendly Features",
    description:
      "With tooltips, intuitive forms, and fields for beneficial owners, shareholders, and project sponsors, INRID makes data entry precise and efficient.",
    icon: "/img/icons/service/s3.svg",
  },
  {
    title: "Admin Control",
    description:
      "The Super Admin dashboard offers advanced privileges for approvals, entry management, and comprehensive oversight.",
    icon: "/img/icons/service/s3.svg",
  },
];

export function About() {
  return (
    <section id="features">
      <div className="container my-24 text-center mx-auto px-10 md:px-12 space-y-5">
        <h2 className="text-2xl md:heading3 font-bold text-[#044479]">
          Shipped with powerful features
        </h2>
        <p className="px-2 lg:px-52 md:px-8 md:text-2xl text-xl text-gray-500">
        The INRID platform is designed to streamline investigative reporting and track the real-world impact of your stories—all in one place. Here’s how it empowers investigative teams.
        </p>
        <div className="px-2 lg:px-32 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-7 py-4 md:py-10">
          {ourServices.map((service, idx) => (
            <Card
              key={idx}
              className="p-5 my-2 md:my-0 space-y-2 border-none shadow-sm bg-white hover:shadow-xl"
            >
              <div className="flex flex-col space-x-3 space-y-6 items-center">
                <div className="flex items-center justify-center h-20 w-20">
                  <Image
                    src={service.icon}
                    alt="ourservice icon"
                    height={70}
                    width={70}
                  />
                </div>

                <h2 className="md:text-3xl text-2xl md:font-bold">{service.title}</h2>
              </div>
              <div>
                <p className="text-xl mt-4 text-gray-500">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
        </div>
        {/* <div className="mt-16 justify-center">
            <img 
              src={`/img/explore-video.png`}
              alt="ourservice icon"
              width="auto"
              height="auto"
            />
        </div> */}
      </div>
    </section>
  );
}
