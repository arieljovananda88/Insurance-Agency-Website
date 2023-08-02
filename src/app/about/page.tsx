import React from "react";
import "./about.css";
import styles from "../styles.module.css";

// import Image from "next/image";

// Import your employee data here (e.g., an array of objects containing employee information)

const AboutPage: React.FC = () => {
  // Replace these placeholder data with actual information
  const employeeBios = [
    {
      imgurl: "../About/Foto About.png",
      name: "John Doe",
      position: "CEO",
      bio: "John is a visionary leader with a passion for innovation...",
    },
    {
      imgurl: "/About/Group 40.png",
      name: "Jane Smith",
      position: "CTO",
      bio: "Jane is a tech enthusiast with expertise in cutting-edge technologies...",
    },
    {
      imgurl: "/About/Group 40.png",
      name: "Bob Johnson",
      position: "CFO",
      bio: "Bob is a financial expert with a proven track record of success...",
    },
    // Add more employees here
  ];

  return (
    <div>
      <div className="company-img" style={{ marginTop: "150px" }}>
        <img src="/About/Foto About.png" alt="About" />
      </div>
      <div className="company-description" style={{ padding: "10px" }}>
        <div className="blueText" style={{ bottom: "18vw" }}>
          <h1>Tentang Kami</h1>
        </div>
        <div className="Paragraph" style={{ bottom: "19vw" }}>
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          </p>
        </div>
      </div>
      <div className="company-principles" style={{ bottom: "12vw" }}>
        <h2 className="greyText">Siapa Kami</h2>
        <h1 className="blueText">Profil Kami</h1>
      </div>
      <div className="employee-bios" style={{ bottom: "20vw" }}>
        {employeeBios.map((employee, index) => (
          <div className="employee-bio" key={index}>
            <h2>{employee.name}</h2>
            <p>{employee.position}</p>
            <p>{employee.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
