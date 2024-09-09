import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import "./faqs.css";
export type TFaqs = {
  question: string;
  _id?: string;
  answer: string;
}[];



const Faqs = ({faqData:faqs}:{faqData:TFaqs}) => {
  const items: CollapseProps["items"] = faqs?.map((faq, i) => ({
    key: faq._id,
    label: `${i + 1}. ${faq.question}`,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <div className="my-2">
      <Collapse
        ghost
        expandIconPosition="end"
        bordered={false}
        items={items}
        style={{ background: "#222", color: "#fff", borderRadius: "50px" }}
        className="custom-collapse"
      />
    </div>
  );
};

export default Faqs;
