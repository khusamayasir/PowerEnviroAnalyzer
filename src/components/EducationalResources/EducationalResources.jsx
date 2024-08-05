import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Row } from "reactstrap";
import HeadingTag from "../HeadingTag";

function EducationalResourcesComponent() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    const apiKey = "38cae5d1-cad8-4e7a-bc03-10b2b8720544";
    const keyword =
      "environment air pollution air quality global warming climate change";
    const url = `https://content.guardianapis.com/search?q=${encodeURIComponent(
      keyword
    )}&api-key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        console.log("Fetched articles:", response.data.response.results);

        const firstThreeArticles = response.data.response.results.slice(0, 12);
        setArticles(firstThreeArticles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  const tileStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxHeight: "calc(90vh - 0px)", // Adjust the max height as needed
    overflowY: "auto", // Enable vertical scrollbar
  };

  const tileItemStyle = {
    flex: "0 0 calc(33.33% - 20px)",
    backgroundColor: "#ffffff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    display: "block",
  };

  return (
    <div className="content">
      <Row>
        <Col lg="12">
          <HeadingTag heading="Educational Resources" />
        </Col>
      </Row>
      <div style={tileStyle}>
        {articles.map((article, index) => (
          <div key={index} style={tileItemStyle}>
            <h5 className="mb-3 cardtext flex-1">{article.webTitle}</h5>
            <Button
              color="success"
              style={{ fontSize: 12 }}
              onClick={() => window.open(article.webUrl, "_blank")}
            >
              Read Article
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationalResourcesComponent;
