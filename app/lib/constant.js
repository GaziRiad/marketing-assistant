import { IoIosArrowDown, IoMdSend } from "react-icons/io";
import { IoDocumentsOutline, IoStar } from "react-icons/io5";
import { TbClockHour5 } from "react-icons/tb";

export const menuItemsContent = [
  { icon: <IoStar size={18} />, label: "Starred" },
  { icon: <TbClockHour5 size={18} />, label: "Snoozed" },
  { icon: <IoMdSend size={18} />, label: "Sent" },
  { icon: <IoDocumentsOutline size={18} />, label: "Drafts" },
  { icon: <IoIosArrowDown size={18} />, label: "More" },
];

export const HeroButtons = [
  { label: "Design templates", value: "WeeklyTemplates" },
  { label: "Fill-in captions", value: "FocusContent" },
  { label: "Marketing guides", value: "TeamAndServiceHighlight" },
];

export const WeeklyTemplatesImageSources = [
  { src: "/images/WeeklyTemplates1.png", alt: "Template 1" },
  { src: "/images/WeeklyTemplates2.png", alt: "Template 2" },
  { src: "/images/WeeklyTemplates3.png", alt: "Template 3" },
  { src: "/images/WeeklyTemplates4.png", alt: "Template 4" },
  { src: "/images/WeeklyTemplates5.png", alt: "Template 5" },
  { src: "/images/WeeklyTemplates6.png", alt: "Template 6" },
];

export const IndustryImageSources = [
  { src: "/images/Industry1.png", alt: "Template 1" },
  { src: "/images/Industry2.png", alt: "Template 2" },
  { src: "/images/Industry3.png", alt: "Template 3" },
  { src: "/images/Industry4.png", alt: "Template 4" },
  { src: "/images/Industry5.png", alt: "Template 5" },
];

export const WeeklyTemplatesbuttons = [
  { label: "GO TO CUSTOMIZE" },
  { label: "LEARN HOW TO CUSTOMIZE" },
  { label: "GET THEIR FILL-IN CAPTIONS" },
];

export const FocusContentFooterCaptions = [
  {
    content: `
      [Business name] started in [year] when [founder(s)] were searching for
      a way to [problem that your business solves]. Combining [pronouns] in
      [educational background/experience/passion] with [another educational
      background/experience/passion], [founder(s)] decided to take the leap
      and upon up [business name] in [city/town]. Today, we have grown to [#
      of locations, # of customers served, # of staff etc.], allowing us to
      [positive phrases related to industry e.g., bring smiles, dress up,
      decorate] all over [location]. [Book an appointment, call, visit our
      website, reserve a table] and join our story today!
    `,
  },
  {
    content: `
      At [Business name], we provide [product/service] for [adjective, e.g.,
      health-conscious, busy, stylish] [demographic descriptor e.g.,
      professionals, athletes, moms] at [a key selling point, e.g., higher
      quality, faster service, cheaper prices] without the [stress, hassle,
      inconvenience] of [common problem in your industry, e.g., multiple
      fees, long wait time, uncomfortable fit]. [Book an appointment, call,
      visit our website, reserve a table] and join [hundreds of, thousands
      of, all of our] happy customers today.
    `,
  },
  {
    content: `
      Spotlight on Innovation: Our Latest Creations! 🔹 Experience the
      Difference: Explore our newest [Product/Service Type] that's designed
      to [Unique Selling Point or Benefit]. 🔹 Why We Love It: [Briefly
      Describe What Makes Your Product/Service Special]. 🔹 Your Thoughts:
      We'd love to hear which one catches your eye! Drop a comment below 🛍️
      Ready to indulge? Visit [Your Website/Contact Link] for exclusive
      [Deals/ Product Category] and more.
    `,
  },
];
