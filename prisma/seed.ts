import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  // [...Array.from(Array(120).keys())].forEach(async (item, i) => {
  //   await client.post.create({
  //     data: {
  //       type: "Notice",
  //       title: `title ${i}`,
  //       content: `content ${i}`,
  //     },
  //   });
  // });
  // [...Array.from(Array(30).keys())].forEach(async (item, i) => {
  //   await client.course.create({
  //     data: {
  //       category: "SW",
  //       subcategory: "Basic",
  //       thumbnailURL:
  //         "https://archive.org/download/placeholder-image/placeholder-image.jpg",
  //       recruitmentPeriodId: 1,
  //       progressPeriodId: 2,
  //       title: `title ${i}`,
  //       content: `content ${i}`,
  //       linkURL: `https://docs.google.com/forms/d/1NBwVYmxnJ6n8ltwcrh96DEPqQxoN5Jd14mcXrLcX4qU/edit`,
  //     },
  //   });
  // });
}

main()
  .catch((e) => console.log(e))
  .finally(() => client.$disconnect);
