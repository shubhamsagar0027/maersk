import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import analytics from "./images/analytics.png";

const { Meta } = Card;

const cardsData = [
  {
    title: "Maximize the long-term value of your customers",
    description: "Upload your data to estimate the lifetime value of your customers, helping you strategize retention and marketing efforts for higher profitability.",
    image: analytics,
    route: "/long-term-value",
  },
  {
    title: "Understand and reduce customer attrition",
    description: "Upload your customer data to calculate churn rates and identify factors contributing to customer loss, enabling you to take proactive measures.",
    image: analytics,
    route: "/customer-attrition",
  },
  {
    title: "Optimize your marketing budget for maximum impact",
    description: "Upload your data to evaluate the effectiveness of various marketing channels and tactics and discover the best combination to achieve your goals.",
    image: analytics,
    route: "/marketing-budget",
  },
  {
    title: "Identify and prioritize your most promising leads",
    description: "Upload your dataset to analyze and score leads based on their likelihood to convert, helping you focus on the prospects that matter most.",
    image: analytics,
    route: "/promising-leads",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-heading">Drive Growth with Strategic Insights</div>
      <div className="dashboard-row">
        {cardsData.map((card) => (
          <Card
            hoverable
            cover={<img alt={card.title} src={card.image} />}
            onClick={() => handleCardClick(card.route)}
            className="dashboard-card"
            key={card.title}
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
