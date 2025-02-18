// blogData.js
export const blogPosts = [
  {
    id: "daidipper",
    title: "DaiDipper: Low-Cost Immunostaining Machine",
    date: "February 16, 2025",
    excerpt: "A collaboration with Africa Cancer Trust to develop an affordable automated immunostaining machine for cancer diagnostics in resource-limited settings.",
    image: "/daidipper/fuji4.jpg",
    category: "Medical Innovation",
    slug: "daidipper",
    content: {
      motivation: {
        title: "Motivation",
        text: [
          "Cancer incidence and mortality rates in Africa are increasing, in collaboration with Africa Cancer Trust (Registered Charity 1189665) we aimed to build a low-budget immunostaining machine to aid in cancer diagnostics; the DaiDipper.",
          "Automated staining machines have been around for a while however they have a hefty price tag. We hope by making a cheap accessible ease of use automated staining machine we could aid in cancer diagnostics in poorly funded labs."
        ]
      },
      properties: {
        title: "The Properties of the DaiDipper",
        items: [
          { title: "Cheap", text: "We aimed to have a total cost <£100" },
          { title: "Open-access", text: "All code and instructions to build on yourself will be published" },
          { title: "Accessible", text: "All components should be easily accessible" },
          { title: "Ease of use", text: "No expertise knowledge required" }
        ]
      },
      components: {
        title: "Components",
        text: "The first version of the DaiDipper was built using Arduino. It consists of;",
        tableData: [
          { component: "UNO R3", price: "£10", shop: "Banggood" },
          { component: "CNC Shield", price: "£4", shop: "Banggood" },
          { component: "A4988 Stepper Motor Drivers x2", price: "£2", shop: "Banggood" },
          { component: "Nema17 Stepper Motors x2", price: "£15", shop: "Banggood" },
          { component: "2004 LCD Smart Display Controller", price: "£14", shop: "Amazon" }
        ]
      }
    }
  },
  {
    id: "neuroshiny",
    title: "From Lockdown Blues to Brain Data Breakthroughs",
    date: "February 16, 2025",
    excerpt: "During lockdown, with no cells to look after in the lab, I created NeuroShiny - a tool to visualize and explore brain gene expression data across different developmental stages and regions.",
    image: "/img/neuroshiny/neuroshiny.png",
    category: "Bioinformatics",
    slug: "neuroshiny",
    content: {
      intro: "During lockdown, like many researchers, I found myself with a lot of time on my hands. With no cells to look after in the lab (they were probably missing me too! 🔬), I had to find something else to keep me busy.",
      conclusion: "What started as a lockdown project quickly became a powerful tool that I hope will help other researchers save time, explore data more efficiently, and maybe even spark new discoveries."
    }
  }
];